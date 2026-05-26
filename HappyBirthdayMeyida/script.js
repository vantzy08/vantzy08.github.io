// =========================
// WAIT DOM READY
// =========================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initApp();

  }
);

// =========================
// ELEMENT
// =========================

const startBtn =
  document.getElementById("startBtn");

const openingScreen =
  document.getElementById("openingScreen");

const mainContent =
  document.getElementById("mainContent");

const music =
  document.getElementById("bgMusic");

const messageTitle =
  document.getElementById("messageTitle");

const typewriter =
  document.getElementById("typewriter");

const musicModal =
  document.getElementById("musicModal");

const musicTitle =
  document.getElementById("musicTitle");

const musicDesc =
  document.getElementById("musicDesc");

const musicButtons =
  document.getElementById("musicButtons");

const track =
  document.querySelector(".carousel-track");

const slides =
  document.querySelectorAll(".slide");

// =========================
// TYPEWRITER TEXT
// =========================

const paragraphs = [

`dear meyida,

hehe ga kerasa uda ultah aja,
tambah gede sekarang.`,

`yas smoga smua apapun yng di inginkan kmu bisa tercapai,
n kalau pun belum tercapai,
berarti bukan yang terbaik buat kmu.`,

`sbnr e masi panjang si,
tp yaa itu deep buat kita aja jangan di sini hehe.`,

`happy birthday ya 🎂🍰
selamat juga buat snbt nyaa 🤍💙`

];

// =========================
// STATE
// =========================

let typingStarted = false;

let currentSlide = 0;

let carouselInterval;

// =========================
// INIT APP
// =========================

function initApp(){

  bindMusicButtons();

  bindStartButton();

  startAutoSlide();

}

// =========================
// MUSIC BUTTON FUNCTION
// =========================

function bindMusicButtons(){

  const yesBtn =
    document.getElementById("musicYes");

  const noBtn =
    document.getElementById("musicNo");

  // YES BUTTON
  if(yesBtn){

    yesBtn.addEventListener(
      "click",
      playMusicFlow
    );

  }

  // NO BUTTON
  if(noBtn){

    noBtn.addEventListener(
      "click",
      noMusicFlow
    );

  }
}

// =========================
// PLAY MUSIC
// =========================

function playMusicFlow(){

  music.currentTime = 0;

  music.play().catch((err) => {

    console.log(
      "Music autoplay blocked:",
      err
    );

  });

  musicModal.classList.add("hide");

}

// =========================
// NO MUSIC FLOW
// =========================

function noMusicFlow(){

  musicTitle.innerHTML =
    "yauda gausa liat 😒";

  musicDesc.innerHTML =
    "musiknya penting buat suasana nya";

  musicButtons.innerHTML = `

    <button id="tryAgainBtn">
      coba lagi
    </button>

  `;

  const tryAgainBtn =
    document.getElementById("tryAgainBtn");

  tryAgainBtn.addEventListener(
    "click",
    restoreMusicModal
  );

}

// =========================
// RESTORE MUSIC MODAL
// =========================

function restoreMusicModal(){

  musicTitle.innerHTML =
    "Play Music? 🎵";

  musicDesc.innerHTML =
    "biar feel nya lebih dapet hehe";

  musicButtons.innerHTML = `

    <button id="musicYes">
      YES 💖
    </button>

    <button id="musicNo">
      NO 🔇
    </button>

  `;

  bindMusicButtons();

}

// =========================
// OPEN GIFT BUTTON
// =========================

function bindStartButton(){

  if(!startBtn) return;

  startBtn.addEventListener(
    "click",
    () => {

      // PREVENT DOUBLE CLICK
      if(typingStarted) return;

      typingStarted = true;

      // HIDE OPENING
      openingScreen.classList.add(
        "hide"
      );

      // SHOW MAIN CONTENT
      mainContent.classList.add(
        "show"
      );

      // CLEAR OLD CONTENT
      messageTitle.innerHTML = "";

      typewriter.innerHTML = "";

      // START ANIMATION
      typeTitle(() => {

        startTyping();

      });

    }
  );
}

// =========================
// TITLE TYPEWRITER
// =========================

function typeTitle(callback){

  const title =
    "Birthday Message 💌";

  let titleIndex = 0;

  function type(){

    if(titleIndex < title.length){

      messageTitle.innerHTML +=
        title.charAt(titleIndex);

      titleIndex++;

      setTimeout(type, 75);

    }else{

      callback();

    }
  }

  type();

}

// =========================
// MESSAGE TYPEWRITER
// =========================

function startTyping(){

  let paragraphIndex = 0;

  function typeParagraph(){

    if(
      paragraphIndex >=
      paragraphs.length
    ){
      return;
    }

    const p =
      document.createElement("p");

    p.classList.add(
      "fade-paragraph"
    );

    p.style.marginBottom = "18px";

    typewriter.appendChild(p);

    const currentText =
      paragraphs[paragraphIndex];

    let charIndex = 0;

    function typeChar(){

      if(
        charIndex <
        currentText.length
      ){

        const currentChar =
          currentText.charAt(charIndex);

        p.innerHTML += currentChar;

        charIndex++;

        // DEFAULT DELAY
        let delay = 100;

        // LONG PAUSE
        if(
          currentChar === "." ||
          currentChar === "!" ||
          currentChar === "?"
        ){

          delay = 550;

        }

        // COMMA PAUSE
        else if(
          currentChar === ","
        ){

          delay = 250;

        }

        // ENTER PAUSE
        else if(
          currentChar === "\n"
        ){

          delay = 400;

        }

        setTimeout(
          typeChar,
          delay
        );

      }else{

        paragraphIndex++;

        setTimeout(
          typeParagraph,
          900
        );

      }
    }

    typeChar();

  }

  typeParagraph();

}

// =========================
// AUTO CAROUSEL
// =========================

function autoSlide(){

  if(
    !track ||
    slides.length === 0
  ){
    return;
  }

  currentSlide++;

  // RESET TO FIRST
  if(currentSlide >= slides.length){

    currentSlide = 0;

  }

  track.style.transform =
    `translateX(-${currentSlide * 100}%)`;

}

// =========================
// START CAROUSEL
// =========================

function startAutoSlide(){

  if(slides.length <= 1){
    return;
  }

  // POSISI AWAL
  track.style.transform =
    "translateX(0%)";

  // HINDARI DOUBLE INTERVAL
  clearInterval(carouselInterval);

  carouselInterval = setInterval(
    autoSlide,
    4500
  );

}