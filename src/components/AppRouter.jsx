import React from "react";
import { Switch, Route } from "react-router";
import Users from "../pages/Users";
const AppRouter=()=>{
    return(
        <Switch>
            <Route path="/users" component={Users}/>
        </Switch>
    )
        
}
export default AppRouter