let profileImage = document.getElementById("pfp")
let profileImageText = document.getElementById("image-name")

profileImage.addEventListener("change", ()=>{
    profileImageText.textContent = "Uploaded Image: " + profileImage.files[0].name
})