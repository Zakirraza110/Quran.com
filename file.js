// HOME PAGE AUDIO

async function logMovies() {
    for (let i = 1; i <= 114; i++) {
        const response = await fetch(`https://api.quran.com/api/v4/chapter_recitations/1/${i}`);
        const movies = await response.json();
        link = movies?.audio_file?.audio_url;
        document.getElementById(`aud${i}`).setAttribute("src", movies?.audio_file?.audio_url);
    }
}
logMovies();

// HEAD NAV

let header = document.getElementById('header');
let nav_manu = document.getElementById('nav_bx');
function fun() {
    nav_manu.style.animation = "navi 1s linear forwards";

}
function fun1() {
    nav_manu.style.animation = "navi1 1s linear forwards";
}


// Audio

function toggledown() {
    document.getElementById('audios1').style.display = 'block';
    document.getElementById('down_arrow1').style.display = 'none';
    document.getElementById('down_arrow1_up').style.display = 'inline';
}
function toggleUp() {
    document.getElementById('audios1').style.display = 'none';
    document.getElementById('down_arrow1_up').style.display = 'none';
    document.getElementById('down_arrow1').style.display = 'inline';
}

function toggledown1() {
    document.getElementById('audios2').style.display = 'block';
    document.getElementById('down_arrow2').style.display = 'none';
    document.getElementById('down_arrow2_up').style.display = 'inline';
}
function toggleUp1() {
    document.getElementById('audios2').style.display = 'none';
    document.getElementById('down_arrow2_up').style.display = 'none';
    document.getElementById('down_arrow2').style.display = 'inline';
}

function toggledown2() {
    document.getElementById('audios3').style.display = 'block';
    document.getElementById('down_arrow3').style.display = 'none';
    document.getElementById('down_arrow3_up').style.display = 'inline';
}
function toggleUp2() {
    document.getElementById('audios3').style.display = 'none';
    document.getElementById('down_arrow3_up').style.display = 'none';
    document.getElementById('down_arrow3').style.display = 'inline';
}

function toggledown3() {
    document.getElementById('audios4').style.display = 'block';
    document.getElementById('down_arrow4').style.display = 'none';
    document.getElementById('down_arrow4_up').style.display = 'inline';
}
function toggleUp3() {
    document.getElementById('audios4').style.display = 'none';
    document.getElementById('down_arrow4_up').style.display = 'none';
    document.getElementById('down_arrow4').style.display = 'inline';
}


async function pdf() {
    for (let j = 1; j <= 114; j++) {
        const response = await fetch(`https://api.quran.com/api/v4/chapters/${j}`);
        const feed = await response.json();
        if (feed) {
            setTimeout(()=>{
                document.getElementById(`heading${j}`).innerText = feed?.chapter?.name_arabic;
                document.getElementById(`spinner${j}`).style.display = 'none';

            },1000)
        } else {
            document.getElementById(`spinner${j}`).style.display = 'block';
        }
    }
}

pdf();