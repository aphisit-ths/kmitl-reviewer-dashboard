import React from "react";
import Card from "../card";
import UserOptions from "./user_options";
import { SearchIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/outline";
import { useQuery,gql } from "@apollo/client";

import UsersTable from "./userstable";

export const USERS = gql`
  query USERS {
  users {
    id
    name
    email
    isAdmin
    createdAt
  }
}`;

// const people = [
//   {
//     name: "Jane ",
//     title: "Regional Paradigm Technician",
//     department: "Optimization",
//     isAdmin: true,
//     email: "jane.cooper@example.com",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Cooper",
//     title: "Regional Paradigm Technician",
//     department: "Optimization",
//     isAdmin: false,
//     email: "jane.cooper@example.com",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Jordan",
//     title: "Regional Paradigm Technician",
//     department: "Optimization",
//     isAdmin: false,
//     email: "jane.cooper@example.com",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "Oath",
//     title: "Regional Paradigm Technician",
//     department: "Optimization",
//     isAdmin: false,
//     email: "jane.cooper@example.com",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
//   {
//     name: "John Doe",
//     title: "Regional Paradigm Technician",
//     department: "Optimization",
//     isAdmin: false,
//     email: "jane.cooper@example.com",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
//   },
// ];

export default function Users() {
  const {data,loading,error} = useQuery(USERS,{pollInterval:3000});
  if (error) return <h1>errors</h1>
  if (loading) return <h1>loading</h1>
  const people = data.users

  var countAdmin = people.filter((admins) => {
    return admins.isAdmin === true;
  }).length;

  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }
  var date = new Date();
  var month = pad2(date.getMonth()+1);//months (0-11)
  var day = pad2(date.getDate());//day (1-31)
  var year= date.getFullYear();
  
  var formattedDate =  year+"-"+month+"-"+day;

  var newUsertoday = people.filter((today) => {
    return today.createdAt.split("T")[0] === formattedDate.toString()
  }).length;

  return (
    <div className="">
      {/* card---------> */}
      <div className="flex flex-col flex-wrap sm:flex-row">
        <Card data={people.length} title={"ผู้ใช้งานทั้งหมด"} bg={"bg-gradient-to-br from-yellow-300 to-yellow-600 "}></Card>
        <Card data={countAdmin} title={"แอดมิน"} bg={"bg-gradient-to-br from-indigo-300 to-indigo-600"}></Card>
        <Card data={newUsertoday} title={"เพิ่มวันนี้ +"} bg={"bg-gradient-to-br from-green-300 to-green-600"}></Card>
      </div>
      {/* card---------> */}
      {/* <div className="py-2 flex flex-row items-center relative text-gray-600">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <SearchIcon className="w-6 h-6 mx-2"></SearchIcon>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Created
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((person) => (
                      <tr key={person.email}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex justify-center items-center h-8 w-8 bg-gray-200 rounded-full">
                              <UserIcon className="w-5 h-5" ></UserIcon>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {person.createdAt}
                          </div>
                          <div className="text-sm text-gray-500">
                            {person.department}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              person.isAdmin ? "bg-red-300" : "bg-green-200"
                            } text-green-800`}
                          >
                            {person.isAdmin ? "Admin" : "User"}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <UserOptions id={person.name} />
                        </td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
      <UsersTable users={people} />
    </div>
  );
}
