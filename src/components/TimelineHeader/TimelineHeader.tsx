import {
	MagnifyingGlassMinusIcon,
	MagnifyingGlassPlusIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../Button";

interface TimelineHeaderProps {
	onZoomIn: () => void;
	onZoomOut: () => void;
}

export function TimelineHeader({ onZoomIn, onZoomOut }: TimelineHeaderProps) {
	return (
		<div className="flex justify-center gap-4 p-2">
			<Button onClick={onZoomIn}>
				<MagnifyingGlassMinusIcon className="size-6" />
			</Button>
			<Button onClick={onZoomOut}>
				<MagnifyingGlassPlusIcon className="size-6" />
			</Button>
		</div>
	);
}
