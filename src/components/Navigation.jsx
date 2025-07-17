import { RiShoppingCart2Line } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { LuSearch } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
const Navigation = () => {
  return (
    <div>
      <div className="flex h-14 items-center justify-around bg-slate-200">
        {/* left Nav */}
        <div>
          {/* logo */}
          <div>
            <h1 className="text-xl font-extrabold">DuckGo</h1>
          </div>
        </div>
        {/* Mid Nav */}
        <div className="flex relative">
        {/* Search bar */}
          <input type="text"
          placeholder="Search here..." 
          className="border hidden sm:block border-black w-[180px] sm:w-[250px] lg:w-[300px] px-7 py-1 rounded-full outline-none bg-transparent
           focus:w-[190px] focus:sm:w-[260px] focus:lg:w-[310px] duration-200"/>
          <LuSearch className="absolute hidden sm:block mx-2 my-2"/>
        </div>
        {/* Right Nav */}
        <div className="flex gap-4">
            <button className="flex items-center gap-1"><RiShoppingCart2Line/>Card</button>
            <button><MdFavoriteBorder/></button>
            <div>
                <h1>English</h1>
            </div>
            <div>
                <button className="flex items-center gap-1"><FaRegUser />Login</button>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default Navigation;
