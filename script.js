// DATA DEBAT SEKARANG LANGSUNG ADA DI SINI
const debatesData = [
    {
        "id": "debate-001",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-15",
        "matchBanner": "4ba98405-9174-4806-86b0-48db675ff249.jpeg",
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
                "Philosophy": "9/10",
                "General Knowledge": "10/10"
            },
            "tier": "Mid Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
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
                "Philosophy": "0/10",
                "General Knowledge": "1/10"
            },
            "tier": "Mid Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "MID TIER DEBATE",
        "winner": { "name": "HIROO", "method": "limit" },
        "loser": { "name": "RENJI" }
    },
    {
        "id": "debate-002",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-10",
        "matchBanner": "5c6e6c7b-dc86-4ca3-a496-6b0d34eefa77.jpeg",
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
                "Philosophy": "0/10",
                "General Knowledge": "7/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
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
                "Philosophy": "0/10",
                "General Knowledge": "8/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "HIGH TIER DEBATE",
        "winner": { "name": "ZOGRATIS", "method": "point" },
        "loser": { "name": "MUCHIBEI" }
    },
    {
        "id": "debate-003",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-05",
        "matchBanner": "0fa5d532-e863-4322-aefd-31e538cf2bcc.jpeg",
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
                "Philosophy": "7/10",
                "General Knowledge": "10/10"
            },
            "tier": "Low Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
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
                "Philosophy": "3/10",
                "General Knowledge": "7/10"
            },
            "tier": "Low Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "LOW TIER DEBATE",
        "winner": { "name": "ARYANWT", "method": "point" },
        "loser": { "name": "RIM" }
    },
    {
        "id": "debate-004",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-01",
        "matchBanner": "79194c7a-6e34-4bbd-a21e-9e9c918c4707.jpeg",
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
                "Philosophy": "9/10",
                "General Knowledge": "10/10"
            },
            "tier": "Mid Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
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
                "Philosophy": "4/10",
                "General Knowledge": "10/10"
            },
            "tier": "Mid Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "MID TIER DEBATE",
        "winner": { "name": "RANZT", "method": "point" },
        "loser": { "name": "RYUU" }
    },
    {
        "id": "debate-005",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-26",
        "matchBanner": "cdf5db1e-6410-4df1-a920-6d4f4e41b412.jpeg",
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
                "Philosophy": "0/10",
                "General Knowledge": "0/10"
            },
            "tier": "Low Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
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
                "Philosophy": "0/10",
                "General Knowledge": "1/10"
            },
            "tier": "Low Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "LOW TIER DEBATE",
        "winner": { "name": "Thinzel", "method": "limit" },
        "loser": { "name": "Shade" }
    },
    {
        "id": "debate-006",
        "category": "FICTIONAL DEBATE",
        "date": "2025-06-26",
        "matchBanner": "7a47b236-a78a-4b2f-bbce-9cadecef6843.jpeg",
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
                "Philosophy": "8/10",
                "General Knowledge": "8/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
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
                "Philosophy": "0/10",
                "General Knowledge": "5/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "HIGH TIER DEBATE",
        "winner": { "name": "Lianx", "method": "Point" },
        "loser": { "name": "Adyy" }
    },
    // DEBAT SELESAI YANG BARU DITAMBAHKAN
    {
        "id": "debate-007",
        "category": "FICTIONAL DEBATE",
        "date": "2025-07-20",
        "matchBanner": "path/to/kyuki-vs-shade-banner.jpeg",
        "debater1": {
            "name": "KYUKI",
            "photo": "a45117bc6e1a73cac3a74563ca3172c4_1.jpeg",
            "country": "malaysia",
            "flag": "IMG_0418.png",
            "vbWiki": "Low 1-C",
            "ibr": "High 1-B",
            "profile": {
                "Rhetoric": "0/10",
                "Typing Structure": "0/10",
                "Critical Thinking": "0/10",
                "Logical Fallacies": "0/10",
                "Typing Strenght": "0/10",
                "Tiering Sistem": "0/10",
                "Calculation": "0/10",
                "Philosophy": "0/10",
                "General Knowledge": "0/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
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
                "Philosophy": "0/10",
                "General Knowledge": "1/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "HIGH TIER DEBATE",
        "winner": { "name": "Shade", "method": "point" },
        "loser": { "name": "KYUKI" }
    },
    {
        "id": "debate-008",
        "category": "FICTIONAL DEBATE",
        "date": "2025-07-21",
        "matchBanner": "path/to/aheng-vs-pratama-banner.jpeg",
        "debater1": {
            "name": "Aheng",
            "photo": "path/to/aheng-photo.jpeg",
            "country": "indonesia",
            "flag": "IMG_0417.png",
            "vbWiki": "Unknown",
            "ibr": "Unknown",
            "profile": {
                "Rhetoric": "0/10",
                "Typing Structure": "0/10",
                "Critical Thinking": "0/10",
                "Logical Fallacies": "0/10",
                "Typing Strenght": "0/10",
                "Tiering Sistem": "0/10",
                "Calculation": "0/10",
                "Philosophy": "0/10",
                "General Knowledge": "0/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "debater2": {
            "name": "Pratama",
            "photo": "path/to/pratama-photo.jpeg",
            "country": "malaysia",
            "flag": "IMG_0418.png",
            "vbWiki": "Unknown",
            "ibr": "Unknown",
            "profile": {
                "Rhetoric": "0/10",
                "Typing Structure": "0/10",
                "Critical Thinking": "0/10",
                "Logical Fallacies": "0/10",
                "Typing Strenght": "0/10",
                "Tiering Sistem": "0/10",
                "Calculation": "0/10",
                "Philosophy": "0/10",
                "General Knowledge": "0/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "HIGH TIER DEBATE",
        "winner": { "name": "Aheng", "method": "limit" },
        "loser": { "name": "Pratama" }
    },
    {
        "id": "debate-009",
        "category": "FICTIONAL DEBATE",
        "date": "2025-07-22",
        "matchBanner": "path/to/ryuu-vs-raju-banner.jpeg",
        "debater1": {
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
                "Philosophy": "4/10",
                "General Knowledge": "10/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "debater2": {
            "name": "Raju",
            "photo": "path/to/raju-photo.jpeg",
            "country": "indonesia",
            "flag": "IMG_0417.png",
            "vbWiki": "Unknown",
            "ibr": "Unknown",
            "profile": {
                "Rhetoric": "0/10",
                "Typing Structure": "0/10",
                "Critical Thinking": "0/10",
                "Logical Fallacies": "0/10",
                "Typing Strenght": "0/10",
                "Tiering Sistem": "0/10",
                "Calculation": "0/10",
                "Philosophy": "0/10",
                "General Knowledge": "0/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "HIGH TIER DEBATE",
        "winner": { "name": "RYUU", "method": "point" },
        "loser": { "name": "Raju" }
    },
    {
        "id": "debate-010",
        "category": "FICTIONAL DEBATE",
        "date": "2025-07-23",
        "matchBanner": "path/to/adyy-vs-zogratis-banner.jpeg",
        "debater1": {
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
                "Philosophy": "0/10",
                "General Knowledge": "5/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "debater2": {
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
                "Philosophy": "0/10",
                "General Knowledge": "7/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "HIGH TIER DEBATE",
        "winner": { "name": "Adyy", "method": "limit" },
        "loser": { "name": "ZOGRATIS" }
    },
    // DEBAT YANG AKAN DATANG
    {
        "id": "debate-011",
        "category": "FICTIONAL DEBATE",
        "date": "2025-07-28",
        "matchBanner": "Proyek Baru 73.png",
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
                "Philosophy": "7/10",
                "General Knowledge": "10/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "debater2": {
            "name": "Aaron",
            "photo": "IMG_1269.jpeg",
            "country": "mexico",
            "flag": "IMG_1177.jpeg",
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
                "Philosophy": "7/10",
                "General Knowledge": "10/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "HIGH TIER DEBATE",
        "winner": null,
        "loser": null
    },
    {
        "id": "debate-012",
        "category": "FICTIONAL DEBATE",
        "date": "2025-08-01",
        "matchBanner": "path/to/aaron-vs-aryanwt-banner.jpeg",
        "debater1": {
            "name": "Aaron",
            "photo": "IMG_1269.jpeg",
            "country": "mexico",
            "flag": "IMG_1177.jpeg",
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
                "Philosophy": "7/10",
                "General Knowledge": "10/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "debater2": {
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
                "Philosophy": "7/10",
                "General Knowledge": "10/10"
            },
            "tier": "High Tier",
            "fightRecord": { "win": 0, "loss": 0, "draw": 0 },
            "achievements": []
        },
        "type": "HIGH TIER DEBATE",
        "winner": { "name": "Aaron", "method": "point" },
        "loser": { "name": "ARYANWT" }
    }
];

// Global variable to store all debater profiles and calculated stats
let allDebaters = {};

/**
 * Initializes debater data by populating the allDebaters map and calculating fight records and achievements.
 */
function initializeDebaterData() {
    allDebaters = {};

    debatesData.forEach(debate => {
        const debater1 = debate.debater1;
        const debater2 = debate.debater2;

        const initializeDebater = (debater) => {
            if (!allDebaters[debater.name]) {
                allDebaters[debater.name] = {
                    ...debater,
                    fightRecord: { win: 0, loss: 0, draw: 0 },
                    matchHistory: [],
                    achievements: []
                };
            }
        };

        initializeDebater(debater1);
        initializeDebater(debater2);

        if (debate.winner && debate.loser) {
            const winnerName = debate.winner.name;
            const loserName = debate.loser.name;
            const debateDate = new Date(debate.date);
            const debateYear = debateDate.getFullYear().toString();
            const winner = allDebaters[winnerName];
            const loser = allDebaters[loserName];

            if (winner && loser) {
                winner.fightRecord.win++;
                loser.fightRecord.loss++;

                winner.matchHistory.push({
                    opponent: loserName,
                    result: "Win",
                    method: debate.winner.method,
                    date: debate.date,
                    category: debate.category,
                    id: debate.id
                });
                loser.matchHistory.push({
                    opponent: winnerName,
                    result: "Loss",
                    method: "",
                    date: debate.date,
                    category: debate.category,
                    id: debate.id
                });

                winner.achievements.push({
                    "event": `Defeated ${loserName}`,
                    "achievement": "Debate Winner",
                    "date": debateYear
                });
                loser.achievements.push({
                    "event": `Lost to ${winnerName}`,
                    "achievement": "Debate Participant",
                    "date": debateYear
                });
            }
        }
    });

    Object.values(allDebaters).forEach(debater => {
        debater.achievements.sort((a, b) => new Date(b.date) - new Date(a.date));
    });
}

/**
 * Renders the main page content with upcoming and finished debates.
 * @param {Array} debatesToRender - The array of debate objects to display.
 */
function renderIndexPage(debatesToRender = debatesData) {
    const container = document.getElementById('debates-container');
    if (!container) return;

    const upcomingDebates = debatesToRender.filter(d => !d.winner).sort((a, b) => new Date(a.date) - new Date(b.date));
    const finishedDebates = debatesToRender.filter(d => d.winner).sort((a, b) => new Date(b.date) - new Date(a.date));

    let htmlContent = '';
    const renderDebateCard = (debate, isUpcoming) => {
        const debater1 = allDebaters[debate.debater1.name];
        const debater2 = allDebaters[debate.debater2.name];
        if (!debater1 || !debater2) return '';

        const topic = debate.type ? debate.type.toUpperCase() : 'NO TOPIC';
        const dateFormatted = new Date(debate.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
        const winner = debate.winner;
        const loser = debate.loser;

        const resultHtml = isUpcoming ?
            `<div class="match-result-section upcoming-label"><div class="result-info">UPCOMING</div></div>` :
            `<div class="match-result-section">
                <div class="result-info winner">WINNER: ${winner.name.toUpperCase()} BY ${winner.method.toUpperCase()}</div>
                <div class="result-info loser">LOSS: ${loser.name.toUpperCase()}</div>
            </div>`;

        return `
            <div class="match-card ${isUpcoming ? 'upcoming-match-card' : ''}">
                <div class="match-image-container">
                    <img src="${debate.matchBanner}" alt="Debate between ${debater1.name} vs ${debater2.name}" class="match-banner-img">
                    <div class="match-category-label">${debate.category.toUpperCase()} | ${topic}</div>
                    ${isUpcoming ? `<div class="upcoming-date-overlay">${dateFormatted}</div>` : ''}
                </div>
                <div class="match-details-bottom">
                    <div class="debater-names-row">
                        <div class="debater-entry">
                            <a href="profile.html?name=${encodeURIComponent(debater1.name)}" class="debater-name-link">${debater1.name.toUpperCase()}</a>
                            <img src="${debater1.flag}" alt="${debater1.country} flag" class="flag-icon-small">
                        </div>
                        <span class="match-vs-text">VS</span>
                        <div class="debater-entry">
                            <a href="profile.html?name=${encodeURIComponent(debater2.name)}" class="debater-name-link">${debater2.name.toUpperCase()}</a>
                            <img src="${debater2.flag}" alt="${debater2.country} flag" class="flag-icon-small">
                        </div>
                    </div>
                    <p class="match-topic">${topic}</p>
                </div>
                ${resultHtml}
            </div>
        `;
    };

    if (upcomingDebates.length > 0) {
        htmlContent += '<h3 class="section-subtitle">UPCOMING DEBATES</h3>';
        htmlContent += upcomingDebates.map(debate => renderDebateCard(debate, true)).join('');
    }

    if (finishedDebates.length > 0) {
        if (upcomingDebates.length > 0) htmlContent += '<h3 class="section-subtitle" style="margin-top: 40px;">FINISHED DEBATES</h3>';
        else htmlContent += '<h3 class="section-subtitle">FINISHED DEBATES</h3>';
        htmlContent += finishedDebates.map(debate => renderDebateCard(debate, false)).join('');
    }

    container.innerHTML = htmlContent;
}

/**
 * Renders the profile page for a specific debater.
 */
function renderProfilePage() {
    const urlParams = new URLSearchParams(window.location.search);
    const debaterName = urlParams.get('name');
    const profileCard = document.querySelector('.profile-card');

    if (!profileCard || !debaterName) {
        if (profileCard) profileCard.innerHTML = `<p class="error-message">Profile not found.</p>`;
        return;
    }

    const debater = allDebaters[debaterName];
    if (!debater) {
        profileCard.innerHTML = `<p class="error-message">Profile for debater "${debaterName}" not found.</p>`;
        return;
    }

    profileCard.querySelector('.profile-debater-image').src = debater.photo;
    profileCard.querySelector('.profile-division-status .division-text').textContent = `${debater.tier.toUpperCase()} DEBATE DIVISION`;
    profileCard.querySelector('.profile-name').textContent = debater.name;
    profileCard.querySelector('.profile-country-info .country-text').textContent = debater.country.toUpperCase();
    profileCard.querySelector('.profile-country-info .profile-flag-icon').src = debater.flag;
    profileCard.querySelector('.vb-wiki-value').textContent = debater.vbWiki || 'N/A';
    profileCard.querySelector('.ibr-value').textContent = debater.ibr || 'N/A';
    profileCard.querySelector('.win-number').textContent = debater.fightRecord.win;
    profileCard.querySelector('.loss-number').textContent = debater.fightRecord.loss;
    profileCard.querySelector('.draw-number').textContent = debater.fightRecord.draw;

    const matchHistoryList = profileCard.querySelector('.match-history-list');
    if (matchHistoryList) {
        const sortedHistory = debater.matchHistory.sort((a, b) => new Date(b.date) - new Date(a.date));
        matchHistoryList.innerHTML = sortedHistory.length > 0 ? sortedHistory.map(match => {
            const opponentDebater = allDebaters[match.opponent];
            const resultClass = match.result === "Win" ? "win" : "loss";
            return `
                <div class="dba-record-item ${resultClass}">
                    <div class="dba-match-info">
                        <img src="${debater.photo}" alt="${debater.name} photo" class="dba-debater-thumb">
                        <img src="${opponentDebater ? opponentDebater.photo : ''}" alt="${match.opponent} photo" class="dba-debater-thumb">
                        <div class="dba-details">
                            <p class="dba-vs-opponent">VS ${match.opponent.toUpperCase()}</p>
                            <p class="dba-match-spec">Date: ${new Date(match.date).toLocaleDateString('en-US')} Method: ${match.method || 'N/A'}</p>
                        </div>
                    </div>
                    <span class="dba-result-badge">${match.result.toUpperCase()}</span>
                </div>
            `;
        }).join('') : `<p class="no-history-message">No match history available.</p>`;
    }

    const achievementsTableBody = profileCard.querySelector('.achievements-table tbody');
    if (achievementsTableBody) {
        achievementsTableBody.innerHTML = debater.achievements.length > 0 ? debater.achievements.map(ach => `<tr><td>${ach.event}</td><td>${ach.achievement}</td><td>${ach.date}</td></tr>`).join('') : `<tr><td colspan="3" class="no-history-message">No achievements yet.</td></tr>`;
    }

    const statsList = profileCard.querySelector('.stats-list');
    if (statsList) {
        statsList.innerHTML = Object.entries(debater.profile).map(([skill, score]) => {
            const scoreValue = parseFloat(score);
            const scorePercentage = (scoreValue / 10) * 100;
            return `
                <li>
                    <strong>${skill}:</strong>
                    <div class="skill-bar-container">
                        <div class="skill-bar" style="width: ${scorePercentage}%;"></div>
                        <span class="skill-score">${score}</span>
                    </div>
                </li>
            `;
        }).join('');
    }
}

/**
 * Renders the ranking page by tier.
 */
function renderRankingPage() {
    const rankingContainer = document.getElementById('ranking-container');
    if (!rankingContainer) return;

    const allDebatersByTier = { "Low Tier": [], "Mid Tier": [], "High Tier": [] };
    Object.values(allDebaters).forEach(d => {
        if (d.tier) allDebatersByTier[d.tier].push(d);
    });

    let rankingHtml = '';
    const tiersOrder = ["High Tier", "Mid Tier", "Low Tier"];

    tiersOrder.forEach(tierName => {
        const debatersInTier = allDebatersByTier[tierName];
        if (!debatersInTier || debatersInTier.length === 0) return;

        debatersInTier.sort((a, b) => {
            if (b.fightRecord.win !== a.fightRecord.win) {
                return b.fightRecord.win - a.fightRecord.win;
            }
            return a.fightRecord.loss - b.fightRecord.loss;
        });

        rankingHtml += `
            <h3 class="ranking-tier-header">${tierName}</h3>
            <div class="ranking-table-container">
                <table class="ranking-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Debater</th>
                            <th>Win</th>
                            <th>Loss</th>
                            <th>Draw</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${debatersInTier.map((debater, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>
                                    <div class="debater-info">
                                        <img src="${debater.photo}" alt="${debater.name} photo">
                                        <a href="profile.html?name=${encodeURIComponent(debater.name)}" class="debater-name">${debater.name}</a>
                                    </div>
                                </td>
                                <td>${debater.fightRecord.win}</td>
                                <td>${debater.fightRecord.loss}</td>
                                <td>${debater.fightRecord.draw}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    });
    rankingContainer.innerHTML = rankingHtml;
}

/**
 * Renders the archive page with finished debates.
 */
function renderArchivePage() {
    const archiveListContainer = document.getElementById('archive-list');
    if (!archiveListContainer) return;

    const archivedDebates = debatesData.filter(d => d.winner).sort((a, b) => new Date(b.date) - new Date(a.date));

    archiveListContainer.innerHTML = archivedDebates.length === 0
        ? '<p class="no-history-message">No archived debates available.</p>'
        : archivedDebates.map(d => `
            <div class="archive-item">
                <div class="archive-header">
                    <span class="category">${d.category}</span>
                    <span class="date">${new Date(d.date).toLocaleDateString('en-US')}</span>
                </div>
                <div class="archive-participants">
                    <span><a href="profile.html?name=${encodeURIComponent(d.debater1.name)}">${d.debater1.name}</a></span> <span class="vs">VS</span> <span><a href="profile.html?name=${encodeURIComponent(d.debater2.name)}">${d.debater2.name}</a></span>
                </div>
                <div class="archive-result">
                    <p>Winner: <span class="winner-name">${d.winner.name}</span> by ${d.winner.method}</p>
                    <p>Loss: <span class="loss-name">${d.loser.name}</span></p>
                </div>
                <div class="archive-type">(${d.type})</div>
            </div>
          `).join('');
}

// Global variable for Chart.js instance
let chartInstance = null;

/**
 * Renders the compare page with debater selection and a radar chart.
 */
function renderComparePage() {
    const [debater1Select, debater2Select, chartArea, chartCanvas] = [
        document.getElementById('debater1-select'),
        document.getElementById('debater2-select'),
        document.getElementById('chart-area'),
        document.getElementById('radarChart')
    ];

    if (!debater1Select || !debater2Select || !chartArea || !chartCanvas) {
        return;
    }

    const debaterNames = Object.keys(allDebaters).sort();
    const createOptions = names => names.map(name => `<option value="${name}">${name}</option>`).join('');
    debater1Select.innerHTML = '<option value="">Select Debater 1</option>' + createOptions(debaterNames);
    debater2Select.innerHTML = '<option value="">Select Debater 2</option>' + createOptions(debaterNames);

    const updateComparison = () => {
        const [name1, name2] = [debater1Select.value, debater2Select.value];
        if (!name1 || !name2) {
            chartArea.innerHTML = '<p class="chart-message">Select two debaters to compare their stats.</p>';
            if (chartInstance) chartInstance.destroy();
            return;
        }

        const [d1, d2] = [allDebaters[name1], allDebaters[name2]];
        const labels = Object.keys(d1.profile);
        const [data1, data2] = [labels.map(l => parseFloat(d1.profile[l])), labels.map(l => parseFloat(d2.profile[l]))];

        if (chartInstance) chartInstance.destroy();

        chartArea.innerHTML = '';
        chartArea.appendChild(chartCanvas);

        chartInstance = new Chart(chartCanvas.getContext('2d'), {
            type: 'radar',
            data: {
                labels,
                datasets: [{
                    label: d1.name,
                    data: data1,
                    backgroundColor: 'rgba(54, 162, 235, 0.4)', borderColor: 'rgba(54, 162, 235, 1)', borderWidth: 2,
                    pointBackgroundColor: 'rgba(54, 162, 235, 1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
                }, {
                    label: d2.name,
                    data: data2,
                    backgroundColor: 'rgba(255, 99, 132, 0.4)', borderColor: 'rgba(255, 99, 132, 1)', borderWidth: 2,
                    pointBackgroundColor: 'rgba(255, 99, 132, 1)', pointBorderColor: '#fff', pointHoverBackgroundColor: '#fff', pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                scales: { r: { angleLines: { color: 'rgba(255, 255, 255, 0.2)' }, grid: { color: 'rgba(255, 255, 255, 0.3)' }, pointLabels: { color: 'var(--white-text-color)', font: { size: 12 } }, ticks: { beginAtZero: true, max: 10, stepSize: 2, color: 'var(--light-grey)', backdropColor: 'transparent', showLabelBackdrop: false } } },
                plugins: { legend: { labels: { color: 'var(--white-text-color)' } }, tooltip: { callbacks: { label: c => `${c.dataset.label}: ${c.raw}` } } }
            }
        });
    };

    debater1Select.addEventListener('change', updateComparison);
    debater2Select.addEventListener('change', updateComparison);
    updateComparison();
}

/**
 * Manages the single-page application (SPA) routing.
 */
function handleRouting() {
    const path = window.location.pathname.split('/').pop();
    const sections = document.querySelectorAll('section');
    sections.forEach(s => s.style.display = 'none');

    switch (true) {
        case path.includes('ranking.html'):
            document.getElementById('ranking-page').style.display = 'block';
            document.getElementById('contact').style.display = 'block';
            renderRankingPage();
            break;
        case path.includes('archive.html'):
            document.getElementById('archive-page').style.display = 'block';
            document.getElementById('contact').style.display = 'block';
            renderArchivePage();
            break;
        case path.includes('compare.html'):
            document.getElementById('compare-page').style.display = 'block';
            document.getElementById('contact').style.display = 'block';
            renderComparePage();
            break;
        case path.includes('profile.html'):
            document.getElementById('profile-page').style.display = 'block';
            document.getElementById('contact').style.display = 'block';
            renderProfilePage();
            break;
        case path.includes('index.html') || path === '':
        default:
            document.getElementById('main-event').style.display = 'flex';
            document.getElementById('about').style.display = 'block';
            document.getElementById('achievement').style.display = 'block';
            document.getElementById('match-list').style.display = 'block';
            document.getElementById('contact').style.display = 'block';
            renderIndexPage();
            startCountdown();
            break;
    }
}

/**
 * Handles the search functionality with debouncing.
 */
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    let timeout = null;
    searchInput.addEventListener('input', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const query = searchInput.value.toLowerCase();
            const debatesToRender = query.length > 0
                ? debatesData.filter(d =>
                    (d.debater1.name && d.debater1.name.toLowerCase().includes(query)) ||
                    (d.debater2.name && d.debater2.name.toLowerCase().includes(query)) ||
                    (d.type && d.type.toLowerCase().includes(query))
                )
                : debatesData;
            renderIndexPage(debatesToRender);
        }, 300);
    });
}

/**
 * Handles UI interactions for mobile menu and search bar.
 */
function setupUI() {
    const [menuBtn, mobileMenu, closeMenuBtn, searchBtn, searchContainer, closeSearchBtn, searchInput, overlay] = [
        document.getElementById('menu-btn'), document.getElementById('mobile-menu'), document.getElementById('close-menu-btn'),
        document.getElementById('search-btn'), document.getElementById('search-container'), document.getElementById('close-search-btn'),
        document.getElementById('search-input'), document.getElementById('overlay')
    ];

    if (menuBtn) menuBtn.addEventListener('click', () => { mobileMenu.classList.add('active'); overlay.style.display = 'block'; });
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', () => { mobileMenu.classList.remove('active'); overlay.style.display = 'none'; });
    if (searchBtn) searchBtn.addEventListener('click', () => { searchContainer.classList.add('active'); searchInput.focus(); overlay.style.display = 'block'; });
    if (closeSearchBtn) closeSearchBtn.addEventListener('click', () => {
        searchContainer.classList.remove('active');
        overlay.style.display = 'none';
        searchInput.value = '';
        renderIndexPage();
    });
    if (overlay) overlay.addEventListener('click', () => {
        if (mobileMenu && mobileMenu.classList.contains('active')) mobileMenu.classList.remove('active');
        if (searchContainer && searchContainer.classList.contains('active')) {
            searchContainer.classList.remove('active');
            searchInput.value = '';
            renderIndexPage();
        }
        overlay.style.display = 'none';
    });
}

/**
 * Starts the main countdown timer for an event.
 */
function startCountdown() {
    const [daysEl, hoursEl, minutesEl, secondsEl] = [
        document.getElementById("days"),
        document.getElementById("hours"),
        document.getElementById("minutes"),
        document.getElementById("seconds")
    ];

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    // Use a date that exists in your data
    const targetDate = new Date("2025-07-28T00:00:00").getTime();
    const countdownInterval = setInterval(() => {
        const distance = targetDate - new Date().getTime();
        if (distance <= 0) {
            clearInterval(countdownInterval);
            [daysEl, hoursEl, minutesEl, secondsEl].forEach(el => el.innerHTML = '00');
            return;
        }

        const [days, hours, minutes, seconds] = [
            Math.floor(distance / (1000 * 60 * 60 * 24)),
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            Math.floor((distance % (1000 * 60)) / 1000)
        ];

        daysEl.innerHTML = String(days).padStart(2, '0');
        hoursEl.innerHTML = String(hours).padStart(2, '0');
        minutesEl.innerHTML = String(minutes).padStart(2, '0');
        secondsEl.innerHTML = String(seconds).padStart(2, '0');
    }, 1000);
}

/**
 * Main function to run the application on page load.
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeDebaterData();
    handleRouting();
    setupSearch();
    setupUI();
});
