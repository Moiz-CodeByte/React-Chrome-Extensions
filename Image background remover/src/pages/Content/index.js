import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    console.log("Received message:", message);
    if (message.action === "sendToCont") {
        console.log("Received Base64 image data:", message.data);
        // Convert the Base64 image data to a Blob
        const response = await fetch(`${message.data}`);
        const blob = await response.blob();
        // Create a File from the Blob
        const file = new File([blob], "test.jpg", {type: "image/jpeg"});
        // Find the file input element on the page
        const input = document.querySelector('input[type="file"]');
        // if (input != null) {
            // Create a new DataTransfer object
            const dT = new ClipboardEvent('').clipboardData || new DataTransfer();
            // Add the File to the DataTransfer object
            dT.items.add(file);
           // Assign the DataTransfer object to the file input element
           input.files = dT.files;
           // Dispatch a change event on the file input element
           var evt = new Event('change', {
             'bubbles': true,
             'cancelable': false,
            });
            input.dispatchEvent(evt);


    }
});
setTimeout(() => {
    var btn = document.querySelector('.rm-bt-download');
    btn.click();
    console.log('Button clicked')
}, 10000);


printLine("Using the 'printLine' function from the Print Module");