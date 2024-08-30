import { TimelineEvent } from "../../types";

interface EventProps {
	event: TimelineEvent;
	startIndex: number;
	endIndex: number;
}

export function Event({ event, startIndex, endIndex }: EventProps) {
	const style = {
		gridColumnStart: startIndex + 1,
		gridColumnEnd: endIndex + 2,
	};

	return (
		<div
			key={event.id}
			className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col gap-2 relative"
			style={style}
		>
			<span className="text-sm font-normal text-slate-600 overflow-hidden text-nowrap text-ellipsis">
				{event.start} - {event.end}
			</span>
			<span className="text-blue-800 text-base font-semibold overflow-hidden text-nowrap text-ellipsis hover:cursor-pointer">
				{event.name}
			</span>
		</div>
	);
}
