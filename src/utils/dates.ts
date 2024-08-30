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

export function arrangeEventsInLanes(events: TimelineEvent[]) {
	const lanes: TimelineEvent[][] = [];

	events.forEach((event) => {
		let placed = false;
		for (const lane of lanes) {
			const lastEventInLane = lane[lane.length - 1];

			if (dayjs(event.start).isAfter(lastEventInLane.end)) {
				lane.push(event);
				placed = true;
				break;
			}
		}

		if (!placed) {
			lanes.push([event]);
		}
	});

	return lanes;
}
