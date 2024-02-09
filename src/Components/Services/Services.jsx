import { useContext, useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loadmore, setLoadmore] = useState(4);
  useEffect(() => {
    const url = "corporate.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  //   console.log(services);
  return (
    <div>
      <h1 className="text-center uppercase text-4xl text-bold py-8 ">
        Our services
      </h1>
      <div className="grid grid-cols-2 gap-4 w-10/12 mx-auto">
        {services.slice(0, loadmore).map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
      <div
        className={
          loadmore === services.length ? "hidden" : " text-center my-5"
        }
      >
        <button
          onClick={() => setLoadmore(services.length)}
          className="btn btn-success text-white text-xl"
        >
          {" "}
          see more{" "}
        </button>
      </div>
    </div>
  );
};

export default Services;
