import React from "react";
import Image from "next/image";
import {useDispatch} from "react-redux";
import {StarIcon} from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import {removeFromBasket} from "../slices/basketSlice";

function CartProduct({id, image, title, rating, price}) {
	const dispatch = useDispatch();
	const removeItemFromBasket = () => {
		dispatch(removeFromBasket({id}));
	};

	return (
		<div className="grid grid-cols-5">
			<Image src={image} height={180} width={180} className="object-contain" />
			<div className="col-span-3 mx-5">
				<p className="text-lg ">{title}</p>
				<div className="flex space-x-1 text-xs text-cyan-700 my-2">
					<p onClick={removeItemFromBasket} className="px-2 cursor-pointer">
						Delete
					</p>
					<p className="border-l px-2 cursor-pointer">Save for later</p>
				</div>
			</div>
			<div className="justify-self-end font-bold">
				<Currency quantity={price} currency="EUR" />
			</div>
		</div>
	);
}

export default CartProduct;
