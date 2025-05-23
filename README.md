# microproxy

An extremely simple reverse proxy written in Node.js that will run on anything that can run Node.js.
Even on cPanel/DirectAdmin powered shared hosting providers!

## Usage

1. Clone this repo.

2. Install dependencies with `npm install` or whatever method supported by your host.
   (For cPanel/DirectAdmin users, there should be "Run NPM install" button at where you setup the Node.js app)
 
3. Use environment variables to setup the proxy. All environment variables start with `PROXY_` will be parsed into a config object.
   You **must** at least setup the proxy target with `PROXY_TARGET`.
   Use one underscore `_` to specify camelCased keys.
   
   For all available options you can view the docs for the underlying `http-proxy` library [here](https://github.com/http-party/node-http-proxy?tab=readme-ov-file#options).

   Example:

    ```env
    PROXY_TARGET=http://example.com
    PROXY_CHANGE_ORIGIN=true
    ```

    will produce the following config object:

    ```json
    {
      "target": "http://example.com",
      "changeOrigin": true
    }
    ```

4. Change the listen port by using `PORT` environment variable. Default to 8080 if not set.

5. Enjoy!
