import React, {useEffect, useState} from 'react';
import GenericSearch from '../component/common/GenericSearch.jsx';
import styled from 'styled-components';
import {IconButton, TableCell} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InformacoesBasicas from '../component/common/modal/InformacoesBasicas.jsx';
import {useUserService} from "../services/useUserService.js";

const StyledStatusCell = styled(TableCell)`
    padding: 8px;
    border-bottom: none;
`;
const StyledGrid = styled.div`
    width: calc(100% - 100px);
    height: calc(100vh - 140px);
    display: grid;
    margin-top: 80px;
    margin-right: 30px;
    margin-bottom: 60px;
    padding: 40px;
    box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
    border-radius: 16px;
    overflow: auto;
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

const Page1 = () => {
    const [open, setOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [users, setUsers] = useState([]);
    const {getAll, remove, update, create} = useUserService()

    useEffect(() => {
        getAllCustomers()
    }, []);

    async function getAllCustomers() {
        const users = await getAll();
        console.log(users);
        setUsers(users);
    }

    const handleNewCustomer = () => {
        const newCustomer = {
            name: '',
            cpf: '',
            phone: '',
            email: '',
            cep: '',
            rua: '',
            numero: '',
            bairro: '',
            cidade: '',
            estado: '',
        };
        setSelectedCustomer(newCustomer);
        setOpen(true);
    };

    const handleSaveCustomer = async (customer) => {
        if (customer.id) {
            console.log(customer.id);
            await update(customer.id, customer); // Chama a função update se houver um ID
        } else {
            await create(customer); // Chama a função create se não houver um ID
        }
        setSelectedCustomer(null);
        setOpen(false);
    };

    const handleEditCustomer = (customer) => {
        setSelectedCustomer(customer); // Define o cliente selecionado para edição
        setOpen(true); // Abre o modal de edição
    };

    const handleDeleteCustomer = async (customerId) => {
        await remove(customerId)
        await getAllCustomers()
    };

    const handleCloseModal = () => {
        setOpen(false);
        setSelectedCustomer(null);
    };

    const renderStatusCell = (status) => (
        <StyledStatusCell>
            <StatusIndicator status={status}>{status}</StatusIndicator>
        </StyledStatusCell>
    );

    const renderActionsCell = (customer) => (
        <TableCell>
            <IconButton onClick={() => handleEditCustomer(customer.id)}>
                <EditIcon/>
            </IconButton>
            <IconButton onClick={() => handleDeleteCustomer(customer.id)}>
                <DeleteIcon/>
            </IconButton>
        </TableCell>
    );

    const columns = [
        {field: 'name', headerName: 'Nome'},
        {field: 'phone', headerName: 'Telefone'},
        {field: 'cpf', headerName: 'CPF'},
        // {field: 'status', headerName: 'Status', renderCell: renderStatusCell}
    ];

    return (
        <StyledGrid>
            <GenericSearch
                title="Buscar Cliente"
                data={users}
                searchField="name"
                columns={columns}
                handleNew={handleNewCustomer}
                handleEdit={handleEditCustomer}
                handleDelete={handleDeleteCustomer}
            />
            <InformacoesBasicas
                open={open}
                onClose={handleCloseModal}
                initialValues={selectedCustomer}
                onSave={handleSaveCustomer}
            />
        </StyledGrid>
    );
};

export default Page1;
