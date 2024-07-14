import { BsThreeDots } from "react-icons/bs";
import { CiEdit, CiMenuBurger } from "react-icons/ci";
import { IoIosNotifications, IoMdSearch } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

 
const Navbar = () => {
    return (
        <div className="bg-[#2F3645] max-w-[1920px] w-full mx-auto">
             <div className="flex px-8 max-w-7xl mx-auto py-5 justify-between items-center">
                <h2 className="text-4xl text-white font-semibold flex items-center gap-3"> <img className="w-12 pt-2" src="/logo.svg" alt="" /> Logoipsum</h2>
                <div className="md:flex hidden items-center gap-4">
                    <p className="bg-[#121213] font-bold text-xl cursor-pointer text-white p-2 rounded-full"><IoMdSearch /></p>
                    <p className="bg-[#121213] font-bold text-xl cursor-pointer text-white p-2 rounded-full"><CiEdit /></p>
                    <p className="bg-[#121213] font-bold text-xl cursor-pointer text-white p-2 rounded-full"><IoMailSharp /></p>
                    <p className="bg-[#121213] font-bold text-xl cursor-pointer text-white p-2 rounded-full"><IoIosNotifications /></p>
                    <p className="bg-[#121213] font-bold text-xl cursor-pointer text-white p-2 rounded-full"><BsThreeDots /></p>
                    <img className="w-12 h-11 rounded-[100%]" src="/profile.jpg" alt="" />
                </div>
                <div className="flex md:hidden gap-5 items-center">
                    <img className="w-12 h-11 rounded-[100%]" src="/profile.jpg" alt="" />
                    <p className="bg-[#121213] font-bold text-xl cursor-pointer text-white p-2 rounded-full"><MdMenu /></p>
                </div>
             </div>
        </div>
    );
};

export default Navbar;