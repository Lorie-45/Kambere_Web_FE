import {
  UsersIcon,
  EllipsisVerticalIcon,
  StarIcon,
  PuzzlePieceIcon,
  ClipboardIcon,
  BookOpenIcon,
  SparklesIcon,
} from "@heroicons/react/16/solid";
import ChallengeGraph from "../components/graphs/ChallengeGraph";

const Challenges = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-color2 p-3 rounded-xl ">
          <div className="flex flex-col">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-3 ">
                <UsersIcon className="w-10 h-10 p-1 border-2 border-icon2 text-icon2 rounded-full " />
                <p className="font-sans font-bold text-icon2 ">
                  Total Participants
                </p>
              </div>
              <EllipsisVerticalIcon className="w-6 h-6 text-gray-400 " />
            </div>
            <div className="flex flex-col ml-12 ">
              <span className="font-sans font-extrabold text-3xl text-icon2 ">
                250
              </span>
              <span className="font-sans text-gray-500 font-semibold text-sm ">
                All familly members
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-color1 p-3 rounded-xl ">
          <div className="flex flex-col">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-3 ">
                <PuzzlePieceIcon className="w-10 h-10 p-1 border-2 border-icon1 text-icon1 rounded-full " />
                <p className="font-sans font-bold text-icon1 ">
                  Total Challenges
                </p>
              </div>
              <EllipsisVerticalIcon className="w-6 h-6 text-gray-400 " />
            </div>
            <div className="flex flex-col ml-12 ">
              <span className="font-sans font-extrabold text-3xl text-icon1 ">
                82%
              </span>
              <span className="font-sans text-gray-600 font-semibold text-sm ">
                Currently active users
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-color3 p-3 rounded-xl ">
          <div className="flex flex-col">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-3 ">
                <StarIcon className="w-10 h-10 p-1 border-2 border-icon3 text-icon3 rounded-full " />
                <p className="font-sans font-bold text-icon3 ">Top Users</p>
              </div>
              <EllipsisVerticalIcon className="w-6 h-6 text-gray-400 " />
            </div>
            <div className="flex flex-col ml-12">
              <span className="font-sans font-extrabold text-3xl text-icon3 ">
                43
              </span>
              <span className="font-sans text-gray-500 font-semibold text-sm ">
                Most active users
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1  " >
        <div className="flex flex-col gap-2">
          <div>
            <p className="font-heading text-component3 text-xl mt-8" >Created Challenges</p>
            <span className="font-sans text-md text-gray-700 font-semibold mb-2 " >View all your created challenges</span>
          </div>

          <div className="flex gap-3  ">
            <div className=" bg-color1 flex-1 flex-col  p-4 rounded-xl ">
              <div className="flex items-center justify-between ">
                <div>
                  <SparklesIcon className=" w-10 h-10 border-2 border-white p-0.5  rounded-full bg-white text-icon1" />
                </div>
                <div>
                  <EllipsisVerticalIcon className="w-6 h-6 text-gray-700 p-1 bg-white rounded-full" />
                </div>
              </div>

              <div className=" mt-2 font-sans font-semibold">
                Family Promotion Challenge
              </div>
              <div className="flex gap-5 text-gray-500 bg-white rounded-md justify-center items-center p-2 ">
                <div className="flex gap-2 items-center justify-items-center">
                  <BookOpenIcon className="w-6 h-6" />
                  <p>24</p>
                </div>
                <div className="flex gap-2 text-gray-500 items-center justify-items-center">
                  <ClipboardIcon className="w-6 h-6" />
                  <p>8</p>
                </div>
                <div className="flex text-gray-500 gap-2 items-center justify-items-center">
                  <UsersIcon className="w-6 h-6" />
                  <p>120</p>
                </div>
              </div>
            </div>

            <div className=" bg-color1 flex-1 flex-col  p-4 rounded-xl ">
              <div className="flex items-center justify-between ">
                <div>
                  <SparklesIcon className=" w-10 h-10 border-2 border-white p-0.5  rounded-full bg-white text-icon1" />
                </div>
                <div>
                  <EllipsisVerticalIcon className="w-6 h-6 text-gray-700 p-1 bg-white rounded-full" />
                </div>
              </div>

              <div className=" mt-2 font-sans font-semibold">
                Family Promotion Challenge
              </div>
              <div className="flex gap-5 text-gray-500 bg-white rounded-md justify-center items-center p-2 ">
                <div className="flex gap-2 items-center justify-items-center">
                  <BookOpenIcon className="w-6 h-6" />
                  <p>24</p>
                </div>
                <div className="flex gap-2 text-gray-500 items-center justify-items-center">
                  <ClipboardIcon className="w-6 h-6" />
                  <p>8</p>
                </div>
                <div className="flex text-gray-500 gap-2 items-center justify-items-center">
                  <UsersIcon className="w-6 h-6" />
                  <p>120</p>
                </div>
              </div>
            </div>

            <div className=" bg-color1 flex-1 flex-col  p-4 rounded-xl ">
              <div className="flex items-center justify-between ">
                <div>
                  <SparklesIcon className=" w-10 h-10 border-2 border-white p-0.5  rounded-full bg-white text-icon1" />
                </div>
                <div>
                  <EllipsisVerticalIcon className="w-6 h-6 text-gray-700 p-1 bg-white rounded-full" />
                </div>
              </div>

              <div className=" mt-2 font-sans font-semibold">
                Family Promotion Challenge
              </div>
              <div className="flex gap-5 text-gray-500 bg-white rounded-md justify-center items-center p-2 ">
                <div className="flex gap-2 items-center justify-items-center">
                  <BookOpenIcon className="w-6 h-6" />
                  <p>24</p>
                </div>
                <div className="flex gap-2 text-gray-500 items-center justify-items-center">
                  <ClipboardIcon className="w-6 h-6" />
                  <p>8</p>
                </div>
                <div className="flex text-gray-500 gap-2 items-center justify-items-center">
                  <UsersIcon className="w-6 h-6" />
                  <p>120</p>
                </div>
              </div>
            </div>
          </div>
          

          <div className="flex gap-3  ">
            <div className=" bg-color1 flex-1 flex-col  p-4 rounded-xl ">
              <div className="flex items-center justify-between ">
                <div>
                  <SparklesIcon className=" w-10 h-10 border-2 border-white p-0.5  rounded-full bg-white text-icon1" />
                </div>
                <div>
                  <EllipsisVerticalIcon className="w-6 h-6 text-gray-700 p-1 bg-white rounded-full" />
                </div>
              </div>

              <div className=" mt-2 font-sans font-semibold">
                Family Promotion Challenge
              </div>
              <div className="flex gap-5 text-gray-500 bg-white rounded-md justify-center items-center p-2 ">
                <div className="flex gap-2 items-center justify-items-center">
                  <BookOpenIcon className="w-6 h-6" />
                  <p>24</p>
                </div>
                <div className="flex gap-2 text-gray-500 items-center justify-items-center">
                  <ClipboardIcon className="w-6 h-6" />
                  <p>8</p>
                </div>
                <div className="flex text-gray-500 gap-2 items-center justify-items-center">
                  <UsersIcon className="w-6 h-6" />
                  <p>120</p>
                </div>
              </div>
            </div>

            <div className=" bg-color1 flex-1 flex-col  p-4 rounded-xl ">
              <div className="flex items-center justify-between ">
                <div>
                  <SparklesIcon className=" w-10 h-10 border-2 border-white p-0.5  rounded-full bg-white text-icon1" />
                </div>
                <div>
                  <EllipsisVerticalIcon className="w-6 h-6 text-gray-700 p-1 bg-white rounded-full" />
                </div>
              </div>

              <div className=" mt-2 font-sans font-semibold">
                Family Promotion Challenge
              </div>
              <div className="flex gap-5 text-gray-500 bg-white rounded-md justify-center items-center p-2 ">
                <div className="flex gap-2 items-center justify-items-center">
                  <BookOpenIcon className="w-6 h-6" />
                  <p>24</p>
                </div>
                <div className="flex gap-2 text-gray-500 items-center justify-items-center">
                  <ClipboardIcon className="w-6 h-6" />
                  <p>8</p>
                </div>
                <div className="flex text-gray-500 gap-2 items-center justify-items-center">
                  <UsersIcon className="w-6 h-6" />
                  <p>120</p>
                </div>
              </div>
            </div>

            <div className=" bg-color1 flex-1 flex-col  p-4 rounded-xl ">
              <div className="flex items-center justify-between ">
                <div>
                  <SparklesIcon className=" w-10 h-10 border-2 border-white p-0.5  rounded-full bg-white text-icon1" />
                </div>
                <div>
                  <EllipsisVerticalIcon className="w-6 h-6 text-gray-700 p-1 bg-white rounded-full" />
                </div>
              </div>

              <div className=" mt-2 font-sans font-semibold">
                Family Promotion Challenge
              </div>
              <div className="flex gap-5 text-gray-500 bg-white rounded-md justify-center items-center p-2 ">
                <div className="flex gap-2 items-center justify-items-center">
                  <BookOpenIcon className="w-6 h-6" />
                  <p>24</p>
                </div>
                <div className="flex gap-2 text-gray-500 items-center justify-items-center">
                  <ClipboardIcon className="w-6 h-6" />
                  <p>8</p>
                </div>
                <div className="flex text-gray-500 gap-2 items-center justify-items-center">
                  <UsersIcon className="w-6 h-6" />
                  <p>120</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ChallengeGraph />
      </div>
    </div>
  );
};

export default Challenges;
