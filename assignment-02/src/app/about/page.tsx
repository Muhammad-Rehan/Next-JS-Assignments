import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"

const About = ()=>{
    return (
        <div>    
        <Header />
        <Image className="image" src={'/about.png'} alt="about" width={100} height={100}/>
        <Footer />
        </div>
    )
}

export default About