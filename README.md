# 🌐 Ecom Price Tracking Application

## 📋 Table of Contents

1. 🤖 [Introduction](introduction)
2. ⚙️ [Tech Stack](TechStack)
3. 🔋 [Features](Features)
4. 🤸 [Quick Start](QuickStart)
5. 🔗 [Links](Links)


 ## 🤖[Introduction](introduction)

Developed using Next.js and Bright Data's webunlocker, this e-commerce product scraping site is designed to assist users in making informed decisions. It notifies users when a product drops in price and helps competitors by alerting them when the product is out of stock, all managed through cron jobs.


## ⚙️ Tech Stack

- Next.js
- Bright Data
- Cheerio
- Nodemailer
- MongoDB
- Headless UI
- Tailwind CSS
  

## 🔋 Features

👉 **Header with Carousel:** Visually appealing header with a carousel showcasing key features and benefits.

👉 **Product Scraping:** A search bar allowing users to input Amazon product links for scraping.

👉 **Scraped Projects:** Displays the details of products scraped so far, offering insights into tracked items.

👉 **Scraped Product Details:** Showcase the product image, title, pricing, details, and other relevant information scraped from the original website.

👉 **Track Option:** Modal for users to provide email addresses and opt-in for tracking.

👉 **Email Notifications:** Send emails product alert emails for various scenarios, e.g., back in stock alerts or lowest price notifications.

👉 **Automated Cron Jobs:** Utilize cron jobs to automate periodic scraping, ensuring data is up-to-date.

👉 ... and many more, including code architecture and reusability

## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository

```bash
git clone https://github.com/adrianhajdin/pricewise.git
cd pricewise
```

### Installation
Install the project dependencies using npm:
```bash
npm install
```

Open http://localhost:3000 in your browser to view the project.

### Set Up Environment Variables
Create a new file named .env in the root of your project and add the following content:
```env
# SCRAPER
BRIGHT_DATA_USERNAME=
BRIGHT_DATA_PASSWORD=

# DB
MONGODB_URI=

# OUTLOOK
EMAIL_USER=
EMAIL_PASS=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these specific websites from BrightData, MongoDB, and Node Mailer.


