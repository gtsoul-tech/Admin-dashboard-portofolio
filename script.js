const squareLogo = document.getElementById("square_logo");
squareLogo.addEventListener("click", ()=> {
  let titles = document.querySelectorAll(".titles");
  titles.forEach((div) => {
    if(div.style.display === "none"){
        div.style.display= "inline";
    }else{
        console.log(div)
        div.style.display= "none";
    }}
    );
});
function setLightTheme() {
    localStorage.setItem('theme', 'light_theme');
    document.documentElement.className = 'light_theme';
}
function setDarkTheme() {
    localStorage.setItem('theme', 'dark_theme');
    document.documentElement.className = 'dark_theme';
}