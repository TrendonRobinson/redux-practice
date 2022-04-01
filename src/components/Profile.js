import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
    const user = useSelector((state) => {
        console.log(state);
        return state.userReducer.value;
    });

    return (
        <div>
            <h1>Profile Page</h1>
            <p>Name: {user.name} </p>
            <p>Age: {user.age} </p>
            <p>Email: {user.email} </p>
        </div>
    );
}
