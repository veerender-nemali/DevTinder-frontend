import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [userEmailId, setUserEmailId] = useState("luffy@gmail.com");
  const [userPassword, setUserPassword] = useState("Luffy@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inValidCredentials, setInValidCredentials] = useState("");

  const submitHandler = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        {
          emailId: userEmailId,
          password: userPassword,
        },
        { withCredentials: true }
      );

      // setInValidCredentials("");
      dispatch(addUser(response?.data?.data));
      navigate("/");
    } catch (error) {
      setInValidCredentials(error?.response?.data || "Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="card card-border bg-base-300 w-96 m-7">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
          <div>
            <label className="input validator my-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@gmail.com"
                value={userEmailId}
                onChange={(e) => setUserEmailId(e.target.value)}
                required
              />
            </label>
            {/* <div className="validator-hint hidden">
              Enter valid email address
            </div> */}
            <label className="input validator my-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </label>
            {/* <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p> */}
            <p className="text-red-500"> {inValidCredentials}</p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={submitHandler}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
