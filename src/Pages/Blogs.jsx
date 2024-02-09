import React, { useEffect, useState } from "react";
import Bannar from "../Components/Header/Bannar";
import Blog from "../Components/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loadmore, setLoademore] = useState(6);
  useEffect(() => {
    const url = "blogs.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h1 className="text-center uppercase text-4xl text-bold py-8  ">
        Our Blogs{" "}
      </h1>
      <div className="grid grid-cols-2 gap-4 w-10/12 mx-auto">
        {blogs.slice(0, loadmore).map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
      <div
        className={loadmore === blogs.length ? "hidden" : "text-center py-5"}
      >
        <button
          onClick={() => setLoademore(blogs.length)}
          className="btn btn-primary"
        >
          {" "}
          More Blogs
        </button>
      </div>
    </div>
  );
};

export default Blogs;
