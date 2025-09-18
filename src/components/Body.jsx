import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/slices/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const fetchData = async () => {
    try {
      const response = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });

      // console.log(response.data);

      dispatch(addUser(response.data));
    } catch (error) {
      if (error.status === 401) {
        navigate("/login");
      }
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchData();
    }
  }, []);

  return (
    <div>
      {user && <NavBar />}
      <Outlet />
    </div>
  );
};

export default Body;
