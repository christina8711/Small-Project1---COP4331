/* To add the Navigation sidebar to your page, make sure to include this in your `<header>'
   '<script type="module" src="assets/components/custom-elements.js"></script>'
   Then in the body of your HTML, add <nav-sidebar></nav-sidebar>*/
class NavSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
 <div class="container-fluid">
  <div class="row flex-nowrap">
    <div class="col-auto px-sm-2 px-0 " style="background-color: #746aff;">
      <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100" >
        <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-5 d-none d-sm-inline">MitskiUCF.xyz</span>
        </a>
        <ul
          class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" >
          <li class=" nav-item nav-content homepage">
            <a href="homepage.html" class="nav-content nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right"
              data-bs-original-title="Home">
              <i<?xml version="1.0" encoding="iso-8859-1"?>
              <svg class="navicons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50"
                width="100px" height="100px">
                <polygon points="41,5 41,10.73 35,6.05 35,5 " />
                <path
                  d="M48.79,20.62C48.59,20.87,48.3,21,48,21c-0.22,0-0.43-0.07-0.62-0.21L46,19.71V46c0,0.55-0.45,1-1,1H31V29H19v18H5c-0.55,0-1-0.45-1-1V19.71l-1.38,1.08c-0.44,0.34-1.07,0.26-1.41-0.17c-0.34-0.44-0.26-1.07,0.17-1.41l23-17.95c0.37-0.28,0.87-0.28,1.24,0l23,17.95C49.05,19.55,49.13,20.18,48.79,20.62z" />>
              </svg>
               </i>
               <span class="ms-1 d-none d-sm-inline">Home</span>
            </a>
          </li>
          <li class=" nav-item nav-content contacts">
            <a href="contactsman.html" class="nav-content nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right"
              data-bs-original-title="Contact Manager">
                <svg class="navicons" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 114.37">
                <defs>
                  <style>
                    .cls-1 {
                      fill-rule: evenodd;
                    }
                  </style>
                </defs>
                <title>manage</title>
                <path class="cls-1"
                  d="M0,105.3C0,65.76,37.33,87.65,40.17,63.42c.31-2.64-5.91-9.61-7.34-14.43-3-4.87-4.15-12.6-.81-17.74,1.33-2.05.77-7.44.77-10.25,0-28,49.05-28,49.05,0,0,3.54-.82,8,1.11,10.76C86.17,36.42,84.5,44.67,81.79,49,80.06,54.05,73.44,60.55,74,63.42a15.9,15.9,0,0,0,2.82,6.74l-.48.47a8.54,8.54,0,0,0-1.84,2.73l-.12.31a8.22,8.22,0,0,0-.54,2.93,8.42,8.42,0,0,0,.68,3.28l.27.57a10.13,10.13,0,0,0-1.26.39,8.65,8.65,0,0,0-4.63,4.63l-.2.59a8.34,8.34,0,0,0-.42,2.61V94a8.23,8.23,0,0,0,.65,3.22l.24.52a8.69,8.69,0,0,0,1.51,2.13l.14.14a8.52,8.52,0,0,0,2.64,1.79l.67.24a6.94,6.94,0,0,0-.57,1.08,8.29,8.29,0,0,0-.62,2.14ZM115.16,75a2.16,2.16,0,0,0-1.55-.65,2.12,2.12,0,0,0-1.55.65L109.7,77.4a16.2,16.2,0,0,0-2-1.09,20.57,20.57,0,0,0-2.14-.83V71.86a2.17,2.17,0,0,0-2.18-2.19H98.83a2.12,2.12,0,0,0-1.53.64,2.09,2.09,0,0,0-.65,1.55v3.31a16.48,16.48,0,0,0-2.2.68,15.72,15.72,0,0,0-2,.94L89.8,74.21a2,2,0,0,0-1.51-.65,2.14,2.14,0,0,0-1.55.65L83.56,77.4a2.15,2.15,0,0,0,0,3.1l2.35,2.36a15.33,15.33,0,0,0-1.08,2A21.56,21.56,0,0,0,84,87H80.37a2.15,2.15,0,0,0-2.18,2.18v4.55a2.19,2.19,0,0,0,2.18,2.17h3.32a15.6,15.6,0,0,0,.67,2.2,20.6,20.6,0,0,0,.94,2.08l-2.58,2.57a2,2,0,0,0-.65,1.51,2.12,2.12,0,0,0,.65,1.55L85.91,109a2.2,2.2,0,0,0,1.55.61A2.17,2.17,0,0,0,89,109l2.36-2.4a16.2,16.2,0,0,0,2,1.09,21.31,21.31,0,0,0,2.13.83v3.62a2.19,2.19,0,0,0,2.19,2.19h4.54a2.12,2.12,0,0,0,1.53-.64,2.09,2.09,0,0,0,.65-1.55v-3.31a16.48,16.48,0,0,0,2.2-.68,21.65,21.65,0,0,0,2.08-.94l2.57,2.58a2,2,0,0,0,1.52.65,2,2,0,0,0,1.54-.65l3.22-3.19a2.19,2.19,0,0,0,.62-1.55,2.15,2.15,0,0,0-.62-1.55l-2.39-2.36a15.33,15.33,0,0,0,1.08-2,21.56,21.56,0,0,0,.84-2.14h3.62a2.15,2.15,0,0,0,2.18-2.18V90.31a2.13,2.13,0,0,0-.63-1.52,2.07,2.07,0,0,0-1.55-.65h-3.32a19.5,19.5,0,0,0-.67-2.18,16.93,16.93,0,0,0-.94-2.06l2.57-2.61a2,2,0,0,0,.66-1.52,2.11,2.11,0,0,0-.66-1.54L115.16,75Zm-14.63,8.08a8.89,8.89,0,0,1,3.48.69,8.81,8.81,0,0,1,4.73,4.74,9,9,0,0,1,0,6.94,8.81,8.81,0,0,1-4.73,4.74,9.1,9.1,0,0,1-7,0,8.81,8.81,0,0,1-4.73-4.74,9,9,0,0,1,0-6.94,8.81,8.81,0,0,1,4.73-4.74,8.88,8.88,0,0,1,3.47-.69Z" />
              </svg>
               </i>
               <span class="ms-1 d-none d-sm-inline">Manage</span>
            </a>
          </li>
        </ul>
        <ul class="nav nav-pills flex-column align-items-center align-items-sm-start">
          <li class=" nav-item nav-content logout">
            <a href="index.html" class="nav-content nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right"
              data-bs-original-title="Contact Manager">
              <svg class="navicons" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd"
                clip-rule="evenodd" viewBox="0 0 474 512.46">
                <path
                  d="M249.71.13 12.08 35.6C5.46 36.59 0 43.43 0 50.23v418.88c0 6.77 5.39 9.38 12.08 10.31l237.63 32.97c6.68.92 12.08-7.77 12.08-14.63V10.44c0-6.86-5.53-11.28-12.08-10.31zm124.96 329.08-.01-34.07c-.58.17-1.2.27-1.83.27h-53.47c-3.55 0-6.45-2.96-6.45-6.45v-66.2c0-3.48 2.97-6.45 6.45-6.45h53.47c.63 0 1.24.1 1.82.27v-34.06c0-6.29 5.1-11.4 11.39-11.4 3.29 0 6.25 1.4 8.33 3.63l76.01 70.9c4.59 4.27 4.85 11.47.58 16.06l-76.95 75.59c-4.47 4.4-11.67 4.34-16.07-.13a11.439 11.439 0 0 1-3.27-7.96zm-87.26 129.54h31.02V345.46h25.37v113.9c0 6.77-2.8 12.95-7.27 17.44-4.47 4.52-10.67 7.31-17.49 7.31h-31.63v-25.36zm31.02-292.48V52.98h-31.02V27.62h31.63c6.81 0 13.01 2.79 17.49 7.27 4.47 4.48 7.27 10.68 7.27 17.49v113.89h-25.37zm-87.67 58.52-24.93-5.68v74.24l24.93-7.18v-61.38z" />
              </svg>
               <span class="ms-1 d-none d-sm-inline">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
        `;
  }
}
customElements.define("nav-sidebar", NavSidebar);

class ContactsWidget extends HTMLElement {

}

customElements.define("contacts-widget", ContactsWidget);
