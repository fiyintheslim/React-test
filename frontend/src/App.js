import "./App.css";
import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

function App() {
  const socket = io("localhost:5050");
  const [username, setUsername] = useState();
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);
  const user = useRef();
<<<<<<< HEAD
  const chatContainer = useRef();
=======
>>>>>>> 0fa616afb63dc4599ae6018ed6ca96a631691a8d
  useEffect(() => {
    if (!username) {
      setUsername(prompt("Enter your username", ""));
    }
<<<<<<< HEAD
    const oldMessages = localStorage.getItem("messages");

    if(oldMessages){
      setMessages(JSON.parse(oldMessages))
    }
  }, [username]);

  useEffect(() => {
    socket.on("message", (data) => {
      setMessages([...messages, data]);
      scroll(chatContainer);
    });
=======
  }, [username]);

  useEffect(() => {
    socket.emit("message", "Message sent");
>>>>>>> 0fa616afb63dc4599ae6018ed6ca96a631691a8d
  }, []);

  const handleUser = (e) => {
    if (user.current.value) {
      setUsername(user.current.value);
    }
  };
  const handleMessage = () => {
    const data = {
      user: username,
      content: message,
      time: Date.now(),
    };
    setMessages([...messages, data]);
    socket.emit("message", data);
<<<<<<< HEAD
    setMessage("");
    scroll(chatContainer);
    localStorage.setItem("messages", JSON.stringify(messages))
  };
  const scroll = (cont) => {
    setTimeout(() => {
      cont.current.scrollTop = cont.current.scrollHeight;
    }, 50);
=======
    setMessage();
>>>>>>> 0fa616afb63dc4599ae6018ed6ca96a631691a8d
  };
  return (
    <>
      {username ? (
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
<<<<<<< HEAD
          <div className="chat-container rounded-lg relative overflow-hidden">
            <div className="sticky top-0 right-0 py-4 text-center bg-purple-700 font-bold">
              {username}
            </div>
            <div ref={chatContainer} className="h-5/6 overflow-y-scroll">
              {messages.map((each) => (
                <p
                  className={`w-full px-2 my-1 flex flex-col ${
                    each.user === username ? "items-end" : "items-start"
                  }`}
                >
                  <span className="text-xs text-slate-500 my-1">
                    {each.user}
                  </span>
                  <span
                    className={`p-2 rounded-lg ${
=======
          <div className="chat-container rounded-lg relative">
            <div className="sticky top-0 right-0 py-4 text-center bg-purple-700 font-bold">
              {username}
            </div>
            <div className="pb-10 h-full overflow-y-scroll">
              {messages.map((each) => (
                <p
                  className={`w-full my-1 flex flex-col ${
                    each.user === username ? "items-end" : "items-start"
                  }`}
                >
                  <span
                    className={`p-2 rounded-full ${
>>>>>>> 0fa616afb63dc4599ae6018ed6ca96a631691a8d
                      each.user === username
                        ? "bg-indigo-500 rounded-br-none"
                        : "bg-violet-500 rounded-bl-none"
                    }`}
                  >
                    {each.content}
                  </span>
                  <span className="text-xs text-slate-500">{`${String(
                    new Date(each.time).getHours()
                  ).padStart(2, "0")}:${String(
                    new Date(each.time).getMinutes()
                  ).padStart(2, "0")}`}</span>
                </p>
              ))}
            </div>
            <div className="flex items-center bg-purple-700 absolute w-full bottom-0 right-0 p-3">
              <input
                type="text"
                className="rounded-full grow py-1 px-3 outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleMessage();
                  }
                }}
              />
              <button
                onClick={handleMessage}
                className="rounded-full bg-slate-200 py-1 px-3 mx-2 font-semibold outline-none"
              >
                send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center flex-col">
          <div className="mb-4">Select username to proceed</div>
          <div className="flex items-center w-64">
            <input
              type="text"
              className="rounded-full grow bg-purple-700 py-1 px-3 outline-none"
              ref={user}
            />
            <button
              onClick={() => handleUser()}
              className="rounded-full bg-slate-200 py-1 px-3 mx-2 font-semibold outline-none border"
            >
              select
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
