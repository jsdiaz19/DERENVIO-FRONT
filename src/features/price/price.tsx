import { useEffect, useState } from "react";
import { Price, PriceResponse } from "../../models/price.model";
import useRequest from "../../hooks/useRequest";
import Modal from "../modal/modal";
import useForm from "../../hooks/useForm";
import './price.css'
import { Product } from "../../models/product.model";
import { User } from "../../models/user.model";

function PricePage() {
    const { getRequest, postRequest } = useRequest();
    const [ productList, setProductList] = useState<Product[]>([])
    const [ priceList, setPriceList] = useState<PriceResponse[]>([])
    const [ idPrice, setIdPrice] = useState<string>('')
    const [ userList, setUserList] = useState<User[]>([])
    const [ openModal, setOpenModal] = useState<boolean>(false);
    const [ updateModal, setupdateModal] = useState<boolean>(false);
    const { form, errors, onInputChange, validField} = useForm<{userId:'',productId:'',price:0}>( { userId: ['required'], productId:['required'], price:['required']});
    const { form: updateForm, onInputChange: inputUpdateChange, validField: reviewFiled} = useForm<{price:0}>( { price: ['required'] } );

    /**
     * Obtiene lista de precios especiales
     */
    const fetchPrices = async ()=> {
        const response = await getRequest<PriceResponse[]>("getPrices");
        setPriceList(response.data ?? []);
    }

    /**
     * Obtiene lista de productos
     */
    const fetchProduct = async ()=> {
        const response = await getRequest<Product[]>("getProducts");
        setProductList(response.data ?? []);
    }

    /**
     * Obtiene lista de usuarios
     */
    const fetchUser = async ()=> {
        const response = await getRequest<User[]>("getUsers");
        setUserList(response.data ?? []);
    }

  useEffect(()=>{
    fetchPrices();
    fetchProduct();
    fetchUser();
  },[])

  /**
   * Crea y valida la creacion de precios especiales
   */
  const onSubmitForm = async()=>{
    if( validField()){
        const price: Omit<Price,"_id"> = { userId: form.userId, productId: form.productId, precio: form.price};
        await postRequest<Price, Omit<Price,"_id">>("createPrice", price);
        setOpenModal(false);
        fetchPrices();
    }
  }

  const openModalUpdate = (price: PriceResponse)=> {
    setupdateModal(true);
    setIdPrice(price._id);
  }

  /**
   * Actualiza lista de precio
   */
  const updatePrice = async() => {
    if(reviewFiled()){
        const price: { precio:number, priceId:string} = { precio:updateForm.price, priceId: idPrice}
        await postRequest<Price, { precio:number, priceId:string} >("updatePrice", price);
        setupdateModal(false);
        fetchPrices();
    }
    
  }

    return ( 
        <>
            <button type="button" className="btn" onClick={()=> setOpenModal(true)}>Crear Precio</button>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Usuario</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {priceList.map((price:PriceResponse, index:number) => (
                    <tr key={index}>
                        <td>{price.userId.nombre}</td>
                        <td>{price.productId.nombre}</td>
                        <td>{price.precio}</td>
                        <td><button onClick={()=> openModalUpdate(price)}>Editar</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>

            <Modal isOpen={openModal} onClose={()=> setOpenModal(false)} actionButton={()=> onSubmitForm() } >
                <h1>Creacion de precios</h1>

                <form >

                    <div className="form-field">
                        <label> <b>Usuario</b> </label>
                        <select name="userId" onChange={onInputChange}>
                            <option  value="" ></option>
                            {
                                
                                userList.map((user: User, index:number)=> (
                                    
                                    <option key={index} value={user._id}>{user.nombre}</option>
                                ))
                            }
                        </select>
                        { errors.userId && <span className="error">El valor del campo no es permitido</span>}
                    </div>

                    <div className="form-field">
                        <label> <b>Producto</b> </label>
                        <select name="productId" onChange={onInputChange}>
                            <option  value="" ></option>
                            {
                                productList.map((product: Product, index:number)=> (
                                    <option key={index} value={product._id}>{product.nombre}</option>
                                ))
                            }
                        </select>
                        { errors.productId && <span className="error">El valor del campo no es permitido</span>}
                    </div>

                    <div className="form-field">
                        <label> <b>Precio</b> </label>
                        <input type="number" name="price" onChange={onInputChange}/>
                        { errors.price && <span className="error">El valor del campo no es permitido</span>}
                    </div>

                </form>
            </Modal>

            <Modal isOpen={updateModal} onClose={()=> setupdateModal(false)} actionButton={()=> updatePrice() } >
                <form >
                    <div className="form-field">
                        <label> <b>Precio</b> </label>
                        <input type="number" name="price" onChange={inputUpdateChange} required/>
                    </div>
                </form>

            </Modal>
        </>
     );
}

export default PricePage;