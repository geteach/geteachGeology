window.addEventListener("orientationchange", function() {
    var box2 = document.getElementById('FullScreen');
    var top2 = box2.offsetTop
    var scrollHead = document.getElementById('scrollHeader');
    if(top2 < 600){
        box2.style.top = 'calc(100% - 8em)';
        scrollHead.style.display = "block";
    }else{
        box2.style.top = '0';
        scrollHead.style.display = "none"
    }
})
//Shows hides header for portrait or landscape phones on load -- work in progress
window.onload =  function() {
    var box = document.getElementById('FullScreen');
    var top = box.offsetTop
    var scrollHead = document.getElementById('scrollHeader');
    if(top > 600){
        scrollHead.style.display = "block";
    }else{
        scrollHead.style.display = "none"
    }
}