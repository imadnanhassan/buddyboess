import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Role = 'admin' | 'moderator' | 'member' | 'guest';

export type SessionState = {
  user?: { id: string; name: string; avatar?: string; role: Role };
  status: 'authenticated' | 'unauthenticated' | 'loading';
};

const initialState: SessionState = {
  status: 'unauthenticated',
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setLoading(state) {
      state.status = 'loading';
    },
    signIn(state, action: PayloadAction<SessionState['user']>) {
      state.user = action.payload;
      state.status = 'authenticated';
    },
    signOut(state) {
      state.user = undefined;
      state.status = 'unauthenticated';
    },
    setRole(state, action: PayloadAction<Role>) {
      if (state.user) state.user.role = action.payload;
    },
  },
});

export const { setLoading, signIn, signOut, setRole } = sessionSlice.actions;
export default sessionSlice.reducer;