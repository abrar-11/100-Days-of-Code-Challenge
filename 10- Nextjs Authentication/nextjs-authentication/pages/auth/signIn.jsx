import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";



const signin = () => {
   const { data: sessions, status } = useSession();
   const { push } = useRouter();

   const providers = [
      {
         icon: " ",
         name: "github",
      },
      {
         icon: " ",
         name: "google",
      },
   ];

   const handleSignIn = (provider) => {
      signIn(provider);
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
