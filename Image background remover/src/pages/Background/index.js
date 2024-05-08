console.log('This is the background page.');
console.log('Put the background scripts here.');
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Received message:", message);
    if (message.file) {
        console.log("Received Base64 image data:", message.file);
        // Process the Base64 image data as needed
        chrome.tabs.create({ url: "https://removal.ai/#/" }, function(newTab){
            // Use the tab ID of the newly created tab to send the message
            setTimeout(function() {
                chrome.tabs.sendMessage(newTab.id, {action: "sendToCont", message : "image from bg", data : message.file });
            }, 4000); // delay of 1 second
        });
       

}    })
