import React, { PropsWithChildren, createContext } from "react";

interface User {
  email: string;
  password: string;
  companyName: string;
}

interface Action {
  type: "REGISTER" | "LOGIN" | "LOGOUT";
  payload: User | null;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

const isAuth = localStorage.getItem("isAuthenticated");

const initialState = {
  isAuthenticated: !!isAuth,
  user: null,
};

export const AuthContext = createContext<{
  state: AuthState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

function reducer(state: AuthState, action: Action): AuthState {
  switch (action.type) {
    case "REGISTER":
      localStorage.setItem("isAuthenticated", "true");
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGIN":
      localStorage.setItem("isAuthenticated", "true");
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
}

export default function AuthProvider({
  children,
}: PropsWithChildren): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
