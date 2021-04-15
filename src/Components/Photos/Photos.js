import React from 'react'
 export const Photos = (props) => {
     const data=props.data
     const number = props.isNumberOk
    if (!number) {
        return (
            data.map((photo) => (
                <div key={photo.id} className='comment'>
                  {JSON.stringify(photo)}   
                </div>
            ))
        )
    } else {
        return (
            <div key={data.id} className='comment'>
                    {JSON.stringify(data)}
                </div>
        )
    }
}
export default Photos