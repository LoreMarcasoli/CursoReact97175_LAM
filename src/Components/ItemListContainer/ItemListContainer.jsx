const ItemListContainer = ({bienvenida,despedida,bienvenido}) => {   
    return (
           
    <div >   
        <h2>{bienvenida}</h2>
        <button onClick={bienvenido}>Saludar</button>
        <h2>{despedida}</h2>            
    </div>


    );
    
};

export default ItemListContainer;  
