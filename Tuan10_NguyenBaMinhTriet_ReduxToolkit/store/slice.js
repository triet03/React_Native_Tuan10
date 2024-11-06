import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: '1', name: 'To check mail', icon: 'https://example.com/icon1.png' },
    { id: '2', name: 'UI task web page', icon: 'https://example.com/icon2.png' },
    { id: '3', name: 'Learn Javascript basic', icon: 'https://example.com/icon3.png' },
    { id: '4', name: 'Learn HTML Advance', icon: 'https://example.com/icon4.png' },
    { id: '5', name: 'Medical App UI', icon: 'https://example.com/icon5.png' },
    { id: '6', name: 'Learn Java', icon: 'https://example.com/icon6.png' },
  ]
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const index = state.tasks.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    }
  }
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
