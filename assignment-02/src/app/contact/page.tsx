import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"


const Contact = ()=> {
    return (
        <div>
         <Header />   
        <Image className="image" src={'/contact.jpg'} alt="contact" width={100} height={100}></Image>
        <Footer />
        </div>
    )
}

export default Contact