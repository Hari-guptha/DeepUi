import { createSlice } from '@reduxjs/toolkit';
export const ColorSlice = createSlice({
  name: "color",
  initialState: {
    value: {
      status: {
        emotion: "Neutral",
      },
      Neutral: {
        background1: "rgb(0,0,0)",
        background2:
          "linear-gradient(315deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 88%, rgba(70,70,70,1) 100%)",
      },
      Angry: {
        background1: "rgb(190,27,27)",
        background2:
          "linear-gradient(315deg, rgba(190,27,27,1) 0%, rgba(141,60,60,1) 88%, rgba(70,70,70,1) 100%)",
      },
      Disgust: {
        background1: "rgb(47,255,0)",
        background2:
          "linear-gradient(315deg, rgba(47,255,0,1) 0%, rgba(61,122,53,1) 88%, rgba(70,70,70,1) 100%)",
      },
      Fear: {
        background1: "rgb(53,54,53)",
        background2:
          "linear-gradient(315deg, rgba(53,54,53,1) 0%, rgba(87,94,86,1) 88%, rgba(70,70,70,1) 100%)",
      },
      Happy: {
        background1: "rgb(255,249,0)",
        background2:
          "linear-gradient(315deg, rgba(255,249,0,1) 0%, rgba(160,172,64,1) 88%, rgba(70,70,70,1) 100%)",
      },
      Sad: {
        background1: "rgb(0,223,255)",
        background2:
          "linear-gradient(315deg, rgba(0,223,255,1) 0%, rgba(48,162,164,1) 88%, rgba(70,70,70,1) 100%)",
      },
      Surprise: {
        background1: "rgb(113,11,207)",
        background2:
          "linear-gradient(315deg, rgba(113,11,207,1) 0%, rgba(80,49,119,1) 88%, rgba(70,70,70,1) 100%)",
      },
    },
  },
  reducers: {
    status: (state, action) => {
      state.value.status.emotion = action.payload.emotion;
    },
  },
});

export const { status } = ColorSlice.actions;

export default ColorSlice.reducer;
