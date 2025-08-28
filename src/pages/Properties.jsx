// import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Luxury 4-Bedroom Villa",
      location: "East Legon, Accra",
      price: "$350,000",
      img: "AFI.jpg",
    },
    {
      id: 2,
      title: "Modern 2-Bedroom Apartment",
      location: "Osu, Accra",
      price: "$120,000",
      img: "PRAM.jpeg",
    },
    {
      id: 3,
      title: "Spacious Land (2 Acres)",
      location: "Kasoa, Central Region",
      price: "$50,000",
      img: "SH.jpeg",
    },
    {
      id: 4,
      title: "Executive 3-Bedroom House",
      location: "Tema Community 25",
      price: "$200,000",
      img: "PRAM.jpeg",
    },
    {
      id: 5,
      title: "Beachfront 5-Bedroom Mansion",
      location: "Cape Coast",
      price: "$500,000",
      img: "SH.jpeg",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Available Properties
          </h2>
          <p className="mt-2 text-gray-600">
            Browse through our premium selection of lands, houses, and apartments.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={property.img}
                alt={property.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{property.title}</h3>
                <p className="text-sm text-gray-600">{property.location}</p>
                <p className="mt-2 text-blue-600 font-semibold">{property.price}</p>
                <div className="mt-4">
                  <Link
                    to={`/properties/${property.id}`}
                    className="block text-center bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2"
                  >
                    View Details
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
