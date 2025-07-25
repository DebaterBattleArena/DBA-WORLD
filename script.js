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
            "fightRecord": { "win": 1, "loss": 0, "draw": 0 },
            "boxingRecord": { "win": 1, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "debater2": {
            "name": "Adyy",
            "photo": "IMG-20250721-WA0005.jpeg",
            "country": "malaysia",
            "flag": "IMG_0418.png",
            "vbWiki": "Low 1-C",
            "ibr": "High 1-B",
            "profile": {
                "Rhetoric": "6/10",
                "Typing Structure": "5/10",
                "Critical Thinking": "6/10",
                "Logical Fallacies": "6/10",
                "Typing Strenght": "5/10",
                "Tiering Sistem": "6/10",
                "Calculation": "7/10",
                "Philisophy": "0/10",
                "General Knowledge": "5/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 1, "draw": 0 },
            "boxingRecord": { "win": 0, "loss": 1, "draw": 0 },
            "achievements": []
        },
        "type": "HIGH TIER DEBATE", // Digunakan sebagai topik
        "winner": { "name": "Lianx", "method": "Point" },
        "loser": { "name": "Adyy" }
    },
    // ====== DEBAT YANG AKAN DATANG: ARYANWT VS AARON ======
    {
        "id": "debate-007",
        "category": "FICTIONAL DEBATE",
        "date": "2025-07-15",
        "matchBanner": "Proyek Baru 73.png", // <-- Ganti dengan banner match yang relevan jika ada
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
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 }, // Atur ulang untuk debat mendatang
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "debater2": {
            "name": "Aaron",
            "photo": "IMG_1269.jpeg", // <-- Pastikan file ini ada!
            "country": "mexico",
            "flag": "IMG_1177.jpeg", // <-- Asumsi Anda memiliki bendera Meksiko (ganti jika beda)
            "vbWiki": "Outerversal+",
            "ibr": "High 1-A",
            "profile": {
                "Rhetoric": "10/10",
                "Typing Structure": "10/10",
                "Critical Thinking": "10/10",
                "Logical Fallacies": "10/10",
                "Typing Strenght": "10/10",
                "Tiering Sistem": "10/10",
                "Calculation": "8/10",
                "Philisophy": "7/10",
                "General Knowledge": "10/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 }, // Atur ulang untuk debat mendatang
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "HIGH TIER DEBATE", // Sesuai permintaan "High tier debate"
        "winner": null, // <-- Ini penting untuk "upcoming debate"
        "loser": null   // <-- Ini penting untuk "upcoming debate"
    },
    // ====== DEBAT YANG AKAN DATANG: KYUKI VS SHADE ======
    {
        "id": "debate-008", // ID baru untuk debat ini
        "category": "FICTIONAL DEBATE",
        "date": "2025-08-01", // Tanggal debat mendatang (sesuaikan jika perlu)
        "matchBanner": "quality_restoration_20250710133701290.png", // <-- Ganti dengan path gambar banner yang sesuai
        "debater1": {
            "name": "KYUKI",
            "photo": "a45117bc6e1a73cac3a74563ca3172c4_1.jpeg", // <-- Pastikan file ini ada!
            "country": "malaysia", // Sesuaikan negara jika perlu
            "flag": "IMG_0418.png", // Bendera Indonesia
            "vbWiki": "Unknown", // Atau sesuaikan jika ada informasi
            "ibr": "Unknown", // Atau sesuaikan jika ada informasi
            "profile": {
                "Rhetoric": "0/10",
                "Typing Structure": "0/10",
                "Critical Thinking": "0/10",
                "Logical Fallacies": "0/10",
                "Typing Strenght": "0/10",
                "Tiering Sistem": "0/10",
                "Calculation": "0/10",
                "Philisophy": "0/10",
                "General Knowledge": "0/10"
            },
            "tier": "Low Tier", // Sesuaikan Tier jika perlu
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
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
            "fightRecord": { "win": 0, "loss": 1, "draw": 0 }, // Ini akan direset oleh logika akumulasi di bawah jika debat ini dihitung sebagai "future"
            "boxingRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "LOW TIER DEBATE", // Sesuaikan tipe debat jika perlu
        "winner": null, // Debat akan datang, jadi belum ada pemenang
        "loser": null
    }
];
// ====== Global variable to store all debater profiles and calculated stats for easy lookup ======
let allDebaters = {};

// ====== POPULATE ALLDEBATERS MAP AND ADD RECORDS / MATCH HISTORY ONCE AT SCRIPT INITIALIZATION ======
debatesData.forEach(debate => {
    const debater1Name = debate.debater1.name;
    const debater2Name = debate.debater2.name;

    // Inisialisasi debater jika belum ada, salin semua properti kecuali fightRecord/boxingRecord
    if (!allDebaters[debater1Name]) {
        allDebaters[debater1Name] = {
            ...debate.debater1,
            fightRecord: { win: 0, loss: 0, draw: 0 }, // Inisialisasi awal ke nol
            boxingRecord: { win: 0, loss: 0, draw: 0 }, // Inisialisasi awal ke nol
            matchHistory: [],
            achievements: []
        };
    }
    if (!allDebaters[debater2Name]) {
        allDebaters[debater2Name] = {
            ...debate.debater2,
            fightRecord: { win: 0, loss: 0, draw: 0 }, // Inisialisasi awal ke nol
            boxingRecord: { win: 0, loss: 0, draw: 0 }, // Inisialisasi awal ke nol
            matchHistory: [],
            achievements: []
        };
    }

    // Akumulasi rekor hanya untuk debat yang sudah selesai
    if (debate.winner && debate.loser) {
        const winnerName = debate.winner.name;
        const loserName = debate.loser.name;
        const debateYear = new Date(debate.date).getFullYear().toString();

        // Update winner's record
        allDebaters[winnerName].fightRecord.win++;
        // Update loser's record
        allDebaters[loserName].fightRecord.loss++;

        // Untuk boxingRecord, jika ada, anggap sama dengan fightRecord untuk tujuan akumulasi di sini
        // Jika Anda memiliki logika boxing yang terpisah, Anda perlu menambahkan bidang boxingWinner/boxingLoser ke data debat
        // Untuk saat ini, asumsikan jika ada winner/loser di debate, maka ini juga dianggap pertarungan boxing jika relevan
        // (ini mungkin perlu disesuaikan jika Boxing Record Anda benar-benar terpisah dari Fight Record biasa)
        // Saya akan menggunakan properti boxingRecord yang ada di data debater awal untuk inisialisasi,
        // tapi akumulasi di sini akan mengikuti hasil debat umum
        if (allDebaters[winnerName].boxingRecord) { // Pastikan properti boxingRecord ada
             allDebaters[winnerName].boxingRecord.win++;
        }
        if (allDebaters[loserName].boxingRecord) { // Pastikan properti boxingRecord ada
            allDebaters[loserName].boxingRecord.loss++;
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


// ====== FUNGSI UNTUK COUNTDOWN ACARA UTAMA (opsional, karena tidak ada elemen countdown di index.html yang Anda berikan) ======
function startCountdown() {
    // Fungsi ini tidak akan melakukan apa-apa jika elemen countdown tidak ada di DOM
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // Jika tidak ada elemen countdown, jangan jalankan interval
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
        // console.log("Elemen countdown tidak ditemukan. Menghentikan fungsi countdown.");
        return;
    }

    // Tanggal target acara utama (1 Juli 2025, 10:00:00 WIB)
    const targetDate = new Date("2025-07-01T10:00:00+07:00").getTime(); // +07:00 untuk WIB

    const countdownInterval = setInterval(function() {
        const currentTime = new Date().getTime();
        const distance = targetDate - currentTime;

        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;

        if (distance > 0) {
            days = Math.floor(distance / (1000 * 60 * 60 * 24));
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((distance % (1000 * 60)) / 1000);
        } else {
            clearInterval(countdownInterval);
            console.log("Countdown Selesai!");
            // Opsional: Perbarui tampilan agar menunjukkan 00:00:00:00 setelah selesai
            days = hours = minutes = seconds = 0;
        }

        daysEl.innerHTML = String(days).padStart(2, '0');
        hoursEl.innerHTML = String(hours).padStart(2, '0');
        minutesEl.innerHTML = String(minutes).padStart(2, '0');
        secondsEl.innerHTML = String(seconds).padStart(2, '0');

    }, 1000);
}


// ====== FUNGSI UNTUK MEMUAT DATA DEBAT DAN MERENDERNYA (UNTUK index.html) ======
function loadAndRenderDebatesForIndexPage() {
    const debates = debatesData;

    const container = document.getElementById('debates-container');
    if (!container) {
        console.warn("Element with ID 'debates-container' not found. Cannot render debates on index page.");
        return; // Hentikan eksekusi jika container tidak ditemukan
    }

    // Filter debat yang akan datang dan debat yang sudah selesai
    const upcomingDebates = debates.filter(debate => debate.winner === null && debate.loser === null);
    const finishedDebates = debates.filter(debate => debate.winner !== null && debate.loser !== null);

    // Urutkan debat yang akan datang berdasarkan tanggal terdekat (naik)
    upcomingDebates.sort((a, b) => new Date(a.date) - new Date(b.date));
    // Urutkan debat yang sudah selesai berdasarkan tanggal terbaru (menurun)
    finishedDebates.sort((a, b) => new Date(b.date) - new Date(a.date));

    let htmlContent = '';

    // Render debat yang akan datang terlebih dahulu
    if (upcomingDebates.length > 0) {
        htmlContent += '<h3 class="section-subtitle">DEBAT MENDATANG</h3>'; // Menggunakan subtitle baru
        upcomingDebates.forEach(debate => {
            const matchTopicText = debate.type ? debate.type.toUpperCase() : 'NO TOPIC';
            const debater1ProfileLink = `profile.html?name=${encodeURIComponent(debate.debater1.name)}`;
            const debater2ProfileLink = `profile.html?name=${encodeURIComponent(debate.debater2.name)}`;

            htmlContent += `
                <div class="match-card upcoming-match-card">
                    <div class="match-image-container">
                        <img src="${debate.matchBanner}" alt="Debat antara ${debate.debater1.name} vs ${debate.debater2.name}" class="match-banner-img">
                        <div class="match-category-label">${debate.category.toUpperCase()} | ${matchTopicText}</div>
                        <div class="upcoming-date-overlay">${new Date(debate.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
                    </div>
                    <div class="match-details-bottom">
                        <div class="debater-names-row">
                            <div class="debater-entry">
                                <a href="${debater1ProfileLink}" class="debater-name-link">
                                    ${debate.debater1.name.toUpperCase()}
                                </a>
                                <img src="${debate.debater1.flag}" alt="Bendera ${debate.debater1.country}" class="flag-icon-small">
                            </div>
                            <span class="match-vs-text">VS</span>
                            <div class="debater-entry">
                                <a href="${debater2ProfileLink}" class="debater-name-link">
                                    ${debate.debater2.name.toUpperCase()}
                                </a>
                                <img src="${debate.debater2.flag}" alt="Bendera ${debate.debater2.country}" class="flag-icon-small">
                            </div>
                        </div>
                        <p class="match-topic">${matchTopicText}</p>
                    </div>
                    <div class="match-result-section upcoming-label">
                        <div class="result-info">AKAN DATANG</div>
                    </div>
                </div>
            `;
        });
    }


    // Render debat yang sudah selesai
    if (finishedDebates.length > 0) {
        // Hanya tambahkan judul "Debat Selesai" jika ada debat mendatang sebelumnya, atau jika ini satu-satunya jenis debat.
        if (upcomingDebates.length > 0) {
             htmlContent += '<h3 class="section-subtitle" style="margin-top: 40px;">DEBAT SELESAI</h3>';
        } else {
            htmlContent += '<h3 class="section-subtitle">DEBAT SELESAI</h3>';
        }

        finishedDebates.forEach(debate => {
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
            const debater1ProfileLink = `profile.html?name=${encodeURIComponent(debate.debater1.name)}`;
            const debater2ProfileLink = `profile.html?name=${encodeURIComponent(debate.debater2.name)}`;

            htmlContent += `
                <div class="match-card">
                    <div class="match-image-container">
                        <img src="${debate.matchBanner}" alt="Debat antara ${debate.debater1.name} vs ${debate.debater2.name}" class="match-banner-img">
                        <div class="match-category-label">${debate.category.toUpperCase()} | ${matchTopicText}</div>
                    </div>
                    <div class="match-details-bottom">
                        <div class="debater-names-row">
                            <div class="debater-entry">
                                <a href="${debater1ProfileLink}" class="debater-name-link">
                                    ${debate.debater1.name.toUpperCase()}
                                </a>
                                <img src="${debate.debater1.flag}" alt="Bendera ${debate.debater1.country}" class="flag-icon-small">
                            </div>
                            <span class="match-vs-text">VS</span>
                            <div class="debater-entry">
                                <a href="${debater2ProfileLink}" class="debater-name-link">
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
    }

    container.innerHTML = htmlContent;
}

// ====== FUNGSI UNTUK MERENDER HALAMAN PROFIL (UNTUK profile.html) ======
function renderProfilePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const debaterName = urlParams.get('name');

    const profileCard = document.querySelector('.profile-card');

    // Dapatkan semua elemen yang dibutuhkan. Tambahkan null check di sini.
    const profileDebaterImage = profileCard ? profileCard.querySelector('.profile-debater-image') : null;
    const divisionText = profileCard ? profileCard.querySelector('.profile-division-status .division-text') : null;
    const profileName = profileCard ? profileCard.querySelector('.profile-name') : null;
    const countryText = profileCard ? profileCard.querySelector('.profile-country-info .country-text') : null;
    const profileFlagIcon = profileCard ? profileCard.querySelector('.profile-country-info .profile-flag-icon') : null;
    const vbWikiValue = profileCard ? profileCard.querySelector('.profile-info-item .vb-wiki-value') : null;
    const ibrValue = profileCard ? profileCard.querySelector('.profile-info-item .ibr-value') : null;
    const fightRecordWinNumber = profileCard ? profileCard.querySelector('.profile-fight-record .win-number') : null;
    const fightRecordLossNumber = profileCard ? profileCard.querySelector('.profile-fight-record .loss-number') : null;
    const fightRecordDrawNumber = profileCard ? profileCard.querySelector('.profile-fight-record .draw-number') : null;
    const matchHistoryList = profileCard ? profileCard.querySelector('.match-history-list') : null;
    const achievementsTableBody = profileCard ? profileCard.querySelector('.achievements-table tbody') : null;
    const statsList = profileCard ? profileCard.querySelector('.stats-list') : null;


    if (!profileCard) {
        console.error("ERROR: Elemen .profile-card tidak ditemukan di DOM. Pastikan Anda berada di profile.html dan struktur HTML sudah benar.");
        document.body.innerHTML = `<div style="text-align: center; padding: 40px; background-color: #333; color: red; border-radius: 8px;">
                                    <h2>Terjadi kesalahan. Container utama profil tidak ditemukan.</h2>
                                    <p>Mohon periksa kembali HTML Anda atau pastikan ini adalah halaman profile.html.</p>
                                 </div>`;
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

    // Mengisi data ke elemen HTML, dengan null check sebelum mengakses properti
    if (profileDebaterImage) {
        profileDebaterImage.src = debater.photo;
        profileDebaterImage.alt = `Foto ${debater.name}`;
    }
    if (divisionText) divisionText.textContent = `${debater.tier.toUpperCase()} DEBATE DIVISION`;
    if (profileName) profileName.textContent = debater.name;

    if (countryText) countryText.textContent = debater.country.toUpperCase();
    if (profileFlagIcon) {
        profileFlagIcon.src = debater.flag;
        profileFlagIcon.alt = `Bendera ${debater.country}`;
    }

    if (vbWikiValue) vbWikiValue.textContent = debater.vbWiki || 'N/A';
    if (ibrValue) ibrValue.textContent = debater.ibr || 'N/A';

    const fightRecord = debater.fightRecord || { "win": 0, "loss": 0, "draw": 0 };
    if (fightRecordWinNumber) fightRecordWinNumber.textContent = fightRecord.win;
    if (fightRecordLossNumber) fightRecordLossNumber.textContent = fightRecord.loss;
    if (fightRecordDrawNumber) fightRecordDrawNumber.textContent = fightRecord.draw;

    let matchHistoryHtml = '';
    if (matchHistoryList) {
        if (debater.matchHistory && debater.matchHistory.length > 0) {
            debater.matchHistory.sort((a, b) => new Date(b.date) - new Date(a.date));

            debater.matchHistory.forEach(match => {
                const resultClass = match.result === "Win" ? "win" : "loss";
                const opponentDebater = allDebaters[match.opponent];
                const opponentPhotoSrc = opponentDebater && opponentDebater.photo ? opponentDebater.photo : 'placeholder.jpg';

                matchHistoryHtml += `
                    <div class="dba-record-item ${resultClass}">
                        <div class="dba-match-info">
                            <img src="${debater.photo}" alt="Foto ${debater.name}" class="dba-debater-thumb">
                            <img src="${opponentPhotoSrc}" alt="Foto ${match.opponent}" class="dba-debater-thumb">
                            <div class="dba-details">
                                <p class="dba-vs-opponent">VS ${match.opponent.toUpperCase()}</p>
                                <p class="dba-match-spec">Date: ${new Date(match.date).toLocaleDateString('id-ID')} Method: ${match.method || 'N/A'}</p>
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
    }


    let achievementsHtml = '';
    if (achievementsTableBody) {
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
    }


    let statsHtml = '';
    if (statsList) {
        if (debater.profile) {
            for (const skill in debater.profile) {
                if (debater.profile.hasOwnProperty(skill)) {
                    const scoreValue = parseFloat(debater.profile[skill]);
                    const scorePercentage = (scoreValue / 10) * 100;

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
}

// ====== FUNGSI UNTUK MERENDER HALAMAN RANKING (UNTUK ranking.html) ======
function renderRankingPage() {
    const rankingContainer = document.getElementById('ranking-container');
    if (!rankingContainer) {
        console.warn("Element with ID 'ranking-container' not found. Cannot render ranking page.");
        return;
    }

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
            // Sorting kustom untuk setiap Tier
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
            } else if (tierName === "High Tier") {
                const highTierCustomOrder = ["Lianx", "Adyy", "MUCHIBEI", "ZOGRATIS", "Aaron", "ARYANWT"];
                debatersInTier.sort((a, b) => {
                    const indexA = highTierCustomOrder.indexOf(a.name);
                    const indexB = highTierCustomOrder.indexOf(b.name);
                    if (indexA === -1 || indexB === -1) {
                        return a.name.localeCompare(b.name);
                    }
                    return indexA - indexB;
                });
            } else if (tierName === "Low Tier") {
                // Tambahkan KYUKI ke urutan kustom Low Tier jika diinginkan
                const lowTierCustomOrder = ["ARYANWT", "Thinzel", "RIM", "Shade", "KYUKI"];
                debatersInTier.sort((a, b) => {
                    const indexA = lowTierCustomOrder.indexOf(a.name);
                    const indexB = lowTierCustomOrder.indexOf(b.name);
                    if (indexA === -1 || indexB === -1) {
                        // Jika nama tidak ada dalam daftar kustom, urutkan berdasarkan abjad
                        return a.name.localeCompare(b.name);
                    }
                    return indexA - indexB;
                });
            }
            else {
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
    if (!archiveListContainer) {
        console.warn("Element with ID 'archive-list' not found. Cannot render archive page.");
        return;
    }

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
                        <span class="date">${new Date(debate.date).toLocaleDateString('id-ID')}</span>
                    </div>
                    <div class="archive-participants">
                        <span><a href="profile.html?name=${encodeURIComponent(debate.debater1.name)}">${debate.debater1.name}</a></span> <span class="vs">VS</span> <span><a href="profile.html?name=${encodeURIComponent(debate.debater2.name)}">${debate.debater2.name}</a></span>
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
    const chartCanvas = document.getElementById('radarChart'); // Canvas untuk Chart.js

    if (!debater1Select || !debater2Select || !chartArea || !chartCanvas) {
        console.error("Elemen-elemen untuk halaman compare tidak ditemukan.");
        // Anda mungkin ingin menampilkan pesan error di UI juga
        if (chartArea) chartArea.innerHTML = '<p class="chart-message" style="color: red;">Terjadi kesalahan: Elemen perbandingan tidak lengkap di halaman ini.</p>';
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

        // Pastikan canvas ada di dalam chartArea sebelum merender chart
        if (!chartArea.contains(chartCanvas)) {
            chartArea.innerHTML = ''; // Hapus pesan sebelumnya
            chartArea.appendChild(chartCanvas);
        }

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
                            color: 'var(--white-text-color)',
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
                            color: 'var(--white-text-color)'
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

    updateComparison(); // Panggil pertama kali untuk menampilkan grafik awal
}


// ====== PANGGIL FUNGSI SAAT HALAMAN SELESAI DIMUAT ======
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;

    // Logika untuk menandai link navigasi yang aktif
    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '');
        const cleanedCurrentPath = currentPath.replace(/\/$/, '');

        // Khusus untuk 'index.html' dan root '/'
        const isHomeLink = link.getAttribute('href') === 'index.html' || link.getAttribute('href') === '/';
        const isCurrentPathHome = cleanedCurrentPath === '/index.html' || cleanedCurrentPath === '/';

        if (isHomeLink && isCurrentPathHome) {
            link.classList.add('active');
        } else if (!isHomeLink && cleanedCurrentPath.includes(linkPath) && linkPath !== '/') {
            // Untuk link lain, cek apakah path saat ini mengandung path link
            // Hindari menandai link '/' jika sedang di halaman lain
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Panggil fungsi rendering yang sesuai berdasarkan halaman saat ini
    if (currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
        startCountdown(); // Ini akan berjalan tapi tidak tampilkan apapun jika elemen countdown tidak ada
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
