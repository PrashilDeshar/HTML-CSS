import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../../constants";




function Home(){
    const url = BASE_URL + "users/";

    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get(url).then((response)=>{
            setUsers(response.data)
        });
    }, [])


return (
    <>
    <div>
        <h1>User list</h1>
        <table>
        <tr>
    <th>Id</th>
    <th>First Name</th>
    <th>Last Name</th>
  </tr>
            {users.map((user) => {
                return(
                   
 
  <tr>
    <td>{user.id}</td>
    <td>{user.first_name}</td>
    <td>{user.last_name}</td>
  </tr>
 

                )
    //              <li key={user.id}>{user.first_name}</li>
            })}
     </table>
   </div>
    <div>

    </div>
    </>
)
}
export default Home;