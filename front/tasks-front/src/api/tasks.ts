import axios from 'axios';
import type { NewTask } from '@/types/task';
const API_URL = 'http://localhost:3000/api/tasks';

export const getTasks = () => axios.get(API_URL);

export const getTaskById = (id: string) => axios.get(`${API_URL}/${id}`);

export const createTask = (task: NewTask) => axios.post(API_URL, task);

export const updateTask = (id: string, task: NewTask) => axios.put(`${API_URL}/${id}`, task);

export const deleteTask = (id: string) => axios.delete(`${API_URL}/${id}`);
