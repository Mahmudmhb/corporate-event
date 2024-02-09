import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { id, author, image, shortDescription } = blog;
  return (
    <div data-aos="fade-right">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-52 w-96 mr-2 my-2 rounded"
            src={image}
            alt={shortDescription}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{author}</h2>
          <p>{shortDescription}</p>
          <div className="card-actions">
            <Link to={`/blogdetails/${id}`}>
              <button className="btn w-full text-white  mb-2 btn-primary">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
