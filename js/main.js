const saveProduct = async (data) => {
    
    const config = {
        method: "POST",
        body: JSON.stringify(data)
    };
    const response = await fetch("http://localhost:5600/products", config)
    const result = await response.json();
    return result;
    
};

// const editProduct = async(data) =>{
//     const {id, ...dataUpdate} = data;
//     const config = {
//         method: "PATCH", //Actualizar los datos que deseamos (put actualiza todo)
//         body: JSON.stringify(dataUpdate)
//     }

//     const response = await fetch(`http://localhost:5600/products/${id}`, config)
//     const result = await response.json();
//     return result;
// }

// while(confirm("¿Desea actualizar un producto?")){
//     data = {}
//     id = prompt("Ingrese el id del producto", "Mic330");
//     data.name = (confirm("¿Desea editar el nombre producto?")) ? prompt("Ingrese el nuevo nombre") : undefined;
//     data.price = (confirm("¿Desea editar el nombre producto?")) ? Number(prompt("Ingrese el nuevo precio")) : undefined;
//     data.category = (confirm("¿Desea editar el nombre producto?")) ? prompt("Ingrese la nueva categoria") : undefined;   
// }


// while(confirm("¿Desea insertar un dato?")){
//     const data = {
//             id: prompt("Ingrese el id", "Mic330"),
//             name: prompt("ingrese el nombre", "Mac mini"),
//             price: Number(prompt("Ingrese el precio", 600)),
//             category: prompt("Ingrese la categoría", "Technology")
//     }
//     saveProduct(data).then(result => alert(JSON.stringify(result, null, 4)))
//     .catch(error => alert(error));
// }

// const deleteProduct = async(data) =>{
//     const {id} = data;
//     const config = {
//         method: "DELETE",
//     }

//     const response = await fetch(`http://localhost:5600/products/${id}`, config)
//     const result = await response.json();
//     return result;
// }

// while(confirm("¿Desea eliminar un dato?")){
//     const data = {};
//     data.id = prompt("Ingrese el id", "Mic330");
//     deleteProduct(data).then(result => alert(JSON.stringify(result, null, 4)))
//     .catch(error => alert(error));
// }

const findProducts = async()=>{
    const config = {
        method: "GET", //Obtener todos los productos

    }
    const response = await fetch(`http://localhost:5600/products/`, config);
    const result = await response.json();
    return result;
} 

while(confirm("¿Desea ver todos los productos?")){
    findProducts().then(result => console.table((result)))
    .catch(error => alert(error));
    break;
}