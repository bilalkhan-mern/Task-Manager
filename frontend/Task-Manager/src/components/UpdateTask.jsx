import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateTask = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/tasks/${id}`);
        setStatus(res.data.status); 
      } catch (err) {
        console.log(err);
      }
    };

    fetchTask();
  }, [id]);
  const handleChange = async (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    try {
      await axios.put(`http://localhost:3000/update/${id}`, {
        status: newStatus,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <label>Status</label>

      <select value={status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>
  );
};

export default UpdateTask;