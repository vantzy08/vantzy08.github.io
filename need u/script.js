// Musik
const musik = new Howl({
    src: ['lagu.mp3'],
    autoplay: true,
    loop: true,
    volume: 0.5
  });
  
  // Tombol
  document.getElementById('tombol').addEventListener('click', function() {
    const jawaban = prompt("Inii akuu dimaaffin apaa nggaa? (iya/tidak)");
    if (jawaban?.toLowerCase() === "iya") {
      musik.stop();
      document.getElementById('pesan').innerHTML = 'Makasii udaa dimaaffinn wleee, Lov u sayanggkuu yangg cantikknyaa segalaksiii';
      document.getElementById('tombol').style.display = 'none';
    } else {
      alert("Gapapaa akuu tetepp sayangg kamuu, maaffin akuu ya sayangg, akuu janjii ga ngulangin lagii");
    }
  });

  // Fungsi untuk membuat hati jatuh dengan posisi acak
function createFallingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';

    // Menempatkan hati di posisi acak di atas layar
    heart.style.left = Math.random() * 100 + 'vw'; // Acak posisi horizontal
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Durasi acak antara 2 hingga 5 detik
    heart.style.fontSize = Math.random() * 20 + 30 + 'px'; // Ukuran acak antara 30px dan 50px

    // Menambahkan hati ke dalam body
    document.body.appendChild(heart);

    // Menghapus elemen hati setelah animasi selesai
    setTimeout(() => {
        heart.remove();
    }, 5000); // Waktu yang sesuai dengan durasi animasi
}

// Membuat hati baru dengan interval acak
function startRandomFallingHearts() {
    setInterval(createFallingHeart, Math.random() * 100 + 50); // Interval acak antara 50ms dan 150ms
}

// Memulai proses hati jatuh
startRandomFallingHearts();
