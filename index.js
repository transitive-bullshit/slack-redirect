'use strict'

module.exports = (req, res) => {
  res.writeHead(301, {
    Location: 'https://join.slack.com/t/saasify/shared_invite/enQtODAxODA5MzU0NjczLTczOGU3NzNkYTJlMWIwZDkyNjJkOTk3MGEwZThlOWQyNTQxODZjZTExNjAzODJlZDQ3MWM5NWQwMGRiMDcyZTY'
  })
  res.end()
}
