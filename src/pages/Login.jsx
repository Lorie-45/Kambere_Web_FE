import { EnvelopeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/register");
  };
  const handleDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="w-full flex h-screen items-center justify-center">
      
      <div className="w-full lg:w-1/2 justify-center items-center pl-24 ">
        <h1 className="text-5xl font-heading">Log In</h1>
        <div className="mt-8">
          <div className="w-9/12 flex gap-3 items-center focus-within:text-gray-500 ">
            <EnvelopeIcon className="w-6 h-6 text-gray-500 " />
            <input
              className="w-full bg-transparent outline-none border-b-2 p-4 border-b-gray-200 focus-within:animate-border-fill"
              type="email"
              placeholder="Email"
            />
          </div>
  
          <div className="w-9/12 flex gap-3 items-center">
            <LockClosedIcon className="w-6 h-6 text-gray-500" />
            <div className="w-full flex justify-center p-4 border-b-2 border-b-gray-200 focus-within:animate-border-fill ">
              <input
                className="w-full bg-transparent outline-none  "
                type="password"
                placeholder="Password"
              />
              <EyeSlashIcon className="w-6 h-6 text-gray-500 " />
            </div>
          </div>
          <div className="w-9/12 mt-6 flex items-center justify-between">
            <div className="ml-2 flex items-center">
              <input type="checkbox" id="remember" />
              <label
                htmlFor="remember"
                className="ml-2 font-sans font-medium text-sm"
              >
                Remember me
              </label>
            </div>
            <button className="text-sm font-sans font-light text-blue-800 mt-3 hover:underline">
              Forgot Password?
            </button>
          </div>
          <div className="w-9/12 justify-center items-center mt-12">
            <button
              onClick={handleDashboard}
              className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-component1 text-white text-medium font-sans font-bold w-full"
            >
              Sign In
            </button>
          </div>
          <div className="w-9/12 mt-8 flex justify-center items-center text-sm">
            <p className="font-sans font-semibold">Dont have an account?</p>
            <button
              onClick={handleSignUp}
              className="font-sans font-bold text-component3 ml-2 hover:underline"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

        {/* image part */}

      <div className="hidden relative bg-backgroundSec lg:flex h-full w-1/2 items-center justify-center">
        <img src="/logo2.png" alt="Kambere logo" width={200} height={200} />
        <div className="absolute bottom-24 text-component3 font-heading text-4xl">
          Welcome to <span className="text-component1">Kambere</span>
        </div>
      </div>

    </div>
  );
}
