import { ColumnHeader } from "../ColumnHeader";
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

export function Timeline() {
	const { lanes, timeline } = useTimelineEvents({
		defaultEvents: timelineItems,
	});
	const [zoomLevel, setZoomLevel] = useState(defaultZoom);

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

	return (
		<>
			<TimelineHeader onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
			<div className="overflow-x-auto">
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
										/>
									);
								})}
								<div className="col-span-full border-b border-slate-200" />
							</>
						);
					})}
				</div>
			</div>
		</>
	);
}
