import loairoomApi from "../../../../api/loairoomApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const loairoomData = createAsyncThunk(
  "loairooms/loairoomData",
  async () => {
    const loairoom = await loairoomApi.getAll();
    return loairoom;
  },
);
const Loairoom = createSlice({
  name: "loairooms",
  initialState: {
    loairoom: [],
    loading: true,
    error: "",
  },
  reducers: {
    addloairoom: (state, action) => {
      loairoomApi.postloairoom(action.payload);
    },
    removeloairoom: (state, action) => {
      loairoomApi.deleteLoairoom(action.payload);
    },
    updateloairoom: (state, action) => {
      loairoomApi.editLoairoom(action.payload);
    },
  },
  extraReducers: {
    [loairoomData.pending]: (state) => {
      state.loading = true;
    },
    [loairoomData.rejected]: (state, action) => {
      state.loading = true;
      state.error = action.error;
    },
    [loairoomData.fulfilled]: (state, action) => {
      state.loading = false;
      state.loairoom = action.payload;
    },
  },
});
const { reducer, actions } = Loairoom;
export const { addloairoom, removeloairoom, updateloairoom } = actions;

export default reducer;
