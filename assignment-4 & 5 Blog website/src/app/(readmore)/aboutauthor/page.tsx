import Link from "next/link"


const AboutAuthor = ()=> {
    return (
        <div className="w-80% border pt-[100px] sm:h-[150vh] font-mono pl-16 sm:w-[70%] m-auto text-justify pr-16">
            <h1 className="text-center uppercase font-bold pb-3 text-[20px] " >About Author </h1>
            <p className="pt-4 pb-4 text-[18px]">
            
            Assalamoalikum. This is Muhammad Rehan. By professional I'm a Team Leader in Trading company where we supply different industrial products inculding machineries , pumps , Chillers, Heat Exchanger and spares of different equipment in industries of Pakistan which includes Oil and Gas, Fertilizers, Refineries, Chemical, Food , and many other industries in Pakistan.   
            </p>
            <p className="pt-4 pb-4 text-[18px]">
                Beside above I'm being a part of GIAIC as a student and leaning different tech skills which helps us to grow and compete in the tech industries. 
            </p>

            <p className="pt-4 pb-4 text-[18px]">
            This blog has been created with passions and dedications for the users to read , learn and increase knowledge in techology.
            </p>
            <p className="pt-4 pb-4 text-[18px]">You may reach to author to the below platforms</p>
            <ul className="pb-5">
                <li>Github: <Link className="hover:text-blue-700" target="_blank" href={'https://github.com/muhammad-rehan'}>https://github.com/muhammad-rehan</Link></li>
            </ul>
            
        </div>
    )
}

export default AboutAuthor