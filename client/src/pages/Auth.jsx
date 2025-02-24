import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { loginAction, registerAction } from "../redux/actions/auth";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValid = (names, formData) => {
    return names.every((name) => formData[name] && formData[name].length > 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("tıklandı");
    if (isRegister) {
      if (isValid(["username", "email", "password"], formData)) {
        dispatch(registerAction(formData));
      } else {
        toast.error("Lütfen bütün değerleri doldurunuz");
      }
    } else {
      if (isValid(["email", "password"], formData)) {
        dispatch(loginAction(formData));
      } else {
        toast.error("Lütfen bütün değerleri doldurunuz");
      }
    }
  };

  return (
    <div
      className={`h-screen flex justify-center items-center bg-gray-100 p-10`}
    >
      <div className="bg-white p-6 shadow-md rounded-md w-full max-w-[700px] min-w-[350px]">
        <h2 className={"text-blue-500 text-xl mb-4 text-center"}>
          {isRegister ? "Register" : "Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input
              value={formData.username}
              type="text"
              name="username"
              placeholder="Username"
              className={"input-style w-full mb-2"}
              onChange={handleChange}
              autoComplete="username"
            />
          )}
          <input
            value={formData.email}
            type="email"
            name="email"
            placeholder="Email"
            className={"input-style w-full mb-2"}
            onChange={handleChange}
            autoComplete="email"
          />
          <div className="relative w-full">
            <input
              value={formData.password}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className={"input-style w-full mb-2"}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <button
              type="button"
              className="absolute right-2 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <button type="submit" className={"btn-login w-full mb-2"}>
            {isRegister ? "Register" : "Login"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-5">
          {isRegister ? "Already have an account? " : "Don't have an account? "}
          <button
            className="text-blue-500 underline"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
}
