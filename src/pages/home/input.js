import React from "react";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants";
import axios from "axios";

function UserForm(){
    const url=BASE_URL+'user/';
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage(`Hello ${FirstName} ${LastName}!`);
        setFirstName('');
        setLastName('');
        const payload ={
            "first name":FirstName,
            "last name":LastName
        }
        axios.post(url, payload).then (()=>{}).catch(()=>{})

    };
    return (
        <form onSubmit={handleSubmit}>
             <input
        type="text"
        id="FirstName"
        name="FirstName"
        value={FirstName}
        placeholder="First Name"
        onChange={(event) =>
          setFirstName(event.target.value)
        }
      />

      <br />
      <br />

      <input
        type="text"
        id="LastName"
        name="LastName"
        value={LastName}
        placeholder="Last Name"
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <br/>
      <br/>
      <button type="submit">Submit</button>
      <br/>
      <br/>
      <h2>{message}</h2>
        </form>
    )
}
export default UserForm;