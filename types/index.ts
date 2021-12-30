export type EmailTally = {
  [key: string]: number
}
export type Log = { id: string; email: string; message: string }
export type LogFile = { logs: Log[]; id: string }
