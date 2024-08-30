import dayjs from "dayjs";
import { TimelineEvent } from "../types";

export function createTimeline(startDate: string, endDate: string): string[] {
	let start = dayjs(startDate);
	const end = dayjs(endDate);
	const timeline = [];

	while (start.isBefore(end) || start.isSame(end)) {
		timeline.push(start.toISOString().split("T")[0]);
		start = start.add(1, "day");
	}

	return timeline;
}

export function orderEvents(events: TimelineEvent[]) {
	return events.sort((a, b) => dayjs(a.start).diff(b.start, "day"));
}
