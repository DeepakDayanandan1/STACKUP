/* StudentProfile Component
    1. Name,age,course,place using props 
    2. Display in cards
    3. 3 Students */

    
function StudentProfile(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Course: {props.course}</p>
      <p>Place: {props.place}</p>
    </div>
  )
}

export default StudentProfile