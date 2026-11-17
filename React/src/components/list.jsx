function List() {
  const students = ["Anu", "Rahul", "Meera", "Arun"]
  return (
    <div>
      <br />
      <h2>Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  )
}
export default List