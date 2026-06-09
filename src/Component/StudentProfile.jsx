import { useEffect, useState } from "react";

const StudentProfile = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const email = "test@gmail.com";

    fetch(`http://localhost:5000/students/${email}`)
      .then((res) => res.json())
      .then((data) => setStudent(data))
      .catch((err) => console.error(err));
  }, []);

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{student.name}</h2>

      <p>Email: {student.email}</p>
      <p>Department: {student.department}</p>
      <p>Phone: {student.phone}</p>
      <p>Address: {student.address}</p>

      <p className="mt-3 text-green-600">
        Student ID: {student.studentId}
      </p>
    </div>
  );
};

export default StudentProfile;