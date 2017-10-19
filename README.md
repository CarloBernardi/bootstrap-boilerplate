# Bootstrap Boilerplate
Bootstrap 4-beta Boilerplate, bundled with **Webpack** and managed by **Laravel Mix**.


## Introduction
Bootstrap Boilerplate comes with [Bootstrap 4-beta](https://getbootstrap.com/) framework, [FontAwesome](http://fontawesome.io/) icons pack and makes use of
[Laravel Mix](https://github.com/JeffreyWay/laravel-mix), a configuration layer that provides a clean, fluent API for defining basic [Webpack](http://github.com/webpack/webpack) build steps for your application.

**Bootstrap Boilerplate is preconfigured to perform these Mix tasks:**
- Sass compilation with URL rewriting and Autoprefixer PostCSS plugin
- JavaScript bundling with ES5 code compilation
- Vendor libraries extraction, for improved long-term caching
- In-file source maps generation
- Browser synchronization on changes
- Minification on production


## Requirements

This project requires [Node.js](https://nodejs.org/) to be installed on your machine.
(Your Node.js version must be 4.0 or higher)

Run this command to check if you are ready:

```shell
$ node -v && npm -v
```
You should see something like this:
```shell
v6.11.3
3.10.10
```


## Quick Start
These instructions will get you a copy of Bootstrap 4-beta up and running on your local machine.

### 1. Installation
Clone the repository and install with npm:
```shell
git clone https://github.com/CarloBernardi/bootstrap-boilerplate.git
cd bootstrap-boilerplate
npm install
```

### 2. Configuration
Open <code>webpack.mix.js</code> file and edit these constants as you prefer:
```javascript
const public_path = 'dist'; // Destination folder for compiled assets
const proxy_host = 'localhost/bootrap-boilerplate'; // Proxy an existing virtual host. (eg. 'local.dev')
```

### 3. Get Started
Mix is a configuration layer on top of Webpack, so to run your Mix tasks you only need to execute one of the NPM scripts that is included with the default package.json file.
#### Run all Mix tasks
```bash
npm run dev
```

#### Run all Mix tasks and minify output:
```bash
npm run production
```

#### Watching Assets For Changes and Browser Synchronization
```bash
npm run watch
```

## Documentation
- [Laravel Mix API](https://github.com/JeffreyWay/laravel-mix/tree/master/docs#readme)
- [Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/introduction/)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
