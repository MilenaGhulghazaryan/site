import React from "react";
import { MenuArr } from "../navigation/navigation";
import { Route, Routes } from "react-router-dom";

const Nav = () => {
    return (
        <Routes>
            {
                MenuArr.map(({ id, path, element }) => {
                    return (
                        <Route key={id} path={path} element={element} />
                    )
                })
            }
        </Routes>
    )
}
export default Nav;