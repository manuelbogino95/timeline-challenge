import dayjs from "dayjs";
import { createTimeline, orderEvents } from "../utils/dates";
import { TimelineEvent } from "../types";

export function useTimelineEvents({
	defaultEvents,
}: {
	defaultEvents: TimelineEvent[];
}) {
	const events = orderEvents(defaultEvents);
	const firstDate = events[0].start;
	const lastDate = events.reduce(
		(latest, item) => (dayjs(item.end).isAfter(latest) ? item.end : latest),
		events[0].end
	);
	const timeline = createTimeline(firstDate, lastDate);

	return {
		events,
		timeline,
	};
}
