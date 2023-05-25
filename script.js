const squareLogo = document.getElementById("square_logo");
squareLogo.addEventListener("click", ()=> {
  let titles = document.querySelectorAll(".titles");
  const body = document.querySelector("body");
  titles.forEach((div) => {
    if(div.style.display === "none"){
        div.style.display= "inline";

    }else{
        div.style.display= "none";
    }}
    );
});

const themes = {
    light: {
        '--sidebar-bg-color': 'rgb(5, 120, 155)',
        '--sidebar-color': 'white',
        '--second-bg-color':'orange',
        '--upper-color': 'black',
        '--light-theme-shadow':'rgba(255, 255, 255, 0.4)',
        '--main-bg-color':'lightgrey',
        '--white-to-grey':'white'
    },
    dark: {
        '--sidebar-bg-color': 'orange', /*teal*/
        '--sidebar-color': '#121212', /*white*/
        '--second-bg-color':'rgb(5, 120, 155)',/*orange*/
        '--upper-color': '#121212', /*white*/
        '--light-theme-shadow':'rgba(2, 2, 2, 0.4)',
        '--white-to-grey':'#222222',
        '--black-to-white':'white',
        '--main-bg-color':'#222222'
    },
  };

// let element = document.querySelector(':root');
// console.log(element);
// element.styleSheets[0].insertRule(':root {--sidebar-bg-color: orange;--sidebar-color: #121212;--second-bg-color:rgb(5, 120, 155); --upper-color: #121212;--light-theme-shadow:rgba(2, 2, 2, 0.4);--white-to-grey:#222222;--black-to-white:white;--main-bg-color:#222222;}');
