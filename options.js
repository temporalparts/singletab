// chrome.storage.sync.get("tabsRemoved", function(data) {
//     count = data.tabsRemoved || 0;
//     tabsRemovedCounter.innerHTML = "Tabs Removed: " + count;
// });

  // let page = document.getElementById('buttonDiv');
  // const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1', 'white'];
  // function constructOptions(kButtonColors) {
  //   for (let item of kButtonColors) {
  //     let button = document.createElement('button');
  //     button.style.backgroundColor = item;
  //     button.addEventListener('click', function() {
  //       chrome.storage.sync.set({color: item}, function() {
  //         console.log('color is ' + item);
  //       })
  //     });
  //     page.appendChild(button);
  //   }
  // }
  // constructOptions(kButtonColors);


/* Pause Button */

let exactMatchToggle = document.getElementById("exact-match-toggle");

chrome.storage.sync.get('disableExactMatch', function(data) {
    exactMatchToggle.innerHTML = data.disableExactMatch ? "Off" : "On";
});

exactMatchToggle.onclick = function(element) {
    chrome.storage.sync.get('disableExactMatch', function(data) {
        chrome.storage.sync.set({disableExactMatch: !data.disableExactMatch}, function() {
            exactMatchToggle.innerHTML = !data.disableExactMatch ? "Off" : "On";
        });
    });
};
