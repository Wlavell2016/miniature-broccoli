  // Function for checking presence of mobile unit
  // Funksjon for å sjekke om enheten er en mobilenhet
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

  // Hvis mobilenhet
  // if (isMobileDevice()){
  //  document.getElementById("map").innerHTML+= "";
  //}

  // If mobile unit: add location-point.
  // Hvis mobilenhet: legg til lokasjonspunkt
  if (isMobileDevice()) {
    // Fix for 100vh not working well on mobile units
    setHeight = function(){
      $('div#mapid').css('height', $(window).height());
    }
    setHeight(); // Call once after page has loaded

    var previousOrientation = window.orientation;
    var checkOrientation = function(){
      if(window.orientation !== previousOrientation){
        previousOrientation = window.orientation;
        setHeight();
      }
    };

    window.addEventListener("resize", setHeight, false);
    window.addEventListener("orientationchange", checkOrientation, false);
    //////////////////////////////////////////////////////
    
    var current_position, current_accuracy;

    function onLocationFound(e) {
      // Remove existing location-point before update
      // Fjern eksisterende lokasjonspunkt før oppdatering
      if (current_accuracy) {
        verdensarvkart.removeLayer(current_accuracy);
      }
      // Radius currently set to a specific size
      // Lokasjonsradius for øyeblikket satt til fast størrelse
      var radius = 2;
      // Add location-point
      // Legg til lokasjonspunkt
      current_accuracy = L.circle(e.latlng, radius).addTo(verdensarvkart);
  }

  // If error in localization
  // Hvis feil i lokalisering
  function onLocationError(e) {
  }

  // Update
  // Oppdater
  verdensarvkart.on('locationfound', onLocationFound);
  verdensarvkart.on('locationerror', onLocationError);

  // to-do: Only add location-point when the user is positioned in the world heritage area of Tjukan
  // to-do: Bare sette posisjon når mobilenheten befinner seg i verdensarvområdet Rjukan
  function locate() {
    verdensarvkart.locate({setView: true, maxZoom: 2, minZoom: 20,timeout: 5000,
    enableHighAccuracy: true});
  }

  // Update interval
  // Oppdateringsinterval
  setInterval(locate, 750);
  }
