import roomApi from "../../../../api/roomApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const roomData = createAsyncThunk("rooms/roomData", async () => {
  const room = await roomApi.getAll();
  return room;
});
var dataroom = [];
const Room = createSlice({
  name: "rooms",
  initialState: {
    room: [],
    Loading: true,
    error: "",
  },
  reducers: {
    addroom: (state, action) => {
      roomApi.postroom(action.payload);
    },
    removeroom: (state, action) => {
      roomApi.deleteroom(action.payload);
    },
    updateroom: (state, action) => {
      roomApi.editroom(action.payload);
    },
  },
  extraReducers: {
    [roomData.pending]: (state) => {
      state.Loading = true;
    },
    [roomData.rejected]: (state, action) => {
      state.Loading = true;
      state.error = action.error;
    },
    [roomData.fulfilled]: (state, action) => {
      state.Loading = false;
      state.room = action.payload;
    },
  },
});
const { reducer, actions } = Room;
export const { addroom, removeroom, updateroom } = actions;

export default reducer;
