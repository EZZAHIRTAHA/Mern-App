import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/users").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    axios.post("http://localhost:5000/api/users", {
      name,
      age,
      username,
    }).then((response) => {
      setListOfUsers([
        ...listOfUsers,
        {
          name,
          age,
          username,
          id: response.data.id,
        },
      ]);
    });
  };

  // const deleteUser = (id) => {
  //   axios.delete(`http://localhost:5000/api/users/delete/${id}`).then(() => {
  //     setListOfUsers(listOfUsers.filter((user) => user.id !== id));
  //   });
  // };

  // const updateUser = (id) => {
  //   axios.put(`http://localhost:5000/api/users/${id}`, {
  //     name,
  //     age,
  //     username,
  //   }).then(() => {
  //     setListOfUsers(
  //       listOfUsers.map((user) => {
  //         if (user.id === id) {
  //           return {
  //             id,
  //             name,
  //             age,
  //             username,
  //           };
  //         } else {
  //           return user;
  //         }
  //       })
  //     );
  //   });
  // };

  return (
    <>
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <table  className="table-auto border-collapse w-full ">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Username</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listOfUsers.map(user => (
            <tr key={user._id}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.age}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2 flex justify-center items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </>
  );
}

export default App;
