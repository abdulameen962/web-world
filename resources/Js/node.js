const tbutton = document.querySelector(".toggle_button");
const bar = document.querySelector(".bar");
const main = document.querySelector(".main");
const toggle = document.querySelector(".toggle");
const total = document.querySelector(".total");
const tnav = document.querySelector(".toggle_navigation");
const navLiink = document.querySelectorAll(".nav_link");
const form = document.querySelector("form");
const email = document.querySelector("#email");
const fname = document.querySelector("#name");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const contact1 = document.querySelectorAll("#contact")[0];
const contact2 = document.querySelectorAll("#contact")[1];
const contact3 = document.querySelectorAll("#contact")[2];
bar.innerHTML = "&#xf0c9";
var toggled = true;
tbutton.onclick = () => {
    if (toggled) {
        toggled = false;
        total.style.opacity = "0.1";
        bar.innerHTML = "&#xf00d";
        tnav.classList.add("toggle_active");
        toggle.style.visibility = "visible";
        for (let x = 0; x < navLiink.length; x++) {
            navLiink[x].style.transition = "all .2s ease-in-out";
            navLiink[x].style.marginRight = "0";
            navLiink[x].style.opacity = "1";
        }
        tnav.style.transition = " all 0.6s";
        return;
    }
    if (!toggled) {
        toggled = true;
        total.style.opacity = "1";
        bar.innerHTML = "&#xf0c9";
        tnav.classList.remove("toggle_active");
        for (let x = 0; x < navLiink.length; x++) {
            navLiink[x].style.transition = "none";
            navLiink[x].style.marginRight = "200px";
            navLiink[x].style.opacity = "0";
        }
        tnav.style.transition = "none";
        toggle.style.visibility = "hidden";
        return;
    }
}
contact1.onclick = () => {
    subject.value = "I want a beautiful and responsive webiste";
}
contact2.onclick = () => {
    subject.value = "I want a ui/ux design";
}
contact3.onclick = () => {
    subject.value = "I want a premium optimization for my webiste(s)";
}
form.onsubmit = (event) => {
    event.preventDefault();
    nameValue = fname.value;
    emailValue = email.value;
    subjectValue = subject.value;
    messageValue = message.value;
    // Email.send({
    //     Host: "smtp.gmail.com",
    //     Username: "sanniabdulameen7@gmail.com",
    //     Password: "Ok",
    //     To: 'sanniabdulameen7@gmail.com',
    //     From: "sanniabdulameen7@gmail.com",
    //     Subject: `${subjectValue} from ${nameValue}`,
    //     Body: messageValue
    // }).then(
    //     message => alert(message)
    // );
    location.href = `mailto:webworld55220@gmail.com?&subject=${nameValue}&body=${messageValue}`;
    nameValue = "";
    emailValue = "";
    subjectValue = "";
    messageValue = "";
}