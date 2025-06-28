// ====== DATA DEBAT SEKARANG LANGSUNG ADA DI SINI ======
const debatesData = [
    {
        "id": "debate-001",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-15",
        "matchBanner": "4ba98405-9174-4806-86b0-48db675ff249.jpeg", // Path gambar match banner
        "debater1": {
            "name": "HIROO",
            "photo": "IMG_0524.jpeg",
            "country": "indonesia",
            "flag": "IMG_0417.png",
            "vbWiki": "Outerversal+",
            "ibr": "High 1-A",
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
            "tier": "Mid Tier",
            "fightRecord": { "win": 1, "loss": 0, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "debater2": {
            "name": "RENJI",
            "photo": "IMG_0523.jpeg",
            "country": "malaysia",
            "flag": "IMG_0418.png",
            "vbWiki": "Low 1-A",
            "ibr": "High 1-A",
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
            "tier": "Mid Tier",
            "fightRecord": { "win": 0, "loss": 1, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "MID TIER DEBATE", // Digunakan sebagai topik
        "winner": { "name": "HIROO", "method": "limit" },
        "loser": { "name": "RENJI" }
    },
    {
        "id": "debate-002",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-10",
        "matchBanner": "5c6e6c7b-dc86-4ca3-a496-6b0d34eefa77.jpeg", // Path gambar match banner
        "debater1": {
            "name": "ZOGRATIS",
            "photo": "IMG_0526.jpeg",
            "country": "indonesia",
            "flag": "IMG_0417.png",
            "vbWiki": "Boundless",
            "ibr": "Beyond Dimensionality",
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
            "tier": "High Tier",
            "fightRecord": { "win": 1, "loss": 0, "draw": 0 },
            "boxingRecord": { "win": 1, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "debater2": {
            "name": "MUCHIBEI",
            "photo": "IMG_0530.jpeg",
            "country": "malaysia",
            "flag": "IMG_0418.png",
            "vbWiki": "Low 1-A",
            "ibr": "High 1-A",
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
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 1, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "HIGH TIER DEBATE", // Digunakan sebagai topik
        "winner": { "name": "ZOGRATIS", "method": "point" },
        "loser": { "name": "MUCHIBEI" }
    },
    {
        "id": "debate-003",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-05",
        "matchBanner": "0fa5d532-e863-4322-aefd-31e538cf2bcc.jpeg", // Path gambar match banner
        "debater1": {
            "name": "ARYANWT",
            "photo": "IMG_0525.jpeg",
            "country": "indonesia",
            "flag": "IMG_0417.png",
            "vbWiki": "Low 1-A",
            "ibr": "High 1-A",
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
            "tier": "Low Tier",
            "fightRecord": { "win": 1, "loss": 0, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "debater2": {
            "name": "RIM",
            "photo": "IMG_0527.jpeg",
            "country": "malaysia",
            "flag": "IMG_0418.png",
            "vbWiki": "High 1-B",
            "ibr": "Low 1-A",
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
            "tier": "Low Tier",
            "fightRecord": { "win": 0, "loss": 1, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "LOW TIER DEBATE", // Digunakan sebagai topik
        "winner": { "name": "ARYANWT", "method": "point" },
        "loser": { "name": "RIM" }
    },
    {
        "id": "debate-004",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-01",
        "matchBanner": "79194c7a-6e34-4bbd-a21e-9e9c918c4707.jpeg", // Path gambar match banner
        "debater1": {
            "name": "RANZT",
            "photo": "IMG_0555.jpeg",
            "country": "indonesia",
            "flag": "IMG_0417.png",
            "vbWiki": "Outerversal+",
            "ibr": "High 1-A",
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
            "tier": "Mid Tier",
            "fightRecord": { "win": 1, "loss": 0, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "debater2": {
            "name": "RYUU",
            "photo": "IMG_0556.jpeg",
            "country": "malaysia",
            "flag": "IMG_0418.png",
            "vbWiki": "Low 1-A",
            "ibr": "High 1-A",
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
            "tier": "Mid Tier",
            "fightRecord": { "win": 0, "loss": 1, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "MID TIER DEBATE", // Digunakan sebagai topik
        "winner": { "name": "RANZT", "method": "point" },
        "loser": { "name": "RYUU" }
    },
    {
        "id": "debate-005",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-26",
        "matchBanner": "cdf5db1e-6410-4df1-a920-6d4f4e41b412.jpeg", // Path gambar match banner
        "debater1": {
            "name": "Thinzel",
            "photo": "IMG_0819.jpeg",
            "country": "indonesia",
            "flag": "IMG_0417.png",
            "vbWiki": "High 1-B",
            "ibr": "Low 1-A",
            "profile": {
                "Rhetoric": "1/10",
                "Typing Structure": "1/10",
                "Critical Thinking": "2/10",
                "Logical Fallacies": "0/10",
                "Typing Strenght": "1/10",
                "Tiering Sistem": "2/10",
                "Calculation": "0/10",
                "Philisophy": "0/10",
                "General Knowledge": "0/10"
            },
            "tier": "Low Tier",
            "fightRecord": { "win": 1, "loss": 0, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "debater2": {
            "name": "Shade",
            "photo": "IMG_0820.jpeg",
            "country": "malaysia",
            "flag": "IMG_0418.png",
            "vbWiki": "Low 1-C",
            "ibr": "High 1-B",
            "profile": {
                "Rhetoric": "3/10",
                "Typing Structure": "2/10",
                "Critical Thinking": "1/10",
                "Logical Fallacies": "0/10",
                "Typing Strenght": "4/10",
                "Tiering Sistem": "1/10",
                "Calculation": "0/10",
                "Philisophy": "0/10",
                "General Knowledge": "1/10"
            },
            "tier": "Low Tier",
            "fightRecord": { "win": 0, "loss": 1, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "LOW TIER DEBATE", // Digunakan sebagai topik
        "winner": { "name": "Thinzel", "method": "limit" },
        "loser": { "name": "Shade" }
    },
     {
        "id": "debate-006",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-26",
        "matchBanner": "7a47b236-a78a-4b2f-bbce-9cadecef6843.jpeg", // Path gambar match banner
        "debater1": {
            "name": "Lianx",
            "photo": "IMG_0935.jpeg",
            "country": "indonesia",
            "flag": "IMG_0417.png",
            "vbWiki": "High 1-B",
            "ibr": "Low 1-A",
            "profile": {
                "Rhetoric": "8/10",
                "Typing Structure": "9/10",
                "Critical Thinking": "9/10",
                "Logical Fallacies": "9/10",
                "Typing Strenght": "8/10",
                "Tiering Sistem": "7/10",
                "Calculation": "9/10",
                "Philisophy": "8/10",
                "General Knowledge": "8/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 1, "loss": 0, "draw": 0 }, // Diperbaiki: Menggunakan fightRecord
            "boxingRecord": { "win": 1, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "debater2": {
            "name": "Adyy",
            "photo": "IMG_0934.jpeg",
            "country": "malaysia",
            "flag": "IMG_0418.png",
            "vbWiki": "Low 1-C",
            "ibr": "High 1-B",
            "profile": {
                "Rhetoric": "8/10",
                "Typing Structure": "8/10",
                "Critical Thinking": "7/10",
                "Logical Fallacies": "6/10",
                "Typing Strenght": "7/10",
                "Tiering Sistem": "9/10",
                "Calculation": "7/10",
                "Philisophy": "0/10",
                "General Knowledge": "10/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 1, "draw": 0 }, // Diperbaiki: Menggunakan fightRecord
            "boxingRecord": { "win": 0, "loss": 1, "draw": 0 },
            "achievements": []
        },
        "type": "HIGH TIER DEBATE", // Digunakan sebagai topik
        "winner": { "name": "Lianx", "method": "Point" },
        "loser": { "name": "Adyy" }
    }
];
// ====== Global variable to store all debater profiles and calculated stats for easy lookup ======
let allDebaters = {};

// ====== POPULATE ALLDEBATERS MAP AND ADD RECORDS / MATCH HISTORY ONCE AT SCRIPT INITIALIZATION ======
debatesData.forEach(debate => {
    const debater1Name = debate.debater1.name;
    const debater2Name = debate.debater2.name;

    // Inisialisasi debater jika belum ada, termasuk achievements array kosong
    if (!allDebaters[debater1Name]) {
        // Menggunakan fightRecord dan boxingRecord dari data awal sebagai inisialisasi
        allDebaters[debater1Name] = { 
            ...debate.debater1, 
            wins: 0, 
            losses: 0, 
            draws: 0, // Inisialisasi draw
            matchHistory: [], 
            achievements: [] 
        };
    } else {
        // Jika debater sudah ada, pastikan properti baru disalin dan achievements array tetap ada
        Object.assign(allDebaters[debater1Name], debate.debater1);
        if (!allDebaters[debater1Name].achievements) allDebaters[debater1Name].achievements = [];
        if (typeof allDebaters[debater1Name].wins === 'undefined') allDebaters[debater1Name].wins = 0;
        if (typeof allDebaters[debater1Name].losses === 'undefined') allDebaters[debater1Name].losses = 0;
        if (typeof allDebaters[debater1Name].draws === 'undefined') allDebaters[debater1Name].draws = 0;
        if (!allDebaters[debater1Name].matchHistory) allDebaters[debater1Name].matchHistory = [];
    }

    if (!allDebaters[debater2Name]) {
        // Menggunakan fightRecord dan boxingRecord dari data awal sebagai inisialisasi
        allDebaters[debater2Name] = { 
            ...debate.debater2, 
            wins: 0, 
            losses: 0, 
            draws: 0, // Inisialisasi draw
            matchHistory: [], 
            achievements: [] 
        };
    } else {
        Object.assign(allDebaters[debater2Name], debate.debater2);
        if (!allDebaters[debater2Name].achievements) allDebaters[debater2Name].achievements = [];
        if (typeof allDebaters[debater2Name].wins === 'undefined') allDebaters[debater2Name].wins = 0;
        if (typeof allDebaters[debater2Name].losses === 'undefined') allDebaters[debater2Name].losses = 0;
        if (typeof allDebaters[debater2Name].draws === 'undefined') allDebaters[debater2Name].draws = 0;
        if (!allDebaters[debater2Name].matchHistory) allDebaters[debater2Name].matchHistory = [];
    }


    if (debate.winner && debate.loser) {
        const winnerName = debate.winner.name;
        const loserName = debate.loser.name;
        const debateYear = new Date(debate.date).getFullYear().toString();

        // Update match history dan records
        allDebaters[winnerName].wins += 1;
        // Gunakan properti 'fightRecord' yang sudah ada atau inisialisasi jika belum
        if (allDebaters[winnerName].fightRecord) {
            allDebaters[winnerName].fightRecord.win = (allDebaters[winnerName].fightRecord.win || 0) + 1;
        } else {
            allDebaters[winnerName].fightRecord = { "win": 1, "loss": 0, "draw": 0 };
        }

        allDebaters[winnerName].matchHistory.push({
            opponent: loserName,
            result: "Win",
            method: debate.winner.method,
            date: debate.date,
            category: debate.category,
            id: debate.id,
            round: debate.round,
            time: debate.time
        });

        allDebaters[loserName].losses += 1;
        // Gunakan properti 'fightRecord' yang sudah ada atau inisialisasi jika belum
        if (allDebaters[loserName].fightRecord) {
            allDebaters[loserName].fightRecord.loss = (allDebaters[loserName].fightRecord.loss || 0) + 1;
        } else {
            allDebaters[loserName].fightRecord = { "win": 0, "loss": 1, "draw": 0 };
        }

        allDebaters[loserName].matchHistory.push({
            opponent: winnerName,
            result: "Loss",
            method: "",
            date: debate.date,
            category: debate.category,
            id: debate.id,
            round: debate.round,
            time: debate.time
        });

        const existingWinnerAchievement = allDebaters[winnerName].achievements.find(
            ach => ach.event === `DBA Match vs ${loserName}` && ach.date === debateYear
        );
        if (!existingWinnerAchievement) {
            allDebaters[winnerName].achievements.push({
                "event": `DBA Match vs ${loserName}`,
                "achievement": "Winner",
                "date": debateYear
            });
        }

        const existingLoserAchievement = allDebaters[loserName].achievements.find(
            ach => ach.event === `DBA Match vs ${winnerName}` && ach.date === debateYear
        );
        if (!existingLoserAchievement) {
            allDebaters[loserName].achievements.push({
                "event": `DBA Match vs ${winnerName}`,
                "achievement": "Participant",
                "date": debateYear
            });
        }
    }
});

// Setelah semua debat diproses, sortir achievements untuk setiap debater berdasarkan tanggal (tahun) terbaru
Object.values(allDebaters).forEach(debater => {
    if (debater.achievements && debater.achievements.length > 0) {
        debater.achievements.sort((a, b) => parseInt(b.date) - parseInt(a.date));
    }
});

// ====== FUNGSI UNTUK COUNTDOWN ACARA UTAMA ======
function startCountdown() {
    // Target date sudah berlalu, jadi langsung set ke 00.00.00.00
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.innerHTML = "0";
    if (hoursEl) hoursEl.innerHTML = "00";
    if (minutesEl) minutesEl.innerHTML = "00";
    if (secondsEl) secondsEl.innerHTML = "00";
    console.log("Countdown Selesai (Diset manual ke 00.00.00.00).");
}


// ====== FUNGSI UNTUK MEMUAT DATA DEBAT DAN MERENDERNYA (UNTUK index.html) ======
function loadAndRenderDebatesForIndexPage() {
    const debates = debatesData;

    const container = document.getElementById('debates-container');
    if (!container) return;

    let htmlContent = '';

    debates.forEach(debate => {
        let resultSectionHtml = '';
        if (debate.winner && debate.loser) {
            resultSectionHtml = `
                <div class="match-result-section">
                    <div class="result-info winner">WINNER: ${debate.winner.name.toUpperCase()} BY ${debate.winner.method.toUpperCase()}</div>
                    <div class="result-info loser">LOSS: ${debate.loser.name.toUpperCase()}</div>
                </div>
            `;
        }

        const matchTopicText = debate.type ? debate.type.toUpperCase() : 'NO TOPIC'; 

        htmlContent += `
            <div class="match-card">
                <div class="match-image-container">
                    <img src="${debate.matchBanner}" alt="Debat antara ${debate.debater1.name} vs ${debate.debater2.name}" class="match-banner-img">
                    <div class="match-category-label">${debate.category.toUpperCase()} | ${debate.type.toUpperCase()}</div>
                </div>
                <div class="match-details-bottom">
                    <div class="debater-names-row">
                        <div class="debater-entry">
                            <a href="profile.html?name=${encodeURIComponent(debate.debater1.name)}" class="debater-name-link">
                                ${debate.debater1.name.toUpperCase()}
                            </a>
                            <img src="${debate.debater1.flag}" alt="Bendera ${debate.debater1.country}" class="flag-icon-small">
                        </div>
                        <span class="match-vs-text">VS</span>
                        <div class="debater-entry">
                            <a href="profile.html?name=${encodeURIComponent(debate.debater2.name)}" class="debater-name-link">
                                ${debate.debater2.name.toUpperCase()}
                            </a>
                            <img src="${debate.debater2.flag}" alt="Bendera ${debate.debater2.country}" class="flag-icon-small">
                        </div>
                    </div>
                    <p class="match-topic">${matchTopicText}</p>
                </div>
                ${resultSectionHtml}
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

    const profileDebaterImage = profileCard.querySelector('.profile-debater-image');
    const divisionText = profileCard.querySelector('.profile-division-status .division-text');
    const profileName = profileCard.querySelector('.profile-name');
    const countryText = profileCard.querySelector('.profile-country-info .country-text');
    const profileFlagIcon = profileCard.querySelector('.profile-country-info .profile-flag-icon');

    const vbWikiValue = profileCard.querySelector('.profile-info-item .vb-wiki-value');
    const ibrValue = profileCard.querySelector('.profile-info-item .ibr-value');

    const fightRecordWinNumber = profileCard.querySelector('.profile-fight-record .win-number');
    const fightRecordLossNumber = profileCard.querySelector('.profile-fight-record .loss-number');
    const fightRecordDrawNumber = profileCard.querySelector('.profile-fight-record .draw-number');

    const matchHistoryList = profileCard.querySelector('.match-history-list');
    const achievementsTableBody = profileCard.querySelector('.achievements-table tbody');
    const statsList = profileCard.querySelector('.stats-list');

    // DEBUGGING: console.log untuk memastikan elemen ditemukan
    console.log('profileDebaterImage:', profileDebaterImage);
    console.log('divisionText:', divisionText);
    console.log('profileName:', profileName);
    console.log('countryText:', countryText);
    console.log('profileFlagIcon:', profileFlagIcon);
    console.log('vbWikiValue:', vbWikiValue);
    console.log('ibrValue:', ibrValue);
    console.log('fightRecordWinNumber:', fightRecordWinNumber);
    console.log('fightRecordLossNumber:', fightRecordLossNumber);
    console.log('fightRecordDrawNumber:', fightRecordDrawNumber);
    console.log('matchHistoryList:', matchHistoryList);
    console.log('achievementsTableBody:', achievementsTableBody);
    console.log('statsList:', statsList);

    // Pastikan semua elemen yang dibutuhkan ada sebelum mencoba menggunakannya
    if (!profileCard || !profileDebaterImage || !divisionText || !profileName || !countryText || !profileFlagIcon ||
        !vbWikiValue || !ibrValue ||
        !fightRecordWinNumber || !fightRecordLossNumber || !fightRecordDrawNumber ||
        !matchHistoryList || !achievementsTableBody || !statsList) {
        console.error("ERROR: Satu atau lebih elemen profil tidak ditemukan di DOM. Mohon periksa kembali HTML profile.html dan selektor di script.js.");
        // Tampilkan pesan error di halaman
        if (profileCard) {
            profileCard.innerHTML = `<div style="text-align: center; padding: 40px; background-color: #333; color: red; border-radius: 8px;">
                                        <h2>Terjadi kesalahan dalam memuat elemen profil.</h2>
                                        <p>Mohon periksa konsol browser (F12) untuk detail lebih lanjut dan pastikan struktur HTML Anda sesuai.</p>
                                     </div>`;
        } else {
            document.body.innerHTML = `<div style="text-align: center; padding: 40px; background-color: #333; color: red; border-radius: 8px;">
                                        <h2>Terjadi kesalahan. Container utama profil tidak ditemukan.</h2>
                                        <p>Mohon periksa kembali HTML Anda.</p>
                                     </div>`;
        }
        return;
    }

    if (!debaterName) {
        console.error("ERROR: Nama debater tidak ditemukan di URL.");
        profileCard.innerHTML = `<p style="text-align: center; padding: 40px; background-color: #333; color: red; border-radius: 8px;">Nama debater tidak ditemukan di URL. Pastikan Anda mengaksesnya dengan format seperti: profile.html?name=RANZT</p>`;
        return;
    }

    const debater = allDebaters[debaterName];

    if (!debater) {
        console.error(`ERROR: Profil untuk "${debaterName}" tidak ditemukan dalam data 'allDebaters'.`);
        profileCard.innerHTML = `<p style="text-align: center; padding: 40px; background-color: #333; color: red; border-radius: 8px;">Profil untuk debater "${debaterName}" tidak ditemukan dalam database.</p>`;
        return;
    }

    // Mengisi data ke elemen HTML
    profileDebaterImage.src = debater.photo;
    profileDebaterImage.alt = `Foto ${debater.name}`;

    divisionText.textContent = `${debater.tier.toUpperCase()} DEBATE DIVISION`;
    profileName.textContent = debater.name;

    countryText.textContent = debater.country.toUpperCase();
    profileFlagIcon.src = debater.flag;
    profileFlagIcon.alt = `Bendera ${debater.country}`;

    vbWikiValue.textContent = debater.vbWiki || 'N/A';
    ibrValue.textContent = debater.ibr || 'N/A';

    // Mengisi data rekor dari fightRecord atau boxingRecord
    // Perbaikan: Gunakan fightRecord jika ada, jika tidak, inisialisasi sebagai 0
    const currentFightRecord = debater.fightRecord || { win: 0, loss: 0, draw: 0 };
    fightRecordWinNumber.textContent = currentFightRecord.win;
    fightRecordLossNumber.textContent = currentFightRecord.loss;
    fightRecordDrawNumber.textContent = currentFightRecord.draw;


    let matchHistoryHtml = '';
    if (debater.matchHistory && debater.matchHistory.length > 0) {
        // Sortir riwayat pertandingan berdasarkan tanggal terbaru
        debater.matchHistory.sort((a, b) => new Date(b.date) - new Date(a.date));

        debater.matchHistory.forEach(match => {
            const resultClass = match.result === "Win" ? "win" : "loss";
            const opponentDebater = allDebaters[match.opponent];
            const opponentPhotoSrc = opponentDebater && opponentDebater.photo ? opponentDebater.photo : 'placeholder.jpg'; // Gunakan placeholder jika foto lawan tidak ada

            matchHistoryHtml += `
                <div class="dba-record-item ${resultClass}">
                    <div class="dba-match-info">
                        <img src="${debater.photo}" alt="Foto ${debater.name}" class="dba-debater-thumb">
                        <img src="${opponentPhotoSrc}" alt="Foto ${match.opponent}" class="dba-debater-thumb">
                        <div class="dba-details">
                            <p class="dba-vs-opponent">VS ${match.opponent.toUpperCase()}</p>
                            <p class="dba-match-spec">Date: ${match.date} Method: ${match.method || 'N/A'}</p>
                        </div>
                    </div>
                    <span class="dba-result-badge">${match.result.toUpperCase()}</span>
                </div>
            `;
        });
    } else {
        matchHistoryHtml = `<p class="no-history-message">Belum ada riwayat pertandingan DBA.</p>`;
    }
    matchHistoryList.innerHTML = matchHistoryHtml;


    let achievementsHtml = '';
    if (debater.achievements && debater.achievements.length > 0) {
        debater.achievements.forEach(ach => {
            achievementsHtml += `
                <tr>
                    <td>${ach.event}</td>
                    <td>${ach.achievement}</td>
                    <td>${ach.date}</td>
                </tr>
            `;
        });
    } else {
        achievementsHtml = `<tr><td colspan="3" class="no-history-message">Belum ada pencapaian.</td></tr>`;
    }
    achievementsTableBody.innerHTML = achievementsHtml;

    let statsHtml = '';
    if (debater.profile) {
        for (const skill in debater.profile) {
            if (debater.profile.hasOwnProperty(skill)) {
                const scoreValue = parseFloat(debater.profile[skill]);
                const scorePercentage = (scoreValue / 10) * 100; // Asumsi skor maksimal 10

                statsHtml += `
                    <li>
                        <strong>${skill}:</strong>
                        <div class="skill-bar-container">
                            <div class="skill-bar" style="width: ${scorePercentage}%;"></div>
                            <span class="skill-score">${debater.profile[skill]}</span>
                        </div>
                    </li>
                `;
            }
        }
    }
    statsList.innerHTML = statsHtml;
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
            // Sorting kustom untuk Mid Tier
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
                // Tambahkan Lianx dan Adyy ke dalam urutan kustom High Tier
                const highTierCustomOrder = ["ZOGRATIS", "Lianx", "MUCHIBEI", "Adyy"];
                debatersInTier.sort((a, b) => {
                    const indexA = highTierCustomOrder.indexOf(a.name);
                    const indexB = highTierCustomOrder.indexOf(b.name);
                    if (indexA === -1 || indexB === -1) {
                        return a.name.localeCompare(b.name);
                    }
                    return indexA - indexB;
                });
            } else if (tierName === "Low Tier") {
                const lowTierCustomOrder = ["ARYANWT", "Thinzel", "RIM", "Shade"];
                debatersInTier.sort((a, b) => {
                    const indexA = lowTierCustomOrder.indexOf(a.name);
                    const indexB = lowTierCustomOrder.indexOf(b.name);
                    if (indexA === -1 || indexB === -1) {
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

// ====== FUNGSI UNTUK MERENDER HALAMAN ARSIP (UNTUK archive.html) ======
function renderArchivePage() {
    const archiveListContainer = document.getElementById('archive-list');
    if (!archiveListContainer) return;

    const archivedDebates = debatesData.filter(debate => debate.winner && debate.loser);

    // Urutkan debat berdasarkan tanggal terbaru
    archivedDebates.sort((a, b) => new Date(b.date) - new Date(a.date));

    let archiveHtml = '';
    if (archivedDebates.length === 0) {
        archiveHtml = '<p class="no-history-message">Belum ada arsip debat yang tersedia.</p>';
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
let chartInstance = null; // Variabel global untuk menyimpan instance Chart.js

function renderComparePage() {
    const debater1Select = document.getElementById('debater1-select');
    const debater2Select = document.getElementById('debater2-select');
    const chartArea = document.getElementById('chart-area');
    const chartCanvas = document.getElementById('radarChart');

    // Pastikan elemen-elemen ada
    if (!debater1Select || !debater2Select || !chartArea || !chartCanvas) {
        console.error("Elemen-elemen untuk halaman compare tidak ditemukan.");
        return;
    }

    // Ambil semua nama debater yang tersedia dan urutkan secara alfabetis
    const debaterNames = Object.keys(allDebaters).sort();

    // Isi dropdown dengan opsi debater
    debater1Select.innerHTML = '<option value="">Pilih Debater 1</option>'; // Opsi default
    debater2Select.innerHTML = '<option value="">Pilih Debater 2</option>'; // Opsi default

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

    // Fungsi untuk memperbarui grafik perbandingan
    function updateComparison() {
        const selectedDebater1Name = debater1Select.value;
        const selectedDebater2Name = debater2Select.value;

        // Jika salah satu debater belum dipilih, tampilkan pesan dan hancurkan grafik sebelumnya
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

        // Pastikan data profil debater tersedia
        if (!debater1 || !debater2 || !debater1.profile || !debater2.profile) {
            chartArea.innerHTML = `<p class="chart-message" style="color: red;">Statistik debater untuk ${!debater1 ? selectedDebater1Name : selectedDebater2Name} tidak lengkap.</p>`;
            if (chartInstance) {
                chartInstance.destroy();
                chartInstance = null;
            }
            return;
        }

        // Hapus pesan jika ada dan pastikan canvas Chart.js terlihat
        chartArea.innerHTML = '';
        chartArea.appendChild(chartCanvas); // Pastikan canvas ada di dalam chart-area

        // Siapkan data untuk Chart.js
        const labels = Object.keys(debater1.profile); // Skill sebagai label
        const data1 = labels.map(label => parseFloat(debater1.profile[label]));
        const data2 = labels.map(label => parseFloat(debater2.profile[label]));

        // Hancurkan instance chart yang ada sebelum membuat yang baru
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
                        backgroundColor: 'rgba(54, 162, 235, 0.4)', // Warna biru
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
                        backgroundColor: 'rgba(255, 99, 132, 0.4)', // Warna merah
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
                maintainAspectRatio: false, // Penting agar bisa diatur tinggi/lebarnya oleh CSS
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(255, 255, 255, 0.2)' // Warna garis radial
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.3)' // Warna grid
                        },
                        pointLabels: {
                            color: 'var(--white-text-color)', // Warna label skill
                            font: {
                                size: 12
                            }
                        },
                        ticks: {
                            beginAtZero: true,
                            max: 10, // Maksimal skor skill
                            stepSize: 2,
                            color: 'var(--light-grey)', // Warna angka tick
                            backdropColor: 'transparent', // Hapus background di belakang angka
                            showLabelBackdrop: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'var(--white-text-color)' // Warna teks legend
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

    // Tambahkan event listener untuk perubahan pada dropdown
    debater1Select.addEventListener('change', updateComparison);
    debater2Select.addEventListener('change', updateComparison);

    // Panggil pertama kali untuk menampilkan grafik awal (jika ada pilihan default)
    updateComparison();
}


// ====== PANGGIL FUNGSI SAAT HALAMAN SELESAI DIMUAT ======
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;

    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        // Ambil path yang bersih dari link dan path saat ini
        const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '');
        const cleanedCurrentPath = currentPath.replace(/\/$/, '');

        // Logika untuk menandai link aktif
        const isHomeActive = (cleanedCurrentPath === '/index.html' || cleanedCurrentPath === '/') && (linkPath === '/index.html' || linkPath === '/');

        if (isHomeActive || (cleanedCurrentPath !== '/' && cleanedCurrentPath === linkPath)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Panggil fungsi rendering yang sesuai berdasarkan halaman saat ini
    if (currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
        startCountdown();
        loadAndRenderDebatesForIndexPage();
    } else if (currentPath.endsWith('profile.html')) {
        renderProfilePage();
    } else if (currentPath.endsWith('ranking.html')) {
        renderRankingPage();
    } else if (currentPath.endsWith('archive.html')) {
        renderArchivePage();
    } else if (currentPath.endsWith('compare.html')) {
        renderComparePage();
    }
});
