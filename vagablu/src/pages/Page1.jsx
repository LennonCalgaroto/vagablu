const Page1 = () => {
    const [open, setOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [users, setUsers] = useState([]);
    const {getAll, remove, create, update} = useUserService();

    useEffect(() => {
        getAllCustomers();
    }, []);

    async function getAllCustomers() {
        const users = await getAll();
        setUsers(users);
    }

    const handleNewCustomer = () => {
        const newCustomer = {
            id: Date.now(),  // A unique id for the new customer
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

    const handleDeleteCustomer = async (customerId) => {
        await remove(customerId);
        await getAllCustomers();
    };

    const handleSaveCustomer = async (customer) => {
        if (selectedCustomer.id) {
            await update(selectedCustomer.id, customer);
        } else {
            await create(customer);
        }
        await getAllCustomers();
        setOpen(false);
        setSelectedCustomer(null);
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
        { field: 'cpf', headerName: 'CPF' },
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
                onSave={handleSaveCustomer}  // Pass the save function to the modal
            />
        </StyledGrid>
    );
};

export default Page1;
