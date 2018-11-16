chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);

      // ----------------------------------------------------------
      // This part of the script triggers when page is done loading
      console.log('Hello. This message was sent from scripts/inject.js');
      // ----------------------------------------------------------
    }
  }, 10);
});

document.addEventListener('click', e => {
  if (e.altKey) {
    const isSelected = [...e.target.classList].includes('important-selection');
    if (isSelected) {
      e.target.classList.remove('important-selection');
    } else {
      e.target.classList.add('important-selection');
    }
  }
});

window.addEventListener('mouseover', e => {
  if (e.altKey) {
    e.target.classList.add('selection-hover');
  }
});

window.addEventListener('mouseout', e => {
  e.target.classList.remove('selection-hover');
});
