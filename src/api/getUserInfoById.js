import { q, client } from '../config/db'

const getUserInfoById = id =>
  client.query(q.Get(q.Ref(q.Collection('addresses'), id)))

export default getUserInfoById
