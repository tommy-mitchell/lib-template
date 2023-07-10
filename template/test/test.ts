import test from "ava";
import {{ tmplr.function_name }} from "../src/index.js";
import { __dirname, atFixture } from "./_utils.js";

test("main", t => {
	t.is({{ tmplr.function_name }}("hello"), "hello world");
});
