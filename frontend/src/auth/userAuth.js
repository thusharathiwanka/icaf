const checkUserAuth = () => {
	return localStorage.getItem("isLogin");
};

const deleteUserAuth = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("userType");
	localStorage.removeItem("isLogin");
};

const saveUserAuth = (userAuth, userType) => {
	localStorage.setItem("token", userAuth);
	localStorage.setItem("userType", userType);
};

const getUserToken = () => {
	return localStorage.getItem("token");
};

const getUserType = () => {
	return localStorage.getItem("userType");
};

export {
	saveUserAuth,
	checkUserAuth,
	getUserToken,
	deleteUserAuth,
	getUserType,
};
