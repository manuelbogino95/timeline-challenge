import { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { TimelineEvent } from "../../types";
import { TextField } from "../TextField";

interface EventProps {
	event: TimelineEvent;
	startIndex: number;
	endIndex: number;
	onSave: (event: TimelineEvent) => void;
}

export function Event({ event, startIndex, endIndex, onSave }: EventProps) {
	const [eventName, setEventName] = useState(event.name);
	const [editing, setEditing] = useState(false);
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: event.id,
		data: event,
	});

	const style = {
		gridColumnStart: startIndex + 1,
		gridColumnEnd: endIndex + 2,
		transform: CSS.Translate.toString(transform),
	};

	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setEventName(e.target.value);
	}

	function handleSaveEvent() {
		onSave({ ...event, name: eventName });
		setEditing(false);
	}

	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key === "Enter") {
			handleSaveEvent();
		} else if (e.key === "Escape") {
			setEditing(false);
		}
	}

	function handleClick() {
		setEditing(true);
	}

	return (
		<div
			ref={setNodeRef}
			key={event.id}
			className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col gap-2 relative"
			style={style}
			{...attributes}
			{...listeners}
		>
			<span className="text-sm font-normal text-slate-600 overflow-hidden text-nowrap text-ellipsis">
				{event.start} - {event.end}
			</span>
			{editing ? (
				<TextField
					value={eventName}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					onBlur={handleSaveEvent}
				/>
			) : (
				<span
					className="text-blue-800 text-base font-semibold overflow-hidden text-nowrap text-ellipsis hover:cursor-pointer"
					onClick={handleClick}
				>
					{event.name}
				</span>
			)}
		</div>
	);
}
