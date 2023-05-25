import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import AdsComponent from "./AdComponent";
import Spinner from "./Spinner";

function CreateNote() {
  // consts

  const [isLoading, setIsLoading] = useState(true);
  const param = useParams();
  const [data, setData] = useState({
    username: "",
    password: "",
    text: "",
  });

  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const [isLogin, setIsLogin] = useState(false);

  // functions

  const fetchNote = async () => {
    const docRef = doc(db, "notes", param.id);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setData({
          username: docSnap.data().username,
          password: docSnap.data().password,
          text: docSnap.data().text,
        });
        if (docSnap.data().username === "" && docSnap.data().username === "") {
    
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
        setIsLoading(false);
      } else {
    
        setIsLoading(false);
        setIsLogin(true);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNote();
  }, []);

  const handleMessageChange = async (event) => {
    const newValue = {
      username: data.username,
      password: data.password,
      text: event.target.value,
    };

    setData(newValue);
    await addNote(event, newValue);
  };

  const addNote = async (e, newValue) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, "notes", param.id), newValue);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleLogin = (event) => {
    if (data.username === "" && data.password === "") {
      const newValue = {
        username: username,
        password: password,
        text: data.text,
      };
      setData(newValue);
      addNote(event, newValue);
      alert("Data locked successfully");
    } else {
      if (data.username === username && data.password === password) {
        setIsLogin(true);
        alert("login successfully !!!");
      } else {
        alert("Please write correct password");
      }
    }
  };

  return (
    <div className="container  vh-100 d-flex justify-content-center align-items-center">
      {isLoading ? (
        <Spinner />
      ) : isLogin ? (
        <div>
          <AdsComponent dataAdSlot="5051571536" /> 
            <div className="container form-outline  vw-100 mb-4">
              <textarea
                className="form-control"
                placeholder="Type...."
                maxLength="10000"
                rows={20}
                value={data.text}
                onChange={handleMessageChange}
              />
          </div>

          {data.username === "" && data.password === "" ? (
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => setIsLogin(false)}
            >
              Lock
            </button>
          ) : (
            <div></div>
          )}
         <AdsComponent dataAdSlot="5051571536" /> 
        </div>
      ) : (
        <div className="w-100">
          <form>
            <div className="form-group">
              <label>username</label>
              <input
                type="userName"
                className="form-control"
                placeholder="Enter userName"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(event) => setpassword(event.target.value)}
              />
            </div>

            {data.username === "" && data.password === "" ? (
              <button className="btn btn-primary" onClick={handleLogin}>
                {" "}
                Submit{" "}
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleLogin}>
                {" "}
                Login{" "}
              </button>
            )}
          </form>
        </div>
      )}
    </div>
  );
}

export default CreateNote;

