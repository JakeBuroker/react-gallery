const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  let galleryItemId = req.params.id;
  let itemLikes = req.body.likes;
  console.log("Shopping List ID:", req.body);
  console.log(itemLikes)
  const queryText = `
    UPDATE "gallery" SET "likes" = "likes" + 1 WHERE "id" = $1;
    `;
  // declare queryParams for ID
  const queryParams = [galleryItemId];
  // send UPDATE to DB
  pool
    .query(queryText, queryParams)
    // then send ok status
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("error:", error);
    });
});

// GET /gallery
router.get("/", (req, res) => {
  // When you fetch all things in these GET routes, strongly encourage ORDER BY
  // so that things always come back in a consistent order
  const sqlText = `SELECT * FROM gallery`;
  pool
    .query(sqlText)
    .then((result) => {
      console.log(`Got stuff back from the database`, result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
    });
});

module.exports = router;
