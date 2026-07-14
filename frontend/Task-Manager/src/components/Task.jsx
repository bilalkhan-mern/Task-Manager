import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Task = () => {
  const API = "http://localhost:3000/tasks";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      setData(data.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Link to="/create">Create New Task</Link>

      {data.map((item) => (
        <div key={item._id}>
          <h2>Title: {item.title}</h2>
          <p>Description: {item.description}</p>
          <p>Priority: {item.priority}</p>
          <p>Status: {item.status}</p>
          <p>Date: {item.date}</p>

          <Link to={`/update/${item._id}`}>
            <button>Update</button>
          </Link>

          <button onClick={() => handleDelete(item._id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
};

export default Task;











