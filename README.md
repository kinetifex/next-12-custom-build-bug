This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Overview

We have found a bug when using Next.js with [Gasket](https://gasket.dev), when
the Custom app uses `getInitialProps`. When calling the Next `build` function
from script, the process hangs and the app never finishes.

To see this in action, clone this repo, install modules, and run the
`custom-build` script.

```shell
yarn custom-build

# or

npm run custom-build
```

It will look as though the app has finished, but the process hangs and doesn't
cleanly exit.
