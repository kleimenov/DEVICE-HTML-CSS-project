# Online store website «Device». 
(non-commercial project)

* Author: [Ivan Kleimenov](https://github.com/kleimenov).

---
### Description
This is gadgets online store website. `Device` website consists of two web pages main page and the catalog of items page.  Sedona's website has two webpages:
- main (home) page;
- catalog page.

All pages contain the website header (aka navigation block) with the link to the catalog page, login and logout, cart, and compare, and a dropdown menu. Footer block with contacts, social networking sites links, login, and logout buttons, and link to HTML Academy website (frontend Bootcamp).

1) _ The main page is the landing page, where you can find a web page header with the double navigation menu. The first nav-menu consists of links on other pages (in this case works just catalog page link, others are mock links). The second nav-menu include login and log out buttons, link on the cart, and compare items link, and a dropdown menu of items. The main part of the web page contains information about store and services, gadgets advertismnt and links on partners websites.

2) _The catalog page_ is the items host page. On this page, you can find a wide variety of filters and information blocks of items with main information like price and descriptions. 


Above was provided a brief description of the Device project.
[You can explore this website detailed here (link on github pages)]https://kleimenov.github.io/DEVICE-HTML-CSS-project/

---

### Tech descripton and specification

This website includes three web pages. All pages are responsive, work with a broad variety of screens in range from mobile devices (screen width 320px) to desktops (screen width 1200px and higher). This cross-devices website affords users to feel comfortable interacting with content whether the size of the screen their device has.

This project is build with the following technologies:
```
- HTML;
- CSS;
- JavaScript;

```
Semantic HTML is used for all webpages markup with the elements of block - element - modifier system in class naming. All elements are styled with CSS using the inheritance and cascading rules, and selectors specificity. CSS rules are contained in a separate .scss files for easier maitenance and then compiled with the Sass preprocessor into a CSS style master file to reduce the number of interactions with a server. Responsiveness is provided by the usage of media queries and sass variables.
All algorithms  were implemented with JavaScript. This includes DOM manipulation (DOM elements creation and modification) and API fetching.

---
### Descriptions of JavaScript features 
1) _Weather API_ implemented on vanilla JavaScript. Weather API architecture includes following functions: 
Function `displayWeather()` creates DOM elements that contains weather data. Function `getWeather()` fetches weather API from outer resource. Functions `celsiusToFahrenheit()` and `fahrenheitToCelsius()` calculate and transition data to the measurement sistem convenient for user.
2) _Modal hotel booking form_. Implemented algorithm allows to show and hide modal booking form. Algorithm includes follow steps: find modal element inside HTML markup, listen for the event `a user click on the button`, show the modal booking form, get user's data, hide modal form when user click on a particular button. 
3) _Likes toggle_ with the toggle algorithm.

