let usersdata = []
let exitCount = 0

function checkProfile() {
    if (localStorage.getItem("nameUser") != null) {
        document.getElementById("logp").style.display = "none"
        document.getElementById("profile").style.display = "block"
        document.getElementById("profile").textContent = localStorage.getItem("nameUser")
        if (window.location.href == "https://mixa7498.github.io/Gymmy/index.html" || window.location.href == "https://mixa7498.github.io/Gymmy/") {
            document.getElementById("regbut").style.display = "none"
            document.getElementById("butabonement").style.display = "block"
        }
    }
}

checkProfile()

function scrollToHandler() {
    document.getElementById("main").scrollIntoView({
        behavior:"smooth"
    });
}

function scrollToFooter() {
    document.getElementById("footer").scrollIntoView({
        behavior:"smooth"
    })
}

function openform() {
    document.getElementById("md").style.display = "block"
}

function openres() {
    document.getElementById("reserve").style.display = "block"
}

function closeres() {
    document.getElementById("reserve").style.display = "none"
}

function openreg() {
    document.getElementById("reg").style.display = "block"

    loginform()
}

function openexit() {
    if (exitCount == 0) {
        document.getElementById("exit").style.display = "block"
        exitCount++
    }else{
        document.getElementById("exit").style.display = "none"
        exitCount = 0
    }
}

function exit() {
        localStorage.clear()
        location.reload()
}

function validateName(name) {
    let regular = /^[а-яА-Я\-]+$/;
    return regular.test(name);
}

function validateEmail(email) {
    let regular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regular.test(email);
}

function validatePassword(pass) {
    let regular = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/;
    return regular.test(pass);
}

function validateTel(tel) {
    let regular = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return regular.test(tel);
}

function registration() { 
    let name = document.getElementById("regn").value
    let pass = document.getElementById("regp").value
    let repPass = document.getElementById("regpp").value
    let email = document.getElementById("regin").value
    let count = 0

    for (let i = 0; i < usersdata.length; i++) {
        if (usersdata[i].email == email) {
            break
        }else{
            count++
        }
    }
    if (count == usersdata.length) {
        if (name != "" && email != "" && pass != "" && repPass != "") {
            if (validateName(name)) {
                document.getElementById("regn").style.borderColor = "white"
                if (validateEmail(email)) {
                    document.getElementById("regin").style.borderColor = "white"
                    if (validatePassword(pass)) {
                        document.getElementById("regp").style.borderColor = "white"
                        if (pass == repPass && pass != "") {
                        opendata()
                        localStorage.setItem("nameUser", name)
                        localStorage.setItem("emailUser", email)
                        post()
                        closereg()
                        }else{
                            document.getElementById("regp").style.borderColor = "red"
                            document.getElementById("regpp").style.borderColor = "red"
                        }
                    }else{
                        document.getElementById("regp").style.borderColor = "red"
                    }
                }else{
                    document.getElementById("regin").style.borderColor = "red"
                }
            }else{
                document.getElementById("regn").style.borderColor = "red"
            }
        }else{
            document.getElementById("regn").style.borderColor = "red"
            document.getElementById("regin").style.borderColor = "red"
            document.getElementById("regp").style.borderColor = "red"
            document.getElementById("regpp").style.borderColor = "red"
        }
    }else{
        toggleForms()
        document.getElementById("loginin").value = email
    }
}

function post() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxCccfkV2nXyjVsH5z0JRVRmXlawmYsE3JKox_X5VC80-iFDxq4LE0EswzxqmBGvAbX/exec'
    const form = document.getElementById('submit-to-google-sheet')

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
}

function reserve() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz507P832Di9XdFL4uZ75Bwfv_QHaMdepOANacJCEOfxcbbSK5-6guDeKw6VYcPc8fAbw/exec'
    const form = document.forms['formres']

    form.addEventListener('submit', e => {
        e.preventDefault()

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
    })
    opendata()
    closeres()
}

function consult() {
    let name = document.getElementById("cname").value;
    let tel = document.getElementById("ctel").value;

    if (validateName(name)) {
        document.getElementById("cname").style.borderColor = "white"
        if (validateTel(tel)) {
            postConsult()
            opendata()
            closeform()
        }else{
            document.getElementById("ctel").style.borderColor = "red"
        }
    }else{
        document.getElementById("cname").style.borderColor = "red"
    }
}

function postConsult() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzGbjRtfo93CA__z4yanGQf-ez1gNcDvCMNYroRBnco-1DQ-hc07VNdYRYwJcfza7hkGQ/exec'
    const form = document.forms['consult']

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
}

function openlogin() {
    document.getElementById("login").style.display = "block"

    loginform()
}

function closeform() {
    document.getElementById("md").style.display = "none"
    document.getElementById('formin1').value = '';
    document.getElementById('formin2').value = '';
}

function opendata() {
    document.getElementById("data").style.display = "block"
}

function closedata() {
    document.getElementById("data").style.display = "none"
    location.reload()
}

function closereg() {
    document.getElementById("reg").style.display = "none"
    document.getElementById('regp').value = '';
    document.getElementById('regpp').value = '';
    document.getElementById('regin').value = '';
    document.getElementById('regn').value = '';
}

function closelogin() {
    document.getElementById("login").style.display = "none"
    document.getElementById('loginin').value = '';
    document.getElementById('logininp').value = '';
}

function toggleForms() {
    var login= document.getElementById('login');
    var reg = document.getElementById('reg');

    if (login.style.display === 'block') {
        login.style.display = 'none';
        reg.style.display = 'block';
        document.getElementById('loginin').value = '';
        document.getElementById('logininp').value = '';
    } else {
        login.style.display = 'block';
        reg.style.display = 'none';
        document.getElementById('regp').value = '';
        document.getElementById('regpp').value = '';
        document.getElementById('regin').value = '';
        document.getElementById('regn').value = '';

        loginform()
    }
}

function loginform() {
    (function () {
        var app = "https://script.google.com/macros/s/AKfycbyLwIj6ld_kJFcid2Z_l2ovUq6XZZr9BqyyzQHTojVhjxPPQGdznWgBOook1lD-Jny5Iw/exec",
        output = [],
        xhr = new XMLHttpRequest();
        xhr.open('GET', app);
        xhr.onreadystatechange = function() {
        
            if (xhr.readyState !== 4) return;

            if (xhr.status == 200) {
                try {
                    var r = JSON.parse(xhr.responseText),
                        result = r["result"];
                    for (var i = 0; i < result.length; i++){
                        var obj = r["result"][i];
                        output.push({name:obj[0],email:obj[1],password:obj[2]})
                    }
                } catch(e) {}
            } 
        
        usersdata = output

        }
        xhr.send()
    })()
}

function logining() {
    let email = document.getElementById("loginin").value
    let password = document.getElementById("logininp").value

    for (let i = 0; i < usersdata.length; i++) {
        if (usersdata[i].email == email && usersdata[i].password == password) {
            localStorage.setItem("nameUser", usersdata[i].name)
            localStorage.setItem("emailUser", usersdata[i].email)
            opendata()
            closelogin()
        }
    }
}

const prices = document.querySelectorAll('.baby');
let uname = document.getElementById('uname');
let umail = document.getElementById('umail');
let Name = document.getElementById('aname');
let Duration = document.getElementById('adur');
let cost = document.getElementById('acost');

prices.forEach(e => {
    e.addEventListener('click', () => {
        if (localStorage.getItem("nameUser") != null) {
            let subscription = e.getAttribute("data-name") 
            let duration = e.getAttribute("data-duration")
            let price = e.getAttribute("data-price")

            Name.value = subscription
            Duration.value = duration
            cost.value = price
            uname.value = localStorage.getItem("nameUser")
            umail.value = localStorage.getItem("emailUser")
            openres()
        }else{
            openreg()
        }
    });
});
