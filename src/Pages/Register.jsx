import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { handleloginRegister } = useContext(AuthContext);
  console.log(handleloginRegister);
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleloginRegister(email, password)
      .then((result) => {
        console.log(result.user);
        alert("register succesfully");
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(email, password);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <div className="card shrink-0 w-full shadow-2xl bg-base-100">
              <form onSubmit={handleRegister} className="card-body w-96">
                <h1 className="text-4xl font-bold">Register now!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo Url"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    name="password"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary"> Login</button>
                </div>
                <span>
                  Do you Have an Acount?
                  <Link to="/login" className="text-green-600">
                    Login
                  </Link>{" "}
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
