let songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3",
    "song4.mp3",
    "song5.mp3",
    "song6.mp3"    
];


const musicPlayer = () => {
    const list = document.createElement('ol');
    
    for(i = 0; i < songs.length; i++) {
        const item = document.createElement('li');
        const text = document.createTextNode(songs[i]);
        item.appendChild(text);
        list.appendChild(item)

    }
    return list
}


const songList = document.getElementById('songList');
songList.appendChild(musicPlayer());

const player = document.getElementById('player');

const links = document.querySelectorAll('li');
for(link of links) {
    link.addEventListener('click', setSong );

}
 function setSong(e) {
    document.querySelector('#headphones').classList.remove('animate')
    const source = document.getElementById('source');
    source.src = 'Music/'+ e.target.innerText;
    document.querySelector('#currentSong').innerText = `Now Playing :-
    ${e.target.innerText}`
   
    player.load()
    player.play()

    document.querySelector('#headphones').classList.add('animate')
}

const playAudio = () => {
    if(player.readyState) {
        player.play()
    }
}


const pauseAudio = () => {
    player.pause()
}

const slider = document.getElementById('volumeSlider');
slider.oninput = function (e) {
    const volume = e.target.value;
    player.volume = volume;
}

const updateProgress = () => {
    if(player.currentTime > 0) {
        const progressBar = document.getElementById('progress');
        progressBar.value = (player.currentTime / player.duration) * 100;
    }
    
}
