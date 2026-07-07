
const MenuHamburguesaAbrir = document.getElementById("menu-hamburguesa");
const MenuHamburguesaCerrar = document.getElementById("button-cerrar");
const ListaMenu = document.getElementById("nav-links");

	MenuHamburguesaAbrir.addEventListener("click", function() {
		ListaMenu.style.display = "flex";
		MenuHamburguesaAbrir.style.display = "none";
	});

	MenuHamburguesaCerrar.addEventListener("click", function () {
		ListaMenu.style.display = "none";
		MenuHamburguesaAbrir.style.display = "flex";
	})



const ButtonProducto = document.getElementById("button-productos");
const ButtonNosotros = document.getElementById("button-nosotros");
const ButtonContacto = document.getElementById("button-contacto");

ButtonProducto.addEventListener("click", function() {
	ListaMenu.style.display = "none";
})

ButtonNosotros.addEventListener("click", function() {
	ListaMenu.style.display = "none";
})

ButtonContacto.addEventListener("click", function() {
	ListaMenu.style.display = "none";
})