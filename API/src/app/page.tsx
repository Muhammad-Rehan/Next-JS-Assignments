import Image from "next/image";
import { useState } from "react";

export default async function Home() {


  const data = await fetch(`https://api.coinlayer.com/live?access_key=${process.env.API_KEY}`)
  const fetRates = await data.json()
  return (
    <div className="flex">
      <div className="w-[25%] h-[100] bg-slate-400 ">
        <h1 className="font-mono text-[30px] p-10 font-bold text-white">Crypto Currency Dashboard</h1>
      </div>
      <div className="mx-auto pl-10 pb-10">
      <h1 className="text-center p-6 font-semibold text-[30px]">Crypto Coin Details & Rates</h1>
      <div className="flex justify-center items-center gap-14 flex-wrap">
      <div className="w-[160px] h-[220px] bg-slate-300 rounded-xl">
      <div className="flex justify-between p-4 font-mono font-bold">
      <h3>Bitcoin</h3>
      <h3>:</h3>
      </div>
      <Image
      src="/bitcoin.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
      className="mix-blend-lighten"
    />
      <p className="pl-5 pb-6 font-mono font-bold">{fetRates.rates.BTC}</p>
      </div>
      <div className="w-[160px] h-[220px] bg-gray-300 rounded-xl">
      <div className="flex justify-between p-4 font-mono font-bold">
      <h3>Binance Coin</h3>
      <h3>:</h3>
      
      </div>
      <Image
      src="/binance.jpeg"
      width={150}
      height={150}
      alt="Picture of the author"
      className="mix-blend-screen"
    />
    <p className="pl-5 pt-3 font-mono font-bold">{fetRates.rates.BNB}</p>
      </div>
      <div className="w-[160px] h-[220px] bg-lime-100 rounded-xl">
      <div className="flex justify-between p-4 font-mono font-bold">
      <h3>Ethereum</h3>
      <h3>:</h3>
      </div>
      <Image
      src="/ethereum.jpg"
      width={240}
      height={240}
      alt="Picture of the author"
      className="mix-blend-multiply"
    />
    <p className="pl-5 pt-6 font-mono font-bold ">{fetRates.rates.ETH}</p>
      </div>
      <div className="w-[160px] h-[220px] bg-zinc-200 rounded-xl">
      <div className="flex justify-between p-4 font-mono font-bold">
      <h3>Numeraire</h3>
      <h3>:</h3>
      </div>
      <Image
      src="/nmr.jpg"
      width={240}
      height={240}
      alt="Picture of the author"
      className="mix-blend-overlay"
    />
    <p className="pl-5 pt-6 font-mono font-bold ">{fetRates.rates.NMR}</p>
      </div>
      <div className="w-[160px] h-[220px] bg-neutral-100 rounded-xl">
      <div className="flex justify-between p-4 font-mono font-bold">
      <h3>Litecoin</h3>
      <h3>:</h3>
      </div>
      <Image
      src="/litecoin.avif"
      width={200}
      height={200}
      alt="Picture of the author"
      className="mix-blend-multiply"
    />
    <p className="pl-5 pt-3 font-mono font-bold ">{fetRates.rates.LTC}</p>
      </div>
      <div className="w-[160px] h-[220px] bg-red-100 rounded-xl">
      <div className="flex justify-between p-4 font-mono font-bold">
      <h3>Monero</h3>
      <h3>:</h3>
      </div>
      <Image
      src="/xmr.jpeg"
      width={250}
      height={250}
      alt="Picture of the author"
      className="mix-blend-overlay"
    />
    <p className="pl-5 pt-9 font-mono font-bold ">{fetRates.rates.XMR}</p>
      </div>
      <div className="w-[160px] h-[220px] bg-green-100 rounded-xl">
      <div className="flex justify-between p-4 font-mono font-bold">
      <h3>Veritaseum</h3>
      <h3>:</h3>
      </div>
      <Image
      src="/Veritaseum.jpeg"
      width={240}
      height={240}
      alt="Picture of the author"
      className="mix-blend-multiply"
    />
    <p className="pl-5 pt-9 font-mono font-bold ">{fetRates.rates.VERI}</p>
      </div>
      <div className="w-[160px] h-[220px] bg-blue-100 rounded-xl">
      <div className="flex justify-between p-4 font-mono font-bold">
      <h3>Tesla</h3>
      <h3>:</h3>
      </div>
      <Image
      src="/tesla.jpeg"
      width={240}
      height={240}
      alt="Picture of the author"
      className="mix-blend-overlay"
    />
    <p className="pl-5 pt-2 font-mono font-bold ">{fetRates.rates.TESLA}</p>
      </div>
      </div>
      </div>
      
      
    </div>
  );
}
