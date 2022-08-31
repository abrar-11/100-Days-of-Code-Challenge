import React from "react";
import Faq from "./Faq";

const faqs = [
   {
      question: "How long until we deliver your first blog post? ",
      answer:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsum tempore libero impedit nemo, ad provident illo vero non sapiente. ",
   },
   {
      question: "What if we do not have any design? ",
      answer:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsum tempore libero impedit nemo, ad provident illo vero non sapiente. ",
   },
   {
      question: "How long until we deliver your project? ",
      answer:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsum tempore libero impedit nemo, ad provident illo vero non sapiente. ",
   },
   {
      question: "Will you provide customer support ? ",
      answer:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsum tempore libero impedit nemo, ad provident illo vero non sapiente. ",
   },
   {
      question: "How long until we deliver your first blog post? ",
      answer:
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos ipsum tempore libero impedit nemo, ad provident illo vero non sapiente. ",
   },
];

const index = () => {
   return (
      <>
         <div className="">
            <div>
               <div class="relative flex flex-col items-center justify-center sm:px-0  pb-32">
                  <div class="md:py-20 py-10">
                     <h1
                        role="heading"
                        class="xl:text-5xl md:text-5xl text-xl font-medium leading-10 text-light text-center" 
                     >
                        Frequently Asked Questions
                     </h1>
                  </div>

                  {faqs.map((faq) => {
                     return <Faq question={faq.question} answer={faq.answer} />;
                  })}
                
               </div>
            </div>
         </div>
      </>
   );
};

export default index;
