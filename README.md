# Store 
Same API as browser storage

## Install
```
npm install @pigsking/store
// or
yarn add @pigsking/store

```
## Usage
```
import{local,session} from '@pigsking/store'

local.setItem('name','allen')
local.getItem('name') // allen
local.removeItem('name')
local.clear()

session.setItem('name','allen')
session.getItem('name') // allen
session.removeItem('name')
session.clear()
```

## License
This project is licensed under GLWTPL

[GLWTPL]: https://github.com/me-shaon/GLWTPL/blob/master/LICENSE