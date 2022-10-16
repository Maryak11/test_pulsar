import instances from './instances'
import web from './web'

export default (context, inject) => {
  return inject('api', {
    web: () => web(context, instances.web),
  })
}
