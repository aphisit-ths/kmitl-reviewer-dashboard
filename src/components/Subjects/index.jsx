import React from "react";
import Card from "../card";

import { SearchIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/outline";
import { useQuery ,gql} from "@apollo/client";

import SubjectTable from "./SubjectTable";

export const SUBJECTS = gql`
  query SUBJECTS {
  subjectsAdmin {
    id
    course_id
    eng_name
    thai_name
    isAllowed
    createdAt
  }
}
`;

export default function Subjects() {
  const {data,loading,error} = useQuery(SUBJECTS,{pollInterval:3000});
  if (error) return <h1>errors</h1>
  if (loading) return <h1>loading</h1>
  const {subjectsAdmin} = data

  var isAllowed = subjectsAdmin.filter((obj) => {
    return obj.isAllowed === true;
  }).length;
  var unAllowed = subjectsAdmin.filter((obj) => {
    return obj.isAllowed === false;
  }).length;

  return (
    <div className="">
      {/* card---------> */}
      <div className="flex flex-col flex-wrap sm:flex-row">
        <Card data={subjectsAdmin.length} title={"รายวิชา"} bg={"bg-gradient-to-br from-green-300 to-green-600"}></Card>
        <Card data={isAllowed} title={"อนุญาต"} bg={"bg-gradient-to-br from-purple-300 to-purple-600"}></Card>
        <Card data={unAllowed} title={"ไม่อนุญาต"} bg={"bg-gradient-to-br from-blue-300 to-blue-600"}></Card>
      </div>
      <SubjectTable subjects={subjectsAdmin} />
    </div>
  );
}
