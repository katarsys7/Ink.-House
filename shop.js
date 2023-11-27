let SwitchMode= document.getElementById("SwitchMode");

SwitchMode.onclick = function() {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href")=="shop.css") {
        theme.href = "green_shop.css";
    } else {
        theme.href = "shop.css"
    }
}
const exist_element=document.querySelector("input");

exist_element.addEventListener("click",()=>{
    let new_element=document.createElement("div");
    new_element.innerHTML="А теперь сюда --->";
    new_element.classList.add("divxd");
    exist_element.before(new_element);
    let new_element_close=document.createElement("input");
    new_element_close.type="button";
    new_element_close.className="green_button";
    new_element_close.value="Х";
    new_element_close.addEventListener("click",()=>{
        new_element.remove();
    })
    new_element.append(new_element_close);
})