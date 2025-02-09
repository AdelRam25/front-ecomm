import Navbar from "@/components/Navbar";

export default function DesertAndSky() {
  
  return (
    <>
      <div className="h-screen bg-[url(/desert&ciel.jpg)] bg-fixed bg-cover flex flex-col justify-center items-center border border-gray-500   gap-8">
      <div className="absolute inset-0  from-transparent to-black opacity-25"></div>
      
        <div className="w-full">
        <Navbar/>
        </div>
        <div className="max-w-4xl flex-grow flex justify-end items-center flex-col mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-100 uppercase tracking-widest ">
           Desert & Ciel
          </h2>
          <div className="flex justify-center items-center m-4">
            <img
              src="https://cdn.prod.website-files.com/593008e46c534e61e392e0f2/5938f139d7978c0a4faf1460_Sep.svg"
              alt="Separator"
              className=""
            />
          </div>
          <h2 className="text-xl font-semibold mb-4 text-gray-300 text-center tracking-wide">
          une marque qui mêle simplicité et nature. Ses créations épurées et élégantes apportent un luxe discret et intemporel.
          </h2>
        </div>
      </div>

      

      <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto mt-16 mb-10">

<div className="grid gap-2">
    <div>
        <img className="opacity-75 bg-cover h-auto max-w-full rounded-lg" src="/desert&ciel4.jpg" alt=""/>
    </div>
    <div>
        <img className="opacity-75 h-auto max-w-full rounded-lg" src="/background-night.jpg" alt=""/>
    </div>
    <div>
        <img className="opacity-75 h-auto max-w-full rounded-lg" src="/desert&ciel7.avif" alt=""/>
    </div>
</div>
<div className="grid gap-2">
    <div>
        <img className="opacity-75 h-full max-w-full rounded-lg" src="/desert&ciel3.jpg" alt=""/>
    </div>
    <div>
        <img className="opacity-75 h-full max-w-full rounded-lg" src="/desert&ciel8.avif" alt=""/>
    </div>
    <div>
        <img className="opacity-75 h-full max-w-full rounded-lg" src="/desert&ciel2.avif" alt=""/>
    </div>
</div>
<div className="grid gap-4">
    <div>
        <img className="opacity-75 h-full max-w-full rounded-lg" src="/desert&ciel6.avif" alt=""/>
    </div>
    <div>
        <img className="opacity-75 h-auto max-w-full rounded-lg" src="/desert&ciel6.avif" alt=""/>
    </div>
    <div>
        <img className="opacity-75 h-auto max-w-full rounded-lg" src="/desert&ciel9.jpg" alt=""/>
    </div>
</div>

</div>


    </>
  );
}
