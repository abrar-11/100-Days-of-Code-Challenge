import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

const signin = () => {
   const { data: sessions, status } = useSession();
   const { push } = useRouter();
   const [email, setEmail] = useState("");
   const providers = [
      {
         icon: " ",
         name: "github",
      },
      {
         icon: " ",
         name: "google",
      },
      {
         icon: " ",
         name: "google",
      },
   ];

   const handleSignIn = (provider) => {
      signIn(provider);
   };
   const handleEmailSubmit = (e) => {
      e.preventDefault();
      if (email) {
        console.log("imin");
         signIn("email", { email ,redirect:false });
      }
   };

   if (status === "loading") {
      return <h2>Checking Authentication Please Wait .. </h2>;
   }

   if (sessions) {
      // After 6 Seconds it'll redirect to home page
      setTimeout(() => {
         push("/");
      }, 6000);

      return <h2>You are Sign In.. </h2>;
   }

   return (
      <div>
         <form action="" onSubmit={handleEmailSubmit}>
            <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Login</button>
         </form>
         {providers.map((provider) => {
            return (
               <button onClick={() => handleSignIn(provider.name)}>
                  Sign In with {provider.name}
               </button>
            );
         })}
      </div>
   );
};

export default signin;
