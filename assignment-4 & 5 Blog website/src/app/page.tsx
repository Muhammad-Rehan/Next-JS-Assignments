import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="w-[100%] h-[100%] p-5 ">
      <h1 className="mt-[70px] justify-center flex text-[30px] font-mono uppercase text-gray-600">
        Welcome to my blog
      </h1>
      <div className="flex justify-center mt-8 gap-10 flex-wrap ">
        <div className="h-[415px] sm:w-[250px] w-[95%] bg-cyan-600 rounded-2xl p-2 font-mono">
          <div className="h-[160px] w-[100%] bg-cyan-100 rounded-2xl ">
          </div>
          <div className="p-2 mt-3 ">
            <h1 className="text-white text-[20px] uppercase font-bold">
              Components
            </h1>
            <p className="text-white  sm:text-[14px]">
              In Next.js, a component is a reusable piece of UI that you can
              define and use throughout your application. Click on Read more
              button to see the complete blog{" "}
            </p>
            <Link href={"/componentblog"}>
              <button className="border p-1 w-[90%] text-[20px] mt-2 text-white hover:bg-cyan-100 hover:text-cyan-600 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="h-[415px] sm:w-[250px] w-[95%] bg-cyan-600 rounded-2xl p-2 font-mono">
          <div className="h-[160px] w-[100%] bg-cyan-100 rounded-2xl ">
          </div>
          <div className="p-2 mt-3">
            <h1 className="text-white text-[18px] uppercase font-bold">
              Layout In Next JS
            </h1>
            <p className="text-white sm:text-[14px]">
              In Next.js, a component is a reusable piece of UI that you can
              define and use throughout your application. Click on Read more
              button to see the complete blog{" "}
            </p>
            <Link href={"/layoutblog"}>
              <button className="border p-1 w-[90%] text-[20px] mt-2 text-white hover:bg-cyan-100 hover:text-cyan-600 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="h-[415px] sm:w-[250px] w-[95%] bg-cyan-600 rounded-2xl p-2 font-mono">
          <div className="h-[160px] w-[100%] bg-cyan-100 rounded-2xl"></div>
          <div className="p-2 mt-3">
            <h1 className="text-white text-[18px] uppercase font-bold">
              Color Theory
            </h1>
            <p className="text-white sm:text-[14px]">
              In Next.js, a component is a reusable piece of UI that you can
              define and use throughout your application. Click on Read more
              button to see the complete blog{" "}
            </p>
            <Link href={"/colortheoryblog"}>
              <button className="border p-1 w-[90%] text-[20px] mt-2 text-white hover:bg-cyan-100 hover:text-cyan-600 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="h-[415px] sm:w-[250px] w-[95%] bg-cyan-600 rounded-2xl p-2 font-mono">
          <div className="h-[160px] w-[100%] bg-cyan-100 rounded-2xl"></div>
          <div className="p-2 mt-3">
            <h1 className="text-white text-[18px] uppercase font-bold">
              Server-side rendering
            </h1>
            <p className="text-white sm:text-[14px]">
              In Next.js, a component is a reusable piece of UI that you can
              define and use throughout your application. Click on Read more
              button to see the complete blog{" "}
            </p>
            <Link href={"/serversiderenderingblog"}>
              <button className="border p-1 w-[90%] text-[20px] mt-2 text-white hover:bg-cyan-100 hover:text-cyan-600 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="h-[415px] sm:w-[250px] w-[95%] bg-cyan-600 rounded-2xl p-2 font-mono">
          <div className="h-[160px] w-[100%] bg-cyan-100 rounded-2xl"></div>
          <div className="p-2 mt-3">
            <h1 className="text-white text-[18px] uppercase font-bold">
              Client Side Rendering
            </h1>
            <p className="text-white sm:text-[14px]">
              In Next.js, a component is a reusable piece of UI that you can
              define and use throughout your application. Click on Read more
              button to see the complete blog{" "}
            </p>
            <Link href={"/clientsiderenderingblog"}>
              <button className="border p-1 w-[90%] text-[20px] mt-2 text-white hover:bg-cyan-100 hover:text-cyan-600 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="h-[415px] sm:w-[250px] w-[95%] bg-cyan-600 rounded-2xl p-2 font-mono">
          <div className="h-[160px] w-[100%] bg-cyan-100 rounded-2xl"></div>
          <div className="p-2 mt-3">
            <h1 className="text-white text-[18px] uppercase font-bold">
              Dynamic Rendering
            </h1>
            <p className="text-white sm:text-[14px]">
              In Next.js, a component is a reusable piece of UI that you can
              define and use throughout your application. Click on Read more
              button to see the complete blog{" "}
            </p>
            <Link href={"/dynamicrenderingblog"}>
              <button className="border p-1 w-[90%] text-[20px] mt-2 text-white hover:bg-cyan-100 hover:text-cyan-600 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="h-[415px] sm:w-[250px] w-[95%] bg-cyan-600 rounded-2xl p-2 font-mono">
          <div className="h-[160px] w-[100%] bg-cyan-100 rounded-2xl"></div>
          <div className="p-2 mt-3">
            <h1 className="text-white text-[18px] uppercase font-bold">
              Static Rendering{" "}
            </h1>
            <p className="text-white sm:text-[14px]">
              In Next.js, a component is a reusable piece of UI that you can
              define and use throughout your application. Click on Read more
              button to see the complete blog{" "}
            </p>
            <Link href={"/staticrenderingblog"}>
              <button className="border p-1 w-[90%] text-[20px] mt-2 text-white hover:bg-cyan-100 hover:text-cyan-600 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
        <div className="h-[415px] sm:w-[250px] w-[95%] bg-cyan-600 rounded-2xl p-2 font-mono">
          <div className="h-[160px] w-[100%] bg-cyan-100 rounded-2xl"></div>
          <div className="p-2 mt-3">
            <h1 className="text-white text-[18px] uppercase font-bold">
              ChatGPT
            </h1>
            <p className="text-white sm:text-[14px]">
              In Next.js, a component is a reusable piece of UI that you can
              define and use throughout your application. Click on Read more
              button to see the complete blog{" "}
            </p>
            <Link href={"/chatgptblog"}>
              <button className="border p-1 w-[90%] text-[20px] mt-2 text-white hover:bg-cyan-100 hover:text-cyan-600 rounded-md">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
