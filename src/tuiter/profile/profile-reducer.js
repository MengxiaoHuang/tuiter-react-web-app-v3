import { createSlice } from "@reduxjs/toolkit";
import profiles from './profiles.json';


const profileSlice = createSlice({
    name: 'profiles',
    initialState: profiles,

    reducers: {
        profileUpdate(state, action) {
            return state=action.payload
        }

    }
});

export const {profileUpdate} = profileSlice.actions;
export default profileSlice.reducer;