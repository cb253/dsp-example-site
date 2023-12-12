/*
document.body.addEventListener('mouseover', function (e) {
  var mouseOverTarget = e.target;
  var connectChild = connectTabItems.children
  if (mouseOverTarget === connectTab || mouseOverTarget === connectTabItems || mouseOverTarget === connectTabItem1 || mouseOverTarget === connectTabItem2) {
    connectTabItems.style.display = "flex";
    connectTab.classList.add("navItemHovered");
  } else {
    connectTabItems.style.display = "none";
    connectTab.classList.remove("navItemHovered");
  }
});
*/
// connect tab
document.body.addEventListener('mouseover', function (e) {
    var mouseOverTarget = e.target;
    if (mouseOverTarget === connectTab || mouseOverTarget.classList.contains('tabChild') || mouseOverTarget === connectTitle) {
      connectTab.classList.add('tabHovered')
  
    } else if (mouseOverTarget !== content) {
      connectTab.classList.remove('tabHovered')
  
    } 
  });
  
  // about tab
  document.body.addEventListener('mouseover', function (e) {
    var mouseOverTarget = e.target;
    if (mouseOverTarget === aboutTab || mouseOverTarget.innerHTML === 'ABOUT') {
      aboutTab.classList.add('tabHovered');
      console.log('abouthovered');
    }
  });  
  
  // services tab
  document.body.addEventListener('mouseover', function (e) {
    var mouseOverTarget = e.target;
    if (mouseOverTarget === servicesTab || mouseOverTarget.innerHTML === 'SERVICES') {
      servicesTab.classList.add('tabHovered');
      console.log('abouthovered');
    }
  });  
  
  // reviews tab
  document.body.addEventListener('mouseover', function (e) {
    var mouseOverTarget = e.target;
    if (mouseOverTarget === reviewsTab || mouseOverTarget.innerHTML === 'REVIEWS') {
      reviewsTab.classList.add('tabHovered');
      console.log('abouthovered');
    }
  });  
  
  // partners tab
  document.body.addEventListener('mouseover', function (e) {
    var mouseOverTarget = e.target;
    if (mouseOverTarget === partnerTab || mouseOverTarget.innerHTML === 'PARTNERS') {
      partnerTab.classList.add('tabHovered');
      console.log('abouthovered');
    }
  });  
  
  
  
  // mouseout handler for all tabs
  document.body.addEventListener('mouseout', function (e) {
    var mouseOutTarget = e.target;
    if ( mouseOutTarget === aboutTab || mouseOutTarget === servicesTab || mouseOutTarget === reviewsTab || mouseOutTarget === partnerTab) {
        connectTab.classList.remove('tabHovered');
        aboutTab.classList.remove('tabHovered');
        servicesTab.classList.remove('tabHovered');
        reviewsTab.classList.remove('tabHovered');
        partnerTab.classList.remove('tabHovered');
        console.log('moused Out')
    }
  });
  
  
  // LINKS
  connectTab.addEventListener('click', function(event) {
    window.location.href = 'connect.html';
  });