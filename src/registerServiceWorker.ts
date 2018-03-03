// tslint:disable:no-console

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' || window.location.hostname === '[::1]'
);

function registerValidServiceWorker(swUrl: string): void {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker) {
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                console.log('New content is available, please refresh.');
              } else {
                console.log('Content is cached for offline use.');
              }
            }
          };
        }
      };
    })
    .catch((error) => {
      console.error('Error during service worker registration: ', error);
    });
}

function checkValidServiceWorker(swUrl: string): void {
  fetch(swUrl)
    .then((response) => {
      if (response.status === 404 || response.headers.get('content-type')!.indexOf('javascript') === -1) {
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        registerValidServiceWorker(swUrl);
      }
    })
    .catch(() => {
      console.log('No internet connection found. The application is running in offline mode.');
    });
}

export function register(): void {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL!, window.location.toString());

    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (!isLocalhost) {
        registerValidServiceWorker(swUrl);
      } else {
        checkValidServiceWorker(swUrl);
      }
    });
  }
}

export function unregister(): void {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}
