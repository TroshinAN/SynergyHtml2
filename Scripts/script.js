const planets = [
    {
        id: 1,
        name: "Меркурий",
        desctiption: "Эта планета находится к Солнцу ближе всего. Она маленькая и «шустрая»: совершает оборот вокруг Солнца быстрее всех других планет. Поэтому ее назвали в честь римского быстроногого бога торговли..",
        img: "Images/Planets/01_merkurij.jpg"
    },
    {
        id: 2,
        name: "Венера",
        desctiption: "Эта планета очень красивая и яркая, и ее можно увидеть даже в дневное время и без телескопа, поэтому ее называют Утренней звездой.",
        img: "Images/Planets/02_venera.jpg"
    },
    {
        id: 3,
        name: "Земля",
        desctiption: "Планета, на которой мы все живем, — третья по расстоянию от Солнца и пятая по величине.",
        img: "Images/Planets/03_zemlja.jpg"
    },
    {
        id: 4,
        name: "Марс",
        desctiption: "Самая «изученная» планета Солнечной системы после Земли, которая получила имя древнерисмского бога войны",
        img: "Images/Planets/04_mars.jpg"
    },
    {
        id: 5,
        name: "Юпитер",
        desctiption: "Самая крупная планета Солнечной системе. Она получила свое имя в часть главного римского бога.",
        img: "Images/Planets/05_jupiter.jpg"
    },
    {
        id: 6,
        name: "Сатурн",
        desctiption: "Вторая по величине в Солнечной системе, не имеет твердой поверхности. ",
        img: "Images/Planets/06_saturn.jpg"
    },
    {
        id: 7,
        name: "Уран",
        desctiption: "Эта планета стала первой, о существовании которой люди узнали только после изобретения телескопа. Названа в честь греческойго бога неба.",
        img: "Images/Planets/07_uran.jpg"
    },
    {
        id: 8,
        name: "Нептун",
        desctiption: "Самая удаленная от Солнца планета. Планету назвали в честь римского бога — хозяина морей.",
        img: "Images/Planets/08_neptun.jpg"
    },
];

const enterTextButton = document.MainForm.EnterTextButton;
enterTextButton.addEventListener("click", EnterTextValidate);
let planetIndex = 0;

ShowSlide();

function NextSlide() {
    var nextIndex = planetIndex + 1;
    if (nextIndex == planets.length) {
        nextIndex = 0
    }

    planetIndex = nextIndex;
    ShowSlide();
}

function ShowSlide() {
    var planet = planets[planetIndex];

    document.MainForm.SlideImage.src = planet.img;
    document.querySelector(".current-slide p").textContent = planet.desctiption;
}

function EnterTextValidate(e) {
    var planet = planets[planetIndex];
    var errorElem = document.getElementById("ErrorLabel");

    var elem = document.MainForm.EnterText;
    if (planet.name != elem.value) {
        errorElem.style.display = "block";
        return;
    }

    errorElem.style.display = "none";
    elem.value = "";
    NextSlide();
}

