    window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#fff";
    document.getElementById("title").style.color = "#000";
    document.getElementsByClassName("nav_a").style.color = "000"
    } else {
        
    document.getElementById("navbar").style.background = "none";
    document.getElementById("title").style.color = "#fff";
    }
}