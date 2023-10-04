import React from "react";

export default function UserItem({users}) {
    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    {user.id}. {user.name}
                </div>
            ))}
        </div>
    );
}
