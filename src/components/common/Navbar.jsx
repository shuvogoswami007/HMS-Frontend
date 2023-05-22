import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-center gap-10 bg-[rgba(255,255,255,0.4)] shadow-[0px_4px_6px_rgba(0,0,0,0.05)] p-6 sm:px-12 md:px-18 lg:px-24 xl:px-30">
      <NavLink to="#" className="font-poppins not-italic font-medium text-xl text-black">
        Home
      </NavLink>
      <NavLink to="#" className="font-poppins not-italic font-medium text-xl text-black">
        About
      </NavLink>
      <NavLink to="#" className="font-poppins not-italic font-medium text-xl text-black">
        Food Menu
      </NavLink>
      <NavLink to="#" className="font-poppins not-italic font-medium text-xl text-black">
        Security
      </NavLink>
      <NavLink to="#" className="font-poppins not-italic font-medium text-xl text-black">
        Available Seat
      </NavLink>
      <NavLink to="#" className="font-poppins not-italic font-medium text-xl text-black">
        List of Student
      </NavLink>
    </div>
  );
};

export default Navbar;
