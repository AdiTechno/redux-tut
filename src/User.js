import React from 'react'

const User=(props)=> {
    console.warn(props.data.Name)
    const {data} = props
    return (
        <div>
            <h1> User Component</h1>
           <h3>{data.Name}  {data.Age}</h3>
           
        </div> 
    )
}
export default User;