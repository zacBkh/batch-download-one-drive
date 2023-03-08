// Select three dots on index page
const allLines = document.querySelectorAll('.ms-lstItmLinkAnchor.ms-ellipsis-a')
const allLinesArr = [...allLines]

const waitFor = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
const awaitTime = 200

const trialAsync = async () => {
  let iterator = 0
  for (const line of allLinesArr) {
    await waitFor(awaitTime)

    line.click()
    await waitFor(awaitTime)

    // Select 3 dots after 'follow'
    const selectThreeDots = document.querySelectorAll('a.js-callout-action')
    selectThreeDots[iterator].click()
    await waitFor(awaitTime)

    // Select "Download a Copy"
    const downloadButton = document.querySelector(
      'div#ID_DownloadACopy span.ms-core-menu-title'
    )

    downloadButton.click()
    iterator += 1
  }
}

trialAsync()
