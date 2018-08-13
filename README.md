# morph-list-view-title

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/PolymerElements/paper-progress)

Title component for list view

`morph-list-view-title` changes its look based on when it is either IOS device or Android device.

## Getting Started

For the information about how to clone the desired repository, running the local server and testing, please refer to Polymorph elements getting started docs at the end of this repository.

## Demo

- For an inline demo you can edit please see `morph-list-view` component on webcomponents website here [morph-list-view]

- Here is a quick demo of the `morph-list-view-title` element for **IOS platform**.

  <p align="center">
    <img src="demo-images/ios-title-inside-view-demo.png" alt="IOS morph-list-view-title demo"/>
  </p>

- Here is a quick demo of the `morph-list-view-title` element for **Android platform**.

  <p align="center">
    <img src="demo-images/android-title-inside-view-demo.png" alt="Android morph-list-view-title demo"/>
  </p>

- Here is the HTML markup for both **IOS** and **Android** platform

```html

<template>
  <morph-list-view>
    <morph-list-view-title>Title 1</morph-list-view-title>

    <morph-list-view-item>Item 1</morph-list-view-item>
    <morph-list-view-item>Item 2</morph-list-view-item>
    <morph-list-view-item>Item 3</morph-list-view-item>

    <morph-list-view-title>Title 2</morph-list-view-title>

    <morph-list-view-item>Item 1</morph-list-view-item>
    <morph-list-view-item>Item 2</morph-list-view-item>
    <morph-list-view-item>Item 3</morph-list-view-item>
  </morph-list-view>
</template>

```

## Further help

For more information on how to install and run test please go here - [Polymorph elements getting started]

[Polymorph elements getting started]: https://github.com/moduware/polymorph-components/blob/master/INFO.md

[morph-list-view]: https://www.webcomponents.org/element/moduware/morph-list-view
