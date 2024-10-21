import React from "react";
import { IUser } from "../types/generic";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setLastChats } from "../redux/chatSlice";

interface IChatProp {
	conversation: any;
}

const Chat: React.FC<IChatProp> = ({ conversation }) => {
	const user: IUser = JSON.parse(localStorage.getItem("user")!);
	const messageTheme = useAppSelector((state) => state.theme.theme);
	const dispatch = useAppDispatch();
	const avatar =
		user?._id == conversation?.user1?._id
			? conversation?.user2?.avatar
			: conversation?.user1?.avatar;

	const name =
		user?._id == conversation?.user1?._id
			? conversation?.user2?.name
			: conversation?.user1?.name;
	return (
		<div
			onClick={() => dispatch(setLastChats(conversation))}
			className="w-full h-[70px]  rounded-md bg-background text-foreground flex items-center gap-4 px-6"
		>
			<div
				className={`min-w-[40px] text-white bg-gradient-to-tr ${messageTheme.from} ${messageTheme.to} ${messageTheme.via} rounded-full flex justify-center items-center min-h-[40px]`}
			>
				{avatar ? (
					<img
						className="w-[40px] h-[40px] cover rounded-full"
						src={avatar}
						alt=""
					/>
				) : (
					<h1 className="text-2xl font-semibold">
						{name?.substring(0, 1).toUpperCase()}
					</h1>
				)}
			</div>
			<div className="w-[70%]  h-[70px] flex items-center">
				<h1 className="text-lg text-foreground font-semibold">
					{user?._id == conversation?.user1?._id
						? conversation?.user2?.name
						: conversation?.user1?.name}
					...
				</h1>
			</div>
		</div>
	);
};

export default Chat;
