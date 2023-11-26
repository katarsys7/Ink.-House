let SwitchMode= document.getElementById("SwitchMode");

SwitchMode.onclick = function() {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href")=="shop.css") {
        theme.href = "dark_shop.css";
    } else {
        theme.href = "shop.css"
    }
}