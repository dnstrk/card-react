import React from "react";
import UserItem from "../UserItem/UserItem";
import cl from "./UserList.module.css";

export default function UserList({ users }) {
    return (
        <div className={cl.list} style={{ marginTop: "20px" }}>
            {users.map((user) => (
                <UserItem user={user} />
            ))}
        </div>
    );
}
