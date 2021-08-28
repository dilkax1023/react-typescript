import React from 'react';

interface ChildProps {
	color: String;
	onClick: () => void;
}

// Method 1
export const Child = function ({ color, onClick }: ChildProps) {
	return (
		<div>
			{color}
			<button onClick={onClick}>Click Me</button>
		</div>
	);
};

// Method 2
export const ChildWithTypeAnnotation: React.FC<ChildProps> = function ({ color, onClick }) {
	return (
		<div>
			{color}
			<button onClick={onClick}>Click Me</button>
		</div>
	);
};
