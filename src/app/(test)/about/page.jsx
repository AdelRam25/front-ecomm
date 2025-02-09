import Link from "next/link";

export default function About() {
  return (
    <>
    <div className="max-w-screen-xl mx-auto flex flex-col bg-black text-white justify-center items-center p-8">
      <div className="max-w-6xl w-full flex items-center">
      
        <div className="pr-8 w-1/2 text-gray-300">
          <h1 className="text-5xl font-bold mb-6 tracking-widest text-[#CCAC86]">À PROPOS DE MOI</h1>
          <p className="text-md mb-6 tracking-widest">
            Je m'appelle <strong className="text-[#CCAC86]">Djamel Ramdani</strong>, photographe professionnel avec plus de <strong>8 ans d'expérience</strong>. Mon travail se concentre sur la capture de l'essence et de la beauté des paysages, des architectures et des ciels. Chaque cliché est une invitation à explorer le monde à travers mon regard.
          </p>
          <p className="text-md mb-6 tracking-widest">
            Mon approche artistique repose sur une combinaison de technique, de passion et d'une attention minutieuse aux détails. Chaque projet est une nouvelle aventure, une opportunité de raconter une histoire à travers l'objectif.
          </p>
          <p className="text-md tracking-widest">
            N'hésitez pas à me contacter pour collaborer ou discuter de votre prochain projet. Ensemble, créons des images qui inspirent et émerveillent.
          </p>
        </div>


        <div className="w-px h-96 bg-white mx-8"></div>

        <div className="pl-8 w-1/2">
          <div className="relative w-full h-[600px]">
            <img
              src="/me.jpg"
              alt="Djamel Ramdani"
              className="object-cover rounded-sm w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full mt-12 text-center">
        <p className="text-lg tracking-widest text-[#CCAC86]">
          J'espère que vous aimerez mes œuvres autant que moi. Profitez bien de votre visite.
        </p>
      </div>
      
    </div>
    <div className="h-[700px] bg-[url(/about.jpg)] border border-gray-500  bg-cover bg-center flex flex-col justify-start items-end text-center mt-16 px-6  relative">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50"></div> 
      
      <h2 className="text-md font-bold text-gray-100 tracking-widest mr-52 mt-20 z-10">
      Au-dessus des Nuages 
      </h2>
      <h2 className="text-md font-normal text-gray-300 tracking-widest max-w-screen-sm z-10">
      Depuis les hauteurs de Séraidi, le golf d'Annaba se dévoile dans toute sa splendeur, où la Méditerranée et le centre ville se rencontrent pour créer un paysage à couper le souffle.
      </h2>
    </div>
    
   
    </>
    
  );
}