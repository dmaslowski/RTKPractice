import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  createContext,
  useReducer,
  Dispatch,
  useContext,
  useEffect,
} from 'react';
import React from 'react';

const AuthorizationContext = createContext<null | User>(null);
const AuthorizationDispatchContext = createContext<null | Dispatch<AuthAction>>(
  null,
);

type User = {
  email: string;
  firstName: string;
  lastName: string;
};

type AuthAction = {
  type: AuthActions;
  payload: User;
};

export enum AuthActions {
  LOGIN = 'LOGIN',
  UPDATE = 'UPDATE',
}

const authReducer = (user: User, action: AuthAction) => {
  switch (action.type) {
    case AuthActions.LOGIN:
      return {
        ...action.payload,
      };
    case AuthActions.UPDATE:
      return {
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    default:
      return {
        ...user,
      };
  }
};

export type AuthProviderProps = {
  children: JSX.Element;
};

const AuthorizationProvider = ({children}: AuthProviderProps) => {
  const [user, userDispatch] = useReducer(authReducer, {
    email: '',
    firstName: '',
    lastName: '',
  });

  useEffect(() => {
    const getUserFromStore = async () => {
      let userInfo = {
        email: '',
        firstName: '',
        lastName: '',
      };
      try {
        const userStoreJson = await AsyncStorage.getItem('userInfo');
        if (userStoreJson !== null) {
          userInfo = JSON.parse(userStoreJson);
        }
        userDispatch({type: AuthActions.LOGIN, payload: userInfo});
      } catch (e) {}
    };
    getUserFromStore();
  }, []);

  useEffect(() => {
    const setUserInStore = async () => {
      try {
        const jsonValue = JSON.stringify(user);
        await AsyncStorage.setItem('userInfo', jsonValue);
      } catch (e) {}
    };
    setUserInStore();
  }, [user]);

  return (
    <AuthorizationContext.Provider value={user}>
      <AuthorizationDispatchContext.Provider value={userDispatch}>
        {children}
      </AuthorizationDispatchContext.Provider>
    </AuthorizationContext.Provider>
  );
};

export const useAuthorizationProvider = () => {
  return useContext(AuthorizationContext);
};

export const useAuthorizationDispatchProvider = () => {
  return useContext(AuthorizationDispatchContext);
};

export default AuthorizationProvider;
