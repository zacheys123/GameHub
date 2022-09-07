export const main_reducer = (state, action) => {
	switch (action.type) {
		case 'UPDATE_AUTH':
			return {
				...state,
				auth: !action.payload,
				loading: !action.payload.loading,
				currentuser: action.payload.currentuser,
				modalsuccess: action.payload.modalsuccess,
				ismodal: !action.payload,
			};
		case 'LOGIN': {
			return {
				...state,
				modalsuccess: action.payload.modalsuccess,
				ismodal: !action.payload,
			};
		}
		case 'UPDATE_USER': {
			return {
				...state,
				currentuser: action.payload,
			};
		}
		case 'LOGIN_ERROR': {
			return {
				...state,
				modalerror: 'Failed to Login',
				loading: !action.payload.loading,
				ismodal: !action.payload,
			};
		}
		case 'UPDATE_THEME':
			return {
				...state,
				istheme: !action.payload,
			};
		case 'ERROR':
			return {
				modalerror: action.payload.modalerror,
				ismodal: !action.payload,
			};
		case 'INPUT_ERROR':
			return {
				modalerror: action.payload.modalerror,
				ismodal: !action.payload,
			};
		case 'EMPTY_ERROR':
			return {
				modalerror: 'cannot submit empty inputs',
				ismodal: !action.payload.ismodal,
			};
		case 'CANCEL':
			return {
				error: '',
				ismodal: !action.payload,
			};
		case 'CLOSEMODAL':
			return {
				ismodal: false,
			};
		case 'LOGOUT':
			return {
				...state,
				logout: action.payload,
			};
		case 'LOGOUT_SUCCESS':
			return {
				...state,
				modelsuccess: action.payload.modelsuccess,
			};
		case 'LOGOUT_ERROR':
			return {
				...state,
				modelerror: action.payload.modelerror,
			};
		default:
			return { ...state };
	}
};
