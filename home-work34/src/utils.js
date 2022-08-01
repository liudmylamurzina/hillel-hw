export const createAction = (type) => {
	if (type === undefined) throw new Error('Type should be defined');
	return (payload) => ({ type, payload });
};