import React, { useEffect , useState } from 'react'

const UpdateTask = ({task , onUpdateTask , onCancel}) => {

    const [data , setData] = useState({title : "" , description : ""});

    useEffect (() => {
        if(task){
        setData({title : task?.title || "" , description : task?.description || ""});
        }
    },[task]);

    const handleSubmit = () => {
        console.log("button clicked");
        if(data.title === "" || data.description === "") return;

        onUpdateTask ({
            ...task,
            ...data
        });
    };
  return (
      <div className="bg-white shadow-lg rounded-xl p-6 mt-6 max-w-md mx-auto">
    <h2 className="text-xl font-bold mb-4">Edit Task</h2>

    <input
      type="text"
      value={data.title || ""}
      onChange={(e) =>
        setData({ ...data, title: e.target.value })
      }
      placeholder="Title"
      className="w-full border p-2 mb-3 rounded"
    />

    <input
      type="text"
      value={data.description || ""}
      onChange={(e) =>
        setData({ ...data, description: e.target.value })
      }
      placeholder="Description"
      className="w-full border p-2 mb-4 rounded"
    />

    <div className="flex gap-3">
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Update
      </button>

      <button
        onClick={onCancel}
        className="bg-gray-400 text-white px-4 py-2 rounded"
      >
        Cancel
      </button>
    </div>
  </div>
  )
}

export default UpdateTask
