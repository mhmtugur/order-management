

const ordersReducerDefaultState = [];

const orders = (state = ordersReducerDefaultState, action) => {
	switch (action.type) {
	case 'ADD_ORDER':
		return [
			...state,
			action.order
		];
	case 'EDIT_ORDER':
		return state.map((order) => {
			if (order.id === action.id) {
				return {
					...order,
					...action.updates
				};
			} else {
				return order;
			}
		});
	case 'REMOVE_ORDER':
		return state.filter(order => order.id !== action.id);
	default:
		return state;
	}
};


export default orders;