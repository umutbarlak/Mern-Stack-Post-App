import React from "react";
import { MdDelete } from "react-icons/md";

import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deletePostAction } from "../redux/actions/post";

const HomeCard = ({ post }) => {
  const dispatch = useDispatch();

  const deletePost = () => {
    console.log("tıklandı");
    dispatch(deletePostAction(post._id));
  };

  const updatePost = () => {
    dispatch({ type: "MODAL", payload: { open: true, post: post } });
  };
  return (
    <div className="border px-3 py-5 rounded-md bg-gray-50 relative flex flex-col">
      <h2 className="font-bold text-xl line-clamp-1 max-w-[70%]">
        {post?.title}
      </h2>
      <p className="text-gray-700 text-sm line-clamp-3 flex-1 my-3">
        {post?.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">{post?.user}</span>
        <span className="text-xs text-gray-500">
          {post?.date?.slice(0, 10)}
        </span>
      </div>
      <div className="absolute top-3 right-3 flex items-center gap-2">
        <button
          onClick={deletePost}
          className="bg-red-500 rounded-full p-2 w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <MdDelete size={18} color="white" />
        </button>
        <button
          onClick={updatePost}
          className="bg-blue-600 rounded-full p-2 w-8 h-8 flex items-center justify-center cursor-pointer"
        >
          <FaRegEdit size={16} color="white" />
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
