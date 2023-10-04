import React from "react";
import UserItem from "./UserItem";

export default function UserList({ users }) {
    return (
        <UserItem users={users} />
    );
}
