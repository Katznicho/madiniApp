import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  isLoggedIn: boolean;
  isGuest: boolean
  user: User
  authToken: string,
  linkedCard: any,
  station: any[],
  card: any
}

interface User {
  UID: string;
  fullName: string;
  email: string;
  phone: string;
  role: string,
  displayPicture: string;
  cardNumber: string|null;
}

const initialState: UserState = {
  isLoggedIn: false,
  isGuest: true,
  user: {
    UID: '',
    fullName: '',
    email: '',
    displayPicture: '',
    role: "",
    phone: "",
    cardNumber:null

  },
  authToken: '',
  linkedCard: null,
  station: [],
  card:[]
  

};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateUserState: (state, action: PayloadAction<UserState>) => {

      state.isLoggedIn = action.payload?.isLoggedIn;
      state.user = action.payload?.user;
      state.authToken = action.payload?.authToken;
    },

    logoutUser: state => {
      state.isLoggedIn = false;
      state.isGuest = true
      state.user = {
        UID: '',
        fullName: '',
        email: '',
        displayPicture: '',
        role: "",
        phone: "",
        cardNumber:null
      },
        state.authToken = '';
        state.linkedCard = null;
        state.station = [];
        state.card = []
    },


    updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },

    updateProfilePicture: (state, action: PayloadAction<string>) => {

      if (state && state.user) {
        state.user.displayPicture = action.payload;
      }
    },
    showAuthScreen: (state, action: PayloadAction<boolean>) => {
      state.isGuest = false;
      state.isLoggedIn = false
    },
    storedLinkedCard: (state, action: PayloadAction<any>) => {
      state.linkedCard = action.payload
    },
    skipFirstLogin: (state) => {
      state.isGuest = true;
      state.isLoggedIn = false
    },
    storeStations: (state, action: PayloadAction<any>) => {
      state.station = action.payload
    },
    storeCardDetails: (state, action: PayloadAction<any>) => {
      state.card = action.payload
    }

  },
});

// Action creators are generated for each case reducer function
export const {
  updateUserState,
  logoutUser,
  updateProfilePicture,
  updateIsLoggedIn,
  showAuthScreen,
  storedLinkedCard,
  skipFirstLogin,
  storeStations,
  storeCardDetails
} = userSlice.actions;

export default userSlice.reducer;
