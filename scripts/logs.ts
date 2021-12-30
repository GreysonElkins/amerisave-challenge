import { readdir } from 'fs/promises'
import { readFileSync, writeFile } from 'fs'
import type { EmailTally, LogFile, Log } from '../types/index'

export const getFiles = async (dir: string): Promise<LogFile[]> => {
  const directory = await readdir(dir, 'utf8')
  return directory.map((file) => {
    try {
      return JSON.parse(readFileSync(`${dir}/${file}`, 'utf8'))
    } catch (error) {
      console.error(error)
    }
  })
}

export const trackLoggedEmailAddress = (logs: Log[]) =>
  logs.reduce((tally, { email }) => {
    tally[email] ? (tally[email] += 1) : (tally[email] = 1)
    return tally
  }, {} as EmailTally)

 export const printLogs = (data: string, id: string) => {
  writeFile(`./Output/${id}.json`, data, (error) => {
    if (error) console.log(error)
  })
}