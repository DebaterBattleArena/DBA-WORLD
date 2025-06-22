// ====== DATA DEBAT SEKARANG LANGSUNG ADA DI SINI ======
const debatesData = [
    {
        "id": "debate-001",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-15", // Tanggal debat ditambahkan
        "debater1": {
            "name": "HIROO",
            "photo": "IMG_0524.jpeg",  
            "country": "indonesia",
            "flag": "IMG_0417.png",   
            "profile": {
                "Rhetoric": "9/10",
                "Typing Structure": "9/10",
                "Critical Thinking": "10/10",
                "Logical Fallacies": "0/10",
                "Typing Strenght": "9/10",
                "Tiering Sistem": "8/10",
                "Calculation": "8/10",
                "Philisophy": "9/10",
                "General Knowledge": "10/10"
            },
            "tier": "Mid Tier" 
        },
        "debater2": {
            "name": "RENJI",
            "photo": "IMG_0523.jpeg",  
            "country": "malaysia",
            "flag": "IMG_0418.png",   
            "profile": {
                "Rhetoric": "3/10",
                "Typing Structure": "2/10",
                "Critical Thinking": "1/10",
                "Logical Fallacies": "0/10",
                "Typing Strenght": "1/10",
                "Tiering Sistem": "1/10",
                "Calculation": "0/10",
                "Philisophy": "0/10",
                "General Knowledge": "1/10"
            },
            "tier": "Mid Tier" 
        },
        "type": "MID TIER DEBATE",  
        "winner": {
            "name": "HIROO",
            "method": "limit"
        },
        "loser": {
            "name": "RENJI"
        }
    },
    {
        "id": "debate-002",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-10", // Tanggal debat ditambahkan
        "debater1": {
            "name": "ZOGRATIS",
            "photo": "IMG_0526.jpeg",  
            "country": "indonesia",
            "flag": "IMG_0417.png",   
            "profile": {
                "Rhetoric": "6/10",
                "Typing Structure": "5/10",
                "Critical Thinking": "7/10",
                "Logical Fallacies": "3/10",
                "Typing Strenght": "5/10",
                "Tiering Sistem": "6/10",
                "Calculation": "2/10",
                "Philisophy": "0/10",
                "General Knowledge": "7/10"
            },
            "tier": "High Tier" 
        },
        "debater2": {
            "name": "MUCHIBEI",
            "photo": "IMG_0530.jpeg",  
            "country": "malaysia",
            "flag": "IMG_0418.png",   
            "profile": {
                "Rhetoric": "5/10",
                "Typing Structure": "5/10",
                "Critical Thinking": "7/10",
                "Logical Fallacies": "2/10",
                "Typing Strenght": "7/10",
                "Tiering Sistem": "4/10",
                "Calculation": "4/10",
                "Philisophy": "0/10",
                "General Knowledge": "8/10"
            },
            "tier": "High Tier" 
        },
        "type": "MID TIER DEBATE",
        "winner": {
            "name": "ZOGRATIS",
            "method": "point"
        },
        "loser": {
            "name": "MUCHIBEI"
        }
    },
    {
        "id": "debate-003",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-05", // Tanggal debat ditambahkan
        "debater1": {
            "name": "ARYANWT",
            "photo": "IMG_0525.jpeg",  
            "country": "indonesia",
            "flag": "IMG_0417.png",   
            "profile": {
                "Rhetoric": "8/10",
                "Typing Structure": "7/10",
                "Critical Thinking": "9/10",
                "Logical Fallacies": "1/10",
                "Typing Strenght": "7/10",
                "Tiering Sistem": "9/10",
                "Calculation": "0/10",
                "Philisophy": "7/10",
                "General Knowledge": "10/10"
            },
            "tier": "Low Tier" 
        },
        "debater2": {
            "name": "RIM",
            "photo": "IMG_0527.jpeg",  
            "country": "malaysia",
            "flag": "IMG_0418.png",   
            "profile": {
                "Rhetoric": "4/10",
                "Typing Structure": "5/10",
                "Critical Thinking": "4.5/10",
                "Logical Fallacies": "2/10",
                "Typing Strenght": "3.5/10",
                "Tiering Sistem": "4.3/10",
                "Calculation": "3.6/10",
                "Philisophy": "3/10",
                "General Knowledge": "7/10"
            },
            "tier": "Low Tier" 
        },
        "type": "MID TIER DEBATE",
        "winner": {
            "name": "ARYANWT",
            "method": "point"
        },
        "loser": {
            "name": "RIM"
        }
    },
    {
        "id": "debate-004",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-01", // Tanggal debat ditambahkan
        "debater1": {
            "name": "RANZT",
            "photo": "IMG_0555.jpeg",  // Pastikan nama file ini benar jika Anda punya gambarnya
            "country": "indonesia",
            "flag": "IMG_0417.png",   
            "profile": {
                "Rhetoric": "10/10",
                "Typing Structure": "10/10",
                "Critical Thinking": "10/10",
                "Logical Fallacies": "10/10",
                "Typing Strenght": "9/10",
                "Tiering Sistem": "8/10",
                "Calculation": "5/10",
                    "Philisophy": "9/10",
                "General Knowledge": "10/10"
            },
            "tier": "Mid Tier" 
        },
        "debater2": {
            "name": "RYUU",
            "photo": "IMG_0556.jpeg",  // Pastikan nama file ini benar jika Anda punya gambarnya
            "country": "malaysia",
            "flag": "IMG_0418.png",   
            "profile": {
                "Rhetoric": "8.5/10",
                "Typing Structure": "8/10",
                "Critical Thinking": "7/10",
                "Logical Fallacies": "6/10",
                "Typing Strenght": "5/10",
                "Tiering Sistem": "5/10",
                "Calculation": "7/10",
                "Philisophy": "4/10",
                "General Knowledge": "10/10"
            },
            "tier": "Mid Tier" 
        },
        "type": "MID TIER DEBATE",
        "winner": {
            "name": "RANZT",
            "method": "point"
        },
        "loser": {
            "name": "RYUU"
        }
    }
];

// ====== Global variable to store all debater profiles for easy lookup ======
let allDebaters = {}; 

// ====== POPULATE ALLDEBATERS MAP ONCE AT SCRIPT INITIALIZATION ======
debatesData.forEach(debate => {
    if (debate.debater1 && debate.debater1.name) {
        allDebaters[debate.debater1.name] = debate.debater1;
    }
    if (debate.debater2 && debate.debater2.name) {
        allDebaters[debate.debater2.name] = debate.debater2;
    }
});


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

// ====== FUNGSI UNTUK MEMUAT DATA DEBAT DAN MERENDERNYA (UNTUK index.html) ======
function loadAndRenderDebatesForIndexPage() {
    const debates = debatesData; 
    
    const container = document.getElementById('debates-container');
    if (!container) return; 

    let htmlContent = '';
    // Filter untuk menampilkan debat yang belum selesai di halaman utama
    const upcomingDebates = debates.filter(debate => !debate.winner || !debate.loser); // Jika tidak ada winner/loser, anggap belum selesai
    
    upcomingDebates.forEach(debate => { // Render hanya debat yang belum selesai
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
                        <a href="profile.html?name=${encodeURIComponent(debate.debater1.name)}" class="name debater-profile-link">${debate.debater1.name}</a>
                        <span class="origin"><img src="${debate.debater1.flag}" alt="Bendera ${debate.debater1.country}"> ${debate.debater1.country.toUpperCase()}</span>
                    </div>
                    <span class="match-vs">VS</span>
                    <div class="debater-info">
                        <img src="${debate.debater2.photo}" alt="Foto ${debate.debater2.name}">
                        <a href="profile.html?name=${encodeURIComponent(debate.debater2.name)}" class="name debater-profile-link">${debate.debater2.name}</a>
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

// ====== FUNGSI UNTUK MERENDER HALAMAN PROFIL (UNTUK profile.html) ======
function renderProfilePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const debaterName = urlParams.get('name'); 

    const profileCard = document.querySelector('.profile-card');

    if (!profileCard) return; 

    if (!debaterName) {
        profileCard.innerHTML = `<p style="color: red;">Nama debater tidak ditemukan di URL.</p>`;
        return;
    }

    const foundDebater = allDebaters[debaterName]; 

    if (!foundDebater || !foundDebater.profile) {
        profileCard.innerHTML = `<p style="color: red;">Profil untuk ${debaterName} tidak ditemukan.</p>`;
        return;
    }

    let profileHtml = `
        <img src="${foundDebater.photo}" alt="Foto ${foundDebater.name}">
        <h2>${foundDebater.name}</h2>
        <p class="origin"><img src="${foundDebater.flag}" alt="Bendera ${foundDebater.country}"> ${foundDebater.country.toUpperCase()}</p>
        <h3>Statistik Debat</h3>
        <ul>
    `;
    for (const skill in foundDebater.profile) {
        if (foundDebater.profile.hasOwnProperty(skill)) {
            profileHtml += `<li><strong>${skill}:</strong> <span>${foundDebater.profile[skill]}</span></li>`;
        }
    }
    profileHtml += `</ul>`;

    profileCard.innerHTML = profileHtml;
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

    // Kelompokkan debater berdasarkan tier dari allDebaters yang sudah terisi secara global
    Object.values(allDebaters).forEach(debater => {
        if (debater.tier && allDebatersByTier[debater.tier]) {
            allDebatersByTier[debater.tier].push(debater);
        }
    });

    let rankingHtml = '';
    const tiersOrder = ["Low Tier", "Mid Tier", "High Tier"]; // Urutan tier

    tiersOrder.forEach(tierName => {
        const debatersInTier = allDebatersByTier[tierName];
        
        if (debatersInTier && debatersInTier.length > 0) {
            // Pengurutan kustom untuk Mid Tier
            if (tierName === "Mid Tier") {
                const midTierCustomOrder = ["RANZT", "HIROO", "RYUU", "RENJI"]; // Ini urutan yang Anda inginkan
                debatersInTier.sort((a, b) => {
                    const indexA = midTierCustomOrder.indexOf(a.name);
                    const indexB = midTierCustomOrder.indexOf(b.name);
                    if (indexA === -1 || indexB === -1) {
                         // Fallback ke urutan alfabetis jika ada debater yang tidak terdaftar dalam urutan kustom
                        return a.name.localeCompare(b.name);
                    }
                    return indexA - indexB;
                });
            } else {
                // Urutan alfabetis default untuk tier lainnya
                debatersInTier.sort((a, b) => a.name.localeCompare(b.name));
            }

            rankingHtml += `
                <h3 class="tier-heading">${tierName}</h3>
                <div class="table-responsive"> <!-- WRAPPER BARU UNTUK SCROLL HORIZONTAL -->
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
                            <div class="debater-cell">
                                <img src="${debater.photo}" alt="Foto ${debater.name}">
                                <a href="profile.html?name=${encodeURIComponent(debater.name)}" class="debater-name">${debater.name}</a>
                            </div>
                        </td>
                        <td>${debater.profile['Rhetoric']}</td>
                        <td>${debater.profile['Critical Thinking']}</td>
                        <td>${debater.profile['General Knowledge']}</td>
                    </tr>
                `;
            });
            rankingHtml += `
                    </tbody>
                </table>
            </div> <!-- AKHIR WRAPPER BARU -->
            `;
        }
    });

    rankingContainer.innerHTML = rankingHtml;
}

// ====== FUNGSI UNTUK MERENDER HALAMAN ARSIP (UNTUK archive.html) ======
function renderArchivePage() {
    const archiveListContainer = document.getElementById('archive-list');
    if (!archiveListContainer) return;

    // Filter debat yang sudah selesai (memiliki pemenang/kalah)
    const archivedDebates = debatesData.filter(debate => debate.winner && debate.loser);

    // Urutkan debat arsip berdasarkan tanggal (terbaru di atas)
    archivedDebates.sort((a, b) => new Date(b.date) - new Date(a.date));

    let archiveHtml = '';
    if (archivedDebates.length === 0) {
        archiveHtml = '<p style="text-align: center; color: var(--light-grey);">Belum ada arsip debat yang tersedia.</p>';
    } else {
        archivedDebates.forEach(debate => {
            archiveHtml += `
                <div class="archive-item">
                    <div class="archive-header">
                        <span class="category">${debate.category}</span>
                        <span class="date">${debate.date}</span>
                    </div>
                    <div class="archive-participants">
                        <span>${debate.debater1.name}</span> <span class="vs">VS</span> <span>${debate.debater2.name}</span>
                    </div>
                    <div class="archive-result">
                        <p>Winner: <span class="winner-name">${debate.winner.name}</span> by ${debate.winner.method}</p>
                        <p>Loss: <span class="loss-name">${debate.loser.name}</span></p>
                    </div>
                    <div class="archive-type">(${debate.type})</div>
                </div>
            `;
        });
    }

    archiveListContainer.innerHTML = archiveHtml;
}


// ====== FUNGSI UNTUK MERENDER HALAMAN COMPARE (UNTUK compare.html) ======
let chartInstance = null; 

function renderComparePage() {
    const debater1Select = document.getElementById('debater1-select');
    const debater2Select = document.getElementById('debater2-select');
    const chartArea = document.getElementById('chart-area');
    const chartCanvas = document.getElementById('radarChart');

    if (!debater1Select || !debater2Select || !chartArea || !chartCanvas) {
        console.error("Elemen-elemen untuk halaman compare tidak ditemukan.");
        return;
    }

    const debaterNames = Object.keys(allDebaters).sort(); 
    
    debater1Select.innerHTML = '<option value="">Pilih Debater 1</option>';
    debater2Select.innerHTML = '<option value="">Pilih Debater 2</option>';

    debaterNames.forEach(name => {
        const option1 = document.createElement('option');
        option1.value = name;
        option1.textContent = name;
        debater1Select.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = name;
        option2.textContent = name;
        debater2Select.appendChild(option2);
    });

    function updateComparison() {
        const selectedDebater1Name = debater1Select.value;
        const selectedDebater2Name = debater2Select.value;

        if (!selectedDebater1Name || !selectedDebater2Name) {
            chartArea.innerHTML = '<p class="chart-message">Pilih dua debater untuk membandingkan statistik mereka.</p>';
            if (chartInstance) {
                chartInstance.destroy();
                chartInstance = null;
            }
            return;
        }

        const debater1 = allDebaters[selectedDebater1Name]; 
        const debater2 = allDebaters[selectedDebater2Name]; 

        if (!debater1 || !debater2 || !debater1.profile || !debater2.profile) {
            chartArea.innerHTML = '<p class="chart-message" style="color: red;">Statistik debater tidak lengkap.</p>';
            if (chartInstance) {
                chartInstance.destroy();
                chartInstance = null;
            }
            return;
        }

        chartArea.innerHTML = '';
        chartArea.appendChild(chartCanvas);

        const labels = Object.keys(debater1.profile); 
        const data1 = labels.map(label => parseFloat(debater1.profile[label]));
        const data2 = labels.map(label => parseFloat(debater2.profile[label]));

        if (chartInstance) {
            chartInstance.destroy(); 
        }

        const ctx = chartCanvas.getContext('2d');
        chartInstance = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: debater1.name,
                        data: data1,
                        backgroundColor: 'rgba(54, 162, 235, 0.4)', 
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
                    },
                    {
                        label: debater2.name,
                        data: data2,
                        backgroundColor: 'rgba(255, 99, 132, 0.4)', 
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 2,
                        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, 
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.2)' 
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.3)' 
                        },
                        pointLabels: {
                            color: 'var(--text-color)', 
                            font: {
                                size: 12
                            }
                        },
                        ticks: {
                            beginAtZero: true,
                            max: 10, 
                            stepSize: 2, 
                            color: 'var(--light-grey)', 
                            backdropColor: 'transparent', 
                            showLabelBackdrop: false 
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'var(--text-color)' 
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': ' + context.raw;
                            }
                        }
                    }
                }
            }
        });
    }

    debater1Select.addEventListener('change', updateComparison);
    debater2Select.addEventListener('change', updateComparison);

    updateComparison(); 
}


// ====== PANGGIL FUNGSI SAAT HALAMAN SELESAI DIMUAT ======
document.addEventListener('DOMContentLoaded', () => {
    // Cek halaman saat ini untuk menjalankan logika yang sesuai
    if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')) {
        // Ini adalah halaman index.html
        startCountdown();
        loadAndRenderDebatesForIndexPage();
    } else if (window.location.pathname.endsWith('profile.html')) {
        // Ini adalah halaman profile.html
        renderProfilePage();
    } else if (window.location.pathname.endsWith('ranking.html')) {
        // Ini adalah halaman ranking.html
        renderRankingPage();
    } else if (window.location.pathname.endsWith('archive.html')) { // BARU: Panggil renderArchivePage
        // Ini adalah halaman archive.html
        renderArchivePage();
    } else if (window.location.pathname.endsWith('compare.html')) {
        // Ini adalah halaman compare.html
        renderComparePage();
    }
});
