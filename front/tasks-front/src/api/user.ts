import axios from "axios";

import type { User } from "@/types/user";

const API_URL = 'http://localhost:3000/api';

export const createUser = (user: User) => axios.post(`${API_URL}/register`, user);

export const loginUser = (user: User) => axios.post(`${API_URL}/login`, user);

export const getUser = () => axios.get(`${API_URL}/me`);