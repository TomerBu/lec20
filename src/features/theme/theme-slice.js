import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "Theme",
    initialState: { isDark: false },
    reducers: {
        toggleDark: (state) => {
            state.isDark = !state.isDark
        }
    }
})

export default themeSlice.reducer
export const { toggleDark } = themeSlice.actions;