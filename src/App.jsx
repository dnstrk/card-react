import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import UserService from "./API/UserService";
import Loader from "./components/UI/Loader";

function App() {
    const [users, setUsers] = useState([]);
    const [isUsersLoading, setIsUsersLoading] = useState(false);

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        setIsUsersLoading(true);
        setTimeout(async() => {
            const users = await UserService.getAll();
            setUsers(users);
            setIsUsersLoading(false);
        }, 1500)
        
    }

    return (
        <div className="App">
            <div style={{ marginBottom: "20px" }}>Test pages</div>
            {isUsersLoading ? (
                <Loader />
            ) : (
                <div>
                    {users.map((user) => (
                        <div key={user.id}>
                            {user.id}. {user.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
