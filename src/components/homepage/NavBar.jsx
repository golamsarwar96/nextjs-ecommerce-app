import Link from "next/link";

const NavBar = () => {
  const links = (
    <>
      <Link
        className={({ isActive }) =>
          isActive ? "text-violet-700 underline" : "text-black"
        }
        href="/"
      >
        <li className="m-2 font-semibold">Home</li>
      </Link>
      <Link
        className={({ isActive }) =>
          isActive ? "text-violet-700 underline" : "text-black"
        }
        href="/apps"
      >
        <li className="m-2 font-semibold">Apps</li>
      </Link>
      <Link
        className={({ isActive }) =>
          isActive ? "text-violet-700 underline" : "text-black"
        }
        href="installation"
      >
        <li className="m-2 font-semibold">Installation</li>
      </Link>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href="/">
          <div className="flex justify-center items-center gap-2">
            <img className="w-10 h-10" src={logoImg} alt="" />
            <h1 className="bg-gradient-to-r from-[#381a7e] to-[#6c3bb1] bg-clip-text text-transparent font-primary font-bold text-xl ">
              Soft.IO
            </h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link target="_blank" href="https://github.com/golamsarwar96">
          <button className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            Contribute
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
