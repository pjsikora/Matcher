import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { requestError, requestStart, requestSuccess } from "../redux/userSlice";

type LoginData = {
  email: string;
  userPassword: string;
};
export const loginCall = async (
  data: LoginData,
  navigate: (screen: string) => void,
  dispatch: Dispatch
) => {
  dispatch(requestStart());
  try {
    const res = await axios.post(
      "http://192.168.0.9:6000/api/auth/login",
      data
    );
    dispatch(requestSuccess());
    return res.data;
  } catch (err: any) {
    dispatch(requestError());
    let error;
    if (err.hasOwnProperty("response")) {
      error = err?.response.data;

      if (error.accountStatus === false) {
        try {
          await axios.post("http://192.168.0.9:6000/api/auth/activate/resend", {
            email: data.email,
          });
          navigate("tokenInput");
        } catch (err: any) {
          if (err.hasOwnProperty("response")) return err.response.data;
          else
            return {
              success: false,
              message: "Check network connection",
            };
        }
      }
    } else
      error = {
        success: false,
        message: "Check network connection",
      };

    return error;
  }
};

type ActivationData = {
  email: string;
  code: string;
};
export const activationCall = async (data: ActivationData) => {
  try {
    const res = await axios.post(
      "http://192.168.8.179:6000/api/auth/activate",
      data
    );

    return res.data;
  } catch (err: any) {
    return err.response.data;
  }
};
