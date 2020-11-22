const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
  try {
    
  } catch (err) {
    res.status(500).json({message: 'Что-то пошло не так, мы обязательно всё исправим и вернемся'});
  }
});

module.exports = router;