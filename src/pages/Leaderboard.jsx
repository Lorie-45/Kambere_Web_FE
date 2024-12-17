import { CurrencyDollarIcon } from "@heroicons/react/16/solid";
import Table from "../components/graphs/Table"

const Leaderboard = () => {
  return (
    <div>
      <div className=" mt-5 justify-items-center">
        <p className="text-3xl font-heading text-component3 ">
          Overall Game Rankings
        </p>
        <span className="text-component3 font-sans text-lg font-semibold">
          Play games daily and stand a chance to win rewards!
        </span>
      </div>

      <div className="mt-5 justify-center flex flex-row gap-28 ">
        <div className="justify-items-center pt-20">
          <img className="w-20 h-20" src="/logo.png" alt="Profile" />
          <div className="justify-items-start">
            <p className="font-sans font-bold">BIZIMANA Louange</p>
            <div className="flex gap-2">
              <CurrencyDollarIcon className="w-6 h-6 text-component2" />
              <span className="font-sans font-bold text-gray-600 ">
                2.5k Gold{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="justify-items-center">
          <img className="w-20 h-20" src="/logo.png" alt="Profile" />
          <div className="justify-items-start">
            <p className="font-sans font-bold">BIZIMANA Louange</p>
            <div className="flex gap-2">
              <CurrencyDollarIcon className="w-6 h-6 text-component2" />
              <span className="font-sans font-bold text-gray-600 ">
                2.5k Gold{" "}
              </span>
            </div>
          </div>
        </div>

        <div className="justify-items-center pt-20 ">
          <img className="w-20 h-20" src="/logo.png" alt="Profile" />
          <div className="justify-items-start">
            <p className="font-sans font-bold">BIZIMANA Louange</p>
            <div className="flex gap-2">
              <CurrencyDollarIcon className="w-6 h-6 text-component2" />
              <span className="font-sans font-bold text-gray-600 ">
                2.5k Gold{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Table />
      </div>
    </div>
  );
};

export default Leaderboard;
