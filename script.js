//Project title color

const originalColor=rgb(26, 133, 134);
const pageTitle=document.getElementById("Projects")

window.onload = function(){
    pageTitle.style.color = originalColor;
};

window.onbeforeunload = function(){
    setTimeout(function() {
        pageTitle.style.color = originalColor;
    }, 100);
}

