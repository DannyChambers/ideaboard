export const loadState = () => {

	try {
		const serializedState = localStorage.getItem('ideas');

		if(serializedState === null){
			
			return undefined;

		}
		return JSON.parse(serializedState);
	
	} catch(err) {

		return undefined;

	}
}

export const saveState = (ideas) => {

	try {

		const serializedState = JSON.stringify(ideas);
		localStorage.setItem('ideas', serializedState);
	
	} catch(err) {

		//Ignore

	}
}