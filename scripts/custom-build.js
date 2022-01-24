const path = require('path');
const builder = require('next/dist/build').default;

async function main() {
  // Do some setup, then gather some config - such as from Gasket plugins
  const config = {};
  return await builder(path.resolve('.'), config);
}

main()
