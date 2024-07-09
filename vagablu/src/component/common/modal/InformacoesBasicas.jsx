import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, Modal, TextField, Typography} from '@mui/material';
import {styled} from '@mui/system';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
};

const StyledTextField = styled(TextField)`
    margin-bottom: 16px;
`;

const StyledGridItem = styled(Grid)`
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
`;

const InformacoesBasicas = ({open, onClose, initialValues, onSave}) => {
    const [formData, setFormData] = useState({
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
    });

    useEffect(() => {
        if (initialValues) {
            setFormData(initialValues);
        }
    }, [initialValues]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione a lógica para salvar os dados aqui
        console.log(formData);
        onSave(formData); // Chama a função onSave com os dados do formulário
        onClose();
    };


    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={modalStyle}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <StyledGridItem item xs={12}>
                            <Typography variant="h6" component="h3" gutterBottom>
                                Informações Básicas
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Nome"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="CPF"
                                        name="cpf"
                                        value={formData.cpf}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="CEP"
                                        name="cep"
                                        value={formData.cep}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Rua"
                                        name="rua"
                                        value={formData.rua}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Número"
                                        name="numero"
                                        value={formData.numero}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Bairro"
                                        name="bairro"
                                        value={formData.bairro}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Cidade"
                                        name="cidade"
                                        value={formData.cidade}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Estado"
                                        name="estado"
                                        value={formData.estado}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                        </StyledGridItem>
                        <StyledGridItem item xs={12}>
                            <Typography variant="h6" component="h3" gutterBottom>
                                Contato
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Celular"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField
                                        fullWidth
                                        label="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            </Grid>
                        </StyledGridItem>
                        <Grid item xs={12}>
                            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button type="submit" variant="contained" color="primary" sx={{mr: 2}}>
                                    Salvar
                                </Button>
                                <Button onClick={onClose} variant="contained" color="secondary">
                                    Cancelar
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Modal>
    );
};

export default InformacoesBasicas;
