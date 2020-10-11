// variables
const nav = document.querySelector(".nav");
const skillsDiv = document.querySelector(".skills");
const progress = document.querySelectorAll(".progress");
// form variables
const msgForm = document.querySelector("#msgForm");
const clientName = msgForm.querySelector("#clientName");
const clientNeed = msgForm.querySelector("#clientNeed");
const clientDes = msgForm.querySelector("#clientDes");
const submitMsg = msgForm.querySelector(".sendMsg");

// init functions
appInit();
function appInit() {
    
}

// listeners
eventListener();

function eventListener() {
    // inputs events
    clientName.addEventListener("blur", validateInput);
    clientNeed.addEventListener("blur", validateInput);
    clientDes.addEventListener("blur", validateInput);
    // window event
    window.addEventListener("scroll", stickNav);
}

// functions
function validateInput() {
    // check if inputs contains text
    if(clientDes.value !== "" && clientName.value !== "" && clientNeed.value !== "") {
        // activate send message function
        sendMsg();
    }
}

function stickNav() {
    // sticky nav
    if(window.pageYOffset > nav.offsetTop) {
        nav.classList.add("sticky")
    } else {
        nav.classList.remove("sticky")
    }

    // loading progress
    if(window.pageYOffset > (skillsDiv.offsetTop - 20) ) {
        progress[0].style.width = "90%";
        progress[1].style.width = "95%";
        progress[2].style.width = "85%";
        progress[3].style.width = "92%";

    } else {
        for(let i = 0; i < progress.length; i++) {
            progress[i].style.width = "0";
        }
    }
}

// send message function
function sendMsg() {
    const msgLink = `https://wa.me/+2347017112578?text=Good%20day%20Lod%20My%20name%20is%20${clientName.value}%20What%20I%20want%20is%20${clientNeed.value}%20Here%20is%20my%20detailed%20description:%20${clientDes.value}`;
    submitMsg.href = msgLink;
}