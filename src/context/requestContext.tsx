import { createContext, useContext } from "react";

export type RequestState = {
  loading: boolean;
  error: string | null;
};



export type RequestAction =
  | { type: "START_REQUEST" }
  | { type: "END_REQUEST" }
  | { type: "SET_ERROR"; payload: string }
  | { type: "CLEAR_ERROR" };


export type RequestContextType = {
    state: RequestState;
    dispatch: React.Dispatch<RequestAction>;
};

export const RequestContext = createContext<RequestContextType | undefined>( undefined);

export const useRequestContext = () => {
  const context = useContext(RequestContext);
  if (!context) {
    throw new Error("useRequestContext debe estar dentro de un RequestProvider");
  }
  return context;
};
