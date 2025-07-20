// In Redux Toolkit, the store acts as a central container that holds the entire state of your application

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../feature/task/taskSlice"; // Import the task reducer from the task slice


export const store = configureStore({
    reducer : {
        task : taskReducer, // Register the task reducer under the 'task' key
    }
}); // Create a Redux store using configureStore from Redux Toolkit