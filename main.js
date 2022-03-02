let userName = prompt("Please Enter The User Name:")

let user = document.querySelector("div>span#userName")
userName = userName ? console.log(user.innerHTML = userName) : alert("Kullanıcı Adı Girilmemiş")


let date = new Date()

let saniye = date.getSeconds()
let dakika = date.getMinutes()
let saat = date.getHours()
let gün = date.getDay()
let dateChange = document.querySelector("div#tarih")


switch (gün) {
    case 1:
        gün = "Pazartesi"
        break;
    case 2:
        gün = "Salı"
        break;
    case 3:
        gün = "Perşembe"
        break;
    case 4:
        gün = "Cuma"
        break;
    case 5:
        gün = "Cumartesi"
        break;
    case 6:
        gün = "Pazar"
        break;
    case 7:
        gün = "Pazartesi"
        break;
    default:
        break;
}

dateChange.innerHTML =  `${saat} : ${dakika} : ${saniye} ${gün}`