browser.contextMenus.create({
  id: "album-check",
  title: "Check for albums"
});

function messageTab(tabs) {
  browser.tabs.sendMessage(tabs[0].id, {
    replacement: "Message from the extension!"
  });
}

function onExecuted(result) {
    var querying = browser.tabs.query({
        active: true,
        currentWindow: true
    });
    querying.then(messageTab);
}

browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "album-check") {
    let executing = browser.tabs.executeScript({
      file: "functions.js"
    });
    executing.then(onExecuted);
  }
});
