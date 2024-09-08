import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-10">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold mb-6">All Blogs</h1>
        <Link
          href="/add"
          className="border bg-teal-700 text-white px-4 py-2 rounded"
        >
          Add Blog
        </Link>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="border rounded p-4">
          <h5 className="text-lg">This is title</h5>
          <p className="text-sm">This is description</p>
        </div>
      </div>
    </div>
  );
}
