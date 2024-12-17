import {
  BellAlertIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/16/solid";


const TopBar = () => {
  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning☀️ ";
    if(hour === 12 ) return "Welcome Back 😊"
    if (hour > 12) return "Good Afternoon 👋";
  };

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="flex items-center justify-between px-4 pt-5 w-full">
      {/* Left Section - Greeting */}
      <div className="flex items-center gap-3">
        <div>
          <h1 className="font-sans font-bold text-lg">
            {getCurrentGreeting()}
          </h1>
          <p className="font-sans font-medium text-sm text-gray-400 ">
            {currentDate}
          </p>
        </div>
      </div>

      {/* Center Section - Search Bar */}
      <div className="flex-1 flex justify-center">
        <div className="flex items-center gap-2 border-2 border-gray-600 rounded-full p-1.5 w-1/2">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-500 ml-5" />
          <input
            className="focus:outline-none bg-transparent placeholder:text-sm placeholder:font-semibold placeholder:font-sans w-full"
            type="text"
            placeholder="Search anything ..."
          />
        </div>
      </div>

      {/* Right Section - Icons */}
      <div className="flex items-center gap-4">
        <BellAlertIcon className="w-10 h-10 border-2 p-2 text-gray-400 rounded-full" />
        <UserIcon className="w-10 h-10 border-2 p-2 text-gray-400 rounded-full" />
      </div>
    </div>
  );
};

export default TopBar;
