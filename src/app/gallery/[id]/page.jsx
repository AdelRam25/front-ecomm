
import axios from "axios";


export default async function PhotoDetail({ params }) {
  const id = params.id;
  let photo = {};
  const response = await axios.get(`http://localhost:3001/photo/${id}`);
  photo = response.data;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* photo */}
        <div className="relative">
          <img
            src={photo.photo}
            alt={photo.name}
            className="w-full h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
        </div>

        {/* Details */}
        <div className="p-6 space-y-4">
          <h2 className="text-4xl font-extrabold text-gray-800">{photo.name}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{photo.description}</p>

          {/* Price and Buy Button */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-2xl font-bold text-[#F25B3F]">${photo.price}</p>
            <button 
              className="bg-black text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-[#D94F2E] hover:shadow-lg transition-all duration-300"
           
            >
              Buy Now
            </button>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}
