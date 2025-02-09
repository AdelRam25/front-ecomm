import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  
  return (
    <>
      <div className="h-screen bg-[url(/sahara.jpg)] bg-cover bg-fixed flex flex-col justify-center items-center border border-gray-500   gap-8">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="max-w-4xl flex-grow flex justify-center items-center flex-col mb-12">
          <h1 className="text-3xl font-normal  mb-4 text-gray-300 leading-tight tracking-wide">
            -Djamel RAMDANI-
          </h1>
          <h1 className="text-5xl text-center font-bold  mb-4 text-gray-300 tracking-widest">
            PHOTOGRAPH & FILMMAKER
          </h1>
          <div className="flex justify-center items-center m-4">
            <img
              src="https://cdn.prod.website-files.com/593008e46c534e61e392e0f2/5938f139d7978c0a4faf1460_Sep.svg"
              alt="Separator"
              className=""
            />
          </div>
          <h2 className="text-xl font-normal mb-4 text-gray-300 leading-tight tracking-wide">
            Bienvenue dans ma gallerie, un lieu où chaque photo raconte une
            histoire
          </h2>
        </div>
      </div>

      <div className="py-10 px-6 text-center mt-16">
        <h2 className="text-4xl tracking-widest font-normal text-gray-400 mb-4">
          Œuvres
        </h2>
        <p className="text-5xl tracking-widest font-bold text-gray-300">
          En vedette
        </p>
        <div className="flex justify-center items-center mt-4 ">
          <img
            src="https://cdn.prod.website-files.com/593008e46c534e61e392e0f2/5938f139d7978c0a4faf1460_Sep.svg"
            alt="Separator"
            className=""
          />
        </div>
      </div>

      <div className="px-6 grid grid-cols-2 gap-6 max-w-screen-xl mx-auto">
  {/* Photo 1 */}
  <div className="group relative flex flex-col rounded-lg border border-gray-500  ">
    <img
      className="w-full h-96 object-cover rounded-lg filter brightness-75" 
      src="/paysage1.jpg"
      alt="Paysages"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
      <div className="font-bold text-xl text-center">Paysages</div>
      <p className="text-lg text-center mt-2">
        Un paysage époustouflant capturé au moment parfait.
      </p>
      <Link href='/paysages' className="mt-4 bg-transparent text-white border-2 border-gray-500  py-2 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer">
        Lire plus
      </Link>
    </div>
  </div>

  {/* Photo 2 */}
  <div className="group relative flex flex-col rounded-lg border border-gray-500  ">
    <img
      className="w-full h-96 object-cover rounded-lg transition-opacity duration-300 filter brightness-75" 
      src="/architecture.jpg"
      alt="Architecture"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
      <div className="font-bold text-xl text-center">Architecture</div>
      <p className="text-lg text-center mt-2">
        L'architecture qui a tout pour plaire, à couper le souffle !
      </p>
      <Link href="/architecture" className="mt-4 bg-transparent text-white border-2 border-gray-500  py-2 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer">
        Lire plus
      </Link>
    </div>
  </div>

  {/* Photo 3 */}
  <div className="group relative flex flex-col rounded-lg border border-gray-500  ">
    <img
      className="w-full h-96 object-cover rounded-lg transition-opacity duration-300 filter brightness-75" 
      src="/culture.jpg"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
      <div className="font-bold text-xl text-center">Culture & Artisanat</div>
      <p className="text-lg text-center mt-2">
        Une immersion dans la richesse des cultures et l'artisanat de l'Algerie.
      </p>
      <Link href="/culture&artisanat" className="mt-4 bg-transparent text-white border-2 border-gray-500  py-2 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer">
        Lire plus
      </Link>
    </div>
  </div>

  {/* Photo 4 */}
  <div className="group relative flex flex-col border border-gray-500  rounded-lg">
    <img
      className="w-full h-96 object-cover rounded-lg duration-300 filter brightness-75"
      src="/sahara&ciel.jpg"
      alt="Desert & Ciel"
    />
    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
      <div className="font-bold text-xl text-center">Desert & Ciel</div>
      <p className="text-lg text-center mt-2">
        Le calme du désert et l'isité du ciel.
      </p>
      <Link href='/desert&sky' className="mt-4 bg-transparent text-white border-2 border-gray-500  py-2 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer">
        Lire plus 
      </Link>
      
    </div>
  </div>
</div>


  
<div className="h-[580px] bg-[url(/contactpage.jpg)]  border border-gray-500  bg-cover bg-center flex flex-col justify-start items-end text-center mt-16 px-6  relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50"></div> 
      
      <h2 className="text-md font-bold text-gray-100 tracking-widest mr-52 mt-20 z-10">
      Rencontre éphémère
      </h2>
      <h2 className="text-md font-normal text-gray-300 tracking-widest max-w-screen-sm z-10">
      Un scarabée s'est posé près de moi, silencieux, pendant que je capturais l'instant. Il est resté là un moment, observant, avant de s'éclipser dans l'ombre, aussi soudainement qu'il était venu.
      </h2>
    </div>


<div className="flex items-center justify-between border h-[520px] border-gray-500  ">

  <div className="w-1/2 pr-10 p-16">
    <h3 className="text-xl font-bold tracking-wider text-gray-200 mb-4 text-left">
      Les outils que nous utilisons.
    </h3>
    <p className="text-md text-gray-100 tracking-widest text-left mb-4">
      On dit souvent que "aucun endroit n'est ennuyeux si vous avez passé une bonne nuit de sommeil et que vous avez un porte-feuille rempli de films non exposés".
      Bien que nous ne shootons plus (beaucoup) de films de nos jours, voici les outils que nous utilisons réellement chaque jour pour capturer les choses incroyables qui nous entourent.
    </p>


    <button className="bg-transparent text-white border-2 border-gray-500  py-2 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer">
      Découvrez-les
    </button>
  </div>

  <div className="w-1/2">
    <img
      src="/tools.jpg" 
      alt="Gear tools"
      className="w-full h-auto rounded-lg"
    />
  </div>
</div>

<div className="h-[570px] w-full bg-[url(/escargot.jpg)] bg-cover bg-center border border-gray-500  flex flex-col justify-center items-center text-center pr-32 filter brightness-75">
<h2 className="text-md font-bold text-gray-100 tracking-widest mt-56">
Escargots de paléo-zones lacustres 
  </h2>
  <h2 className="text-md font-normal text-gray-300 tracking-widest max-w-screen-sm">
  Escargots fossilisés provenant de zones lacustres anciennes, témoins de l'évolution.
  </h2>
 
</div>

<div className="flex flex-col items-center justify-center py-16  border border-gray-500  text-white h-[520px]">
      <h1 className="text-4xl font-bold tracking-tighter  text-gray-200 mb-4 ">Vous avez besoin d'aide en photographie ou vidéographie ?</h1>
      <h2 className="text-2xl font-bold tracking-tighter text-center text-gray-400  mb-4 ">
        Nous sommes là pour vous !
      </h2>
      <button className="bg-transparent text-white border-2 border-gray-500  py-2 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer">
        Contactez-nous
      </button>
    </div>




    </>
  );
}
