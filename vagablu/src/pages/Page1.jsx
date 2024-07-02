import React, { useState } from 'react';
import GenericSearch from '../component/common/GenericSearch.jsx';
import styled from 'styled-components';
import { TableCell, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InformacoesBasicas from '../component/common/modal/InformacoesBasicas.jsx';

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
  background-color: ${({ status }) => {
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

const customers = [
  { id: 1, name: 'Cliente 1', cpf: '123.456.789-00', phone: '123456789', email: 'cliente1@example.com', status: 'Ativo', cep: '12345-678', rua: 'Rua A', numero: '100', bairro: 'Bairro A', cidade: 'Cidade A', estado: 'Estado A' },
  { id: 2, name: 'Cliente 2', cpf: '987.654.321-00', phone: '987654321', email: 'cliente2@example.com', status: 'Inativo', cep: '87654-321', rua: 'Rua B', numero: '200', bairro: 'Bairro B', cidade: 'Cidade B', estado: 'Estado B' },
  { id: 3, name: 'Cliente 3', cpf: '111.222.333-44', phone: '111222333', email: 'cliente3@example.com', status: 'Ativo', cep: '54321-987', rua: 'Rua C', numero: '300', bairro: 'Bairro C', cidade: 'Cidade C', estado: 'Estado C' },
];

const Page1 = () => {
  const [open, setOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

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

    const handleEditCustomer = (customer) => {
    setSelectedCustomer(customer);
    setOpen(true);
  };

  const handleDeleteCustomer = (customerId) => {
    // Lógica para deletar o cliente
    console.log('Delete customer with id:', customerId);
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
      <IconButton onClick={() => handleEditCustomer(customer)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => handleDeleteCustomer(customer.id)}>
        <DeleteIcon />
      </IconButton>
    </TableCell>
  );

  const columns = [
    { field: 'name', headerName: 'Nome' },
    { field: 'phone', headerName: 'Telefone' },
    { field: 'status', headerName: 'Status', renderCell: renderStatusCell }
  ];

  return (
    <StyledGrid>
      <GenericSearch
        title="Buscar Cliente"
        data={customers}
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
      />
    </StyledGrid>
  );
};

export default Page1;
