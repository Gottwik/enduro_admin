# Enduro


[![Join the chat at https://gitter.im/Enduro-js/Lobby](https://badges.gitter.im/Enduro-js/Lobby.svg)](https://gitter.im/Enduro-js/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![npm version](https://badge.fury.io/js/enduro_admin.svg)](https://badge.fury.io/js/enduro_admin)

This is the admin interface for [enduro.js](https://github.com/Gottwik/Enduro).

**Other repositories:** [Enduro](https://github.com/Gottwik/Enduro) • [samples](https://github.com/Gottwik/enduro_samples) • Enduro admin • [endurojs.com site](https://github.com/Gottwik/enduro_website)

![image](http://i.imgur.com/M8vGA92.png)

## Documentation
Documentation is mostly shared with enduro. Check it out at www.endurojs.com/docs

## Developing enduro admin

Just clone the project and develop it as if it was another enduro project. There is a tiny test suite that can be run by `npm test`

## Having enduro_admin npm linked
Sometimes you want to develop enduro_admin against an existing project of yours. For this, you can use [npm link](https://docs.npmjs.com/cli/link).

Just cd into enduro_admin folder and do `npm link` and then cd into the enduro's folder and do `npm link enduro_admin`.

Be careful that by doing this you'll have to update enduro_admin to the newest version by doing a `git pull` on your enduro_admin folder, rather than just updating enduro and getting the latest version with it.
