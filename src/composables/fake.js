import { fakerES as faker } from '@faker-js/faker'

export function useGenerateFakeOrder(seed = 0) {
	faker.seed(seed)

	let served = faker.datatype.boolean()

	const date = faker.date.past();
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')
	const hours = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')

	return {
		id: faker.number.int(),
		client: faker.person.fullName(),
		orderDate: `${year}-${month}-${day}T${hours}:${minutes}`,
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

export function useRandomId() {
	return faker.number.int()
}
