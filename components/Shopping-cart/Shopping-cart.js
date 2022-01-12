class ShoppingCart {

	handleClear() {
		ROOT_SHOPPINGCART.innerHTML = '';
	}

	render() {
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		CATALOG.forEach(({ id, name, price }) => {
			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += `
					<tr>
						<td class="shopping-cart-element__name">✔️ ${name}</td>
						<td class="shopping-cart-element__price">💲 ${price.toLocaleString()} руб.</td>
					</tr>
				`;
				sumCatalog += price;
			}
		});

		const html = `
			<div class="shopping-cart-container">
			<div class="shopping-cart__close" onclick="shoppingCart.handleClear();"></div>
				<table>
					${htmlCatalog}
					<tr>
						<td class="shopping-cart-element__name">💵 Сумма: </td>
						<td class="shopping-cart-element__price">${sumCatalog.toLocaleString()} руб.</td>
					</tr>
				</table>
			</div>
		`;
		ROOT_SHOPPINGCART.innerHTML = html;
	}
}

const shoppingCart = new ShoppingCart()
