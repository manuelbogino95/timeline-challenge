import { useMemo, useState } from "react";
import dayjs from "dayjs";
import {
	arrangeEventsInLanes,
	createTimeline,
	orderEvents,
} from "../utils/dates";
import { TimelineEvent } from "../types";

export function useTimelineEvents({
	defaultEvents,
}: {
	defaultEvents: TimelineEvent[];
}) {
	const [events, setEvents] = useState(() => orderEvents(defaultEvents));
	const firstDate = events[0].start;
	const lastDate = events.reduce(
		(latest, item) => (dayjs(item.end).isAfter(latest) ? item.end : latest),
		events[0].end
	);
	const timeline = createTimeline(firstDate, lastDate);
	const lanes = useMemo(() => arrangeEventsInLanes(events), [events]);

	function updateEvent(updatedEvent: TimelineEvent) {
		setEvents((prevEvents) => {
			const eventIndex = prevEvents.findIndex(
				(event) => event.id === updatedEvent.id
			);

			if (eventIndex === -1) {
				return prevEvents;
			}

			const newEvents = [...prevEvents];
			newEvents[eventIndex] = updatedEvent;
			return newEvents;
		});
	}

	return {
		lanes,
		events,
		timeline,
		updateEvent,
	};
}
