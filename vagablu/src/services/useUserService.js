// import useLocalStorage from "../hooks/useLocalStorage.js";
import {sleep} from "../utils/sleep.js";
import {useLocalStorage} from "@uidotdev/usehooks";

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

    function create(newUser) {
        newUser.id = Date.now(); // Gera um ID baseado no timestamp atual
        setUsers(prevState => {
            return [...prevState, newUser];
        });
    }

    function update(id, newData) {
        console.log(id);
        setUsers(prevState => {
            return prevState.map(user => {
                if (user.id === id) {
                    return {...user, ...newData};
                } else {
                    return user;
                }
            });
        });
    }

    async function remove(id) {
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
