import React from "react";
import {useSelector} from "react-redux";
import {signIn, useSession} from "next-auth/react";
import {loadStripe} from "@stripe/stripe-js";
import axios from "axios";
import Currency from "react-currency-formatter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartProduct from "../components/CartProduct";
import {selectItems, selectTotal} from "../slices/basketSlice";

const stripePromise = loadStripe(process.env.stripe_public_key);

function Cart() {
	const items = useSelector(selectItems);
	const total = useSelector(selectTotal);
	const {data: session} = useSession();

	const createCheckoutSession = async () => {
		const stripe = await stripePromise;

		const checkoutSession = await axios.post("api/create-checkout-session", {
			items: items,
			email: session.user.email,
		});

		const result = await stripe.redirectToCheckout({
			sessionId: checkoutSession.data.id,
		});

		if (result.error) alert(result.error.message);
	};

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
				{items.length > 0 && (
					<div className="flex flex-col bg-white m-5 p-10 space-y-10">
						<h2 className="whitespace-nowrap">
							Subtotal ({items.length} items):{" "}
							<span className="font-bold mr-0.5">
								<Currency quantity={total} currencey="EUR" />
							</span>
						</h2>
						<button
							role="link"
							onClick={!session ? signIn : createCheckoutSession}
							className="button">
							Proceed to Checkout
						</button>
					</div>
				)}
			</main>

			<Footer />
		</div>
	);
}

export default Cart;
