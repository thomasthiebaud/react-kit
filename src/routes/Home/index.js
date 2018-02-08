import React from 'react'
import Loadable from 'react-loadable'

export default Loadable({
  loader: () => import('./Home'),
  loading() {
    return <div>Loading...</div>
  },
})
