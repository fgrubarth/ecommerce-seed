

const ListaProductos = ({product}) => {
    
    return(
        <>
            <div key={product.id} className="p-2 m-4 d-flex flex-column align-items-center">
                <a href="#">
                    <img className="carta" src={product.imagen} alt={product.nombre} />
                </a>
                <h3>
                    <a href="#" className="text-decoration-none link-success"> {product.nombre} </a>
                </h3>
                <p>
                    ${product.precio}
                </p>
                <p>
                    Hasta 12 cuotas
                </p>
                
                
                
            </div>
        </>
    )
}


export default ListaProductos