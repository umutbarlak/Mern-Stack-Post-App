import React from "react";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction, updataPostAction } from "../redux/actions/post";

const Modal = () => {
  const { modal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const [postData, setpostData] = useState({
    user: modal?.post?.user || "",
    title: modal?.post?.title || "",
    description: modal?.post?.description || "",
  });

  const onChange = (e) => {
    setpostData({ ...postData, [e.target.name]: e.target.value });
  };

  const postCreate = (e) => {
    e.preventDefault();

    if (modal.post) {
      console.log(postData);
      dispatch(updataPostAction(modal.post._id, postData));
    } else {
      dispatch(createPostAction(postData));
    }
    dispatch({ type: "MODAL", payload: false });
  };

  return (
    <div className="w-full h-screen bg-opacity-50 bg-black fixed inset-0  flex items-center justify-center px-10 z-50">
      <div className="bg-white max-w-[600px] w-full px-4 rounded-md alert opacity-100 relative py-10">
        <div
          onClick={() => dispatch({ type: "MODAL", payload: false })}
          className="absolute top-2 right-2 cursor-pointer"
        >
          <IoCloseCircleOutline size={25} />
        </div>
        <h1 className="text-center text-2xl mb-5 text-indigo-800 uppercase">
          Post Paylaş
        </h1>
        <form onSubmit={postCreate} className="flex flex-col gap-5">
          <div>
            <label>User</label>
            <input
              required
              value={postData.user}
              name="user"
              onChange={onChange}
              className="input-style"
              type="text"
              placeholder="User"
            />
          </div>
          <div>
            <label>Title</label>
            <input
              required
              value={postData.title}
              name="title"
              onChange={onChange}
              className="input-style"
              type="text"
              placeholder="Title"
            />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <textarea
              required
              value={postData.description}
              name="description"
              onChange={onChange}
              className="input-style max-h-40 min-h-16"
              type="text"
              placeholder="Description"
            />
          </div>
          <button className="btn-login">Paylaş</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
