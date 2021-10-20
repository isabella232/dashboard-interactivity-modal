# Dashboard Tutorial 2

In the second installment of the Splunk Dashboard tutorials, we visit an old .conf19 example showcasing event handler behavior. In this tutorial we cover how to add a click event which opens a modal component showing a table of data. This is useful for usecases where dashboard consumers would like to drilldown to more information without taking up main dashboard canvas real estate or creating another dashboard entirely. 

![](packages/modal-dashboard/src/main/webapp/pages/dashboard/final_dashboard.png)


# License Notice
Copyright 2021 Splunk, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

      https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


# Contributing to DashboardTutorial2

## Overview

The project contains a variety of packages that are published and versioned collectively. Each package lives in its own 
directory in the `/packages` directory. Each package is self contained, and defines its dependencies in a package.json file.

We use [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) and [Lerna](https://github.com/lerna/lerna) for
managing and publishing multiple packages in the same repository.


## Getting Started

1. Clone the repo.
2. Install yarn (>= 1.2) if you haven't already: `npm install --global yarn`.
3. Run the setup task: `yarn run setup`.

After this step, the following tasks will be available:

* `start` – Run the `start` task for each project
* `build` – Create a production bundle for all projects
* `test` – Run unit tests for each project
* `lint` – Run JS and CSS linters for each project
* `format` – Run prettier to auto-format `*.js`, `*.jsx` and `*.css` files. This command will overwrite files without 
asking, `format:verify` won't.

Running `yarn run setup` once is required to enable all other tasks. The command might take a few minutes to finish.

To link the app to your own local Splunk instance, you can do so by setting up the SPLUNK_HOME variable to your Splunk application directory. And then in the Splunk App directory of this repo, run `yarn run link:app`


## Developer Scripts

Commands run from the root directory will be applied to all packages. This is handy when working on multiple packages 
simultaneously. Commands can also be run from individual packages. This may be better for performance and reporting when
 only working on a single package. All of the packages have similar developer scripts, but not all scripts are implemented 
 for every package. See the `package.json` of the package in question to see which scripts are available there.

For more granular control of development scripts, consider using [Lerna](https://github.com/lerna/lerna) directly.


## Code Formatting

DashboardTutorial2 uses [prettier](https://github.com/prettier/prettier) to ensure consistent code formatting. It is recommended
 to [add a prettier plugin to your editor/ide](https://github.com/prettier/prettier#editor-integration).
