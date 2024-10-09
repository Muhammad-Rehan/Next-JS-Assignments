



const ClientSideRenderingBlog = ()=> {
    return (
        <div className="w-80% border pt-[100px] sm:h-[150vh] font-mono pl-16 sm:w-[70%] m-auto text-justify pr-16">
            <h1 className="text-center uppercase font-bold pb-3 text-[20px]"> Client-side rendering (CSR) in Next.js </h1>
            <p className="pt-4 pb-4 text-[18px]">
            
            Client-side rendering (CSR) in Next.js allows you to render pages directly in the browser, providing a more dynamic user experience after the initial load. Here’s a brief overview of how CSR works in Next.js and how you can implement it:
            </p>
            <h1 className="text-[20px] font-bold pb-4">Key Concepts</h1>
            <ol>
                <li  className="pb-5"><span className="font-bold">1: Dynamic Pages:  </span> CSR is particularly useful for pages that require frequent updates or user interactions, such as dashboards or applications with real-time data.</li>
                <li  className="pb-5"><span className="font-bold">2: React Components: </span> In Next.js, you can create components that leverage Reacts state and lifecycle methods to manage dynamic data.</li>
                <li  className="pb-5"><span className="font-bold">3: Data Fetching: </span> While Next.js supports various data fetching methods (like getStaticProps and getServerSideProps), you can also fetch data on the client side using hooks like useEffect.</li>
                
            </ol>
            <h1 className="text-[20px] font-bold pb-4">Conclusion</h1>
            <p className="pb-4">By understanding and leveraging client-side rendering in Next.js, you can build interactive, dynamic applications that provide a great user experience.</p>
            <h3 className="text-center pt-7 text-[20px] font-bold font-mono pb-5">Thank you for reading the blog.</h3>
        </div>
    )
}

export default ClientSideRenderingBlog