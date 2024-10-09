import Image from "next/image"


const ReadMore = ()=> {
    return (
        <div className="w-80% border pt-[100px] sm:h-[330vh] font-mono pl-16 sm:w-[70%] m-auto text-justify pr-16">
            <h1 className="text-center uppercase font-bold pb-3 text-[20px]">Components In Next JS </h1>
            <p className="pt-4 pb-4 text-[18px]">
            In Next.js, a component is a reusable piece of UI that you can define and use throughout your application. Components can be either functional or class-based, but functional components are more common in modern React and Next.js applications.
            </p>
            <h1 className="text-[20px] font-bold pb-4">Key Points about Components in Next.js:</h1>
            <ol>
                <li  className="pb-5"><span className="font-bold">1: Reusable:</span> Components allow you to encapsulate logic and styles, making it easy to reuse the same piece of code across different parts of your application.</li>
                <li  className="pb-5"><span className="font-bold">2: Composition:</span> You can compose components together to build complex UIs. For example, a Header component can be used within a Layout component, which is then used on different pages.</li>
                <li  className="pb-5"><span className="font-bold">3: Props:</span> Components can accept props (properties) to customize their behavior and appearance. This makes them flexible and dynamic.</li>
                <li  className="pb-5"><span className="font-bold">4: Next.js Features:</span> Next.js offers some specific components and functions, like Link for client-side navigation and Image for optimized images. These components take advantage of Next.js features for improved performance and SEO.</li>
                <li  className="pb-5"><span className="font-bold">5: File Structure:</span> In Next.js, components are typically organized in a components directory. This helps keep your code organized and easy to manage.</li>
                <li  className="pb-5"><span className="font-bold">6: Server-Side Rendering (SSR):</span> While components themselves are client-side, Next.js allows you to use them in pages that benefit from server-side rendering or static site generation, giving you the best of both worlds.</li>
            </ol>
            <h1 className="text-[20px] font-bold pb-4">Example of a Functional Component:</h1>
            <p className="pb-4">Here’s a simple example of a functional component in Next.js:</p>
            <Image className="bg-cover w-[80%]" src={'/code.png'} width={200} height={200} alt="code"/>
            <p className="pt-4">You can use this component in a page like so:</p>
            <Image className="bg-cover w-[80%]" src={'/code-1.png'} width={200} height={200} alt="code"/>
            <p className="pt-4">In this example, MyButton is a reusable component that takes a label and an onClick function as props, making it versatile for different use cases.</p>
            <h3 className="text-center pt-7 text-[20px] font-bold font-mono pb-5">Thank you for reading the blog.</h3>
        </div>
    )
}

export default ReadMore