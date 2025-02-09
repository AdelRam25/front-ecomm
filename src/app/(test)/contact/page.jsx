"use client";
import { useState } from "react";
import axios from "axios"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    prenom: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/message",
        formData,
        {}
      );

      if (response.status == 200) {
        setResponseMessage("Message envoyé avec succès !");
        setFormData({ nom: "", prenom: "", message: "", email: "" }); // Clear form
      } else {
        setResponseMessage(
          `Erreur: ${response.data.message || "Veuillez réessayer."}`
        );
      }
    } catch (error) {
      setResponseMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <>
      <div className="bg-black text-white flex justify-center py-10 px-5">
        <div className="w-full max-w-screen-xl grid grid-cols-2 gap-16">
          <div>
            <p className="mt-24 flex flex-col gap-3 text-left">
              <span className="text-5xl font-bold tracking-widest text-[#CCAC86]">
                CONTACTEZ MOI
              </span>
              <span className="text-gray-300 text-xl tracking-widest">
                Que vous soyez dans les phases de planification ou dans les
                dernières étapes de votre projet, n'hésitez pas à nous
                contacter. Nous prenons en charge la plupart des projets et
                n'hésitons pas à nous déplacer si nécessaire.
              </span>
            </p>
          </div>

          <div className="border border-gray-500 p-5">
            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                {/* Nom */}
                <div className="w-full">
                  <label
                    htmlFor="nom"
                    className="block text-sm font-semibold mb-2"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Entrez votre nom ..."
                    required
                    className="w-full p-2 border text-black border-gray-300 rounded-md shadow-sm"
                  />
                </div>

                {/* Prenom */}
                <div className="w-full">
                  <label
                    htmlFor="prenom"
                    className="block text-sm font-semibold mb-2"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    placeholder="Entrez votre prenom ..."
                    required
                    className="w-full p-2 border text-black border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              </div>

              {/* Full-width Email */}
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Entrez votre Email ..."
                  required
                  className="w-full p-2 border text-black border-gray-300 rounded-md shadow-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Entrez votre message ..."
                  required
                  className="w-full p-3 border text-black border-gray-300 rounded-md shadow-sm h-52"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="m-5 bg-transparent text-white border-2 border-gray-500 py-2 px-6 rounded-lg hover:bg-[#CCAC86] hover:text-black transition duration-300 cursor-pointer"
              >
                Envoyez
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="h-[580px] bg-[url(/homepage.jpg)] border border-gray-500 bg-cover bg-center flex flex-col justify-center items-center text-center mt-16 px-6 pr-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-50"></div>

        <h2 className="text-md font-bold text-gray-100 tracking-widest mt-56 z-10">
          Soleil levant - Hoggar
        </h2>
        <h2 className="text-md font-normal text-gray-300 tracking-widest max-w-screen-sm z-10">
          Le matin se lève doucement sur les montagnes du Hoggar, L'ombre des
          roches se dessine lentement sous les premiers rayons dorés. Les dunes
          du désert s'éveillent dans un silence sacré.
        </h2>
      </div>
    </>
  );
}
