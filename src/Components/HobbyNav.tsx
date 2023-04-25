import {hobbies} from "../mockData";

function HobbyNav() {
  return(
    <nav>
      {hobbies.map((hobby) => {
        return (
          <h3 key={hobby.id}>{hobby.name}</h3>
        )
      })}
    </nav>
  )
}

export default HobbyNav;