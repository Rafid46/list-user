import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiAddressBook, PiOfficeChairLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import AddForm from "./AddForm";
const Cards = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState(" ");
  const navigate = useNavigate();
  const { id } = users;
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
    console.log(users);
  }, [users]);

  const handlerDetails = (id) => {
    navigate(`/details/${id}`);
  };
  console.log(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    setSearch(searchText);
    console.log("searched");
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center mb-10"
      >
        <div className="mr-5 lg:mr-5 w-72">
          <div className="relative">
            <label className="sr-only"> Search </label>
            <input
              name="search"
              type="text"
              id="Search"
              placeholder="Search"
              className="w-full rounded-md  py-2.5 px-2 border-[1px] border-gray-400 shadow-sm sm:text-sm"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="submit"
                className="text-gray-600 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-[60px]">
        {users
          ?.filter((user) => {
            return (
              search.toLowerCase() === " " ||
              (user?.firstName &&
                user?.firstName.toLowerCase().includes(search.toLowerCase()))
            );
          })
          .map((user) => (
            <div
              key={user.id}
              className="border-[1px] w-72 bg-transparent px-4 py-4 rounded-lg"
            >
              {/* <h3 className="mb-3 text-xl font-bold text-indigo-600">
            Beginner Friendly
          </h3> */}
              <div className="relative">
                <img
                  className="border-[1px] w-full rounded-md border-gray-300"
                  src={user?.image}
                  alt="Colors"
                />
                {/* <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
              FREE
            </p> */}
              </div>
              <h1 className="mt-4 text-[#7F27FF] text-md font-semibold cursor-pointer">
                {` ${user?.firstName} ${user?.lastName}`}
              </h1>
              <div className="my-2">
                <div className="mb-3">
                  <div className="flex space-x-1 items-center mb-1">
                    <span>
                      <MdOutlineEmail className="text-blue-400" />
                    </span>
                    <p className="text-sm text-gray-400">{user?.email}</p>
                  </div>
                  <div className="flex space-x-1 items-center mb-1">
                    <span>
                      <PiAddressBook />
                    </span>
                    <p className="text-sm text-gray-400">
                      {user?.address?.address}
                    </p>
                  </div>
                  <div className="flex space-x-1 items-center mb-1">
                    <span>
                      <PiOfficeChairLight />
                    </span>
                    <p className="text-sm text-gray-500">
                      {user?.company?.name}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handlerDetails(user?.id)}
                  className="w-full text-sm bg-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
                >
                  See details
                </button>
              </div>
            </div>
          ))}
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="btn hover:text-gray-900 drawer-button rounded-full bg-gray-900 border-none z-50 rounded-tr-none rounded-br-none"
          style={{
            position: "fixed",
            right: "0px",
            bottom: "30px",
          }}
        >
          <span className="text-3xl text-white">
            <IoIosAddCircleOutline />
          </span>
          <p className=" text-white">create</p>
        </button>
        <AddForm></AddForm>
      </div>
    </div>
  );
};

export default Cards;
