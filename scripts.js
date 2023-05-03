//prompt that asks for custom speed for YT playback
// also removes YT consent dialog(might not be needed since YT doesn't use it anymore)
(function () {
  var isYT = window.location.href.indexOf("youtube.com");
  if (isYT !== -1) {
    var e = document.getElementById("consent-bump");
    if (e) {
      e.parentComponent.removeChild(e);
    }
    var playbackSpeed = prompt("Choose desired speed");
    document.getElementsByTagName("video")[0].playbackRate = playbackSpeed;
    document.getElementsByTagName("video")[0].play();
  }
})();

// use the NSFW version of YT (taken from the site)
(function () {
  var originalBaseURL = window.location.href;
  var isyt = originalBaseURL.indexOf("youtube.com");
  if (isyt != -1 && originalBaseURL.indexOf("nsfwyoutube.com") == -1) {
    var http_url = originalBaseURL.replace("youtube.com", "nsfwyoutube.com");
    window.location = http_url;
  } else {
    alert("You have to be on youtube.com for this to work!");
  }
})();
