// Kode js untuk file index.html
const btn_menu = document.getElementById('btn-menu');
const nav_mobile = document.getElementById('nav-mobile');
const btn_top = document.getElementById('btn-top');

btn_menu.addEventListener("click", () => {
    nav_mobile.classList.toggle("toggled-off");
})

const lengthPage = document.documentElement.scrollHeight;

window.onscroll = () => {
    if (document.documentElement.scrollTop > lengthPage * 0.25) {
        btn_top.classList.remove("nav-top-disable");
    }
    else btn_top.classList.add("nav-top-disable");
}

btn_top.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})