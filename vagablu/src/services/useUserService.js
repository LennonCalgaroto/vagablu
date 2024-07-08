import useLocalStorage from "../hooks/useLocalStorage.js";
import {sleep} from "../utils/sleep.js";

    // const customers = [
    //     { id: 1, name: 'Cliente 1', cpf: '123.456.789-00', phone: '123456789', email: 'cliente1@example.com', status: 'Ativo', cep: '12345-678', rua: 'Rua A', numero: '100', bairro: 'Bairro A', cidade: 'Cidade A', estado: 'Estado A' },
    //     { id: 2, name: 'Cliente 2', cpf: '987.654.321-00', phone: '987654321', email: 'cliente2@example.com', status: 'Inativo', cep: '87654-321', rua: 'Rua B', numero: '200', bairro: 'Bairro B', cidade: 'Cidade B', estado: 'Estado B' },
    //     { id: 3, name: 'Cliente 3', cpf: '111.222.333-44', phone: '111222333', email: 'cliente3@example.com', status: 'Ativo', cep: '54321-987', rua: 'Rua C', numero: '300', bairro: 'Bairro C', cidade: 'Cidade C', estado: 'Estado C' },
    // ];

// const customers = [
//     { id: 1, name: 'Lennon', cpf: '123.456.789-00', phone: '123456789', email: 'cliente1@example.com', status: 'Ativo', cep: '12345-678', rua: 'Rua A', numero: '100', bairro: 'Bairro A', cidade: 'Cidade A', estado: 'Estado A' },
//     { id: 2, name: 'David', cpf: '987.654.321-00', phone: '987654321', email: 'cliente2@example.com', status: 'Inativo', cep: '87654-321', rua: 'Rua B', numero: '200', bairro: 'Bairro B', cidade: 'Cidade B', estado: 'Estado B' },
//     { id: 3, name: 'Tiago', cpf: '111.222.333-44', phone: '111222333', email: 'cliente3@example.com', status: 'Ativo', cep: '54321-987', rua: 'Rua C', numero: '300', bairro: 'Bairro C', cidade: 'Cidade C', estado: 'Estado C' },
// ];

export const useUserService = () => {
    const [users, setUsers] = useLocalStorage("users", []);

   async function getAll() {
       await sleep(700)
       return users;
    }

    function getById(id) {
        const user = users.find((user) => user.id === id);

        return user;
    }

    function create (newUser) {
        setUsers(prevState => {
            return [
                ...prevState,
                newUser
            ]
        })
    }

    function update(id, data) {
        setUsers(prevState => {
            return prevState.map(user => {
                return user.id === id
                    ? data
                    : user
            })
        })
    }

   async function remove(id){
        setUsers(prevState => {
            return prevState.filter(user => user.id !== id)
        })
        await sleep(1500);
    }

    return {
        getAll,
        getById,
        create,
        update,
        remove,
    }
}
