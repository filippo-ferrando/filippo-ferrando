const fs = require("fs");

const user = process.env.GITHUB_REPOSITORY_OWNER;

const svg = `
<svg width="800" height="200" xmlns="http://www.w3.org/2000/svg">
  <style>
    .title { font: bold 20px sans-serif; }
    .text { font: 14px sans-serif; }
  </style>

  <rect width="100%" height="100%" fill="#0d1117"/>

  <text x="20" y="40" fill="white" class="title">
    GitHub Stats Dashboard
  </text>

  <text x="20" y="80" fill="#58a6ff" class="text">
    User: ${user}
  </text>

  <text x="20" y="110" fill="white" class="text">
    ✔ Auto-generated via GitHub Actions
  </text>

  <text x="20" y="140" fill="white" class="text">
    ✔ Replace this with GraphQL stats if needed
  </text>
</svg>
`;

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/stats.svg", svg);

console.log("Stats SVG generated");