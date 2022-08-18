# API klient pre Register pravnickych osob

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/D1D5DMOTA)


## Install

```bash
npm i @themaymeow/rpo-api-client
```

or

```bash
yarn add @themaymeow/rpo-api-client
```

## Usage

```javascript
const { getCompany } = require("@themaymeow/rpo-api-client");

getCompany('36213063').then(res => {
    console.log(res.data);
})
```

License: MIT
