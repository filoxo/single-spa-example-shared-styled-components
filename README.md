# single-spa example: Shared styled-components

styled-components poses a problem in a single-spa microfrontends implementation because unlike many other libraries, it **requires** it be a singleton instance. If there is more than one instance, both fail hard. This means that styled-components absolutely must be a shared dependency. This example shows how to accomplish that.

### Setup

- git clone
- run `yarn setup`

### Running

- run `yarn start`
  - root-config runs on port 9000
  - styleguide runs on port 9001
  - navbar runs on port 9002
- go to http://localhost:9000/

## How this was accomplished

1. Add `navbar` and `styleguide` modules to import map
1. Implement `styleguide`
   1. Install `react` and `styled-components` to styleguide
   1. Add `styled-components` to Webpack externals (so that it is not bundled)
   1. Create and export styled components from styleguide (eg. `Button`)
1. Add `styled-components` and `react-is` to importmap
1. Add workaround for Webpack System external interop bug
   In some future, this could be solved 3 ways:
   - Use the workaround code if using Webpack ~4
   - Upgrade to Webpack 5
   - [Implement and use a System build of styled-components](https://github.com/esm-bundle/new-repo-instructions)
1. Import and use styleguide components in navbar, eg. `import { Button } from '@filoxo/styleguide'`
1. Celebrate good times 🎉

## Additional notes

- These are implemented within the same repo **for illustration purposes**. In an organizational setting, each of the modules should be in its own repo.
- While the styleguide uses styled-components, I chose to implement the local styles for navbar using CSS modules to show that applications can be autonomous when choosing which style technologies they'd like to use.
- The "Webpack System external interop" bug is unrelated to styled-components. Its simply an artifact of module interop.
- How to test applications that consume styleguide components is not ideal, and something that will hopefully change in the future.
  - ESM support in Jest is planned
  - maybe it would be possible to create a Systemjs module resolver?
  - One solution to testing is to be able to `npm install` those dependent modules
