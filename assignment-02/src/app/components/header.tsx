// import React from "react"

import Link from "next/link"


const Header = ()=>{
    return (
        <div>
            <ul className="header">
                <Link href={'/'}><li className="active">Home</li></Link>
                <Link href={"/profile"}><li>Profile</li></Link>
                <Link href={'./about'}><li>About</li></Link>
                <Link href={'./contact'}><li>Contact</li></Link>
            </ul>
        </div>
    )
}

export default Header