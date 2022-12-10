import React from "react";
import { Widget } from "@typeform/embed-react";
import { PopupButton } from "@typeform/embed-react";
const Contact = () => {
  return (
    <div id={"Contact"}>
      {/*<div className="container mx-auto font-press-start h-72 flex  content-center  flex-col place-items-center place-content-center mt-6">*/}
      {/*  <h2 className="mb-4 text-lg sm:text-2xl text-black tracking-tight font-bold ">*/}
      {/*    Connect with us*/}
      {/*  </h2>*/}
      {/*  <h2 className={"text-black text-lg sm:text-xl font-press-start "}>*/}
      {/*    <a*/}
      {/*      className={"no-underline hover:underline"}*/}
      {/*      href="mailto: abc@example.com"*/}
      {/*    >*/}
      {/*      abc@example.com*/}
      {/*    </a>*/}
      {/*  </h2>*/}
      {/*</div>*/}
      <Widget
        id="https://m5kvanqpcre.typeform.com/to/TBRcM79F"
        style={{ width: "100%", height: "100vh" }}
        className="my-form"
      />
      {/*<PopupButton*/}
      {/*  id="https://m5kvanqpcre.typeform.com/to/TBRcM79F"*/}
      {/*  style={{ fontSize: 20 }}*/}
      {/*  className="my-button"*/}
      {/*>*/}
      {/*  click to open form in popup*/}
      {/*</PopupButton>*/}
    </div>
  );
};

export default Contact;
