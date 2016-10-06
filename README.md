#Simple Static React-Aframe

This repo is minimal boilerplate for VR sites written in React and Aframe. 

It is intended for to get you up and developing with a minimum of fuss and configuration for a static, single page React & Aframe site. This repo gives you:

- ES6/React (with sourcemaps)
- Aframe & React-Aframe
- CSS modules
- watchfile'd development builds

And that's it. 

You can see the initial output here:

http://elbizri.com/carpet/

The carpet and cube are created by the root component, so you can get quickly remove them. Sky, Earth, Camera and Cursor are all their own external components.

About React-Aframe:

Kevin Ngo's straight-forward wrapper React-Aframe
( https://github.com/ngokevin/aframe-react )
provides a React Components for Aframe's `<a-scene>`, `<a-entity>` and `<a-animation>` components. It should be pretty obvious from the code here how React Component `prop`s map to Aframe `components`. 

(You can still call the aframe's components directly if you want, but you'll need to stringify de-stringify the component arguments yourself - obviously this is not a bother for any static components.)

##Set up

Clone the repo and install the node dependencies.

```
git clone https://github.com/Jon-Biz/simple-static-react-aframe
cd simple-static-react-aframe
npm i
```

##Usage

###Development

Run the npm script `dev` to develop.

```
npm run dev
```

A webpack server will now be running on `4000`, serving the contents of the `public` directory. The `entry` files are in `src` - `index.js` and `style.css`.

NOTE: this is using webpack-dev-server, not actually overwriting the files in `public`. For that, you will need to run the build script.

###Production

Run the npm script 'build' to update `style.css` and `index.js` in the `public` directory. Upload this directory to your web server.

```
npm run build
```
