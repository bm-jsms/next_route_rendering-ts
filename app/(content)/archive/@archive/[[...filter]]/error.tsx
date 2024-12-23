'use client';

const FilterError = ({ error }: { error: Error }) => {
	return (
		<div id='error'>
			<h2>An Error Occurred!</h2>
			<p>{error.message}</p>
		</div>
	);
};

export default FilterError;
