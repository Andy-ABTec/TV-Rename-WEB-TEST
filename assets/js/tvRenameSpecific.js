/*====================================
 TV Rename Specific JavaScript
====================================*/

// Update download links with latest .exe and page lead class with latest version

$(function() {
  $.get('https://api.github.com/repos/TV-Rename/tvrename/releases/latest', function(data) {
    $('#download').attr('href', data.assets[0].browser_download_url);
    $('.btn.btn--light-outline.btn--large').attr('href', data.assets[0].browser_download_url);
    if ($('.page__lead')[0]) {
      $('.page__lead').html($('.page__lead').html().substring(0,164) + 'v ' + data.tag_name + '<br />');
    };
  });
});
