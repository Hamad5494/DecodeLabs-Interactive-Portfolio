// Hire Me Button

document.getElementById("hireBtn").addEventListener("click", function () {

    alert("Thank you for visiting my portfolio!");
});


// Dark Mode Button

document.getElementById("darkModeBtn").addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");
});


// Show More About Me

document.getElementById("aboutBtn").addEventListener("click", function () {

    const info = document.getElementById("extraInfo");

    if(info.style.display === "none"){

        info.style.display = "block";

    }else{

        info.style.display = "none";
    }
});


// Show Hide Skills

document.getElementById("skillBtn").addEventListener("click", function(){

    const skills = document.getElementById("skillList");

    if(skills.style.display === "none"){

        skills.style.display = "block";

    }else{

        skills.style.display = "none";
    }
});


// Dynamic Heading Change

const heading = document.getElementById("welcomeText");

heading.addEventListener("mouseover", function(){

    heading.innerText = "Welcome To My Interactive Portfolio!";
});

heading.addEventListener("mouseout", function(){

    heading.innerText = "Hello! I am Muhammad Hamad Bilal";
});