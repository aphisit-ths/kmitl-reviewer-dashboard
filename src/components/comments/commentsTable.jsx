import React from "react";
import MaterialTable from "material-table";
import { useMutation, gql } from "@apollo/client";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import CircularProgress from "@mui/material/CircularProgress";
import COMMENTS from "./comment"
const DELETE_COMMETS = gql`
  mutation DELETE_COMMETS(
    $id: ID!
    $userId: String!
    $subjectId: String!
  ) {
    deleteComment(
      id: $id
      userId: $userId
      subjectId: $subjectId
    ) {
      id
      comment
      grade
      year
    }
  }
`;
// const DELETE_SUBJECT = gql`
//   mutation DELETE_SUBJECT($id: ID!) {
//   deleteSubject(id: $id) {
//     id
//   }
// }
// `;
// const UPDATE_SUBJECT = gql`
//  mutation Mutation($id: ID!, $course_id: String, $eng_name: String, $thai_name: String, $isAllowed: Boolean) {
//   updateSubject(id: $id, course_id: $course_id, eng_name: $eng_name, thai_name: $thai_name, isAllowed: $isAllowed) {
//     id
//     course_id
//     eng_name
//     thai_name
//   }
// }`;

export default function CommentsTable({ comments }) {
    const [deleteComment,{loading,error}] = useMutation(DELETE_COMMETS)
  //   const [deleteSubject] = useMutation(DELETE_SUBJECT)
  //   const [updateSubject] = useMutation(UPDATE_SUBJECT)
  const rows = comments.map((obj) => ({
    ...obj,
  }));
  
  const columns = [
    { title: "ผู้ใช้", field: "owner.email" },
    { title: "รหัสวิชา", field: "subjectId.course_id" },
    { title: "วิชา", field: "subjectId.eng_name" },

    {
      title: "สถานะ",
      field: "isAllowed",
      editable: "onUpdate",
      type: "boolean",
    },
    {
      title: "วันที่สร้าง",
      field: "createdAt",
      editable: "never",
    },
  ];
  return (
    <div className=" ">
      {loading &&( <>
      <div className="w-full h-full flex justify-center items-center fixed z-50 bg-gray-800 opacity-50" ><CircularProgress ></CircularProgress ></div>
      </>) }
      {error && 
      <div className="flex w-1/4 h-1/6 bg-red-500 font-display text-white text-xl justify-center items-center rounded-md m-1 absolute z-50 opacity-80 bottom-1 right-1" >พบข้อผิดพลาด {error.graphQLErrors[0].message}
      </div>}
      <MaterialTable
        title="Subjects"
        data={rows}
        columns={columns}
        detailPanel={(rowData) => {
          return (
            <>
              <div className="w-full flex flex-row md:justify-evenly items-center gap-9 h-full p-10 bg-white">
                <div className="flex flex-col max-w-md">
                  {" "}
                  <p className="font-display text-sm md:text-lg font-bold ">
                    {rowData.owner.name}
                  </p>
                  <p className="font-display text-sm md:text-lg font-light">
                    {rowData.comment}
                  </p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-start">
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row space-x-2 items-center">
                      <div className="w-4 h-4 rounded-full bg-red-300"></div>
                      <p className="font-display text-gray-600 text-sm md:text-lg">
                        การบ้าน {rowData.homework_rate}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row space-x-2 items-center">
                      <div className="w-4 h-4 rounded-full bg-green-300"></div>
                      <p className="font-display text-gray-600 text-sm md:text-lg">
                        การสอน {rowData.lecturer_rate}{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-row space-x-2 items-center">
                      <div className="w-4 h-4 rounded-full bg-yellow-300"></div>
                      <p className="font-display text-gray-600 text-sm md:text-lg">
                        เนื้อหา {rowData.content_rate}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
        editable={{
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                console.log(oldData);
                const info = {
                  id:oldData.id,
                  subjectId:oldData.subjectId.id,
                  userId:oldData.owner.id
                }
    
                deleteComment({variables:info, refetchQueries:[COMMENTS]})
                resolve();
              }, 1000);
            }),
        }}
        options={{
          actionsColumnIndex: -1,
          addRowPosition: "first",
          rowStyle: {
            backgroundColor: "#F9FAFB",
            margin: 12,
            fontSize: "0.9em",
            fontWeight: "300",
            fontFamily: "kanit",
          },
          headerStyle: {
            backgroundColor: "#d8d8d8",
            fontWeight: "500",
            fontSize: "1.1em",
            color: "gray",
            fontFamily: "kanit",
          },
          searchFieldStyle: {
            backgroundColor: "#f8f8f9",
            borderRadius: 15,
            padding: 6,
          },
        }}
      />
    </div>
  );
}
