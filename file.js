// HOME PAGE AUDIO

async function logMovies() {
    let id, chapter;
    for (let i = 1; i <=114; i++) {
        const response = await fetch(`https://api.quran.com/api/v4/chapter_recitations/${i}/${i}`);
        const movies = await response.json();
        link = movies?.audio_file?.audio_url;
        console.log(link);
        document.getElementById(`aud${i}`).setAttribute("src", movies?.audio_file?.audio_url);
    }
}
logMovies();

// HEAD NAV

let header=document.getElementById('header');
let nav_manu=document.getElementById('nav_bx');
function fun(){
    header.style.display="none";
    nav_manu.style.display="block";
}
function fun1(){
    header.style.display="block";
    nav_manu.style.display="none";
}


// Audio

