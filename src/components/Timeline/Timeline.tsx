import { ColumnHeader } from "../ColumnHeader";
import { Event } from "../Event";
import { useTimelineEvents } from "../../hooks/useTimelineEvents";
import timelineItems from "../../timelineItems";

export function Timeline() {
	const { events, timeline } = useTimelineEvents({
		defaultEvents: timelineItems,
	});

	return (
		<div className="overflow-x-auto">
			<div
				className="grid gap-2 w-full"
				style={{
					gridTemplateColumns: `repeat(${timeline.length}, minmax(120px, 1fr))`,
				}}
			>
				{timeline.map((date) => (
					<ColumnHeader key={date} title={date} />
				))}
				{events.map((event) => {
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
			</div>
		</div>
	);
}
