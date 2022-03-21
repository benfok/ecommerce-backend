const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
      const tagData = await Tag.findAll({
        include: [
          {
            model: Product,
            through: ProductTag,
            as: 'tagged_products'
          }
        ]
      });
      // strip the data to normalize it. Not necessary for the api json data but useful for any future rendering use.
      const tag = tagData.map((tag) => tag.get({ plain: true }));
      res.status(200).json(tagData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` });
  };
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
      const tagData = await Tag.findByPk(req.params.id, {
        include: [
          {
            model: Product,
            through: ProductTag,
            as: 'tagged_products'
          }
        ]
      });
      if(!tagData) {
        res.status(404).json({message: 'No tag with this id exists.'});
        return;
      }
          // strip the data to normalize it. Not necessary for the api json data but useful for any future rendering use.
          const tag = tagData.get({ plain: true });
          res.status(200).json(tagData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` });
  };
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
      await Tag.create({
        tag_name: req.body.tagName
      });
      res.status(200).json({ message: `New tag created` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` });
  };
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(
      {
      tag_name: req.body.tagName
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
    if(!tagData[0]) {
      res.status(404).json({message: 'No tag with this id exists.'});
      return;
    }
      res.status(200).json({ message: `Tag updated` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` });
  };
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
      const tagData = await Tag.destroy(
        {
          where: {
            id: req.params.id
          }
        }
      );
      if(!tagData) {
        res.status(404).json({message: 'No tag with this id exists.'});
        return;
      }
      res.status(200).json({ message: `Tag deleted` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` });
  };
});

module.exports = router;
