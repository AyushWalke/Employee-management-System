import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.employees);
  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded h-80">
      <div className="bg-[#3F3F3F] mb-2 py-2 px-4 flex justify-between rounded text-gray-200 font-semibold">
        <h2 className="text-xl font-medium w-1/5">Employee Name</h2>
        <h3 className="text-xl font-medium w-1/5">New tasks</h3>
        <h5 className="text-xl font-medium w-1/5">Active tasks</h5>
        <h5 className="text-xl font-medium w-1/5">Completed tasks</h5>
        <h5 className="text-xl font-medium w-1/5">Failed tasks</h5>
      </div>
      <div className="h-[80%] overflow-auto">
        {authData.employees.map((elem) => (
          <div className="bg-[#2D2D2D] mb-2 py-2 px-4 flex justify-between rounded text-gray-200">
            <h2 className="text-xl font-medium w-1/5">{elem.firstName}</h2>
            <h3 className="text-xl font-medium w-1/5 text-sky-400">{elem.taskSummary.newTask}</h3>
            <h5 className="text-xl font-medium w-1/5 text-yellow-400">{elem.taskSummary.active}</h5>
            <h5 className="text-xl font-medium w-1/5 text-green-500">{elem.taskSummary.completed}</h5>
            <h5 className="text-xl font-medium w-1/5 text-red-500">{elem.taskSummary.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
