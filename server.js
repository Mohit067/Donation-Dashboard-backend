import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

// Dummy data for the intern dashboard
const internData = {
  internName: "Your Name",
  referralCode: "yourname2025",
  totalDonationsRaised: 1250,
  rewards: [
    { name: "Bronze Donor", unlocked: true },
    { name: "Silver Star", unlocked: false },
    { name: "Gold Giver", unlocked: false },
  ]
};

// Dummy data for the leaderboard
const leaderboardData = [
  { name: "Alex Johnson", donations: 2500 },
  { name: "Samantha Lee", donations: 2100 },
  { name: "Mark Chen", donations: 1850 },
  { name: "Jessica Smith", donations: 1500 },
  { name: "Your Name", donations: 1250 },
  { name: "David Williams", donations: 900 },
  { name: "Emily Davis", donations: 750 },
];

// API endpoint to get dashboard data
app.get('/api/dashboard', (req, res) => {
  res.json(internData);
});

// New API endpoint to get leaderboard data
app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboardData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
