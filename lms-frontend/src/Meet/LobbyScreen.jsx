import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "./context/SocketProvider";

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket?.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket?.on("room:join", handleJoinRoom);
    return () => {
      socket?.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-3xl mb-8">Lobby</h1>
        <form onSubmit={handleSubmitForm}>
          <label htmlFor="email" className="block mb-4">
            Email ID
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
          />
          <br />
          <label htmlFor="room" className="block mb-4">
            Room Number
          </label>
          <input
            type="text"
            id="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="mb-4 px-4 py-2 rounded bg-gray-800 text-white focus:outline-none"
          />
          <br />
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">Join</button>
        </form>
      </div>
    </div>
  );
};

export default LobbyScreen;
