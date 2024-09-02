/* To add the Navigation sidebar to your page, make sure to include this in your `<header>'
   '<script type="module" src="assets/components/custom-elements.js"></script>'
   Then in the body of your HTML, add <nav-sidebar></nav-sidebar>*/
class NavSidebar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <aside class="sidebar">
      <div>
        <h2 class="sidebar-title">MitskiUCF</h2>
        <nav class="nav-content">
        <h3>
          <ul>
            <li class="nav-content homepage">
              <a href="homepage.html" class="nav-content"> <imgHomepage</a>
            </li>
            <li class="nav-content contacts">
              <a href="index.html" class="nav-content">Manage Contacts</a>
            </li>
            <li class="nav-content logout">
              <a href="index.html" class="nav-content">Logout</a>
            </li>
          </ul>
          </h3>
        </nav>
      </div>
    </aside>
        `;
  }
}
customElements.define("nav-sidebar", NavSidebar);