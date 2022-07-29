import React from "react";
import Link from "next/link";
const logOut = () => {
   return (
      <div className="">
         <p>Log Out Successfully :)</p>
         <Link href="/">
            <a>Go Back to Home Page</a>
         </Link>
      </div>
   );
};

export default logOut;
