let messageContainer = document.querySelector(".messages-cont")
let imageFile = document.getElementById("image")
let mediaText = document.getElementById("media-name")
let replyField = document.getElementById("reply")


let xhr = new XMLHttpRequest();
let messageIndicator = document.querySelector(".new-message-indicator")

imageFile.addEventListener("change", ()=>{
    mediaText.textContent = "Image to be shared: " + imageFile.files[0].name
})

function loadChat() {
    xhr.open('GET', 'retrieve-chats.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            messageContainer.innerHTML = xhr.responseText;
            messageContainer.scrollTop = messageContainer.scrollHeight
            
        }
    }
    xhr.send()
}

let interval = setInterval(loadChat, 3000)

messageIndicator.addEventListener("click", ()=>{
    messageContainer.scrollTop = messageContainer.scrollHeight
})

messageContainer.addEventListener("scroll", ()=>{
    clearInterval(interval)
    if (messageContainer.scrollHeight - messageContainer.scrollTop === messageContainer.clientHeight) {
        setTimeout(()=>{
            interval = setInterval(loadChat, 5000)
        }, 1000)
    }
})

loadChat()



let menuEl = document.querySelector(".menu")
let menuToggle = document.querySelectorAll(".menu-toggle")

for (let i = 0; i < menuToggle.length; i++) {
    menuToggle[i].addEventListener("click", ()=>{
        menuEl.classList.toggle("active")
    })
    
}




