import axios from "axios";

export const registerCall = async (data: any) => {
  try {
    console.log(data);
    const res = await axios.post(
      "http://192.168.8.179:6000/api/auth/register",
      data
    );
    console.log("haloi");
    console.log(res);
    return true;
  } catch (err: any) {
    console.log(err?.response);
    return false;
  }
};
