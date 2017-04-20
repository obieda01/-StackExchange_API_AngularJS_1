
### Part 1 - question list

Create a simple question list page (`/questions`) that lists 20 questions from StackOverflow that are interesting or have activity. Documentation around querying StackExchange for questions can be found [here](https://api.stackexchange.com/docs/questions). Clicking on a question should navigate to `/questions/:question_id` (see part 2 below).

### Part 2 - question page

Create a question details page (`/questions/:question_id`) that queries the StackExchange API for question details and recreates the [standard StackOverflow question page](http://stackoverflow.com/questions/327654/hashtable-to-dictionary-syncroot/). 


## The StackExchange API:

Here are some relevant API calls to get you started:

* [https://api.stackexchange.com/2.2/questions/327738?site=serverfault](https://api.stackexchange.com/2.2/questions/327738?site=serverfault)
* [https://api.stackexchange.com/2.2/questions/327738/answers?site=serverfault](https://api.stackexchange.com/2.2/questions/327738/answers?site=serverfault)
* [https://api.stackexchange.com/2.2/questions/327738/comments?site=serverfault](https://api.stackexchange.com/2.2/questions/327738/comments?site=serverfault)
* [https://api.stackexchange.com/2.2/questions/327738/related?site=serverfault](https://api.stackexchange.com/2.2/questions/327738/related?site=serverfault)


The StackEchange API has a quota of 300 requests per day, so watch out for that. It will also throttle requests if you make too many too rapidly.


### Prerequisites

First, install [Node.js](https://nodejs.org/en/download/) 



```
npm install
```

### Compile the code

Use the following command to compile the code.

    npm run build

This command compiles the front-end code into the `/dist` directory. It does 

### Run the app locally

The project includes a simple [webpack][webpack] development web server.

To start the server:

    npm run start

The app will be available at [http://localhost:8080/](http://localhost:8080/).

**You must compile the project before the first time you start the development
server** (because the compile process generates `index.html`).

### Continuous Development

The project is configured with live reload so just start coding and your browser will get updated with
the latest JS/HTML/CSS. There are a few exceptions to this rule - for example, edits to `index.ejs` will require you
to restart your dev-server.


### Run unit tests

The app comes with unit tests. These are written in
[Jasmine][jasmine], which we run with the [Karma Test Runner][karma] test runner. We provide a Karma configuration file to run them (the file `karma.conf.js`).

The unit tests are found next to the code they are testing; e.g. the unit test file for `foo.js` is named `foo_test.js`.

To run unit tests:

    npm run --silent test

The `--silent` suppresses spurious node errors after test failures.

To run unit tests continuously in watch mode (where file changes trigger tests):

    npm run test-watch

### Lint

We use `eslint` for linting - the configuration can be found in `eslintrc.json`. To lint:

    npm run --silent lint

The `--silent` suppresses spurious node errors when linting fails.


[git]: https://git-scm.com/
[jasmine]: https://jasmine.github.io/
[karma]: https://karma-runner.github.io/
[npm]: https://www.npmjs.org/
[semver]: http://semver.org/
[webpack]: https://webpack.js.org/
