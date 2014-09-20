chrome.runtime.onInstalled.addListener(function(details) {
	chrome.tabs.create({url: "https:/www.reddit.com/r/talesfromtechsupport"});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
		var origin = tab.url.match(/^[\w-]+:\/*\[?([\w\.:-]+)\]?(?::\d+)?/)[0];
		if(origin == 'https://www.reddit.com') {
			accTabId = tabId;
            localStorage['current_reddit_tab'] = accTabId;
            if(document.aka == undefined){	
				chrome.tabs.sendRequest(accTabId, {command:"setCode"});
            }else{
            	if(tab.url.indexOf('r/talesfromtechsupport/comments/') > 0){
					accTabId = tabId;
		            localStorage['current_reddit_tab'] = accTabId;
					chrome.tabs.sendRequest(accTabId, {command: "getCurrentThread"});
				}
            }
		} 
	}	
});
chrome.extension.onConnect.addListener(function(port) {
	port.onMessage.addListener(function(msg) {
		if(msg.command == 'setBackgroundCode'){
			setBackgroundCode('ABCDE');
		}
	});
});
function setBackgroundCode(code){
	document.aka = code;
}
