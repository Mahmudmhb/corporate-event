import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, name, image, price, shortDescription } = service;
  return (
    <div
      data-aos="fade-up"
      className=" p-4 border rounded bg-gray-100 shadow-amber-400 "
    >
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

      <Link to={`/servicedetails/${id}`}>
        <button className="btn w-full text-white  mb-2 btn-success">
          See Details
        </button>
      </Link>
    </div>
  );
};

export default Service;
