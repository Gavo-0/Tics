function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('show');

      const existingBackdrop = document.querySelector('.sidebar-backdrop');
      if (sidebar.classList.contains('show')) {
        if (!existingBackdrop) {
          const backdrop = document.createElement('div');
          backdrop.classList.add('sidebar-backdrop');
          backdrop.addEventListener('click', () => {
            sidebar.classList.remove('show');
            backdrop.remove();
          });
          document.body.appendChild(backdrop);
        }
      } else {
        if (existingBackdrop) existingBackdrop.remove();
      }
    }

    document.addEventListener('click', function (event) {
      const sidebar = document.getElementById('sidebar');
      const hamburger = document.querySelector('.hamburger');
      if (
        window.innerWidth <= 767 &&
        sidebar.classList.contains('show') &&
        !sidebar.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        sidebar.classList.remove('show');
        const backdrop = document.querySelector('.sidebar-backdrop');
        if (backdrop) backdrop.remove();
      }
    });