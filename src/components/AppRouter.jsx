import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router";
import { useState } from "react/cjs/react.development";
import AuthContext from "../context";
import Devices from "../pages/Devices";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Post from "../pages/Post";

const AppRouter = () => {
    const {isAuth,isLoading}=useContext(AuthContext)
    console.log(isAuth);
    return (
        isAuth?
        <Switch>
            <Route path="/users" component={Users} />
            <Route path="/devices" component={Devices} />
            <Route path="/post" component={Post} />
            <Redirect to="/devices" />
        </Switch>
        :
        <Switch>
            <Route path="/login" component={Login} />
            <Redirect to="/login" />
        </Switch>
    )

}
export default AppRouter
