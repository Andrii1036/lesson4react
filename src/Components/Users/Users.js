import React from 'react'
import './Users.css'
 export const Users = (props) => {
     const data=props.data
     const number = props.isNumberOk
     console.log(data, number)
    if (!number) {
        return (
            data.map((user) => (
                <div key={user.id} className='user'>
                    <h3>{user.name}</h3>
                    <p>Username - {user.username}</p>
                    <p>{user.email}</p>
                    <hr/>    
                </div>
            ))
        )
    } else {
        return (
            <div key={data.id} className='user'>
                    <h3>{data.name}</h3>
                    <p>Username - {data.username}</p>
                    <p>{data.email}</p>
                    <hr/>    
                </div>
        )
    }
}
export default Users