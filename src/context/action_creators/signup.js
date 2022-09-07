export const Signup_func = async (
	ev,
	email,
	password,
	cpassword,
	signup,
	auth_state,
	dispatch,
	error,
	loading,
	success,
) => {
	ev.preventDefault();

	try {
		dispatch({
			type: 'ERROR',
			payload: '',
		});
		console.log(email, password, cpassword);
		dispatch({ type: 'UPDATE_AUTH', payload: loading });
		await signup(email, password);
		let unsubscribe = auth_state((user) => {
			dispatch({
				type: 'UPDATE_AUTH',
				payload: { user: user, loading: loading, success: success },
			});
			console.Console(unsubscribe);
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: 'ERROR',
			payload: error,
		});
	}
};
