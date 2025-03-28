
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
    const url = new URL("https://67e686946530dbd3111056dc.mockapi.io/")
    url.pathname = "/products"
    const config = {

        method: "GET", //Obtener todos los productos

    }
    const response = await fetch(url, config)
    const result = await response.json();
    return result;
} 

const dataProducts = await findProducts()
console.table(dataProducts)

const findUsers = async()=>{
    const url = new URL("https://67e686946530dbd3111056dc.mockapi.io/")
    url.pathname = "/users"
    const config = {
        method: "GET", //Obtener todos los productos

    }
    const response = await fetch(url, config)
    const result = await response.json();
    return result;
} 

const dataUsers = await findUsers()
console.table(dataUsers)

//******************************************************* */
const saveUser = async (data) => {
    const url = new URL("https://67e686946530dbd3111056dc.mockapi.io")
    url.pathname = "/users"
    const header = new Headers()
    header.append("Content-Type", "application/json")
    const config = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    };
    const response = await fetch(url.toString(), config)
    const result = await response.json();
    return result;
    
};

while(confirm("¿Desea insertar un dato para usuarios?")){
    const data = {
        name: prompt("Ingrese el nombre de usuario", "Santiago"),
        last: prompt("Ingrese el apellido del usuario", "Arenas")
    }

    saveUser(data)
}

const saveProducts = async (data) => {
    const url = new URL("https://67e686946530dbd3111056dc.mockapi.io")
    url.pathname = "/products"
    const header = new Headers()
    header.append("Content-Type", "application/json")
    const config = {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    };
    const response = await fetch(url.toString(), config)
    const result = await response.json();
    return result;
    
};

while(confirm("¿Desea insertar un dato de productos?")){
    const data = {
        id: prompt("Ingrese el id", "6"),
        name: prompt("Ingrese el nombre del producto", "Estufa"),
        price: prompt("Ingrese el precio del producto", 500.99),
        category: prompt("Ingrese la categoria del producto", "Electronics")
    }
    saveProducts(data)
}

//******************************************************/

const editProduct = async(data) =>{
    const { id, ...dataUpdate } = data;

    const config = {
        method: "PATCH",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataUpdate)
    };

    const response = await fetch(`https://67e686946530dbd3111056dc.mockapi.io/products/${id}`, config);
    const result = await response.json();
    return result;
 }

 while (confirm("¿Desea actualizar un producto?")) {
    const data = {
        id: prompt("Ingrese el id a editar"),
        name: prompt("Ingrese el nombre del producto a editar"),
        price: prompt("Ingrese el precio del producto a editar"),
        category: prompt("Ingrese la categoría del producto")
    };

    await editProduct(data);
}


const editUsers = async(data) =>{
    const { id, ...dataUpdate } = data;

    const config = {
        method: "PATCH",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataUpdate)
    };

    const response = await fetch(`https://67e686946530dbd3111056dc.mockapi.io/users/${id}`, config);
    const result = await response.json();
    return result;
 }

 while (confirm("¿Desea actualizar un usuario?")) {
    const data = {
        id: prompt("Ingrese el id a editar"),
        name: prompt("Ingrese el nombre del usuario a editar"),
        last: prompt("Ingrese el precio del usuario a editar"),
        
    };
    await editProduct(data);
}

//******************************** */


const deleteProduct = async (id) => {
    const url = new URL("https://67e686946530dbd3111056dc.mockapi.io");
    url.pathname = `/products/${id}`;
    
    const config = {
        method: "DELETE",
    };
        const response = await fetch(url.toString(), config);
        const result = await response.json();
        console.log("Producto eliminado:", result);
        return result;
};
while (confirm("¿Desea eliminar un producto?")) {
    const id = prompt("Ingrese el ID del producto a eliminar");
    if (id) {
        await deleteProduct(id);
    }
}
const deleteUser = async (id) => {
    const url = new URL("https://67e686946530dbd3111056dc.mockapi.io");
    url.pathname = `/users/${id}`;

    const config = {
        method: "DELETE",
    };
        const response = await fetch(url.toString(), config);
        const result = await response.json();
        console.log("Usuario eliminado:", result);
        return result;
    } 

while (confirm("¿Desea eliminar un usuario?")) {
    const id = prompt("Ingrese el ID del usuario a eliminar");
    if (id) {
        await deleteUser(id);
    }
}
