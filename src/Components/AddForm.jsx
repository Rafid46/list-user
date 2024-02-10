import { useForm } from "react-hook-form";
import { RxCross1 } from "react-icons/rx";
const AddForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const taskData = {
      email: user?.email,
      name: data.name,
      description: data.description,
      priority: data.priority,
      deadline: data.deadline,
      status: "Todo",
    };
    fetch("https://dummyjson.com/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
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
                <label className="block text-sm font-medium text-white">
                  Tasks title
                </label>
                <input
                  {...register("name")}
                  type="text"
                  className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-transparent text-sm text-gray-100 shadow-sm"
                />
                <label className="block text-sm font-medium text-white mt-5">
                  Description
                </label>
                <input
                  {...register("description")}
                  type="text"
                  className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-transparent text-sm text-gray-100 shadow-sm"
                />
              </div>
              <label className="block text-sm font-medium text-white mt-2 mb-2">
                Priority
              </label>
              <input
                {...register("description")}
                type="text"
                className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-transparent text-sm text-gray-100 shadow-sm"
              />
              <label className="block text-sm font-medium text-white mt-5 mb-2">
                Deadline
              </label>
              <input
                {...register("description")}
                type="text"
                className="mt-1 w-60 p-4 py-2 border-2 rounded-md border-gray-200 bg-transparent text-sm text-gray-100 shadow-sm"
              />
              <br />
              <button
                type="submit"
                className="bg-purple-500 text-sm text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
              >
                Create task
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddForm;
