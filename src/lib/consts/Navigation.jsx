import {
//   ArrowTrendingUpIcon,
  Cog6ToothIcon,
  // DocumentTextIcon,
  HomeIcon,
  PuzzlePieceIcon,
  QuestionMarkCircleIcon,
  TrophyIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";

const iconClass = 'w-6 h-6';

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "home",
    label: "Home",
    path: "/dashboard",
    icon: <HomeIcon className={iconClass} />
  },
  {
    key: "users",
    label: "Users",
    path: "/users",
    icon: <UsersIcon className={iconClass} />
  },
  {
    key: "chatbot",
    label: "Chatbot",
    path: "/chatbot",
    icon: <img src="/aiIcon.png" alt="ai icon" className={iconClass} />
  },
  // {
  //   key: "reports",
  //   label: "Reports",
  //   path: "/reports",
  //   icon: <DocumentTextIcon className={iconClass} />
  // },
  {
    key: "leaderboard",
    label: "Leaderboard",
    path: "/leaderboard",
    icon: <TrophyIcon className={iconClass} />
  },
  {
    key: "challenges",
    label: "Challenges",
    path: "/challenges",
    icon: <PuzzlePieceIcon className={iconClass} />
  },
];

export const DASHBOARD_BOTTOM_SIDEBAR_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <Cog6ToothIcon className={iconClass} />
  },
  {
    key: "help",
    label: "Need Help?",
    path: "/help",
    icon: <QuestionMarkCircleIcon className={iconClass} />
  },
];
