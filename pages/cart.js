import React from "react";
import {useSelector} from "react-redux";
import Header from "../components/Header";
import CartProduct from "../components/CartProduct";
import {selectItems} from "../slices/basketSlice";

function Cart() {
	const items = useSelector(selectItems);

	return (
		<div className="bg-gray-100">
			<Header />

			<main className="lg:flex max-w-screen-2xl mx-auto">
				<div className="flex-grow flex-col m-5 p-5 space-y-10 bg-white">
					<h1 className="text-3xl border-b pb-4">
						{items.length === 0
							? "Your Amazon Cart is empty."
							: "Shopping Basket"}
					</h1>
					{items.map((item, i) => (
						<CartProduct
							key={i}
							id={item.id}
							title={item.title}
							price={item.price}
							image={item.image}
						/>
					))}
				</div>
				<div className=""></div>
			</main>
		</div>
	);
}

export default Cart;
