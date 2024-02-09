// import { useContext } from "react";
// import { IoMdLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

// import { FaRegUserCircle } from "react-icons/fa";
// import { AuthContext } from "../../provider/AuthProvider";
const Navbar = () => {
  const links = (
    <div>
      <div className="">
        <nav className="flex flex-col md:flex-row lg:flex-row items-center justify-between font-poppins">
          <li className="text-xl mr-10 font-semibold text-[#7F27FF]">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-800" : ""
              }
            >
              Home
            </NavLink>
          </li>
          {/* <li className="text-xl mr-10 font-semibold text-[#7F27FF]">
            <NavLink
              to="todo"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-400" : ""
              }
            >
              Todo
            </NavLink>
          </li> */}
          <li className="text-xl font-semibold text-[#7F27FF]">
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-gray-800" : ""
              }
            >
              Login
            </NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
  //   const { user, logOut } = useContext(AuthContext);
  //   const handleLogOut = () => {
  //     logOut()
  //       .then(() => {})
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  return (
    <div>
      <div>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {links}
              </ul>
            </div>
            {/* <div className="w-[100px]">
       
            </div> */}
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal py-1">{links}</ul>
          </div>
          <div className="navbar-end text-3xl">
            {/* {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <summary tabIndex={0} className="btn btn-ghost rounded-btn">
                    <div className="avatar">
                      <div className="rounded-full w-[40px] h-[40px]">
                        {user?.photoURL ? (
                          <img
                            className=" rounded-full border-2 border-black"
                            src={user?.photoURL}
                          />
                        ) : (
                          <div className="text-3xl">
                            <FaRegUserCircle />
                          </div>
                        )}
                      </div>
                    </div>
                  </summary>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                  >
                    <li>
                      <a className="cursor-none font-bold">
                        {user?.displayName}
                      </a>
                    </li>
                    <Link>
                      <li className="flex justify-between">
                        <button onClick={handleLogOut}>
                          Logout
                          <IoMdLogOut className="text-black ml-20" />
                        </button>
                      </li>
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <></>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
