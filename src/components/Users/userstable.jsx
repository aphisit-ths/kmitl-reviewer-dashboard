import React from "react";
import MaterialTable from "material-table";
import { useMutation ,gql} from "@apollo/client";
import { USERS } from "./index";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";
const UPDATE_ROLE = gql`
  mutation UPDATE_ROLE($id: ID!, $isAdmin: Boolean!) {
    updateRole(id: $id, isAdmin: $isAdmin) {
      id
      isAdmin
      name
      email
    }
  }
`;
const DELETE_USER = gql`
  mutation DELETE_USER($id: ID!) {
    deleteUser(userId: $id) {
      id
      name
      email
      isAdmin
    }
  }
`;

export default function UsersTable({ users }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#f50057",
      },
    },
  });
  const rows = users.map((obj) => ({
    ...obj,
  }));
  const columns = [
    { title: "Name", field: "name", editable: "never" },
    { title: "Email", field: "email", editable: "never" },
    { title: "CreatedDate", field: "createdAt", editable: "never" },
    {
      title: "Role",
      field: "isAdmin",
      lookup: { true: "admin", false: "user" },
      render: (row) => (
        <p
          className={`p-1 w-1/2  ${
            row.isAdmin ? "text-red-400" : "text-gray-500"
          } `}
        >
          {row.isAdmin ? "Admin" : "User"}
        </p>
      ),
      type: "boolean",
    },
  ];
  const [updateRole, { loading, error }] = useMutation(UPDATE_ROLE, {
    refetchQueries: [USERS],
  });
  const [deleteUser] = useMutation(DELETE_USER, {
    refetchQueries: [USERS],
  });
  if (loading) return <p>loading...</p>;
  if (error) return <p>error...</p>;
  return (
    <div className=" ">
      <MuiThemeProvider theme={theme}>
        <MaterialTable
          title="Users"
          data={rows}
          columns={columns}
          editable={{
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  deleteUser({ variables: { id: oldData.id } });
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const updatedRole = newData.isAdmin === "true";
                  const info = {
                    id: newData.id,
                    isAdmin: updatedRole,
                  };
                  updateRole({ variables: info });
                  resolve();
                }, 1000);
              }),
          }}
          options={{
            
            actionsColumnIndex: -1,
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
      </MuiThemeProvider>
    </div>
  );
}
