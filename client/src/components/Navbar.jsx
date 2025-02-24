import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const logout = () => {
    console.log("tıklamdı");
    localStorage.clear("auth");
    window.location = "/auth";
  };

  const openModal = () => {
    dispatch({ type: "MODAL", payload: true });
  };

  return (
    <div className="h-20 bg-indigo-600 flex items-center  justify-between px-5">
      <div className="text-white font-bold text-2xl cursor-pointer">
        POST PAYLAŞ
      </div>
      <div className="flex items-center  space-x-5">
        <div>
          <button
            onClick={openModal}
            className="text-nowrap border border-white p-2 rounded-md text-white hover:bg-indigo-800 px-4"
          >
            Post Oluştur
          </button>
        </div>
        <IoIosLogOut
          onClick={logout}
          size={25}
          className="text-white cursor-pointer hover:scale-[1.1]"
        />
      </div>
    </div>
  );
};

export default Navbar;
