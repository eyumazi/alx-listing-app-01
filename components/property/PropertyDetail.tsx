import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import Button from "../layout/Button";
//import { FaLocationDot } from "react-icons/fa6";
const PropertyDetail: React.FC<{ property: PropertyProps }> = ({
  property,
}) => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold">{property.name}</h1>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2 mt-2">
          <Image
            src="/assets/Icons/Star 2.svg"
            alt="Star rating"
            width={20}
            height={20}
            className="star-icon"
          />
          <span className="text-black font-semibold">{property.rating}</span>
          {/* <FaLocationDot className="text-red-500" size={20} /> */}
          <span>
            {property.address.city}, {property.address.country}
          </span>
        </div>
        <div className="flex justify-between space-x-2">
          <Button className="bg-white" label="Save"></Button>
          <Button className="bg-white" label="Share"></Button>
        </div>
      </div>

      {/* Image Grid */}
      <div className=" image-Container grid grid-cols-2 gap-4 mt-4">
        <Image
          src={property.image[0]}
          alt={property.name}
          width={800}
          height={384}
          className="col-span-1 rounded-l-2xl"
        />
        <div className="grid grid-cols-2 gap-1">
          <Image
            src={property.image[1]}
            alt={property.name}
            width={800}
            height={384}
            className="col-span-2 w-full h-75 object-cover rounded-r-2xl"
          />
          <div className="col-span-2 flex space-x-4 mt-2 w-full h-fit">
            <Image
              src={property.image[2]}
              alt={property.name}
              width={800}
              height={384}
              className="w-full h-56.5 object-cover"
            />
            <Image
              src={property.image[3]}
              alt={property.name}
              width={800}
              height={384}
              className="w-full h-56.5 object-cover rounded-r-2xl"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">Description</h2>
        <p>{property.description[0]}</p>
        <p>{property.description[1]}</p>
      </div>

      {/* Amenities */}
      <div className="mt-4">
        <h2 className="text-2xl font-semibold">What this place offers</h2>
        <ul className="flex flex-wrap space-x-4">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-200 p-2 rounded-md">
              {amenity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyDetail;
