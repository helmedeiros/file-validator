# file-validator

An extensible tool for **validating generated files** against a set of rules.

When a team exports a file, confirming that every field is in the expected format
can be tedious and error-prone. file-validator lets you describe the rules each
column must satisfy and checks an exported file against them, so business and
technical teams can verify output without reading it by hand.

## Use

Open `index.html` to run the validator in the browser. Validation rules live in
`javascripts/`, and the behavior is covered by specs under `test/unit` (run with
Karma).

```sh
npm install
grunt
```

## License

[MIT](LICENSE)
