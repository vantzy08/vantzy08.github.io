document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'C')) {
        e.preventDefault();
    }
});

const messages = [
    "Tap dimana aja yaaa",
    "hey kamu ❤️",
    "Iyaa kamuu, pemilik mata indahh senyuman maniss",
    "aku mau ngomong sesuatu nihh",
    "coba pencet",
    "pencet lagi",
    "ayo semangat mencetnya",
    "janjii inii terakhirr",
    "seriuss",
    "inii",
    "terakhirr",
    "tapi boongg hehe yahaha hayyuk",
    "aku tauu pasti kamuu kesell",
    "AHAHAHAHHAHAA",
    "hmmm",
    "jieldaa sayangg",
    "maaffinn papann tadii malemm yaaa",
    "papann benerr benerr ketidurann, bukann bermaksud boongin kamuu",
    "papann nungguin kamuu ituu, seriuss",
    "papann ketidurann jam 19:28 an, dann kamuu ngechat jam 19:40 an",
    "udaa yaaa sayangg ngambekknyaa, jangann berlarutt larutt",
    "maaffinn papann udaa buatt kamuu kecewa, buatt kamu sedihh",
    "maaffinn papann, papann jugaa menantii nantii momenn semalemm, tapii gagall karna papann",
    "papann tauu kamuu gaa semudahh ituu buatt maaffinn papann",
    "tapii percayaa laa nii papann udaa menunggu muu darii semalemm",
    "papann se ndaa tenangg ituu papann kepikirann kamuu",
    "papann panikk, bangunn tuu langsungg kayaa gimana yaww",
    "kalauu kamuu tau di film film abis mimpii buruk, truss kaya nafas nya terengah engah",
    "hahhh, jieldaa jieldaa gimanaa inii jieldakuu, maaff jiell, sambil nyariin hp",
    "sepertii ituu lahh papann semalemm",
    "maaffin papann sayanggg",
    "udaa yaa sayangg mayahhnyaaa",
    "udaaa ngambeknyaaa",
    "papann kangenn kamuuu",
    "baless pesann papann okeeyyy",
    "yaaa sayanggg",
    "jieldaaa",
    "papann adaa pantun nii",
    "kepasar beli tomatt pulangnya jijikk karna nginjekk taikk",
    "I Lovee Youu Soo Muchh jieldaa cantikk ❤️",
    "asksksksksk",
    "bjiirlah",
    "maapp radaa nyelenehh",
    "sorii ga nyambung",
    "soalnya yang nyambung cinta ku padamu,",
    "AHAIIIIIII",
    "wkwkwkwkwk",
    "maaf ya kalo ngebosenin,",
    "soalnya di otak aku ngga ada topik, adanya kamu.",
    "siahhhhhhhh",
    "pak kumis beli jamu,",
    "siapa yang manis?",
    "ya tentulah itu kamu",
    "ADUUUDUUUU",
    "menyalaaa bububb kuuu",
    "AHAHAHAHAHAHAA",
    "sayangg",
    "akuuu",
    "mencintaii kamuu",
    "akuuu",
    "sayangg bangett samaa kamuu",
    "jangann tinggalin akuu yaa sayangg",
    "maaffinn papann yawwww",
    "coba pencet tombol dibawah ini bubb 💝"
];

let currentPage = 0;
let isLastPage = false;

function showMessage() {
    $('.message').text(messages[currentPage]);
    
    isLastPage = currentPage === messages.length - 1;
    
    if (isLastPage) {
        $('.next-button').show();
        $('.bg_heart').css('cursor', 'default');
    } else {
        $('.next-button').hide();
        $('.bg_heart').css('cursor', 'pointer');
    }
}

$('.bg_heart').on('click', function() {
    if (!isLastPage) {
        currentPage++;
        showMessage();
    }
});

var love = setInterval(function() {
    var r_num = Math.floor(Math.random() * 40) + 1;
    var r_size = Math.floor(Math.random() * 65) + 10;
    var r_left = Math.floor(Math.random() * 100) + 1;
    var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    
    $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);animation:love " + r_time + "s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);animation:love " + (r_time + 5) + "s ease'></div>");
    
    $('.heart').each(function() {
        var top = parseFloat($(this).css("top"));
        var width = parseFloat($(this).css("width"));
        if (top <= -100 || width >= 150) {
            $(this).remove();
        }
    });
}, 500);

showMessage();

function clearMusicState() {
    localStorage.removeItem('musicPlaying');
    localStorage.removeItem('musicCurrentTime');
}

window.onload = function() {
    clearMusicState(); 
}

function setupMusic() {
    const music = document.getElementById('backgroundMusic');
    
    if (!localStorage.getItem('initialLoad')) {
        clearMusicState();
        localStorage.setItem('initialLoad', 'true');
        music.currentTime = 0;
    }

    const isMusicPlaying = localStorage.getItem('musicPlaying') === 'true';
    const musicCurrentTime = localStorage.getItem('musicCurrentTime') || 0;

    if (isMusicPlaying) {
        music.currentTime = parseFloat(musicCurrentTime);
        music.play().catch(error => console.log('Playback failed', error));
    }

    music.addEventListener('play', () => {
        localStorage.setItem('musicPlaying', 'true');
    });

    music.addEventListener('pause', () => {
        localStorage.setItem('musicPlaying', 'false');
    });

    setInterval(() => {
        localStorage.setItem('musicCurrentTime', music.currentTime);
    }, 1000);

    document.addEventListener('click', function startMusic() {
        music.play().catch(error => {
            console.log('Autoplay prevented', error);
        });
        document.removeEventListener('click', startMusic);
    });
}

document.addEventListener('DOMContentLoaded', setupMusic);