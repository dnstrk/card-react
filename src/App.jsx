import axios from "axios";
import "./App.css";
import { useState } from "react";
import UsersList from "./components/UsersList";

function App() {
    let [users, setUsers] = useState([]);
    let [show, setShow] = useState(false);

    async function fetchUsers() {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
    }

    return (
        <div className="App">
            <div>Test pages</div>
            <button style={{ width: "100px" }} onClick={fetchUsers}>
                fetchUsers
            </button>
            <div>
            <button style={{ width: "100px" }} onClick={() => setShow(!show)}>
                Show
            </button>
            <button style={{ width: "100px" }} onClick={() => setUsers([])}>
                clear
            </button>
            </div>
            <UsersList users={users} show={show} />
            {/* <div
                style={{
                    maxWidth: "600px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}
            >
                {users.map((user) => (
                    <div key={user.id}>
                        {user.id}. {user.name}
                    </div>
                ))}
            </div> */}
            {/* <div style={{'maxWidth': '600px', 'display': 'flex', 'flexDirection': 'column', 'alignItems': "flex-start"}}>
                {users.map((user) => (
                    <div key={user.id}>{user.id}. {user.name}</div>
                ))}
            </div> */}
            {/* <button onClick={show}></button> */}
        </div>
    );
}

export default App;
