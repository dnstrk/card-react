import axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
    let [users, setUsers] = useState([]);

    async function fetchUsers() {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        );
        // console.log(response)
        setUsers(response.data);
        console.log(users)
    }

    // function show() {
    //     // console.log(users)

    //     return (
            
    //     );
    // }

    return (
        <div className="App">
            <div>Test pages</div>
            <button style={{'width': '100px'}} onClick={fetchUsers}>fetchUsers</button>
            <div style={{'maxWidth': '600px', 'display': 'flex', 'flexDirection': 'column', 'alignItems': "flex-start"}}>
                {users.map((user) => (
                    <div key={user.id}>{user.id}. {user.name}</div>
                ))}
            </div>
            {/* <button onClick={show}></button> */}
        </div>
    );
}

export default App;
