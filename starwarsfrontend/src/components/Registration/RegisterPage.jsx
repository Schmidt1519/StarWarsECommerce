import React, { Component } from "react";
import Registration from "./registration";
import {withRouter} from 'react-router-dom';

function RegisterPage(props){

    return(
        <div>
            <Registration register={props.register}/>
        </div>
    )
}
export default withRouter(RegisterPage);
