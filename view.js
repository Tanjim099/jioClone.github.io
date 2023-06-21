const getNewMovieData = localStorage.getItem("newMovieData");
const getedMovieData = JSON.parse(getNewMovieData)
// console.log(getedMovieData);

let vImg= document.getElementById("viewimage");
vImg.setAttribute("src",getedMovieData.sposter);
let vName= document.getElementById("viewname");
vName.innerText=getedMovieData.name;
let vDate = document.getElementById("viewdate")
vDate.innerText=getedMovieData.date;