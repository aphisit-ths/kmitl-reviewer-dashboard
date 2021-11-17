import React from "react";
import Card from "../card";

import { SearchIcon } from "@heroicons/react/solid";
import { UserIcon } from "@heroicons/react/outline";
import { useQuery,gql } from "@apollo/client";

import CommentsTable from "./commentsTable";

export const COMMENTS = gql`
  query COMMENTS {
  subjectComments {
    id
    comment
    grade
    year
    lecturer_rate
    content_rate
    homework_rate
    createdAt
    subjectId {
      id
      course_id
      eng_name
    }
    owner {
      id
      email
      name
    }
  }
}`;


export default function Comments() {
  const {data,loading,error} = useQuery(COMMENTS,{pollInterval:3000});
  if (error) return <h1>errors</h1>
  if (loading) return <h1>loading</h1>
  const comments = data.subjectComments

  var countAdmin = comments.filter((admins) => {
    return admins.isReport === true;
  }).length;

  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }
  var date = new Date();
  var month = pad2(date.getMonth()+1);//months (0-11)
  var day = pad2(date.getDate());//day (1-31)
  var year= date.getFullYear();
  var formattedDate =  year+"-"+month+"-"+day;
  var newUsertoday = comments.filter((today) => {
    return today.createdAt.split("T")[0] === formattedDate.toString()
  }).length;

  return (
    <div className="">
      {/* card---------> */}
      <div className="flex flex-col flex-wrap sm:flex-row">
        <Card data={comments.length} title={"คอมเม้นทั้งหมด"} bg={"bg-gradient-to-br from-yellow-300 to-yellow-600 "}></Card>
        <Card data={countAdmin} title={"การรายงาน"} bg={"bg-gradient-to-br from-indigo-300 to-indigo-600"}></Card>
        <Card data={newUsertoday} title={"เพิ่มวันนี้ +"} bg={"bg-gradient-to-br from-green-300 to-green-600"}></Card>
      </div>
        <CommentsTable comments={comments}/>
    </div>
  );
}
