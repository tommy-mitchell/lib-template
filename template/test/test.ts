import test from "ava";
import esmock from "esmock";
import {{ tmplr.function_name }} from "../src/index.js";

test("main", t => {
	t.is({{ tmplr.function_name }}("hello"), "hello world");
});
