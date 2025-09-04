const button = document.querySelectorAll(".btn");
const smt = document.querySelector("#submitbtn");
const container= document.getElementsByClassName("container");
const result = document.getElementsByClassName("resultcontainer");
const rate = document.getElementById("reslt");
let value;
button.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        button.forEach((r)=> r.classList.remove("active"));
        e.target.classList.add("active");
        value = e.target.innerText;
        // console.log(value);
    });
        // console.log(e.target) ;
});
smt.addEventListener("click",()=>{
    console.log("clicked");
    console.log(value);
    container[0].style.display="none" ;
    result[0].style.display="block";
    rate.textContent= `${value}`;
});

