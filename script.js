document.addEventListener('DOMContentLoaded', () => {
    let allDebaters = []; // Untuk menyimpan semua data debater secara global

    fetch('data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            allDebaters = data.debaters; // Simpan data debaters
            displayRecentMatches(data.recentMatches, allDebaters);
            displayTopLowRecords(allDebaters);
            displayDebaterQuickReview(allDebaters);
            displayLeaderboard(allDebaters);
            populateDebaterSelects(allDebaters); // Untuk Individual Match History dan Compare Debaters
            displayEvents(data.events);
        })
        .catch(error => console.error('Error fetching data:', error));

    // --- Fungsi untuk Recent Matches ---
    function displayRecentMatches(matches, debaters) {
        const recentMatchesListDiv = document.getElementById('recent-matches-list');
        if (!recentMatchesListDiv) return;

        matches.forEach(match => {
            const debater1 = debaters.find(d => d.id === match.debater1Id);
            const debater2 = debaters.find(d => d.id === match.debater2Id);
            const winner = debaters.find(d => d.id === match.winnerId);

            const matchCard = document.createElement('div');
            matchCard.classList.add('match-card');
            matchCard.innerHTML = `
                <div class="debaters">
                    <img src="${debater1.imageUrl}" alt="${debater1.name}">
                    <span>${debater1.name}</span>
                    <span class="versus">VS</span>
                    <span>${debater2.name}</span>
                    <img src="${debater2.imageUrl}" alt="${debater2.name}">
                </div>
                <p><strong>Winner:</strong> ${winner.name}</p>
                <p><strong>Topic:</strong> ${match.topic}</p>
                <p><strong>Date:</strong> ${match.date}</p>
                <p><strong>Location:</strong> ${match.location}</p>
            `;
            recentMatchesListDiv.appendChild(matchCard);
        });
    }

    // --- Fungsi untuk Top & Low Records Debaters ---
    function displayTopLowRecords(debaters) {
        const topDebatersList = document.getElementById('top-debaters-list');
        const lowDebatersList = document.getElementById('low-debaters-list');
        if (!topDebatersList || !lowDebatersList) return;

        // Hitung win rate dan urutkan
        const sortedDebaters = [...debaters].map(debater => {
            const totalMatches = debater.wins + debater.losses;
            const winRate = totalMatches > 0 ? (debater.wins / totalMatches) * 100 : 0;
            return { ...debater, winRate: winRate.toFixed(2) };
        }).sort((a, b) => b.winRate - a.winRate); // Urutkan dari win rate tertinggi

        // Top 3 Debaters
        sortedDebaters.slice(0, 3).forEach(debater => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${debater.name}</span> <span>${debater.winRate}% Win Rate</span>`;
            topDebatersList.appendChild(listItem);
        });

        // Emerging/Low Records (misal, 3 dengan win rate terendah tapi punya minimal 5 pertandingan)
        const emergingDebaters = sortedDebaters.filter(d => (d.wins + d.losses) >= 5).slice(-3); // Ambil 3 terbawah dari yang punya minimal 5 pertandingan
        if (emergingDebaters.length < 3) { // Jika kurang dari 3, ambil saja yang terbawah
             emergingDebaters.splice(0, emergingDebaters.length); // Kosongkan dulu
             emergingDebaters.push(...sortedDebaters.filter(d => (d.wins + d.losses) > 0).slice(-3));
        }

        emergingDebaters.forEach(debater => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span>${debater.name}</span> <span>${debater.winRate}% Win Rate</span>`;
            lowDebatersList.appendChild(listItem);
        });
    }

    // --- Fungsi untuk Debater Profile Quick Review ---
    function displayDebaterQuickReview(debaters) {
        const debaterQuickReviewListDiv = document.getElementById('debater-quick-review-list');
        if (!debaterQuickReviewListDiv) return;

        debaters.forEach(debater => {
            const totalMatches = debater.wins + debater.losses;
            const winRate = totalMatches > 0 ? (debater.wins / totalMatches * 100).toFixed(2) : 0;

            const debaterCard = document.createElement('div');
            debaterCard.classList.add('debater-card');
            debaterCard.innerHTML = `
                <img src="${debater.imageUrl}" alt="${debater.name}">
                <h3>${debater.name}</h3>
                <p><strong>Spesialisasi:</strong> ${debater.specialty}</p>
                <p><strong>Record:</strong> ${debater.wins} Wins - ${debater.losses} Losses</p>
                <p><strong>Win Rate:</strong> ${winRate}%</p>
            `;
            debaterQuickReviewListDiv.appendChild(debaterCard);
        });
    }

    // --- Fungsi untuk Leaderboard ---
    function displayLeaderboard(debaters) {
        const leaderboardTableBody = document.querySelector('#leaderboard-table tbody');
        if (!leaderboardTableBody) return;

        // Hitung win rate dan urutkan
        const sortedDebaters = [...debaters].map(debater => {
            const totalMatches = debater.wins + debater.losses;
            const winRate = totalMatches > 0 ? (debater.wins / totalMatches) * 100 : 0;
            return { ...debater, winRate: winRate.toFixed(2) };
        }).sort((a, b) => {
            // Urutkan berdasarkan Win Rate (tertinggi ke terendah)
            if (b.winRate !== a.winRate) {
                return b.winRate - a.winRate;
            }
            // Jika Win Rate sama, urutkan berdasarkan jumlah Wins (tertinggi ke terendah)
            return b.wins - a.wins;
        });

        sortedDebaters.forEach((debater, index) => {
            const row = leaderboardTableBody.insertRow();
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${debater.name}</td>
                <td>${debater.wins}</td>
                <td>${debater.losses}</td>
                <td>${debater.winRate}%</td>
            `;
        });
    }

    // --- Fungsi untuk Individual Match History dan Compare Debaters (Populate Select Options) ---
    function populateDebaterSelects(debaters) {
        const selectDebater = document.getElementById('selectDebater');
        const compareDebater1 = document.getElementById('compareDebater1');
        const compareDebater2 = document.getElementById('compareDebater2');

        const initialOption = document.createElement('option');
        initialOption.value = "";
        initialOption.textContent = "Pilih Debater";
        initialOption.disabled = true;
        initialOption.selected = true;

        const initialOption2 = initialOption.cloneNode(true);
        const initialOption3 = initialOption.cloneNode(true);

        selectDebater.appendChild(initialOption);
        compareDebater1.appendChild(initialOption2);
        compareDebater2.appendChild(initialOption3);

        debaters.forEach(debater => {
            const option1 = document.createElement('option');
            option1.value = debater.id;
            option1.textContent = debater.name;
            selectDebater.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = debater.id;
            option2.textContent = debater.name;
            compareDebater1.appendChild(option2);

            const option3 = document.createElement('option');
            option3.value = debater.id;
            option3.textContent = debater.name;
            compareDebater2.appendChild(option3);
        });

        // Event listener untuk Individual Match History
        selectDebater.addEventListener('change', (event) => {
            const debaterId = parseInt(event.target.value);
            displayIndividualMatchHistory(debaterId, allDebaters);
        });

        // Event listener untuk Compare Debaters
        const compareButton = document.getElementById('compareButton');
        compareButton.addEventListener('click', () => {
            const debater1Id = parseInt(compareDebater1.value);
            const debater2Id = parseInt(compareDebater2.value);
            if (debater1Id && debater2Id && debater1Id !== debater2Id) {
                compareTwoDebaters(debater1Id, debater2Id, allDebaters);
            } else {
                alert("Please select two different debaters to compare.");
            }
        });
    }

    // --- Fungsi untuk Menampilkan Individual Match History ---
    function displayIndividualMatchHistory(debaterId, debaters) {
        const historyDiv = document.getElementById('selected-debater-match-history');
        historyDiv.innerHTML = ''; // Kosongkan tampilan sebelumnya

        const selectedDebater = debaters.find(d => d.id === debaterId);

        if (selectedDebater && selectedDebater.matchHistory.length > 0) {
            const title = document.createElement('h3');
            title.textContent = `Match History for ${selectedDebater.name}`;
            title.style.textAlign = 'center';
            title.style.color = '#007bff';
            historyDiv.appendChild(title);

            selectedDebater.matchHistory.forEach(match => {
                const opponent = debaters.find(d => d.id === match.opponentId);
                const resultText = match.result === 'win' ? 'WIN' : 'LOSS';
                const resultClass = match.result === 'win' ? 'result-win' : 'result-loss';

                const matchItem = document.createElement('div');
                matchItem.classList.add('match-history-item');
                matchItem.innerHTML = `
                    <p><strong>vs. ${opponent ? opponent.name : 'Unknown Debater'}</strong></p>
                    <p><strong>Topic:</strong> ${match.topic}</p>
                    <p><strong>Date:</strong> ${match.date}</p>
                    <p class="${resultClass}">${resultText}</p>
                `;
                historyDiv.appendChild(matchItem);
            });
        } else if (selectedDebater) {
            historyDiv.innerHTML = `<p style="text-align: center; color: #ccc;">No match history available for ${selectedDebater.name}.</p>`;
        } else {
             historyDiv.innerHTML = `<p style="text-align: center; color: #ccc;">Please select a debater to view their match history.</p>`;
        }
    }

    // --- Fungsi untuk Membandingkan Dua Debaters ---
    function compareTwoDebaters(debater1Id, debater2Id, debaters) {
        const debater1 = debaters.find(d => d.id === debater1Id);
        const debater2 = debaters.find(d => d.id === debater2Id);
        const comparisonResultsDiv = document.getElementById('comparison-results');
        comparisonResultsDiv.innerHTML = ''; // Clear previous results

        if (!debater1 || !debater2) {
            comparisonResultsDiv.innerHTML = `<p style="text-align: center; color: #ccc;">Could not find debater data.</p>`;
            return;
        }

        const d1TotalMatches = debater1.wins + debater1.losses;
        const d1WinRate = d1TotalMatches > 0 ? (debater1.wins / d1TotalMatches * 100).toFixed(2) : 0;

        const d2TotalMatches = debater2.wins + debater2.losses;
        const d2WinRate = d2TotalMatches > 0 ? (debater2.wins / d2TotalMatches * 100).toFixed(2) : 0;

        comparisonResultsDiv.innerHTML = `
            <h3>Comparison: ${debater1.name} vs. ${debater2.name}</h3>
            <div style="display: flex; justify-content: space-around; text-align: center;">
                <div>
                    <img src="${debater1.imageUrl}" alt="${debater1.name}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid #007bff;"><br>
                    <strong>${debater1.name}</strong>
                    <p>Spesialisasi: ${debater1.specialty}</p>
                    <p>Wins: ${debater1.wins}</p>
                    <p>Losses: ${debater1.losses}</p>
                    <p>Win Rate: ${d1WinRate}%</p>
                </div>
                <div>
                    <img src="${debater2.imageUrl}" alt="${debater2.name}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid #007bff;"><br>
                    <strong>${debater2.name}</strong>
                    <p>Spesialisasi: ${debater2.specialty}</p>
                    <p>Wins: ${debater2.wins}</p>
                    <p>Losses: ${debater2.losses}</p>
                    <p>Win Rate: ${d2WinRate}%</p>
                </div>
            </div>
            <p style="margin-top: 20px; text-align: center;">${debater1.bio}</p>
            <p style="text-align: center;">${debater2.bio}</p>
            <p style="text-align: center; font-style: italic; color: #aaa;">
                ${d1WinRate > d2WinRate ? `${debater1.name} memiliki tingkat kemenangan yang lebih tinggi.` :
                  (d2WinRate > d1WinRate ? `${debater2.name} memiliki tingkat kemenangan yang lebih tinggi.` :
                  `Kedua debater memiliki tingkat kemenangan yang serupa.`)}
            </p>
        `;
    }

    // --- Fungsi untuk Upcoming Events (sama seperti sebelumnya) ---
    function displayEvents(events) {
        const eventsListDiv = document.getElementById('events-list');
        if (!eventsListDiv) return;

        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.innerHTML = `
                <h3>${event.name}</h3>
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
            `;
            eventsListDiv.appendChild(eventCard);
        });
    }
});
