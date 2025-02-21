export default function SearchBar() {
    return (
      <div className="w-full flex justify-center mt-20">
        <div className="flex border border-gray-300 rounded-lg overflow-hidden w-[90%] md:w-[50%]">
          <input
            type="text"
            placeholder="Search Doctor or Hospital"
            className="flex-1 px-4 py-2 outline-none"
          />
          <button className="bg-blue-600 text-white px-5 hover:bg-blue-500">
            🔍
          </button>
        </div>
      </div>
    );
  }
  