

export const createIdea = (ideaData) => {

	return {
		type: 'CREATE_IDEA',
		ideaData
	}
}

export const updateIdea = (ideaData, id) => {

	console.log("Updating");

	return {
		type: 'UPDATE_IDEA',
		ideaData,
		id
	}
}

export const deleteIdea = (id) => {

	return {
		type: 'DELETE_IDEA',
		id
	}
}