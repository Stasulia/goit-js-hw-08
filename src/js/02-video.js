import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
//import 

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LS_KEY = "videoplayer-current-time";

const getCurrentTime = function(data) {
   const currentTime = data.seconds;
   localStorage.setItem(LS_KEY, JSON.stringify(currentTime));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(LS_KEY)) || 0);
