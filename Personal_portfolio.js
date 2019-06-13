 console.clear();
 window.addEventListener("mousemove", animate);

 function animate(event) {
     var x = event.clientX;
     var y = event.clientY;
     var randomNum, randomColor, size, el;
     //  randomColor = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() + ")";
     randomColorAlpha = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ", 0.4)";
     randomColor = "#" + Math.random().toString(16).slice(-6);;

     size = Math.random() * 20;
     randomNum = Math.random() * 30;
     el = document.createElement("div");

     document.body.appendChild(el);
     el.classList.add("shape");
     el.setAttribute("style", "z-index:99999;position:absolute;background:" + randomColor + ";width:" + size +
         "px;height:" + size + "px;left:" +
         x + "px;top:" +
         y + "px;box-shadow:0 0 50px " + randomColorAlpha + ";border-radius:" + Math.random() * 100 + "%;transform:rotate(" + Math.random() * 180 +
         "deg) scale(" + Math.random() * 2 + ") translate(" + randomNum + "px)");


     if (document.getElementsByClassName("shape")) {
         var frames, frameCount, i, interval;
         frames = document.getElementsByClassName("shape");
         frameCount = frames.length;
         i = 0;
         interval = setInterval(function () {
             if (frameCount > 8) {
                 document.getElementById("load").removeChild(frames[i]);
                 clearInterval(interval);
                 console.clear();
                 //  for (i = 9; i >= 0; i--) {
                 //      frames[i].style.opacity = (i / 0.9) - i;
                 //      frames[i].style.opacity = (frames[i].style.opacity).subsrt(0, 3);
                 //  }
             }
         })
     }
 }



 /*
 window.addEventListener("mousemove", animate);

 function animate(event) {
     var x = event.clientX;
     var y = event.clientY;
     var size, el;
     // randomColor = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() + ")";
     // randomColorAlpha = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ", 0.4)";
     // randomColor = "#" + Math.random().toString(16).slice(-6);;

     size = Math.random() * 20;
     // randomNum = Math.random() * 30;
     el = document.createElement("div");

     document.body.appendChild(el);
     el.classList.add("shape");
     el.setAttribute("style", "z-index:99999;position:absolute;background:rgb(70, 165, 158);width:" + size +
         "px;height:" + size + "px;left:" +
         x + "px;top:" +
         y + "px;border-radius:" + Math.random() * 100 + "%");
     // box - shadow: 0 0 " + size + "px rgba(255, 165, 0, 0.5)

    if (document.getElementsByClassName("shape")) {
         var frames, frameCount, i, interval;
         frames = document.getElementsByClassName("shape");
         frameCount = frames.length;
         i = 0;
         interval = setInterval(function () {
             if (frameCount > 8) {
                 document.getElementById("load").removeChild(frames[i]);
                 clearInterval(interval);
                 //  for (i = 9; i >= 0; i--) {
                 //      frames[i].style.opacity = (i / 0.9) - i;
                 //      frames[i].style.opacity = (frames[i].style.opacity).subsrt(0, 3);
                 //  }
             }
         })
     }
 }
 */
