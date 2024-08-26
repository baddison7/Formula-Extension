document.addEventListener('DOMContentLoaded', function() {
  const window = document.getElementById('window');
  const back = document.getElementById('back');
  const math = document.getElementById('maths');
  const physics = document.getElementById('physics');
  const chemistry = document.getElementById('chemistry');

  function openAlwaysOnTopPDF(path) {
    chrome.windows.create({
      url: chrome.runtime.getURL(path),
      type: 'popup',
      width: 600,
      height: 850,
      focused: true,
    });
  }

  math.addEventListener('click', function(event) {
    event.preventDefault();
    openAlwaysOnTopPDF('referenceSheets/mathematics.pdf');
  });

  physics.addEventListener('click', function(event) {
    event.preventDefault();
    openAlwaysOnTopPDF('referenceSheets/physics.pdf');
  });

  chemistry.addEventListener('click', function(event) {
    event.preventDefault();
    openAlwaysOnTopPDF('referenceSheets/chemistry.pdf');
  });

  engineering.addEventListener('click', function(event) {
    event.preventDefault();
    openAlwaysOnTopPDF('referenceSheets/engineering.pdf');
  });

  window.addEventListener('click', function(event) {
    event.preventDefault();
    chrome.windows.getCurrent(function(currentWindow) {
      var updateInfo = { width: 840, left: 600, };
      chrome.windows.update(currentWindow.id, updateInfo);
    });
  });

  back.addEventListener('click', function(event) {
    event.preventDefault();
    chrome.windows.getCurrent(function(currentWindow) {
      var updateInfo = { width: 1440, left: 0, };
      chrome.windows.update(currentWindow.id, updateInfo);
    });
  });
});
