"use client";
import axios from "axios";
import { useEffect, useState } from "react";

const API_ENDPOINT = "https://66c4cb0fb026f3cc6cf0b1b4.mockapi.io";

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export default function AsyncFetch() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  function fetchData() {
    axios
      .get<User[]>(`${API_ENDPOINT}/users`)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof Error) {
          setError(error.message);
        }
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <main className="">
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
