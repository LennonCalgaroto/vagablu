import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {
    Button,
    Container,
    Grid,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const FormContainer = styled.div`
    flex-grow: 1;
    margin-bottom: 40px;
`;

const FormTitle = styled(Typography)``;

const StyledTextField = styled(TextField)``;

const StyledTableContainer = styled(TableContainer)`
    border-radius: 8px;
    overflow: hidden;
`;

const StyledPaper = styled(Paper)`
    border-radius: 8px;
`;

const StyledStatusCell = styled(TableCell)`
    padding: 8px;
`;

const StatusIndicator = styled.span`
    background-color: ${({status}) => {
        switch (status) {
            case 'Ativo':
                return 'green';
            case 'Inativo':
                return 'red';
            default:
                return 'transparent';
        }
    }};
    color: white;
    border-radius: 8px;
    padding: 4px 8px;
`;

const GenericSearch = ({title, data, searchField, columns, handleNew, handleEdit, handleDelete}) => {
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const handleSearchInputChange = (event) => {
        const inputValue = event.target.value.toLowerCase();
        const filtered = data.filter((item) =>
            item[searchField].toLowerCase().includes(inputValue)
        );
        setFilteredData(filtered);
    };

    return (
        <Grid item xs={8}>
            <FormTitle variant="h4">{title}</FormTitle>
            <FormContainer>
                <StyledTextField
                    label={`${title.toLowerCase()}`}
                    variant="outlined"
                    onChange={handleSearchInputChange}
                />
                <Button onClick={() => handleNew()} variant="contained" color="primary" sx={{mr: 2}}>
                    Criar usuário
                </Button>
                <StyledTableContainer>
                    <StyledPaper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell key={column.field}>{column.headerName}</TableCell>
                                    ))}
                                    <TableCell>Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredData.map((item) => (
                                    <TableRow key={item.id}>
                                        {columns.map((column) => (
                                            <TableCell key={column.field}>
                                                {column.renderCell ? column.renderCell(item[column.field]) : item[column.field]}
                                            </TableCell>
                                        ))}
                                        <TableCell>
                                            <IconButton onClick={() => handleEdit(item)}>
                                                <EditIcon/>
                                            </IconButton>
                                            <IconButton onClick={() => handleDelete(item.id)}>
                                                <DeleteIcon/>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </StyledPaper>
                </StyledTableContainer>
            </FormContainer>
        </Grid>
    );
};

export default GenericSearch;
