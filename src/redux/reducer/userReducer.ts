import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../types/types';
import { UserReducerInitialState } from '../../types/reducer-types';

const initialState: UserReducerInitialState = {
  loading: false,
   user: null,
};

 export const userReducer = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    userExist: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload; 
    },
    userNotExist: (state) => {
        state.loading = false;
        state.user = null; 
      },
  },
});

export const { userExist, userNotExist } = userReducer.actions;
