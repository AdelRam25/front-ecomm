import React from "react";

const MessageModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-[#181818] rounded-lg max-w-screen-lg mx-auto  p-5">
        <h2 className="text-2xl font-bold text-[#CCAC86] mb-4">Details Messages</h2>
        <div className="flex flex-col gap-4 ">
          <p><strong>Email:</strong> {message.email}</p>
          <p><strong>Nom:</strong> <span className="uppercase">{message.nom}</span> </p>
          <p><strong>Prenom:</strong> {message.prenom}</p>
          <p className="break-words"><strong>Message:</strong> {message.message}</p>
          <p><strong>Date:</strong> {message.date}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-[#CCAC86] text-black px-4 py-2 rounded-lg hover:bg-[#B89A7C] transition-colors"
        >
        Fermer
        </button>
      </div>
    </div>
  );
};

export default MessageModal;