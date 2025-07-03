async function getEmoji() {
    const res = await fetch("https://api.jikan.moe/v4/seasons/now?sfw")
    const emoji = await res.json()
    animeList = ""
    emoji.data.forEach(anime => {
        animeList += `<h3>${anime.synopsis}</h3>
                    <img src="${anime.images.jpg.large_image_url}" alt="">
                     <button onclick ="saludar('${anime.synopsis}')">Saludar </button>`    
    });
    console.log(animeList)

    document.getElementById("emojy").innerHTML = animeList



    // const html = `<img src="${anime.images.jpg.large_image_url}" alt="">
    //                 <h2>${anime.aired.string}</h2>
    //                 <h3>${anime.synopsis}</h3>
    //                 <button onclick ="saludar('${anime.synopsis}')">Saludar </button>`
    // document.getElementById("emojy").innerHTML += html


}