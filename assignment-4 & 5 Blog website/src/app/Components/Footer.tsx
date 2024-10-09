import Link from "next/link"


const Footer = ()=> {
    return (
        <div className="h-56 bg-cyan-600 flex justify-around pt-9 font-mono text-white text-[18px] mt-10" >
            <div className="pl-5">
                <h1>Designed By Muhamamd Rehan</h1>
                <p>Copyright &copy; 2024</p>
            </div>
            <div>
                <ul>
                <Link href={'./'}><li className="hover:text-cyan-950 hover:border-b-1">Home</li></Link>
                    <Link href={'/about'}><li className="hover:text-cyan-950 hover:border-b-1">About Author</li></Link>
                    <Link href={'/new-blog'}><li className="hover:text-cyan-950 ">New Blogs</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Footer