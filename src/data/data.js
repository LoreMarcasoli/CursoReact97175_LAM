import { ImAttachment } from "react-icons/im";

    const products = [
        {
            id:1, 
            name:"Prado Del Oeste",
            descripcion :"Emprendimiento Prado Del Oeste ", 
            precio: 150000, 
            category:"Venta",
            Image:"/image/Emprendimiento1.PNG"
        },
        {
            id:2, 
            name:"Aires De Pilar", 
            descripcion:"Emprendimiento Aires De Pilar", 
            precio: 200000, 
            category:"Venta",
            Image:"/image/Emprendimiento2.PNG"
        },
        {
            id:3, 
            name:"Costa Esmeralda",
            descripcion:"Emprendimiento Costa Esmeralda", 
            precio: 120000, 
            category:"Venta",
            Image:"/image/Emprendimiento3.PNG"
        },
        {
            id:4, 
            name:"Puertos",
            descripcion :"Emprendimiento Puertos", 
            precio: 250000, 
            category:"Venta",
            Image:"/image/Emprendimiento4.PNG"
        },
        {
            id:5, 
            name:"San Sebastian", 
            descripcion:"Emprendimiento San Sebastian", 
            precio: 250000, 
            category:"Alquiler",
            Image:"/image/Emprendimiento5.PNG"
        },
        {
            id:6, 
            name:"Altos DeMaschwitz",
            descripcion:"Emprendimiento Altos DeMaschwitz", 
            precio: 250000, 
            category:"Alquiler",
            Image:"/image/Emprendimiento6.PNG"
        },
        {
            id:7, 
            name:"Las Victorias",
            descripcion :"Emprendimiento Las Victorias", 
            precio: 250000, 
            category:"Alquiler",
            Image:"/image/Emprendimiento7.PNG"
        },
        {
            id:8, 
            name:"Pride Canning", 
            descripcion:"Emprendimiento Pride Canning", 
            precio: 250000, 
            category:"Alquiler",
            Image:"/image/Emprendimiento8.PNG"
        },
        
    ];


        export const getProducts = () => {
        
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(products);
            }, 3000);
            
        });

    };

