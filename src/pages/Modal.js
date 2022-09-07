import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMainContext } from '../context/user_context/MainContext';
const Modal = () => {
	const {
		main: { modalerror, modalsuccess, ismodal },
		setMainContext,
	} = useMainContext();
	useEffect(() => {
		setTimeout(() => {
			setMainContext({ type: 'CLOSEMODAL', payload: ismodal });
		}, 3000);
	}, []);
	return (
		<>
			{modalerror && (
				<motion.div
					initial={{ y: '-200px' }}
					animate={{ y: '0px', transition: { duration: 0.7 } }}
					className="alert alert-danger text-center"
				>
					{modalerror}
				</motion.div>
			)}
			{modalsuccess && (
				<motion.div
					initial={{ y: '-200px' }}
					animate={{ y: '0px', transition: { duration: 0.7 } }}
					className="alert alert-success text-center"
				>
					{modalsuccess}
				</motion.div>
			)}
		</>
	);
};

export default Modal;
