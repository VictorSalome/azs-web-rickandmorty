import { FaMagnifyingGlass } from "react-icons/fa6";

export const ListSeach = () => {
  return (
    <div className="text-black relative">
      <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-white md:text-2xl lg:text-3xl">
            Episódios
          </h1>
          <div className="ml-auto flex items-center">
            <input
              type="text"
              className="py-1 mr-2  rounded-md border border-gray-300"
            />
            <FaMagnifyingGlass className="text-white text-2xl " />
          </div>
        </div>
        <div className="flex flex-wrap justify-start mt-4">
          {/* Seus cartões ou componentes aqui */}
        </div>
      </div>
    </div>
  );
};
