<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites


This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Register to get the API token key -  [https://www.weatherbit.io/account/create](https://www.weatherbit.io/account/create)
2. Clone the repo
   ```sh
   git clone https://github.com/ardhi2015/cypress-automation.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Rename `cypress.example.env.json` to `cypress.env.json` and Enter your API, base_url = `https://api.weatherbit.io/v2.0/`  then, url_ui = `https://www.service.nsw.gov.au/`.
   ```json
   {
    "api_key": "your_api_token",
    "base_url": "sample",
    "url_ui" : "sample"
  }
   ```

### How to run
  ```sh
  npm cypress run
  ```