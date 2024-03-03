import React from "react";
import { Link } from "react-router-dom";
import { UserContextStore } from "../../store/UserContext";
import style from "./Button.module.css";
import { ArrowBigLeftIcon } from "lucide-react"

const BtnClose = ({ title }) => {

    const { theme } = UserContextStore();

    return (
        <Link
            to="/"
            className={`${theme === "dark" ? "dark_blue" : "light"}  ${style.btn_close}`}>
            <ArrowBigLeftIcon />
            {title}
        </Link>
    )
}
export default BtnClose;
