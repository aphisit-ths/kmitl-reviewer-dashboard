import React from "react";
import { UsersIcon, ArrowNarrowRightIcon } from "@heroicons/react/solid";
export default function Card({ data, title, bg }) {
  return (
    <div className="w-full md:w-4/12 pr-2 mb-6 ">
      <div
        className={`flex flex-row font-display  shadow-md rounded-2xl uppercase justify-between  p-4 ${bg}   `}
      >
        <div className="flex flex-col items-start">
          <span className="rounded-xl relative p-2 bg-gray-200">
            <UsersIcon className="w-6 h-6" />
          </span>
          <p className="text-2xl md:text-4xl font-kanit font-bold text-gray-50  dark:text-white ">
            {title}
          </p>
        </div>
        <div className={`flex justify-center shadow-md  items-center content-center bg-gradient-to-br ${bg} hover:shadow-lg h-28 w-28 rounded-full fill-current text-white`}>
          <p className="text-gray-50 font-display  text-5xl text-left font-bold my-4">
            {data}

          </p>
        </div>
      </div>
    </div>
  );
}
