// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {
//   createContext,
//   useReducer,
//   Dispatch,
//   useContext,
//   useEffect,
//   Reducer,
// } from 'react';
// import React from 'react';

// const AccountDataContext = createContext<null | AccountData>(null);
// const AccountDispatchContext =
//   createContext<null | Dispatch<AccountDataAction>>(null);

// interface User {
//   email: string;
//   firstName: string;
//   lastName: string;
// }

// type AccountData = {
//   user?: User;
//   isHydrating: boolean;
// };

// type NoPayloadAuthAction = {
//   type: AuthActions.DELETEUSER;
// };

// type CreateUpdateUserAction = {
//   type: AuthActions.CREATEUSER | AuthActions.UPDATE | AuthActions.HYDRATEUSER;
//   payload?: User;
// };

// type AccountDataAction = NoPayloadAuthAction | CreateUpdateUserAction;

// export enum AuthActions {
//   CREATEUSER = 'CREATEUSER',
//   UPDATE = 'UPDATE',
//   HYDRATEUSER = 'RESTOREUSER',
//   DELETEUSER = 'DELETEUSER',
// }

// const authReducer: Reducer<AccountData, AccountDataAction> = (
//   accountData: AccountData,
//   action: AccountDataAction,
// ) => {
//   switch (action.type) {
//     case AuthActions.CREATEUSER:
//       return {
//         ...accountData,
//         user: action.payload ? {...action.payload} : accountData.user,
//       };
//     case AuthActions.HYDRATEUSER:
//       return {
//         ...accountData,
//         user: action.payload,
//         isHydrating: false,
//       };
//     case AuthActions.DELETEUSER:
//       return {
//         ...accountData,
//         isHydrating: false,
//         user: undefined,
//       };
//     default:
//       return {
//         ...accountData,
//       };
//   }
// };

// export type AuthProviderProps = {
//   children: JSX.Element;
// };

// const AuthorizationProvider = ({children}: AuthProviderProps) => {
//   const [accountData, userDispatch] = useReducer(authReducer, {
//     user: undefined,
//     isHydrating: true,
//   } as AccountData);

//   useEffect(() => {
//     const getUserFromStore = async () => {
//       let userInfo: AccountData = {user: undefined, isHydrating: false};
//       try {
//         const userStoreJson = await AsyncStorage.getItem('userInfo');
//         if (userStoreJson !== null) {
//           userInfo = JSON.parse(userStoreJson);
//         }
//         userDispatch({type: AuthActions.HYDRATEUSER, payload: userInfo.user});
//       } catch (e) {}
//     };
//     getUserFromStore();
//   }, []);

//   useEffect(() => {
//     const setUserInStore = async () => {
//       try {
//         const jsonValue = JSON.stringify(accountData);
//         await AsyncStorage.setItem('userInfo', jsonValue);
//       } catch (e) {}
//     };
//     setUserInStore();
//   }, [accountData]);

//   return (
//     <AccountDataContext.Provider value={accountData}>
//       <AccountDispatchContext.Provider value={userDispatch}>
//         {children}
//       </AccountDispatchContext.Provider>
//     </AccountDataContext.Provider>
//   );
// };

// export const useAuthorizationProvider = () => {
//   const context = useContext(AccountDataContext);
//   if (context === undefined || context === null) {
//     throw new Error(
//       'useAuthProvider must be used within a component that is a chuld of authprovider',
//     );
//   }
//   return context;
// };

// export const useAuthorizationDispatchProvider = () => {
//   const context = useContext(AccountDispatchContext);
//   if (context === undefined || context === null) {
//     throw new Error(
//       'useAuthDispatch must be used within a component that is a chuld of authDispatch provider',
//     );
//   }
//   return context;
// };

// export default AuthorizationProvider;
