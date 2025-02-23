import { useRequestContext } from "../context/requestContext";

export type ApiResponse<T> = {
    data: T | null;
    error: string | null;
    loading: boolean;
};

/**
 * Hook para manejo de request
 * @param BASE_API 
 * @returns 
 */
function useRequest(BASE_API: string = import.meta.env.VITE_BASE_API) {
    const { dispatch } = useRequestContext(); 

    /**
     * Metodo para solicitudes tipo GET
     * @param endpoint 
     * @returns 
     */
    async function getRequest<T>(endpoint:string): Promise<ApiResponse<T>> {
        dispatch({ type: "START_REQUEST" });  
        try{
            const response= await fetch(`${BASE_API}${endpoint}`);
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
            const data: T = await response.json();
            dispatch({ type: "END_REQUEST" });
            return { data, error: null, loading: false  };
        }catch ( err) {
            const errorMessage = err instanceof Error ? err.message : "Error desconocido";
            dispatch({ type: "SET_ERROR", payload: errorMessage });
            return { data: null, error: errorMessage, loading: false };
        }
        
    }

    /**
     * Metodo para solicitudes tipo POST
     * @param endpoint 
     * @param body 
     * @returns 
     */
    async function postRequest<T, B >(endpoint:string, body:B): Promise<ApiResponse<T>> {
        dispatch({ type: "START_REQUEST" });  
        try{
            const response= await fetch(`${BASE_API}${endpoint}`, {
                method:"POST",
                headers: { 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
            const data: T = await response.json();
            dispatch({ type: "END_REQUEST" });
            return { data, error: null, loading: false  };
        }catch ( err) {
            const errorMessage = err instanceof Error ? err.message : "Error desconocido";
            dispatch({ type: "SET_ERROR", payload: errorMessage });
            return { data: null, error: errorMessage, loading: false };
        }
        
    }

    return { getRequest, postRequest};
}

export default useRequest;