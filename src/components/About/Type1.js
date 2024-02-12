import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          " Grad At Carnegie Mellon University",
          
          "Former Software Engineer at TIBCO softwares, Nvidia",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    
  );
}

export default Type;
