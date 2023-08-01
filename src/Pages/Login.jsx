import { FcGenericSortingAsc, FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="w-full relative h-[623px] ">
        <img
          className="w-full h-full"
          src="https://th.bing.com/th/id/R.39ac878189b123929b2c76334ffa9d6a?rik=U6yejdES24UgMg&riu=http%3a%2f%2fnews.siliconallee.com%2fwp-content%2fuploads%2f2014%2f03%2fsecure.jpg&ehk=Nd03B9ioL6TYNm1Wm0WeqcTzmGZo0rmBQ8f4Zamvwtk%3d&risl=&pid=ImgRaw&r=0"
          alt=""
        />
      </div>
      <div className="w-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  h-[550px] bg-slate-100 rounded-lg bg-opacity-80">
        <h1 className="my-5 text-center text-5xl font-semibold underline underline-offset-8">
          Login
        </h1>
        <form className="px-5">
          <input
            placeholder="Type your email"
            type="email"
            className="w-full h-[40px] text-lg p-2 rounded-md focus:outline-none mt-10"
            name="email"
          />
          <input
            placeholder="Type your password"
            type="password"
            className="w-full h-[40px] text-lg p-2 rounded-md focus:outline-none mt-5"
            name="email"
          />
          <p className="mt-5">
            Forget Password?
            <a className="btn-link" href="">
              Click Here
            </a>
          </p>
          <input
            placeholder="Type your password"
            type="submit"
            value="Submit"
            className="w-full btn-success font-semibold uppercase h-[40px] rounded-md focus:outline-none mt-5"
            name="email"
          />
        </form>
        <h2 className="text-center font-bold">OR</h2>
        <div className="w-full flex gap-2 px-5 py-2">
          <button className="btn btn-success w-1/2">
            <FcGoogle className="text-lg " /> Sign in with google
          </button>
          <button className="btn btn-success w-1/2">
            <FcGenericSortingAsc className="text-lg" /> Sign in with github
          </button>
        </div>
        <div className="pl-5">
          <h1 className="mt-2">
            Dont have an account?{" "}
            <Link className="link" to="/register">
              {" "}
              Click Here
            </Link>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Login;
