async function logMovies() {
    let id, chapter;
    for (let i = 1; i <= 12; i++) {
        const response = await fetch(`https://api.quran.com/api/v4/chapter_recitations/${i}/${i}`);
        const movies = await response.json();
        link = movies?.audio_file?.audio_url;
        console.log(link);
        document.getElementById(`aud${i}`).setAttribute("src", movies?.audio_file?.audio_url);
    }
}
logMovies();