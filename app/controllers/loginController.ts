import axios, { AxiosError } from "axios";

type LoginData = {
  email: string;
  userPassword: string;
};
export const loginCall = async (
  data: LoginData,
  navigate: (screen: string) => void
) => {
  try {
    const res = await axios.post(
      "http://192.168.8.179:6000/api/auth/login",
      data
    );

    console.log(res.data.success);
    return res.data;
  } catch (err: any) {
    console.log(err.response);
    const error = err?.response.data;
    if (error.accountStatus === false) {
      try {
        await axios.post("http://192.168.8.179:6000/api/auth/activate/resend", {
          email: data.email,
        });
        navigate("tokenInput");
      } catch (err: any) {
        return err?.response.data;
      }
    }
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
