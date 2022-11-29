import {getUserById} from "../../../lib/services/clients.js";

export const ssr = false;

export async function load({ params }) {
	const user = await getUserById(params.id);
	return {
		user: {
			id: user._id,
			name: user.attributes.name,
			firstName: user.attributes.firstName,
			lastName: user.attributes.lastName,
			age: user.attributes.age,
			email: user.attributes.email,
			phone: user.attributes.phone,
			gender: user.attributes.gender,
			role: user.roles?.whello?.pop?.()
		}
	};
}
