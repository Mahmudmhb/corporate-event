import { Link } from "react-router-dom";

const Bannar = () => {
  return (
    <div className=" bg-base-200">
      <div data-aos="zoom-in-up" className="hero min-h-screen w-10/12 mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/free-photo/female-business-executive-giving-speech_107420-63794.jpg?w=740&t=st=1707454761~exp=1707455361~hmac=9af43bb1450375e04bea6933ed88d62837d6b965e80e033149812d94c23a233f"
            className=" rounded-lg w-3/6 shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/blogs">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
