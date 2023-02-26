import {CheckCircleIcon} from "@heroicons/react/24/solid";
import {useRouter} from "next/router";
import React from "react";
import Header from "../components/Header";

function success() {
	const router = useRouter();

	return (
		<div className="h-screen bg-gray-100">
			<Header />
			<main className="max-w-screen-lg mx-auto my-1">
				<div className="flex flex-col p-10 bg-white">
					<div className="flex items-center space-x-2 mb-5">
						<CheckCircleIcon className="h-10 text-green-600" />
						<h1 className="text-2xl">
							Thank you! Your order has been confirmed!
						</h1>
					</div>
					<p>
						Thank you for shopping with us! We'll send a confirmation once your
						items have shipped. If you would like to check the status of your
						order(s), please access the link below.{" "}
					</p>
					<button
						onClick={() => router.push("/order-history")}
						className="button mt-8">
						Go to my orders
					</button>
				</div>
			</main>
		</div>
	);
}

export default success;
