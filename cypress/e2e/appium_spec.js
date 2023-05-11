const webdriver = require('webdriverio');

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'Android',
      deviceName: 'Pixel_3a_API_33_x86_64',
    browserName: 'Chrome',
  },
};

async function main() {
  const client = await webdriver.remote(opts);

  await client.url('https://www.google.com');

  // Other test steps here

  await client.deleteSession();
}

main();