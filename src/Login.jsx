import { useState  } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
const [form , setForm] = useState({
    email : "",
    password : ""
});

const handleInputChange = (e) => {
    setForm({
        ...form,
        [e.target.name] : e.target.value
    })
}

  const handleSubmit = (e) => {
  e.preventDefault();

  const storedUser = JSON.parse(localStorage.getItem("user"));

 
  if (!storedUser) {
    alert("No user found. Please register first.");
    return;
  }

  const { email, password } = form;

  if (email !== storedUser.email || password !== storedUser.password) {
    alert("Invalid email or password.");
    return;
  }


  localStorage.setItem("isLoggedIn", "true");

  navigate("/Dashboard");
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        {/* Email */}
        <input
          type="email"
          name = "email"
          placeholder="Enter Email"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.email}
          onChange={handleInputChange}
        />

        {/* Password */}
        <input
          type="password"
          name = "password"
          placeholder="Enter Password"
          className="w-full mb-6 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={form.password}
          onChange={handleInputChange}
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>
          <p className="mt-4 text-xs text-gray-500">
            Don’t have an account?{" "}
            <button onClick={() => navigate('/register')} className="text-orange-500 cursor-pointer hover:underline">
              Sign Up
            </button>
          </p>
      </form>
    </div>
  );
}

export default Login;
