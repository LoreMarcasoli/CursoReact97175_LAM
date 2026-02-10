//Borrar
const getProducts = () => {
    return fetch("https://server-prueba-g4mc.onrender.com/api/products")
        .then((response) => {
            return response.json()})

        .catch((error) => {
            console.error("Error al obtener los productos:", error);
        });
}

const getProductById = (productid) => {
    return fetch(`https://server-prueba-g4mc.onrender.com/api/products/${productid}`)
        .then((response) => {
            return response.json()})
        .catch((error) => {
            console.error("Error al obtener el producto:", error);
        });
};

const addProduct = (newProduct) => {
    return fetch("https://server-prueba-g4mc.onrender.com/api/products",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    })
    .then((response) => {
        if (!response.ok) {
            console.log("Error al agregar el producto");
        }
        return response.json();
    })
    .catch((error) => {
        console.error("Error al agregar el producto:", error);
    }); 

};

const deleteProductById = (productId) => {
    return fetch(`https://server-prueba-g4mc.onrender.com/api/products/${productId}`, {
        method: "DELETE"
    })
    .then((response) => {   return response.json(); })
    .catch((error) => {
        console.error("Error al eliminar el producto:", error);
    });
}

const setproductbyid = (productId,updates) => {
    return fetch(`https://server-prueba-g4mc.onrender.com/api/products/${productId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updates)
    })
    .then((response) => {   return response.json(); })
    .catch((error) => {
        console.error("Error al modificar el producto:", error);
    });
}

export { getProducts, getProductById, addProduct, deleteProductById, setproductbyid };
