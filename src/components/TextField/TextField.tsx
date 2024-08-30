import { InputHTMLAttributes } from "react";

export function TextField(props: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<input
			type="text"
			className="rounded-md border-0 px-1 text-gray-900 outline-none"
			autoFocus
			{...props}
		/>
	);
}
