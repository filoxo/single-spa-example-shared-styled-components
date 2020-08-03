# single-spa example: Shared styled-components

styled-components poses a problem in a single-spa microfrontends implementation because unlike many other libraries, it **requires** it be a singleton instance. If there is more than one instance, both fail hard. This means that styled-components absolutely must be a shared dependency. This example shows how to accomplish that.

### Setup

- `git clone git@github.com:filoxo/single-spa-example-shared-styled-components.git`
- run `yarn setup`

### Running

- run `yarn start`
  - root-config runs on port 9000
  - styleguide runs on port 9001
  - navbar runs on port 9002
- go to http://localhost:9000/

## How this was accomplished

1. Add `navbar` and `styleguide` modules to import map ([dc53a4d](https://github.com/filoxo/single-spa-example-shared-styled-components/commit/dc53a4dca01fddad61f54bde0c5423a524dbdc89))
1. Implement `styleguide`
   1. Install `react` and `styled-components` to styleguide ([9e799b3](https://github.com/filoxo/single-spa-example-shared-styled-components/commit/9e799b3e1ebfc84939b32882f109df069c16ed1c))
   1. Add `styled-components` to Webpack externals (so that it is not bundled) ([6f70b10](https://github.com/filoxo/single-spa-example-shared-styled-components/commit/6f70b10b500a65e21dd9d49e2d8e08f7e8db9ef0))
   1. Create and export styled components from styleguide (eg. `Button`) ([4603309](https://github.com/filoxo/single-spa-example-shared-styled-components/commit/4603309ee7a38d00caf8c62007bc83f3c7dbd882))
1. Add `styled-components` and `react-is` to importmap ([05188d3](https://github.com/filoxo/single-spa-example-shared-styled-components/commit/05188d33ef99f1b7a1d73a875024fc7f1b02e9c7))
1. Import and use styleguide components in navbar, eg. `import { Button } from '@filoxo/styleguide'` ([69caa41](https://github.com/filoxo/single-spa-example-shared-styled-components/commit/69caa41709e309fe919dcde7ccee62b0618d9512))
1. Celebrate good times 🎉

## Additional notes

- These are implemented within the same repo **for illustration purposes**. In an organizational setting, each of the modules should be in its own repo.
- While the styleguide uses styled-components, I chose to implement the local styles for navbar using CSS modules to show that applications can be autonomous when choosing which style technologies they'd like to use.
- How to test applications that consume styleguide components is not ideal, and something that will hopefully change in the future.
  - ESM support in Jest is planned
  - maybe it would be possible to create a Systemjs module resolver?
  - One solution to testing is to be able to `npm install` those dependent modules
