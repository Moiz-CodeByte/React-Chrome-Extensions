console.log('This is the background page.');
console.log('Put the background scripts here.');
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  console.log('Received message:', message);
  if (!message?.file) {
    console.log('file not received');
    return;
  }
  console.log('Received Base64 image data:', message.file);
  // Process the Base64 image data as needed
  var newTab = await createTab('https://removal.ai/#/');
  // Use the tab ID of the newly created tab to send the message
  await sleep(4000);
  chrome.tabs.sendMessage(newTab.id, {
    action: 'sendToCont',
    message: 'image from bg',
    data: message.file,
  });
});

function createTab(url) {
  return new Promise((resolve) => {
    chrome.tabs.create({ url: url }, (newTab) => {
      resolve(newTab);
    });
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
}
