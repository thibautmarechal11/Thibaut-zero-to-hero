let songs = [];
// On va chercher les musiques sur notre API
fetch('http://localhost:5031/api/musiques')
    .then(reponse => reponse.json()) // On transforme la réponse du serveur en format JSON (lisible par JS)
    .then(donnees => {
        songs = donnees; // On remplit notre liste vide avec les musiques de l'API
        console.log("Musiques chargées depuis l'API :", songs);
        
        // On met à jour l'affichage maintenant qu'on a les données
        updatePlayerInfo();
    }); 
let currentSongIndex = 0; // On commence avec la première chanson de la liste
let currentSong = new Audio(); // On crée un objet Audio pour la première chanson

// 1. On récupère le bouton Play dans le HTML grâce à sa classe
const playButton = document.querySelector('.play-button');
const forwardButton = document.querySelector('.forward-button');
const backwardButton = document.querySelector('.backward-button');
const currentCoverAlbum = document.getElementById('current-cover-album');
const currentSongTitle = document.getElementById('current-song-title');
const currentSongArtist = document.getElementById('current-song-artist');
const progressBar = document.querySelector('.progress-bar');

function updatePlayerInfo() {
    currentCoverAlbum.src = songs[currentSongIndex].image; // Met à jour l'image de l'album
    currentSongTitle.textContent = songs[currentSongIndex].title; // Met à jour le titre de la chanson
    currentSongArtist.textContent = songs[currentSongIndex].artist; // Met à jour le nom de l'artiste
    currentSong.src = songs[currentSongIndex].file; // Met à jour la source de la chanson
}

// Il attend qu'on clique ('click') sur le bouton pour lancer la fonction
playButton.addEventListener('click', function() {
    
    // 3. On vérifie l'état actuel du bouton
    // Si c'est le triangle (Play)...
    if (playButton.value === '▶️') {
        playButton.value = '⏸️'; // ... on le change en Pause
        currentSong.play(); // Et on lance la musique
        console.log("Musique lancée ! 🎵"); // Petit message pour nous
    } 
    // Sinon (si c'est déjà Pause)...
    else {
        playButton.value = '▶️'; // ... on le remet en Play
        currentSong.pause(); // Et on met la musique en pausea
        console.log("Musique en pause. 🔇");
    }
});
// Example function to demonstrate interactivity
forwardButton.addEventListener('click', function() {
    console.log("Bouton Forward cliqué ! ⏩");
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0; // Revenir à la première chanson si on dépasse la liste
    }
    console.log(currentSongIndex);
    updatePlayerInfo(); // Met à jour les infos de la chanson affichées
    currentSong.src = songs[currentSongIndex].file; // Met à jour la source de la chanson
    currentSong.play(); // Joue la nouvelle chanson
    // Ici, vous pouvez ajouter la logique pour passer à la chanson suivante

});
backwardButton.addEventListener('click', function() {
    console.log("Bouton Backward cliqué ! ⏪");
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1; // Revenir à la dernière chanson si on dépasse la liste
    }
    console.log(currentSongIndex);
    updatePlayerInfo(); // Met à jour les infos de la chanson affichées 
    currentSong.src = songs[currentSongIndex].file; // Met à jour la source de la chanson
    currentSong.play(); // Joue la nouvelle chanson
});