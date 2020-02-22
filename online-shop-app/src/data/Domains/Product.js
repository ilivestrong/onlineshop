export class Product {
  constructor(
    id,
    name,
    description,
    price,
    discount = 0.00,
    rating = null,
    imageURL = "",
    promotionID = null,
    categoryID = 1,
    isActive = true) {

    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.rating = rating;
    this.imageURL = imageURL;
    this.promotionID = promotionID;
    this.categoryID = categoryID;
    this.isActive = isActive;
  }
}