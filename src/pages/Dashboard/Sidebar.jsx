import { Link, useLocation } from "react-router-dom";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_BOTTOM_SIDEBAR_LINKS } from "../../lib/consts/Navigation" ;
import classNames from "classnames";



const linkClasses = 'flex items-center gap-2 px-4 py-2 text-sm font-semibold font-sans hover:bg-gray-200 rounded-sm cursor-pointer  ';

export default function Sidebar() {

  return (
    <div className="flex flex-col w-60 h-full  p-3 bg-backgroundSec " >
      <div className="flex gap-3 px-3 py-2 items-center" >
        <img 
        className="w-16 h-16"
        src="/logo.png"
        alt="Kambere Logo"
        />
        <span className="font-heading font-medium text-lg" >Kambere</span>
      </div>
      <div className="flex-1 py-2 flex flex-col gap-1 " >
        {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="py-2 flex flex-col gap-1 border-t border-gray-700"  >
        {DASHBOARD_BOTTOM_SIDEBAR_LINKS.map((item)=>(
          <SidebarLink key={item.key} item={item}  />
        ))}
      </div>
    </div>
  );
};



function SidebarLink({item}) {

  const {pathname} = useLocation();

  return(
    <Link to={item.path} className={classNames( pathname === item.path ? 'bg-component1 text-white  ' : 'text-gray-700',linkClasses)} >
      <span>{item.icon}</span>
      {item.label}
    </Link>
  )
}


