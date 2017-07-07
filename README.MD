# Enduro


[![Join the chat at https://gitter.im/Enduro-js/Lobby](https://badges.gitter.im/Enduro-js/Lobby.svg)](https://gitter.im/Enduro-js/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![npm version](https://badge.fury.io/js/enduro_admin.svg)](https://badge.fury.io/js/enduro_admin)

This is the admin interface for [enduro.js](https://github.com/Gottwik/Enduro).

**Other repositories:** [Enduro](https://github.com/Gottwik/Enduro) • [samples](https://github.com/Gottwik/enduro_samples) • Enduro admin • [endurojs.com site](https://github.com/Gottwik/enduro_website)

![image](http://i.imgur.com/M8vGA92.png)

## Developing enduro admin
1. I decided to decouple admin interface from enduro to make things cleaner
2. enduro admin is built using enduro ( duh ;-) )
2. clone enduro_admin's git repo: https://github.com/Gottwik/Enduro_admin
3. cd into enduro's directory
4. run `npm link ../enduro_admin` or wherever you cloned the enduro_admin to
5. run enduro on enduro_admin by `enduro -nr -noadmin`
6. run `enduro` on your project
7. now you can edit enduro admin's source code and see the change on your project at localhost:5000/admin
