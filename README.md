# Kaitlyn and Tanner's website
A static site used for Kaitlyn and Tanner's wedding and other happenings.

## Stack
[Next.js](https://nextjs.org/docs/getting-started) and React.js for the static site framework, along with [styled components](https://www.styled-components.com/) for the styles.

`pages/_document.js` contains custom code to allow for styled components to be rendered server side for the static site. Based on [this article](https://dev.to/aprietof/nextjs--styled-components-the-really-simple-guide----101c).

## Deploying
The repo is live on Heroku. To deploy changes, use the following command:
`git push heroku master`

## TODO
* Stop Heroku from sleeping