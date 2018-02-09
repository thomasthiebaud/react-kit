import React from 'react'
import Loadable from 'react-loadable'

export default Loadable({
  loader: () => import(/* webpackChunkName: "home" */ './Container'),
  loading() {
    return <div>Loading...</div>
  },
})
