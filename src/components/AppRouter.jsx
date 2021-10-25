import React from "react";
import { Switch, Route } from "react-router";
import Devices from "../pages/Devices";
import Users from "../pages/Users";
const AppRouter=()=>{
    return(
        <Switch>
            <Route path="/users" component={Users}/>
            <Route path="/devices" component={Devices}/>
        </Switch>
    )
        
}
export default AppRouter