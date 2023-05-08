import { useState, useEffect } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.age}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
