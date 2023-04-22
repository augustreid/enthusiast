import {hobbies} from "../mockData";

function HobbyNav() {
  return(
    <nav>
      {hobbies.map((hobby) => {
        return (
          <h3>{hobby.name}</h3>
        )
      })}
    </nav>
  )
}

export default HobbyNav;