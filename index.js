const express = require('express');
const mongoose = require('mongoose'); 
const Product = require("./models/product.model.js")
const ProductRoute = require("./routes/product.route.js")
const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//Routes
app.use("/api/products", ProductRoute);


app.get("/", (req,res) => {
    res.send("Hello From Node API Server")
});

// app.get("/api/products", async (req,res) => {
//     try{
//         const products = await Product.find({});
//         res.status(200).json(products);
//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// });

// app.get("/api/products/:id", async (req,res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);
//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// });

// app.put("/api/products/:id", async (req,res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndUpdate(id, req.body);
//         if(!product){
//             return res.status(400).json({message:"Product not found"});
//         }
//         const updateProduct = await Product.findById(id);
//         res.status(200).json(updateProduct);
//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// });

// app.delete("/api/products/:id", async (req,res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(400).json({message:"Product not found"});
//         }
//         const deleteProduct = await Product.findById(id);
//         res.status(200).json({message:"Product Deleted Successfully"});
//     }
//     catch(error){
//         res.status(500).json({message:error.message});
//     }
// });

// app.post("/api/products", async (req, res) => {
//     try{
//         const product = await Product.create(req.body);
//         res.status(200).json(product);
//     }

//     catch(error){
//         console.log("Error while Adding data", error)
//         res.status(500).json({message:error.message});
//     }
// });

mongoose.connect("mongodb+srv://admin:AzpstHEM2aR03zH5@backenddb.cyysl8s.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() =>{
    console.log("Connected to DB Server");
    app.listen(3000, () => {
        console.log("App running at 3000 port"); 
    });
})
.catch(() => {
    console.log("Error while connectint to DB");
})