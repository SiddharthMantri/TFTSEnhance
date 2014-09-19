chrome.runtime.onInstalled.addListener(function(details) {
	chrome.tabs.create({url: "https:/www.reddit.com/r/talesfromtechsupport"});
});