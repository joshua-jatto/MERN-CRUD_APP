const Product = require("../modules/products.module");

//get: Read / veiw  all products from db
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get: Read /view single product with id from db
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//post: create / add product to db
const postProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Put: update / patch a single product with an id in the db
const putProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res
        .status(404)
        .json({ message: "product not found, failed to update" });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(404).json({ message: "product not found" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res
        .status(404)
        .json({ message: "product not found, delete failed" });
    }

    res.status(200).json({ message: "Product deleted succesfully" });
  } catch (error) {
    res.status(404).json({ message: "product not found" });
  }
};

module.exports = {
  getProduct,
  getProducts,
  postProduct,
  putProduct,
  deleteProduct,
};
