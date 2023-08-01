import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div
      className="w-full relative h-[625px]
    "
    >
      <img
        className="w-full h-full"
        src="https://th.bing.com/th/id/OIP.GbMboU-krQvdIrfKgWpzXgHaFj?pid=ImgDet&w=1920&h=1440&rs=1"
        alt=""
      />
      <div className="w-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-[550px] bg-slate-100 rounded-lg bg-opacity-70">
        <h1 className="my-5 text-center text-5xl font-semibold underline underline-offset-8">
          Register
        </h1>
        <form className="p-5 space-y-3">
          <input
            className="w-full h-[40px] text-lg p-2 rounded-md focus:outline-none mt-10"
            type="text"
            placeholder="Name"
          />
          <br />
          <input
            className="w-full h-[40px] text-lg p-2 rounded-md focus:outline-none mt-10"
            type="password"
            placeholder="Password"
          />
          <input
            className="w-full h-[40px] text-lg p-2 rounded-md focus:outline-none mt-10"
            type="password"
            placeholder="Confirm Password"
          />
          <br />
          <input
            className="w-full h-[40px] text-lg p-2 rounded-md focus:outline-none mt-10"
            type="email"
            placeholder="Email"
          />
          <br />
          <input
            className="w-full h-[40px] text-lg p-2 rounded-md focus:outline-none mt-10"
            type="url"
            placeholder="Photo url"
          />
          <br />
          <input
            className="w-full btn-success font-semibold uppercase h-[40px] rounded-md focus:outline-none mt-5"
            type="submit"
            value="Sign Up"
          />
          <p>
            Already Have account? <Link to="/login">Click here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
