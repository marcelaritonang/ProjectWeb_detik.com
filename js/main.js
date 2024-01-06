jQuery(document).ready(function( $ ) {
    // Reviews Scroll
    let nav = document.querySelector(".reviews");
    let left = document.querySelector(".scroll-left");
    let right = document.querySelector(".scroll-right");
    
    let idx;
    let speed = 5;
    
    left.addEventListener("mouseenter", function(){
      idx = setInterval(() => nav.scrollLeft -= speed, 10);
    });
    
    left.addEventListener("mouseleave", function(){
      clearInterval(idx);
    });
    
    right.addEventListener("mouseenter", function(){
      idx = setInterval(() => nav.scrollLeft += speed, 10);
    });
    
    right.addEventListener("mouseleave", function(){
      clearInterval(idx);
    });
  });