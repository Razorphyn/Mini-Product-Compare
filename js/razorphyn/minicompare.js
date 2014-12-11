/**
 * Mini Compare Header
 * Author: Razorphyn
 * Suport Email: est.garndi@gmail.com
 * Copyright: WTFPL(http://www.wtfpl.net/)
**/
document.observe('dom:loaded', function() {
  $('minicompare').observe('mouseover', function(e) {
    $('minicompare-panel').show();
  });
  $('minicompare').observe('mouseout', function(e) {
    $('minicompare-panel').hide();
  });
});