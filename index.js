const express = require("express");
const app = express();
const axios = require('axios');
const db = require("./connection");
const cors = require("cors");
const cron = require('node-cron');

app.use(cors());

// Function to fetch and insert data into the database
 const fetchDataAndInsertIntoDB = () => {
  axios.get('https://services.nvd.nist.gov/rest/json/cves/2.0')
    .then((response) => {
      const data = response.data;
      const array = data.vulnerabilities;
      const len = array.length;
      const sqltrun="truncate table cve" ;

      db.query(sqltrun, (error, result) => {
        if (error) {
          console.log("Error: " + error);
          res.status(500).send("Internal Server Error");
        } else {
          console.log(result);
          
        }
      });



      for (let i = 0; i < len; i++) {
        const sqlInsert = "INSERT INTO cve (cveId, identifier, publishedDate, lastModifiedDate, status) VALUES (?, ?, ?, ?, ?)";
        const cve = array[i].cve;
        db.query(sqlInsert, [cve.id, cve.sourceIdentifier, cve.published, cve.lastModified, cve.vulnStatus], (error, result) => {
          if (error) {
            console.log("Error: " + error);
          } else {
            console.log(result);
          }
        });
      }

      console.log("Successfully inserted data");
    })
    .catch((error) => {
      console.log(error);
    });
}; 

//fetchDataAndInsertIntoDB();  
// Schedule the task to run every day at midnight (00:00)
//  cron.schedule('*/1 * * * *', () => { // Runs every minute
//   fetchDataAndInsertIntoDB();
// });

cron.schedule('0 0 * * *', () => {
  fetchDataAndInsertIntoDB();
});

app.get('/', (req, res) => {
  res.send("hello")
});

app.get('/get', (req, res) => {
  let sortBy = req.query.sortBy || 'publishedDate'; // Default sorting by publishedDate
  let sortOrder = req.query.sortOrder || 'asc'; // Default sorting order is ascending

  const sql = `SELECT * FROM cve ORDER BY ${sortBy} ${sortOrder}`;

  db.query(sql, (error, result) => {
    if (error) {
      console.log("Error: " + error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
