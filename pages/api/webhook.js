import * as admin from "firebase-admin";

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;

const app = !admin.apps.length
	? admin.initializeApp({credential: admin.credential.cert(serviceAccount)})
	: admin.app();

export default async (req, res) => {
	if (req.method === "POST") {
	}
};
