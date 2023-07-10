type Options = {
	foo?: string;
};

const {{ tmplr.function_name }} = (input: string, { foo = "world" }: Options = {}) => {
	return `${input}${foo}`;
};

export default {{ tmplr.function_name }};
