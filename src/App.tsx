import { useEffect, useState } from 'react'
import './App.css'

interface User{
  username: string,
  firstName: string,
  lastName: string,
  gender: string,
  aboutAuthor: string,
}

function App() {
  // react Hook For State Handler
	const [data, setData] = useState<User[]>([]);

  useEffect(() => {
        // Fetch Function
    fetch('./data.json').then(
      function (res) {
        console.log(res.json);
        return res.json();
      },
    ).then(function (data) {
      // store Data in State Data Variable
      setData(data);
    }).catch(
      function (err) {
        console.log(err, ' error');
      },
    );
  
  }, [])
  
  
  return (
    <div>
      <ul>
        <li>Users:</li>
        {data.map((e) => {
          return <li key={e.username}>
            {e.firstName} {e.lastName}
          </li>
        })}
      </ul>
    </div>
  )
  
}

export default App
