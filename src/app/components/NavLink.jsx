import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] text-[10px] sm:text-xs md:text-sm rounded md:p-0 hover:text-white"


    >
      {title}
    </Link>
  );
};

export default NavLink;
