"use client";

export default function AddNewPage() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputData = {
      title: formData.get("title"),
      description: formData.get("description"),
    };

    const data = await fetch("/api/add", {
      method: "POST",
      body: JSON.stringify(inputData),
    });
    const res = await data.json();
    console.log(res);
  };
  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-6">Add New Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label for="title" className="block text-gray-700 font-medium mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the title"
          />
        </div>

        <div className="mb-6">
          <label
            for="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the description"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
