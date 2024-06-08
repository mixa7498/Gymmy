function checkProfile() {
    if (localStorage.getItem("nameUser") != null) {
        document.getElementById("regbut").style.display = "none"
        document.getElementById("butabonement").style.display = "block"
        }
}

checkProfile()