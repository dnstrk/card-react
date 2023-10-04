import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import UserService from "./API/UserService";
import Loader from "./components/UI/Loader/Loader";
import UserList from "./components/UserList/UserList";

function App() {
    const [users, setUsers] = useState([]);
    const [isUsersLoading, setIsUsersLoading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        setIsUsersLoading(true);
        setTimeout(async () => {
            const users = await UserService.getAll();
            setUsers(users);
            setIsUsersLoading(false);
        }, 1500);
    }

    return (
        <div className="App container">
            {isUsersLoading ? (
                <Loader />
            ) : (
                <UserList style={{ marginTop: "20px" }} users={users} />
            )}
        </div>
    );
}

export default App;
