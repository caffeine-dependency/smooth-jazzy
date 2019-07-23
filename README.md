# Arc'teryx Navbar with Search

> With this application we've created a clone of the 
Arc'teryx product page. Our goal was to mimic the look
and feel of the website while improving it's function
where we saw fit. This repo is a recreation of the 
Navbar and it's search component. The navbar is rendered through 
React and features animations all done through basic CSS transitions,
and some state tracking and event listeners through React as well.
The search component is more akin to an entire fully featured search
page than it is a standard search bar. All of the filtering
is done via Javascript and the items and filters
are styled via flexbox and conditionally rendered based on
their state in React.



## Related Projects

  - https://github.com/pump-squad/Amanda-Modules
  - https://github.com/pump-squad/Wayne-Modules

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Notices](#notices)
1. [Development](#development)

## Usage


# How to Run 
Navigate to ROOT of this directory in your terminal and then run the following commands...

>npm install 

>npm run dataGen 

>npm run seed 

>npm run build 

>npm start 

Then open your browser and go to localhost:2001

## Notices
IMAGES WILL NOT LOAD. To avoid going over my S3 data limits images are currently being served from my server via my local storage. In the next couple days a commit will come that will make adjustments to the data.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

