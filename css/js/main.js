document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var expandable = document.querySelectorAll('.nav-item.has-sub > .nav-link');
  expandable.forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth >= 980) return;
      var item = link.parentElement;
      var alreadyOpen = item.classList.contains('is-expanded');
      item.parentElement.querySelectorAll('.nav-item.is-expanded').forEach(function (el) {
        if (el !== item) el.classList.remove('is-expanded');
      });
      if (!alreadyOpen) {
        e.preventDefault();
        item.classList.add('is-expanded');
        link.setAttribute('aria-expanded', 'true');
      }
    });
  });

  var here = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.primary-nav a[href]').forEach(function (a) {
    var href = a.getAttribute('href').split('#')[0];
    if (href === here) {
      a.setAttribute('aria-current', 'page');
    }
  });
});
