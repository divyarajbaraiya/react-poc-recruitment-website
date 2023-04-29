import React, { createContext } from "react";

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

const initialState = {
  isAuthenticated: false,
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
  console.log("sdsad", action);

  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case "LOGIN":
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

type Props = {
  children: JSX.Element;
};

export default function AuthProvider({ children }: Props): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
