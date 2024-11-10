import Image from "next/image";
import Link from "next/link";
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div className="overflow-hidden">
<div className="flex justify-around items-center w-[1440px] h-[88px]">
      <div className="w-[65.4px] h-[22.87px] ml-40">
        <Image src={'/logo.png'} width={65.4} height={22.87} alt="logo"></Image>
      </div>
      <div>
        <input  className={`w-[372px] h-[56px] bg-[#F5F5F5] rounded-md pl-12 text-[14px] font-medium ${inter.className}`} type="search"  placeholder="Search" />
      </div>
      <div className="w-[369px] h-[19px]">
        <nav>
          <ul  className={`flex gap-10 ${inter.className}`}>
            <li className="text-black font-medium"><Link href={''}>Home</Link></li>
            <li className="opacity-30 hover:text-black"><Link href={''}>About</Link></li>
            <li className="opacity-30 hover:text-black"><Link href={''}>Contact us</Link></li>
            <li className="opacity-30 "><Link href={''}>Blog</Link></li>
          </ul>
        </nav>
      </div>
      <div className="mr-40">
        <Image src={'/icons.png'} width={124} height={32} alt="icons"></Image>
      </div>      
    </div>
    <div className="w-[1440px] h-[632px] bg-[#211c24] flex justify-around items-center">
        <div className="flex flex-col gap-6">
          <p className={`font-semibold text-[25px]  text-left text-[#FFFFFF] opacity-60 ${inter.className}` }>Pro.Beyond.</p>
          <h1 className={`text-[96px] font-thin leading-[72px] text-left text-[#FFFFFF] ${inter.className}`} >IPhone 14 <span className={`font-semibold ${inter.className}`}>Pro</span></h1>
          <p className={`font-medium text-[18px] leading-6 text-[#909090] ${inter.className}`}>Created to change everything for the better. For everyone</p>
          <button className={`${inter.className} w-[191px] h-[56px] text-center  pt-4 pb-4 text-white  border-2 text-[16px] font-medium rounded-md`}>Shop Now</button>
        </div>
        <div>
        <Image src={'/Iphone Image.png'} width={406} height={632} alt="icons"></Image>
        </div>
    </div>
    <div className="flex justify-between  w-[1440px] h-[600px]  ">
    <div className="w-[44%] bg-white flex flex-wrap">
        <div className="w-[50%] h-[60%] flex  ">
          <Image src={'/PlayStation.png'} width={360} height={328} alt="playstation"></Image>
        </div>
        <div className="w-[50%] h-[60%]  flex flex-col justify-center ">
          <h1 className={`w-[338px] h-[40px] ${inter.className} font-medium text-[49px] text-[#] leading-[10px] `}>Playstation 5</h1>
          <p className={`${inter.className} w-[338px] h-[72px] text-[#909090] text-[14px] font-medium`}>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
        </div>
        <div className="h-[40%] w-[1000px] flex " >
          <div className="w-[360px] h-[239px] bg-[#EDEDED] flex items-center gap-10">
            <Image src={'/hero-left.png'} width={93} height={272} alt="airpod"></Image>
              <div>
              <h3 className={`w-[160px] h-[120px] text-[29px] leading-10 ${inter.className} `}>Apple AirPods <span className="font-semibold">Max</span></h3>
              <p className={`w-[160px] h-[48px] text-[14px] font-medium text-[#909090]  ${inter.className} `}>Computational audio. Listen, it's powerful</p>
              </div>
          </div>
          <div className="w-[360px] h-[239px] bg-[#353535]">
          <div className="w-[360px] h-[239px]  flex items-center gap-10">
            <Image src={'/image 36.png'} width={93} height={272} alt="airpod"></Image>
              <div>
              <h3 className={`w-[160px] h-[120px] text-[29px] leading-10 text-white ${inter.className} `}>Apple Vision  <span className="font-semibold">Pro</span></h3>
              <p className={`w-[160px] h-[48px] text-[14px] font-medium text-[#909090]  ${inter.className} `}>An immersive way to experience entertainment</p>
              </div>
          </div>
          </div>
        </div>
        </div>
      <div className="w-[50%] h-[600px] flex  justify-around  items-center bg-[#EDEDED] ">
      <div className="flex flex-col w-[360px] h-[220px] pl-14">
          <p className={`font-thin text-[64px] leading-none text-left text-[#000000]  ${inter.className}`}>Macbook <br/><span className={`font-medium ${inter.className}` }>Air</span></p>
          <p className={`font-medium text-[18px] leading-6 pb-5  text-[#909090] ${inter.className} w-[360px] h-[72px] text-[13.99px] font-medium`}>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
          <button className={`${inter.className} w-[191px]  h-[56px] text-center mt-4 pt-4 pb-4 text-black  border-2 border-black text-[16px] font-medium rounded-md`}>Shop Now</button>
        </div>
        <div>
        <Image src={'/MacBook Pro 14.png'} width={292} height={502} alt="icons"></Image>

        </div>
      </div>
    </div>
    {/* Browse By Catagory Section */}
    <div className="bg-[#FAFAFA] w-[1440px] h-[352px] pt-3  pl-40 pr-40">
    <div className="flex justify-between items-center  w-[1120px] h-[128px] m-auto">
      <div className="">
        <h2 className={`w-[239px] h-[32px] font-medium text-[24px]  leading-8 text-black ${inter.className}`}>Browse By Category</h2>
      </div>
      <div className="flex w-[80px] h-[32px]  ">
        <Image src={'/left-arrow.png'} width={32} height={32} alt="left-arrow"></Image>
        <Image src={'/right-arrow.png'} width={32} height={32} alt="right-arrow" ></Image>
      </div>
    </div>
    <div className=" w-[1120px] h-[128px]  m-auto  flex  gap-8">
        <div className="w-[160px] h-[128px] bg-[#EDEDED]  rounded-2xl flex items-center flex-col justify-center"> 
        <Image src={'/Phones.png'} width={48} height={48} alt="phones"></Image>
        <h6 className={`text-[16px] font-medium text-black leading-10 ${inter.className}`}>Phones</h6>
        </div>
        <div className="w-[160px] h-[128px] bg-[#EDEDED] rounded-2xl flex items-center flex-col justify-center"> 
        <Image src={'/Smart Watches.png'} width={48} height={48} alt="Smart Watches"></Image>
        <h6 className={`text-[16px] font-medium text-black leading-10 ${inter.className}`}>Smart Watches</h6>
        </div>
        <div className="w-[160px] h-[128px] bg-[#EDEDED] rounded-2xl flex items-center flex-col justify-center"> 
        <Image src={'/Cameras.png'} width={48} height={48} alt="Cameras"></Image>
        <h6 className={`text-[16px] font-medium text-black leading-10 ${inter.className}`}>Cameras</h6>
        </div>
        <div className="w-[160px] h-[128px] bg-[#EDEDED] rounded-2xl flex items-center flex-col justify-center"> 
        <Image src={'/Headphones.png'} width={48} height={48} alt="Headphones"></Image>
        <h6 className={`text-[16px] font-medium text-black leading-10 ${inter.className}`}>Headphones</h6>
        </div>
        <div className="w-[160px] h-[128px] bg-[#EDEDED] rounded-2xl flex items-center flex-col justify-center"> 
        <Image src={'/Computers.png'} width={48} height={48} alt="Computers"></Image>
        <h6 className={`text-[16px] font-medium text-black leading-10 ${inter.className}`}>Computers</h6>
        </div>
        <div className="w-[160px] h-[128px] bg-[#EDEDED] rounded-2xl flex items-center flex-col justify-center"> 
        <Image src={'/Gaming.png'} width={48} height={48} alt="Gaming"></Image>
        <h6 className={`text-[16px] font-medium text-black leading-10 ${inter.className}`}>Gaming</h6>
        </div>
      </div>
    </div>
    {/* Browse By Catagory Section */}

    {/* Product Section Start  */}
    <div className="w-[1440px] h-[1056px] ">
    <div className="flex items-center   w-[1120px] h-[128px] m-auto ">
      <div className="flex w-[1120px] h-[32px] gap-6">
        <h2 className={`w-[120px] h-[32px] font-medium text-[18px]   leading-8 text-black underline ${inter.className}`}>New Arrival</h2>
        <h2 className={`w-[86px] h-[32px] font-medium text-[18px]  leading-8 text-[#8B8B8B] ${inter.className}`}>Bestseller</h2>
        <h2 className={`w-[159px] h-[32px] font-medium text-[18px]  leading-8 text-[#8B8B8B] ${inter.className}`}>Featured Products</h2>
      </div>
      {/* <div className="flex w-[80px] h-[32px]  ">
        <Image src={'/left-arrow.png'} width={32} height={32} alt="left-arrow"></Image>
        <Image src={'/right-arrow.png'} width={32} height={32} alt="right-arrow" ></Image>
      </div> */}
    </div>
    <div className=" w-[1120px] h-[880px]  m-auto  flex ">

       <div className="w-[1120px] h-[432px] ">
        <div className="w-[268px] h-[432px] pl-4 pr-4 pt-6 pb-6 bg-[#F6F6F6] rounded-md ">
        <div className="w-[236px] h-[32px]  flex justify-end ">
          <Image src={'/Vector 15.png'} width={29} height={27} alt="heart-icon"></Image>
        </div>
        <div className="flex justify-center flex-col items-center">
        <div className="w-[160px] h-[160px] pt-4 pb-4 pl-9 pr-9">
          <Image src={'/Vector 15.png'} width={160} height={160} alt="image"></Image>
        </div>
        <div className="w-[236px] h-[160px] flex flex-col justify-center ">
          <h5 className={`w-[236px] h-[48px] ${inter.className}  font-medium text-[16px]  text-[#000000] text-center` }>Apple iPhone 14 Pro Max 128GB Deep Purple</h5>
          <h6 className={`w-[236px] h-[24px] text-center pt-4  ${inter.className} font-semibold text-[24px]  text-[#000000]`}>$1399</h6>
        </div>
          <div className="w-[188px] h-[48px] -mt-3">
          <button className={`rounded-md pt-3 pb-3 pl-16 pr-16 bg-[#000000] text-white ${inter.className} font-medium text-[14px]`}>Buy Now</button>
          </div>
        </div>
        </div>
       </div> 
       <div></div> 
       
      </div>
    </div>

    <div>
        {/* <Image src={'/Category.png'} width={1440} height={600} alt="icons"></Image> */}
    </div>
    <div>
        {/* <Image src={'/Products.png'} width={1440} height={600} alt="icons"></Image> */}
    </div>
    <div>
        {/* <Image src={'/Discount Products.png'} width={1440} height={600} alt="icons"></Image> */}
    </div>
    <div>
        {/* <Image src={'/Banner 2.png'} width={1440} height={600} alt="icons"></Image> */}
    </div>
    <div>
        {/* <Image src={'/Footer.png'} width={1440} height={600} alt="icons"></Image> */}
    </div>
</div>

  );
}
