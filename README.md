# @departurelabs/notific-integrate

- [@departurelabs/notific-integrate](#departurelabsnotific-integrate)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Configuration properties](#configuration-properties)
  - [Publishing](#publishing)
  - [Websites](#websites)

This package contains the Notific Integrate script. This script is used to
create a URL to link your users to Notific. It takes a config and creates a URL
which will be parsed by Notific once the user is authenticated

## Installation

```sh
npm i -S @departurelabs/notific-integrate
```

## Usage

Example integration:

```js
<script>
import { createUrl } from "@departurelabs/notific-integrate"

const notificUrl = createUrl({
  name: "Deeplink Integrator",
  canister_id: "rrkah-fqaaa-aaaaa-aaaaq-cai",
  allowed_callbacks: [],
  notify_callback: {
    principal: "rrkah-fqaaa-aaaaa-aaaaq-cai",
    method: "notify",
  },
  secret: "secret",
})
</script>


<template>

  <a href={notificUrl}>Link account with Notific</a>

</template>
```

### Configuration properties

- `name`: The name of the integrator application
- `canister_id`: The canister id of the integrator application
- `allowed_callbacks`: The Principals that are allowed to be called from within
  Notific
- `notify_callback`:
  - `principal`: The principal that will be called when the user performs a
    callback action from Notific
  - `method`: The method that will be called when the user performs a callback
    action from Notific
- `secret`: A secret that can be used to link the user to the integrator
  application

## Publishing

```sh
> npm run build
> git add .
> git commit -m "changes"
> cd packages/notific-integrate
> npm version <patch/minor/major>
> npm publish
```

## Websites

- [@departurelabs/notific source](https://github.com/departurelabsic/notific)
- [@departurelabs/notific-integrate package](https://www.npmjs.com/package/@departurelabs/notific-integrate)
