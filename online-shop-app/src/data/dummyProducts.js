import { Category, Product } from "./Domains";

const Categories = [
  new Category(1, 'Clothes', true),
  new Category(2, 'Bags', true),
  new Category(3, 'Electronics', true),
]

const Products = [
  new Product(1, 'White Tshirt', 500, 0, 5, "", null, 1, true),
  new Product(1, 'Levis Jeans', 1400, 0, 5.5, "", null, 1, true),
  new Product(1, 'Smule Backpack', 2500, 0, 5, "", null, 2, true),
  new Product(1, 'Washing Machine', 7800, 0, 3, "", null, 3, true),
  new Product(1, 'Apple MacBook Pro 15"', 84500, 0, 5, "", null, 3, true),
]

export { Products };