// =========================
// ELEMENT
// =========================

const startBtn = document.getElementById("startBtn");
const openingScreen = document.getElementById("openingScreen");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");

const messageTitle = document.getElementById("messageTitle");

const typewriter = document.getElementById("typewriter");

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

let index = 0;
let typingStarted = false;

// =========================
// OPENING BUTTON
// =========================

startBtn.addEventListener("click", () => {

  // PREVENT DOUBLE CLICK
  if (typingStarted) return;

  typingStarted = true;

  // HIDE OPENING
  openingScreen.classList.add("hide");

  // SHOW CONTENT
  mainContent.classList.add("show");

  // PLAY MUSIC
  music.currentTime = 0;

  music.play().catch((err) => {
    console.log("Music autoplay blocked:", err);
  });

  // START TITLE THEN MESSAGE
  typeTitle(() => {
    startTyping();
  });

});

// =========================
// TITLE TYPEWRITER
// =========================

function typeTitle(callback) {

  const title = "Birthday Message 💌";

  let titleIndex = 0;

  function type() {

    if (titleIndex < title.length) {

      messageTitle.innerHTML += title.charAt(titleIndex);

      titleIndex++;

      setTimeout(type, 60);

    } else {

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

    if(paragraphIndex >= paragraphs.length) return;

    const p = document.createElement("p");

    p.classList.add("fade-paragraph");

    typewriter.appendChild(p);

    const currentText = paragraphs[paragraphIndex];

    let charIndex = 0;

    function typeChar(){

      if(charIndex < currentText.length){

        p.innerHTML += currentText.charAt(charIndex);

        charIndex++;

        setTimeout(typeChar, 95);

      }else{

        paragraphIndex++;

        setTimeout(typeParagraph, 800);
      }
    }

    typeChar();
  }

  typeParagraph();
}