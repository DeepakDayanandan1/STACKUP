/* 1. Array containing student names
   2. Display names using map()
   3. Use unique keys
   4. Add search input to filter students */
import {useState} from "react";

function StudentList() {
  const students = ["Anu", "Rahul", "Meera", "Arun"];
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <br />
        <h2>Student List</h2>
        <input
          type="text"
          placeholder="Search students..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {students
            .filter((student) => student.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((student, index) => (
              <li key={index}>{student}</li>
            ))}
        </ul>
      </div>
  );
}

export default StudentList;
