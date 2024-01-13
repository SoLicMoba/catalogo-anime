window.onload = function () {
    document.querySelector(".menuLine").addEventListener("click", function () {
        const menuArea = document.querySelector('.area');
        const menu = document.querySelectorAll(".menu");
        
        menuArea.classList.toggle('menu_area');
        menu.forEach(function (e) {
            e.classList.toggle('menuUp')
        })
            
  });
};
