interface ColumnHeaderProps {
	title: string;
}

export function ColumnHeader({ title }: ColumnHeaderProps) {
	return (
		<div className="flex flex-col gap-1">
			<div className="bg-slate-200 text-slate-900 text-sm font-medium border-b border-slate-300 shadow-sm h-10 flex items-center justify-center">
				<span>{title}</span>
			</div>
		</div>
	);
}
