// Inisialisasi Swiper
const swiper = new Swiper('.mySwiper', {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
  },
});

// Audio control
let sedangMain = false;
const btnLagu = document.getElementById('btnLagu');
const audio = document.getElementById('lagu');

function toggleLagu(){
  if(!sedangMain){
    audio.play();
    sedangMain = true;
    btnLagu.textContent = 'Pause Lagu ⏸️';
    tembakKonfeti(180);
  } else {
    audio.pause();
    sedangMain = false;
    btnLagu.textContent = 'Putar Lagu 🎵';
  }
}

audio.addEventListener('ended', () => {
  sedangMain = false;
  btnLagu.textContent = 'Putar Lagu 🎵';
});

// Konfeti
function tembakKonfeti(jumlah=120){
  confetti({
    particleCount: jumlah,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Interval konfeti otomatis
setInterval(() => tembakKonfeti(90), 4000);

// Tambah efek subtle saat slide berubah
swiper.on('slideChangeTransitionStart', () => {
  tembakKonfeti(40);
});

// Optional: autoplay audio setelah user interaction di mana pun (mobile policy)
document.addEventListener('click', function once(){
  document.removeEventListener('click', once);
  // Tidak auto play langsung; hanya menyiapkan agar bisa dimainkan tanpa blokir di iOS
}, {once:true});
