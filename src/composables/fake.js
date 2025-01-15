import { fakerES as faker } from '@faker-js/faker'

export function useGenerateFakeOrder(seed = 0) {
	faker.seed(seed)

	let served = faker.datatype.boolean()

	return {
		id: faker.number.int(),
		client: faker.person.fullName(),
		orderDate: faker.date.past(),
		served
	}
}

export function useGenerateFakePiece(seed = 0) {
	faker.seed(seed)

	const length = faker.number.int({min: 1, max: 500 })
	const width = faker.number.int({ min: Math.floor(length / 2) , max: length })
	const thickness = faker.number.int({min: 1, max: 15 })

	return {
		id: faker.number.int(),
		order: 0,
		dimensions: {
			length, // largo
			width, // ancho
			thickness, // grosor
		},
		color: faker.helpers.maybe(() => 'natural', {probability: 0.1}) || faker.color.human(),
		bothFaces: faker.datatype.boolean(),
		cut: faker.datatype.boolean(),
	}
}

export function useRandomInt(min = 1, max = 10) {
	return faker.number.int({min, max})
}
