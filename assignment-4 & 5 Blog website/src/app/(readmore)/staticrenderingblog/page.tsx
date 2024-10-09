

const StaticRenderingBlog = ()=> {
    return (
        <div className="w-80% border pt-[100px] sm:h-[160vh] font-mono pl-16 sm:w-[70%] m-auto text-justify pr-16">
            <h1 className="text-center uppercase font-bold pb-3 text-[20px]">Static rendering in Next.js </h1>
            <p className="pt-4 pb-4 text-[18px]">
            
            Static rendering in Next.js refers to the process of generating HTML at build time for pages that don't change frequently. This approach results in faster page loads and better performance since the content is pre-rendered and served as static files.Whenever a user visits your application, the cached result is served. There are a couple of benefits of static rendering:
            </p>
            <ol>
                <li  className="pb-5"><span className="font-bold">1: Faster Websites:  </span> Prerendered content can be cached and globally distributed. This ensures that users around the world can access your website's content more quickly and reliably.</li>
                <li  className="pb-5"><span className="font-bold">2: Reduced Server Load:  </span> Because the content is cached, your server does not have to dynamically generate content for each user request.</li>
                <li  className="pb-5"><span className="font-bold">3: SEO: </span> Prerendered content is easier for search engine crawlers to index, as the content is already available when the page loads. This can lead to improved search engine rankings.</li>
            </ol>
            <h1 className="text-[20px] font-bold pb-4">Conclusion</h1>
            <p className="pb-4">Static rendering is ideal for content that does not change often, such as marketing pages, blogs, and documentation. By leveraging SSG and ISR, Next.js enables developers to create fast, SEO-friendly web applications while maintaining the flexibility to update content when needed.</p>
            <h3 className="text-center pt-7 text-[20px] font-bold font-mono pb-5">Thank you for reading the blog.</h3>
        </div>
    )
}

export default StaticRenderingBlog