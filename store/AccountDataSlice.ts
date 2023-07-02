import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {RootState} from './ReduxStore';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  email: string;
  firstName: string;
  lastName: string;
}

export interface AccountDataState {
  user?: User;
  status: 'hydrating' | 'hydrated' | 'idle' | 'loading' | 'failed';
}

const initialAccountDataState: AccountDataState = {
  user: undefined,
  status: 'idle',
};

export const hydrateUserData = createAsyncThunk(
  'AccountData/hydrate',
  async () => {
    let userInfo: User | undefined;
    const userStoreJson = await AsyncStorage.getItem('userInfo');
    console.log('user', userStoreJson);
    if (userStoreJson !== null) {
      userInfo = JSON.parse(userStoreJson);
    }
    return userInfo;
  },
);

export const saveUserDataToStorage = createAsyncThunk(
  'accountData/saveUserData',
  async (user: User | undefined) => {
    if (user === undefined) {
      await AsyncStorage.removeItem('userInfo');
      return user;
    }
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('userInfo', jsonValue);
    console.log(jsonValue);
    return user;
  },
);

export const accountDataSlice = createSlice({
  name: 'accountData',
  initialState: initialAccountDataState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(hydrateUserData.pending, (state, _) => {
        state.status = 'loading';
      })
      .addCase(hydrateUserData.fulfilled, (state, action) => {
        state.status = 'hydrated';
        state.user = action.payload;
      })
      .addCase(hydrateUserData.rejected, (state, _) => {
        state.status = 'failed';
      })
      .addCase(saveUserDataToStorage.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export const selectUser = (state: RootState) => state.accountData?.user;

export default accountDataSlice.reducer;
