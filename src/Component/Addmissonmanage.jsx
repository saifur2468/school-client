import { useEffect, useState } from "react";

const AdminAdmissions = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/admissions")
      .then((res) => res.json())
      .then((data) => setApplications(data));
  }, []);

  // ACCEPT
  const accept = async (id) => {
    await fetch(`http://localhost:5000/admissions/accept/${id}`, {
      method: "POST",
    });

    alert("Student Accepted");

    setApplications(applications.filter((a) => a._id !== id));
  };

  // REJECT
  const reject = async (id) => {
    await fetch(`http://localhost:5000/admissions/reject/${id}`, {
      method: "POST",
    });

    alert("Rejected");

    setApplications(applications.filter((a) => a._id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-5">
        Admission Requests
      </h2>

      <div className="grid gap-4">
        {applications.map((app) => (
          <div key={app._id} className="border p-4 rounded-xl shadow">

            <h3 className="font-bold">{app.name}</h3>
            <p>{app.department}</p>
            <p>{app.phone}</p>

            <div className="flex gap-3 mt-3">
              <button
                onClick={() => accept(app._id)}
                className="bg-green-600 text-white px-4 py-2 rounded"
              >
                Accept
              </button>

              <button
                onClick={() => reject(app._id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Reject
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminAdmissions;