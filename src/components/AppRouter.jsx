import React from "react";
import { Switch, Route } from "react-router";
import Devices from "../pages/Devices";
import Post from "../pages/Post";
import Users from "../pages/Users";
const AppRouter=()=>{
    return(
        <Switch>
            <Route path="/users" component={Users}/>
            <Route path="/devices" component={Devices}/>
            <Route path="/post" component={Post}/>
        </Switch>
    )
        
}
export default AppRouter