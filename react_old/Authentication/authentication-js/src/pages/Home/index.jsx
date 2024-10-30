const Home = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-sm w-full h-96 space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 my-16 mt-10">
          Home Page
        </h2>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 my-10"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
