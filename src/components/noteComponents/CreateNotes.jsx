import React , {useState}  from "react";
import { useParams } from "react-router-dom";

function CreateNote() {
    const param = useParams();
        const [data, setData] = useState({
        id : param.id , 
        userName: "",
        password : "" , 
        text: "" 
    });

  return (
      <textarea className="container"
        placeholder="Type...."
        maxLength="10000"
        cols={5} rows = {10}
        ></textarea>
  );
}

export default CreateNote;