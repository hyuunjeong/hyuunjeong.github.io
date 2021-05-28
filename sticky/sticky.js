const addBtn = document.querySelector("#addBtn");

addBtn.addEventListener("click", ()=>{
    let stickyCont = document.querySelector(".sticky-container");
    let stickySingle = document.createElement('div');
    stickySingle.classList.add('sticky');
    stickySingle.contentEditable = "true";
    stickySingle.setAttribute = ("role","textbox");
    stickySingle.innerHTML = "..."
    stickyCont.appendChild(stickySingle);
  
    // Delete button
    let close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = "X";
    close.contentEditable = "false";
    stickySingle.appendChild(close);
  
    // Delete function. used "for" to bind delete button with 
    // coresponding stickynote
    let stickies = document.getElementsByClassName("sticky");
    let xs = document.getElementsByClassName("close");

    for (let i = 0; i < stickies.length; i++){
        xs[i].addEventListener("click", ()=> {
            console.log(stickies.length);
            stickies[i].style.display = "none";
        });
    }
    
    // Random angle
    function randomNumber(min, max) { 
      return Math.random() * (max - min) + min; 
    }
    let angle = randomNumber(-3,3);
    stickySingle.style.transform = "rotate(" + angle+"deg)";
  
    let color = randomNumber(1,720);
    stickySingle.style.filter = "hue-rotate(" + color +"deg)";
});

