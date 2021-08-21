import React from 'react'

export default function SignIn() {
    const [id, setID] = React.useState("");
    const [pass, setPass] = React.useState("");

    return (
        <div className = "container">
            <form onSubmit = {}>
                <label>UserName: </label>
                <input name="Id"></input>
                <input type="submit"></input>
                
            </form>
            


            
        </div>
    )
}
