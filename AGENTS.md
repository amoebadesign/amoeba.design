## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Design system

All styling and layout uses amoeba UI: CSS in `src/styles/amoeba/`, Astro components in `src/components/ui/`. The full contract is in `.cursor/rules/amoeba-ui.mdc`. Read it before writing markup or CSS.

- Layout primitives only: Stack, Cluster, Aside, Switcher, Grid, Center, Cover. Don't invent others or synonyms.
- `space` and other spacing props take steps (`space="4"` = 1rem), never raw lengths.
- Typography uses the `type-*` preset classes; colors use the semantic `--color-*` tokens, never hex or palette steps.
- Buttons and form controls use `<Button>`, `<Input>`, `<Textarea>`, `<Select>`, `<Checkbox>`, `<Radio>`.
- Themes are `light`, `dark`, and `green` via `data-theme`; with no attribute set, the theme follows the system setting.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
