const router = require('express').Router();
const packageJSON = require('../../package.json');

const recipes = require('./recipes');

router.use('/recipes', recipes);

router.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    name: packageJSON.name,
    version: packageJSON.version,
  });
});

// ejemplo de post
// router.post('/recipe', (req, res) => {
//   res.json({
//     recipe: req.params.recipe
//   });
// });

module.exports = router;