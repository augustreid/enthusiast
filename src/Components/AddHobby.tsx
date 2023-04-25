import {useState} from "react";

function AddHobby() {

  const [hobbyName, setHobbyName] = useState(""); 
  const [imageUrl, setImageUrl] = useState("");

  return(
    <form>
      <input name="hobbyName" value={hobbyName} onChange={(e) => setHobbyName(e.target.value)}/>
      <input name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
      <button type="submit" onClick={(e) => setHobbyName("")}>Add New Hobby</button>
    </form>
  )
}

export default AddHobby;