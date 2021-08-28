import React from 'react';
import { ChildWithTypeAnnotation } from './Child';

export default function Parent() {
	return (
		<div>
			<ChildWithTypeAnnotation color='Black' onClick={() => console.log('clicked')}>
				Hi there
			</ChildWithTypeAnnotation>
		</div>
	);
}
