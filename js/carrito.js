const pintarCarrito = () =>{


    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-tittle">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener('click',()=>{
        modalContainer.style.display = "none";
        
    });

    modalHeader.append(modalButton);

    carrito.forEach((prod)=>{
        
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${prod.img}">
            <h3 class="modal-content-text">${prod.nombre}</h3>
            <p class="modal-content-text">$${prod.precio}</p>
            <p class="modal-content-text">Cantidad: ${prod.cantidad}</p>
            <p class="modal-content-text">Total: ${prod.cantidad * prod.precio}</p>
        `;
        modalContainer.append(carritoContent);

        let eliminar = document.createElement('span');
        eliminar.innerText = '❌';
        eliminar.className = "delete-product";
        carritoContent.append(eliminar);
        eliminar.addEventListener('click',eliminarProducto);
    });
    const total = carrito.reduce((acc,elem) => acc + elem.precio * elem.cantidad,0);
    
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `Total a pagar: $${total}`;
    modalContainer.append(totalBuying);
};
verCarrito.addEventListener('click',pintarCarrito);

const eliminarProducto= () =>{
    const foundId = carrito.find((elem) => elem.id);//elemento que quiero eliminar

    carrito = carrito.filter((carritoId) =>{
        return carritoId !== foundId;
        //retorna los elementos que no tengan el id igual al id que quiero eliminar
    });
    pintarCarrito();
    carritoCounter();
};


const carritoCounter = () =>{
    cantidadCarrito.style.display= "block";
    cantidadCarrito.innerText = carrito.length;
}