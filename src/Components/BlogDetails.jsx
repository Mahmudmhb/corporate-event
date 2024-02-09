import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const blogs = useLoaderData();
  const { id } = useParams();
  const prsId = parseInt(id);
  //   console.log(id, services);
  const findDetails = blogs.find((service) => service.id === prsId);
  const { image, author, shortDescription, description } = findDetails;
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
          <p>
            Author: <span className="text-blue-500"> {author}</span>
          </p>
        </div>
        <p className="my-3 text-2xl">{shortDescription}</p>
        <div
          data-aos="flip-left"
          className="  flex justify-between items-center my-5"
        ></div>
        <p className="my-3">{description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
