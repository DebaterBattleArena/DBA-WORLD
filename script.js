// ====== Global variable to store all debater profiles for easy lookup ======
let allDebaters = {}; // Akan menyimpan { 'HIROO': { ...profil Hiroo... }, 'RENJI': { ...profil Renji... }, ... }

// ====== FUNGSI UNTUK COUNTDOWN ACARA UTAMA ======
function startCountdown() {
    // ... (kode countdown yang sudah ada, tidak berubah) ...
    const now = new Date();
    const targetDate = new Date(now.getTime() + (2 * 24 * 60 * 60 * 1000)).getTime(); 

    const countdownInterval = setInterval(function() {
        const currentTime = new Date().getTime();
        const distance = targetDate - currentTime;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl) daysEl.innerHTML = days;
        if (hoursEl) hoursEl.innerHTML = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.innerHTML = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.innerHTML = String(seconds).padStart(2, '0');

        if (distance < 0) {
            clearInterval(countdownInterval);
            if (daysEl) daysEl.innerHTML = "0";
            if (hoursEl) hoursEl.innerHTML = "00";
            if (minutesEl) minutesEl.innerHTML = "00";
            if (secondsEl) secondsEl.innerHTML = "00";
            console.log("Countdown Selesai!");
        }
    }, 1000);
}

// ====== FUNGSI UNTUK MEMUAT DATA DEBAT DARI JSON ======
async function loadDebates() {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`Gagal memuat data JSON: ${response.status} ${response.statusText}. Mungkin masalah CORS jika dibuka langsung dari file lokal.`);
        }
        const debates = await response.json();
        
        // Memproses data untuk membuat daftar debater global yang unik
        debates.forEach(debate => {
            if (debate.debater1 && debate.debater1.name && !allDebaters[debate.debater1.name]) {
                allDebaters[debate.debater1.name] = debate.debater1;
            }
            if (debate.debater2 && debate.debater2.name && !allDebaters[debate.debater2.name]) {
                allDebaters[debate.debater2.name] = debate.debater2;
            }
        });

        renderDebates(debates); // Memanggil fungsi untuk menampilkan debat
    } catch (error) {
        console.error("Kesalahan saat memuat data debat:", error);
        const container = document.getElementById('debates-container');
        if(container) {
            container.innerHTML = '<p style="color: red; padding: 20px;">Maaf, jadwal debat tidak dapat dimuat saat ini. Mohon pastikan file JSON ada dan periksa <a href="javascript:void(0)" onclick="console.log(\'Buka developer console (F12) untuk melihat pesan error lebih detail\')">konsol browser</a> untuk detail error.</p>';
        }
    }
}

// ====== FUNGSI UNTUK MERENDER (MENAMPILKAN) DEBAT KE HTML ======
function renderDebates(debates) {
    const container = document.getElementById('debates-container');
    if (!container) return;

    let htmlContent = '';
    debates.forEach(debate => {
        const winnerInfo = debate.winner ? `
            <div class="result-info winner">
                <strong>Winner:</strong> ${debate.winner.name} by ${debate.winner.method}
            </div>
        ` : '';

        const loserInfo = debate.loser ? `
            <div class="result-info loser">
                <strong>Loss:</strong> ${debate.loser.name}
            </div>
        ` : '';

        htmlContent += `
            <div class="match-card">
                <div class="category">${debate.category}</div>
                <div class="match-details">
                    <div class="debater-info">
                        <img src="${debate.debater1.photo}" alt="Foto ${debate.debater1.name}">
                        <span class="name clickable-debater" data-debater-name="${debate.debater1.name}">${debate.debater1.name}</span>
                        <span class="origin"><img src="${debate.debater1.flag}" alt="Bendera ${debate.debater1.country}"> ${debate.debater1.country.toUpperCase()}</span>
                    </div>
                    <span class="match-vs">VS</span>
                    <div class="debater-info">
                        <img src="${debate.debater2.photo}" alt="Foto ${debate.debater2.name}">
                        <span class="name clickable-debater" data-debater-name="${debate.debater2.name}">${debate.debater2.name}</span>
                        <span class="origin"><img src="${debate.debater2.flag}" alt="Bendera ${debate.debater2.country}"> ${debate.debater2.country.toUpperCase()}</span>
                    </div>
                </div>
                <div class="match-type">${debate.type}</div>
                ${winnerInfo}
                ${loserInfo}
            </div>
        `;
    });
    container.innerHTML = htmlContent;

    // ====== MENAMBAHKAN EVENT LISTENER UNTUK KLIK DEBATER ======
    const clickableDebaters = document.querySelectorAll('.clickable-debater');
    clickableDebaters.forEach(debaterEl => {
        debaterEl.addEventListener('click', function() {
            const debaterName = this.dataset.debaterName; // Mengambil nama debater dari atribut data
            showDebaterProfile(debaterName); // Panggil fungsi untuk menampilkan profil
        });
    });
}

// ====== FUNGSI UNTUK MENAMPILKAN MODAL PROFIL DEBATER ======
function showDebaterProfile(debaterName) {
    const debater = allDebaters[debaterName]; // Mengambil data debater dari objek global
    const modal = document.getElementById('debater-modal');
    const profileDetailsDiv = document.getElementById('modal-profile-details');

    if (!debater || !debater.profile || !modal || !profileDetailsDiv) {
        console.error("Data debater atau elemen modal tidak ditemukan:", debaterName);
        return;
    }

    // Bangun konten HTML untuk profil
    let profileHtml = `
        <img src="${debater.photo}" alt="Foto ${debater.name}">
        <h3>${debater.name}</h3>
        <ul>
    `;
    for (const skill in debater.profile) {
        if (debater.profile.hasOwnProperty(skill)) {
            profileHtml += `<li><strong>${skill}:</strong> <span>${debater.profile[skill]}</span></li>`;
        }
    }
    profileHtml += `</ul>`;

    profileDetailsDiv.innerHTML = profileHtml; // Masukkan HTML profil ke dalam modal
    modal.style.display = 'flex'; // Tampilkan modal (menggunakan flex untuk pemusatan)

    // Untuk animasi, tambahkan kelas setelah display flex
    setTimeout(() => {
        modal.querySelector('.modal-content').style.opacity = 1;
        modal.querySelector('.modal-content').style.transform = 'scale(1)';
    }, 50); // Sedikit delay untuk memicu animasi
}

// ====== FUNGSI UNTUK MENYEMBUNYIKAN MODAL PROFIL DEBATER ======
function hideDebaterProfile() {
    const modal = document.getElementById('debater-modal');
    if (modal) {
        // Animasi fade out
        modal.querySelector('.modal-content').style.opacity = 0;
        modal.querySelector('.modal-content').style.transform = 'scale(0.95)';
        setTimeout(() => {
            modal.style.display = 'none'; // Sembunyikan setelah animasi
        }, 400); // Sesuaikan dengan durasi animasi CSS
    }
}

// ====== PANGGIL FUNGSI SAAT HALAMAN SELESAI DIMUAT ======
document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    loadDebates();

    // ====== MENAMBAHKAN EVENT LISTENER UNTUK TOMBOL TUTUP MODAL ======
    const closeButton = document.querySelector('.modal .close-button');
    if (closeButton) {
        closeButton.addEventListener('click', hideDebaterProfile);
    }

    // ====== MENUTUP MODAL JIKA KLIK DI LUAR KONTEN MODAL ======
    const modal = document.getElementById('debater-modal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) { // Hanya jika target klik adalah overlay modal, bukan konten di dalamnya
                hideDebaterProfile();
            }
        });
    }
});
