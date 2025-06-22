// ====== FUNGSI UNTUK COUNTDOWN ACARA UTAMA ======
function startCountdown() {
    // Menghitung target tanggal: 2 hari dari waktu saat ini
    const now = new Date();
    // Gunakan 2 hari (2 * 24 jam * 60 menit * 60 detik * 1000 milidetik)
    const targetDate = new Date(now.getTime() + (2 * 24 * 60 * 60 * 1000)).getTime(); 

    // Memperbarui countdown setiap 1 detik
    const countdownInterval = setInterval(function() {
        const currentTime = new Date().getTime();
        const distance = targetDate - currentTime; // Jarak waktu antara sekarang dan target

        // Menghitung hari, jam, menit, dan detik
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Memperbarui elemen HTML dengan nilai countdown
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        // Memastikan elemen ada sebelum memperbarui innerHTML
        if (daysEl) daysEl.innerHTML = days;
        if (hoursEl) hoursEl.innerHTML = String(hours).padStart(2, '0'); // Format 00
        if (minutesEl) minutesEl.innerHTML = String(minutes).padStart(2, '0'); // Format 00
        if (secondsEl) secondsEl.innerHTML = String(seconds).padStart(2, '0'); // Format 00

        // Jika countdown selesai (waktu sudah lewat)
        if (distance < 0) {
            clearInterval(countdownInterval); // Hentikan interval
            // Set semua ke nol
            if (daysEl) daysEl.innerHTML = "0";
            if (hoursEl) hoursEl.innerHTML = "00";
            if (minutesEl) minutesEl.innerHTML = "00";
            if (secondsEl) secondsEl.innerHTML = "00";
            console.log("Countdown Selesai!");
            // Anda bisa menambahkan logika lain di sini, seperti menampilkan pesan "DEBAT TELAH DIMULAI!"
        }
    }, 1000); // Interval 1 detik
}

// ====== FUNGSI UNTUK MEMUAT DATA DEBAT DARI JSON ======
async function loadDebates() {
    try {
        // MENGUBAH PATH JSON: Sekarang mencari data.json di folder yang sama
        const response = await fetch('data.json');
        
        // Memeriksa apakah request berhasil (status 200 OK)
        if (!response.ok) {
            // Melemparkan error jika request gagal, untuk ditangkap di blok catch
            throw new Error(`Gagal memuat data JSON: ${response.status} ${response.statusText}. Mungkin masalah CORS jika dibuka langsung dari file lokal.`);
        }
        
        const debates = await response.json(); // Mengubah response menjadi objek JSON
        renderDebates(debates); // Memanggil fungsi untuk menampilkan debat
    } catch (error) {
        console.error("Kesalahan saat memuat data debat:", error);
        // Menampilkan pesan error di halaman jika gagal memuat data
        const container = document.getElementById('debates-container');
        if(container) {
            container.innerHTML = '<p style="color: red; padding: 20px;">Maaf, jadwal debat tidak dapat dimuat saat ini. Mohon pastikan file JSON ada dan periksa <a href="javascript:void(0)" onclick="console.log(\'Buka developer console (F12) untuk melihat pesan error lebih detail\')">konsol browser</a> untuk detail error.</p>';
        }
    }
}

// ====== FUNGSI UNTUK MERENDER (MENAMPILKAN) DEBAT KE HTML ======
function renderDebates(debates) {
    const container = document.getElementById('debates-container');
    if (!container) return; // Keluar jika kontainer tidak ditemukan

    let htmlContent = '';
    // Iterasi setiap objek debat dalam array JSON
    debates.forEach(debate => {
        // Membangun string HTML untuk info pemenang jika ada
        const winnerInfo = debate.winner ? `
            <div class="result-info winner">
                <strong>Winner:</strong> ${debate.winner.name} by ${debate.winner.method}
            </div>
        ` : ''; // String kosong jika tidak ada pemenang

        // Membangun string HTML untuk info kalah jika ada
        const loserInfo = debate.loser ? `
            <div class="result-info loser">
                <strong>Loss:</strong> ${debate.loser.name}
            </div>
        ` : ''; // String kosong jika tidak ada yang kalah

        // Menambahkan kartu debat ke konten HTML
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
                ${winnerInfo} ${loserInfo}  </div>
        `;
    });
    container.innerHTML = htmlContent; // Memasukkan semua kartu debat ke dalam container
}

// ====== PANGGIL FUNGSI SAAT HALAMAN SELESAI DIMUAT ======
// Ini memastikan elemen HTML sudah tersedia sebelum JavaScript mencoba mengaksesnya
document.addEventListener('DOMContentLoaded', () => {
    startCountdown(); // Mulai countdown saat halaman dimuat
    loadDebates();    // Muat dan tampilkan debat dari JSON saat halaman dimuat
});
