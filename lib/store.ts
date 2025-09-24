import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import sessionReducer from './slices/sessionSlice';
import uiReducer from './slices/uiSlice';
import feedReducer from './slices/feedSlice';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    ui: uiReducer,
    feed: feedReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;