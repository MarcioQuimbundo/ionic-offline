![banner](https://s3-eu-west-1.amazonaws.com/asaburido/ionic-offline-github-banner-new.png)

# ionic-offline [![npm version](https://badge.fury.io/js/ionic-offline.svg)](http://badge.fury.io/js/ionic-offline) [![npm downloads](https://img.shields.io/npm/dm/ionic-offline.svg)](https://npmjs.org/ionic-offline)

Ionic Offline Sync Module Library

[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/guide/styleguide)
[![Build Status](https://travis-ci.org/valor-software/ionic-offline.svg?branch=master)](https://travis-ci.org/valor-software/ionic-offline)
<!-- [![codecov](https://codecov.io/gh/valor-software/ionic-offline/branch/development/graph/badge.svg)](https://codecov.io/gh/valor-software/ionic-offline)
[![Dependency Status](https://david-dm.org/valor-software/ionic-offline.svg)](https://david-dm.org/valor-software/ionic-offline) -->

[![NPM](https://nodei.co/npm/ionic-offline.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/ionic-offline)
[![NPM](https://nodei.co/npm-dl/ionic-offline.png?height=3&months=6)](https://npmjs.org/ionic-offline)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/valorkin.svg)](https://saucelabs.com/u/valorkin)

## Table of contents
1. [Getting Started](#getting-started)
2. [Installation instructions](#installation-instructions)
3. [Usage & Demo](#usage--demo)
4. [API](#api)
5. [Troubleshooting](#troubleshooting)
6. [Contributing](#contribution)
7. [License](#license)

## Getting Started

ionic-offline contains all core (and not only) Bootstrap components powered by Angular and [ngx-bootstrap](https://github.com/valor-software/ngx-bootstrap). So you don't need to include original JS components, but we are using markup and css provided by Bootstrap.

## Installation instructions

To install this library, run:

```bash
$ npm install ionic-offline --save
```
You will need to install [Ionic Storage](https://ionicframework.com/docs/storage/)

```
npm install --save @ionic/storage
```

And also install Ionic Native Network Plugin for this library to work correctly

```
ionic cordova plugin add cordova-plugin-network-information
npm install --save @ionic-native/network
```

## Usage and demo

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install ionic-offline --save
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { IonicOfflineModule } from 'ionic-offline';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    IonicOfflineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```




# Troubleshooting

So you are in trouble, where to get help:
- you can search and ask for help at [StackOverflow](https://stackoverflow.com/questions/tagged/ionic-offline)

- if none of this helped please [search](https://github.com/alvarosaburido/ionic-offline/issues) and only then open new issue

# Contribution

Are very welcome! And remember, contribution is not only PRs and code, but any help with docs or helping other developers to solve issues are very appreciated! Thanks in advance!

# TodoList



## Credits


## License

MIT © [Alvaro Saburido](mailto:alvaro.saburido@gmail.com)
[Javier Casados](mailto:javicasados@gmail.com)