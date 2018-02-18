/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = require('./users')

const siteConfig = {
  title: 'isomorphic-git' /* title for your website */,
  tagline: 'A pure JavaScript implementation of git for node and browsers!',
  url: 'https://isomorphic-git.github.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  headerLinks: [
    {
      doc: 'alphabetic',
      label: 'API Docs'
    },
    { doc: 'quickstart', label: 'Guide' },
    { page: 'help', label: 'Help' },
    // { blog: true, label: 'Blog' },
    {
      href: 'https://github.com/isomorphic-git/isomorphic-git',
      label: 'Github'
    },
    {
      href: 'https://npmjs.com/package/isomorphic-git',
      label: 'npm'
    }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/isomorphic-git-logo.svg',
  footerIcon: 'img/isomorphic-git-logo.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B'
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: 'Copyright © ' +
    new Date().getFullYear() +
    ' Isomorphic-git Contributors',
  organizationName: 'isomorphic-git', // or set an env variable ORGANIZATION_NAME
  projectName: 'isomorphic-git.github.io', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default'
  },
  scripts: [
    'https://buttons.github.io/buttons.js',
    '/js/gitter.js',
    '/js/sidecar.v1.js',
    '/js/browserfs.js',
    'https://unpkg.com/isomorphic-git',
    'https://unpkg.com/openpgp@2.6.2/dist/openpgp.js',
    'https://wzrd.in/standalone/pify@latest',
    '/js/fs.js',
    '/js/object-inspector.min.js',
    '/js/tutorial.js',
    '//static.getclicky.com/js',
    '/js/analytics.js'
  ],
  // stylesheets: ['./css/tutorial.css'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/isomorphic-git/isomorphic-git'
}

module.exports = siteConfig