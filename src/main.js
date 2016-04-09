import React from 'react'
import {render} from 'react-dom'
import socket from 'lib/socket'

import App from 'component/App.jsx'

render(<App />, document.querySelector('#app'))
