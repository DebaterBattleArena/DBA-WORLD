document.addEventListener('DOMContentLoaded', () => {
    // Navigasi Mobile
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('.main-nav');

    mobileMenu.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });

    // --- DATA DEBATE & DEBATER ---
    const debatesData = [
        {
            "id": "debate-001", "category": "FICTIONAL DEBATE", "date": "2025-06-15", "matchBanner": "4ba98405-9174-4806-86b0-48db675ff249.jpeg",
            "debater1": { "name": "HIROO", "photo": "IMG_0524.jpeg", "country": "Indonesia", "flag": "IMG_0417.png", "vbWiki": "Outerversal+", "ibr": "High 1-A", "profile": { "Rhetoric": 9, "Typing Structure": 9, "Critical Thinking": 10, "Logical Fallacies": 0, "Typing Strenght": 9, "Tiering Sistem": 8, "Calculation": 8, "Philisophy": 9, "General Knowledge": 10 }, "tier": "Mid Tier", "fightRecord": { "win": 1, "loss": 0, "draw": 0 }, "achievements": [] },
            "debater2": { "name": "RENJI", "photo": "IMG_0523.jpeg", "country": "Malaysia", "flag": "IMG_0418.png", "vbWiki": "Low 1-A", "ibr": "High 1-A", "profile": { "Rhetoric": 3, "Typing Structure": 2, "Critical Thinking": 1, "Logical Fallacies": 0, "Typing Strenght": 1, "Tiering Sistem": 1, "Calculation": 0, "Philisophy": 0, "General Knowledge": 1 }, "tier": "Mid Tier", "fightRecord": { "win": 0, "loss": 1, "draw": 0 }, "achievements": [] },
            "type": "MID TIER DEBATE", "winner": { "name": "HIROO", "method": "limit" }, "loser": { "name": "RENJI" }
        },
        {
            "id": "debate-002", "category": "FICTIONAL DEBATE", "date": "2025-06-10", "matchBanner": "5c6e6c7b-dc86-4ca3-a496-6b0d34eefa77.jpeg",
            "debater1": { "name": "ZOGRATIS", "photo": "IMG_0526.jpeg", "country": "Indonesia", "flag": "IMG_0417.png", "vbWiki": "Boundless", "ibr": "Beyond Dimensionality", "profile": { "Rhetoric": 6, "Typing Structure": 5, "Critical Thinking": 7, "Logical Fallacies": 3, "Typing Strenght": 5, "Tiering Sistem": 6, "Calculation": 2, "Philisophy": 0, "General Knowledge": 7 }, "tier": "High Tier", "fightRecord": { "win": 1, "loss": 0, "draw": 0 }, "achievements": [] },
            "debater2": { "name": "MUCHIBEI", "photo": "IMG_0530.jpeg", "country": "Malaysia", "flag": "IMG_0418.png", "vbWiki": "Low 1-A", "ibr": "High 1-A", "profile": { "Rhetoric": 5, "Typing Structure": 5, "Critical Thinking": 7, "Logical Fallacies": 2, "Typing Strenght": 7, "Tiering Sistem": 4, "Calculation": 4, "Philisophy": 0, "General Knowledge": 8 }, "tier": "High Tier", "fightRecord": { "win": 0, "loss": 1, "draw": 0 }, "achievements": [] },
            "type": "HIGH TIER DEBATE", "winner": { "name": "ZOGRATIS", "method": "point" }, "loser": { "name": "MUCHIBEI" }
        },
        {
            "id": "debate-003", "category": "FICTIONAL DEBATE", "date": "2025-06-05", "matchBanner": "0fa5d532-e863-4322-aefd-31e538cf2bcc.jpeg",
            "debater1": { "name": "ARYANWT", "photo": "IMG_0525.jpeg", "country": "Indonesia", "flag": "IMG_0417.png", "vbWiki": "Low 1-A", "ibr": "High 1-A", "profile": { "Rhetoric": 8, "Typing Structure": 7, "Critical Thinking": 9, "Logical Fallacies": 1, "Typing Strenght": 7, "Tiering Sistem": 9, "Calculation": 0, "Philisophy": 7, "General Knowledge": 10 }, "tier": "Low Tier", "fightRecord": { "win": 1, "loss": 0, "draw": 0 }, "achievements": [] },
            "debater2": { "name": "RIM", "photo": "IMG_0527.jpeg", "country": "Malaysia", "flag": "IMG_0418.png", "vbWiki": "High 1-B", "ibr": "Low 1-A", "profile": { "Rhetoric": 4, "Typing Structure": 5, "Critical Thinking": 4.5, "Logical Fallacies": 2, "Typing Strenght": 3.5, "Tiering Sistem": 4.3, "Calculation": 3.6, "Philisophy": 3, "General Knowledge": 7 }, "tier": "Low Tier", "fightRecord": { "win": 0, "loss": 1, "draw": 0 }, "achievements": [] },
            "type": "LOW TIER DEBATE", "winner": { "name": "ARYANWT", "method": "point" }, "loser": { "name": "RIM" }
        },
        {
            "id": "debate-004", "category": "FICTIONAL DEBATE", "date": "2025-06-01", "matchBanner": "79194c7a-6e34-4bbd-a21e-9e9c918c4707.jpeg",
            "debater1": { "name": "RANZT", "photo": "IMG_0555.jpeg", "country": "Indonesia", "flag": "IMG_0417.png", "vbWiki": "Outerversal+", "ibr": "High 1-A", "profile": { "Rhetoric": 10, "Typing Structure": 10, "Critical Thinking": 10, "Logical Fallacies": 10, "Typing Strenght": 9, "Tiering Sistem": 8, "Calculation": 5, "Philisophy": 9, "General Knowledge": 10 }, "tier": "Mid Tier", "fightRecord": { "win": 1, "loss": 0, "draw": 0 }, "achievements": [] },
            "debater2": { "name": "RYUU", "photo": "IMG_0556.jpeg", "country": "Malaysia", "flag": "IMG_0418.png", "vbWiki": "Low 1-A", "ibr": "High 1-A", "profile": { "Rhetoric": 8.5, "Typing Structure": 8, "Critical Thinking": 7, "Logical Fallacies": 6, "Typing Strenght": 5, "Tiering Sistem": 5, "Calculation": 7, "Philisophy": 4, "General Knowledge": 10 }, "tier": "Mid Tier", "fightRecord": { "win": 0, "loss": 1, "draw": 0 }, "achievements": [] },
            "type": "MID TIER DEBATE", "winner": { "name": "RANZT", "method": "point" }, "loser": { "name": "RYUU" }
        },
        {
            "id": "debate-005", "category": "FICTIONAL DEBATE", "date": "2025-06-26", "matchBanner": "cdf5db1e-6410-4df1-a920-6d4f4e41b412.jpeg",
            "debater1": { "name": "Thinzel", "photo": "IMG_0819.jpeg", "country": "Indonesia", "flag": "IMG_0417.png", "vbWiki": "High 1-B", "ibr": "Low 1-A", "profile": { "Rhetoric": 1, "Typing Structure": 1, "Critical Thinking": 2, "Logical Fallacies": 0, "Typing Strenght": 1, "Tiering Sistem": 2, "Calculation": 0, "Philisophy": 0, "General Knowledge": 0 }, "tier": "Low Tier", "fightRecord": { "win": 1, "loss": 0, "draw": 0 }, "achievements": [] },
            "debater2": { "name": "Shade", "photo": "IMG_0820.jpeg", "country": "Malaysia", "flag": "IMG_0418.png", "vbWiki": "Low 1-C", "ibr": "High 1-B", "profile": { "Rhetoric": 3, "Typing Structure": 2, "Critical Thinking": 1, "Logical Fallacies": 0, "Typing Strenght": 4, "Tiering Sistem": 1, "Calculation": 0, "Philisophy": 0, "General Knowledge": 1 }, "tier": "Low Tier", "fightRecord": { "win": 0, "loss": 1, "draw": 0 }, "achievements": [] },
            "type": "LOW TIER DEBATE", "winner": { "name": "Thinzel", "method": "limit" }, "loser": { "name": "Shade" }
        },
        {
            "id": "debate-006", "category": "FICTIONAL DEBATE", "date": "2025-06-26", "matchBanner": "7a47b236-a78a-4b2f-bbce-9cadecef6843.jpeg",
            "debater1": { "name": "Lianx", "photo": "IMG_0935.jpeg", "country": "Indonesia", "flag": "IMG_0417.png", "vbWiki": "High 1-B", "ibr": "Low 1-A", "profile": { "Rhetoric": 8, "Typing Structure": 9, "Critical Thinking": 9, "Logical Fallacies": 9, "Typing Strenght": 8, "Tiering Sistem": 7, "Calculation": 9, "Philisophy": 8, "General Knowledge": 8 }, "tier": "High Tier", "fightRecord": { "win": 1, "loss": 0, "draw": 0 }, "achievements": [] },
            "debater2": { "name": "Adyy", "photo": "IMG-20250721-WA0005.jpeg", "country": "Malaysia", "flag": "IMG_0418.png", "vbWiki": "Low 1-C", "ibr": "High 1-B", "profile": { "Rhetoric": 6, "Typing Structure": 5, "Critical Thinking": 6, "Logical Fallacies": 6, "Typing Strenght": 5, "Tiering Sistem": 6, "Calculation": 7, "Philisophy": 0, "General Knowledge": 5 }, "tier": "High Tier", "fightRecord": { "win": 0, "loss": 1, "draw": 0 }, "achievements": [] },
            "type": "HIGH TIER DEBATE", "winner": { "name": "Lianx", "method": "Point" }, "loser": { "name": "Adyy" }
        },
        {
            "id": "debate-007", "category": "FICTIONAL DEBATE", "date": "2025-07-15", "matchBanner": "Proyek Baru 73.png",
            "debater1": { "name": "ARYANWT", "photo": "IMG_0525.jpeg", "country": "Indonesia", "flag": "IMG_0417.png", "vbWiki": "Low 1-A", "ibr": "High 1-A", "profile": { "Rhetoric": 8, "Typing Structure": 7, "Critical Thinking": 9, "Logical Fallacies": 1, "Typing Strenght": 7, "Tiering Sistem": 9, "Calculation": 0, "Philisophy": 7, "General Knowledge": 10 }, "tier": "High Tier", "fightRecord": { "win": 1, "loss": 0, "draw": 0 }, "achievements": [] },
            "debater2": { "name": "Aaron", "photo": "IMG_1269.jpeg", "country": "Mexico", "flag": "IMG_1177.jpeg", "vbWiki": "Outerversal+", "ibr": "High 1-A", "profile": { "Rhetoric": 10, "Typing Structure": 10, "Critical Thinking": 10, "Logical Fallacies": 10, "Typing Strenght": 10, "Tiering Sistem": 10, "Calculation": 8, "Philisophy": 7, "General Knowledge": 10 }, "tier": "High Tier", "fightRecord": { "win": 0, "loss": 1, "draw": 0 }, "achievements": [] },
            "type": "HIGH TIER DEBATE", "winner": null, "loser": null
        },
        {
            "id": "debate-008", "category": "FICTIONAL DEBATE", "date": "2025-08-01", "matchBanner": "quality_restoration_20250710133701290.png",
            "debater1": { "name": "KYUKI", "photo": "a45117bc6e1a73cac3a74563ca3172c4_1.jpeg", "country": "Malaysia", "flag": "IMG_0418.png", "vbWiki": "Unknown", "ibr": "Unknown", "profile": { "Rhetoric": 0, "Typing Structure": 0, "Critical Thinking": 0, "Logical Fallacies": 0, "Typing Strenght": 0, "Tiering Sistem": 0, "Calculation": 0, "Philisophy": 0, "General Knowledge": 0 }, "tier": "Low Tier", "fightRecord": { "win": 0, "loss": 0, "draw": 0 }, "achievements": [] },
            "debater2": { "name": "Shade", "photo": "IMG_0820.jpeg", "country": "Malaysia", "flag": "IMG_0418.png", "vbWiki": "Low 1-C", "ibr": "High 1-B", "profile": { "Rhetoric": 3, "Typing Structure": 2, "Critical Thinking": 1, "Logical Fallacies": 0, "Typing Strenght": 4, "Tiering Sistem": 1, "Calculation": 0, "Philisophy": 0, "General Knowledge": 1 }, "tier": "Low Tier", "fightRecord": { "win": 0, "loss": 1, "draw": 0 }, "achievements": [] },
            "type": "LOW TIER DEBATE", "winner": null, "loser": null
        }
    ];

    // Mengakumulasi data profil debater dari semua debat
    let debaters = {};

    function accumulateDebaterData(debater, matchId, result, opponentName) {
        if (!debaters[debater.name]) {
            debaters[debater.name] = {
                ...debater,
                fightRecord: { win: 0, loss: 0, draw: 0 },
                matchHistory: [],
                totalStats: { ...debater.profile },
                statCount: 1 // Menghitung berapa kali statistik ini diakumulasi
            };
        } else {
            // Akumulasi statistik (untuk rata-rata nanti)
            for (const stat in debater.profile) {
                debaters[debater.name].totalStats[stat] += debater.profile[stat];
            }
            debaters[debater.name].statCount++;
        }

        // Akumulasi rekor pertandingan
        if (result === 'win') {
            debaters[debater.name].fightRecord.win++;
        } else if (result === 'loss') {
            debaters[debater.name].fightRecord.loss++;
        } else if (result === 'draw') {
            debaters[debater.name].fightRecord.draw++;
        }

        debaters[debater.name].matchHistory.push({ id: matchId, opponent: opponentName, result });
    }

    debatesData.forEach(debate => {
        if (debate.winner) {
            accumulateDebaterData(debate.debater1, debate.id, debate.winner.name === debate.debater1.name ? 'win' : 'loss', debate.debater2.name);
            accumulateDebaterData(debate.debater2, debate.id, debate.winner.name === debate.debater2.name ? 'win' : 'loss', debate.debater1.name);
        } else {
            // Untuk debat mendatang, tambahkan debater ke daftar jika belum ada
            if (!debaters[debate.debater1.name]) debaters[debate.debater1.name] = { ...debate.debater1, fightRecord: { win: 0, loss: 0, draw: 0 }, matchHistory: [], totalStats: { ...debate.debater1.profile }, statCount: 1 };
            if (!debaters[debate.debater2.name]) debaters[debate.debater2.name] = { ...debate.debater2, fightRecord: { win: 0, loss: 0, draw: 0 }, matchHistory: [], totalStats: { ...debate.debater2.profile }, statCount: 1 };
        }
    });

    // Menghitung rata-rata statistik untuk setiap debater
    for (const name in debaters) {
        const debater = debaters[name];
        const avgProfile = {};
        for (const stat in debater.totalStats) {
            avgProfile[stat] = (debater.totalStats[stat] / debater.statCount).toFixed(1);
        }
        debater.profile = avgProfile;
    }

    // Mengurutkan debater berdasarkan rekor menang/kalah (ranking sederhana)
    const sortedDebaters = Object.values(debaters).sort((a, b) => {
        const aScore = a.fightRecord.win - a.fightRecord.loss;
        const bScore = b.fightRecord.win - b.fightRecord.loss;
        return bScore - aScore;
    });

    // --- FUNGSI UTAMA UNTUK RENDER KONTEN ---
    
    function createMatchCard(debate, isPast = false) {
        const card = document.createElement('a');
        card.href = isPast ? `archive.html?id=${debate.id}` : '#';
        card.classList.add('match-card');
        
        let winnerInfo = '';
        if (isPast && debate.winner) {
            winnerInfo = `
                <div class="match-card-winner">
                    Pemenang: ${debate.winner.name} <span class="method">(${debate.winner.method})</span>
                </div>
            `;
        } else if (!isPast) {
            winnerInfo = `<div class="match-card-winner">UPCOMING</div>`;
        }

        card.innerHTML = `
            <img src="${debate.matchBanner}" alt="Match banner" class="match-card-image">
            <div class="match-card-content">
                <p class="match-card-category">${debate.category}</p>
                <h3 class="match-card-title">${debate.debater1.name} vs ${debate.debater2.name}</h3>
                <div class="match-card-info">
                    <span>${new Date(debate.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    ${winnerInfo}
                </div>
            </div>
        `;
        return card;
    }
    
    function createRankingCard(debater, rank) {
        const card = document.createElement('a');
        card.href = `profile.html?name=${debater.name}`;
        card.classList.add('ranking-card');
        card.innerHTML = `
            <div class="rank-number">#${rank}</div>
            <img src="${debater.photo}" alt="${debater.name}" class="profile-debater-image" style="width: 100px; height: 100px;">
            <h3 class="debater-name">${debater.name}</h3>
            <p class="debater-tier">${debater.tier} | ${debater.country}</p>
            <p>Rekor: <span class="record-win">${debater.fightRecord.win}W</span> - <span class="record-loss">${debater.fightRecord.loss}L</span></p>
        `;
        return card;
    }

    // --- LOGIKA HALAMAN UTAMA (INDEX.HTML) ---
    if (document.getElementById('upcoming-debates-container')) {
        const upcomingContainer = document.getElementById('upcoming-debates-container');
        const pastContainer = document.getElementById('past-debates-container');

        const upcomingDebates = debatesData.filter(d => !d.winner);
        const pastDebates = debatesData.filter(d => d.winner).sort((a, b) => new Date(b.date) - new Date(a.date));

        if (upcomingDebates.length > 0) {
            upcomingDebates.forEach(debate => upcomingContainer.appendChild(createMatchCard(debate, false)));
        } else {
            upcomingContainer.innerHTML = `<p class="no-data-message">Tidak ada debat mendatang saat ini.</p>`;
        }
        
        if (pastDebates.length > 0) {
            pastDebates.slice(0, 3).forEach(debate => pastContainer.appendChild(createMatchCard(debate, true)));
        } else {
            pastContainer.innerHTML = `<p class="no-data-message">Belum ada riwayat debat.</p>`;
        }
    }

    // --- LOGIKA HALAMAN ARSIP (ARCHIVE.HTML) ---
    if (document.getElementById('archive-list')) {
        const archiveContainer = document.getElementById('archive-list');
        const pastDebates = debatesData.filter(d => d.winner).sort((a, b) => new Date(b.date) - new Date(a.date));
        
        if (pastDebates.length > 0) {
            pastDebates.forEach(debate => archiveContainer.appendChild(createMatchCard(debate, true)));
        } else {
            archiveContainer.innerHTML = `<p class="no-data-message">Belum ada riwayat debat.</p>`;
        }
    }

    // --- LOGIKA HALAMAN RANKING (RANKING.HTML) ---
    if (document.getElementById('ranking-container')) {
        const rankingContainer = document.getElementById('ranking-container');
        const rankingGrid = document.createElement('div');
        rankingGrid.classList.add('ranking-grid');
        
        sortedDebaters.forEach((debater, index) => {
            rankingGrid.appendChild(createRankingCard(debater, index + 1));
        });
        rankingContainer.appendChild(rankingGrid);
    }
    
    // --- LOGIKA HALAMAN PROFIL (PROFILE.HTML) ---
    if (document.getElementById('profile-page')) {
        const urlParams = new URLSearchParams(window.location.search);
        const debaterName = urlParams.get('name');
        const debaterData = debaters[debaterName];

        if (debaterData) {
            document.getElementById('profile-image').src = debaterData.photo;
            document.getElementById('debater-tier').textContent = debaterData.tier.toUpperCase();
            document.getElementById('debater-name').textContent = debaterData.name;
            document.getElementById('debater-country').textContent = debaterData.country;
            document.getElementById('debater-flag').src = debaterData.flag;
            document.getElementById('debater-vbwiki').textContent = debaterData.vbWiki;
            document.getElementById('debater-ibr').textContent = debaterData.ibr;
            document.getElementById('debater-win').textContent = debaterData.fightRecord.win;
            document.getElementById('debater-loss').textContent = debaterData.fightRecord.loss;
            document.getElementById('debater-draw').textContent = debaterData.fightRecord.draw;

            const matchHistoryContainer = document.getElementById('match-history-container');
            const sortedMatchHistory = debaterData.matchHistory.sort((a, b) => {
                const debateA = debatesData.find(d => d.id === a.id);
                const debateB = debatesData.find(d => d.id === b.id);
                return new Date(debateB.date) - new Date(debateA.date);
            });

            sortedMatchHistory.forEach(match => {
                const matchElement = document.createElement('div');
                matchElement.classList.add('match-history-item');
                matchElement.innerHTML = `
                    <span class="match-history-result ${match.result}">${match.result.toUpperCase()}</span>
                    <span class="match-history-vs">VS</span>
                    <a href="profile.html?name=${match.opponent}" class="match-history-opponent">${match.opponent}</a>
                `;
                matchHistoryContainer.appendChild(matchElement);
            });

            const achievementsTableBody = document.getElementById('achievements-table-body');
            if (debaterData.achievements && debaterData.achievements.length > 0) {
                document.getElementById('no-achievements').style.display = 'none';
                debaterData.achievements.forEach(ach => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${ach.event}</td>
                        <td>${ach.achievement}</td>
                        <td>${ach.date}</td>
                    `;
                    achievementsTableBody.appendChild(row);
                });
            } else {
                document.getElementById('no-achievements').style.display = 'block';
            }
        } else {
            document.getElementById('profile-page').innerHTML = '<p class="no-data-message">Debater tidak ditemukan.</p>';
        }
    }
    
    // --- LOGIKA HALAMAN BANDINGKAN (COMPARE.HTML) ---
    if (document.getElementById('compare-page')) {
        const debater1Select = document.getElementById('debater1-select');
        const debater2Select = document.getElementById('debater2-select');
        const chartArea = document.getElementById('chart-area');
        const debaterNames = Object.keys(debaters);

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

        // Set default values
        debater1Select.value = debaterNames[0] || '';
        debater2Select.value = debaterNames[1] || '';

        let radarChart;

        function createRadarChart(debaterA, debaterB) {
            chartArea.querySelector('.chart-message').style.display = 'none';
            const ctx = document.getElementById('radarChart').getContext('2d');
            
            const debaterAData = Object.values(debaterA.profile).map(val => parseFloat(val));
            const debaterBData = Object.values(debaterB.profile).map(val => parseFloat(val));

            const data = {
                labels: Object.keys(debaterA.profile),
                datasets: [
                    {
                        label: debaterA.name,
                        data: debaterAData,
                        backgroundColor: 'rgba(227, 6, 19, 0.4)',
                        borderColor: 'rgba(227, 6, 19, 1)',
                        pointBackgroundColor: 'rgba(227, 6, 19, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(227, 6, 19, 1)'
                    },
                    {
                        label: debaterB.name,
                        data: debaterBData,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        borderColor: 'rgba(255, 255, 255, 1)',
                        pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255, 255, 255, 1)'
                    }
                ]
            };

            const options = {
                responsive: true,
                maintainAspectRatio: true,
                scale: {
                    r: {
                        angleLines: { color: 'rgba(255, 255, 255, 0.3)' },
                        grid: { color: 'rgba(255, 255, 255, 0.3)' },
                        pointLabels: { color: '#fff', font: { size: 12 } },
                        min: 0,
                        max: 10,
                        ticks: {
                            display: false,
                            stepSize: 2,
                            color: '#fff'
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { color: '#fff' }
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.r !== null) {
                                    label += context.parsed.r;
                                }
                                return label;
                            }
                        }
                    }
                }
            };
            
            if (radarChart) {
                radarChart.destroy();
            }
            radarChart = new Chart(ctx, { type: 'radar', data: data, options: options });
        }

        function updateChart() {
            const debaterA = debaters[debater1Select.value];
            const debaterB = debaters[debater2Select.value];

            if (debaterA && debaterB) {
                createRadarChart(debaterA, debaterB);
            }
        }

        debater1Select.addEventListener('change', updateChart);
        debater2Select.addEventListener('change', updateChart);

        if (debaterNames.length >= 2) {
            updateChart();
        } else {
            chartArea.querySelector('.chart-message').textContent = 'Pilih setidaknya dua debater untuk membandingkan statistik.';
        }
    }
});
