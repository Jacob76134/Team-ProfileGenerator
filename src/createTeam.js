const roleCard = require('./roleCard');
const fs = require('fs');

const createTeam = (team) => {
    const teamPage = `
    <!DOCTYPE html>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>My Team</title>
</head>
<body>
    <header class="team-header">
        <h1>My Team</h1>
    </header>
    <div class="cardContainer">
    <div class="cardContent">
        ${team.map((member) => roleCard(member)).join("")}
    </div>
</body>
</html>
  `;

  fs.writeFile("./dist/team.html", teamPage, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = createTeam;