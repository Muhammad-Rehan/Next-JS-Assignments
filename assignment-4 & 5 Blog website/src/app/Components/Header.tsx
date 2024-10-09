import Link from "next/link"


const Header = ()=>{
    return (
        <div className="flex justify-around items-center bg-cyan-600 h-20 font-mono fixed w-[100%]  flex-col">
            <div>
                <Link href={'/'} ><h1 className="sm:text-2xl text-white font-extrabold">MR. Blog Site</h1></Link>
            </div>
            <div>
                <ul  className="flex justify-between text-white gap-6 font-mono sm:text-xl">
                    <Link href={'/'}><li className="hover:text-cyan-950 hover:border-b-1">Home</li></Link>
                    <Link href={'/aboutauthor'}><li className="hover:text-cyan-950 hover:border-b-1">About Author</li></Link>
                    <Link href={'/newblogs'}><li className="hover:text-cyan-950 ">New Blogs</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Header