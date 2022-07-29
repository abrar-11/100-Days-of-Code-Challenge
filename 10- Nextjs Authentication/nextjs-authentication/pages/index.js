import React from "react";
import {  signOut, useSession } from "next-auth/react";
import {useRouter} from "next/router";
const Home = () => {
   const { data: sessions } = useSession();

   const {push,asPath} = useRouter()

   const handleSignOut = async () => {
     const data = await signOut({ redirect: false , callbackUrl : '/logOut'   });

     console.log(data)

     push(data.url)

   };

   const handleSignIn  = () => push(`/auth/signIn?callbackurl=${asPath}`)
   return (
      <>
         <div>Nextjs Authentication App</div>
         {sessions ? (
            <>
               <h3>Welcome {sessions.user.name}</h3>
               <div>
                  <img
                     src={sessions.user.image}
                     alt="avatar"
                     width="150"
                     height="150"
                  />
               </div>
               <p>You are Signed In </p>
               <button onClick={handleSignOut}>Sign Out</button>
            </>
         ) : (
            <>
               <p>You are Not Signed In </p>
               <button onClick={handleSignIn}>Sign In 🚀</button>
            </>
         )}
      </>
   );
};

export default Home;
