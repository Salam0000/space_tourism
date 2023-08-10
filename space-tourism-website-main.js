let element = document.getElementById("list");
let close = document.getElementById("close");
// element.onclick = () => {
//     console.log(element);
//     console.log(element.classList);
//     element.classList.toggle("show");
//     if (element.classList.contains("show")) {
//         document.getElementById("ul").style.display = "flex";
//     } else {
//         document.getElementById("ul").style.display = "none";
//     }
// };
// close
element.onclick = () => {
    document.getElementById("ul").style.display = "flex";
    element.style.display = "none";
    close.style.display = "flex";

};
close.onclick = () => {
    document.getElementById("ul").style.display = "none";
    close.style.display = "none";
    element.style.display = "flex";
};

let elements = document.querySelectorAll('ul li');
elements.forEach(e => {
    e.onclick = () => {
        // document.getElementById('active').style.display = block;
        elements.forEach(e => e.classList.remove("active"));
        e.classList.add("active");
    };
});