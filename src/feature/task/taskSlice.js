import {createSlice, nanoid } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: {
    items: [],
    filters: "all",
  },
  reducers: {
    // it is a collection of all the reducer for diffretn logics
    addtask: {
        
      reducer: (state, action) => {
        console.log("state===>",state);
        console.log("action===>",action);
        // this is single reducer function for diffrent logic which take action and payload  -- where state is our current state and playout has two things where is data
        state.items.push(action.payload);
      },
      prepare: (text) => {
        // by using prepared we can customise the action payload
        // this is a function which will return the payload and id
        return {
          payload: {
            id: nanoid(), // inbuild for id
            text: text,
            completed: false,
          },
        };
      },
    },
    // here we dont need to customise the our payload thats why we are writting directly
    toggleTask: (state, action) => {
      const task = state.items.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed; // toggle the completed status
    },
    removeTask: (state, action) => {
      state.items = state.items.filter((t) => t.id !== action.payload); // filter out the task with the given id
    },
    setFilter: (state, action) => {
      state.filters = action.payload; // set the filter to the given value
    },
  },
});

export const { addtask, toggleTask, removeTask, setFilter } = taskSlice.actions; // export the actions
export default taskSlice.reducer; // export the reducer
