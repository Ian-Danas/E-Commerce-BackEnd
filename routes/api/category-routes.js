const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  try{
    const category= await Category.findAll({
        include:[Product]
 
    });
    if(category.length===0){
        return res.status(404).json({msg:"no categories in database!"})
    }
    res.json(category)
} catch(err){
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
}
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id,{include:[Product]}).then(category=>{
    if(!category){
        return res.status(404).json({msg:"no category with that id in database!"})
    }
    res.json(category)
}).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
})
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name:req.body.category_name,
}).then(newCat=>{
    res.json(newCat)
}).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
})
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name:req.body.category_name,
},{
    where:{
        id:req.params.id
    }
}).then(editCat=>{
    if(!editCat[0]){
        return res.status(404).json({msg:"no category with this id in database!"})
    }
    res.json(editCat)
}).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
})
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
        id:req.params.id
    }
}).then(delCategory=>{
    if(!delCategory){
        return res.status(404).json({msg:"no category with this id in database!"})
    }
    res.json(delCategory)
}).catch(err=>{
    console.log(err);
    res.status(500).json({msg:"error occurred",err})
})
});

module.exports = router;
