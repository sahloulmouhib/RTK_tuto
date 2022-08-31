import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state

interface todosState {
  entities: todo[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

interface todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Define the initial state using that type
const initialState: todosState = {
  entities: [],
  loading: 'idle',
};

export const fetchTodos = createAsyncThunk(
  'counter/fetchById',
  async (thunkAPI) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    return await response.json();
  }
);

export const todosSlice = createSlice({
  name: 'todos',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.loading = 'pending';
      console.log('loading');
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.entities = action.payload;
      state.loading = 'succeeded';
      console.log('fetching succeeded');
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.loading = 'failed';
      console.log('fetching failed');
    });
  },
});

export default todosSlice.reducer;
