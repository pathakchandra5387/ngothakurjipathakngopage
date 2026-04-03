const newsData = {
  international: [
    { title: "Global Climate Summit Addresses Carbon Emissions", description: "World leaders gather to reduce carbon emissions.", date: "April 3, 2026", category: "international", image: "https://via.placeholder.com/300x200?text=Climate+Summit" },
    { title: "UN Development Initiative Launched", description: "New global program to drive sustainable development.", date: "April 2, 2026", category: "international", image: "https://via.placeholder.com/300x200?text=UN+Initiative" }
  ],
  india: [
    { title: "India GDP Set to Touch 8.5% Growth", description: "Economy grows as manufacturing and exports expand.", date: "April 3, 2026", category: "india", image: "https://via.placeholder.com/300x200?text=India+GDP" },
    { title: "National Digital Literacy Drive Expands", description: "New programs in rural zones for digital training.", date: "April 2, 2026", category: "india", image: "https://via.placeholder.com/300x200?text=Digital+Literacy" }
  ],
  jharkhand: [
    { title: "Jamshedpur Smart City Phase-2", description: "Urban renewal and public park expansions underway.", date: "April 3, 2026", category: "jharkhand", image: "https://via.placeholder.com/300x200?text=Jamshedpur" },
    { title: "Tribal Welfare Program Launched", description: "Support systems for job training and welfare integration.", date: "April 2, 2026", category: "jharkhand", image: "https://via.placeholder.com/300x200?text=Tribal+Welfare" }
  ],
  bihar: [
    { title: "Patna Metro Enters Trial Run", description: "Major metro project promises safer travel for millions.", date: "April 3, 2026", category: "bihar", image: "https://via.placeholder.com/300x200?text=Patna+Metro" },
    { title: "Bihar Farmer Assistance Scheme Begins", description: "New support packages for crop insurance and seeds.", date: "April 2, 2026", category: "bihar", image: "https://via.placeholder.com/300x200?text=Farm+Support" }
  ],
  andhra: [
    { title: "Amaravati Capital Development Accelerates", description: "Capital development gains pace with infrastructure foundations.", date: "April 3, 2026", category: "andhra", image: "https://via.placeholder.com/300x200?text=Amaravati" },
    { title: "Andhra IT Corridor Expansion", description: "IT jobs and startups supported in new tech parks.", date: "April 2, 2026", category: "andhra", image: "https://via.placeholder.com/300x200?text=IT+Hub" }
  ],
  uttar: [
    { title: "Lucknow Metro Next Phase", description: "Expanded routes approved for central suburbs.", date: "April 3, 2026", category: "uttar", image: "https://via.placeholder.com/300x200?text=Lucknow+Metro" },
    { title: "UP Skill Mission Intensifies", description: "Rural youth training programs expanded.", date: "April 2, 2026", category: "uttar", image: "https://via.placeholder.com/300x200?text=Skill+UP" }
  ],
  odisha: [
    { title: "Paradip Port Capacity Expansion", description: "Port upgrades boost trade volumes.", date: "April 3, 2026", category: "odisha", image: "https://via.placeholder.com/300x200?text=Paradip+Port" },
    { title: "Odisha Coastal Tourism Mission", description: "New resort initiatives for domestic tourists.", date: "April 2, 2026", category: "odisha", image: "https://via.placeholder.com/300x200?text=Odisha+Tourism" }
  ],
  karnataka: [
    { title: "Bengaluru Startup Festival 2026", description: "Innovation teams gather and pitch new ideas.", date: "April 3, 2026", category: "karnataka", image: "https://via.placeholder.com/300x200?text=Bengaluru+Startup" },
    { title: "Karnataka Coffee Mission Honored", description: "New export standards for coffee growers.", date: "April 2, 2026", category: "karnataka", image: "https://via.placeholder.com/300x200?text=Coffee" }
  ],
  nhai: [
    { title: "NHAI Approves Bihar-Jharkhand Expressway", description: "Highway program for faster transit in eastern India.", date: "April 3, 2026", category: "nhai", image: "https://via.placeholder.com/300x200?text=NHAI+Expressway" },
    { title: "NHAI Launches Safety Audit on National Highways", description: "Safety upgrades are underway for accident reduction.", date: "April 1, 2026", category: "nhai", image: "https://via.placeholder.com/300x200?text=Highway+Safety" }
  ],
  book: [
    { title: "Book Launch: 'In the Footsteps of Thakur Ji'", description: "A biography on Shaheed Thakur Ji with rare photographs.", date: "May 20, 2026", category: "book", image: "https://via.placeholder.com/300x200?text=Book+Launch" },
    { title: "Cover Reveal Event for Upcoming Book", description: "Online session to reveal the book cover and excerpts.", date: "May 10, 2026", category: "book", image: "https://via.placeholder.com/300x200?text=Cover+Reveal" }
  ],
  events: [
    { title: "Shaheed Thakur Ji Welfare Award Ceremony", description: "Annual event on June 15, 2026 with live community support programs.", date: "June 15, 2026", category: "events", image: "https://via.placeholder.com/300x200?text=Welfare+Award" },
    { title: "NHAI Corridor Update Seminar", description: "Live briefing on NHAI regional developments.", date: "April 10, 2026", category: "events", image: "https://via.placeholder.com/300x200?text=NHAI+Update" }
  ]
};

let currentCategory = 'international';

function displayNews(category) {
  const newsFeed = document.getElementById('newsFeed');
  const list = newsData[category] || [];
  if (!newsFeed) return;

  if (list.length === 0) {
    newsFeed.innerHTML = '<p>No news available for this category right now. Please check again later.</p>';
    return;
  }

  newsFeed.innerHTML = list.map(item => `
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

function filterNews(category) {
  currentCategory = category;

  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`.tab-btn[onclick="filterNews('${category}')"]`);
  if (activeBtn) activeBtn.classList.add('active');

  displayNews(category);
}

function rotateCategories() {
  const categories = ['international', 'india', 'jharkhand', 'bihar', 'andhra', 'uttar', 'odisha', 'karnataka', 'nhai', 'book', 'events'];
  let idx = 0;
  setInterval(() => {
    filterNews(categories[idx]);
    idx = (idx + 1) % categories.length;
  }, 15000);
}

document.addEventListener('DOMContentLoaded', () => {
  displayNews('international');
  rotateCategories();
});
