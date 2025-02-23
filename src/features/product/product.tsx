import { useEffect, useState } from "react";
import { Product, ProductResponse } from "../../models/product.model";
import useRequest from "../../hooks/useRequest";

function ProductPage() {
    const { getRequest } = useRequest();
    const [ productList, setProductList] = useState<ProductResponse[]>([]);

    /**
     * Obtiene lista de precios segun el usuario
     */
    const fetchProducts = async () => {
        const response = await getRequest<ProductResponse[]>("getUsersWithProductsAndPrices");
        setProductList(response.data ?? []);
    };
    useEffect(() => {
        fetchProducts()
        
    }, []); 
    
    return ( 
        <>
            <table border={1}>
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Articulo</th>
                    <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((user:ProductResponse) => (
                        user.productos.map((product:Product) => (
                            <tr key={`${user._id}-${product._id}`} >
                                <td>{user.nombre}</td>
                                <td>{product.nombre}</td>
                                <td>{product.precio}</td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </>
     );
}

export default ProductPage;