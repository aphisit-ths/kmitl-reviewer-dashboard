import react from "react";
import ReportCard from "./report_card"
const Content = ({ title }) => (
  <div className="flex flex-col flex-wrap sm:flex-row">
    <div className="w-full md:w-4/12 pr-2 mb-6">
      <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <span className="rounded-xl relative p-4 bg-purple-200">
            <svg
              width="40"
              fill="currentColor"
              height="40"
              className="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
            </svg>
          </span>
          <p className="text-md text-black dark:text-white ml-2">
            {title || 'Total Gains'}
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
            34,500
            <span className="text-sm">$</span>
          </p>
          <div className="flex items-center text-green-500 text-sm">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" />
            </svg>
            <span>5.5%</span>
            <span className="text-gray-400">vs last month</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-4/12 pr-2 mb-6">
      <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <span className="rounded-xl relative p-4 bg-purple-200">
            <svg
              width="40"
              fill="currentColor"
              height="40"
              className="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
            </svg>
          </span>
          <p className="text-md text-black dark:text-white ml-2">Outgoings</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
            10,000
            <span className="text-sm">$</span>
          </p>
          <div className="flex items-center text-green-500 text-sm">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" />
            </svg>
            <span>0.3%</span>
            <span className="text-gray-400">vs last month</span>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-4/12">
      <div className="shadow rounded-2xl p-4 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <span className="rounded-xl relative p-4 bg-purple-200">
            <svg
              width="40"
              fill="currentColor"
              height="40"
              className="text-purple-500 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z" />
            </svg>
          </span>
          <p className="text-md text-black dark:text-white md:ml-4">Bonus</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
            3500
            <span className="text-sm">$</span>
          </p>
          <div className="flex items-center text-green-500 text-sm">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z" />
            </svg>
            <span>7%</span>
            <span className="text-gray-400">vs last month</span>
          </div>
        </div>
      </div>
    </div>
    <div className="shadow-lg rounded-xl w-full md:w-3/12 p-4 md:mr-2 bg-white dark:bg-gray-800 relative overflow-hidden mt-8">
      <p className="text-gray-600 font-light dark:text-white text-xl  mb-6">
        Popular Investissors
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <div className="relative">
            <a href="#" className="block relative">
              <img
                alt="Enoch Ndika"
                src="/images/1.jpg"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <svg
              width="10"
              height="10"
              fill="currentColor"
              className="fill-current text-white bg-blue-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
            </svg>
          </div>
          <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">
            Enoch Ndika
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <a href="#" className="block relative">
              <img
                alt="Lionel Messi"
                src="/images/2.jpg"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <svg
              width="10"
              height="10"
              fill="currentColor"
              className="fill-current text-white bg-blue-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
            </svg>
          </div>
          <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">
            Lionel Messi
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <a href="#" className="block relative">
              <img
                alt="Jonathan Ilunga"
                src="/images/4.jpg"
                className="mx4auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <svg
              width="10"
              height="10"
              fill="currentColor"
              className="fill-current text-white bg-blue-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
            </svg>
          </div>
          <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">
            Jonathan Ilunga
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <a href="#" className="block relative">
              <img
                alt="Maurice Lokumba"
                src="/images/5.jpg"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <svg
              width="10"
              height="10"
              fill="currentColor"
              className="fill-current text-white bg-blue-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
            </svg>
          </div>
          <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">
            Maurice Lokumba
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <a href="#" className="block relative">
              <img
                alt="CR7"
                src="/images/3.png"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <svg
              width="10"
              height="10"
              fill="currentColor"
              className="fill-current text-white bg-blue-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
            </svg>
          </div>
          <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">
            Cristiano Ronaldo
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative">
            <a href="#" className="block relative">
              <img
                alt="Dave Glad"
                src="/images/6.jpg"
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <svg
              width="10"
              height="10"
              fill="currentColor"
              className="fill-current text-white bg-blue-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
            </svg>
          </div>
          <span className="text-gray-600 dark:text-gray-400 text-xs mt-2">
            Dave Glad
          </span>
        </div>
      </div>
    </div>
    <div className="shadow-lg rounded-xl w-full md:w-4/12 mt-8 md:ml-2 p-4 bg-white dark:bg-gray-800 text-gray-700 relative overflow-hidden">
      <a href="#" className="w-full h-full block">
        <div className="w-full">
          <p className="text-gray-700 dark:text-white  text-2xl font-light mb-4">
            Task Progress
          </p>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <p>Design</p>
            <p>3/8</p>
          </div>
          <div className="w-full h-2 bg-green-100 rounded-full mb-4">
            <div className="w-1/3 h-full text-center text-xs text-white bg-green-400 rounded-full" />
          </div>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <p>Development</p>
            <p>6/10</p>
          </div>
          <div className="w-full h-2 bg-indigo-100 rounded-full mb-4">
            <div className="w-2/3 h-full text-center text-xs text-white bg-indigo-400 rounded-full" />
          </div>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <p>DevOps</p>
            <p>2/8</p>
          </div>
          <div className="w-full h-2 bg-blue-100 rounded-full mb-4">
            <div className="w-1/4 h-full text-center text-xs text-white bg-blue-400 rounded-full" />
          </div>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <p>Marketing</p>
            <p>8/8</p>
          </div>
          <div className="w-full h-2 bg-pink-100 rounded-full">
            <div className="w-full h-full text-center text-xs text-white bg-pink-400 rounded-full" />
          </div>
        </div>
      </a>
    </div>

    <ReportCard></ReportCard>
  </div>
);

export default Content;
