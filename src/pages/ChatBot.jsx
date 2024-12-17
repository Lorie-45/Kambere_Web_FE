import { PaperAirplaneIcon } from "@heroicons/react/16/solid";

const ChatBot = () => {
  return (
    <div>
      <div>
        <img className="" src="/ai-icon.png" alt="AI Message Icon" />
      </div>
      <div className="flex ">
        <input
          className="focus:outline-none"
          type="text"
          placeholder="Ask Anything"
        />
        <PaperAirplaneIcon className="w-6 h-6 -rotate-45 cursor-pointer " />
      </div>
    </div>
  );
};

export default ChatBot;
