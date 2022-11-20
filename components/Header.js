import React from "react";
import Image from "next/image";
import {signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	MapPinIcon,
	ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import {selectItems} from "../slices/basketSlice";

function Header() {
	const {data: session} = useSession();
	const router = useRouter();
	const items = useSelector(selectItems);

	return (
		<header>
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
				<div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
					<Image
						src="https://links.papareact.com/f90"
						width={135}
						height={50}
						objectFit="contain"
						className="px-3 cursor-pointer"
						onClick={() => router.push("/")}
					/>
				</div>
				<div className="hidden sm:flex text-white items-center text-xs ml-0 mr-6 whitespace-nowrap">
					<MapPinIcon className="h-5 w-5 -mb-2" />
					<div className="link">
						<p>Deliver to</p>
						<p className="font-extrabold md:text-sm">Romania</p>
					</div>
				</div>
				<div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
					<input
						type="text"
						className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
					/>
					<MagnifyingGlassIcon className="h-12 p-4" />
				</div>
				<div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
					<div className="link" onClick={!session ? signIn : signOut}>
						<p>{session ? `Hello,` : `Hello, sign in`}</p>
						<p className="font-extrabold md:text-sm">Account & Lists</p>
					</div>
					<div className="link">
						<p>Returns</p>
						<p className="font-extrabold md:text-sm">& Orders</p>
					</div>

					<div
						className="relative link flex items-center"
						onClick={() => router.push("/cart")}>
						<span className="absolute bottom-3 right-12 md:right-10 h-10 w-10 text-yellow-500 text-base font-bold">
							{items.length}
						</span>
						<ShoppingCartIcon className="h-10" />
						<div className="hidden md:inline">
							<p>Shopping-</p>
							<p className="font-extrabold md:text-sm">Basket</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-between space-x-3 py-2 pl-6 pr-20 bg-amazon_blue-light text-white text-sm font-medium whitespace-nowrap">
				<p className="link flex items-center font-bold">
					<Bars3Icon className="h-6 mr-1" />
					All
				</p>
				<p className="link">Best Sellers</p>
				<p className="link">Amazon Basics</p>
				<p className="link">Today's Deals</p>
				<p className="link">New Releases</p>
				<p className="link hidden md:inline-flex">Costumer Service</p>
				<p className="link hidden md:inline-flex">Music</p>
				<p className="link hidden md:inline-flex">Kindle Books</p>
				<p className="link hidden md:inline-flex">Books</p>
				<p className="link hidden md:inline-flex">PC & Video Games</p>
				<p className="link hidden md:inline-flex">Home & Kitchen</p>
				<p className="link hidden md:inline-flex">Electronics & Photo</p>
				<p className="link hidden lg:inline-flex">Fashion</p>
				<p className="link hidden lg:inline-flex">Car & Motorbike</p>
				<p className="link hidden lg:inline-flex">Toys & Games</p>
				<p className="link hidden lg:inline-flex">Home Improvement</p>
			</div>
		</header>
	);
}

export default Header;
