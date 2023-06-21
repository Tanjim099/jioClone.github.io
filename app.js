const user_profile = document.getElementById("user_profile");
user_profile.addEventListener("click", () => {
    const login_box = document.getElementById("login_box");
    login_box.classList.toggle("active");
});






let trendingMALeftBtn = document.getElementById("trending_m_a_left");
let trendingMARightBtn = document.getElementById("trending_m_a_right");
let cards = document.getElementsByClassName("cards")[0];
let search = document.getElementsByClassName("search")[0];



trendingMALeftBtn.addEventListener("click", () => {
    cards.scrollLeft -= 400
})

trendingMARightBtn.addEventListener("click", () => {
    cards.scrollLeft += 400
});


const bMArrowRightBtn = document.getElementById("bmarrow_right");
const bMArrowLeftBtn = document.getElementById("bmarrow_left");
let bollywoodMoviesCards = document.getElementById("bollywoodmoviescards");

bMArrowRightBtn.addEventListener("click", ()=>{
    bollywoodMoviesCards.scrollLeft += 400
});

bMArrowLeftBtn.addEventListener("click", ()=>{
    bollywoodMoviesCards.scrollLeft -= 400
})

const hMArrowRightBtn = document.getElementById("hmarrow_right");
const hMArrowLeftBtn = document.getElementById("hmarrow_left");
let hollywoodMoviesCards = document.getElementById("hollywoodcars");

hMArrowRightBtn.addEventListener("click", ()=>{
    hollywoodMoviesCards.scrollLeft += 400
});

hMArrowLeftBtn.addEventListener("click", ()=>{
    hollywoodMoviesCards.scrollLeft -= 400
})


let json_url = "movie.json";
fetch(json_url)
    .then(Response => Response.json())
    .then((data) => {
        // showView(data);
        data.forEach((ele, i) => {
            let { name, imdb, date, sposter, bposter, genre, url } = ele;
            let card = document.createElement("a");
            card.classList.add("card");
            // const v = require("video.html")
            card.href = url
            card.innerHTML =
                `
        <img class="poster" src="${sposter}" alt="${name}">
                <div class="rest-card">
                    <img src="${bposter}" alt="">
                    <div class="cont">
                        <h4>${name}</h4>
                        <div class="sub">
                            <p>${genre}, ${date}</p>
                            <h3><span>IMDB</span><i class="fa fa-star"></i>${imdb}</h3>
                        </div>
                    </div>
                </div>
        
        `;
        card.addEventListener("click",()=>{
            showView(ele);
        })
            cards.appendChild(card);

        });

        const title = document.getElementById("title");
        title.innerText = data[0].name;
        const genre = document.getElementById("gen");
        genre.innerText = data[0].genre;
        const date = document.getElementById("date");
        date.innerText = data[0].date;
        const rateing = document.getElementById("rate");
        rateing.innerHTML = `
        <span>IMDB</span><i class="fa fa-star"></i>${data[0].imdb}
        `;
function showView(data){
     console.log(data.name);
   localStorage.setItem("newMovieData", JSON.stringify(data));
}

        // search data load

        data.forEach((ele) => {
            let { name, imdb, date, sposter, genre, url } = ele;
            let card = document.createElement("a");
            card.classList.add("card");
            card.href = url
            card.innerHTML =
                `
                <img src="${sposter}" alt="${name}">
                <div class="cont">
                    <h3>${name}</h3>
                    <p>${genre}, ${date} , <span>IMDB</span><i class="fa fa-star"></i>${imdb}</p>
                </div>
        `;

            search.appendChild(card)
        });


        // search filter 

        const search_input = document.getElementById("search_input");

        search_input.addEventListener("keyup", () => {
            let filter = search_input.value.toUpperCase();
            let arr = search.getElementsByTagName("a");
            for (let i = 0; i < arr.length; i++) {
                let b = arr[i].getElementsByClassName("cont")[0];
                console.log(arr.textContent);
                let textValue = b.textContent || b.innerText;
                if (textValue.toUpperCase().indexOf(filter) > -1) {
                    arr[i].style.display = "flex";
                    search.style.visibility = "visible";
                    search.style.opacity = 1;
                }
                else {
                    arr[i].style.display = "none";
                }
                if (search_input.value == 0) {
                    search.style.visibility = "hidden";
                    search.style.opacity = 0;
                }
            }
        })
    });




let bollywoodmovies_cards = document.getElementsByClassName("bollywoodmovies_cards")[0];


let bollywoodmovies_cardsjson_url = "bollywoodmovies.json";
fetch(bollywoodmovies_cardsjson_url)
    .then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let { name, imdb, date, sposter, bposter, genre, url } = ele;
            let card = document.createElement("a");
            card.classList.add("card");
            card.href = url
            card.innerHTML =
                `
        <img class="poster" src="${sposter}" alt="${name}">
                <div class="rest-card">
                    <img src="${bposter}" alt="">
                    <div class="cont">
                        <h4>${name}</h4>
                        <div class="sub">
                            <p>${genre}, ${date}</p>
                            <h3><span>IMDB</span><i class="fa fa-star"></i>${imdb}</h3>
                        </div>
                    </div>
                </div>
        
        `;
            bollywoodmovies_cards.appendChild(card);

        });

    })




let hollywoodmovies_cards = document.getElementsByClassName("hollywoodmovies_cards")[0];


let hollywoodmovies_cardsjson_url = "hollywoodmovies.json";
fetch(hollywoodmovies_cardsjson_url)
    .then(Response => Response.json())
    .then((data) => {
        data.forEach((ele, i) => {
            let { name, imdb, date, sposter, bposter, genre, url } = ele;
            let card = document.createElement("a");
            card.classList.add("card");
            card.href = url
            card.innerHTML =
                `
        <img class="poster" src="${sposter}" alt="${name}">
                <div class="rest-card">
                    <img src="${bposter}" alt="">
                    <div class="cont">
                        <h4>${name}</h4>
                        <div class="sub">
                            <p>${genre}, ${date}</p>
                            <h3><span>IMDB</span><i class="fa fa-star"></i>${imdb}</h3>
                        </div>
                    </div>
                </div>
        
        `;
            hollywoodmovies_cards.appendChild(card);

        });

    });


    // movile nav 

    const moreBtn = document.getElementById("morebtn");
    const moreBox = document.getElementById("morebox");
    moreBtn.addEventListener("click", ()=>{
        moreBox.classList.toggle("active")
    })

    moreBox.addEventListener("scroll", ()=>{
        moreBox.removeAttribute("onscroll")
    })
    // const moreBox = document.getElementById("morebox");
    // moreBox.removeAttribute("onscroll")