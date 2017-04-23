/**
 * author te.ng
 * created at 21/4
 * real-time with socketIo-client
 */
/**
 * middleware
 * @param {Object} store 
 */
const clientMiddleWare = (...args) => {
  return store => next => actions => {
    if (actions.type.indexOf('SOCKET_REDUX') !== -1) {
      actions.io = args[0]
      if (actions.type === 'SOCKET_REDUX_BROADCAST_DATA')
        for (let i = 0; i < args[1].length; i++) {
          args[0].on(args[1][i], data => {
            next(actions);
          })
        }
      else {
        next(actions)
      }
      // next(actions)
    }
    else {
      next(actions)
    }
  }
}
export const socketConfig = (io, { url, host, port, room, namespace, options }) => {
  if (!url) {
    url = host.concat(':', port)
  }
  if (namespace) {
    url = url.concat('/', namespace)
  }
  let socket = io(url, {
    reconnection: true,
    timeout: 10000,
    autoConnect: true,
    ...options,
  });
  return socket;
}

export default clientMiddleWare;
