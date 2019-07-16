---
---
const key = '{{ site.data.conf.angel-fund.spreadsheet-key }}'
// data is on separate worksheets of the same spreadsheet
const donations_url = `https://spreadsheets.google.com/feeds/cells/${key}/1/public/basic?alt=json`
const goals_url = `https://spreadsheets.google.com/feeds/cells/${key}/2/public/basic?alt=json`
const total_url = `https://spreadsheets.google.com/feeds/cells/${key}/3/public/basic?alt=json`

// first fetch & parse donation goals
fetch(goals_url)
    .then(res => res.json())
    .then(data => {
        // goals is array of hashes, [ { label, fund, goal } ]
        let goals = []

        data.feed.entry.forEach(item => {
            // item.title.$t is like "A1" etc., an Excel-style cell reference
            let cell = {
                column: item.title.$t.match(/([A-Z]+)\d+/)[1],
                row: parseInt(item.title.$t.match(/[A-Z]+(\d+)/)[1])
            }
            // index in goals array
            // -2 because a) indexed from 0, b) 1st row is ignored
            let index = cell.row - 2
            // if no entry yet, initialize with empty object
            if (!goals[index]) goals[index] = {}

            // if it's first row it's a header, ignore it
            // columns: A is label, B is fund code, C is goal amount
            if (cell.row === 1) {
                return
            } else if (cell.column === 'A') {
                goals[index].label = item.content.$t
                // also initialize donations, total
                goals[index].donations = 0
                goals[index].total = 0
            } else if (cell.column === 'B') {
                goals[index].fund = item.content.$t
            } else if (cell.column === 'C') {
                goals[index].goal = parseFloat(item.content.$t)
            }
        })

        // now fetch donations
        fetch(donations_url)
            .then(res => res.json())
            .then(data => {
                // all this is strictly analogous to above
                let donations = []

                data.feed.entry.forEach(item => {
                    let cell = {
                        column: item.title.$t.match(/([A-Z]+)\d+/)[1],
                        row: parseInt(item.title.$t.match(/[A-Z]+(\d+)/)[1])
                    }
                    let index = cell.row - 2
                    if (!donations[index]) donations[index] = {}

                    // cols: A = org name, B = donation amount, C = fund code
                    if (cell.row === 1) {
                        return
                    } else if (cell.column === 'A') {
                        donations[index].donor = item.content.$t
                        donations[index].amount = 0 // initialize amount
                    } else if (cell.column === 'B') {
                        donations[index].amount = parseFloat(item.content.$t)
                    } else if (cell.column === 'C') {
                        donations[index].fund = item.content.$t
                    }
                })

                // now add sums to goals hash
                donations.forEach(donation => {
                    goals.forEach(goal => {
                        if (goal.fund.toLowerCase() === donation.fund.toLowerCase()) {
                            // add to total amount & number of donations
                            goal.total += donation.amount
                            goal.donations++
                        }
                    })
                })

                // stamp out thermometer templates for each goal
                goals.forEach(goal => {
                    const d = document
                    // use template tag & fill in values
                    let tpl = d.querySelector('#thermometer').content

                    tpl.querySelector('.label').textContent = goal.label

                    // Intl.NumberFormat is awesome, see MDN for docs
                    let goal_text = new Intl.NumberFormat('en-US',
                        {style: 'currency', currency: 'USD'}).format(goal.goal)
                    tpl.querySelector('.goal').textContent = goal_text

                    let total_text = new Intl.NumberFormat('en-US',
                        {style: 'currency', currency: 'USD'}).format(goal.total)
                    tpl.querySelector('.total').textContent = total_text

                    tpl.querySelector('.donations').textContent = goal.donations.toString()

                    let percent_text = new Intl.NumberFormat('en-US',
                        {style: 'percent', minimumFractionDigits: 1})
                        .format(goal.total / goal.goal)
                    tpl.querySelector('.percent').textContent = percent_text

                    tpl.querySelector('.progress').style.width = percent_text

                    // clone template & add to document
                    let clone = d.importNode(tpl, true)
                    d.querySelector('#donation-thermometers').append(clone)
                })
            })
    })

fetch(total_url)
    .then(res => res.json())
    .then(data => {
        let total = data.feed.entry ? new Intl.NumberFormat('en-US',
            {style: 'currency', currency: 'USD'}).format(data.feed.entry[0].content.$t) : "$0"
        // insert into page
        document.querySelector('#donation-total').innerHTML = `<h2>${total} raised so far.</h2>`
    })
