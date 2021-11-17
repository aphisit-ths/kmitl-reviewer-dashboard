import "tailwindcss/tailwind.css";
import DashboardLayout from "../src/dashboard/layout";
import { ApolloProvider } from "@apollo/client";
import apolloclient from "../lib/apolloClient";
import fetch from "isomorphic-unfetch";
import cookie from "cookie";
import AuthProvider from "../appstate/AuthProvider";
function MyApp({ Component, pageProps, user, apollo }) {
  return (
    <>
      <ApolloProvider client={apollo}>
        <AuthProvider userData={user}>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </AuthProvider>
      </ApolloProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ ctx ,router }) => {
  //Client Side
  
  if (process.browser) {
    return __NEXT_DATA__.props.pageProps;
  }
  
  const { headers } = ctx.req;
  const cookies = headers && cookie.parse(headers.cookie || "");
  const token = cookies && cookies.jwt;
  
  if(!token){
    if(router.pathname === '/admin/users' || router.pathname === '/admin/subjects' || router.pathname === '/admin/'){
      ctx.res.writeHead(302,{location:"/signin"})
      ctx.res.end()
    }
    return null
  }else{
    if(router.pathname === '/signin'){
      ctx.res.writeHead(302,{location:"/"})
      ctx.res.end()
    }
  }
  //สร้างไว้ก่อนเพื่อรอ Client Side
  const QUERY_USER = {
    query: `
      query{
        user {
          id
          name
          email
          isAdmin
        }
      }
    `,
  };
  
  const response = await fetch("https://backend-gql-kmitlreviewer.herokuapp.com/graphql", { 
    //Gql Post เสมอ
    method: "post",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token} || ''`,
    },
    body: JSON.stringify(QUERY_USER),
  });
  
  if (response.ok) {
    const result = await response.json();
    return { user: result.data.user};
  } else {
    if(router.pathname === '/admin/users' || router.pathname === '/admin/subjects' || router.pathname === '/admin/'){
      ctx.res.writeHead(302,{location:"/signin"})
      ctx.res.end()
    }
    return null;
  }
};

export default apolloclient(MyApp);
