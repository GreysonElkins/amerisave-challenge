import { getFiles, trackLoggedEmailAddress, printLogs } from './scripts/logs.js'

const printEmailCountsFromFiles = async () => {
  const files = await getFiles('./logs')
  files.forEach(({ logs, id }) => {
    const talliedEmails = trackLoggedEmailAddress(logs)
    printLogs(JSON.stringify(talliedEmails), id)
  })
  console.log(`Printed ${files.length} new logs!`)
}

printEmailCountsFromFiles()
