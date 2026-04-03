// News data for different regions and categories
const newsData = {
    international: [
        {
            title: "Global Climate Summit Addresses Carbon Emissions",
            description: "World leaders gather to discuss strategies for reducing carbon emissions and combating climate change.",
            date: "April 3, 2026",
            category: "international",
            image: "https://via.placeholder.com/300x200?text=Climate+Summit"
        },
        {
            title: "United Nations Launches New Development Initiative",
            description: "UN announces comprehensive program to support sustainable development in emerging economies.",
            date: "April 2, 2026",
            category: "international",
            image: "https://via.placeholder.com/300x200?text=UN+Initiative"
        },
        {
            title: "International Trade Agreements Signed",
            description: "Major trade agreement signed between countries to boost economic cooperation.",
            date: "April 1, 2026",
            category: "international",
            image: "https://via.placeholder.com/300x200?text=Trade+Deal"
        }
    ],
    india: [
        {
            title: "India's GDP Growth Reaches New High",
            description: "India's economic growth accelerates, becoming one of the fastest-growing major economies.",
            date: "April 3, 2026",
            category: "india",
            image: "https://via.placeholder.com/300x200?text=India+GDP"
        },
        {
            title: "Railway Expansion Project Launched Nationally",
            description: "Government announces major railway expansion project to connect remote areas.",
            date: "April 2, 2026",
            category: "india",
            image: "https://via.placeholder.com/300x200?text=Railway+Project"
        },
        {
            title: "National Education Policy Updates Announced",
            description: "Ministry of Education releases new guidelines for improving educational standards.",
            date: "April 1, 2026",
            category: "india",
            image: "https://via.placeholder.com/300x200?text=Education+Policy"
        },
        {
            title: "Healthcare Initiative Expands Across States",
            description: "National health program reaches 500 million people with free medical services.",
            date: "March 31, 2026",
            category: "india",
            image: "https://via.placeholder.com/300x200?text=Healthcare"
        }
    ],
    jharkhand: [
        {
            title: "Jamshedpur Development Project Progresses",
            description: "Smart city development in Jamshedpur moves forward with infrastructure upgrades.",
            date: "April 3, 2026",
            category: "jharkhand",
            image: "https://via.placeholder.com/300x200?text=Jamshedpur+Dev"
        },
        {
            title: "Jharkhand Tribal Welfare Scheme Expanded",
            description: "State government expands livelihood programs for tribal communities.",
            date: "April 2, 2026",
            category: "jharkhand",
            image: "https://via.placeholder.com/300x200?text=Tribal+Welfare"
        },
        {
            title: "Ranchi University Technology Hub Opens",
            description: "New technology and innovation center launched in Ranchi for startup ecosystem.",
            date: "April 1, 2026",
            category: "jharkhand",
            image: "https://via.placeholder.com/300x200?text=Tech+Hub"
        },
        {
            title: "Mining Sector Reforms Announced",
            description: "Jharkhand government announces new sustainable mining policies.",
            date: "March 30, 2026",
            category: "jharkhand",
            image: "https://via.placeholder.com/300x200?text=Mining"
        }
    ],
    bihar: [
        {
            title: "Patna Metro Project Reaches Final Phase",
            description: "Construction of metro rail system in Patna nears completion.",
            date: "April 3, 2026",
            category: "bihar",
            image: "https://via.placeholder.com/300x200?text=Patna+Metro"
        },
        {
            title: "Agricultural Support Scheme for Farmers Launched",
            description: "Bihar government announces comprehensive support program for agricultural sector.",
            date: "April 2, 2026",
            category: "bihar",
            image: "https://via.placeholder.com/300x200?text=Farm+Scheme"
        },
        {
            title: "Nalanda Ancient University Site Restoration",
            description: "Archaeological restoration project at Nalanda continues to reveal historical treasures.",
            date: "April 1, 2026",
            category: "bihar",
            image: "https://via.placeholder.com/300x200?text=Nalanda"
        },
        {
            title: "Education Excellence Program Begins",
            description: "New skill development centers open across Bihar districts.",
            date: "March 29, 2026",
            category: "bihar",
            image: "https://via.placeholder.com/300x200?text=Skill+Centers"
        }
    ],
    andhra: [
        {
            title: "Amaravati Capital Development Accelerates",
            description: "New capital city of Andhra Pradesh sees rapid infrastructure development.",
            date: "April 3, 2026",
            category: "andhra",
            image: "https://via.placeholder.com/300x200?text=Amaravati"
        },
        {
            title: "IT Hub Expansion in Hyderabad",
            description: "Andhra Pradesh continues to strengthen its position as a major IT destination.",
            date: "April 2, 2026",
            category: "andhra",
            image: "https://via.placeholder.com/300x200?text=IT+Hub"
        },
        {
            title: "Renewable Energy Target Increased",
            description: "State aims to achieve 50% renewable energy generation.",
            date: "April 1, 2026",
            category: "andhra",
            image: "https://via.placeholder.com/300x200?text=Energy"
        },
        {
            title: "Tourism Infrastructure Development",
            description: "New tourist destinations being developed across Andhra Pradesh.",
            date: "March 28, 2026",
            category: "andhra",
            image: "https://via.placeholder.com/300x200?text=Tourism"
        }
    ],
    uttar: [
        {
            title: "Lucknow Metro Expansion Announced",
            description: "New metro lines to connect major areas of Lucknow.",
            date: "April 3, 2026",
            category: "uttar",
            image: "https://via.placeholder.com/300x200?text=Lucknow+Metro"
        },
        {
            title: "Industrial Corridor Development",
            description: "UP government announces new industrial clusters for manufacturing.",
            date: "April 2, 2026",
            category: "uttar",
            image: "https://via.placeholder.com/300x200?text=Industrial"
        },
        {
            title: "Digital Literacy Initiative Launched",
            description: "Uttar Pradesh launches program to make rural areas digitally connected.",
            date: "April 1, 2026",
            category: "uttar",
            image: "https://via.placeholder.com/300x200?text=Digital"
        },
        {
            title: "Water Management Project Starts",
            description: "Comprehensive water resource management project in UP districts.",
            date: "March 27, 2026",
            category: "uttar",
            image: "https://via.placeholder.com/300x200?text=Water"
        }
    ],
    odisha: [
        {
            title: "Paradip Port Enhancement Project",
            description: "Major infrastructure upgrade at Paradip Port to increase capacity.",
            date: "April 3, 2026",
            category: "odisha",
            image: "https://via.placeholder.com/300x200?text=Paradip+Port"
        },
        {
            title: "Coastal Tourism Development",
            description: "Odisha focuses on developing world-class beach tourism infrastructure.",
            date: "April 2, 2026",
            category: "odisha",
            image: "https://via.placeholder.com/300x200?text=Coastal+Tour"
        },
        {
            title: "Steel Industry Growth",
            description: "Odisha's steel sector reaches new production milestone.",
            date: "April 1, 2026",
            category: "odisha",
            image: "https://via.placeholder.com/300x200?text=Steel"
        },
        {
            title: "Community Development Program",
            description: "New livelihood programs launched for tribal communities in Odisha.",
            date: "March 26, 2026",
            category: "odisha",
            image: "https://via.placeholder.com/300x200?text=Community"
        }
    ],
    karnataka: [
        {
            title: "Bangalore Tech Innovation Park Opens",
            description: "New innovation hub launched to support emerging technology startups.",
            date: "April 3, 2026",
            category: "karnataka",
            image: "https://via.placeholder.com/300x200?text=Tech+Park"
        },
        {
            title: "Coffee Industry Modernization",
            description: "Karnataka government supports modernization of coffee farming techniques.",
            date: "April 2, 2026",
            category: "karnataka",
            image: "https://via.placeholder.com/300x200?text=Coffee"
        },
        {
            title: "Sustainable Tourism Initiative",
            description: "Western Ghats tourism development with focus on sustainability.",
            date: "April 1, 2026",
            category: "karnataka",
            image: "https://via.placeholder.com/300x200?text=Tourism"
        },
        {
            title: "Higher Education Expansion",
            description: "Karnataka opens 10 new educational institutions across the state.",
            date: "March 25, 2026",
            category: "karnataka",
            image: "https://via.placeholder.com/300x200?text=Education"
        }
    ]
};

let currentCategory = 'international';

// Function to display news
function displayNews(category) {
    const newsFeed = document.getElementById('newsFeed');
    const news = newsData[category] || [];

    if (news.length === 0) {
        newsFeed.innerHTML = '<p>No news available for this category.</p>';
        return;
    }

    newsFeed.innerHTML = news.map(item => `
        <article class="news-article">
            <div class="news-image">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            </div>
            <div class="news-content">
                <h3>${item.title}</h3>
                <p class="news-meta"><strong>Date:</strong> ${item.date}</p>
                <p class="news-description">${item.description}</p>
                <button class="read-more" onclick="alert('Full article: ${item.title}')">Read More</button>
            </div>
        </article>
    `).join('');
}

// Function to filter news by category
function filterNews(category) {
    currentCategory = category;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Display news for selected category
    displayNews(category);
}

// Load international news on page load
document.addEventListener('DOMContentLoaded', () => {
    displayNews('international');
});

// Optional: Fetch real news from API (requires NewsAPI key)
async function fetchRealNews() {
    const apiKey = 'YOUR_NEWSAPI_KEY'; // Get from https://newsapi.org
    const endpoints = {
        international: 'https://newsapi.org/v2/everything?domains=bbc.com,cnn.com&sortBy=publishedAt&language=en&pageSize=5',
        india: 'https://newsapi.org/v2/everything?q=india&sortBy=publishedAt&language=en&pageSize=5',
        jharkhand: 'https://newsapi.org/v2/everything?q=jharkhand&sortBy=publishedAt&language=en&pageSize=5',
        bihar: 'https://newsapi.org/v2/everything?q=bihar&sortBy=publishedAt&language=en&pageSize=5',
        andhra: 'https://newsapi.org/v2/everything?q=andhra+pradesh&sortBy=publishedAt&language=en&pageSize=5',
        uttar: 'https://newsapi.org/v2/everything?q=uttar+pradesh&sortBy=publishedAt&language=en&pageSize=5',
        odisha: 'https://newsapi.org/v2/everything?q=odisha&sortBy=publishedAt&language=en&pageSize=5',
        karnataka: 'https://newsapi.org/v2/everything?q=karnataka&sortBy=publishedAt&language=en&pageSize=5'
    };

    // Note: For production, use a backend service to fetch news
    // Fetching from client-side can expose API keys
}
