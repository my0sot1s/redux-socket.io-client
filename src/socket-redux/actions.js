import * as constants from './constants'

/**
 * On Data
 * payload=eventName
 * @param {String} payload 
 */
export const onData = payload => (
  { type: constants.SOCKET_REDUX_ON_DATA, payload }
)

/**
 * Broadcast event
 * @param {String} payload 
 */
export const broadcastData = payload => (
  { type: constants.SOCKET_REDUX_BROADCAST_DATA, payload }
)

/**
 * Emit data
 * payload:{ eventName, data }
 * @param {Object} payload 
 */
export const emitData = payload => ({
  type: constants.SOCKET_REDUX_EMIT_DATA, payload
})
