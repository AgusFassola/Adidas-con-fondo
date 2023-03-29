const shopContent = document.querySelector('#shopContent');
const verCarrito = document.querySelector('#verCarrito');
const modalContainer = document.getElementById("modal-container");

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
        carrito.push({
            id : prod.id,
            img : prod.img,
            nombre : prod.nombre,
            precio : prod.precio
        });
    });
});
verCarrito.addEventListener('click', ()=>{
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
            <h3>${prod.nombre}</h3>
            <p>$${prod.precio}</p>
        `;
        modalContainer.append(carritoContent);
    });
    const total = carrito.reduce((acc,elem) => acc + elem.precio,0);
    
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content";
    totalBuying.innerHTML = `total a pagar: $${total}`;
    modalContainer.append(totalBuying);
});