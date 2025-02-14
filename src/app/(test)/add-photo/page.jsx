"use client"

import { useState } from "react"
import axios from "axios"
import Swal from "sweetalert2"
import { useSelector } from "react-redux"

const AddPhoto = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    aperture: "",
    time: "",
  })
  const [photoFile, setPhotoFile] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setPhotoFile(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formDataToSend = new FormData()
    formDataToSend.append("name", formData.name)
    formDataToSend.append("description", formData.description)
    formDataToSend.append("category", formData.category)
    formDataToSend.append("aperture", formData.aperture)
    formDataToSend.append("time", formData.time)
    if (photoFile) {
      formDataToSend.append("photo", photoFile)
    }

    try {
      const response = await axios.post("http://localhost:3001/photos", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      if (response.status === 201) {
        // Success SweetAlert
        await Swal.fire({
          title: "Succès!",
          text: "La photo a été ajoutée avec succès!",
          icon: "success",
          confirmButtonColor: "#CCAC86",
          background : "black",
          color : "white"
        })

        // Reset form
        setFormData({
          name: "",
          description: "",
          category: "",
          aperture: "",
          time: "",
        })
        setPhotoFile(null)
      }
    } catch (error) {
      // Error SweetAlert
      await Swal.fire({
        title: "Erreur!",
        text: "Une erreur est survenue lors de l'ajout de la photo.",
        icon: "error",
        confirmButtonColor: "#CCAC86",
      })
      console.error(error)
    }
  }
  const user = useSelector((state) => state.user.user);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);


  if (!isAuthenticated || user.type !== 'admin') {
    return <p className="text-white flex justify-center p-10">Access Denied!</p>;
  }


  return (
    <div className="max-w-screen-md mx-auto p-6 m-10 bg-black border border-white rounded-lg shadow-lg mb-10">
      <h2 className="text-2xl font-bold text-[#CCAC86] mb-6">Ajouter une nouvelle photo</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Entrer le nom de la photo"
            required
            className="w-full p-2 border border-gray-500 rounded-md bg-[#1E1E1E] text-white"
          />
        </div>

        {/* Category */}
        <div>
          <label htmlFor="category" className="block text-sm font-semibold text-gray-300 mb-2">
            Categorie
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Entrer la categorie"
            required
            className="w-full p-2 border border-gray-500 rounded-md bg-[#1E1E1E] text-white"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 ">
          {/* Aperture */}
          <div>
            <label htmlFor="aperture" className="block text-sm font-semibold text-gray-300 mb-2">
              Aperture
            </label>
            <input
              type="text"
              id="aperture"
              name="aperture"
              value={formData.aperture}
              onChange={handleChange}
              placeholder="Entrer aperture "
              required
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
              value={formData.time}
              onChange={handleChange}
              placeholder="Entrer temps"
              required
              className="w-full p-2 border border-gray-500 rounded-md bg-[#1E1E1E] text-white"
            />
          </div>
        </div>

        {/* PhotoUpload */}
        <div>
          <label htmlFor="photo" className="block text-sm font-semibold text-gray-300 mb-2">
            Ajouter photo
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            required
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
            value={formData.description}
            onChange={handleChange}
            placeholder="Entrer la description"
            required
            className="w-full p-2 border border-gray-500 rounded-md bg-[#1E1E1E] text-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-[#CCAC86] text-black py-2 px-6 rounded-md border border-white hover:bg-[#B89A7C] transition duration-300"
        >
          Ajouter
        </button>
      </form>
    </div>
  )
}

export default AddPhoto

