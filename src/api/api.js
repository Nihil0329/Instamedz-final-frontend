import axios from "axios";
const API = axios.create({
  baseURL: "https://instamedzbackend.onrender.com",
  //     baseURL:'http://localhost:8000'
});

export const imgendpoint = "https://ik.imagekit.io/instamedz/";

// auth api

export const logIn = async (authData) => {
  try {
    const result = await API.post("/auth/login", authData);
    return result;
  } catch (error) {
    return error.response;
  }
};
export const signUp = async (authData) => {
  try {
    const result = await API.post("/auth/signup", authData);
    console.log(result);
    return result;
  } catch (error) {
    return error.response;
  }
};
export const appointform = async (authData) => {
  try {
    const result = await API.post("/auth/formsubmit", authData);
    console.log(result);
    return result;
  } catch (error) {
    return { msg: "error in login" };
  }
};
export const mydata = async (uid) => {
  try {
    const result = await API.get(`/auth/myappoint/${uid}`);
    return result;
  } catch (error) {
    return { msg: "error in login" };
  }
};
export const changepass = async (authData) => {
  try {
    const result = await API.post("/auth/changepassword", authData);
    return result;
  } catch (error) {
    return error.response;
  }
};
export const checksignup = async (authData) => {
  try {
    const result = await API.post("/auth/checksignup", authData);
    return result;
  } catch (error) {
    return error.response;
  }
};
// content api

export const AddContent = async (addData) => {
  try {
    const result = await API.post("/content/add", addData);
    return result;
  } catch (error) {
    return { msg: "error in adding content" };
  }
};

export const viewContent = async (care) => {
  try {
    const careData = await API.post("/content/viewall", { care });
    return careData;
  } catch (error) {
    console.log("error in view content");
  }
};

// doctor api

export const viewDoctor = async (care) => {
  try {
    const docData = await API.get(`/doctor/view/${care}`);
    return docData;
  } catch (error) {
    console.log("error in view Doctor");
  }
};
