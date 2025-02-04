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
    "haii kamuuu",
    "iyaa kamuu",
    "perempuann yangg paling akuu sayangg",
    "pipiii akuu mauu ngomongg niii",
    "eummmm",
    "maaffinn akuu yaa sayanggg",
    "akuu ngerasaa cemburu",
    "kenapaa koo kamuu nge cf diaa",
    "bukannyaa akuu egois",
    "ataupunn posesiff",
    "tapii kan",
    "akuu udaa ngomong ke kamuu sayangg",
    "akuu ga sukaa sama mereka bedua",
    "meskipun misall kamuu ngomong ituu temen kamuu",
    "hmm",
    "sayangg",
    "akuu jugaa ga sukaa",
    "malahh kamuu nyuruh akuu sendiri yang ganti cf an nyaa",
    "kamuu sayangg akuu gaaa??",
    "mintaa tolongg yaaa pipiiii",
    "usahainn biarr akuu gaa cemburu atauu ovt yaa misall kamuu gasuka akuu kayaa gituu",
    "akuu sayangg samaa kamuu",
    "akuu selalu ngusahain biarr gaa bikin kamuu cemburu atau ovt",
    "karnaa....",
    "akuu sayangg kamuu pipii",
    "hmm akuu gaa sukaa ajaa samaa respon kamuu barusann",
    "teruss ngilang tibaa tibaa",
    "dikira kamuu ngomongg samaa obake kalii yaa",
    "emangg obakee sihh",
    "AHAHAHAHAHAHHAA",
    "sayanggg",
    "akuuu",
    "akann selaluu,",
    "berusahaa menghindarii",
    "ngelakuinn hal yang ga kamuu sukaa",
    "dan tapii jugaa,",
    "akuu jugaa berharapp kamuu ngelakuinn ituu jugaa yaa sayangg",
    "Shafira Putri Hildaifah",
    "akuu sayangg bangett samaa kamuu",
    "akuu cumaa ovt",
    "kan kemarin di cf kamuu gaada cowonyaa",
    "teruss tibaa tibaa kamuu tambahinn",
    "dann ituu malahh lutfi ama fahri",
    "kenapaa kamuu cf lutfi?",
    "biarr diaa liat storyy ucull kamuu kahh??",
    "biarr diaa sukaa kamuu kahh??",
    "fahrii jugaa tuu",
    "huhhhhh",
    "yaudaa dehhh",
    "akuu gabisaa marahinn kamuu sayangg",
    "I LOVE YOU",
    "SHAPIWAA CANTIIKKK",
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
