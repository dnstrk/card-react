import cl from "./UserItem.module.css";

export default function UserItem({ user }) {
    return (
        <div className={cl.item} key={user.id}>
            <div className={cl.person}>
                <b>{user.name}</b>
                <span>{user.email.toLowerCase()}</span>
            </div>
            <div className={cl.tag}>
                <span className={cl.nick}>{user.username}</span>
            </div>
        </div>
    );
}
