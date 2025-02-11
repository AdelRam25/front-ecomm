'use client'
import { FaEdit } from "react-icons/fa"; 
import { useState ,useEffect} from "react";
import { useSelector } from "react-redux";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Link from "next/link";


export default function Gallerie() {
  
  const [photos, setPhotos] = useState([]);
  const [editingPhoto, setEditingPhoto] = useState(null);
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/photos");
      setPhotos(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des photos :", error);
    }
  };

  const handleDeletePhoto = async (photoId) => {
    const result = await Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous ne pourrez pas annuler cette action !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#CCAC86",
      confirmButtonText: "Oui, supprimer !",
      cancelButtonText: "Annuler",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3001/photos/${photoId}`);
        setPhotos(photos.filter((photo) => photo.id !== photoId));
        Swal.fire("Supprimé !", "La photo a été supprimée.", "success");
      } catch (error) {
        console.error("Erreur lors de la suppression de la photo :", error);
        Swal.fire("Erreur", "La suppression a échoué.", "error");
      }
    }
  };



  return (
    <>
      <div className="h-screen bg-[url(/gallerie1.jpg)] bg-fixed bg-cover flex flex-col justify-center items-center border border-gray-500 gap-8">
        <div className="absolute inset-0 "></div>
        <div className="w-full">
          <Navbar />
        </div>
        <div className="max-w-4xl flex-grow flex justify-end items-center flex-col mb-12">
          <h2 className="text-lg font-bold text-gray-300 leading-tight uppercase tracking-widest">
            Images en vedette
          </h2>
          <div className="flex justify-center items-center mt-3">
            <img
              src="https://cdn.prod.website-files.com/593008e46c534e61e392e0f2/5938f139d7978c0a4faf1460_Sep.svg"
              alt="Separator"
            />
          </div>
          <h2 className="text-5xl font-bold mb-4 text-white leading-tight tracking-widest">
            Mes meilleurs travaux.
          </h2>
        </div>
      </div>

      {/* Liste des photos */}
      <div className="flex flex-col gap-14 mt-16 max-w-screen-lg mb-10 mx-auto">
        {photos.map((photo, index) => (
          <div key={index} className="flex gap-5">
            <img
              src={photo.photo}
              className="w-[700px] h-[500px] object-cover"
              alt={photo.name}
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col leading-tight mt-5">
                <p className="text-gray-500 font-bold uppercase tracking-widest text-md">
                  {photo.category}
                </p>
                <p className="text-white font-bold tracking-widest text-4xl mb-2">
                  {photo.name}
                </p>
                <p className="text-white text-md">{photo.description}</p>
                {isAuthenticated && (
                  <div className="flex flex-col gap-3 mt-5">
                    <Link
                      href="/add-photo"
                      className="bg-[#CCAC86] text-white px-6 py-3 rounded-md font-semibold tracking-widest hover:bg-[#B89A7B] transition duration-300"
                    >
                      Ajouter une photo
                    </Link>

                    <button
                      onClick={() => handleDeletePhoto(photo.id)}
                      className="bg-red-500 text-white px-6 py-3 rounded-md font-semibold tracking-widest hover:bg-red-700 transition duration-300"
                    >
                      Supprimer la photo
                    </button>

                    
                  </div>
                )}
              </div>

              <div className="text-white flex gap-5">
                <div className="flex gap-2">
                  <img
                    src="https://cdn.prod.website-files.com/6099445145bf8136e2b5757f/60a39e235bb5bfafc9b3a5f1_Shutter%20Icon%20Light.svg"
                    loading="lazy"
                    alt=""
                    className="size-5"
                  />
                  <span className="text-gray-300 text-sm font-semibold tracking-widest hover:text-gray-100 transition duration-300">
                    {photo.time}
                  </span>
                </div>

                <div className="flex gap-2">
                  <img
                    src="https://cdn.prod.website-files.com/6099445145bf8136e2b5757f/60a39e23cf4a9e83e9d6e27f_Aperture%20Icon%20Light.svg"
                    loading="lazy"
                    alt=""
                    className="size-5"
                  />
                  <span className="text-gray-300 text-sm font-semibold tracking-widest hover:text-gray-100 transition duration-300">
                    {photo.aperture}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    
    </>
  );
}