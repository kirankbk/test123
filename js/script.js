/* ==========================================
   DHANDAI ENTERPRISES - SCRIPT.JS
========================================== */

//service
// function openSidebar() {
    // document.getElementById("sidebar").style.width = "250px";
// }

// function closeSidebar() {
    // document.getElementById("sidebar").style.width = "0";
// }

//Email template code 
 // (function () {
	 // debugger
     // emailjs.init({
         // publicKey: "g_3OTSs6gkjMuKPJQ",
     // });
// })()

// document.getElementById("contactForm").addEventListener("submit", function(e) {

    // e.preventDefault();

    // emailjs.send("service_xeib95n", "template_29e1qxv", {
        // name: document.getElementById("name").value,
        // email: document.getElementById("email").value,
        // mobile: document.getElementById("mobile").value,
        // message: document.getElementById("message").value
    // })
    // .then(function(response) {
        // alert("Message sent successfully!");
        // document.getElementById("contactForm").reset();
    // }, function(error) {
        // alert("Failed to send message.");
        // console.log(error);
    // });

// });
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {	
	// debugger
    // anchor.addEventListener("click", function (e) {
		// debugger
        // e.preventDefault();

        // const target = document.querySelector(this.getAttribute("href"));

        // const headerOffset = 80;

        // const elementPosition = target.getBoundingClientRect().top;

        // const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // window.scrollTo({
            // top: offsetPosition,
            // behavior: "smooth"
        // });
    // });
// });

lightGallery(document.getElementById('gallery'),{

    selector:'a',

    download:false,

    zoom:true,

    thumbnail:true,

    speed:500

});
// lightGallery(document.getElementById('gallery'),{

    // speed:500,

    // plugins:[lgZoom,lgVideo],

    // download:false,

    // thumbnail:true,

    // selector:'a'

// });
//calender 
document.addEventListener("DOMContentLoaded", function () {
    updateBankStatus();
});

function updateBankStatus() {
debugger
    const status = document.getElementById("status");
    const statusBadge = document.getElementById("statusBadge");
   
   
    if (!status || !statusBadge) return;

    const today = new Date();
	//const now = new Date()
    const day = today.getDay();      // 0 = Sunday
    const hour = today.getHours();   // 0 - 23

    //const day = today.getDay();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const date = String(today.getDate()).padStart(2, "0");

    const todayDate = `${year}-${month}-${date}`;

    const marathiDays = [
        "रविवार",
        "सोमवार",
        "मंगळवार",
        "बुधवार",
        "गुरुवार",
        "शुक्रवार",
        "शनिवार"
    ];

    // Bank Holidays
    const holidays = {

        "2026-08-15": "प्रजासत्ताक दिन",

        "2026-05-01": "महाराष्ट्र दिन",

        "2026-08-15": "स्वातंत्र्य दिन",

        "2026-08-27": "गणेश चतुर्थी",       

        "2026-10-20": "दसरा",

        "2026-11-09": "दिवाळी लक्ष्मीपूजन",

        "2026-11-10": "दिवाळी बलिप्रतिपदा",

        "2026-12-25": "ख्रिसमस"
    };

    // Sunday
    if (day === 0) {

        status.innerHTML = `🔴 आज ${marathiDays[day]} - बँक बंद आहे`;

        statusBadge.innerHTML = "CLOSED TODAY";

        statusBadge.className = "bank-closed";

        return;
    }
	
	// Example only - update dates every year

    // Holiday
    if (holidays[todayDate]) {

        status.innerHTML = `🔴 आज ${marathiDays[day]} - ${holidays[todayDate]} निमित्त बँक बंद आहे`;

        statusBadge.innerHTML = "BANK HOLIDAY";

        statusBadge.className = "bank-closed";

        return;
    }
	

    // Working Day
    status.innerHTML = `🟢 आज ${marathiDays[day]} - बँक सुरू आहे (सकाळी ९:०० ते सायंकाळी ६:००)`;

    statusBadge.innerHTML = "OPEN NOW";

    statusBadge.className = "bank-open";
	
	// Fixed Holidays

if(day === 26 && month === 1){
    showBanner("🇮🇳 प्रजासत्ताक दिनाच्या हार्दिक शुभेच्छा 🇮🇳","republic-day");
}
else if(day === 15 && month === 8){
    showBanner("🇮🇳 स्वातंत्र्य दिनाच्या हार्दिक शुभेच्छा 🇮🇳","independence-day");
}
else if(day === 25 && month === 12){
    showBanner("🎄 मेरी ख्रिसमस 🎄","christmas");
}
else if(day === 1 && month === 1){
    showBanner("🎉 नववर्षाच्या हार्दिक शुभेच्छा 🎉","new-year");
}
if(day === 27 && month === 8){
    showBanner("🙏 गणेश चतुर्थीच्या हार्दिक शुभेच्छा 🙏","ganesh");
}

if(day === 20 && month === 10){
    showBanner("🪔 दिवाळीच्या हार्दिक शुभेच्छा 🪔","diwali");
}

if(day === 14 && month === 3){
    showBanner("🌈 होळीच्या हार्दिक शुभेच्छा 🌈","holi");
}
	
	// Monday to Saturday
if (hour >= 9 && hour < 18) {
    //status.innerHTML = `🟢 आज ${marathiDays[day]} - बँक सुरू आहे`;
	status.innerHTML = `🟢 आज ${marathiDays[day]} - बँक सुरू आहे (सकाळी ९:०० ते सायंकाळी ६:००)`;
    statusBadge.innerHTML = "OPEN NOW";
    statusBadge.className = "bank-open";
} else {
    status.innerHTML = `🔴 आज ${marathiDays[day]} - सध्या बँक बंद झाली आहे. बँकेच्या कामकाजासाठी कृपया सकाळी ९:०० ते सायंकाळी ६:०० या वेळेत बँकेशी संपर्क साधावा. धन्यवाद.!`;
    statusBadge.innerHTML = "CLOSED NOW";
    statusBadge.className = "bank-closed";
}




}


// document.addEventListener("DOMContentLoaded", function () {
    // updateBankStatus();
	// getdate();
// });

// function updateBankStatus() {

    // const status = document.getElementById("status");
    // const statusBadge = document.getElementById("statusBadge");

    // // If elements are not found, exit safely
    // if (!status || !statusBadge) return;

    // const today = new Date().getDay();
    // // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    // if (today === 0) {
        // status.innerHTML = "🔴 आज रविवार - बँक बंद आहे";
        // statusBadge.innerHTML = "CLOSED TODAY";
        // statusBadge.className = "bank-closed";
    // } else {
        // status.innerHTML = "🟢 आज बँक सुरू आहे";
        // statusBadge.innerHTML = "OPEN NOW";
        // statusBadge.className = "bank-open";
    // }
// }

function showBanner(message, cssClass){
	 const banner = document.getElementById("holidayBanner");
    banner.style.display = "block";
    banner.className = "holiday-banner " + cssClass;
    banner.innerHTML = message;
}

function getdate(){
const today = new Date().getDay();

let message = "";

if(today === 0){

message="🔴 आज रविवार - बँक बंद आहे";

}
else if(today===6){

message="🟢 शनिवार - सकाळी ९ ते दुपारी २";

}
else{

message="🟢 आज बँक सुरू आहे (९:०० AM ते ६:०० PM)";

}
const bankstatus = document.getElementById("status");

bankstatus.className = "success";
bankstatus.innerHTML =message;
//document.getElementById("status").innerHTML=message;
}
// Initialize EmailJS

(function () {
	 debugger
     emailjs.init({
         publicKey: "g_3OTSs6gkjMuKPJQ",
     });
})()


// Form Submit
function formsubmit()
{

debugger
   // e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
        "service_xeib95n",
        "template_w5aaj0a",
        params
    )
    .then(function () {

        // alert("Message Sent Successfully!");
const status = document.getElementById("statusMessage");

status.className = "success";
status.innerHTML = `
    <strong>संदेश यशस्वीरित्या पाठवला!</strong><br>
    आपल्या चौकशीबद्दल धन्यवाद. आम्ही शक्य तितक्या लवकर आपल्याशी संपर्क साधू.
`;

        document.getElementById("contactForm").reset();

    })
    .catch(function (error) {

        console.log(error);
		const status = document.getElementById("statusMessage");
        status.className = "error";
status.innerHTML = `
    <strong>संदेश पाठविण्यात अडचण आली.</strong><br>
    कृपया काही वेळाने पुन्हा प्रयत्न करा.
`;
        // alert("Failed to send message.");

    });

}


//open slider 
function openSidebar() {
	 //getdate();
    document.getElementById("sidebar").classList.add("active");
    document.getElementById("main").classList.add("active");
}

function closeSidebar() {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("main").classList.remove("active");
}

function toggleService(id) {
    let box = document.getElementById(id);

    // hide all boxes first
    document.querySelectorAll(".service-box").forEach(el => {
        if (el.id !== id) {
            el.classList.remove("show");
        }
    });

    // toggle clicked one
    box.classList.toggle("show");
}
/* Sticky Header */
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});

/* Scroll To Top Button */
const topBtn = document.createElement("div");
topBtn.id = "topBtn";
topBtn.innerHTML = "↑";
document.body.appendChild(topBtn);

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* Smooth Scrolling for Menu Links */
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: "smooth"
            });
        }
    });
});

/* Fade-in Animation on Scroll */
const faders = document.querySelectorAll(".card, .gallery img, .why-grid div, .details");

const appearOptions = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        appearOnScroll.unobserve(entry.target);
    });
},
appearOptions);

faders.forEach(fader => {
    fader.classList.add("fade");
    appearOnScroll.observe(fader);
});

/* Simple Mobile Menu Fix (optional enhancement) */
const nav = document.querySelector("nav ul");

document.addEventListener("click", function (e) {
    if (e.target.tagName === "A" && window.innerWidth < 768) {
        nav.style.display = "none";
        setTimeout(() => {
            nav.style.display = "flex";
        }, 300);
    }
});

/* Gallery Click Zoom Effect */
document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", function () {
        this.classList.toggle("zoom");
    });
});

/* Add zoom style dynamically */
const style = document.createElement("style");
style.innerHTML = `
.gallery img.zoom{
    transform:scale(1.2);
    z-index:10;
    position:relative;
    box-shadow:0 20px 40px rgba(0,0,0,0.4);
}
`;
document.head.appendChild(style);

/* Console Message */
console.log("Dhandai Enterprises Website Loaded Successfully 🚀");