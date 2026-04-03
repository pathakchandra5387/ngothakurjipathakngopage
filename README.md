# Shaheed Thakur Ji Pathak Welfare Society National Wing

**Live Website:** https://ngo-site-921385012220.us-central1.run.app

## Overview
This is the official website for the Shaheed Thakur Ji Pathak Welfare Society National Wing, dedicated to the memory of Shaheed Thakur Ji Pathak and supporting social welfare initiatives.

## Features

### 1. **Home Page**
- Welcome section with organization mission
- Information about Thakur Ji Pathak's legacy
- Overview of society activities

### 2. **About Section**
- Detailed biography of Thakur Ji Pathak (1968-1994)
- Information about the welfare society founded in 1995
- Mission and values of the organization

### 3. **Activities**
- Food distribution to needy families
- Support for disabled individuals
- Commemorative programs
- Shaheed Thakurji Pathak Welfare Award
- Community engagement programs

### 4. **News & Updates** ⭐ NEW
Comprehensive news section with:
- **International News** - Global updates and developments
- **India National News** - Nationwide news coverage
- **Regional News for:**
  - Jharkhand (Jamshedpur headquarters)
  - Bihar
  - Andhra Pradesh
  - Uttar Pradesh (Thakur Ji Pathak's home state)
  - Odisha
  - Karnataka

### 5. **Gallery**
- Historical photos of Thakur Ji Pathak
- Society events and activities
- Important moments and commemorations

### 6. **Contact Information**
- Head office location: Jamshedpur, Jharkhand
- Email: info@shaheedthakurjipathak.org
- Social media links (Facebook, Instagram)

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Server:** Nginx on Alpine Linux
- **Hosting:** Google Cloud Run (Serverless Container)
- **Image Registry:** Google Artifact Registry
- **CI/CD:** Google Cloud Build
- **Version Control:** GitHub

## Deployment Architecture

```
Local Repository (GitHub) 
    ↓
    ├→ Cloud Build (Automatic)
    ├→ Build Docker Image
    └→ Push to Artifact Registry
         ↓
        Cloud Run Service
         ↓
    Live Website URL
```

## Local Development

### Prerequisites
- Git installed
- Google Cloud SDK (`gcloud` CLI)
- Docker (optional, Cloud Build handles it)

### Setup
```bash
git clone https://github.com/pathakchandra5387/ngothakurjipathakngopage.git
cd ngothakurjipathakngopage
```

### Local Testing
```bash
# Install npm dependencies if needed
npm install

# Start a local server (if using Node.js)
npm start

# Or use Python
python -m http.server 8000
```

## Deployment Guide

### Automatic Push to GitHub
We provide automated scripts to push changes:

#### **Windows (Batch Script)**
```bash
.\push-to-github.bat
```
Enter commit message when prompted, and your changes will be pushed to GitHub automatically.

#### **Windows (PowerShell Script)**
```powershell
.\push-to-github.ps1
```

#### **Manual Git Commands**
```bash
git add -A
git commit -m "Your commit message"
git push origin main
```

### Cloud Deployment
After pushing to GitHub, Cloud Build automatically:
1. Builds the Docker image
2. Pushes to Artifact Registry
3. Deploys to Cloud Run
4. Website updates within 2-5 minutes

### Manual Cloud Deployment
```bash
# Build and push
gcloud builds submit --tag us-central1-docker.pkg.dev/ngobigflow/ngo-repo/ngo-site:latest

# Deploy to Cloud Run
gcloud run deploy ngo-site \
  --image us-central1-docker.pkg.dev/ngobigflow/ngo-repo/ngo-site:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Project Structure

```
ngo/
├── index.html              # Home page
├── news.html              # News & Updates page ⭐
├── about.html             # About section
├── activities.html        # Activities details
├── contact.html           # Contact information
├── gallery.html           # Photo gallery
├── Dockerfile             # Container configuration
├── nginx.conf             # Nginx server config
├── css/
│   └── style.css          # Styling (responsive design)
├── js/
│   ├── script.js          # Main functionality
│   └── news.js            # News section logic ⭐
├── push-to-github.bat     # Auto-push script (Batch)
├── push-to-github.ps1     # Auto-push script (PowerShell)
├── .github/
│   └── workflows/
│       └── sync.yml       # GitHub Actions workflow
└── README.md              # This file
```

## News Section Details

### How to Update News
1. Edit `js/news.js` - Update the `newsData` object with latest news
2. Each news item includes:
   - Title
   - Description
   - Date
   - Category
   - Image URL (placeholder images supported)

### News Categories
- **international** - Global news
- **india** - National India news
- **jharkhand** - Jharkhand state news
- **bihar** - Bihar state news
- **andhra** - Andhra Pradesh news
- **uttar** - Uttar Pradesh news
- **odisha** - Odisha state news
- **karnataka** - Karnataka state news

### Adding New News Items
```javascript
{
    title: "News Title",
    description: "News description here",
    date: "April 3, 2026",
    category: "jharkhand",
    image: "https://image-url.jpg"
}
```

## Image Handling

- External images are loaded from URLs (Wikimedia, Flaticon, Placeholder services)
- Images are cached by Nginx
- Fallback placeholder images used if images fail to load
- Responsive image sizing for mobile devices

## Responsive Design

Website is optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## Performance Features

✅ **Optimized Images** - Proper sizing and caching  
✅ **Responsive CSS** - Mobile-first design  
✅ **Smooth Navigation** - Easy page transitions  
✅ **Fast Loading** - Nginx optimized server  
✅ **SEO Friendly** - Proper HTML structure  

## Troubleshooting

### Images Not Loading
- Check image URL is valid and publicly accessible
- Use `https://` URLs only
- Fallback to placeholder services if needed

### Website Not Updating
1. Verify changes pushed to GitHub: `git push origin main`
2. Check Cloud Build logs: `gcloud builds list`
3. Redeploy manually if needed:
   ```bash
   gcloud run deploy ngo-site --image us-central1-docker.pkg.dev/ngobigflow/ngo-repo/ngo-site:latest
   ```

### Navigation Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh the page (Ctrl+F5)
- Check browser console for JavaScript errors

## Security Features

- HTTPS enabled (Cloud Run default)
- Security headers configured in Nginx
- No sensitive data stored client-side
- Firewall protected with Cloud Armor ready

## Contact & Support

**Organization:** Shaheed Thakur Ji Pathak Welfare Society  
**Email:** info@shaheedthakurjipathak.org  
**GitHub:** https://github.com/pathakchandra5387/ngothakurjipathakngopage  
**Website:** https://ngo-site-921385012220.us-central1.run.app  

## License

This project is maintained by the Shaheed Thakur Ji Pathak Welfare Society National Wing.

## Contributors

- **Development:** Chandra Pathak
- **Content:** Surya Pathak, Welfare Team
- **Cloud Infrastructure:** Google Cloud Platform

---

**Last Updated:** April 3, 2026  
**Current Version:** 3.0 (With News Section)  
**Status:** ✅ Live and Fully Operational
