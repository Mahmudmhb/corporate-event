import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { id, author, image, shortDescription } = blog;
  return (
    <div>
      <div className=" p-4 border rounded bg-gray-100 shadow-amber-400">
        <div>
          <img
            data-aos="fade-right"
            className="w-full h-80 rounded "
            src={image}
            alt=""
          />
          <p>
            Author: <span className="text-blue-500"> {author}</span>
          </p>
        </div>
        <p className="my-3">{shortDescription}</p>
        <div
          data-aos="flip-left"
          className="  flex justify-between items-center my-5"
        >
          {/* <h1 className="text-2xl font-bold text-emerald-600">{name}</h1> */}
        </div>

        <Link to={`/blogdetails/${id}`}>
          <button className="btn w-full text-white text-xl mb-2 btn-primary">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
