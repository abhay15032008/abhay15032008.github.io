// Navbar Shadow on Scroll

window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");

    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0px 4px 15px rgba(0,0,0,0.2)";
    } else {
        navbar.style.boxShadow = "0px 3px 8px rgba(0,0,0,0.15)";
    }
});


// Search Bar Effect

let searchBar = document.querySelector(".desktop-searchBar");

searchBar.addEventListener("focus", () => {
    searchBar.style.backgroundColor = "#ffffff";
});

searchBar.addEventListener("blur", () => {
    searchBar.style.backgroundColor = "#f5f5f6";
});


// Menu Hover Effect

let menuItems = document.querySelectorAll(".left ul li");

menuItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {
        item.style.color = "#ff3f6c";
    });

    item.addEventListener("mouseleave", () => {
        item.style.color = "#282c3f";
    });

});


// Image Zoom Effect

let images = document.querySelectorAll("img");

images.forEach((img) => {

    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.03)";
        img.style.transition = "0.3s";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });

});


// Profile Wishlist Bag Click

document.querySelector(".profile").addEventListener("click", () => {
    alert("Profile Section");
});

document.querySelector(".wish").addEventListener("click", () => {
    alert("Wishlist Section");
});

document.querySelector(".bag").addEventListener("click", () => {
    alert("Shopping Bag Section");
});

let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
// window.onload = () => {
//     document.getElementById("loader").style.display = "none";
// }
const products = [
    "Shirt",
    "Shoes",
    "Watch",
    "Jeans",
    "Kurta",
    "Tshirt",
    "Saree"
];
 searchBar = document.querySelector(".desktop-searchBar");
let suggestions = document.getElementById("suggestions");

searchBar.addEventListener("keyup", () => {

    let value = searchBar.value.toLowerCase();

    suggestions.innerHTML = "";

    if(value === "") return;

    let result = products.filter(item =>
        item.toLowerCase().includes(value)
    );

    result.forEach(item => {
        suggestions.innerHTML += `<p>${item}</p>`;
    });

});