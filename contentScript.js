let hasRun = false;

const observer = new MutationObserver(mutations => {
    if (hasRun) {
        return; // Prevent multiple runs
    }

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    let hash = url.hash;
    
    const bodyText = document.body.innerText || "";
    if (hash.includes('?')) {
        // Extract and parse the query from the hash
        const queryStart = hash.indexOf('?');
        const queryParams = new URLSearchParams(hash.substring(queryStart + 1));
    
        for (let param of queryParams) {
            // Additional logic if needed for each param
            paramName=param[0];
            paramValue = param[1];
            if (bodyText.includes(param[1])) {
                chrome.runtime.sendMessage({ detected: true, url: window.location.href, paramName, paramValue });
                hasRun = true; // Flag to prevent multiple detections
                observer.disconnect(); // Stop observing after detection
                break;
            }
        }

           }


    
});

observer.observe(document.body, { childList: true, subtree: true });
