import { use, useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
 const [formData , setFormData]= useState({
    name : "",
    email : "",
    phone : "",
    password : ""
 });

  const handleRegister = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.password) {
      alert("Fill all fields");
      return;
    }

    const user = { ...formData };

    localStorage.setItem("user", JSON.stringify(user));

    navigate("/");

    setFormData({
      name : "",
      email : "",
      phone : "",
      password : ""
    });
  };
  const handleInputChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value
    });
  }

  return (
    <form
      onSubmit={handleRegister}
      className="bg-white p-6 rounded shadow w-full max-w-sm mx-auto mt-10"
    >
      <h2 className="text-xl mb-4">Register</h2>

     <input
        type="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="name"
        className="w-full mb-3 p-2 border"
       
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        className="w-full mb-3 p-2 border"
        
      />
      <input
        type="phone"
        name="phone"
         value={formData.phone}
        onChange={handleInputChange}
        placeholder="phone"
        className="w-full mb-3 p-2 border"
       
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        className="w-full mb-3 p-2 border"
        
      />

      <button className="w-full bg-green-500 text-white p-2">
        Register
      </button>
    </form>
  );
}

export default Register;