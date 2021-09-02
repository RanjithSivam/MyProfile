import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({children,...rest}) {

    const {authenticated} = useSelector(state => state.auth)
    
    return <Route {...rest} render={({location})=>{
        
        return authenticated ? children : <Redirect to={{
            pathname: '/login',
            state:{
                unAuth: true,
                from: location
            }
        }} />
    }} /> 
    
}

export default ProtectedRoute
