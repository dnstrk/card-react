import React from "react";

export default function UsersList({ users, show }) {
    if (show) {
        if (users.length > 0) {
            return (
                <div
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
                </div>
            );
        } else  {
          return <div>Users list is empty</div>
        }
    } else {
        return <div>Not found</div>;
    }
}
