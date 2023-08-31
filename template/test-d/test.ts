import { expectType } from "tsd";
import {{ tmplr.function_name }} from "~/index.js";

expectType<string>({{ tmplr.function_name }}("hello"));
