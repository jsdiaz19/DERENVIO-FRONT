export interface Product{
    _id: string;
    nombre: string;
    precio: number;
}

export interface ProductResponse{
    _id: string;
    nombre: string;
    correo: string;
    productos: Product[];
}