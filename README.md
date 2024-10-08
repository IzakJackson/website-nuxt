# website-nuxt

My personal website.

## Tech Stack

The core of this application is built upon Nuxt 3 and a variety of dependencies. For a full list of dependencies, view the `package.json`.

### Nuxt 3

View the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

#### Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

##### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

##### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Documentation

### Git

#### Branches

The main branch is production ready, and therefore should remain free of any code that is in development. To do this we use a variety of branches to manage the code base.

There are two core types on branches, regular and temporary.

##### Temporary branches

Temporary branches are created when adding new features or working on bug fixes.

###### Naming branches

- Bug Fix: For fixing bugs found during testing in the `development` branch i.e. `bugfix_edit-company-form-validation-error`.
- Hot Fix: For fixing bugs found on the production application (`main` branch) i.e. `hotfix_reset-password-error`.
- Feature: For developing new features for the application i.e. `feature_change-user-avatar`.
- Refactor: For refactoring & improving the code base i.e. `refactor_improve-component-reusability`.

##### Regular branches

Regular branches are permanently available in the repository, and they are:

- `production` for production ready code
- `staging` for code ready to be tested in a production environment
- `development` for code being developed

All temporary branches are merged into the development branch for quality assurance testing. Once it has passed QA it is then merged into the staging brand for production environment testing. Finally once it has passed those tests it is pushed to the production branch.

When merging into the production branch you must ensure the application version and changelog is updated to reflect the changes.

The application is then automatically deployed.

At this stage, we create a release in GitHub using the information from our changelog to complete the release.

#### Committing changes

##### Commit summary

To keep the git logs easy to understand, do not mass commit. Instead commit each incremental feature or bug fix etc.

- ✨: New features being added to the application i.e. `✨: User can add contacts to a company`.
- 🐛: A bug fix i.e. `🐛: Fixed error with creating tasks`.
- 🎨: Style changes i.e. `🎨: Increased padding on 'Add event' button`.
- ♻️: Refactoring a specific section of the code base i.e. `♻️: Improved method for deleting a deal`.
- ✏️: Documentation changes i.e. `✏️: Updated README to reflect new way of doing git commits`.
- ⚙️: Everything related to testing i.e. `⚙️: Created tests for user sign up`.
- ⚒️: Regular code maintenance i.e. `⚒️: Updated dependencies to latest versions`.

##### Commit description

For complex commits, make sure to add a thorough description that clearly explains the changes.

### Changelog

The changelog is used for tracking releases and typically comprises of multiple git commits. The changelog provides a high level overview of changes in the app, while git commits dive deeper into the detail.

#### Types of changes

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

#### Changelog rules

- Changelogs are for humans, not machines.
- There should be an entry for every single version.
- The same types of changes should be grouped.
- Versions and sections should be linkable.
- The latest version comes first.
- The release date of each version is displayed.
- Versions follow [semantic versioning](https://semver.org/spec/v2.0.0.html)

For further documentation on our changelog, visit [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## Debugging

### Unlighthouse

Unlighthouse is a tool for running Google Lighthouse, checking SEO, Page Speeds, Accessibility & Best Practices.

To run:

```bash
npx unlighthouse --site localhost:3000
```
