import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
	mode: "dark" | "light";
	themes: {
		id: string;
		to: string;
		bg: string;
		from: string;
		via: string;
		border: string;
		img?: string;
	}[];
	theme: {
		id: string;
		to: string;
		bg: string;
		from: string;
		via: string;
		border: string;
		img?: string;
	};
}

const initialState: IInitialState = {
	mode: "light",
	themes: [
		{
			id: "blue",
			bg: "bg-blue-500/20",
			to: "to-blue-400",
			from: "from-blue-800",
			via: "via-blue-600",
			border: "border-blue-600",
		},
		{
			id: "Purple",
			bg: "bg-purple-500/20",
			to: "to-purple-400",
			from: "from-purple-800",
			via: "via-purple-600",
			border: "border-purple-600",
			img: "bg-[url(https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",
		},
		{
			id: "Violet",
			bg: "bg-violet-500/20",
			to: "to-violet-400",
			from: "from-violet-800",
			via: "via-violet-600",
			border: "border-violet-400",
			img: "bg-[url(https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",
		},
		{
			id: "Cyan",
			bg: "bg-cyan-500/20",
			to: "to-cyan-400",
			from: "from-cyan-800",
			via: "via-cyan-600",
			border: "border-cyan-400",
			img: "bg-[url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",
		},
		{
			id: "Pink",
			bg: "bg-pink-500/20",
			to: "to-pink-400",
			from: "from-pink-800",
			via: "via-pink-600",
			border: "border-pink-400",
		},
		{
			id: "Rose",
			bg: "bg-rose-500/20",
			to: "to-rose-400",
			from: "from-rose-800",
			via: "via-rose-600",
			border: "border-rose-400",
			img: "bg-[url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3bb5f691632079.5e372adaa9f70.png)]",
		},
		{
			id: "Teal",
			to: "to-teal-400",
			from: "from-teal-800",
			bg: "bg-teal-500/20",
			via: "via-teal-600",
			border: "border-teal-400",
			img: "bg-[url(https://images.unsplash.com/photo-1657215374010-786fefd1dbbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]",

		},
		{
			id: "Emerald",
			bg: "bg-emerald-500/20",
			to: "to-emerald-400",
			from: "from-emerald-800",
			via: "via-emerald-600",
			border: "border-emerald-400",
		},
		{
			id: "Lime",
			bg: "bg-lime-500/20",
			to: "to-lime-400",
			from: "from-lime-800",
			via: "via-lime-600",
			border: "border-lime-400",
		},
	],
	theme: {
		id: "blue",
		bg: "bg-blue-500/20",
		to: "to-blue-400",
		from: "from-blue-800",
		via: "via-blue-600",
		border: "border-blue-400",
	},
};
export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		changeTheme: (state) => {
			if (state.mode === "dark") {
				state.mode = "light";
			} else {
				state.mode = "dark";
			}
		},
		changeMessageTheme: (state, action: PayloadAction<string>) => {
			state.theme = state.themes.find(
				(theme) => theme.id === action.payload,
			)!;
		},
	},
});

export const { changeTheme, changeMessageTheme } = themeSlice.actions;

export default themeSlice.reducer;
