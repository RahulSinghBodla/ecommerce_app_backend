const mongoose = require("mongoose")
const ProductModel = require("./models/product.model")
const CategoryModel = require("./models/category.model")
const OrderModel = require("./models/order.model")
const CartModel = require("./models/cart.model")
const WishlistModel = require("./models/wishlist.model")
const AddressModel = require("./models/address.model")
const express = require("express")
const {initializeDatabase} = require("./db/db.connect")
initializeDatabase()
const app = express()
const cors = require("cors")
app.use(express.json())

const corsOptions = {
    host: "*",
    credentials: false,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

//product apis
app.get("/api/products", async(req,res)=>{
   try{
      const products = await ProductModel.find()

      res.status(200).json({
         data: {
            products
         }
      })
   }
   catch(err){
      console.log(err)

      res.status(500).json({
         error: "Server error"
      })
   }
})

const getProdById = async(theId) => {
    try{
        const ourProd = await ProductModel.findById(theId)
        return ourProd
    }
    catch{
        console.log("some error while fetching the product.")
    }
}
app.get(" /api/products/:productId", async (req,res)=>{
    try{
        const ourProduct = await getProdById(productId)
        if(ourProduct)
            res.status(200).json({
            data: {
                product: ourProduct
            }
        })
        else
            res.status(404).json("product does not exist.")
    }
    catch(err){
        throw err
    }
})


const addProd = async(theProduct) => {
    try{
        const newProd = new ProductModel(theProduct)
        console.log(newProd)
        const newlyAddedProd = await newProd.save()
        return newlyAddedProd
    }
    catch{
        console.log("some error while adding product.")
    }
}

app.post("/api/products", async(req,res)=>{
    try{
        const newlyAddedProd = await addProd(req.body)
        if(newlyAddedProd) res.status(201).json({message: "new product added successfully.", newProduct: newlyAddedProd})
        else res.status(400).json({message: "there was some error while adding product."})
    }
    catch(err){
        throw err
    }
})

//category apis.
const getAllCategories = async() => {
    try{
        const allcategories = await CategoryModel.find()
        return allcategories
    }
    catch(err){
        console.log(err)
    }
}

app.get("/api/categories", async(req,res)=> {
    try{
        const allCategories = await getAllCategories()
        
            res.status(200).json({
            data: {
                categories: allCategories
            }
        })
        
        
            
        
    }
    catch(err){
        throw err;
    }
})

const getCatById = async(theId) => {
    try{
        const ourCat = await CategoryModel.findById(theId)
        return ourCat
    }
    catch{
        console.log("some error while fetching the product.")
    }
}
app.get("/api/categories/:categoryId", async (req,res)=>{
    try{
        const ourCategory = await getCatById(categoryId)
        if(ourCategory)
            res.status(200).json({
            data: {
                category: ourCategory
            }
        })
        else
            res.status(404).json("product does not exist.")
    }
    catch(err){
        throw err
    }
})

const addCat = async(cat) => {
    try{
        const newCat = new CategoryModel(cat)
        const newlyAddedCat = await newCat.save()
        return newlyAddedCat
    }
    catch(err){
        console.log("some error while adding the category.")
    }
}
app.post("/api/categories", async(req,res)=>{
    try{
        const addedCat = await addCat(req.body)
        if(addedCat) res.status(201).json({message: "new category added successfully.", newCategory: addedCat})
            else res.status(400).json("some error while adding category.")
    }
    catch(err){
        throw err;
    }
})

//cart apis.
const getCartProducts = async() => {
    try{
        const allcartproducts = await CartModel.find()
        return allcartproducts
    }
    catch(err){
        console.log(err)
    }
}

app.get("/api/cart/products", async(req,res)=> {
    try{
        const allCartProducts = await getCartProducts()
        if(allCartProducts)
            res.status(200).json(allCartProducts)
            
        else{
            res.status(404).json({error: "products were not found."})
        }
    }
    catch(err){
        throw err;
    }
})

const addCartProd = async(theCartProduct) => {
    try{
        const newCartProd = new CartModel(theCartProduct)
        const newlyAddedCartProd = await newCartProd.save()
        return newlyAddedCartProd
    }
    catch{
        console.log("some error while adding product.")
    }
}

app.post("/api/cart/products", async(req,res)=>{
    try{
        const newlyAddedCartProd = await addCartProd(req.body)
        console.log(req.body)
        if(newlyAddedCartProd) res.status(201).json({message: "new product added successfully.", newProduct: newlyAddedCartProd})
        else res.status(400).json({message: "there was some error while adding product to the cart."})
    }
    catch(err){
        throw err
    }
})

//wishlist apis
const getWishlistProducts = async() => {
    try{
        const allwishlistproducts = await WishlistModel.find()
        return allwishlistproducts
    }
    catch(err){
        console.log(err)
    }
}

app.get("/api/wishlist/products", async(req,res)=> {
    try{
        const allWishlistProducts = await getWishlistProducts()
        res.status(200).json(allWishlistProducts)
    }
    catch(err){
        console.log(err)
        res.status(500).json({error: "Server error"})
    }
})

const addWishlistProd = async(theWishlistProduct) => {
    try{
        const newWishlistProd = new CartModel(theWishlistProduct)
        const newlyAddedWishlistProd = await newWishlistProd.save()
        return newlyAddedWishlistProd
    }
    catch{
        console.log("some error while adding product.")
    }
}

app.post("/api/wishlist/products", async(req,res)=>{
    try{
        const newlyAddedWishlistProd = await addWishlistProd(req.body)
        if(newlyAddedWishlistProd) res.status(201).json({message: "new product added successfully.", newProduct: newlyAddedWishlistProd})
        else res.status(400).json({message: "there was some error while adding product to the wishlist."})
    }
    catch(err){
        throw err
    }
})

//order apis. 
const getOrders = async() => {
    try{
        const allorders = await OrderModel.find()
        return allorders
    }
    catch(err){
        console.log(err)
    }
}

app.get("/api/orders", async(req,res)=> {
    try{
        const allOrders = await getOrders()
        if(allOrders.length !== 0){
            res.status(200).json({
            data: {
                orders: allOrders
            }
        })
        }
        else{
            res.status(404).json({error: "orders were not found."})
        }
    }
    catch(err){
        throw err;
    }
})

const addOrder = async(theOrder) => {
    try{
        const newOrder = new OrderModel(theOrder)
        const newlyAddedOrder = await newOrder.save()
        return newlyAddedOrder
    }
    catch{
        console.log("some error while adding product.")
    }
}

app.post("/api/orders", async(req,res)=>{
    try{
        const newlyAddedOrder = await addOrder(req.body)
        if(newlyAddedOrder) res.status(201).json({message: "new order added successfully.", newOrder: newlyAddedOrder})
        else res.status(400).json({message: "there was some error while adding order."})
    }
    catch(err){
        throw err
    }
})

//address apis
const getAddresses = async() => {
    try{
        const allAddresses = await AddressModel.find()
        return allAddresses
    }
    catch(err){
        console.log(err)
    }
}

app.get("/api/addresses", async(req,res)=> {
    try{
        const allAddresses = await getAddresses()
        if(allAddresses.length !== 0){
            res.status(200).json({
            data: {
                addresses: allAddresses
            }
        })
        }
        else{
            res.status(404).json({error: "addresses were not found."})
        }
    }
    catch(err){
        throw err;
    }
})

const addAddress = async(theAddress) => {
    try{
        const newAddress = new AddressModel(theAddress)
        const newlyAddedAddress = await newAddress.save()
        return newlyAddedAddress
    }
    catch{
        console.log("some error while adding address.")
    }
}

app.post("/api/addresses", async(req,res)=>{
    try{
        const newlyAddedAddress = await addAddress(req.body)
        if(newlyAddedAddress) res.status(201).json({message: "new address added successfully.", newAddress: newlyAddedAddress})
        else res.status(400).json({message: "there was some error while adding address."})
    }
    catch(err){
        throw err
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log("Server is running on port", PORT)
})