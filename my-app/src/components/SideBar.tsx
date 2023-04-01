import {useState} from "react";
import logo from "./logo.png";

import { FaCube, FaChevronDown ,FaUsers ,FaUserAlt,FaGlobeAsia ,FaMapPin,FaChessRook,FaProjectDiagram} from "react-icons/fa";




export default function SideBar() {

  const [submenuOpen, setSubmenuOpen]= useState(false);

  const Menus = [
    { title: "Dashboard",logo:<FaCube/>},
    { title: "Users",logo:<FaUsers/> },
    { title: "Candidates" , logo:<FaUserAlt/>},
    { title: "Projects",logo:<FaProjectDiagram/>,
    submenu: true,
    submenuItems: [
      { title: "Submenu 1" },
      { title: "Submenu 1" },
      { title: "Submenu 1" },
      { title: "Submenu 1" },
    ], },
    { title: "Constituency",logo:<FaGlobeAsia/> },
    { title: "Designation",logo:<FaMapPin/>},
    { title: "Party",logo:<FaChessRook/>,spacing:true},
   
  ];

  return (
    <div>
      <div className="bg-dark-purple h-screen p-5 pt-8 w-72 divide-y divide-slate-600">
        <img src={logo} className="pl-10 h-32 w-48 divide-y divide-slate-600" alt="logo" />

        <ul className="pt-8 divide-y divide-slate-600">
          {Menus.map((menu, index) => {
            return (<>
            <li
              key={index}
              className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-4 ${menu.spacing ? "mt-0":"mt-2"}mt-2`}
            >
              <span className="text-2xl block float-left">
               {menu.logo}
              </span>
              <span className="text-base font-medium flex-1">{menu.title}</span>
              {menu.submenu && (<FaChevronDown className="" onClick={()=>setSubmenuOpen(!submenuOpen)}/>)}
            </li>

            {menu.submenu && submenuOpen && (

              <ul>
                {menu.submenuItems.map((submenuItem , index)=>{
                  return(<>
                  <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 divide-y divide-slate-200" key={index}>
                    {submenuItem.title}
                  </li>
                  </>)
                })}
              </ul>
              
            )}
            </>)
          })}
        </ul>
      </div>
    </div>
  );
}
