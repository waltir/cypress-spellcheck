<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->


[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://github.com//cypress-io/cypress/raw/develop/assets/cypress-logo-light.png" alt="Logo" width="auto" height="80">
  </a>

<h3 align="center">Cypress Spellcheck</h3>

  <p align="center">
    An unofficial lightweight cypress module for identifying possible spelling errors found within your application.

  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![product-screenshot](https://github.com/waltir/cypress-spellcheck/blob/master/assets/Cypress-Spellcheck-v1.jpg?raw=true)

This module is designed to help flag spelling mistakes found within your application. While this type of assertion is not necessary for most tests it proves to be beneficial in initial test scripts executed against new products and projects. Once you've had time to write assertions for the static strings in your application you can remove calls to this module from your tests.

**Note:** The spelling logic found within this module was provided by the [spellcheck-js](https://www.npmjs.com/package/spellcheck-js) node module.

<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This module is distributed via [npm](https://npmjs.com/) which is bundled with [node](https://nodejs.org/) and should be installed as one of your existing Cypress project's devDependencies.


### Installation

* Execute the following npm command from your projects root directory.

  ```sh
    npm i cypress-spellcheck --save-dev
  ```

### Setup

* The Cypress Spellcheck Library extends the Cypress' cy command.

* To access the spellcheck assertion You must first add this line to your project's cypress/support/commands.js file.

  ```sh
    import '@cypress-spellcheck/add-commands
  ```
You can now use assetions within the Testing Library.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

To use the assertions in your tests simply call the isSpelledCorrectly function.

  ```
    cy.isSpelledCorrectly(string, description, [..., whiteListedCustomWords])
  ```

The function takes three arguments:
1. (Required) The string of text you wish to verify.
2. (Required) A description of the text that will be used in the test output.
3. (Optional) An array of custom words you wish to whitelist for all future test runs. 
   1. **eg.**  ["customWordOne", "customWordTwo"]
   2. **Note:** Whitelisting words is permanent and could negatively impact future test runs.


Example verifying the page title doesn't contain any spelling mistakes:
```javascript
    it('The page title should not contain any spelling mistakes', () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.get('html').then(function (e) {
                let title = e.find('title').text();
                cy.isSpelledCorrectly(title, 'website title');
            });
        });
    });
```

Example whitelisting a word and verifying the page title doesn't contain any spelling mistakes:
```javascript
    it('The page title should not contain any spelling mistakes', () => {
        cy.visit('cypress/e2e/html/no-spelling-mistakes.html').then(() => {
            cy.get('html').then(function (e) {
                let title = e.find('title').text();
                cy.isSpelledCorrectly(title, 'website title', ['catz', 'dogz']);
            });
        });
    });
```

Example iterating over multiple paragraph elements and verifying they do not contain spelling mistakes:
```javascript
    cy.get('p').each((paragraph) => {
        let text = paragraph.text();
        cy.isSpelledCorrectly(text, `paragraph ("${text}")`);
    });
```


![failed assertion example](https://github.com/waltir/cypress-spellcheck/blob/master/assets/Cypress-Spellcheck-v2.jpg?raw=true)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- Testing The Module -->
## Testing The Module

Navigate to the node module and then execute the following command to run a Cypress test against two dummy html documents. The test script contains 36 tests with a total of 18 passing assertions and 18 failing.

```javascript
    npm run test
```

The executed test will result in an even number of passed and failed results as the no-spelling-mistakes.html and has-spelling-mistakes.html documents are tested.

![test script results](https://github.com/waltir/cypress-spellcheck/blob/master/assets/Cypress-Spellcheck-v3.jpg?raw=true)


See the [open issues](https://github.com/waltir/cypress-spellcheck/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/waltir/cypress-spellcheck](https://github.com/waltir/cypress-spellcheck)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Bharadwaj Duggaraju](https://www.npmjs.com/package/spellcheck-js)
* [Cypress](https://www.npmjs.com/package/cypress)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 