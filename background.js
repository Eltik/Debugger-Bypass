chrome.debugger.onEvent.addListener(function(source, method, params) {
    if (method === 'Debugger.paused') {
        chrome.debugger.detach(source, () => {console.log("hi")});
    }
});

// Path: background.js
chrome.debugger.onDetach.addListener(function(source, reason) {
    console.log("bye");
});