import axios from "axios";
import React from "react";
import { IAxoisResponse } from "../types/generic";
import toast from "react-hot-toast";
import { useAppSelector } from "../redux/hook";

const SearchUser: React.FC = () => {
	const [user, setUser] = React.useState("");
	const [users, setUsers] = React.useState([]);
	const [isopen, setIsOpen] = React.useState<boolean>(false);
	const modalRef = React.useRef<any>();
	const MessageTheme = useAppSelector((state) => state.theme.theme);

	React.useEffect(() => {
		if (user) {
			axios
				.get<IAxoisResponse>(
					`${import.meta.env.VITE_BACKEND_URL}/api/auth?name=${user}`,
					{
						withCredentials: true,
					},
				)
				.then((res) => {
					setUsers(res.data?.data);
				});
		}
	}, [user]);

	React.useEffect(() => {
		const handleClickOutside = (e: any) => {
			if (modalRef.current && !modalRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const createChatHandler = async (id: string) => {
		try {
			const res = await axios.post<IAxoisResponse>(
				`${import.meta.env.VITE_BACKEND_URL}/api/chats/${id}`,
				{},
				{ withCredentials: true },
			);
			toast.success(res?.data?.message);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div
			className={`w-full h-[50px] relative bg-background text-foreground border rounded-lg  ${MessageTheme.border}`}
		>
			<input
				value={user}
				onChange={(e) => {
					setIsOpen(true);
					setUser(e.target.value);
				}}
				type="text"
				placeholder="Search users...."
				className="w-full h-full  p-4 text-foreground bg-background outline-none rounded-lg"
			/>
			{isopen && (
				<div
					ref={modalRef}
					className={`w-full p-4 absolute border border-accent bg-background text-foreground mt-4 rounded-lg ${MessageTheme.border}`}
				>
					{users?.map((user: any, idx) => (
						<div
							onClick={() => {
								createChatHandler(user?._id);
								setIsOpen(false);
							}}
							key={idx}
							className={`w-full p-4 ${MessageTheme.border} my-2 flex items-center bg-background text-foreground gap-4 rounded-md`}
						>
							<div
								className={`w-[40px] h-[40px]  text-white rounded-full flex justify-center items-center font-semibold bg-gradient-to-tl ${MessageTheme.to} ${MessageTheme.from}  `}
							>
								{user?.avatar ? (
									<img
										className="w-[40px] h-[40px] rounded-full"
										src={user.avatar}
										alt=""
									/>
								) : (
									String(user?.name)
										.substring(0, 1)
										.toUpperCase()
								)}
							</div>{" "}
							{user?.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchUser;
