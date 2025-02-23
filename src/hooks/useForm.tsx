/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from 'react';

const ValidationTypes= {
    REQUIRED: 'required',
    EMAIL: 'email'    
}

/**
 * Hook para el manejo y validacion de formularios
 * @param required 
 * @returns 
 */
function useForm<T extends Record<string, any>>( required: Record<string, string[]> = {} ) {
    const [form, setform] = useState<T>({ } as T);
    const [ errors, setErrors] = useState< Record<string,boolean> >({ });


    const onInputChange= ({target}: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value} = target;
        setform({...form, [name]: value});
    }

    const setFormValue = ( formValue:T) => {
        setform(formValue)
    }

    /**
     * Validacion de reglas
     * @returns 
     */
    const validField = ( ) => {
        for( const field in required){
            const validations = required[field] ?? [];
            for( let i=0; i< validations.length; i++){
                if( validations[i]=== ValidationTypes.EMAIL && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form[field]) ){
                    setErrors({...errors, [field]: true });
                    return false;
                }
                if( validations[i]=== ValidationTypes.REQUIRED && !form[field] ){
                    setErrors({...errors, [field]: true });
                    return false;
                }
            }
        }
        setErrors({});
        return true;
    }

    return { form, onInputChange, setFormValue, errors, validField}
}
//export { ValidationTypes };
export default useForm;