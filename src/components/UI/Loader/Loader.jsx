import React from "react";
import cl from "./Loader.module.css";

export default function Loader() {
    return (
        <div style={{ marginTop: "70px" }}>
            <div className={cl.loader}></div>
        </div>
    );
}
