
import Image from "next/image"


const LayoutBlog = ()=> {
    return (
        <div className="w-80% border pt-[100px] sm:h-[450vh] font-mono pl-16 sm:w-[70%] m-auto sm:text-justify pr-16">
            <h1 className="text-center uppercase font-bold pb-3 text-[20px]">Layout In Next JS </h1>
            <p className="pt-4 pb-4 text-[18px]">
            
In Next.js, a layout is a component that provides a consistent structure and design across multiple pages in your application. It allows you to define shared elements such as headers, footers, navigation menus, and any other UI components that you want to appear on multiple pages.
            </p>
            <h1 className="text-[20px] font-bold pb-4">Key Features of Layouts in Next.js:</h1>
            <ol>
                <li  className="pb-5"><span className="font-bold">1: Code Reusability:</span> By creating a layout component, you can avoid code duplication and manage your UI structure more effectively.</li>
                <li  className="pb-5"><span className="font-bold">2: Consistency:</span> Layouts help maintain a uniform look and feel throughout your application, making it easier for users to navigate.</li>
                <li  className="pb-5"><span className="font-bold">3: Dynamic Content:</span> You can pass props to your layout to customize its content based on the specific page being rendered.</li>
                <li  className="pb-5"><span className="font-bold">4: Nested Layouts:</span> Next.js allows for nested layouts, enabling complex structures where different sections of your app can have their own layouts.</li>
                
            </ol>
            <h1 className="text-[20px] font-bold pb-4">Creating a Layout in Next.js:</h1>
            <p className="pb-4">Here is a basic example of how to create and use a layout component in a Next.js application:</p>
            <h2>1: Create a Layout Component:</h2>
            <Image className="bg-cover w-[80%]" src={'/code-2.png'} width={200} height={200} alt="code"/>
            <h2 className="pt-4">2: Use the Layout in Pages:</h2>
            <Image className="bg-cover w-[80%]" src={'/code-3.png'} width={200} height={200} alt="code"/>
            <h2 className="pt-4">3: Adding More Pages:</h2>
            <Image className="bg-cover w-[80%]" src={'/code-4.png'} width={200} height={200} alt="code"/>
            <h2 className="pt-4">Using Next.js App Directory (for v13 and above):</h2>
            
            <p className="pt-4">
            If you are using the App Router introduced in Next.js 13, layouts are handled a bit differently. You can create a layout file within the app directory:</p>
            <Image className="bg-cover w-[80%]" src={'/code-5.png'} width={200} height={200} alt="code"/>
            <h3 className="text-center pt-7 text-[20px] font-bold font-mono pb-5">Thank you for reading the blog.</h3>
        </div>
    )
}

export default LayoutBlog