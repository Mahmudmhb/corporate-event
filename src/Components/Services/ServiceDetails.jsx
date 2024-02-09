import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { id } = useParams();
  const prsId = parseInt(id);
  //   console.log(id, services);
  const findDetails = services.find((service) => service.id === prsId);
  const { name, image, price, shortDescription, description } = findDetails;
  return (
    <div className="w-5/6 mx-auto">
      <div className=" p-4 border rounded bg-gray-100 shadow-amber-400">
        <div>
          <img
            data-aos="fade-right"
            className="w-full h-96 rounded "
            src={image}
            alt=""
          />
        </div>
        <p className="my-3">{shortDescription}</p>
        <div
          data-aos="flip-left"
          className="  flex justify-between items-center my-5"
        >
          <h1 className="text-2xl font-bold text-emerald-600">{name}</h1>
          <p className="text-blue-500">Price: ${price}</p>
        </div>
        <p className="my-3">{description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;
