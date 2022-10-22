import axios from "axios";

type Data = {
  email: string;
  userPassword: string;
};
export const loginCall = async (
  data: Data,
  navigate: (screen: string) => void
) => {
  try {
    const res = await axios.post(
      "http://192.168.8.179:6000/api/auth/login",
      data
    );
    console.log("XD");
    console.log(res.data.success);
    return true;
  } catch (err: any) {
    if (err?.response.data?.accountStatus === false) {
      try {
        await axios.post("http://192.168.8.179:6000/api/auth/activate/resend", {
          email: data.email,
        });
        navigate("tokenInput");
      } catch (err) {
        return false;
      }
    }
    return false;
  }
};
