    // This is a manifest file that'll be compiled into application.js, which will include all the files
    // listed below.
    //
    // Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
    // vendor/assets/javascripts directory can be referenced here using a relative path.
    //
    // It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
    // compiled file. JavaScript code in this file should be added after the last require_* statement.
    //
    // Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
    // about supported directives.
    //
    //= require rails-ujs
    //= require jquery
    //= require jquery_ujs
    //= require phrasing
    //= require turbolinks 
    //= require_tree .




    // Shrinking Nav //
    $(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
            $('nav').addClass('shrink');
            $('#nav-name').css('display','none');
        } else {
            $('nav').removeClass('shrink');
            $('#nav-name').css('display','inline');
        }
    });

    // End Shrinking Nav //

    // Map API //
function initMap() {
      var myLatLng = {lat: 39.2967685, lng: -76.6028709};

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: myLatLng,
                  styles: [
                {elementType: 'geometry', stylers: [{color: '#000000'}]},
                {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                {elementType: 'labels.text.fill', stylers: [{color: '#7cc13c'}]},
                {
                  featureType: 'administrative.locality',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#7cc13c'}]
                },
                {
                  featureType: 'poi',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#7cc13c'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'geometry',
                  stylers: [{color: '#263c3f'}]
                },
                {
                  featureType: 'poi.park',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#6b9a76'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry',
                  stylers: [{color: '#38414e'}]
                },
                {
                  featureType: 'road',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#212a37'}]
                },
                {
                  featureType: 'road',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#9ca5b3'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry',
                  stylers: [{color: '#746855'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'geometry.stroke',
                  stylers: [{color: '#1f2835'}]
                },
                {
                  featureType: 'road.highway',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#e8f600'}]
                },
                {
                  featureType: 'transit',
                  elementType: 'geometry',
                  stylers: [{color: '#2f3948'}]
                },
                {
                  featureType: 'transit.station',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#e8f600'}]
                },
                {
                  featureType: 'water',
                  elementType: 'geometry',
                  stylers: [{color: '#000'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.fill',
                  stylers: [{color: '#813cc1'}]
                },
                {
                  featureType: 'water',
                  elementType: 'labels.text.stroke',
                  stylers: [{color: '#813cc1'}]
                }
                      
              ]
      });
    
     var image = { 
        src: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        scaledSize: new google.maps.Size (50,50),
        anchor: new google.maps.Point (25,25)
      };
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'The Nevermore Haunt',
        icon: image 
      });
        
    google.maps.event.addListener(marker, 'click', function() {
            window.open('https://www.google.com/maps/place/The+Nevermore+Haunt/@39.2968134,-76.6082782,15z/data=!4m5!3m4!1s0x0:0x423340fda3926ce3!8m2!3d39.296913!4d-76.6028709');
    });
    }
    // Twitter

