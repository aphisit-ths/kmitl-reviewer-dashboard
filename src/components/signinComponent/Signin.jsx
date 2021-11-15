import React, { useState, useContext } from "react";
import Link from "next/link";
import { useMutation, gql } from "@apollo/client";
import { Alert, AlertTitle } from "@material-ui/lab";
import Cookies from "js-cookie";
import Router from "next/router";
import Image from "next/image";
import { AuthContext } from "../../../appstate/AuthProvider";
import { useForm } from "react-hook-form";
import { XIcon } from "@heroicons/react/solid";

const ADMIN_SIGNIN = gql`
  mutation ADMIN_SIGNIN($email: String!, $password: String!) {
    AdminLogin(email: $email, password: $password) {
      user {
        id
        email
        name
        isAdmin
      }
      jwt
    }
  }
`;

function Signin() {
  const { setAuthUser } = useContext(AuthContext);
  const [AdminLogin, { loading, error, data }] = useMutation(ADMIN_SIGNIN, {
    onCompleted: (data) => {
      if (data) {
        setAuthUser(data.AdminLogin.user);
        Cookies.set("jwt", data.AdminLogin.jwt);
        console.log("==> loged in");
        Router.push("/admin/");
      }
      console.log(error);
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ reValidateMode: "onChange" });

  const onSubmit = async (info) => {
    try {
      await AdminLogin({ variables: { ...info } });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center p-5  w-screen h-screen bg-gray-900 ">
      <div className="flex flex-col rounded-md shadow-md w-full bg-gray-100 sm:w-full md:w-2/3 xl:w-1/3   py-10  ">
        <div className="flex flex-col items-center my-10 w-full  ">
          <h1 className=" text-2xl md:text-3xl text-displaycolor font-display font-normal py-3">
            KMITL REVIEWER ADMIN
          </h1>
          <form
            className="flex flex-col w-2/3 m-3 p-3 space-x-5  "
            type="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <span className="font-display mx-5 tracking-wide font-normal text-sm xl:text-xl">
              อีเมล:
            </span>
            <input
              className={` border-2 h-8 w-full md:h-14  mx-5 p-5  ${
                errors.email && " border-red-400 ring-2 ring-red-400"
              }   rounded-lg outline-none  bg-gray-50 `}
              type="text"
              placeholder="อีเมล"
              {...register("email", {
                required: true,
                minLength: 3,
                maxLength: 100,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
            />
            <div className="my-2">
              {errors.email?.type === "required" && (
                <InCurrect args="จำเป็นต้องกรอกอีเมล"></InCurrect>
              )}
              {errors.email?.type === "pattern" && (
                <InCurrect args="รูปแบบอีเมลไม่ถูกต้อง"></InCurrect>
              )}
            </div>

            <span className="font-display tracking-wide mx-5  mt-6 font-normal text-sm xl:text-xl">
              รหัสผ่าน:
            </span>
            <input
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              className={` border-2 h-8 w-full md:h-14  mx-5 p-5 ${
                errors.email && " border-red-400 ring-2 ring-red-400"
              }    rounded-lg outline-none  bg-gray-50 `}
              type="password"
              placeholder="รหัสผ่าน"
            />
            <div className="my-2">
              {errors.password?.type === "required" && (
                <InCurrect args="จำเป็นต้องกรอกรหัสผ่าน"></InCurrect>
              )}
              {errors.password?.type === "minLength" && (
                <InCurrect args="กรอกรหัสผ่านอย่างน้อย 6 ตัวอักษร"></InCurrect>
              )}
            </div>

            {error && (
              <Alert className="mb-5" severity="error">
                {error.message.split("GraphQL error:")}
              </Alert>
            )}

            <button
              type="submit"
              disabled={loading}
              className=" mx-4 mt-6 bg-gray-800 hover:bg-gray-500 hover:shadow-xl ease-in duration-150 text-gray-50  hover:text-white py-4 border font-display text-sm xl:font-normal  w-full  rounded-3xl"
            >
              เข้าสู่ระบบ
            </button>
          </form>

          <span className="font-display text-xs md:text-sm font-light cursor-pointer text-gray-400">
            ยังไม่มีบัญชีผู้ใช้ ?
            <span className="font-display text-xs  md:text-sm  font-medium text-gray-500">
              ให้ไปติดต่อแอดมินเพื่อกำหนดสิทธิ์ เข้าใช้งาน
            </span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Signin;
function InCurrect({ args }) {
  return (
    <div className="flex flex-row items-center space-x-2">
      <p className="ml-2 font-display text-xs md:text-sm text-red-400">
        {args}
      </p>{" "}
      <XIcon className="w-3 h-3  bg-red-300 rounded-full "></XIcon>
    </div>
  );
}
