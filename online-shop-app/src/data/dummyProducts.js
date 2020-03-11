import { Category, Product } from "./Domains";

const Categories = [
  new Category(1, 'Clothes', true),
  new Category(2, 'Bags', true),
  new Category(3, 'Electronics', true),
]

const Products = [
  new Product(1, 'White Tshirt', "White 100% cotton shirt", 500, 0, 1, "", null, 1, true),
  new Product(2, 'Levis White Jeans', "Straight Fit Blue Levis Jeans", 1400, 0, 2, "", null, 1, true),
  new Product(3, 'Thule Backpack', "Office Backpack by Thule", 2500, 0, 5, "", null, 4, true),
  new Product(4, 'Washing Machine', "Samsung Washing Machine 30 ltr", 7800, 0, 5, "", null, 3, true),
  new Product(5, 'Apple MacBook Pro 15"', "Silver MacBook Pro 15 inch",84500, 0, 3, "", null, 3, true),
  new Product(6, 'Samsung LED Monitor 29""', "Samsun's LED monitor, Nice for office work", 23490, 0, 2, "", null, 3, true),
]

export { Products };