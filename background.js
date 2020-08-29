chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
    if (changeInfo.status === "complete") {
        chrome.storage.sync.get('isPaused', function(data) {
            if (data.isPaused) {
                return;
            }
            console.log(tab.url);
            chrome.tabs.query({url: tab.url}, function(tabs) {
                tabsToRemove = [];
                for (t of tabs) {
                    if (tab.id !== t.id) {
                        tabsToRemove.push(t.id);
                    }
                }
                if (tabsToRemove.length === 0) {
                    return;
                }
                console.log("about to delete following tabs");
                console.log(tabsToRemove);
                chrome.tabs.remove(tabsToRemove, function() {
                    chrome.storage.sync.get('tabsRemoved', function(item) {
                        console.log("item");
                        console.log(item);
                        count = item.tabsRemoved || 0;
                        chrome.storage.sync.set({
                            tabsRemoved: count + tabsToRemove.length
                        }, function() {
                            console.log("success!");
                            console.log(count + tabsToRemove.length);
                        });
                    });
                });
            });
        });
    }
});

chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
    chrome.pageAction.show(tabId);
});
