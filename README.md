# Open Jam homepage

This is the Open Jam site.  The jam is hosted on itch.io, but this site 

It's powered by the Hugo static site generator.

## Local quick-start


Make sure hugo is installed.  For Fedora users:

```
dnf install hugo
```

Then install npm dependencies:

```
npm install
```

Then, from inside this repo:

```
hugo server
```

Add `-D` to include draft posts.

To rebuild the JS and CSS:

```
cd themes/terminal
npm i
npm run build
```

## Creating a new post

To create a new post, first come up with a short slug to represent the post.  For example, the slug for announcing the next open jam could be `announce-2020`.  Use that slug in the following command.

```
hugo new posts/announce-2020/index.md
```

Then edit `content/posts/announce-2020/index.md` in your favorite editor.

If your post includes images, or other static content, copy it into the post's folder (put it beside index.md).  You can then link to it relative to the post.

## Deploy the new site
To deploy your changes to github pages to https://openjamio.github.io/open-jam-page/

```
npm run deploy
```
