import { useState, useEffect } from "react";

function FetchUsers() {
  const [users, setUsers] = useState([]);

  const pfp = [
    "https://images.unsplash.com/photo-1786711461127-d504de113d83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1786299601690-9acde22601f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1786301422464-e1bd0b9bde7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1786426118896-18f817837f2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1785934276694-5d09ce6f7a89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1785804681125-a3d66c689d89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1785869249913-da918e4c89d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1786227651238-6f81f3e7bd2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMyfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1786097378992-57724bd92d22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM2fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
    "https://plus.unsplash.com/premium_photo-1712141905284-e7abdabd383e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
  ];

  const loadUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-zinc-900 w-1/4 p-5 m-5 rounded-md word-wrap"
        >
          <div className="h-80">
            <img
              className="h-full w-full object-cover"
              src={pfp[user.id - 1]}
              alt="img"
            />
          </div>
          <div className="mt-5">
            <h1 className="text-2xl font-bold mb-1 word-wrap">{user.name}</h1>
            <p className="text-sm mb-1">{user.email.toLowerCase()}</p>
            <p className="text-xs word-wrap">
              {user.company.name} - {user.company.catchPhrase}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

export default FetchUsers;
