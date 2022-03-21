const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories and include associated products
  try {
      const categoryData = await Category.findAll({
        include: [
          {
            model: Product
        }]
      });
      // strip the data to normalize it. Not necessary for the api json data but useful for any future rendering use.
      const category = categoryData.map((category) => category.get({ plain: true }));
      res.status(200).json(categoryData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` });
  };
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value and include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Product
        }
      ]
    });
      if(!categoryData) {
        res.status(404).json({message: 'No category with this id exists.'});
        return;
      }
          // strip the data to normalize it. Not necessary for the api json data but useful for any future rendering use.
          const category = categoryData.get({ plain: true });
          res.status(200).json(categoryData);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: `${error}` });
      };
    });

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.categoryName
    });
    res.status(200).json({ message: `New category created` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` });
  };
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(
      {
      category_name: req.body.categoryName
      },
      {
        where: {
          id: req.params.id
        }
      }
    );
      if(!categoryData[0]) {
        res.status(404).json({message: 'No category with this id exists.'});
        return;
      }
        res.status(200).json({ message: `Category updated` });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: `${error}` });
      };
});


router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );
      if(!categoryData) {
        res.status(404).json({message: 'No category with this id exists.'});
        return;
      }
        res.status(200).json({ message: `Category deleted` });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: `${error}` });
      };
});

module.exports = router;
