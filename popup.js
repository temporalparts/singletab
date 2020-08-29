

/* Tabs Removed Counter */

let tabsRemovedCounter = document.getElementById("tabs-removed-counter");

chrome.storage.sync.get("tabsRemoved", function(data) {
    count = data.tabsRemoved || 0;
    tabsRemovedCounter.innerHTML = "Tabs Removed: " + count;
});


/* Pause Button */

let pauseButton = document.getElementById("pause-button");

chrome.storage.sync.get('isPaused', function(data) {
    pauseButton.innerHTML = data.isPaused ? "Unpause SingleTab" : "Pause SingleTab";
});

pauseButton.onclick = function(element) {
    chrome.storage.sync.get('isPaused', function(data) {
        chrome.storage.sync.set({isPaused: !data.isPaused}, function() {
            pauseButton.innerHTML = !data.isPaused ? "Unpause SingleTab" : "Pause SingleTab";
        });
    });
};


/* Options Link */

let optionsLink = document.getElementById("options-link");

optionsLink.onclick = function(element) {
  if (chrome.runtime.openOptionsPage) {
    chrome.runtime.openOptionsPage();
  } else {
    window.open(chrome.runtime.getURL('options.html'));
  }
};
