import { ImAttachment } from "react-icons/im";

    const products = [
        {
            id:1, 
            name:"Prado Del Oeste",
            descripcion :"Emprendimiento Prado Del Oeste ", 
            precio: 150000, 
            category:"Vende",
            Image:"/image/Emprendimiento1.PNG",
            stock:3
        },
        {
            id:2, 
            name:"Aires De Pilar", 
            descripcion:"Emprendimiento Aires De Pilar", 
            precio: 200000, 
            category:"Vende",
            Image:"/image/Emprendimiento2.PNG",
            stock:4
        },
        {
            id:3, 
            name:"Costa Esmeralda",
            descripcion:"Emprendimiento Costa Esmeralda", 
            precio: 120000, 
            category:"Vende",
            Image:"/image/Emprendimiento3.PNG",
            stock:6
        
        },
        {
            id:4, 
            name:"Puertos",
            descripcion :"Emprendimiento Puertos", 
            precio: 250000, 
            category:"Vende",
            Image:"/image/Emprendimiento4.PNG",
            stock:2
        },
        {
            id:5, 
            name:"San Sebastian", 
            descripcion:"Emprendimiento San Sebastian", 
            precio: 250000, 
            category:"Alquila",
            Image:"/image/Emprendimiento5.PNG",
            stock:2
        },
        {
            id:6, 
            name:"Altos DeMaschwitz",
            descripcion:"Emprendimiento Altos DeMaschwitz", 
            precio: 250000, 
            category:"Alquila",
            Image:"/image/Emprendimiento6.PNG",
            stock:1
        },
        {
            id:7, 
            name:"Las Victorias",
            descripcion :"Emprendimiento Las Victorias", 
            precio: 250000, 
            category:"Alquila",
            Image:"/image/Emprendimiento7.PNG",
            stock:4
        },
        {
            id:8, 
            name:"Pride Canning", 
            descripcion:"Emprendimiento Pride Canning", 
            precio: 250000, 
            category:"Alquila",
            Image:"/image/Emprendimiento8.PNG",
            Stock:3
        },
        
    ];


        export const getProducts = () => {
        
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(products);
            }, 3000);
            
        });

    };

        export const getProductById = (productId) => {
        
        return new Promise((resolve,reject)=>{
            const product = products.find((produdctData) => produdctData.id === Number(productId));
            setTimeout(() => {
                if(product){
                    resolve(product);
                }else{
                    reject(new Error("Producto no encontrado"));
                }
            }, 2000);
            
        });

    };

