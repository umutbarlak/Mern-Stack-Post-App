import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeCard from "../components/HomeCard";
import { getPostsAction } from "../redux/actions/post";
import useToken from "../hooks/useToken";
import { Navigate } from "react-router-dom";

const Home = ({ token }) => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAction());
  }, [posts]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-5">
      {posts &&
        posts?.posts?.map((item, index) => (
          <HomeCard key={index} post={item} />
        ))}
    </div>
  );
};

export default Home;
