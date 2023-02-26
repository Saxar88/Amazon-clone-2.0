import Image from "next/image";
import React from "react";
import Product from "./Product";

function ProductFeed({products}) {
	return (
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-96 mx-auto">
			{Array.from(products)
				.slice(0, 8)
				.map(({id, title, price, image}) => (
					<Product key={id} id={id} title={title} price={price} image={image} />
				))}
			<Image
				src={require("../public/lavolio-banner.jpg")}
				alt="banner"
				width={1500}
				height={300}
				className="m-auto md:col-span-full"
			/>

			{Array.from(products)
				.slice(8, products.length)
				.map(({id, title, price, image}) => (
					<Product key={id} id={id} title={title} price={price} image={image} />
				))}
		</div>
	);
}

export default ProductFeed;
