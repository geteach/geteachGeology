//Video play/Pause/Progress
  function playPauseVideo() {
	var clicked_id = this.getAttribute("name");  
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

	var playPauseVideoClass = document.getElementsByClassName("playPauseVideoClass");
	
	for (var i = 0; i < playPauseVideoClass.length; i++) {
		playPauseVideoClass[i].addEventListener('click', playPauseVideo, false);
	};

//Media Timmer
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
};

//audio script
	var audioPlay = document.getElementsByClassName("audioPlay");
	for (var i = 0; i < audioPlay.length; i++) {
		audioPlay[i].addEventListener('click', playPause, false);
	};

function playPause() {
    var audio = document.getElementById("audioI")
    if (document.getElementById('playIcon').innerHTML  != '<i class="material-icons">pause</i>'){
		document.getElementById('playIcon').innerHTML = '<i class="material-icons">pause</i>';
        document.getElementById('playButton').innerHTML = 'Pause';
        audio.play();

    } else {
		document.getElementById('playIcon').innerHTML = '<i class="material-icons">play_arrow</i>';
        document.getElementById('playButton').innerHTML = 'Play';
        audio.pause();
    }
    audio.onended = function() {
        document.getElementById('playIcon').innerHTML = '<i class="material-icons">play_arrow</i>';
        document.getElementById('playButton').innerHTML = 'Play';
        audio.pause();
    };
};

//Layers Panel Toggle
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

};

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

var plusSlidesClass = document.getElementsByClassName("plusSlidesClass");
for (var i = 0; i < plusSlidesClass.length; i++) {
	plusSlidesClass[i].addEventListener('click',function(){
		plusSlides(1);
	}, false);
};

var minusSlidesClass = document.getElementsByClassName("minusSlidesClass");
for (var i = 0; i < minusSlidesClass.length; i++) {
	minusSlidesClass[i].addEventListener('click',function(){
		plusSlides(-1);
	}, false);
};	