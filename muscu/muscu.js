var prevScrollpos = window.pageYOffset;

let NavbarAnimation = () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.backgroundColor = "whitesmoke";
    document.getElementById("navbar").style.color = "black";
    console.log('Cette fonction fait quelque chose');
    
    // const collection = document.getElementsByClassName("link");
    // for (let i = 0; i < collection.length; i++) {
      // collection[i].style.color = "black";
    // }

  TransitionEvent.backgroundColor;
    
  } else {
    document.getElementById("navbar").style.top = "-156px";
    console.log('Cette fonction fait quelque chose');
  }
  prevScrollpos = currentScrollPos;

  if (prevScrollpos == 0){
    document.getElementById("navbar").style.backgroundColor = "#1fe0";
    document.getElementById("navbar").style.color = "whitesmoke";
    console.log('Cette fonction fait quelque chose');

    // const collection = document.getElementsByClassName("link");
    // for (let i = 0; i < collection.length; i++) {
      // collection[i].style.color = "rgb(250, 243, 233)";
    // }
  }

}



let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(black ${scrollValue}%, whitesmoke ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
  
  
  window.onscroll = function() {
    calcScrollValue();
    NavbarAnimation();
  }


