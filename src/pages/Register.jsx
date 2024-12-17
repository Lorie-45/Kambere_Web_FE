import { EnvelopeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();
  const handleLogin = () => {
    return navigate('/login')
  }

  return ( 

  <div className="w-full flex h-screen items-center justify-center">

    <div className="w-full lg:w-1/2 justify-center items-center pl-24 pr-24 " >
      <h1 className="text-5xl font-heading" >Sign Up</h1>
      <div className="mt-8  " >

        <div className="flex gap-3 items-center">
          <EnvelopeIcon className="w-6 h-6 text-gray-500" />
          <input 
          className="w-full bg-transparent outline-none border-b-2 p-4 border-b-gray-200"
          type="email"
          placeholder="Email"
          />
          </div>

        <div className=" flex gap-3 items-center" >
          <LockClosedIcon className="w-6 h-6 text-gray-500 " />
          <div className="flex w-full items-center justify-center border-b-2 p-4 border-b-gray-200 " >
          <input 
          className="w-full bg-transparent outline-none "
          type="password"
          placeholder="Password"
          />
          <EyeSlashIcon className="w-6 h-6 text-gray-500" /> 
          </div>
        </div>

        <div className="flex gap-3 items-center" >
          <LockClosedIcon
          className="w-6 h-6 text-gray-500"
          />
          <div
          className="w-full flex items-center border-b-2 p-4 border-b-gray-200 "
          >
          <input
          className="w-full bg-transparent outline-none"
          placeholder="Confirm your password"
          type="password"
          />
          <EyeSlashIcon
          className="w-6 h-6 text-gray-500 "
          />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between" >
          <div className="ml-2 flex items-center">
            <input 
            type="checkbox"
            />
            <label className="ml-2 font-sans font-medium text-sm" >I agree to the terms & conditions</label>
          </div>
        </div>

        <div className="mt-12 " >
          <button className=" active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-component1 text-white text-medium font-sans font-bold w-full " >Sign In</button>
        </div>

        
        <div className="mt-8 flex justify-center items-center text-sm">
            <p className="font-sans font-semibold">Already have an account?</p>
            <button
              onClick={handleLogin}
              className="font-sans font-bold text-component3 ml-2 hover:underline"
            >
              Login
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
  )
}
