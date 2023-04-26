import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  tabMode: false,
  isLoading: false,
  impayer: false,
  adminpay: false,
  message: "",
  messageInscrip: "",
  isErrorInscrip: false,
  sessionID: null,
  room: "",
  resultLiveSingleQuestion: [],
  roomState: {},
  allOrganisme: [],
};

// Register user
export const register = createAsyncThunk("register", async (user, thunkAPI) => {
  try {
    return await authService.register(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Logout: (state) => {
      state.user = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.messageInscrip = "";
      state.isErrorInscrip = false;
      localStorage.clear();
    },
    resetData: (state) => {
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.messageInscrip = "";
      state.isErrorInscrip = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isErrorInscrip = true;
        state.messageInscrip = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
  },
});

export const {
  Logout,
  resetData,
  setUser,
} = authSlice.actions;

export default authSlice.reducer;
