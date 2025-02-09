import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function MyGear() {
  return (

    <>
    <div className="h-screen bg-[url(/tools.jpg)] bg-cover flex flex-col items-center border border-gray-500 gap-8 mb-10">

      <div className="w-full">
        <Navbar />
      </div>

  
      <div className="flex-grow flex justify-end items-center flex-col mb-12">
        <h1 className="text-3xl font-bold mb-4 text-gray-400 leading-tight tracking-wide">
          Boîte à outils
        </h1>
        <h1 className="text-5xl text-center font-bold mb-4 text-gray-300 tracking-widest">
          Les outils que nous utilisons.
        </h1>
        <div className="flex justify-center items-center m-4">
          <img
            src="https://cdn.prod.website-files.com/593008e46c534e61e392e0f2/5938f139d7978c0a4faf1460_Sep.svg"
            alt="Separator"
            className=""
          />
        </div>
      </div>
    </div>
    
<div className="max-w-screen-xl mx-auto w-full mb-12">
  <h1 className="text-4xl font-normal mb-6 text-gray-300 tracking-widest">Caméra</h1>
  <div className="relative">
    <img
      src="/camera.webp"
      alt="Canon 5D Mark IV"
      className="w-92 h-72 object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0  bg-gradient-to-b from-transparent to-black p-4">
      <p className="text-white text-xl font-normal tracking-widest">CANON 5D MARK IV</p>
    </div>
  </div>
</div>


<div className="max-w-screen-xl mx-auto w-full mb-12">
  <h2 className="text-4xl font-normal mb-6 text-gray-300 tracking-widest">Objectifs</h2>
  <div className="flex gap-8">

    <div className="relative">
      <img
        src="/objectif.avif" 
        alt="Canon 70-200mm F2.8"
        className="w-76 h-64 object-cover opacity-70"
      />
      <div className="absolute bottom-0 left-0 right-0  bg-gradient-to-b from-transparent to-black p-2 ">
        <p className="text-white text-lg font-normal tracking-widest">CANON 70-200MM F2.8</p>
      </div>
    </div>


    <div className="relative">
      <img
        src="/objectif2.jpg" // Remplace par le chemin de ton deuxième objectif
        alt="Canon 50mm F1.8"
        className="w-76 h-64 object-cover opacity-70"
      />
      <div className="absolute bottom-0 left-0 right-0  bg-gradient-to-b from-transparent to-black p-2 ">
        <p className="text-white text-lg font-normal tracking-widest">CANON 50MM F1.8</p>
      </div>
    </div>

    {/* Objectif 3 */}
    <div className="relative">
      <img
        src="/objectif3.jpg"
        alt="Tokina 11-16mm F2.8"
        className="w-76 h-64 object-cover opacity-80"
      />
      <div className="absolute bottom-0 left-0 right-0  bg-gradient-to-b from-transparent to-black p-2 ">
        <p className="text-white text-lg font-normal tracking-widest">TOKINA 11-16MM F2.8</p>
      </div>
    </div>
  </div>

  <div className="max-w-screen-xl mx-auto w-full mt-10 mb-12">
  <h1 className="text-4xl font-normal mb-6 text-gray-300 tracking-widest">Ordinateurs</h1>
  <div className="relative">
    <img
      src="/ordinateur.avif" 
      alt="Canon 5D Mark IV"
      className="w-92 h-72 object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0  bg-gradient-to-b from-transparent to-black p-4">
      <p className="text-white text-md font-normal tracking-widest">MACBOOK PRO</p>
    </div>
  </div>
</div>
</div>


    <div className="h-[520px] bg-[url(/monument.jpg)] border border-gray-500  bg-cover bg-center flex flex-col justify-start items-end text-center px-6  relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50"></div> 
      
      <h2 className="text-md font-bold text-gray-100 tracking-widest mr-52 mt-20 z-10">
      Le Maqam Echahid
      </h2>
      <h2 className="text-md font-normal text-gray-300 tracking-widest max-w-screen-sm z-10">
     Dédié aux martyrs de la guerre d'indépendance.Un lieu de mémoire et de fierté.      </h2>
    </div>
    </>
    
  );
}