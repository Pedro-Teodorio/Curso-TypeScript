interface Product {
  name: string;
  price: number;
  isAvaliable: boolean;
}
function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é ${product.price}`
  );
  if (product.isAvaliable) console.log(`O produto está disponivel`);
}

const shirtNBA: Product = {
  name: "Camisa do Los Angeles Lakers",
  price: 20.99,
  isAvaliable: true,
};
showProductDetails(shirtNBA);
