import React from 'react'
import './Posts.css'
 export const Posts = (props) => {
     const data=props.data
     const number = props.isNumberOk
    if (!number) {
        return (
            data.map((post) => (
                <div key={post.id} className='post'>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <hr/>    
                </div>
            ))
        )
    } else {
        return (
            <div key={data.id} className='post'>
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>    
                    <hr/>
                </div>
        )
    }
}
export default Posts