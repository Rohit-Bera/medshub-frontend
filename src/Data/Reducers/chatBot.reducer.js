import { createSlice } from "@reduxjs/toolkit";

const chatBotSlice = createSlice({
  name: "chatbot slice",
  initialState: {
    conversation: [],
  },
  reducers: {
    chatBotData: (state, action) => {
      console.log("action payload: ", action.payload);

      state.conversation.push(action.payload);
    },
  },
});

export const { chatBotData } = chatBotSlice.actions;
export default chatBotSlice.reducer;
