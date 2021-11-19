# UI server with react

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This React App is used to test conversation AI

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm install`
Download the package specified in package.json.

# If delploying in a server

### `npm run build`

### `PORT=portnum serve -s build`

# You may change your python-flask server url used in Axios

## default, the url is set to http://127.0.0.1:5001, http://127.0.0.1:5001/make
the first one, to post your recorded voice formdata to your ai server.
another, to get the result of makeittalk rendering mp4 file from Url that provides send_file() method in flask.


In src/components/MicButton.js , you can check this 


