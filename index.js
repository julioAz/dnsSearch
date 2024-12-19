const dns = require('dns');

const searchedUrl = 'google.com'

async function searchDNS() {
  const adresses = await dns.promises.resolve4(searchedUrl)
  console.log(adresses)

  const nameServers = await dns.promises.resolveNs(searchedUrl)
  console.log(nameServers)
}

searchDNS()