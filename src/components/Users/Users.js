import React, { useEffect, useState } from 'react'
import { fetchApi } from '../../utils/fetchAPI';

const Users = () => {

  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(()=>{
    fetchApi('https://jsonplaceholder.typicode.com/users?_limit=4')
      .then( (res) => {
        setUserList(res)
      })
      .catch( (err) => {
        setError(true);
      });

  }, []);


  let users = null; 
  users = userList.map( (user) => {
    return(<div key={user.id}
      style={{border: 'solid 1px #ccc', textAlign: 'left', margin: '20px 50px'}}>
        <p>UserId: {user.id}</p>
        <h3>{user.name}</h3>
        <p>Phone: {user.phone}</p>
      </div>
    )
  })

  return (
    <div>
      <h2>Users | FETCH API Demo with Mocks</h2>

      {
        error? 
        <p>Unable to load Users. Try again</p>
        :
        users
      }

    </div>
  )
}

export default Users