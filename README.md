I need to download from a platform around 70 files each month. I have found it very time consumming to do, hence I created this little program. It downloads by itself all <!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">

<h3 align="center">One Drive Batch Doawnloader</h3>

  <p align="center">
    This little script helps me resolving a daily problem I have in my work at Hermès.
    <br />
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## Why this project exist?

[![Product Name Screen Shot][product-screenshot]](https://example.com)

I need to download from a platform around 70 files each month. I have found it very time consumming to do, hence I created this little program. It downloads by itself all the files instead of having me clicking on each of them. Very simple, it works with a combination of querySelectors and .click() methods, encapsulated in a for of loop.

The program is fairly basic, I just encountered two limited difficulties :

- []() As it was my first touchpoint with web scraping, I didn't know some sort of "security wait()" were needed. I had forgotten code is executed so quickly that the browser does not have time to render the UI. It causes a problem since some elements the .click() method are applying on are rendered onClick, sometimes even with a CSS animation which delays even more the rendering. Hence, I just added a waitFor function that returns a promise. My function accepts a single argument, the delay after which the promise should be resolved. I then used the async/await syntax to await for the promise and delay my code execution.

- []() Initially I had converted the node list from querySelectorAll to an array and had mapped over it. However, I had forgotten arrays ignore any asynchronous code. My code was still executing extremely fast and was crashing since my querySelectors could not target some elements that were taking time to render on the UI (about miliseconds. I switched to a for...of loop that I encapsulated in an async function.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![JavaScript][javascript]][js-url]
[![NodeJS][nodejs]][js-url]

- [![NodeJS][nodejs]][node-url]
- [![Next][next.js]][next-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

<!-- USAGE EXAMPLES -->

## Usage

 <!-- put gif video of doawnload -->

I use this project by just copy pasting my code in the console.
It's the simplest and fastest to me!

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Zacharie Dupain - [LinkedIn](https://ae.linkedin.com/in/zachariedupain) - zachariedupain@hotmail.fr

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

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
[linkedin-url]: https://ae.linkedin.com/in/zachariedupain
[product-screenshot]: images/screenshot.png
[javascript]: https://img.shields.io/badge/JavaScript-E8D44D?style=for-the-badge&logo=javascript&logoColor=black
[js-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/
[node-url]: https://nodejs.org/en/
[nodejs]: https://img.shields.io/badge/NodeJS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[vue-url]: https://vuejs.org/
[angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[angular-url]: https://angular.io/
[svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[svelte-url]: https://svelte.dev/
[laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
