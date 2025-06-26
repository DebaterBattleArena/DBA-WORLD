// ====== DATA DEBAT SEKARANG LANGSUNG ADA DI SINI ======
const debatesData = [
    {
        "id": "debate-001",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-15",
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
            "tier": "Mid Tier",
            // Data height dan weight DIHAPUS
            "fightRecord": { "win": 1, "loss": 0, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": [
                {"event": "DBA Series 1 Indonesia vs Malaysia", "achievement": "Champion", "date": "2025"},
                {"event": "DBA Series 1 Indonesia vs Malaysia", "achievement": "Gold Medalist", "date": "2024"} // Diubah dari "Junior Battle Comp."
            ]
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
            "tier": "Mid Tier",
            // Data height dan weight DIHAPUS
            "fightRecord": { "win": 0, "loss": 1, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
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
        "date": "2025-06-10",
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
            "tier": "High Tier",
            // Data height dan weight DIHAPUS
            "fightRecord": { "win": 1, "loss": 0, "draw": 0 },
            "boxingRecord": { "win": 1, "loss": 0, "draw": 0 },
            "achievements": [
                {"event": "DBA Series 1 Indonesia vs Malaysia", "achievement": "Semi Finalist", "date": "2024"} // Diubah dari "Grand Slam Debat"
            ]
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
            "tier": "High Tier",
            // Data height dan weight DIHAPUS
            "fightRecord": { "win": 0, "loss": 1, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
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
        "date": "2025-06-05",
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
            "tier": "Low Tier",
            // Data height dan weight DIHAPUS
            "fightRecord": { "win": 1, "loss": 0, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": [
                {"event": "DBA Series 1 Indonesia vs Malaysia", "achievement": "Champion", "date": "2023"} // Diubah dari "Online Debat Liga"
            ]
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
            "tier": "Low Tier",
            // Data height dan weight DIHAPUS
            "fightRecord": { "win": 0, "loss": 1, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
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
        "date": "2025-06-01",
        "debater1": {
            "name": "RANZT",
            "photo": "IMG_0555.jpeg",
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
            "tier": "Mid Tier",
            // Data height dan weight DIHAPUS
            "fightRecord": { "win": 1, "loss": 0, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": [
                {"event": "DBA Series 1 Indonesia vs Malaysia", "achievement": "Gold Medalist", "date": "2024"} // Diubah dari "Master Debater Cup"
            ]
        },
        "debater2": {
            "name": "RYUU",
            "photo": "IMG_0556.jpeg",
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
            "tier": "Mid Tier",
            // Data height dan weight DIHAPUS
            "fightRecord": { "win": 0, "loss": 1, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "MID TIER DEBATE",
        "winner": {
            "name": "RANZT",
            "method": "point"
        },
        "loser": {
            "name": "RYUU"
        }
    },
    // ENTRI BARU UNTUK THINZEL VS SHADE (dengan data tambahan untuk profil)
    {
        "id": "debate-005",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-26",
        "debater1": {
            "name": "Thinzel",
            "photo": "Thinzel.jpeg",
            "country": "indonesia",
            "flag": "IMG_0417.png",
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
            // Data height dan weight DIHAPUS
            "fightRecord": { "win": 1, "loss": 0, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": [
                {"event": "DBA Series 1 Indonesia vs Malaysia", "achievement": "Participant", "date": "2024"} // Diubah dari "Local Community Debate"
            ]
        },
        "debater2": {
            "name": "Shade",
            "photo": "Shade.jpeg",
            "country": "malaysia",
            "flag": "IMG_0418.png",
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
            // Data height dan weight DIHAPUS
            "fightRecord": { "win": 0, "loss": 1, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "Low TIER DEBATE",
        "winner": {
            "name": "Thinzel",
            "method": "limit"
        },
        "loser": {
            "name": "Shade"
        }
    }
];

// ====== Global variable to store all debater profiles and calculated stats for easy lookup ======
let allDebaters = {};

// ====== POPULATE ALLDEBATERS MAP AND ADD RECORDS / MATCH HISTORY ONCE AT SCRIPT INITIALIZATION ======
debatesData.forEach(debate => {
    const debater1Name = debate.debater1.name;
    const debater2Name = debate.debater2.name;

    if (!allDebaters[debater1Name]) {
        allDebaters[debater1Name] = { ...debate.debater1, wins: 0, losses: 0, matchHistory: [] };
    } else {
        Object.assign(allDebaters[debater1Name], debate.debater1);
    }

    if (!allDebaters[debater2Name]) {
        allDebaters[debater2Name] = { ...debate.debater2, wins: 0, losses: 0, matchHistory: [] };
    } else {
        Object.assign(allDebaters[debater2Name], debate.debater2);
    }


    if (debate.winner && debate.loser) {
        const winnerName = debate.winner.name;
        const loserName = debate.loser.name;

        allDebaters[winnerName].wins += 1;
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
    }
});


// ====== FUNGSI UNTUK COUNTDOWN ACARA UTAMA ======
function startCountdown() {
    // Tanggal target: 1 Juli 2025, 10:00 AM WIB (sesuai lokasi Indonesia)
    const targetDate = new Date("2025-07-01T10:00:00+07:00").getTime(); // +07:00 untuk WIB

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
                <div class="match-header">
                    <span class="category">${debate.category}</span>
                    <span class="type">${debate.type}</span>
                </div>
                <div class="match-details">
                    <div class="debater-info">
                        <img src="${debate.debater1.photo}" alt="Foto ${debate.debater1.name}" class="debater-photo">
                        <a href="profile.html?name=${encodeURIComponent(debate.debater1.name)}" class="name debater-profile-link">${debate.debater1.name}</a>
                        <span class="origin"><img src="${debate.debater1.flag}" alt="Bendera ${debate.debater1.country}" class="flag-icon"> ${debate.debater1.country.toUpperCase()}</span>
                    </div>
                    <span class="match-vs">VS</span>
                    <div class="debater-info">
                        <img src="${debate.debater2.photo}" alt="Foto ${debate.debater2.name}" class="debater-photo">
                        <a href="profile.html?name=${encodeURIComponent(debate.debater2.name)}" class="name debater-profile-link">${debate.debater2.name}</a>
                        <span class="origin"><img src="${debate.debater2.flag}" alt="Bendera ${debate.debater2.country}" class="flag-icon"> ${debate.debater2.country.toUpperCase()}</span>
                    </div>
                </div>
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

    const debater = allDebaters[debaterName];

    if (!debater || !debater.profile) {
        profileCard.innerHTML = `<p style="color: red;">Profil untuk ${debaterName} tidak ditemukan.</p>`;
        return;
    }

    // Bangun HTML untuk halaman profil berdasarkan desain Byon (tanpa height dan weight)
    let profileHtml = `
        <div class="profile-main-info">
            <img src="${debater.photo}" alt="Foto ${debater.name}" class="profile-avatar">
            <div class="profile-details-text">
                <p class="profile-division">DEBATER TIER: ${debater.tier.toUpperCase()} <span class="active-status">ACTIVE</span></p>
                <h2 class="profile-name">${debater.name}</h2>
                <p class="profile-country"><img src="${debater.flag}" alt="Bendera ${debater.country}" class="profile-flag-icon"> ${debater.country.toUpperCase()}</p>
                <div class="profile-records-grid">
                    ${debater.fightRecord ? `
                        <div class="record-box">
                            <p class="record-title">TOTAL RECORD</p>
                            <div class="record-stats">
                                <span class="win-stat">${debater.fightRecord.win}</span>
                                <span class="loss-stat">${debater.fightRecord.loss}</span>
                                <span class="draw-stat">${debater.fightRecord.draw}</span>
                            </div>
                            <div class="record-labels">
                                <span>WIN</span><span>LOSS</span><span>DRAW</span>
                            </div>
                        </div>
                    ` : ''}
                    ${debater.boxingRecord ? `
                        <div class="record-box">
                            <p class="record-title">KATEGORI KHUSUS</p>
                            <div class="record-stats">
                                <span class="win-stat">${debater.boxingRecord.win}</span>
                                <span class="loss-stat">${debater.boxingRecord.loss}</span>
                                <span class="draw-stat">${debater.boxingRecord.draw}</span>
                            </div>
                            <div class="record-labels">
                                <span>WIN</span><span>LOSS</span><span>DRAW</span>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>

        <div class="profile-section-block">
            <h3 class="section-block-title">DBA RECORD</h3>
            <div class="match-history-list">
    `;

    if (debater.matchHistory && debater.matchHistory.length > 0) {
        // Mengambil hanya satu riwayat pertandingan terbaru untuk DBA RECORD jika Anda ingin seperti Byon
        const latestMatch = debater.matchHistory.sort((a, b) => new Date(b.date) - new Date(a.date))[0];

        if (latestMatch) {
            const resultClass = latestMatch.result === "Win" ? "win" : "loss";
            const opponentDebater = allDebaters[latestMatch.opponent];
            profileHtml += `
                <div class="dba-record-item ${resultClass}">
                    <div class="dba-match-info">
                        <img src="${debater.photo}" alt="Foto ${debater.name}" class="dba-debater-thumb">
                        <img src="${opponentDebater ? opponentDebater.photo : ''}" alt="Foto ${latestMatch.opponent}" class="dba-debater-thumb">
                        <div class="dba-details">
                            <p class="dba-vs-opponent">VS ${latestMatch.opponent.toUpperCase()}</p>
                            <p class="dba-match-spec">Date: ${latestMatch.date} Method: ${latestMatch.method || 'N/A'}</p>
                        </div>
                    </div>
                    <span class="dba-result-badge">${latestMatch.result.toUpperCase()}</span>
                </div>
            `;
        } else {
             profileHtml += `<p class="no-history-message">Belum ada riwayat pertandingan DBA.</p>`;
        }
    } else {
        profileHtml += `<p class="no-history-message">Belum ada riwayat pertandingan DBA.</p>`;
    }


    profileHtml += `
            </div>
        </div>

        <div class="profile-section-block">
            <h3 class="section-block-title">ACHIEVEMENTS</h3>
            <div class="achievements-table-container">
                <table class="achievements-table">
                    <thead>
                        <tr>
                            <th>EVENTS</th>
                            <th>ACHIEVEMENTS</th>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    if (debater.achievements && debater.achievements.length > 0) {
        debater.achievements.forEach(ach => {
            let eventName = ach.event;
            // Logika untuk mengubah teks achievement
            if (eventName.includes("Battle Comp.") || eventName.includes("Online Debat Liga") || eventName.includes("Master Debater Cup") || eventName.includes("Grand Slam Debat") || eventName.includes("Local Community Debate")) {
                eventName = "DBA Series 1 Indonesia vs Malaysia";
            }
            profileHtml += `
                <tr>
                    <td>${eventName}</td>
                    <td>${ach.achievement}</td>
                    <td>${ach.date}</td>
                </tr>
            `;
        });
    } else {
        profileHtml += `<tr><td colspan="3" class="no-history-message">Belum ada pencapaian.</td></tr>`;
    }

    profileHtml += `
                    </tbody>
                </table>
            </div>
        </div>

        <div class="profile-section-block">
            <h3 class="section-block-title">STATS BREAKDOWN</h3>
            <ul class="stats-list">
    `;

    if (debater.profile) {
        for (const skill in debater.profile) {
            if (debater.profile.hasOwnProperty(skill)) {
                const scoreValue = parseFloat(debater.profile[skill]);
                const scorePercentage = (scoreValue / 10) * 100;

                profileHtml += `
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

    profileHtml += `
            </ul>
        </div>
    `;

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

    Object.values(allDebaters).forEach(debater => {
        if (debater.tier && allDebatersByTier[debater.tier]) {
            allDebatersByTier[debater.tier].push(debater);
        }
    });

    let rankingHtml = '';
    const tiersOrder = ["Low Tier", "Mid Tier", "High Tier"];

    tiersOrder.forEach(tierName => {
        const debatersInTier = allDebatersByTier[tierName];

        if (debatersInTier && debatersInTier.length > 0) {
            if (tierName === "Mid Tier") {
                const midTierCustomOrder = ["RANZT", "HIROO", "RYUU", "RENJI"];
                debatersInTier.sort((a, b) => {
                    const indexA = midTierCustomOrder.indexOf(a.name);
                    const indexB = midTierCustomOrder.indexOf(b.name);
                    if (indexA === -1 || indexB === -1) {
                        return a.name.localeCompare(b.name);
                    }
                    return indexA - indexB;
                });
            } else {
                debatersInTier.sort((a, b) => a.name.localeCompare(b.name));
            }

            rankingHtml += `
                <h3 class="tier-heading">${tierName}</h3>
                <div class="table-responsive">
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
            chartArea.innerHTML = `<p class="chart-message" style="color: red;">Statistik debater untuk ${!debater1 ? selectedDebater1Name : selectedDebater2Name} tidak lengkap.</p>`;
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
    const currentPath = window.location.pathname;

    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname.replace(/\/$/, '');
        const cleanedCurrentPath = currentPath.replace(/\/$/, '');

        if (cleanedCurrentPath === linkPath ||
           (cleanedCurrentPath === '/index.html' && linkPath === '/') ||
           (cleanedCurrentPath === '/' && linkPath === '/index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });


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
