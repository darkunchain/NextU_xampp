document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'bottom'
    });

    var dropdelem = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(dropdelem, {
      alignment: 'right',
      closeOnClick: 'true'     
    });

    var paraelems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(paraelems, {
      responsiveThreshold: 0
    });
    
    
  


  });

  

  