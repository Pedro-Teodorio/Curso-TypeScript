function showProductDetails({ name, price }: { name: string; price: number }): string {
	return `O nome do produto é ${name} e custa R$ ${price}`;
}
const shirt = { name: "Camisa", price: 499.99 };
console.log(showProductDetails(shirt));
