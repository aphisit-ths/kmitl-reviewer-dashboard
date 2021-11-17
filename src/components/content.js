import react from "react";
import ReportCard from "./report_card";
import Card from "./card";
import Link from "next/link";
const Content = ({ title }) => (
  <div className="flex flex-col flex-wrap sm:flex-row">
    <Link  href="admin/users/" passHref>
      <Card
        data={">"}
        title={"ผู้ใช้งาน"}
        bg={"bg-gradient-to-br from-yellow-300 to-yellow-600 "}
      ></Card>
    </Link>
    <Link href="admin/subjects">
      
      <Card
        data={">"}
        title={"รายวิชา"}
        bg={"bg-gradient-to-br from-indigo-300 to-indigo-600"}
      ></Card>
    </Link>
    <Link href="admin/comments">
      
      <Card
        data={">"}
        title={"ความคิดเห็นของผู้ใช้"}
        bg={"bg-gradient-to-br from-green-300 to-green-600"}
      ></Card>
    </Link>

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
