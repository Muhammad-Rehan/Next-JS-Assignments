
import Image from "next/image"


const ColorTheoryBlog = ()=> {
    return (
        <div className="w-80% border pt-[100px] sm:h-[220vh] font-mono pl-16 sm:w-[70%] m-auto text-justify pr-16">
            <h1 className="text-center uppercase font-bold pb-3 text-[20px]">Color Theory </h1>
            <p className="pt-4 pb-4 text-[18px]">
            
            Color theory is the study of how colors interact, how they can be combined, and the psychological effects they have. It’s essential in art, design, and visual communication. Here are the key components:
            </p>
            <Image className="bg-cover m-auto" src={'/code-6.png'} width={300} height={200} alt="code"/>
            <ol className="pt-5">
                <li  className="pb-5"><span className="font-bold">1: Color Wheel:</span> A circular diagram of colors arranged by their relationships. The primary colors (red, blue, yellow) combine to create secondary colors (green, orange, purple), and tertiary colors are formed by mixing primary and secondary colors.</li>
                <li  className="pb-5"><span className="font-bold">2: Color Harmony: </span> Refers to the aesthetically pleasing combinations of colors. Common schemes include complementary (opposite colors), analogous (colors next to each other), and triadic (three colors evenly spaced on the wheel).</li>
                <li  className="pb-5"><span className="font-bold">3: Color Context:</span>  How colors can change their appearance depending on the colors surrounding them. This principle highlights the importance of contrast and interaction in design.</li>
                <li  className="pb-5"><span className="font-bold">4: Psychological Effects:</span> Different colors can evoke specific emotions and associations. For example, blue often conveys calmness, while red can signify energy or urgency.</li>
                <li  className="pb-5"><span className="font-bold">5: Color Properties: </span> Colors have three main properties—hue (the color itself), saturation (the intensity or purity of the color), and value (the lightness or darkness of a color).</li>
                
            </ol>
            <p className="pt-4">
            Understanding these principles helps artists, designers, and marketers create visually appealing and effective work.</p>
            <h3 className="text-center pt-7 text-[20px] font-bold font-mono pb-5">Thank you for reading the blog.</h3>
        </div>
    )
}

export default ColorTheoryBlog