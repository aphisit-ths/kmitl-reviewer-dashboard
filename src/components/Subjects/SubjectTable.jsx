import React from "react";
import MaterialTable from "material-table";
import { useMutation, gql } from "@apollo/client";
import { USERS } from "./index";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import CircularProgress   from '@mui/material/CircularProgress';

import {SUBJECTS} from "./index";

const ADD_SUBJECT = gql`
  mutation ADD_SUBJECT(
    $course_id: String!
    $eng_name: String!
    $thai_name: String!
  ) {
    addSubject(
      course_id: $course_id
      eng_name: $eng_name
      thai_name: $thai_name
    ) {
      id
      course_id
      createdAt
      eng_name
      thai_name
    }
  }
`;
const DELETE_SUBJECT = gql`
  mutation DELETE_SUBJECT($id: ID!) {
  deleteSubject(id: $id) {
    id
  }
}
`;
const UPDATE_SUBJECT = gql`
 mutation Mutation($id: ID!, $course_id: String, $eng_name: String, $thai_name: String, $isAllowed: Boolean) {
  updateSubject(id: $id, course_id: $course_id, eng_name: $eng_name, thai_name: $thai_name, isAllowed: $isAllowed) {
    id
    course_id
    eng_name
    thai_name
  }
}`;

export default function SubjectTable({ subjects }) {
  const [addSubject,{loading,error}] = useMutation(ADD_SUBJECT)
  const [deleteSubject] = useMutation(DELETE_SUBJECT)
  const [updateSubject] = useMutation(UPDATE_SUBJECT)
  const rows = subjects.map((obj) => ({
    ...obj,
  }));
  const columns = [
    { title: "รหัสวิชา", field: "course_id",},
    { title: "ชื่อวิชาภาษาไทย", field: "thai_name",  },
    { title: "ชื่อวิชาภาษาอังกฤษ", field: "eng_name",  },
    {
      title: "สถานะ",
      field: "isAllowed",editable:"onUpdate",
      lookup: { true: "ตรวจสอบแล้ว", false: "ยังไม่ตรวจสอบ" },
      render: (row) => (
        <p
          className={`p-1 w-1/2  ${
            row.isAllowed ? "text-green-400" : "text-red-500"
          } `}
        >
          {row.isAllowed ? "ตรวจสอบแล้ว" : "ยังไม่ตรวจสอบ"}
        </p>
      ),
      type: "boolean",
    },{
      title:"วันที่สร้าง" ,field:"createdAt",editable:"never"
    }
  ];
  
  return (
    <div className=" ">
      {loading &&( <>
      <div className="w-full h-full flex justify-center items-center fixed z-50 bg-gray-800 opacity-50" ><CircularProgress ></CircularProgress ></div>
      </>) }
      {error && 
      <div className="flex w-1/4 h-1/6 bg-red-500 font-display text-white text-xl justify-center items-center rounded-md m-1 absolute z-50 opacity-80 bottom-1 right-1" >พบข้อผิดพลาด {error.graphQLErrors[0].message}</div>}
        <MaterialTable
          title="Subjects"
          data={rows}
          columns={columns}
          editable={{
            onRowAdd: newData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                  addSubject({variables:newData,refetchQueries:[SUBJECTS]})
                    console.log(newData)
                    resolve();
                }, 1000);
            }),
            onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                  const updatedStatus = newData.isAllowed === "true";
                  const info = {
                    id:newData.id,
                    course_id:newData.course_id,
                    eng_name:newData.eng_name,
                    thai_name:newData.thai_name,
                    isAllowed:updatedStatus
                  }
                  console.log(info)
                   updateSubject({variables:info,refetchQueries:[SUBJECTS]})
                    resolve();
                }, 1000);
            }),
        onRowDelete: oldData =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(oldData.id)
                    deleteSubject({variables:{id:oldData.id},refetchQueries:[SUBJECTS]})
                    resolve();
                }, 1000);
            })
          }}
          options={{
            actionsColumnIndex: -1,
            addRowPosition:"first",
            rowStyle: {
              backgroundColor: "#F9FAFB",
              margin: 12,
              fontSize: "1em",
              fontWeight: "300",
              fontFamily:"kanit"
            },
            headerStyle: {
              backgroundColor: "#d8d8d8",
              fontWeight: "500",
              fontSize: "1.1em",
              color: "gray",
              fontFamily:"kanit"
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
