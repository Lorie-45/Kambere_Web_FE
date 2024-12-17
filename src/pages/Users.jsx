import UserList from "../components/UserList";
import { EllipsisVerticalIcon, HeartIcon, StarIcon, UsersIcon } from "@heroicons/react/16/solid";

const Users = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 bg-color2 p-3">
          <div className="flex flex-col">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-3 ">
                <UsersIcon className="w-10 h-10 p-1 border-2 border-icon2 text-icon2 rounded-full " />
                <p className="font-sans font-bold text-icon2 ">Total Users</p>
              </div>
              <EllipsisVerticalIcon className="w-6 h-6 text-gray-400 " />
            </div>
            <div className="flex flex-col ml-12 ">
              <span className="font-sans font-extrabold text-3xl text-icon2 ">250</span>
              <span className="font-sans text-gray-500 font-semibold text-sm ">
                All familly members
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-color1 p-3">
          <div className="flex flex-col">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-3 ">
                <HeartIcon className="w-10 h-10 p-1 border-2 border-icon1 text-icon1 rounded-full " />
                <p className="font-sans font-bold text-icon1 ">Active Users</p>
              </div>
              <EllipsisVerticalIcon className="w-6 h-6 text-gray-400 " />
            </div>
            <div className="flex flex-col ml-12 ">
              <span className="font-sans font-extrabold text-3xl text-icon1 ">82%</span>
              <span className="font-sans text-gray-600 font-semibold text-sm ">
                Currently active users 
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-color3 p-3">
          <div className="flex flex-col">
            <div className="flex items-center justify-between ">
              <div className="flex items-center gap-3 ">
                <StarIcon className="w-10 h-10 p-1 border-2 border-icon3 text-icon3 rounded-full " />
                <p className="font-sans font-bold text-icon3 ">Top Users</p>
              </div>
              <EllipsisVerticalIcon className="w-6 h-6 text-gray-400 " />
            </div>
            <div className="flex flex-col ml-12 ">
              <span className="font-sans font-extrabold text-3xl text-icon3 ">43</span>
              <span className="font-sans text-gray-500 font-semibold text-sm ">
                Most active users
              </span>
            </div>
          </div>
        </div>
      </div>
      <UserList />
    </div>
  );
};

export default Users;
