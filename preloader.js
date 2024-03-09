function loader() {
  const obj = document.querySelector('.preloader'),
      inner = document.querySelector('.preloader_inner'),
      page = document.querySelector('.page'),
      body = document.body;

  body.style.overflow = 'hidden';

  obj.classList.add('show');
  page.classList.remove('show');
  let w = 0;
  let t = setInterval(function() {
    if (w < 100) {
      w++;
      inner.textContent = w + '%';
    } else {
      clearInterval(t);
      setTimeout(function() {
        obj.classList.remove('show');
      }, 1000); 
      page.classList.add('show');

      body.style.overflow = '';
    }

    if (w >= 80) {
      clearInterval(t);
      t = setInterval(function() {
        if (w < 100) {
          w++;
          inner.textContent = w + '%';
        } else {
          clearInterval(t);
            obj.classList.remove('show');
          body.style.overflow = '';
        }
      }, 130); 
    }
  }, 40); 
}

loader();