"use client"
import { FaEdit, FaTrash } from "react-icons/fa"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import Navbar from "@/components/Navbar"
import axios from "axios"
import Link from "next/link"
import Swal from "sweetalert2"

export default function Gallerie() {
  const [photos, setPhotos] = useState([])
  const [editingPhoto, setEditingPhoto] = useState(null)
  const { isAuthenticated } = useSelector((state) => state.user)

  useEffect(() => {
    fetchPhotos()
  }, [])

  const fetchPhotos = async () => {
    try {
      const response = await axios.get("http://localhost:3001/photos")
      setPhotos(response.data)
    } catch (error) {
      console.error("Erreur lors de la récupération des photos :", error)
    }
  }

  const handleDeletePhoto = async (photoId) => {
    const result = await Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous ne pourrez pas annuler cette action !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      background: "black",
      color: "white",
      cancelButtonColor: "#CCAC86",
      confirmButtonText: "Oui, supprimer !",
      cancelButtonText: "Annuler",
    })

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3001/photos/${photoId}`)
        setPhotos(photos.filter((photo) => photo.id !== photoId))
        Swal.fire({
          title: "Supprimé !",
          text: "La photo a été supprimée.",
          icon: "success",
          background: "black",  
          color: "white",       
          confirmButtonColor: "#CCAC86", 
        });
      }  catch (error) {
        console.error("Erreur lors de la suppression de la photo :", error);
        Swal.fire({
          title: "Erreur",
          text: "La suppression a échoué.",
          icon: "error",
          background: "black",  
          color: "white",      
          confirmButtonColor: "#d33",
        });
      }
    }
  }

  const handleEditPhoto = (photo) => {
    setEditingPhoto(photo)
  }

  const handleUpdatePhoto = async (updatedPhoto) => {
    try {
      const formData = new FormData();
      formData.append("name", updatedPhoto.name || "");
      formData.append("description", updatedPhoto.description || "");
      formData.append("category", updatedPhoto.category || "");
      formData.append("aperture", updatedPhoto.aperture || "");
      formData.append("time", updatedPhoto.time || "");
  
      if (updatedPhoto.photoFile) {
        formData.append("photo", updatedPhoto.photoFile);
      }
  
      // Log the FormData to debug
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
  
      const response = await axios.put(
        `http://localhost:3001/photos/${updatedPhoto.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
  
      setPhotos(photos.map((photo) => (photo.id === updatedPhoto.id ? response.data : photo)));
      setEditingPhoto(null);
      Swal.fire({
        title: "Modifié !",
        text: "La photo a été modifiée.",
        icon: "success",
        background: "black",  
        color: "white",       
        confirmButtonColor: "#CCAC86", 
      });
    } catch (error) {
      console.error("Erreur lors de la modification de la photo :", error);
      if (error.response) {
        console.error("Server response:", error.response.data);
      }
      Swal.fire("Erreur", "La modification a échoué.", "error");
    }
  
  }

  return (
    <>
      <div className="h-screen bg-[url(/gallerie1.jpg)] bg-fixed bg-cover flex flex-col justify-center items-center border border-gray-500 gap-8">
        <div className="absolute inset-0 "></div>
        <div className="w-full">
          <Navbar />
        </div>
        <div className="max-w-4xl flex-grow flex justify-end items-center flex-col mb-12">
          <h2 className="text-lg font-bold text-gray-300 leading-tight uppercase tracking-widest">Images en vedette</h2>
          <div className="flex justify-center items-center mt-3">
            <img
              src="https://cdn.prod.website-files.com/593008e46c534e61e392e0f2/5938f139d7978c0a4faf1460_Sep.svg"
              alt="Separator"
            />
          </div>
          <h2 className="text-5xl font-bold mb-4 text-white leading-tight tracking-widest">Mes meilleurs travaux.</h2>
        </div>
      </div>

      {/* Add Photo Button at the Top */}
      <div className="max-w-screen-lg mx-auto mt-10">
        {isAuthenticated && (
          <Link
            href="/add-photo"
            className="bg-[#CCAC86] text-white px-6 py-3 rounded-md font-semibold tracking-widest hover:bg-[#B89A7B] transition duration-300"
          >
            Ajouter une photo
          </Link>
        )}
      </div>

      {/* Liste des photos */}
      <div className="flex flex-col gap-14 mt-16 max-w-screen-lg mb-10 mx-auto">
        {photos.map((photo, index) => (
          <div key={index} className="flex gap-5">
            <img
              src={photo.photo || "/placeholder.svg"}
              className="w-1/2 h-[500px] object-cover"
              alt={photo.name}
            />
            <div className="flex flex-col justify-between">
              <div className="flex flex-col leading-tight mt-5">
                <p className="text-gray-500 font-bold uppercase tracking-widest text-md">{photo.category}</p>
                <p className="text-white font-bold tracking-widest text-4xl mb-2">{photo.name}</p>
                <p className="text-white text-md ">{photo.description}</p>
                {isAuthenticated && (
                  <div className="flex flex-col gap-3 mt-5">
                    {/* Edit Icon */}
                    <button
                      onClick={() => handleEditPhoto(photo)}
                      className="text-[#CCAC86] hover:text-[#B89A7B] transition duration-300"
                    >
                      <FaEdit size={24} />
                    </button>

                    {/* Delete Icon */}
                    <button
                      onClick={() => handleDeletePhoto(photo.id)}
                      className="text-red-500 hover:text-red-700 transition duration-300"
                    >
                      <FaTrash size={24} />
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
      {editingPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-black p-6 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-[#CCAC86] mb-6">Modifier la photo</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleUpdatePhoto(editingPhoto)
              }}
              className="grid gap-4"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={editingPhoto.name}
                  onChange={(e) => setEditingPhoto({ ...editingPhoto, name: e.target.value })}
                  className="w-full p-2 border border-gray-500 rounded-md bg-[#1E1E1E] text-white"
                />
              </div>
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-gray-300 mb-2">
                  Catégorie
                </label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  value={editingPhoto.category}
                  onChange={(e) => setEditingPhoto({ ...editingPhoto, category: e.target.value })}
                  className="w-full p-2 border border-gray-500 rounded-md bg-[#1E1E1E] text-white"
                />
              </div>

              {/* Aperture and Time */}
              <div className="grid grid-cols-2 gap-4">
                {/* Aperture */}
                <div>
                  <label htmlFor="aperture" className="block text-sm font-semibold text-gray-300 mb-2">
                    Aperture
                  </label>
                  <input
                    type="text"
                    id="aperture"
                    name="aperture"
                    value={editingPhoto.aperture}
                    onChange={(e) => setEditingPhoto({ ...editingPhoto, aperture: e.target.value })}
                    className="w-full p-2 border border-gray-500 rounded-md bg-[#1E1E1E] text-white"
                  />
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-gray-300 mb-2">
                    Temps
                  </label>
                  <input
                    type="text"
                    id="time"
                    name="time"
                    value={editingPhoto.time}
                    onChange={(e) => setEditingPhoto({ ...editingPhoto, time: e.target.value })}
                    className="w-full p-2 border border-gray-500 rounded-md bg-[#1E1E1E] text-white"
                  />
                </div>
              </div>

              {/* Photo Upload (Optional) */}
              <div>
                <label htmlFor="photo" className="block text-sm font-semibold text-gray-300 mb-2">
                  Changer la photo
                </label>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  onChange={(e) => {
                    const file = e.target.files[0]
                    setEditingPhoto({ ...editingPhoto, photoFile: file })
                  }}
                  className="w-full p-2 border border-gray-500 rounded-md bg-[#1E1E1E] text-white"
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-300 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={editingPhoto.description}
                  onChange={(e) => setEditingPhoto({ ...editingPhoto, description: e.target.value })}
                  className="w-full p-2 border border-gray-500 rounded-md bg-[#1E1E1E] text-white"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#CCAC86] text-black py-2 px-6 rounded-md border border-white hover:bg-[#B89A7C] transition duration-300"
                >
                  Modifier
                </button>
                <button
                  type="button"
                  onClick={() => setEditingPhoto(null)}
                  className="flex-1 bg-red-500 text-white py-2 px-6 rounded-md border border-white hover:bg-red-700 transition duration-300"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

