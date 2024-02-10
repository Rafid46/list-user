import { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiAddressBook, PiOfficeChairLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import AddForm from "./AddForm";
const Cards = () => {
  const [users, setUsers] = useState([]);
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-[60px]">
      {users?.map((user) => (
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
                <p className="text-sm text-gray-500">{user?.company?.name}</p>
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
        className="btn hover:text-gray-900 drawer-button rounded-full bg-purple-500 border-none z-50 rounded-tr-none rounded-br-none"
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
  );
};

export default Cards;
