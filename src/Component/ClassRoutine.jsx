import { useEffect, useState } from "react";

const ClassRoutine = () => {
  const [department, setDepartment] = useState("CSE");
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/routines/${department}`)
      .then((res) => res.json())
      .then((data) => setRoutines(data));
  }, [department]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-5">
        Class Routine
      </h2>

      <select
        className="select select-bordered mb-5"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option>CSE</option>
        <option>EEE</option>
        <option>CIVIL</option>
        <option>TEXT</option>
        <option>MECH</option>
        <option>IT</option>
      </select>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Time</th>
              <th>Subject</th>
              <th>Teacher</th>
              <th>Room</th>
            </tr>
          </thead>

          <tbody>
            {routines.map((routine) => (
              <tr key={routine._id}>
                <td>{routine.day}</td>
                <td>{routine.time}</td>
                <td>{routine.subject}</td>
                <td>{routine.teacher}</td>
                <td>{routine.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassRoutine;