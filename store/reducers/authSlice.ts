import { createSlice } from "@reduxjs/toolkit"

// Define a type for the slice state
interface AuthState {
  userId?: string
  isLoggedIn: boolean
}

// Define the initial state using that type
const initialState: AuthState = {
  isLoggedIn: false,
}

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuth: (state, actions) => {
      return { ...state, ...actions.payload }
    },
    removeAuth: () => {
      return { isLoggedIn: false }
    },
  },
})

export const { updateAuth, removeAuth } = authSlice.actions
export default authSlice.reducer
