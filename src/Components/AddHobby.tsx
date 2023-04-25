import { useState } from "react";
import { hobbies } from "../mockData"

function AddHobby() {

  const [hobbyName, setHobbyName] = useState(""); 
  const [imageUrl, setImageUrl] = useState("");

  let newHobby = {name: hobbyName, image: imageUrl};

  function handleSubmit(e: any) {
    e.preventDefault();
    hobbies.push(newHobby);
    console.log(hobbies);
  }

  return(
    <form onSubmit={handleSubmit}>
      <input name="hobbyName" value={hobbyName} onChange={(e) => setHobbyName(e.target.value)}/>
      <input name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
      <button type="submit" >Add New Hobby</button>
    </form>
  )
}

export default AddHobby;