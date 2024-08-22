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

// NAV

document.getElementById('menu_bar_open').addEventListener('click', openmenu = () => {
    document.getElementById('nav_items').style.top = "13%";
    document.getElementById('menu_bar_close').style.display = "flex";
    document.getElementById('menu_bar_open').style.display = "none";
})

document.getElementById('menu_bar_close').addEventListener('click', closemenu = () => {
    document.getElementById('nav_items').style.top = "-74%";
    document.getElementById('menu_bar_open').style.display = "flex";
    document.getElementById('menu_bar_close').style.display = "none";
})

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
            setTimeout(() => {
                document.getElementById(`heading${j}`).innerText = feed?.chapter?.name_arabic;
                document.getElementById(`spinner${j}`).style.display = 'none';

            }, 1000)
        } else {
            document.getElementById(`spinner${j}`).style.display = 'block';
        }
    }
}

pdf();


async function details() {
    let input=parseInt(document.getElementById("innput").value) ;
    if(input>=1 && input<=114){
        const response = await fetch(`https://api.quran.com/api/v4/chapters/${input}`);
        const feed = await response.json();
        document.getElementById('displayinfo1').innerHTML=(feed?.chapter?.name_arabic)
        document.getElementById('displayinfo2').innerHTML=(feed?.chapter?.name_simple)
        document.getElementById('displayinfo3').innerHTML=(feed?.chapter?.revelation_order)
        document.getElementById('displayinfo4').innerHTML=(feed?.chapter?.revelation_place)
        document.getElementById('displayinfo5').innerHTML=(feed?.chapter?.verses_count)
        document.getElementById('displayinfo6').innerHTML=(feed?.chapter?.translated_name?.name)
    }
    else{
        const response = await fetch(`https://api.quran.com/api/v4/chapters/${input}`);
        const feed = await response.json();
        document.getElementById("wrong").innerHTML="Wrong Input Your Input Must Be From 1 - 114";
        document.getElementById("wrong").style.color="red";
        innput.value="";
        document.getElementById('displayinfo1').innerHTML=(feed?.chapter?.name_arabic)
        document.getElementById('displayinfo2').innerHTML=(feed?.chapter?.name_simple)
        document.getElementById('displayinfo3').innerHTML=(feed?.chapter?.revelation_order)
        document.getElementById('displayinfo4').innerHTML=(feed?.chapter?.revelation_place)
        document.getElementById('displayinfo5').innerHTML=(feed?.chapter?.verses_count)
        document.getElementById('displayinfo6').innerHTML=(feed?.chapter?.translated_name?.name)
    }
}