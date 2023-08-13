var current = 1;
var heartBeat = document.getElementById("svg_live");
heartBeat.style.opacity = 1;

function toggleVisibility() {
    if (heartBeat.style.opacity == 1) {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                // console.log("down");
                current -= 0.1;
                heartBeat.style.opacity = current;
            }, 500);
        }
        //heartBeat.style.opacity = 0;
    } else {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                // console.log("up");
                current += 0.1;
                heartBeat.style.opacity = current;
            }, 500);
        }
        //heartBeat.style.opacity = 1;
    }
}

// Toggle the visibility every 1000ms (1 second)
setInterval(toggleVisibility, 1000);

// --------------------------------------------------------
// setTimeout(() => {
//     document.getElementsByClassName("css-1wwpako")[0].removeChild(document.getElementsByClassName("css-1wwpako")[0].children[0]);
// }, 5000);
