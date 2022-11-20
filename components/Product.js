import React, {useState, useEffect} from "react";
import Image from "next/dist/client/image";
import {StarIcon} from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import {useDispatch} from "react-redux";
import {addToBasket} from "../slices/basketSlice";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({id, title, price, image}) {
	const [rating, setRating] = useState(0);

	useEffect(() => {
		setRating(
			Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
		);
	}, []);

	const dispatch = useDispatch();
	const addItemToBasket = () => {
		const product = {id, title, price, rating, image};

		dispatch(addToBasket(product));
	};

	return (
		<div className="h-[30rem] flex flex-col items-center m-5 bg-white z-30 p-10">
			<div className="relative h-52 w-52">
				<Image src={image} fill objectFit="contain" />
			</div>
			<h4 className="my-3">{title}</h4>
			<div className="flex">
				{Array(rating)
					.fill()
					.map((_, i) => (
						<StarIcon className="h-5 text-yellow-500" />
					))}
			</div>
			<div className="mb-5">
				<Currency quantity={price} currency="EUR" />
			</div>
			<button onClick={addItemToBasket} className="mt-auto button">
				Add to Basket
			</button>
		</div>
	);
}

export default Product;
