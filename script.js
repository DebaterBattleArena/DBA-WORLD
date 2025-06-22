// ====== DATA DEBAT SEKARANG LANGSUNG ADA DI SINI ======
const debatesData = [
    {
        "id": "debate-001",
        "category": "FICTIONAL DEBATE",
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
            "tier": "Mid Tier" // Ditambahkan
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
            "tier": "Mid Tier" // Ditambahkan
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
            "tier": "High Tier" // Ditambahkan
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
            "tier": "High Tier" // Ditambahkan
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
            "tier": "Low Tier" // Ditambahkan
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
            "tier": "Low Tier" // Ditambahkan
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
        "debater1": {
            "name": "RANZT",
            "photo": "IMG_0555.jpeg",  // Pastikan nama file ini benar jika Anda punya gambarnya
            "country": "indonesia",
            "flag": "IMG_0417.png",   
            "profile": {
                "Rhetoric": "10/10",
                "Typing Structure": "8/10",
                "Critical Thinking": "10/10",
                "Logical Fallacies": "10/10",
                "Typing Strenght": "9/10",
                "Tiering Sistem": "8/10",
                "Calculation": "5/10",
                    "Philisophy": "9/10",
                "General Knowledge": "10/10"
            },
            "tier": "Mid Tier" // Ditambahkan
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
            "tier": "Mid Tier" // Ditambahkan
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
    const debates = debatesData; // Mengakses data yang sudah tertanam
    
    // Memproses data untuk membuat daftar debater global yang unik
    debates.forEach(debate => {
        if (debate.debater1 && debate.debater1.name && !allDebaters[debate.debater1.name]) {
            allDebaters[debate.debater1.name] = debate.debater1;
        }
        if (debate.debater2 && debate.debater2.name && !allDebaters[debate.debater2.name]) {
            allDebaters[debate.debater2.name] = debate.debater2;
        }
    });

    const container = document.getElementById('debates-container');
    if (!container) return; // Keluar jika ini bukan index.html

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
    const debaterName = urlParams.get('name'); // Mendapatkan nama debater dari URL

    const profileCard = document.querySelector('.profile-card');

    if (!profileCard) return; // Keluar jika ini bukan profile.html

    if (!debaterName) {
        profileCard.innerHTML = `<p style="color: red;">Nama debater tidak ditemukan di URL.</p>`;
        return;
    }

    // Membangun allDebaters map (karena ini akan dijalankan terpisah dari index.html)
    debatesData.forEach(debate => {
        if (debate.debater1 && debate.debater1.name && !allDebaters[debate.debater1.name]) {
            allDebaters[debate.debater1.name] = debate.debater1;
        }
        if (debate.debater2 && debate.debater2.name && !allDebaters[debate.debater2.name]) {
            allDebaters[debate.deb2.name] = debate.debater2; // Typo here, should be debater2.name
        }
    });
    // Fix: Rebuild allDebaters map correctly
    allDebaters = {};
    debatesData.forEach(debate => {
        if (debate.debater1 && debate.debater1.name) {
            allDebaters[debate.debater1.name] = debate.debater1;
        }
        if (debate.debater2 && debate.debater2.name) {
            allDebaters[debate.debater2.name] = debate.debater2;
        }
    });

    const foundDebater = allDebaters[debaterName];

    if (!foundDebater || !foundDebater.profile) {
        profileCard.innerHTML = `<p style="color: red;">Profil untuk ${debaterName} tidak ditemukan.</p>`;
        return;
    }

    // Render profil debater
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
    const rankingContainer = document.getElementById('ranking-container'); // Menggunakan container div
    if (!rankingContainer) return; 

    // Membangun allDebaters map terlebih dahulu (diperlukan karena halaman ini mungkin dimuat langsung)
    const allDebaters = {}; 
    debatesData.forEach(debate => {
        if (debate.debater1 && debate.debater1.name) {
            allDebaters[debate.debater1.name] = debate.debater1;
        }
        if (debate.debater2 && debate.debater2.name) {
            allDebaters[debate.debater2.name] = debate.debater2;
        }
    });

    const allDebatersByTier = {
        "Low Tier": [],
        "Mid Tier": [],
        "High Tier": []
    };

    // Kelompokkan debater berdasarkan tier
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
            // Sort debaters within tier alphabetically by name
            debatersInTier.sort((a, b) => a.name.localeCompare(b.name));

            rankingHtml += `
                <h3 class="tier-heading">${tierName}</h3>
                <div class="table-responsive"> <table class="ranking-table">
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
            </div> `;
        }
    });

    rankingContainer.innerHTML = rankingHtml;
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
    }
});
