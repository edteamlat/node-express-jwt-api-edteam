const { Router } = require("express");
const Movies = require("../models/Movies");

const router = Router();

// get all
router.get("/api/movies", async (req, res) => {
  const movies = await Movies.find();
  res.json(movies);
});

// get by id
router.get("/api/movies/:id", async (req, res) => {
  const { id } = req.params;
  const movie = await Movies.findById(id);
  res.json(movie);
});

// get by title
router.get("/api/movies/title/:title", async (req, res) => {
  const { title } = req.params;
  const movies = await Movies.find({ title: title });
  res.json(movies);
});

router.post("/api/movies", async (req, res) => {
  try {
    const { title, year, rate, director } = req.body;
    const newMovies = await Movies({
      title: title,
      year: year,
      rate: rate,
      director: req.body.director,
    });
    newMovies.save();
    res.json({ msg: "Movie has been created" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// update one
router.put("/api/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Movies.findByIdAndUpdate(id, req.body);
    const movies = await Movies.find();

    res.json(movies);
  } catch (error) {
    res.status(500).json({msg: error});
  }
});

// detele one
router.delete("/api/movies/:id", async (req, res) => {
  const { id } = req.params;

  await Movies.findByIdAndDelete(id);
  const movies = await Movies.find();
  res.json(movies);

});

module.exports = router;
