// Validasi Login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Login menggunakan "MyLove" sesuai deskripsi
  if (username === "MyLove" && password === "MyLove") {
    Swal.fire({
      icon: "success",
      title: "Login berhasil!",
      text: "Selamat datang Cayangg ❤️",
      showConfirmButton: false,
      timer: 1500,
    }).then(function () {
      // Pindah ke halaman birthday
      window.location.href = "birthday.html";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Yahhhh Gagall :(",
      text: "Coba cek lagi username sama passwordnya ya Sayanggg",
      confirmButtonText: "Coba lagi",
      confirmButtonColor: "#764ba2", // Warna ungu tombol SweetAlert
    });
  }
}

// Fitur Lihat Password (Ikon Mata)
const togglePassword = document.querySelector('#togglePassword');
const passwordField = document.querySelector('#password');

togglePassword.addEventListener('click', function () {
    // Toggle tipe input
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    
    // Toggle ikon mata
    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');
});

// ==========================================
// EFEK GLITER JATUH (Baru!)
// ==========================================
function createGlitter() {
    const container = document.getElementById('glitterContainer');
    const glitterCount = 50; // Jumlah gliter

    for (let i = 0; i < glitterCount; i++) {
        const glitter = document.createElement('div');
        glitter.classList.add('glitter');
        
        // Ukuran gliter acak (2px - 5px)
        const size = Math.random() * 3 + 2; 
        glitter.style.width = `${size}px`;
        glitter.style.height = `${size}px`;
        
        // Posisi horizontal acak (0% - 100%)
        glitter.style.left = `${Math.random() * 100}%`;
        
        container.appendChild(glitter);
        
        // Animasikan gliter pakai GSAP
        animateGlitter(glitter);
    }
}

function animateGlitter(glitter) {
    // Tentukan kecepatan jatuh acak (3 - 8 detik)
    const duration = Math.random() * 5 + 3;
    
    // Tentukan posisi awal (acak sedikit di atas layar)
    gsap.set(glitter, {
        y: -10, // Mulai dari atas layar
        opacity: Math.random() * 0.5 + 0.3 // Opacity acak biar variatif
    });
    
    // Buat animasi jatuh ke bawah
    gsap.to(glitter, {
        y: window.innerHeight + 10, // Jatuh sampai bawah layar
        duration: duration,
        ease: "none", // Gerakan konstan (seperti salju)
        repeat: -1, // Ulangi terus menerus (infinite)
        delay: Math.random() * 5, // Tunda acak biar tidak jatuh bebarengan
        
        // Tambahkan efek goyang sedikit saat jatuh
        x: "+=" + (Math.random() * 30 - 15) // Goyang kiri-kanan acak
    });
}

// Jalankan fungsi gliter saat halaman selesai dimuat
window.addEventListener('load', createGlitter);