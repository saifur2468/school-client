import { useState } from "react";

const MakeRouting = () => {
  const [routine, setRoutine] = useState({
    department: "",
    semester: "",
    day: "",
    time: "",
    subject: "",
    teacher: "",
    room: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/routines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(routine),
    });

    alert("Routine Added Successfully");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow"
    >
      <h2 className="text-2xl font-bold mb-6">
        Add Class Routine
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          placeholder="Department"
          className="input input-bordered"
          onChange={(e) =>
            setRoutine({ ...routine, department: e.target.value })
          }
        />

        <input
          placeholder="Semester"
          className="input input-bordered"
          onChange={(e) =>
            setRoutine({ ...routine, semester: e.target.value })
          }
        />

        <input
          placeholder="Day"
          className="input input-bordered"
          onChange={(e) =>
            setRoutine({ ...routine, day: e.target.value })
          }
        />

        <input
          placeholder="Time"
          className="input input-bordered"
          onChange={(e) =>
            setRoutine({ ...routine, time: e.target.value })
          }
        />

        <input
          placeholder="Subject"
          className="input input-bordered"
          onChange={(e) =>
            setRoutine({ ...routine, subject: e.target.value })
          }
        />

        <input
          placeholder="Teacher"
          className="input input-bordered"
          onChange={(e) =>
            setRoutine({ ...routine, teacher: e.target.value })
          }
        />

        <input
          placeholder="Room Number"
          className="input input-bordered"
          onChange={(e) =>
            setRoutine({ ...routine, room: e.target.value })
          }
        />
      </div>

      <button className="btn btn-primary mt-6">
        Add Routine
      </button>
    </form>
  );
};

export default MakeRouting;