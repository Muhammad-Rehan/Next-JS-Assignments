// import Image from "next/image";

import React from "react";


export default function Home() {
  return (
    <>
      {/* Below Code Is With CSS */}
      <div className="homeContainer">
        <div className="childContainer">
          Hey,
          <br />
          My Name is <span className="pinkColor">Muhammad Rehan</span>
          <br />I am Learning Next JS 
        </div>
        <div className="childContainer" >
           {/* <Image className="profile" src={'/profile.png'} alt="profile pic" width={200} height={200}/> */}
           <img className="profile" src={'/profile.png'} alt="profile pic" width={200} height={200}/>
        </div>
      </div>

      {/* Below Code Is With Tailwind */}
      {/* <div className="flex justify-between items-center">
        <div className="w-fit h-[250px] m-[40px] text-[80px] font-black">
          Hey,
          <br />
          My Name is <span className="pinkColor">Shizza</span>
          <br />I am Next JS Developer
        </div>
        <div className=""></div>
      </div> */}
    </>
  );
}