const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
  });

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('Got called')
    const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
     return;
    }
  
    promptEvent.prompt();
    
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
  });

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  
    window.deferredPrompt = null;
  }); 
