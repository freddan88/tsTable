import axios from "axios";
import { UserResponse } from "./UserPage.types";

export const getAllUsers = () => {
  return axios.get<UserResponse[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
};

export const getSingleUser = (id?: string) => {
  if (!id) return Promise.reject("id for user is missing in query");
  return axios.get<UserResponse>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
};