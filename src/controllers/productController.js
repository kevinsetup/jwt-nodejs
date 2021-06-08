const productController = {};
const pool = require('../../src/database');


productController.getAllProducts = async(req,res,next) =>{
    try {
        const getproducts = await pool.query("select * from product")
    return res.status(200).json((getproducts.rows));  
    } catch (error) {
        console.log(error)
    }
  

}
productController.getProduct = async(req,res,next) =>{
    try {
        const {id} = req.params;
        const getProduct = await pool.query("select * from product where idproduct = $1", [id])
        return res.status(200).json(getProduct.rows);
     
    } catch (error) {
        console.log(error)
    }

}
productController.addProduct = async(req,res,next) =>{
    try {
        const { name , stock, price} = req.body;
        await pool.query("insert into product(name, stock, price) values($1,$2, $3)",[name, stock, price ] )
        return res.status(200).json({
            message : 'product created successfully'
        });
    
    } catch (error) {
        console.log(error)
    }
  
}
productController.editProduct = async(req,res,next) =>{
    try {
    const {id} = req.params;
    const {name , stock, price} = req.body
    await pool.query("update product set name = $1, stock = $2, price = $3 where idproduct = $4", [name, stock, price, id])
    return res.status(200).json({
        message : 'product updated successfully'
    });

    } catch (error) {
        console.log(error)
}

    
}
productController.deleteProduct = async(req,res,next) =>{
    try {
        const {id} = req.params;
        await pool.query("delete from product where idproduct = $1 ", [id])
        return res.status(200).json({
            message : 'product successfully removed'
        });  
    } catch (error) {
        console.log(error)
    }
   

}



module.exports = productController;