var selected = window.getSelection().toString();
chrome.runtime.sendMessage({"selected" : selected});
