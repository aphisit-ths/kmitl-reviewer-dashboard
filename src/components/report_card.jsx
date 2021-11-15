import React from "react";
import {DocumentRemoveIcon,MailIcon} from "@heroicons/react/outline";
const tasks = [
  {
    id: "1",
    type: "delete",
    topic: "subject",
    factorId: "6546516asd1651",
    reporterId: "5561658483215",
    reporterName: "jen",
    createAt: "now",
    status: "completed",
  },
  {
    id: "1",
    type: "update",
    topic: "subject",
    factorId: "654asd6a5s4d8654",
    reporterId: "5561658483215",
    reporterName: "oath",
    createAt: "now",
    status: "completed",
  },
  {
    id: "1",
    type: "update",
    topic: "subject",
    factorId: "156486321asd12x",
    reporterId: "5561658483215",
    reporterName: "mrk",
    createAt: "now",
    status: "completed",
  },
  {
    id: "1",
    type: "delete",
    topic: "subject",
    factorId: "asd646816as5d132",
    reporterId: "5561658483215",
    reporterName: "thass",
    createAt: "now",
    status: "completed",
  },
];
export default function ReportCard() {
  return (
    <div className="shadow-lg rounded-xl w-full md:w-4/12 md:ml-4 mt-8 p-4 bg-white dark:bg-gray-800 relative overflow-hidden">
      <div className="w-full flex items-center justify-between mb-8">
        <p className="text-gray-800 dark:text-white text-xl">Task</p>
        <a
          href="#"
          className="flex items-center text-sm hover:text-gray-600 dark:text-gray-50 dark:hover:text-white text-gray-300 border-0 focus:outline-none"
        >
          VIEW ALL
        </a>
      </div>

      {tasks.map((todo, i) => (
        <div key={i} className="flex items-center mb-6 rounded  justify-between">
          <div className="rounded-full p-1 bg-gray-500" >
            {}
          <MailIcon className="w-5 h-w-5 text-white"></MailIcon>
          </div>
          <div className="flex items-center w-full justify-between">
            <div className="flex text-sm flex-col w-full ml-2 items-start justify-between ">
              <div className="flex row space-x-3">
              <p className="text-gray-700">{todo.type +" " + todo.topic+" " }</p>
              <p className="text-gray-300">{todo.factorId}</p>
              </div>
              
              <p className="text-gray-300">{todo.reporterName}</p>
            </div>
            <span

              className={`py-1 px-2 rounded-3xl text-sm text-gray-600 cursor-pointer ${ 
                todo.type == "delete" ? "bg-red-300" : "bg-green-300"
              } `}
            >
              {todo.type}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
