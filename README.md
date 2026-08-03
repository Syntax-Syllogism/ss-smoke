# SS Smoke

Toolchain smoke-test fixture for the Syntax & Syllogism release pipeline.

## Install

```bash
npm install SS Smoke
```

The shared release tooling is installed locally rather than committed to the
public project:

```bash
npm install --global @syntax-syllogism/release
```

## Usage

<!-- Document the public surface here. -->

## Development

```bash
npm install
npm test
npm run build
```

If this project includes the optional docs overlay, its build uses the private
`@syntax-syllogism/docs-theme` package and the reusable workflow pinned at
`Syntax-Syllogism/tooling/.github/workflows/docs-publish.yml@workflows/v1`.

### Optional docs site

Include the branded Starlight site when scaffolding a project with:

```bash
ss-scaffold --name "SS Smoke" --docs \
  --slug ss-smoke --public-repo Syntax-Syllogism/ss-smoke <target-dir>
```

The docs overlay writes `docs-site/` and `.github/workflows/docs.yml`. Its
`ss-smoke`, `Syntax-Syllogism/ss-smoke`, and `Syntax-Syllogism/Syntax-Syllogism.github.io` values are substituted
by the scaffold command; `SITE_REPO` defaults to
`Syntax-Syllogism/Syntax-Syllogism.github.io`. Without `--docs`, those files
are omitted.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and the
[Code of Conduct](CODE_OF_CONDUCT.md).

## Security

See [SECURITY.md](SECURITY.md) for how to report vulnerabilities.

## License

[MIT](LICENSE) © Jacob Richter
