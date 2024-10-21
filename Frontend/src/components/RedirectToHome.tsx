import { useEffect } from "react";

const RedirectToHome = () => {
	useEffect(() => {
		window.location.href = "/";
	}, []);

	return (
		<div className="w-full h-screen flex justify-center items-center">
			Loading....
		</div>
	);
};

export default RedirectToHome;
