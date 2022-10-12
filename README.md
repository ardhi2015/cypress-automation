<!-- GETTING STARTED -->
### Installation
1. Register to get the API token key -  [https://www.weatherbit.io/account/create](https://www.weatherbit.io/account/create)
2. Clone the repo
   ```sh
   git clone https://github.com/ardhi2015/cypress-automation.git
   ```
3. go to project directory

4. Install NPM packages
   ```sh
   npm install
   ```
5. Rename `cypress.example.env.json` to `cypress.env.json` and Enter your API, base_url = `https://api.weatherbit.io/v2.0/`  then, url_ui = `https://www.service.nsw.gov.au/`.
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

### How to Trigger CI (Github Action)
push something to master