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

const getUserAuth = () => {
	localStorage.getItem("token");
};

export { saveUserAuth, checkUserAuth, getUserAuth, deleteUserAuth };
