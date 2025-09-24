import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UIState = {
  theme: 'light' | 'dark';
  notificationsOpen: boolean;
  sideRailOpen: boolean;
};

const initialState: UIState = {
  theme: 'light',
  notificationsOpen: false,
  sideRailOpen: true,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setNotificationsOpen(state, action: PayloadAction<boolean>) {
      state.notificationsOpen = action.payload;
    },
    setSideRailOpen(state, action: PayloadAction<boolean>) {
      state.sideRailOpen = action.payload;
    },
  },
});

export const { toggleTheme, setNotificationsOpen, setSideRailOpen } = uiSlice.actions;
export default uiSlice.reducer;