import React from 'react'
import './Comments.css'
 export const Comments = (props) => {
     const data=props.data
     const number = props.isNumberOk
     console.log(data, number)
    if (!number) {
        return (
            data.map((comment) => (
                <div key={comment.id} className='comment'>
                    <h3>{comment.name}</h3>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                    <hr/>    
                </div>
            ))
        )
    } else {
        return (
            <div key={data.id} className='comment'>
                    <h3>{data.name}</h3>
                    <p>{data.email}</p>
                    <p>{data.body}</p>
                    <hr/>    
                </div>
        )
    }
}
export default Comments