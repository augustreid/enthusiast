import {useState} from "react";

function AddHobby() {

  const [hobbyName, setHobbyName] = useState(""); 
  const [imageUrl, setImageUrl] = useState("");
  
  return(
    <form>
      <input name="hobbyName">New Hobby</input>
      <input name="imageUrl">Image URL</input>
      <button type="submit">Add New Hobby</button>
    </form>
  )
}

export default AddHobby;