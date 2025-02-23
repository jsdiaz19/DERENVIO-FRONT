import { ReactNode, useReducer } from "react";
import { RequestState, RequestAction, RequestContext} from '../context/requestContext'

const initialState: RequestState = {
    loading: false,
    error: null,
};

const requestReducer = (state: RequestState, action: RequestAction): RequestState => {
    switch (action.type) {
      case "START_REQUEST":
        return { ...state, loading: true, error: null };
      case "END_REQUEST":
        return { ...state, loading: false };
      case "SET_ERROR":
        return { ...state, loading: false, error: action.payload };
      case "CLEAR_ERROR":
        return { ...state, error: null };
      default:
        return state;
    }
  };

export const RequestProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(requestReducer, initialState);
    return <RequestContext.Provider value={{ state, dispatch }}>{children}</RequestContext.Provider>;
};