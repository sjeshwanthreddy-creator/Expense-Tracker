# 💸 Expense Tracker

A clean, responsive, and privacy-friendly **expense tracker** built with HTML, CSS, and vanilla JavaScript. Track your income and expenses, visualize spending with interactive charts, and stay on top of your monthly budget, all in the browser with no backend and no sign-up.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)


## ✨ Features

- **Add income and expenses** with amount, category, date, and an optional note
- **Dashboard summary cards** for total income, total expenses, and remaining balance (green when positive, red when negative)
- **Interactive pie/doughnut chart** showing expenses by category, with a toggle for *Income vs Expenses*
- **Transaction history** sorted newest first, with edit and delete (delete asks for confirmation)
- **Filters and search** by month, type, category, and note text
- **Custom categories** on top of the defaults (Food, Rent, Transport, Shopping, Bills, Entertainment, Health, Salary, Other)
- **Monthly budget** with a progress bar that turns orange at 80% and red at 100%
- **Multi-currency support** (₹, $, €)
- **Export to CSV** and clear-all-data option
- **Dark/light mode** that remembers your preference
- **Fully responsive**, works on mobile, tablet, and desktop
- **Persistent data** using `localStorage`, so nothing is lost on refresh
- **Input validation** and XSS-safe rendering

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Structure and semantics |
| CSS3 | Styling, theming, responsive layout, animations |
| JavaScript (ES6+) | App logic and DOM manipulation |
| [Chart.js](https://www.chartjs.org/) | Charts (loaded via CDN) |
| localStorage | Client-side data persistence |

---

## 🚀 Getting Started

No build tools or dependencies to install.

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/your-username/expense-tracker.git

# 2. Move into the project folder
cd expense-tracker

# 3. Open index.html in your browser
# (or use a local server such as the VS Code "Live Server" extension)
```

### Deploy with GitHub Pages

1. Push the project to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, choose the `main` branch and the `/ (root)` folder
4. Save, and your site will be live in a minute or two

---

## 📂 Project Structure

```
expense-tracker/
├── index.html        # App markup, styles, and scripts (single file)
├── LICENSE
└── README.md
```

> If you split the code into separate files later, update this tree to match (for example `style.css` and `script.js`).

---

## 🧭 How to Use

1. **Add a transaction:** choose *Income* or *Expense*, enter the amount, pick a category and date, then click **Add**.
2. **Review your dashboard:** the summary cards and chart update instantly.
3. **Set a monthly budget:** enter a limit and watch the progress bar as you spend.
4. **Filter your history:** narrow results by month, type, or category, or search by note.
5. **Export your data:** download all transactions as a CSV file for use in Excel or Google Sheets.

---

## 🔒 Data and Privacy

All data stays **in your browser** via `localStorage`. Nothing is sent to a server. Clearing your browser data or using a different browser or device will reset the app, so use the CSV export to keep a backup.

---

## 🗺️ Roadmap

- [ ] Recurring transactions
- [ ] Monthly trend bar/line chart
- [ ] Import from CSV
- [ ] Savings goals tracker
- [ ] PWA support for offline use and home-screen install
- [ ] Optional backend (Spring Boot + MySQL) with user accounts

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**S. Jeshwanth Reddy**

- GitHub: [sjeshwanthreddy](https://github.com/sjeshwanthreddy-creator)
- LinkedIn: [S.JESHWANTH REDDY](https://www.linkedin.com/in/s-jeshwanth-reddy-921665340?utm_source=share_via&utm_content=profile&utm_medium=member_android)

---

⭐ If you found this project useful, consider giving it a star!
