import { useDroppable } from "@dnd-kit/core";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ColumnHeaderProps {
	title: string;
}

export function ColumnHeader({ title }: ColumnHeaderProps) {
	const { setNodeRef, isOver } = useDroppable({
		id: title,
	});

	return (
		<div ref={setNodeRef} className="flex flex-col gap-1">
			<div
				className={twMerge(
					clsx(
						"bg-slate-200 text-slate-900 text-sm font-medium border-b border-slate-300 shadow-sm h-10 flex items-center justify-center transition-all duration-300 ease-in-out",
						{
							["border-2 border-blue-300 shadow-sm bg-blue-50"]: isOver,
						}
					)
				)}
			>
				<span>{title}</span>
			</div>
		</div>
	);
}
