import Footer from "../components/footer"
import Header from "../components/header"


const Profile = ()=> {
    return(
        <div>
        <Header />
        {/* <h1>Profile Page</h1> */}
        {/* Below Code Is With CSS */}
      <div className="homeContainer">
        <div className="childContainer">
          Hey,
          <br />
          My Name is <span className="pinkColor">Muhammad Rehan</span>
          <br />I am Learning Next JS 
        </div>
        <div className="childContainer" >
           {/* <Image className="profile" src={'/profile.png'} alt="profile pic" width={200} height={200}/> */}
           <img className="profile" src={'/profile.png'} alt="profile pic" width={200} height={200}/>
        </div>
      </div>
      <Footer />
        </div>
    )
}

export default Profile