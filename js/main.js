const shopContent = document.querySelector('#shopContent');
const verCarrito = document.querySelector('#verCarrito');
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById('cantidad-carrito');

let carrito = [];

productos.forEach((prod) =>{
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${prod.img}">
        <h3>${prod.nombre}</h3>
        <p class="price">$${prod.precio}</p>
    `;
    shopContent.append(content);

    let btnComprar = document.createElement("button")
    btnComprar.innerText = "Comprar"
    btnComprar.className = "btnComprar";

    content.append(btnComprar);

    btnComprar.addEventListener('click',()=>{
    
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === prod.id)
    
    if(repeat){
        carrito.map((producto) => {
            if(producto.id === prod.id){
                producto.cantidad++;
            }
        });
    }else{
        carrito.push({
            id : prod.id,
            img : prod.img,
            nombre : prod.nombre,
            precio : prod.precio,
            cantidad : prod.cantidad,
        });
    }
    carritoCounter();
        
    });
});
