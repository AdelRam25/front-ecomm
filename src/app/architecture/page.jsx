import Navbar from "@/components/Navbar";

export default function DesertAndSky() {
  
  return (
    <>
      <div className="h-screen bg-[url(/architecture-page.jpg)] bg-cover bg-center flex flex-col justify-center items-center border border-gray-500   gap-8">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-75"></div>
        <div className="w-full">
        <Navbar/>
        </div>
        <div className="max-w-4xl flex-grow flex justify-end items-center flex-col mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-100 uppercase tracking-widest ">
          Architecture
          </h2>
          <div className="flex justify-center items-center m-4">
            <img
              src="https://cdn.prod.website-files.com/593008e46c534e61e392e0f2/5938f139d7978c0a4faf1460_Sep.svg"
              alt="Separator"
              className=""
            />
          </div>
          <h2 className="text-xl font-semibold mb-4 text-gray-100 text-center tracking-wide">
          Là où l'espace rencontre la lumière, et où chaque forme trouve sa place.
          </h2>
        </div>
      </div>

      

      <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto mt-16 mb-10">

<div className="grid gap-2">
    <div>
        <img className="opacity-75 bg-cover h-full max-w-full rounded-lg" src="/architecture1.jpg" alt=""/>
    </div>
    <div>
        <img className="opacity-75 h-auto max-w-full rounded-lg" src="/architecture2.jpg" alt=""/>
    </div>
    <div>
        <img className="opacity-75 h-full max-w-full rounded-lg" src="/architecture3.jpg" alt=""/>
    </div>
</div>
<div className="grid gap-2">
    <div>
        <img className="opacity-75 h-full max-w-full rounded-lg" src="/architecture4.jpg" alt=""/>
    </div>
    <div>
        <img className="opacity-75 h-full max-w-full rounded-lg" src="/architecture5.jpg" alt=""/>
    </div>
    <div>
        <img className="opacity-75 h-full max-w-full rounded-lg" src="/architecture9.jpg" alt=""/>
    </div>
</div>
<div className="grid gap-4">
    <div>
        <img className="opacity-75 h-full max-w-full rounded-lg" src="/architecture7.jpg" alt=""/>
    </div>
    <div>
        <img className="opacity-75 h-full max-w-full rounded-lg" src="/architecture8.jpg" alt=""/>
    </div>
    <div>
        <img className="opacity-75 h-full max-w-full rounded-lg" src="/architecture6.jpg" alt=""/>
    </div>
</div>

</div>


    </>
  );
}
