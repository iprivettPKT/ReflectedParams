chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if (details.method === "GET") {
            const url = new URL(details.url);
            let hash = url.hash;
            // Check if there is a query in the hash
            if (hash.includes('?')) {
                // Extract and parse the query from the hash
                const queryStart = hash.indexOf('?');
                const queryParams = new URLSearchParams(hash.substring(queryStart + 1));
                hash = `${hash.substring(0, queryStart)}?${queryParams}`;
                    const modifiedUrl = `${url.origin}${url.pathname}${hash}`;
                    // Redirect to the modified URL
                    return { redirectUrl: modifiedUrl };
            }
        }
    },
    { urls: ["<all_urls>"], types: ["main_frame"] },
    ["blocking"]
);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.detected) {
            chrome.browserAction.setIcon({path: "icon4.png"});
                       
        }
    }
);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // Reset the icon when a tab is updated
    chrome.browserAction.setIcon({path: "icon.png"});
});