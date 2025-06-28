// script.js

// ====== DATA DEBATER (Contoh Data, sesuaikan dengan data sebenarnya Anda) ======
// Pastikan data ini lengkap dan akurat sesuai kebutuhan aplikasi Anda
const allDebaters = {
    "Lianx": {
        name: "Lianx",
        tier: "High Tier",
        photo: "path/to/lianx_photo.jpg", // Ganti dengan path gambar yang benar
        profile: {
            "Rhetoric": "90/100",
            "Critical Thinking": "95/100",
            "General Knowledge": "90/100"
        },
        stats: {
            wins: 10,
            losses: 2,
            draws: 1
        },
        bio: "Lianx adalah debater kelas atas dengan retorika yang tajam dan kemampuan analisis yang mendalam.",
        matches: [
            // Contoh data pertandingan
            { opponent: "Adyy", date: "2024-05-10", result: "Menang", link: "#" },
            { opponent: "MUCHIBEI", date: "2024-04-20", result: "Menang", link: "#" }
        ]
    },
    "Adyy": {
        name: "Adyy",
        tier: "High Tier",
        photo: "path/to/adyy_photo.jpg", // Ganti dengan path gambar yang benar
        profile: {
            "Rhetoric": "92/100",
            "Critical Thinking": "90/100",
            "General Knowledge": "93/100"
        },
        stats: {
            wins: 9,
            losses: 3,
            draws: 0
        },
        bio: "Adyy dikenal dengan argumennya yang kokoh dan pengetahuan luas di berbagai fiksi.",
        matches: [
            { opponent: "Lianx", date: "2024-05-10", result: "Kalah", link: "#" }
        ]
    },
    "MUCHIBEI": {
        name: "MUCHIBEI",
        tier: "High Tier",
        photo: "path/to/muchibei_photo.jpg", // Ganti dengan path gambar yang benar
        profile: {
            "Rhetoric": "88/100",
            "Critical Thinking": "87/100",
            "General Knowledge": "89/100"
        },
        stats: {
            wins: 7,
            losses: 4,
            draws: 0
        },
        bio: "MUCHIBEI adalah strategis yang cerdas dengan pendekatan debat yang unik.",
        matches: []
    },
    "ZOGRATIS": {
        name: "ZOGRATIS",
        tier: "High Tier",
        photo: "path/to/zogratis_photo.jpg", // Ganti dengan path gambar yang benar
        profile: {
            "Rhetoric": "85/100",
            "Critical Thinking": "88/100",
            "General Knowledge": "86/100"
        },
        stats: {
            wins: 6,
            losses: 3,
            draws: 1
        },
        bio: "ZOGRATIS dikenal karena kecepatan berpikir dan kemampuan adaptasinya di tengah debat.",
        matches: []
    },
    "RANZT": {
        name: "RANZT",
        tier: "Mid Tier",
        photo: "path/to/ranzt_photo.jpg", // Ganti dengan path gambar yang benar
        profile: {
            "Rhetoric": "75/100",
            "Critical Thinking": "80/100",
            "General Knowledge": "78/100"
        },
        stats: {
            wins: 5,
            losses: 5,
            draws: 0
        },
        bio: "RANZT adalah debater yang solid dengan fondasi argumen yang kuat.",
        matches: []
    },
    "HIROO": {
        name: "HIROO",
        tier: "Mid Tier",
        photo: "path/to/hiroo_photo.jpg", // Ganti dengan path gambar yang benar
        profile: {
            "Rhetoric": "78/100",
            "Critical Thinking": "75/100",
            "General Knowledge": "77/100"
        },
        stats: {
            wins: 4,
            losses: 4,
            draws: 1
        },
        bio: "HIROO dikenal karena gaya debatnya yang lugas dan berani.",
        matches: []
    },
    "RYUU": {
        name: "RYUU",
        tier: "Mid Tier",
        photo: "path/to/ryuu_photo.jpg", // Ganti dengan path gambar yang benar
        profile: {
            "Rhetoric": "70/100",
            "Critical Thinking": "72/100",
            "General Knowledge": "73/100"
        },
        stats: {
            wins: 3,
            losses: 5,
            draws: 2
        },
        bio: "RYUU sering mengejutkan lawan dengan perspektif baru.",
        matches: []
    },
    "RENJI": {
        name: "RENJI",
        tier: "Mid Tier",
        photo: "path/to/renji_photo.jpg", // Ganti dengan path gambar yang benar
        profile: {
            "Rhetoric": "72/100",
            "Critical Thinking": "70/100",
            "General Knowledge": "71/100"
        },
        stats: {
            wins: 2,
            losses: 6,
            draws: 1
        },
        bio: "RENJI adalah debater yang gigih dan tidak mudah menyerah.",
        matches: []
    },
    "ARYANWT": {
        name: "ARYANWT",
        tier: "Low Tier",
        photo: "path/to/aryanwt_photo.jpg", // Ganti dengan path gambar yang benar
        profile: {
            "Rhetoric": "65/100",
            "Critical Thinking": "68/100",
            "General Knowledge": "67/100"
        },
        stats: {
            wins: 1,
            losses: 8,
            draws: 0
        },
        bio: "ARYANWT sedang dalam tahap pengembangan dan menunjukkan potensi besar.",
        matches: []
    },
    "RIM": {
        name: "RIM",
        tier: "Low Tier",
        photo: "path/to/rim_photo.jpg", // Ganti dengan path gambar yang benar
        profile: {
            "Rhetoric": "60/100",
            "Critical Thinking": "62/100",
            "General Knowledge": "63/100"
        },
        stats: {
            wins: 0,
            losses: 7,
            draws: 1
        },
        bio: "RIM terus belajar dan beradaptasi dengan setiap debat.",
        matches: []
    },
    "Shade": {
        name: "Shade",
        tier: "Low Tier",
        photo: "path/to/shade_photo.jpg", // Ganti dengan path gambar yang benar
        profile: {
            "Rhetoric": "58/100",
            "Critical Thinking": "60/100",
            "General Knowledge": "59/100"
        },
        stats: {
            wins: 0,
            losses: 9,
            draws: 0
        },
        bio: "Shade adalah pendatang baru yang antusias di arena debat.",
        matches: []
    },
    "Thinzel": {
        name: "Thinzel",
        tier: "Low Tier",
        photo: "path/to/thinzel_photo.jpg", // Ganti dengan path gambar yang benar
        profile: {
            "Rhetoric": "55/100",
            "Critical Thinking": "57/100",
            "General Knowledge": "56/100"
        },
        stats: {
            wins: 0,
            losses: 10,
            draws: 0
        },
        bio: "Thinzel bertekad untuk memperbaiki diri di setiap pertandingan.",
        matches: []
    }
    // Tambahkan debater lain sesuai kebutuhan Anda
};


// ====== DATA DEBAT (Contoh Data, sesuaikan dengan data sebenarnya Anda) ======
// Ini adalah contoh struktur data untuk jadwal debat
const upcomingDebates = [
    {
        title: "DEBATER BATTLE ARENA INDONESIA VS MALAYSIA 1",
        type: "INTERNATIONAL SHOWDOWN",
        date: "Minggu, 30 Juni 2025",
        time: "19:00 WIB",
        description: "Pertandingan persahabatan antar negara antara debater terbaik dari Indonesia melawan Malaysia.",
        streamLink: "https://www.youtube.com/watch?v=xxxxxxxx" // Ganti dengan link yang benar
    },
    {
        title: "The Multiverse Clash: Batman vs Superman",
        type: "FICTIONAL SHOWDOWN",
        date: "Sabtu, 6 Juli 2025",
        time: "20:00 WIB",
        description: "Debat sengit tentang siapa pahlawan super yang lebih unggul antara Batman dan Superman.",
        streamLink: "https://www.youtube.com/watch?v=yyyyyyyy"
    }
    // Tambahkan debat lain sesuai kebutuhan Anda
];


// ====== FUNGSI UTAMA YANG DIEKSEKUSI SAAT DOM SELESAI DIMUAT ======
document.addEventListener('DOMContentLoaded', () => {
    // Jalankan fungsi berdasarkan halaman yang aktif
    if (document.body.classList.contains('home-page')) {
        // Jika ada countdown, bisa diaktifkan di sini
        // const eventDate = new Date('2025-06-30T19:00:00').getTime(); // Contoh tanggal event
        // setupCountdown(eventDate);
    } else if (document.body.classList.contains('ranking-page')) {
        renderRankingPage();
    } else if (document.body.classList.contains('profile-page')) {
        renderProfilePage();
    } else if (document.body.classList.contains('archive-page')) {
        renderArchivePage();
    } else if (document.body.classList.contains('compare-page')) {
        setupComparePage();
    }

    // Panggil fungsi untuk semua halaman yang memiliki elemen match-list
    if (document.getElementById('debates-container')) {
        renderUpcomingDebates();
    }

    // Inisialisasi underline aktif di navigasi
    setupActiveNavUnderline();
});


// ====== FUNGSI UNTUK COUNTDOWN (Tidak digunakan di index.html yang baru, tapi disimpan jika dibutuhkan) ======
/*
function setupCountdown(targetDate) {
    const daysSpan = document.getElementById('days');
    const hoursSpan = document.getElementById('hours');
    const minutesSpan = document.getElementById('minutes');
    const secondsSpan = document.getElementById('seconds');

    if (!daysSpan || !hoursSpan || !minutesSpan || !secondsSpan) return; // Pastikan elemen ada

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            if (daysSpan) daysSpan.innerHTML = "0";
            if (hoursSpan) hoursSpan.innerHTML = "00";
            if (minutesSpan) minutesSpan.innerHTML = "00";
            if (secondsSpan) secondsSpan.innerHTML = "00";
            // Mungkin tampilkan pesan "Live Now" atau "Event Ended"
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysSpan) daysSpan.innerHTML = days;
        if (hoursSpan) hoursSpan.innerHTML = hours < 10 ? '0' + hours : hours;
        if (minutesSpan) minutesSpan.innerHTML = minutes < 10 ? '0' + minutes : minutes;
        if (secondsSpan) secondsSpan.innerHTML = seconds < 10 ? '0' + seconds : seconds;
    };

    updateCountdown(); // Panggil sekali saat dimuat untuk menghindari jeda
    const countdownInterval = setInterval(updateCountdown, 1000);
}
*/

// ====== FUNGSI UNTUK MERENDER JADWAL DEBAT ======
function renderUpcomingDebates() {
    const container = document.getElementById('debates-container');
    if (!container) return;

    let debatesHtml = '';
    if (upcomingDebates.length === 0) {
        debatesHtml = '<p class="no-debates-message">Belum ada jadwal debat yang tersedia saat ini. Nantikan pembaruan!</p>';
    } else {
        upcomingDebates.forEach(debate => {
            debatesHtml += `
                <div class="debate-card">
                    <span class="debate-type">${debate.type}</span>
                    <h3>${debate.title}</h3>
                    <p class="debate-date-time">${debate.date} | ${debate.time}</p>
                    <p class="debate-description">${debate.description}</p>
                    <a href="${debate.streamLink}" class="watch-button" target="_blank">Tonton Debat <span class="arrow">→</span></a>
                </div>
            `;
        });
    }
    container.innerHTML = debatesHtml;
}


// ====== FUNGSI UNTUK MERENDER HALAMAN RANKING (UNTUK ranking.html) ======
function renderRankingPage() {
    const rankingContainer = document.getElementById('ranking-container');
    if (!rankingContainer) return;

    const allDebatersByTier = {
        "Low Tier": [],
        "Mid Tier": [],
        "High Tier": []
    };

    // Mengisi array tier dengan debater yang sesuai
    Object.values(allDebaters).forEach(debater => {
        if (debater.tier && allDebatersByTier[debater.tier]) {
            allDebatersByTier[debater.tier].push(debater);
        }
    });

    let rankingHtml = '';
    const tiersOrder = ["Low Tier", "Mid Tier", "High Tier"]; // Urutan tier yang diinginkan

    tiersOrder.forEach(tierName => {
        const debatersInTier = allDebatersByTier[tierName];

        if (debatersInTier && debatersInTier.length > 0) {
            // Sorting kustom untuk setiap Tier
            if (tierName === "Mid Tier") {
                const midTierCustomOrder = ["RANZT", "HIROO", "RYUU", "RENJI"]; // Urutan spesifik
                debatersInTier.sort((a, b) => {
                    const indexA = midTierCustomOrder.indexOf(a.name);
                    const indexB = midTierCustomOrder.indexOf(b.name);
                    // Jika nama tidak ada di urutan kustom, biarkan mereka di akhir atau urutkan berdasarkan nama
                    if (indexA === -1 || indexB === -1) {
                        return a.name.localeCompare(b.name);
                    }
                    return indexA - indexB;
                });
            } else if (tierName === "High Tier") {
                // Urutan spesifik sesuai permintaan: Lianx, Adyy, MUCHIBEI, ZOGRATIS
                const highTierCustomOrder = ["Lianx", "Adyy", "MUCHIBEI", "ZOGRATIS"];
                debatersInTier.sort((a, b) => {
                    const indexA = highTierCustomOrder.indexOf(a.name);
                    const indexB = highTierCustomOrder.indexOf(b.name);
                    if (indexA === -1 || indexB === -1) {
                        // Jika nama tidak ada di urutan kustom, sortir secara alfabetis atau biarkan urutan aslinya
                        return a.name.localeCompare(b.name);
                    }
                    return indexA - indexB;
                });
            } else if (tierName === "Low Tier") {
                // URUTAN KUSTOM BARU UNTUK LOW TIER: ARYANWT (1), RIM (2), Shade (3), Thinzel (terakhir)
                const lowTierCustomOrder = ["ARYANWT", "RIM", "Shade", "Thinzel"];
                debatersInTier.sort((a, b) => {
                    const indexA = lowTierCustomOrder.indexOf(a.name);
                    const indexB = lowTierCustomOrder.indexOf(b.name);
                    if (indexA === -1 || indexB === -1) {
                        // Jika nama tidak ada di urutan kustom, biarkan mereka di akhir
                        return a.name.localeCompare(b.name);
                    }
                    return indexA - indexB;
                });
            }
            else {
                // Urutan default (alfabetis berdasarkan nama) jika tidak ada urutan kustom
                debatersInTier.sort((a, b) => a.name.localeCompare(b.name));
            }

            rankingHtml += `
                <h3 class="ranking-tier-header">${tierName}</h3>
                <div class="ranking-table-container">
                    <table class="ranking-table">
                        <thead>
                            <tr>
                                <th>Peringkat</th>
                                <th>Debater</th>
                                <th>Rhetoric</th>
                                <th>Critical Thinking</th>
                                <th>General Knowledge</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            debatersInTier.forEach((debater, index) => {
                rankingHtml += `
                    <tr>
                        <td>${index + 1}</td>
                        <td>
                            <div class="debater-info">
                                <img src="${debater.photo}" alt="Foto ${debater.name}">
                                <a href="profile.html?name=${encodeURIComponent(debater.name)}" class="debater-name">${debater.name}</a>
                            </div>
                        </td>
                        <td class="skill-score"><span class="numerator">${debater.profile['Rhetoric'].split('/')[0]}</span>/${debater.profile['Rhetoric'].split('/')[1]}</td>
                        <td class="skill-score"><span class="numerator">${debater.profile['Critical Thinking'].split('/')[0]}</span>/${debater.profile['Critical Thinking'].split('/')[1]}</td>
                        <td class="skill-score"><span class="numerator">${debater.profile['General Knowledge'].split('/')[0]}</span>/${debater.profile['General Knowledge'].split('/')[1]}</td>
                    </tr>
                `;
            });
            rankingHtml += `
                        </tbody>
                    </table>
                </div>
            `;
        }
    });

    rankingContainer.innerHTML = rankingHtml;
}


// ====== FUNGSI UNTUK MERENDER HALAMAN PROFIL (UNTUK profile.html) ======
function renderProfilePage() {
    const params = new URLSearchParams(window.location.search);
    const debaterName = params.get('name');
    const debater = allDebaters[debaterName];

    if (!debater) {
        document.querySelector('.profile-content').innerHTML = '<p>Debater tidak ditemukan.</p>';
        return;
    }

    document.getElementById('profile-photo').src = debater.photo;
    document.getElementById('profile-photo').alt = `Foto ${debater.name}`;
    document.getElementById('profile-name').textContent = debater.name;
    document.getElementById('profile-tier').textContent = `Tier: ${debater.tier}`;
    document.getElementById('profile-bio').textContent = debater.bio;

    // Perbarui data stats
    document.getElementById('stats-wins').textContent = debater.stats.wins;
    document.getElementById('stats-losses').textContent = debater.stats.losses;
    document.getElementById('stats-draws').textContent = debater.stats.draws;

    // Render skills chart
    renderSkillsChart(debater.profile);

    // Render riwayat pertandingan
    renderMatchHistory(debater.matches);
}

function renderSkillsChart(profile) {
    const ctx = document.getElementById('skillsChart');
    if (!ctx) return;

    const labels = Object.keys(profile);
    const dataValues = labels.map(label => parseInt(profile[label].split('/')[0]));
    const maxValues = labels.map(label => parseInt(profile[label].split('/')[1]));

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Kemampuan Debater',
                data: dataValues,
                backgroundColor: 'rgba(255, 165, 0, 0.4)', // Warna oranye transparan
                borderColor: 'rgba(255, 165, 0, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 165, 0, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 165, 0, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'rgba(255, 255, 255, 0.2)' // Warna garis sudut
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)' // Warna grid
                    },
                    pointLabels: {
                        font: {
                            size: 14,
                            family: "'Oswald', sans-serif"
                        },
                        color: '#fff' // Warna label poin
                    },
                    suggestedMin: 0,
                    suggestedMax: 100, // Maksimum nilai skill
                    ticks: {
                        display: false // Sembunyikan label tick angka pada sumbu radar
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Sembunyikan legend
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ${context.label}: ${context.raw}/100`;
                        }
                    }
                }
            }
        }
    });
}

function renderMatchHistory(matches) {
    const matchHistoryBody = document.getElementById('match-history-body');
    if (!matchHistoryBody) return;

    if (matches.length === 0) {
        matchHistoryBody.innerHTML = '<tr><td colspan="4">Belum ada riwayat pertandingan.</td></tr>';
        return;
    }

    matchHistoryBody.innerHTML = matches.map(match => `
        <tr>
            <td>${match.date}</td>
            <td>vs ${match.opponent}</td>
            <td class="${match.result === 'Menang' ? 'win' : match.result === 'Kalah' ? 'loss' : 'draw'}">${match.result}</td>
            <td><a href="${match.link}" target="_blank">Lihat</a></td>
        </tr>
    `).join('');
}

// ====== FUNGSI UNTUK MERENDER HALAMAN ARSIP (UNTUK archive.html) ======
function renderArchivePage() {
    const archiveContainer = document.getElementById('archive-container');
    if (!archiveContainer) return;

    // Untuk demo, kita akan menggunakan data upcomingDebates sebagai arsip.
    // Dalam aplikasi nyata, Anda akan memiliki array terpisah untuk arsip debat yang sudah selesai.
    const archivedDebates = upcomingDebates; // Ganti ini dengan data arsip sebenarnya

    if (archivedDebates.length === 0) {
        archiveContainer.innerHTML = '<p class="no-debates-message">Belum ada arsip debat yang tersedia.</p>';
        return;
    }

    let archiveHtml = '';
    archivedDebates.forEach(debate => {
        archiveHtml += `
            <div class="archive-card">
                <span class="archive-type">${debate.type}</span>
                <h3>${debate.title}</h3>
                <p class="archive-date-time">${debate.date} | ${debate.time}</p>
                <p class="archive-description">${debate.description}</p>
                <a href="${debate.streamLink}" class="watch-button" target="_blank">Tonton Ulang <span class="arrow">→</span></a>
            </div>
        `;
    });
    archiveContainer.innerHTML = archiveHtml;
}

// ====== FUNGSI UNTUK HALAMAN BANDINGKAN DEBATER (UNTUK compare.html) ======
function setupComparePage() {
    const debaterSelect1 = document.getElementById('debater1-select');
    const debaterSelect2 = document.getElementById('debater2-select');
    const compareButton = document.getElementById('compare-button');
    const comparisonResult = document.getElementById('comparison-result');
    const chartContainer = document.getElementById('comparison-chart-container');
    const debater1StatsDiv = document.getElementById('debater1-stats');
    const debater2StatsDiv = document.getElementById('debater2-stats');

    if (!debaterSelect1 || !debaterSelect2 || !compareButton || !comparisonResult || !chartContainer || !debater1StatsDiv || !debater2StatsDiv) {
        return; // Pastikan semua elemen ada
    }

    // Isi dropdown dengan semua debater
    const debaterNames = Object.keys(allDebaters);
    debaterNames.forEach(name => {
        const option1 = document.createElement('option');
        option1.value = name;
        option1.textContent = name;
        debaterSelect1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = name;
        option2.textContent = name;
        debaterSelect2.appendChild(option2);
    });

    // Default selection
    debaterSelect1.value = debaterNames[0] || '';
    debaterSelect2.value = debaterNames[1] || debaterNames[0] || ''; // Pilih debater kedua jika ada

    compareButton.addEventListener('click', () => {
        const debater1Name = debaterSelect1.value;
        const debater2Name = debaterSelect2.value;

        if (!debater1Name || !debater2Name || debater1Name === debater2Name) {
            comparisonResult.innerHTML = '<p class="error-message">Pilih dua debater yang berbeda untuk dibandingkan.</p>';
            chartContainer.innerHTML = '';
            debater1StatsDiv.innerHTML = '';
            debater2StatsDiv.innerHTML = '';
            return;
        }

        const debater1 = allDebaters[debater1Name];
        const debater2 = allDebaters[debater2Name];

        if (!debater1 || !debater2) {
            comparisonResult.innerHTML = '<p class="error-message">Data debater tidak ditemukan.</p>';
            chartContainer.innerHTML = '';
            debater1StatsDiv.innerHTML = '';
            debater2StatsDiv.innerHTML = '';
            return;
        }

        comparisonResult.innerHTML = ''; // Clear previous messages
        renderComparisonChart(debater1, debater2);
        renderComparisonStats(debater1, debater2);
    });

    // Panggil sekali untuk menampilkan perbandingan default saat halaman dimuat
    if (debaterNames.length >= 2) {
        compareButton.click();
    }
}

function renderComparisonChart(debater1, debater2) {
    const chartContainer = document.getElementById('comparison-chart-container');
    chartContainer.innerHTML = '<canvas id="comparisonChart"></canvas>'; // Clear and recreate canvas
    const ctx = document.getElementById('comparisonChart');
    if (!ctx) return;

    const labels = Object.keys(debater1.profile);
    const data1 = labels.map(label => parseInt(debater1.profile[label].split('/')[0]));
    const data2 = labels.map(label => parseInt(debater2.profile[label].split('/')[0]));

    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [
                {
                    label: debater1.name,
                    data: data1,
                    backgroundColor: 'rgba(255, 165, 0, 0.4)', // Oranye transparan
                    borderColor: 'rgba(255, 165, 0, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(255, 165, 0, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255, 165, 0, 1)'
                },
                {
                    label: debater2.name,
                    data: data2,
                    backgroundColor: 'rgba(0, 123, 255, 0.4)', // Biru transparan
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(0, 123, 255, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(0, 123, 255, 1)'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)'
                    },
                    pointLabels: {
                        font: {
                            size: 14,
                            family: "'Oswald', sans-serif"
                        },
                        color: '#fff'
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#fff', // Warna teks legend
                        font: {
                            size: 14,
                            family: "'Roboto', sans-serif"
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return ` ${context.dataset.label}: ${context.raw}/100`;
                        }
                    }
                }
            }
        }
    });
}

function renderComparisonStats(debater1, debater2) {
    const debater1StatsDiv = document.getElementById('debater1-stats');
    const debater2StatsDiv = document.getElementById('debater2-stats');

    if (!debater1StatsDiv || !debater2StatsDiv) return;

    debater1StatsDiv.innerHTML = `
        <h3>${debater1.name}</h3>
        <p>Tier: ${debater1.tier}</p>
        <p>Menang: ${debater1.stats.wins}</p>
        <p>Kalah: ${debater1.stats.losses}</p>
        <p>Seri: ${debater1.stats.draws}</p>
    `;

    debater2StatsDiv.innerHTML = `
        <h3>${debater2.name}</h3>
        <p>Tier: ${debater2.tier}</p>
        <p>Menang: ${debater2.stats.wins}</p>
        <p>Kalah: ${debater2.stats.losses}</p>
        <p>Seri: ${debater2.stats.draws}</p>
    `;
}

// ====== FUNGSI UNTUK NAVIGASI UNDERLINE AKTIF ======
function setupActiveNavUnderline() {
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    navLinks.forEach(link => {
        // Hapus underline dari semua link terlebih dahulu
        const underline = link.querySelector('.active-underline');
        if (underline) {
            underline.remove();
        }

        // Tambahkan kembali hanya ke link yang cocok dengan URL saat ini
        if (link.href === window.location.href) {
            const span = document.createElement('span');
            span.classList.add('active-underline');
            link.appendChild(span);
        }
        // Penanganan khusus untuk home link jika diakses via path root
        if (link.getAttribute('href') === 'index.html' && (window.location.pathname === '/' || window.location.pathname.endsWith('index.html'))) {
            const span = document.createElement('span');
            span.classList.add('active-underline');
            link.appendChild(span);
        }
    });
}
