window.onload = function() {
    setLinks();
    toggleSet();
};
function setLinks () {
var links = `<a href='#earthquakes;show' class='showlink' id='earthquakesShow'></a><a href='#holocenevolcanoes;show' class='showlink' id='holocenevolcanoesShow'></a><a href='#pleistocenevolcanoes;show' class='showlink' id='pleistocenevolcanoesShow'></a><a href='#boundaries;show' class='showlink' id='boundariesShow'></a><a href='#2d;show' class='showlink' id='2dShow'></a><a href='#3d;show' class='showlink' id='3dShow'></a><a href='#hs;show' class='showlink' id='hsShow'></a><a href='#classb;show' class='showlink' id='classbShow'></a><a href='#historic;show' class='showlink' id='historicShow'></a><a href='#latequaternary;show' class='showlink' id='latequaternaryShow'></a><a href='#latestquaternary;show' class='showlink' id='latestquaternaryShow'></a><a href='#middlelatequaternary;show' class='showlink' id='middlelatequaternaryShow'></a><a href='#undifferentiatedquaternary;show' class='showlink' id='undifferentiatedquaternaryShow'></a><a href='#unspecifiedage;show' class='showlink' id='unspecifiedageShow'></a><a href='#usbedrock;show' class='showlink' id='usbedrockShow'></a><a href='#algeol;show' class='showlink' id='algeolShow'></a><a href='#akgeol;show' class='showlink' id='akgeolShow'></a><a href='#azgeol;show' class='showlink' id='azgeolShow'></a><a href='#argeol;show' class='showlink' id='argeolShow'></a><a href='#cageol;show' class='showlink' id='cageolShow'></a><a href='#cogeol;show' class='showlink' id='cogeolShow'></a><a href='#ctgeol;show' class='showlink' id='ctgeolShow'></a><a href='#degeol;show' class='showlink' id='degeolShow'></a><a href='#flgeol;show' class='showlink' id='flgeolShow'></a><a href='#gageol;show' class='showlink' id='gageolShow'></a><a href='#higeol;show' class='showlink' id='higeolShow'></a><a href='#idgeol;show' class='showlink' id='idgeolShow'></a><a href='#ilgeol;show' class='showlink' id='ilgeolShow'></a><a href='#ingeol;show' class='showlink' id='ingeolShow'></a><a href='#iageol;show' class='showlink' id='iageolShow'></a><a href='#ksgeol;show' class='showlink' id='ksgeolShow'></a><a href='#kygeol;show' class='showlink' id='kygeolShow'></a><a href='#lageol;show' class='showlink' id='lageolShow'></a><a href='#megeol;show' class='showlink' id='megeolShow'></a><a href='#mdgeol;show' class='showlink' id='mdgeolShow'></a><a href='#mageol;show' class='showlink' id='mageolShow'></a><a href='#migeol;show' class='showlink' id='migeolShow'></a><a href='#mngeol;show' class='showlink' id='mngeolShow'></a><a href='#msgeol;show' class='showlink' id='msgeolShow'></a><a href='#mogeol;show' class='showlink' id='mogeolShow'></a><a href='#mtgeol;show' class='showlink' id='mtgeolShow'></a><a href='#negeol;show' class='showlink' id='negeolShow'></a><a href='#nvgeol;show' class='showlink' id='nvgeolShow'></a><a href='#nhgeol;show' class='showlink' id='nhgeolShow'></a><a href='#njgeol;show' class='showlink' id='njgeolShow'></a><a href='#nmgeol;show' class='showlink' id='nmgeolShow'></a><a href='#nygeol;show' class='showlink' id='nygeolShow'></a><a href='#ncgeol;show' class='showlink' id='ncgeolShow'></a><a href='#ndgeol;show' class='showlink' id='ndgeolShow'></a><a href='#ohgeol;show' class='showlink' id='ohgeolShow'></a><a href='#okgeol;show' class='showlink' id='okgeolShow'></a><a href='#orgeol;show' class='showlink' id='orgeolShow'></a><a href='#pageol;show' class='showlink' id='pageolShow'></a><a href='#rigeol;show' class='showlink' id='rigeolShow'></a><a href='#scgeol;show' class='showlink' id='scgeolShow'></a><a href='#sdgeol;show' class='showlink' id='sdgeolShow'></a><a href='#tngeol;show' class='showlink' id='tngeolShow'></a><a href='#txgeol;show' class='showlink' id='txgeolShow'></a><a href='#utgeol;show' class='showlink' id='utgeolShow'></a><a href='#vtgeol;show' class='showlink' id='vtgeolShow'></a><a href='#vageol;show' class='showlink' id='vageolShow'></a><a href='#wageol;show' class='showlink' id='wageolShow'></a><a href='#wvgeol;show' class='showlink' id='wvgeolShow'></a><a href='#wigeol;show' class='showlink' id='wigeolShow'></a><a href='#wygeol;show' class='showlink' id='wygeolShow'></a><a href='#macrostrat;show' class='showlink' id='macrostratShow'></a><a href='#north;show' class='showlink' id='northShow'></a><a href='#south;show' class='showlink' id='southShow'></a><a href='#earthquakes;hide' class='hidelink' id='earthquakesHide'></a><a href='#holocenevolcanoes;hide' class='hidelink' id='holocenevolcanoesHide'></a><a href='#pleistocenevolcanoes;hide' class='hidelink' id='pleistocenevolcanoesHide'></a><a href='#boundaries;hide' class='hidelink' id='boundariesHide'></a><a href='#2d;hide' class='hidelink' id='2dHide'></a><a href='#3d;hide' class='hidelink' id='3dHide'></a><a href='#hs;hide' class='hidelink' id='hsHide'></a><a href='#classb;hide' class='hidelink' id='classbHide'></a><a href='#historic;hide' class='hidelink' id='historicHide'></a><a href='#latequaternary;hide' class='hidelink' id='latequaternaryHide'></a><a href='#latestquaternary;hide' class='hidelink' id='latestquaternaryHide'></a><a href='#middlelatequaternary;hide' class='hidelink' id='middlelatequaternaryHide'></a><a href='#undifferentiatedquaternary;hide' class='hidelink' id='undifferentiatedquaternaryHide'></a><a href='#unspecifiedage;hide' class='hidelink' id='unspecifiedageHide'></a><a href='#usbedrock;hide' class='hidelink' id='usbedrockHide'></a><a href='#algeol;hide' class='hidelink stateHide' id='algeolHide'></a><a href='#akgeol;hide' class='hidelink stateHide' id='akgeolHide'></a><a href='#azgeol;hide' class='hidelink stateHide' id='azgeolHide'></a><a href='#argeol;hide' class='hidelink stateHide' id='argeolHide'></a><a href='#cageol;hide' class='hidelink stateHide' id='cageolHide'></a><a href='#cogeol;hide' class='hidelink stateHide' id='cogeolHide'></a><a href='#ctgeol;hide' class='hidelink stateHide' id='ctgeolHide'></a><a href='#degeol;hide' class='hidelink stateHide' id='degeolHide'></a><a href='#flgeol;hide' class='hidelink stateHide' id='flgeolHide'></a><a href='#gageol;hide' class='hidelink stateHide' id='gageolHide'></a><a href='#higeol;hide' class='hidelink stateHide' id='higeolHide'></a><a href='#idgeol;hide' class='hidelink stateHide' id='idgeolHide'></a><a href='#ilgeol;hide' class='hidelink stateHide' id='ilgeolHide'></a><a href='#ingeol;hide' class='hidelink stateHide' id='ingeolHide'></a><a href='#iageol;hide' class='hidelink stateHide' id='iageolHide'></a><a href='#ksgeol;hide' class='hidelink stateHide' id='ksgeolHide'></a><a href='#kygeol;hide' class='hidelink stateHide' id='kygeolHide'></a><a href='#lageol;hide' class='hidelink stateHide' id='lageolHide'></a><a href='#megeol;hide' class='hidelink stateHide' id='megeolHide'></a><a href='#mdgeol;hide' class='hidelink stateHide' id='mdgeolHide'></a><a href='#mageol;hide' class='hidelink stateHide' id='mageolHide'></a><a href='#migeol;hide' class='hidelink stateHide' id='migeolHide'></a><a href='#mngeol;hide' class='hidelink stateHide' id='mngeolHide'></a><a href='#msgeol;hide' class='hidelink stateHide' id='msgeolHide'></a><a href='#mogeol;hide' class='hidelink stateHide' id='mogeolHide'></a><a href='#mtgeol;hide' class='hidelink stateHide' id='mtgeolHide'></a><a href='#negeol;hide' class='hidelink stateHide' id='negeolHide'></a><a href='#nvgeol;hide' class='hidelink stateHide' id='nvgeolHide'></a><a href='#nhgeol;hide' class='hidelink stateHide' id='nhgeolHide'></a><a href='#njgeol;hide' class='hidelink stateHide' id='njgeolHide'></a><a href='#nmgeol;hide' class='hidelink stateHide' id='nmgeolHide'></a><a href='#nygeol;hide' class='hidelink stateHide' id='nygeolHide'></a><a href='#ncgeol;hide' class='hidelink stateHide' id='ncgeolHide'></a><a href='#ndgeol;hide' class='hidelink stateHide' id='ndgeolHide'></a><a href='#ohgeol;hide' class='hidelink stateHide' id='ohgeolHide'></a><a href='#okgeol;hide' class='hidelink stateHide' id='okgeolHide'></a><a href='#orgeol;hide' class='hidelink stateHide' id='orgeolHide'></a><a href='#pageol;hide' class='hidelink stateHide' id='pageolHide'></a><a href='#rigeol;hide' class='hidelink stateHide' id='rigeolHide'></a><a href='#scgeol;hide' class='hidelink stateHide' id='scgeolHide'></a><a href='#sdgeol;hide' class='hidelink stateHide' id='sdgeolHide'></a><a href='#tngeol;hide' class='hidelink stateHide' id='tngeolHide'></a><a href='#txgeol;hide' class='hidelink stateHide' id='txgeolHide'></a><a href='#utgeol;hide' class='hidelink stateHide' id='utgeolHide'></a><a href='#vtgeol;hide' class='hidelink stateHide' id='vtgeolHide'></a><a href='#vageol;hide' class='hidelink stateHide' id='vageolHide'></a><a href='#wageol;hide' class='hidelink stateHide' id='wageolHide'></a><a href='#wvgeol;hide' class='hidelink stateHide' id='wvgeolHide'></a><a href='#wigeol;hide' class='hidelink stateHide' id='wigeolHide'></a><a href='#wygeol;hide' class='hidelink stateHide' id='wygeolHide'></a><a href='#macrostrat;hide' class='hidelink' id='macrostratHide'></a><a href='#north;hide' class='hidelink' id='northHide'></a><a href='#south;hide' class='hidelink' id='southHide'></a>`
var linkClass = document.getElementsByClassName('layerLinks');
for (var i = 0; i < linkClass.length; i++) {
    linkClass[i].innerHTML = links;
}

};
function toggleSet() {
    var toggleOn = document.getElementsByClassName('layerToggle');
    for (var i = 0; i < toggleOn.length; i++) {
        if(toggleOn[i].checked){
            document.getElementById(toggleOn[i].id + 'Show').click();
        } else {
            document.getElementById(toggleOn[i].id + 'Hide').click();
        }
    };
};
  function playPauseVideo(clicked_id) {
    var playButton = document.getElementsByClassName("playoverlay");
    var mediaIcon = document.getElementsByClassName("mediaIcon");
    var video = document.getElementById('video'+ clicked_id);
    var length = video.duration;
    var progressbar = document.getElementById('progressbar' + clicked_id);
    if (video.paused){
        for(i = 0; i < playButton.length; i++) {
            playButton[i].style.display = 'none';
        }
        for(i = 0; i < mediaIcon.length; i++) {
            mediaIcon[i].style.display = 'block';
        }
        video.play();
    } else {
        for(i = 0; i < playButton.length; i++) {
            playButton[i].style.display = 'block';
        }
        for(i = 0; i < mediaIcon.length; i++) {
            mediaIcon[i].style.display = 'none';
        }
        video.pause();
    }
    video.onended = function() {
        for(i = 0; i < playButton.length; i++) {
            playButton[i].style.display = 'block';
        }
        for(i = 0; i < mediaIcon.length; i++) {
            mediaIcon[i].style.display = 'none';
        }
        video.load();
    };
    document.querySelectorAll('.prev').forEach(item => {
        item.addEventListener('click', event => {
            for(i = 0; i < playButton.length; i++) {
            playButton[i].style.display = 'block';
        }
        for(i = 0; i < mediaIcon.length; i++) {
            mediaIcon[i].style.display = 'none';
        }
            video.load();
            progressbar.MaterialProgress.setProgress(0);
        })
    })
    document.querySelectorAll('.next').forEach(item => {
        item.addEventListener('click', event => {
            for(i = 0; i < playButton.length; i++) {
            playButton[i].style.display = 'block';
        }
        for(i = 0; i < mediaIcon.length; i++) {
            mediaIcon[i].style.display = 'none';
        }
            video.load();
            mediaTimmer(video, clicked_id, length);
            progressbar.MaterialProgress.setProgress(0);
        })
    })
//progress bar and times
    video.ontimeupdate = function() {mediaTimmer(video, clicked_id, length)};
};
function mediaTimmer(video, clicked_id, length) {
    var current_time = video.currentTime;

    // calculate total length of value
    var totalLength = calculateTotalValue(length)
    document.getElementById('end-time'+ clicked_id).innerHTML = totalLength;


    // calculate current value time
    var currentTime = calculateCurrentValue(current_time);
    document.getElementById('start-time' + clicked_id).innerHTML = currentTime;

    var progressbar = document.getElementById('progressbar' + clicked_id);
    progressbar.MaterialProgress.setProgress(video.currentTime / video.duration * 100);
    progressbar.addEventListener("click", seek);


    function seek(event) {
        var percent = event.offsetX / this.offsetWidth;
        video.currentTime = percent * video.duration;
        progressbar.value = percent / 100;
    }
    function calculateTotalValue(length) {
    var minutes = Math.floor(length / 60),
        seconds_int = length - minutes * 60,
        seconds_str = seconds_int.toString(),
        seconds = seconds_str.substr(0, 2),
        time = minutes + ':' + seconds

    return time;
    }

    function calculateCurrentValue(currentTime) {
    var current_hour = parseInt(currentTime / 3600) % 24,
        current_minute = parseInt(currentTime / 60) % 60,
        current_seconds_long = currentTime % 60,
        current_seconds = current_seconds_long.toFixed(),
        current_time = (current_minute < 10 ? "0" + current_minute : current_minute) + ":" + (current_seconds < 10 ? "0" + current_seconds : current_seconds);

    return current_time;
    }
}
//audio script
function playPause() {
    var audio = document.getElementById("audioI")
    if (document.getElementById('playIcon').innerHTML  != '<i class="material-icons">play_arrow</i>'){
        document.getElementById('playIcon').innerHTML = '<i class="material-icons">play_arrow</i>';
        document.getElementById('playButton').innerHTML = 'Play';
        audio.pause();
    } else {
        document.getElementById('playIcon').innerHTML = '<i class="material-icons">pause</i>';
        document.getElementById('playButton').innerHTML = 'Pause';
        audio.play();
    }
    audio.onended = function() {
        document.getElementById('playIcon').innerHTML = '<i class="material-icons">play_arrow</i>';
        document.getElementById('playButton').innerHTML = 'Play';
        audio.pause();
    };
};
function classchange(){
    var contentClass = document.getElementById("content");
    var element = document.getElementById("layers");
    var mediaHide = document.getElementsByClassName("mediaContain");
    var layerIcon = document.getElementById("layerIcon");
    var layerText = document.getElementById("layerText");
    if(contentClass.offsetHeight > 100) {
        for(i = 0; i < mediaHide.length; i++) {
            mediaHide[i].style.display = 'none';
        }
        element.classList.remove("close");
        contentClass.classList.remove("content");
        contentClass.classList.add("close2");
        element.classList.add("slider");
        layerIcon.innerHTML = 'vertical_split';
        layerText.innerHTML = 'Panel';
    }else{
        contentClass.classList.remove("close2");
        for(i = 0; i < mediaHide.length; i++) {
            mediaHide[i].style.display = 'block';
        }
        element.classList.remove("slider");
        element.classList.add("close");
        layerIcon.innerHTML = 'layers';
        layerText.innerHTML = 'Layers';
    }

}
//simple carousel script
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
function toggleSwitch(clicked_id){
    var mapOverlay = document.getElementById(clicked_id);
    var togglePanel = document.getElementById(clicked_id + '_panel');
    if(mapOverlay.checked){
        document.getElementById(clicked_id + 'Show').click();
        if(togglePanel !== null){
            togglePanel.click();
        }
    }else{
        document.getElementById(clicked_id + 'Hide').click();
        if(togglePanel !== null){
            togglePanel.click();
        }
    }
};
function togglePanel(clicked_name){
    var layerClick = document.getElementById(clicked_name);
    console.log(layerClick);
    layerClick.click();
}
