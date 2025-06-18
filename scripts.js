// YT speed prompt
(function () {
  if (window.location.href.indexOf("youtube.com") !== -1) {
    var defaultSpeed = 2.5;
    var playbackSpeed = prompt(
      `Choose desired speed(blank for ${defaultSpeed}x):`,
    );
    if (!playbackSpeed || isNaN(playbackSpeed)) {
      playbackSpeed = defaultSpeed;
    }
    var player = document.getElementsByTagName("video")[0];
    player.playbackRate = playbackSpeed;
    player.play();
  }
})();

// Remove params
(function () {
  var address = new URL(window.location.href);
  if (address.hostname.indexOf("youtube.com") !== -1) {
    var searchParams = address.searchParams;
    searchParams.delete("start_radio");
    searchParams.delete("list");
    window.location = address.href;
  } else {
    window.location = address.href.replace(address.search, "");
  }
})();
