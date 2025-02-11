'use client'
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";



export default function Home() {
  const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), {
    ssr: false, // Disable SSR for this component
  });
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <div className="h-screen bg-[url(/sahara.jpg)] bg-cover bg-fixed flex flex-col justify-center items-center border border-gray-500 gap-8">
        <div className="w-full">
          <Navbar />
        </div>
        <motion.div
          className="max-w-4xl flex-grow flex justify-center items-center flex-col mb-12"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h1
            className="text-3xl font-normal mb-4 text-gray-300 leading-tight tracking-wide"
            variants={fadeInUp}
          >
            -Djamel RAMDANI-
          </motion.h1>
          <motion.h1
            className="text-5xl text-center font-bold mb-4 text-gray-300 tracking-widest"
            variants={fadeInUp}
          >
            PHOTOGRAPH & FILMMAKER
          </motion.h1>
          <motion.div
            className="flex justify-center items-center m-4"
            variants={fadeInUp}
          >
            <img
              src="https://cdn.prod.website-files.com/593008e46c534e61e392e0f2/5938f139d7978c0a4faf1460_Sep.svg"
              alt="Separator"
            />
          </motion.div>
          <motion.h2
            className="text-xl font-normal mb-4 text-gray-300 leading-tight tracking-wide"
            variants={fadeInUp}
          >
            Bienvenue dans ma gallerie, un lieu où chaque photo raconte une
            histoire
          </motion.h2>
        </motion.div>
      </div>

      {/* Featured Works Section */}
      <motion.div
        className="py-10 px-6 text-center mt-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2
          className="text-4xl tracking-widest font-normal text-gray-400 mb-4"
          variants={fadeInUp}
        >
          Œuvres
        </motion.h2>
        <motion.p
          className="text-5xl tracking-widest font-bold text-gray-300"
          variants={fadeInUp}
        >
          En vedette
        </motion.p>
        <motion.div
          className="flex justify-center items-center mt-4"
          variants={fadeInUp}
        >
          <img
            src="https://cdn.prod.website-files.com/593008e46c534e61e392e0f2/5938f139d7978c0a4faf1460_Sep.svg"
            alt="Separator"
          />
        </motion.div>
      </motion.div>

      {/* Photo Grid Section */}
      <motion.div
        className="px-6 grid grid-cols-2 gap-6 max-w-screen-xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        {[
          {
            src: "/paysage1.jpg",
            title: "Paysages",
            description: "Un paysage époustouflant capturé au moment parfait.",
            link: "/paysages",
          },
          {
            src: "/architecture.jpg",
            title: "Architecture",
            description: "L'architecture qui a tout pour plaire, à couper le souffle !",
            link: "/architecture",
          },
          {
            src: "/culture.jpg",
            title: "Culture & Artisanat",
            description: "Une immersion dans la richesse des cultures et l'artisanat de l'Algerie.",
            link: "/culture&artisanat",
          },
          {
            src: "/sahara&ciel.jpg",
            title: "Desert & Ciel",
            description: "Le calme du désert et l'isité du ciel.",
            link: "/desert&sky",
          },
        ].map((photo, index) => (
          <motion.div
            key={index}
            className="group relative flex flex-col rounded-lg border border-gray-500"
            variants={fadeInUp}
          >
            <img
              className="w-full h-96 object-cover rounded-lg filter brightness-75"
              src={photo.src}
              alt={photo.title}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <div className="font-bold text-xl text-center">{photo.title}</div>
              <p className="text-lg text-center mt-2">{photo.description}</p>
              <Link
                href={photo.link}
                className="mt-4 bg-transparent text-white border-2 border-gray-500 py-2 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer"
              >
                Lire plus
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Contact Section */}
      <motion.div
        className="h-[580px] bg-[url(/contactpage.jpg)] border border-gray-500 bg-cover bg-center flex flex-col justify-start items-end text-center mt-16 px-6 relative"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50"></div>
        <motion.h2
          className="text-md font-bold text-gray-100 tracking-widest mr-52 mt-20 z-10"
          variants={fadeInUp}
        >
          Rencontre éphémère
        </motion.h2>
        <motion.h2
          className="text-md font-normal text-gray-300 tracking-widest max-w-screen-sm z-10"
          variants={fadeInUp}
        >
          Un scarabée s'est posé près de moi, silencieux, pendant que je capturais l'instant. Il est resté là un moment, observant, avant de s'éclipser dans l'ombre, aussi soudainement qu'il était venu.
        </motion.h2>
      </motion.div>

      {/* Tools Section */}
      <motion.div
        className="flex items-center justify-between border h-[520px] border-gray-500"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          className="w-1/2 pr-10 p-16"
          variants={fadeInUp}
        >
          <h3 className="text-xl font-bold tracking-wider text-gray-200 mb-4 text-left">
            Les outils que nous utilisons.
          </h3>
          <p className="text-md text-gray-100 tracking-widest text-left mb-7">
            On dit souvent que "aucun endroit n'est ennuyeux si vous avez passé une bonne nuit de sommeil et que vous avez un porte-feuille rempli de films non exposés".
            Bien que nous ne shootons plus (beaucoup) de films de nos jours, voici les outils que nous utilisons réellement chaque jour pour capturer les choses incroyables qui nous entourent.
          </p>
          <Link
            href="/outils"
            className="bg-transparent text-white border-2 border-gray-500 py-2 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer"
          >
            Découvrez-les
          </Link>
        </motion.div>
        <motion.div
          className="w-1/2"
          variants={fadeInUp}
        >
          <img
            src="/tools.jpg"
            alt="Gear tools"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </motion.div>

      {/* Snail Section */}
      <motion.div
        className="h-[570px] w-full bg-[url(/escargot.jpg)] bg-cover bg-center border border-gray-500 flex flex-col justify-center items-center text-center pr-32 filter brightness-75"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h2
          className="text-md font-bold text-gray-100 tracking-widest mt-56"
          variants={fadeInUp}
        >
          Escargots de paléo-zones lacustres
        </motion.h2>
        <motion.h2
          className="text-md font-normal text-gray-300 tracking-widest max-w-screen-sm"
          variants={fadeInUp}
        >
          Escargots fossilisés provenant de zones lacustres anciennes, témoins de l'évolution.
        </motion.h2>
      </motion.div>

      {/* Contact CTA Section */}
      <motion.div
        className="flex flex-col items-center justify-center py-16 border border-gray-500 text-white h-[520px]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1
          className="text-4xl font-bold tracking-tighter text-gray-200 mb-4"
          variants={fadeInUp}
        >
          Vous avez besoin d'aide en photographie ou vidéographie ?
        </motion.h1>
        <motion.h2
          className="text-2xl font-bold tracking-tighter text-center text-gray-400 mb-4"
          variants={fadeInUp}
        >
          Nous sommes là pour vous !
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <Link
            href="/contact"
            className="bg-transparent text-white border-2 border-gray-500 py-2 px-6 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer"
          >
            Contactez-nous
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}