// ====== FUNGSI UNTUK COUNTDOWN ACARA UTAMA ======
function startCountdown() {
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
        // PATH JSON DIUBAH: Mencari langsung data.json di folder root
        const response = await fetch('data.json');
        
        if (!response.ok) {
            throw new Error(`Gagal memuat data JSON: ${response.status} ${response.statusText}. Mungkin masalah CORS jika dibuka langsung dari file lokal.`);
        }
        
        const debates = await response.json();
        renderDebates(debates);
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
                ${winnerInfo}
                ${loserInfo}
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
    loadDebates();
});
