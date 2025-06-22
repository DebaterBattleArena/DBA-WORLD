// ====== Global variable to store all debater profiles for easy lookup ======
let allDebaters = {}; 

// ====== DATA DEBAT SEKARANG LANGSUNG ADA DI SINI (BUKAN DARI data.json) ======
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
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
                "Critical Thinking": "8/10",
                "Logical Fallacies": "8/10",
                "Typing Strenght": "9/10",
                "Tiering Sistem": "8/10",
                "Calculation": "5/10",
                "Philisophy": "9/10",
                "General Knowledge": "10/10"
            }
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
            }
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

// ====== FUNGSI UNTUK COUNTDOWN ACARA UTAMA ======
function startCountdown() {
    const now = new Date();
    // Ini akan menghitung 2 hari dari waktu sekarang saat halaman dimuat
    const targetDate = new Date(now.getTime() + (2 * 24 * 60 * 60 * 1000)).getTime(); 

    const countdownInterval = setInterval(function() {
        const currentTime = new Date().getTime();
        const distance = targetDate - currentTime;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Pastikan elemen ditemukan sebelum memperbarui
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

// ====== FUNGSI UNTUK MEMUAT DATA DEBAT DARI DATA YANG DI-EMBED ======
function loadDebates() {
    // Data sudah tersedia di debatesData, tidak perlu fetch
    const debates = debatesData; // Langsung gunakan variabel debatesData
    
    // Memproses data untuk membuat daftar debater global yang unik
    debates.forEach(debate => {
        if (debate.debater1 && debate.debater1.name && !allDebaters[debate.debater1.name]) {
            allDebaters[debate.debater1.name] = debate.debater1;
        }
        if (debate.debater2 && debate.debater2.name && !allDebaters[debate.debater2.name]) {
            allDebaters[debate.debater2.name] = debate.debater2;
        }
    });

    renderDebates(debates); // Memanggil fungsi untuk menampilkan debat
}

// ====== FUNGSI UNTUK MERENDER (MENAMPILKAN) DEBAT KE HTML ======
function renderDebates(debates) {
    const container = document.getElementById('debates-container');
    if (!container) {
        console.error("Elemen 'debates-container' tidak ditemukan di HTML.");
        return;
    }

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
                        <span class="name clickable-debater" data-debater-name="${debate.debater1.name}">${debate.debater1.name}</span>
                        <span class="origin"><img src="${debate.debater1.flag}" alt="Bendera ${debate.debater1.country}"> ${debate.debater1.country.toUpperCase()}</span>
                    </div>
                    <span class="match-vs">VS</span>
                    <div class="debater-info">
                        <img src="${debate.debater2.photo}" alt="Foto ${debate.debater2.name}">
                        <span class="name clickable-debater" data-debater-name="${debate.debater2.name}">${debate.debater2.name}</span>
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

        // ====== MENAMBAHKAN EVENT LISTENER UNTUK KLIK DEBATER ======
        const clickableDebaters = document.querySelectorAll('.clickable-debater');
        clickableDebaters.forEach(debaterEl => {
            debaterEl.addEventListener('click', function() {
                const debaterName = this.dataset.debaterName;
                showDebaterProfile(debaterName);
            });
        });
    }

    // ====== FUNGSI UNTUK MENAMPILKAN MODAL PROFIL DEBATER ======
    function showDebaterProfile(debaterName) {
        const debater = allDebaters[debaterName];
        const modal = document.getElementById('debater-modal');
        const profileDetailsDiv = document.getElementById('modal-profile-details');

        if (!debater || !debater.profile || !modal || !profileDetailsDiv) {
            console.error("Data debater atau elemen modal tidak ditemukan:", debaterName);
            // Ini akan muncul jika data profil tidak lengkap atau modal/div target tidak ada
            return;
        }

        let profileHtml = `
            <img src="${debater.photo}" alt="Foto ${debater.name}">
            <h3>${debater.name}</h3>
            <ul>
        `;
        for (const skill in debater.profile) {
            if (debater.profile.hasOwnProperty(skill)) {
                profileHtml += `<li><strong>${skill}:</strong> <span>${debater.profile[skill]}</span></li>`;
            }
        }
        profileHtml += `</ul>`;

        profileDetailsDiv.innerHTML = profileHtml;
        modal.style.display = 'flex';

        // Animasi muncul modal
        setTimeout(() => {
            modal.querySelector('.modal-content').style.opacity = 1;
            modal.querySelector('.modal-content').style.transform = 'scale(1)';
        }, 50);
    }

    // ====== FUNGSI UNTUK MENYEMBUNYIKAN MODAL PROFIL DEBATER ======
    function hideDebaterProfile() {
        const modal = document.getElementById('debater-modal');
        if (modal) {
            // Animasi fade out
            modal.querySelector('.modal-content').style.opacity = 0;
            modal.querySelector('.modal-content').style.transform = 'scale(0.95)';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 400);
        }
    }

    // ====== PANGGIL FUNGSI SAAT HALAMAN SELESAI DIMUAT ======
    document.addEventListener('DOMContentLoaded', () => {
        startCountdown();
        loadDebates(); // Sekarang ini memanggil data yang sudah ada di dalam JS

        const closeButton = document.querySelector('.modal .close-button');
        if (closeButton) {
            closeButton.addEventListener('click', hideDebaterProfile);
        }

        const modal = document.getElementById('debater-modal');
        if (modal) {
            modal.addEventListener('click', function(event) {
                if (event.target === modal) {
                    hideDebaterProfile();
                }
            });
        }
    });
