const express = require("express");
const path = require("path");

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "products.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get("/config", (req, res) => {
    res.json({
      datastreamId: process.env.DATASTREAM_ID,
      orgId: process.env.ORG_ID,
      pushNotifications: {
        vapidPublicKey: process.env.VAPID_PUBLIC_KEY,
        appId: process.env.APP_ID,
        trackingDatasetId: process.env.DATASET_ID
      }
    });
  });