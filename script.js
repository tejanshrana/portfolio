const stylesheet = document.getElementById('stylesheet')
const themeButton = document.getElementById('theme-switch')
const themeIcon = document.getElementById('theme-icon')
const testButton = document.getElementById('test')
const menuBtn = document.querySelector('.burger-menu')
const nav = document.querySelector('.nav-links')

const navLinks = document.querySelectorAll('.nav-link')

const awsImg = document.getElementById('aws-logo');
const arachasImg = document.getElementById('arachas-logo');
const nameAsLogo = document.getElementById('name-as-logo')
const companyWrapper = document.querySelectorAll('.company-wrapper')
const expandingCards = document.querySelectorAll('.expanding-card')
const darkIcon = "fa-sun";
const lightIcon = "fa-moon";
const lightTheme = "https://d3o36tnwurb13j.cloudfront.net/light-variables.css";
const darkTheme = "https://d3o36tnwurb13j.cloudfront.net/dark-variables.css";


function themeSwitch () {
    const currentStyle = stylesheet.href
    if (currentStyle.indexOf(lightTheme) !== -1) {
        stylesheet.href = darkTheme
        themeIcon.classList.remove(lightIcon)
        themeIcon.classList.add(darkIcon)
        awsImg.src = "https://d3o36tnwurb13j.cloudfront.net/assets/icons/Amazon_Web_Services_Logo_white.svg.png"
        arachasImg.src = "https://d3o36tnwurb13j.cloudfront.net/assets/icons/Arachas_White_2019.png"
    }
    else {
        stylesheet.href = lightTheme
        themeIcon.classList.remove(darkIcon)
        themeIcon.classList.add(lightIcon)
        awsImg.src = "https://d3o36tnwurb13j.cloudfront.net/assets/icons/Amazon_Web_Services_Logo.svg.png"
        arachasImg.src = "https://d3o36tnwurb13j.cloudfront.net/assets/icons/Arachas_2019.png"
    }

}

themeButton.addEventListener('click', themeSwitch)

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open')
    nav.classList.toggle('nav-active')
    navLinks.forEach(nav.addEventListener('click', ()=>{
        nav.classList.remove('nav-active')
        menuBtn.classList.remove('open')
    }))
})

var clickCount = 0;
nameAsLogo.addEventListener('click', () => {
    clickCount++
    console.log(clickCount)
    if (clickCount === 7) {
        clickCount = 0
        nameAsLogo.classList.toggle('fadeEffect');
    }
})

expandingCards.forEach(card => card.addEventListener('click', () => {

    card.classList.toggle('active')
})
)
companyWrapper.forEach(wrapper => wrapper.addEventListener('click', () => {

    wrapper.classList.toggle('active-com')
})
)

const contactForm = document.getElementById("contact-form")
const thankYouMsg = document.getElementById("thank-you-msg")

async function sendEmail(body) {

    const settings = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    };
     try {
        const fetchResponse = await fetch(`https://s1rssn6hz1.execute-api.eu-west-1.amazonaws.com/email`, settings);
        const data = await fetchResponse.json();

        thankYouMsg.classList.add('active')
        contactForm.classList.add('inactive')
         contactForm.reset()

    } catch (e) {
        return e;
    }
}

const msgBack = document.getElementById("msg-again")
msgBack.addEventListener('click', () => {
        thankYouMsg.classList.remove('active')
        contactForm.classList.remove('inactive')

})


const submitButton = document.getElementById("submit-button")
document.addEventListener('submit', event => {
    event.preventDefault();
    sendEmail(Object.fromEntries(new FormData(event.target)))

})


