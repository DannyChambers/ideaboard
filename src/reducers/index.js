
const initState = {
  	ideas: [
  		{id: 1, title: 'Create an idea board, make it as awesome as you can!', description: 'A description goes here', created: '07/01/20', updated: '08/01/20'},
  		{id: 2, title: 'Call Brigitte about the meditation class', description: 'A description goes here', created: '07/01/20', updated: ''},
  		{id: 3, title: 'Ask  Matt if he’s still using Yeoman', description: 'A description goes here', created: '07/01/20', updated: '08/01/20'},
  		{id: 4, title: 'Land a job at ClearScore', description: 'A description goes here', created: '07/01/20', updated: '08/01/20'}
  	]
}

const rootReducer = (state = initState, action) => {

	//console.log(action);

	console.log("Ideas: ", state.ideas);

	//QUICK AND DIRTY DATE --
	let myDate = new Date();

	let year = myDate.getFullYear();

	let month = myDate.getMonth() + 1;
	if(month <= 9)
	    month = '0'+month;

	let day= myDate.getDate();
	if(day <= 9)
	    day = '0'+day;

	let date = day +'/'+ month +'/'+ year;


	switch(action.type){
		case 'CREATE_IDEA' :

			let addedIdeas = state.ideas.slice();

			addedIdeas.unshift({
				id: Math.floor(1000 + Math.random() * 9000),
				title: action.ideaData.title,
				description: action.ideaData.description,
				created: date,
				update: ""
			});
			return {
				...state,
				ideas: addedIdeas
			}

		break;
		case 'UPDATE_IDEA' :

			/* This is badly performed */

			let modifyIdeas = state.ideas.slice();

			modifyIdeas.filter(idea => {

				if (action.id === idea.id){

					if(action.ideaData.title != ""){

						idea.title = action.ideaData.title;

					}

					if(action.ideaData.description != ""){

						idea.description = action.ideaData.description;

					}

					idea.update = date;

				}

			});
			return {
				...state,
				ideas: modifyIdeas
			}

		break;
		case 'DELETE_IDEA' :

			let newIdeas = state.ideas.filter(idea => {

				return (
					action.id !== idea.id
				)

			});
			return {
				...state,
				ideas: newIdeas
			}

		break;
		default:
		break;
	}

	return state;
}

export default rootReducer