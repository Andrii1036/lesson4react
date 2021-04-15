import React from 'react'
import './Error.css'
export const Error=()=>{
    return(
        <h1 className='error'>
            The field 'endpoint' must contain : 
            <br/>
            'posts',
            'comments',
            'photos',
            'users',
            <br/>
            The field 'ID' must be from 1 to 100
        </h1>
    )
}
export default Error