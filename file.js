// HOME PAGE AUDIO

async function logMovies() {
    for (let i = 1; i <= 114; i++) {
        const response = await fetch(`https://api.quran.com/api/v4/chapter_recitations/1/${i}`);
        const movies = await response.json();
        link = movies?.audio_file?.audio_url;
        document.getElementById(`aud${i}`).setAttribute("src", movies?.audio_file?.audio_url);
    }
}
// logMovies();

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

// pdf();


async function details() {
    let input = parseInt(document.getElementById("innput").value);
    if (input >= 1 && input <= 114) {
        const response = await fetch(`https://api.quran.com/api/v4/chapters/${input}`);
        const feed = await response.json();
        document.getElementById('displayinfo1').innerHTML = (feed?.chapter?.name_arabic)
        document.getElementById('displayinfo2').innerHTML = (feed?.chapter?.name_simple)
        document.getElementById('displayinfo3').innerHTML = (feed?.chapter?.revelation_order)
        document.getElementById('displayinfo4').innerHTML = (feed?.chapter?.revelation_place)
        document.getElementById('displayinfo5').innerHTML = (feed?.chapter?.verses_count)
        document.getElementById('displayinfo6').innerHTML = (feed?.chapter?.translated_name?.name)
    }
    else {
        const response = await fetch(`https://api.quran.com/api/v4/chapters/${input}`);
        const feed = await response.json();
        document.getElementById("wrong").innerHTML = "Wrong Input Your Input Must Be From 1 - 114";
        document.getElementById("wrong").style.color = "red";
        innput.value = "";
        document.getElementById('displayinfo1').innerHTML = (feed?.chapter?.name_arabic)
        document.getElementById('displayinfo2').innerHTML = (feed?.chapter?.name_simple)
        document.getElementById('displayinfo3').innerHTML = (feed?.chapter?.revelation_order)
        document.getElementById('displayinfo4').innerHTML = (feed?.chapter?.revelation_place)
        document.getElementById('displayinfo5').innerHTML = (feed?.chapter?.verses_count)
        document.getElementById('displayinfo6').innerHTML = (feed?.chapter?.translated_name?.name)
    }
}


async function verses() {
    let list = document.querySelector("#surahs_here > h2");
    let list2=document.querySelector("#surahs_here > p")
    list.remove();
    list2.remove();
    const response = await fetch(`https://api.quran.com/api/v4/quran/verses/indopak`);
    const feed = await response.json();
    let str = feed?.verses[0]?.text_indopak;
    let input_surah = document.getElementById('input_surah').value;
    if (input_surah >= 1 && input_surah <= 114) {
        if(input_surah == 1){
            for (let i = 1; i <= 6; i++) {
                str = str + " " + feed?.verses[i]?.text_indopak;
            }
        }
        else if(input_surah == 2){
            for (let i = 7; i <= 292; i++) {
                str = str + " " + feed?.verses[i]?.text_indopak;
            }
        }
        let element = document.getElementById("surahs_here");
        let para = document.createElement("p");
        let node = document.createTextNode(str);
        para.appendChild(node);
        let heading = document.createElement("h2");
        let node2 = document.createTextNode(`Surah ${input_surah}:`);
        input_surah.value = "";
        heading.appendChild(node2);
        element.appendChild(heading);
        element.appendChild(para);
    }
    else {
        input_surah.value = "";
        let element = document.getElementById("surahs_here");
        let wrong = document.createElement("p");
        let wrong1 = document.createElement("h2");
        let wrongdata = document.createTextNode("The value is Wrong please enter between 1 - 114");
        wrong.appendChild(wrongdata);
        wrong.style.color = "red";
        wrong.style.textAlign = "left";
        wrong.style.fontSize = "18px";
        wrong.style.paddingTop = "11px";
        element.appendChild(wrong);
        element.appendChild(wrong1);
    }
}