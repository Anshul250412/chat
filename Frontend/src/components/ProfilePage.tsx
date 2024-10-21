import { useAppSelector } from "../redux/hook";
import { Link } from "react-router-dom";

const ProfilePage = () => {
	const user = JSON.parse(localStorage.getItem("user")!);
	const theme = useAppSelector((s) => s.theme.mode);
	console.log(user);

	return (
		<div
			className={`w-full h-screen ${theme} flex justify-center items-center bg-background`}
		>
			<div className="w-[30%] h-[50%] border border-foreground rounded-lg  p-8">
				<label className="text-accent p-2" htmlFor="name">
					Name
				</label>
				<h1 className="text-foreground p-2 text-xl ">{user?.name}</h1>
				<label className="text-accent p-2" htmlFor="name">
					Email
				</label>
				<h1 className="text-foreground p-2 text-xl ">{user?.email}</h1>
				<label className=" p-2 text-accent" htmlFor="name">
					Profile Pic
				</label>
				{user?.avatar ? (
					<img
						className=" w-[50px] h-[50px] rounded-full m-4"
						src={user?.avatar}
					/>
				) : (
					<h1 className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-foreground text-background m-4 font-semibold">
						{user?.name.substring(0, 1)}
					</h1>
				)}

				<Link className="text-foreground text-xs p-2 mt" to="/">
					Go To Home
				</Link>
			</div>
		</div>
	);
};

export default ProfilePage;
