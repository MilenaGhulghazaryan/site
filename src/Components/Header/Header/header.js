import React from "react";
import css from './header.module.css'
import { MenuArr } from "../../navigation/navigation";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className={css.header}>
            <div className={css.navbar}>
                <ul>
                    {
                        MenuArr.map(({ id, name, path }) => {
                            return (
                                <li key={id}>
                                    <Link to={path}>{name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <a className={css.title}>Constructior</a>
            </div>
        </div>
    )

}
export default Header



