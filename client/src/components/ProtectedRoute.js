import React, { useEffect, useCallback } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  console.log("Reached here in protected route");

  const getUser = useCallback(async () => {
    try {
      // dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/getUserData",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer  ${localStorage.getItem("token")}`,
          },
        }
      );
      // dispatch(hideLoading());
      if (res.data.success) {
        dispatch(setUser(res.data.data));
      } else {
        console.log("navigating to /login route on not successful login from protected route");
        <Navigate to="/login" />;
      }
    } catch (error) {
      // dispatch(hideLoading());
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  if (localStorage.getItem("token")) {
    return children;
  } else {
    console.log("navigating to /login route on not successful login from protected route, when token is not there!");
    return <Navigate to="/login" />;
  }
}
