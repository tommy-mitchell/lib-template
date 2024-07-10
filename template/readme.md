# {{ tmplr.project_name }}

{{ tmplr.project_description }}

## Install

```sh
{{ tmplr.install_node }}
```

<details>
<summary>Other Package Managers</summary>
<p>

```sh
{{ tmplr.install_yarn }}
```

</p>
</details>

## Usage

```ts
import {{ tmplr.function_name }} from "{{ tmplr.project_name }}";

{{ tmplr.function_name }}("hello", { foo: "world!" });
//=> hello world!
```

## API

### {{ tmplr.function_name }}(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `string`\
Default: `"world"`

Lorem ipsum.

## Related

- [foo](https://github.com/foo/foo) - Does foo.
