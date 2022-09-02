import React, { useEffect, useState } from 'react'

const Todos = () => {

  // connect with the backend rest api 
  // REST API URL? https://jsonplaceholder.typicode.com/todos?_limit=6
  // REST API Client? fetch or axios
  // Http Method? GET 

  const todosApiURL = 'https://jsonplaceholder.typicode.com/todos?_limit=6';
  const [todoList, setTodoList] = useState([]);
  console.log(todoList);

  useEffect( () => {
    const fetchTodos = async() => {
      const response = await fetch(todosApiURL);
      console.log(response);
      const responseJSON = await response.json();

      setTodoList(responseJSON);
    }

    fetchTodos();
  }, []);

  return (
    <div style={{textAlign: 'left', margin: '20px 50px'}}>
      <h2>Todos | Testing AJAX Calls</h2>

      {/* loop thru */}

      { 
        todoList.map( (todo) => {
          return(
            <div style={{border: 'solid 1px #ccc'}} key={todo.id} >
              <p>#{todo.id}</p>
              <h3>{todo.title}</h3>
              <p>{todo.completed? 'Completed': 'Not Completed'}</p>
            </div>
          )
        })
      }

    </div>
  )
}

export default Todos