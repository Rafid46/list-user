import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
const AddForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const taskData = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      companyName: data.companyName,
      avatar: data.avatar,
    };
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((res) => {
        alert("user added");
        console.log(res);
      });
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box shadow-lg backdrop-blur-sm bg-opacity-20 bg-white w-fit px-10 rounded-md">
          <div className="modal-action w-fit p-0 mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="">
              <div className="mb-5">
                <form method="dialog">
                  <button className="text-xl btn bg-transparent hover:text-red-400 text-white border-none absolute hover:bg-transparent right-[5px] top-0">
                    <RxCross1 />
                  </button>
                </form>
                <label className="block text-sm mb0 font-medium text-white">
                  First name
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  className="mt-1 mb-5 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-transparent text-sm text-gray-100 shadow-sm"
                />
                <label className="block text-sm font-medium text-white">
                  Last name
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-transparent text-sm text-gray-100 shadow-sm"
                />
                <label className="block text-sm font-medium text-white mt-5">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="text"
                  className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-transparent text-sm text-gray-100 shadow-sm"
                />
              </div>
              <label className="block text-sm font-medium text-white mt-2 mb-2">
                Address
              </label>
              <input
                {...register("address")}
                type="text"
                className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-transparent text-sm text-gray-100 shadow-sm"
              />
              <label className="block text-sm font-medium text-white mt-5 mb-2">
                Company name
              </label>
              <input
                {...register("companyName")}
                type="text"
                className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-transparent text-sm text-gray-100 shadow-sm"
              />
              <label className="block text-sm font-medium text-white mt-5 mb-2">
                Avatar
              </label>
              <input
                {...register("avatar")}
                type="text"
                className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-transparent text-sm text-gray-100 shadow-sm"
              />
              <br />
              <button
                type="submit"
                className="mt-5 bg-gray-900 text-sm text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
              >
                Add user
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddForm;
