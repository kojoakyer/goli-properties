import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";
import { useState } from "react";

const properties = [
  {
    id: 1,
    title: "Luxury 4-Bedroom Villa",
    location: "East Legon, Accra",
    price: "$350,000",
    images: [
      "../AFI.jpg",
      "../PRAM.jpeg",
      "../SH.jpeg",
    ],
    description:
      "This luxury 4-bedroom villa offers spacious living areas, modern finishing, a swimming pool, and a serene environment.",
    features: ["4 Bedrooms", "3 Bathrooms", "Swimming Pool", "Parking Garage", "24/7 Security"],
  },
  {
    id: 2,
    title: "Modern 2-Bedroom Apartment",
    location: "Osu, Accra",
    price: "$120,000",
   images: [
      "../SH.jpeg",
      "../PRAM.jpeg",
      "../SH.jpeg",
    ],
    description:
      "A modern apartment located in the heart of Osu, perfect for young professionals or small families.",
    features: ["2 Bedrooms", "2 Bathrooms", "Balcony View", "Underground Parking", "Gym Access"],
  },
  {
    id: 3,
    title: "Spacious Land (2 Acres)",
    location: "Kasoa, Central Region",
    price: "$50,000",
    images: [
      "../SH.jpeg",
      "../PRAM.jpeg",
      "../SH.jpeg",
    ],
    description:
      "Ideal land for real estate development, located in a rapidly growing neighborhood.",
    features: ["2 Acres", "Titled Document", "Accessible Road", "Electricity Available"],
  },
  {
    id: 4,
    title: "Executive 3-Bedroom House",
    location: "Tema Community 25",
    price: "$200,000",
    images: [
      "../SH.jpeg",
      "../PRAM.jpeg",
      "../SH.jpeg",
    ],
    description:
      "An executive home with modern finishing, spacious kitchen, and easy access to major roads.",
    features: ["3 Bedrooms", "2 Bathrooms", "Fitted Kitchen", "Backyard Garden", "Gated Community"],
  },
  {
    id: 5,
    title: "Beachfront 5-Bedroom Mansion",
    location: "Cape Coast",
    price: "$500,000",
    images: [
      "../SH.jpeg",
      "../PRAM.jpeg",
      "../AFI.jpg",
    ],
    description:
      "A breathtaking beachfront mansion with a panoramic ocean view, luxurious interiors, and private beach access.",
    features: ["5 Bedrooms", "5 Bathrooms", "Private Beach Access", "Infinity Pool", "Guest House"],
  },
];

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === parseInt(id));
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (!property) return <p className="text-center py-20">Property not found.</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 py-16 px-6">
      {/* Main Image Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        navigation
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        className="rounded-xl shadow-md"
      >
        {property.images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`${property.title} ${i + 1}`}
              className="w-full h-96 object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Gallery */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="mt-4"
      >
        {property.images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img}
              alt={`Thumbnail ${i + 1}`}
              className="w-full h-24 object-cover rounded-md cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Property Details */}
      <div className="mt-8">
        <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-2xl text-blue-600 font-semibold mt-2">{property.price}</p>

        <p className="mt-6 text-gray-700">{property.description}</p>

        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-800">
          {property.features.map((feature, i) => (
            <li key={i} className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-4">
          <Link
            to="/properties"
            className="px-5 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Back to Properties
          </Link>
          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
            Contact Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
