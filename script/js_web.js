document.getElementById("btn_open").addEventListener("click", open_close_menu);

var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

function open_close_menu() {
    body.classList.toggle("body_move");
    side_menu.classList.toggle("menu__side_move");
    }

if (window.innerWidth < 1000) {
    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}

window.addEventListener("resize", function() {
    if (window.innerWidth > 1000) {
        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }
    if (window.innerWidth < 1000){
        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll('.options_page > li');

    menuItems.forEach(item => {
        let timer;
        const secondaryMenu = item.querySelector('.secundary_options');

        item.addEventListener('mouseenter', () => {
            clearTimeout(timer);
            secondaryMenu.style.display = 'block';
        });

        item.addEventListener('mouseleave', () => {
            timer = setTimeout(() => {
                secondaryMenu.style.display = 'none';
            }, 125);
        });

        item.addEventListener('click', () => {
            clearTimeout(timer);
            secondaryMenu.style.display = secondaryMenu.style.display === 'block' ? 'none' : 'block';
        });

        secondaryMenu.addEventListener('mouseenter', () => {
            clearTimeout(timer);
            secondaryMenu.style.display = 'block';
        });

        secondaryMenu.addEventListener('mouseleave', () => {
            timer = setTimeout(() => {
                secondaryMenu.style.display = 'none';
            }, 125);
        });
    });
});
