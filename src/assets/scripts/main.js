/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

function activateNavLink(id) {
  let container = document.querySelector(id);
  let links = container.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.href === window.location.href)
      link.classList.add("active");
    else
      link.classList.remove('active');
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  activateNavLink('#header-navbar');
  activateNavLink('#footer-navbar');
});
