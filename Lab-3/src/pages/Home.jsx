import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow text-center w-auto">
        <h1 className="text-2xl mb-6">Welcome to lab3 assignment, this is the home page</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer mt-4"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
