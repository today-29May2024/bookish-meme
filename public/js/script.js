let isLightMode = true;
let btnTheme = document.querySelector("#btn-theme");
let rangeFontSizeChanger = document.querySelector("#font-size-changer");
let link = document.querySelector(".article-link");

const value = document.querySelector("#value");
value.textContent = "large";


const currentURL = window.location.href;

let inDarkMode = () => {
    btnTheme.textContent = "Switch to Dark Mode";
    document.body.style.background = "white";
    document.body.style.color = "black";
    if (currentURL.endsWith("index.html")) {
        link.style.color = "black";
    }
    isLightMode = false;
};


let inLightMode = () => {
    btnTheme.textContent = "Switch to Light Mode";
    document.body.style.background = "black";
    document.body.style.color = "white";
    if (currentURL.endsWith("index.html")) {
        link.style.color = "black";
    }
    isLightMode = true;
};

let fontSizeChanger = () => {
    document.body.style.fontSize = "small";
};

btnTheme.addEventListener("click", () => {
  if (isLightMode) {
    inDarkMode();
  } else {
    inLightMode();
  }
});

rangeFontSizeChanger.addEventListener("input", (e) => {
    let fontSizes = ["xx-small", "x-small", "small", "medium",
        "large", "x-large", "xx-large"
    ];
    for (let i = 0; i < fontSizes.length; i++) {
        if (e.target.value == i) {
            document.body.style.fontSize = fontSizes[i];
            value.textContent = fontSizes[i];
            break;
        }
    }
});

