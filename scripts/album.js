var createSongRow = function (songNumber, songName, songLength) {
  var template =
     '<tr class="album-view-song-item">'
   + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
   + '  <td class="song-item-title">' + songName + '</td>'
   + '  <td class="song-item-duration">' + songLength + '</td>'
   + '</tr>'
   ;


   var $row = $(template);

   var handleSongClick = function () {
      var clickedSongNumber = $(this).attr('data-song-number');
      currentlyPlayingSongNumber = clickedSongNumber;
      $(this).html(pauseButtonTemplate);
   };

   var onHover = function () {
    var songItem = $(this).find('.song-item-number');
    var songNumber = songItem.attr('data-song-number');

    if (songNumber !== currentlyPlayingSongNumber) {
      showItem.html(playButtonTemplate);
    }
  };
  
    songItem.html(playButtonTemplate);
  };
  
  var offHover = function () {
    var songItem = $(this).find('.song-item-number');
    var songNumber = songItem.attr('data-song-number');
    if (songNumber !== currentlyPlayingSongNumber) {

    songItem.html(songNumber);
    }
  };
   
   $row.find('.song-item-number').click(handleSongClick);
  //  $row.hover(onHover, offHover);
   
   return $row;
};

var setCurrentAlbum = function(album) {
  var $albumTitle = $('.album-view-title');
  var $albumArtist = $('.album-view-artist');
  var $albumReleaseInfo = $('.album-view-release-info');
  var $albumImage = $('.album-cover-art');
  var $albumSongList = $('.album-view-song-list');

  $albumTitle.text(album.title);
  $albumArtist.text(album.artist);
  $albumReleaseInfo.text(album.year + ' ' + album.label);
  $albumImage.attr('src', album.albumArtUrl);

  $albumSongList.empty();

  for (var i = 0; i < album.songs.length; i++) {
    var $songRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    $albumSongList.append($songRow);
  }
};

var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var currentlyPlayingSongNumber = null;
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

setCurrentAlbum(albums[0]);