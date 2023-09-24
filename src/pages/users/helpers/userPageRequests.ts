import axios from "axios";
import { UserResponse } from "./userPage.types";

export const getAllUsers = () => {
  return axios.get<UserResponse[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
};

export const getSingleUser = (id?: string) => {
  if (!id) return Promise.reject("Id for user is missing in query");
  return axios.get<UserResponse>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
};
