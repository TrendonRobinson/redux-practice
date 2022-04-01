import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

export default function Login() {
    const dispatch = useDispatch();
    return (
        <div>
            <button
                onClick={() => {
                    dispatch(
                        login({
                            name: "Pedro",
                            age: 35,
                            email: "pedrogarcia@gmail.com",
                        })
                    );
                }}
            >
                Login
            </button>
            <button
                onClick={() => {
                    dispatch(logout());
                }}
            >
                Log out
            </button>
        </div>
    );
}
