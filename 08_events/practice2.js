document.addEventListener("click", (event) => {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.left = event.clientX + "px";
    circle.style.top = event.clientY + "px";
    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 3000);
})