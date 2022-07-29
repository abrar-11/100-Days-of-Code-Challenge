import React from "react";
import { signIn, useSession } from "next-auth/react";
const Home = () => {
   const { data: sessions } = useSession();

   return (
      <>
         <div>Nextjs Authentication App</div>
         {sessions ? (
            <>
               <p>You are Signed In </p>
            </>
         ) : (
            <>
               <p>You are Not Signed In </p>
               <button onClick={signIn}>Sign In 🚀</button>
            </>
         )}
      </>
   );
};

export default Home;
