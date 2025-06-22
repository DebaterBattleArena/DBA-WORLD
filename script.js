// ====== FUNGSI COUNTDOWN (untuk Main Event) ======
function startCountdown() {
    // Set tanggal dan waktu target (Ganti dengan tanggal acara debat utama)
    const targetDate = new Date("June 28, 2025 00:00:00").getTime(); // Contoh: 28 Juni 2025

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        // Hitung waktu
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Perbarui elemen HTML
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        if (daysEl) daysEl.innerHTML = days;
        if (hoursEl) hoursEl.innerHTML = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.innerHTML = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.innerHTML = String(seconds).padStart(2, '0');

        // Jika hitung mundur selesai
        if (distance < 0) {
            clearInterval(countdownFunction);
            if (daysEl) daysEl.innerHTML = "0";
            if (hoursEl) hoursEl.innerHTML = "00";
            if (minutesEl) minutesEl.innerHTML = "00";
            if (secondsEl) secondsEl.innerHTML = "00";
            // Opsional: tampilkan pesan "DEBAT TELAH DIMULAI!"
            console.log("Countdown Selesai!");
        }
    }, 1000);
}


// ====== FUNGSI UNTUK MEMUAT DATA DEBAT DARI JSON ======
async function loadDebates() {
    try {
        const response = await fetch('data/debates.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const debates = await response.json();
        renderDebates(debates);
    } catch (error) {
        console.error("Gagal memuat data debat:", error);
        document.getElementById('debates-container').innerHTML = '<p>Maaf, jadwal debat tidak dapat dimuat saat ini.</p>';
    }
}

// ====== FUNGSI UNTUK MERENDER DEBAT KE HTML ======
function renderDebates(debates) {
    const container = document.getElementById('debates-container');
    if (!container) return; // Pastikan kontainer ada

    let htmlContent = '';
    debates.forEach(debate => {
        htmlContent += `
            <div class="match-card">
                <div class="category">${debate.category}</div>
                <div class="match-details">
                    <div class="debater-info">
                        <img src="${debate.debater1.photo}" alt="Foto ${debate.debater1.name}">
                        <span class="name">${debate.debater1.name}</span>
                        <span class="origin"><img src="${debate.debater1.flag}" alt="Bendera ${debate.debater1.country}"> ${debate.debater1.country.toUpperCase()}</span>
                    </div>
                    <span class="match-vs">VS</span>
                    <div class="debater-info">
                        <img src="${debate.debater2.photo}" alt="Foto ${debate.debater2.name}">
                        <span class="name">${debate.debater2.name}</span>
                        <span class="origin"><img src="${debate.debater2.flag}" alt="Bendera ${debate.debater2.country}"> ${debate.debater2.country.toUpperCase()}</span>
                    </div>
                </div>
                <div class="match-type">${debate.type}</div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

// ====== PANGGIL FUNGSI SAAT HALAMAN SELESAI DIMUAT ======
document.addEventListener('DOMContentLoaded', () => {
    startCountdown(); // Mulai countdown saat halaman dimuat
    loadDebates();    // Muat dan tampilkan debat dari JSON
});
