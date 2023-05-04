const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include:[Product]
  }).then(tag =>{
    if(tag.length===0){
      return res.status(404).json({msg:'no tags in the database'})
    }
    res.json(tag)
  }).catch(err =>{
    console.log(err)
    res.status(500).json({msg:'error occured',err})
  })

  // be sure to include its associated Product data
});
//TODO:add argument to include the associated products
router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findByPk(req.params.id,{include:[Product]}).then(tag=>{
    if(!tag){
      return res.status(404).json({msg:'no tag with this id exsists in database'})
    }
    res.json(tag)
  }).catch(err =>{
    console.log(err)
    res.status(500).json({msg:'error occured',err})
  })
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name:req.body.tag_name
  }).then(tag=>{
    res.json(tag)
  }).catch(err =>{
    console.log(err)
    res.status(500).json({msg:'error occured',err})
  })
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    tag_name:req.body.tag_name,
},{
    where:{
        id:req.params.id
    }
}).then(editCat=>{
    if(!editCat[0]){
        return res.status(404).json({msg:"no Tag with this id in database!"})
    }
    res.json(editCat)
}).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
})
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where:{
      id:req.params.id
    }
  }).then(tag =>{
    if(!tag){
      return res.status(404).json({msg:"no Tag with this id in database!"})
    }
    res.json(tag)
  }).catch(err =>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
  })
});

module.exports = router;
