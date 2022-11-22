import React from "react";

const Contact = () => {
  return (
    <div id={"Contact"}>
      <div className="container mx-auto font-press-start h-72 flex  content-center  flex-col place-items-center place-content-center mt-6">
        <h2 className="mb-4 text-lg sm:text-2xl text-white tracking-tight font-bold text-gray-900 dark:text-white">
          Connect with us
        </h2>
        <h2 className={"text-white text-lg sm:text-xl font-press-start "}>
          <a
            className={"no-underline hover:underline"}
            href="mailto: abc@example.com"
          >
            abc@example.com
          </a>
        </h2>
      </div>
    </div>
  );
};

export default Contact;
