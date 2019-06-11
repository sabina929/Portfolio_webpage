 window.addEventListener("mousemove", animate);

 function animate(event) {
     var x = event.clientX;
     var y = event.clientY;
     var randomNum, randomColor, size, el;
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


     if (document.querySelectorAll(".shape")) {
         var frames, frameCount, i, interval;
         frames = document.querySelectorAll(".shape");
         frameCount = frames.length;
         i = 0;
         interval = setInterval(function () {
             if (frameCount > 5) {
                 document.getElementById("load").removeChild(frames[i]);
                 clearInterval(interval);
             }
         })
     }
 }
