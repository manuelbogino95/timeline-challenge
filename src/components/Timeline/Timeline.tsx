import { ColumnHeader } from "../ColumnHeader";
import {
	DndContext,
	DragEndEvent,
	PointerSensor,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import dayjs from "dayjs";
import { Event } from "../Event";
import { useTimelineEvents } from "../../hooks/useTimelineEvents";
import timelineItems from "../../timelineItems";
import { TimelineHeader } from "../TimelineHeader";
import { useState } from "react";
import {
	defaultZoom,
	maxZoom,
	minZoom,
	zoomVariation,
} from "../../utils/constants";
import { TimelineEvent } from "../../types";

export function Timeline() {
	const { lanes, timeline, updateEvent } = useTimelineEvents({
		defaultEvents: timelineItems,
	});
	const [zoomLevel, setZoomLevel] = useState(defaultZoom);
	const pointerSensor = useSensor(PointerSensor, {
		activationConstraint: {
			distance: 0.1,
		},
	});
	const sensors = useSensors(pointerSensor);

	function handleZoomIn() {
		if (zoomLevel > maxZoom) {
			setZoomLevel(zoomLevel - zoomVariation);
		}
	}

	function handleZoomOut() {
		if (zoomLevel < minZoom) {
			setZoomLevel(zoomLevel + zoomVariation);
		}
	}

	function handleDragEnd(event: DragEndEvent) {
		const { active, over, collisions } = event;

		if (!collisions?.length || !active || !over) {
			return;
		}

		if (active.id !== over.id) {
			const event = active.data.current as TimelineEvent;
			const diff = dayjs(event.end).diff(event.start, "day");
			const newEvent = {
				...event,
				start: String(over.id),
				end: dayjs(over.id).add(diff, "day").format("YYYY-MM-DD"),
			};
			updateEvent(newEvent);
		}
	}

	return (
		<>
			<TimelineHeader onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
			<div className="overflow-x-auto">
				<DndContext sensors={sensors} onDragEnd={handleDragEnd}>
					<div
						className="grid gap-2 w-full"
						style={{
							gridTemplateColumns: `repeat(${timeline.length}, minmax(${zoomLevel}px, 1fr))`,
						}}
					>
						{timeline.map((date) => (
							<ColumnHeader key={date} title={date} />
						))}
						{lanes.map((lane) => {
							return (
								<>
									{lane.map((event) => {
										const startIndex = timeline.indexOf(event.start);
										const endIndex = timeline.indexOf(event.end);

										return (
											<Event
												key={event.id}
												event={event}
												startIndex={startIndex}
												endIndex={endIndex}
												onSave={updateEvent}
											/>
										);
									})}
									<div className="col-span-full border-b border-slate-200" />
								</>
							);
						})}
					</div>
				</DndContext>
			</div>
		</>
	);
}
