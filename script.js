const button = document.getElementById("_button");
const notify = document.getElementById("_notification");
const bellSound = document.getElementById("bell-sound");

const image1 = document.getElementById("image1"); 
const image2 = document.getElementById("image2");

button.addEventListener("click",()=>{
    // Reproducir sonido de campana 
    bellSound.play();

    // Crear notificación 
    const counter = Number(notify.getAttribute("data-count")) || 0;
    
    notify.setAttribute("data-count", counter + 1);
    notify.classList.add("count")    
    notify.classList.add("notify")

    // Mostrar imágenes según el contador 
    if (counter + 1 === 5) { 
        image1.style.display = 'block'; 
    } else if (counter + 1 === 10) { 
        image2.style.display = 'block'; 
    }
});

notify.addEventListener("animationend",()=>{
    notify.classList.remove("notify")
});

