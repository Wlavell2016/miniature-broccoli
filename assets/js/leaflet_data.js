// Add leaflet-data
// Legg til leafletdata

// City-planning / Structures
// Byplanlegging, linjer og strukturer

// Åsmund Vinjes gate
  var imageUrl = 'assets/img/structures/struktur_vinjesgt_georef_trans.png',
  imageBounds = [[59.878831848, 8.62540734785], [59.8801751927, 8.62802859585]];
  L.imageOverlay(imageUrl, imageBounds).addTo(verdensarvkart);

  // Krysset Mæls gate / Sam Eydes gate
    var imageUrl = 'assets/img/structures/krysset_mælgt_sameydesgt_georef_trans.png',
    imageBounds = [[59.8777244318, 8.61450173237], [59.880518028, 8.62244211736]];
    L.imageOverlay(imageUrl, imageBounds).addTo(verdensarvkart);

//  Building-polygons
//  BYGNINGSPOLYGONER
//  Vemork

//  var polygon = L.polygon([
//      [59.8709698415702,8.49033216566921],
//      [59.8710805412389,8.49032725709063],
//      [59.8711905308691,8.49032450245748],
//      [59.871193408182,8.49065056908249],
//      [59.8712743035153,8.49064772465232],
//      [59.8712751507994,8.49074843834218],
//      [59.8712687673609,8.49074871453534],
//      [59.8712727742914,8.491204780634],
//      [59.8712761877365,8.49120276396395],
//      [59.8712772158269,8.49126204125097],
//      [59.8712783881667,8.49133310349975],
//      [59.87127842009,8.49140882659434],
//      [59.871278539858,8.49146311714508],
//      [59.8712752915152,8.4914613808077],
//      [59.8712792973564,8.49191780425977],
//      [59.8712853126551,8.49191753390637],
//      [59.8712861437926,8.49201664055777],
//      [59.8712033635062,8.49201968900499],
//      [59.8712062049375,8.49233986283903],
//      [59.8711069950112,8.49234137496378],
//      [59.8711111474028,8.49281333149514],
//      [59.8711885319675,8.49281054578691],
//      [59.8711897816399,8.49294857903675],
//      [59.8711909599753,8.49308911368124],
//      [59.8710065522372,8.49309549204159],
//      [59.870930236175,8.49309826080899],
//      [59.8708477065829,8.4931011241243],
//      [59.8708456390642,8.49286487968104],
//      [59.8707934746892,8.49286674546499],
//      [59.8707914143156,8.49263246580582],
//      [59.8708424114054,8.49263061743603],
//      [59.8708387748092,8.49222509271088],
//      [59.8708457688295,8.4922248074964],
//      [59.870844657071,8.49209945355091],
//      [59.8709854560898,8.4920944490675],
//    ], {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart).bindPopup("Vemork");

//// Våer 1 - Direktørboligen
//  var polygon = L.polygon([
//      [59.8764550715565,8.49825151126897],
//      [59.8765179558749,8.49830343568553],
//      [59.8765025233183,8.49837743877771],
//      [59.876507108633,8.49838129937469],
//      [59.8764725374292,8.49854650880583],
//      [59.876358695346,8.49845248250769],
//      [59.8763990872145,8.4982594996353],
//      [59.8764454604981,8.49829791891419],],
//       {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart);

//  // Våer - 137/67
//  var polygon = L.polygon([
//    [59.8761711801347,8.49807198926812],
//    [59.8762302291057,8.49818255800979],
//    [59.876216267572,8.49821366961635],
//    [59.8762735041472,8.49832230124078],
//    [59.8762588208536,8.49835253060187],
//    [59.8762682194842,8.49837060826037],
//    [59.8762517380421,8.49840497293879],
//    [59.876242321458,8.49838689554999],
//    [59.8762305794912,8.49841136471678],
//    [59.8761121228107,8.49819969903678],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart);

//  // Våer 3
//  var polygon = L.polygon([
//    [59.8759926988266,8.49793928657597],
//    [59.8760605011014,8.49791736593952],
//    [59.8760727385839,8.49806775722886],
//    [59.8760688015271,8.49806906690359],
//    [59.8760711531157,8.49809707463655],
//    [59.8760465109692,8.4981106638318],
//    [59.8760437881077,8.49807712453114],
//    [59.876004945263,8.49808967743209],
//    [59.8759926988266,8.49793928657597],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart);

//  // Våer 4
//  var polygon = L.polygon([
//    [59.8759181341377,8.49764765560175],
//    [59.8759190715411,8.49765800131386],
//    [59.8759299295542,8.49765372930273],
//    [59.8759390672013,8.49774700881222],
//    [59.8759282264625,8.49775110191536],
//    [59.8759329896071,8.49779925699886],
//    [59.875929681089,8.49780055722102],
//    [59.8759327646756,8.49783212614479],
//    [59.8759070217921,8.49784198109781],
//    [59.8759101441107,8.49786015306194],
//    [59.8758544719107,8.49788171219766],
//    [59.8758428775505,8.49776346345417],
//    [59.8758574833794,8.49775770602084],
//    [59.8758493625922,8.49767441399369],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart);

//  // Våer 5
//  var polygon = L.polygon([
//    [59.8759748002784,8.49694518746897],
//    [59.8759862598488,8.49698323872113],
//    [59.8759961118447,8.49697183693414],
//    [59.8760234899074,8.49706573405935],
//    [59.8760137546316,8.49707713406514],
//    [59.8760302042325,8.49713332916438],
//    [59.8759626347458,8.49721151265788],
//    [59.8759083116867,8.49702657001481],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart);

//  // Våer 6
//  var polygon = L.polygon([
//    [59.8758902002325,8.49665513948431],
//    [59.8759074801824,8.49671239332801],
//    [59.8759158740218,8.49670244247102],
//    [59.875950365097,8.49682481060107],
//    [59.8759431420523,8.49683331480081],
//    [59.8759455888007,8.49684149427343],
//    [59.8758778301301,8.49692182443462],
//    [59.8758214278313,8.49673334179994],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart);

//  // Våer 11
//  var polygon = L.polygon([
//    [59.8754844553223,8.49542453611197],
//    [59.8754907315965,8.49544551769048],
//    [59.8754996703289,8.49543484391865],
//    [59.8755192270374,8.49550027830971],
//    [59.875517259845,8.49550245150398],
//    [59.8755263558656,8.49553285705415],
//    [59.87551929316,8.49554100176526],
//    [59.8755242054585,8.49555753864676],
//    [59.8755211655614,8.4955609783993],
//    [59.8755296158486,8.49558925035649],
//    [59.875506383132,8.49561675188493],
//    [59.8754980136624,8.49558847871639],
//    [59.8754645816172,8.49562810195271],
//    [59.8754248315521,8.49549509957109],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart);

//  // Våer 15
//  var polygon = L.polygon([
//    [59.8758929365872,8.49509844190627],
//    [59.8759255485956,8.49538391522615],
//    [59.875844611191,8.49542032938785],
//    [59.875811999262,8.49513485672534],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart);

//  // Våer 18
//  var polygon = L.polygon([
//    [59.8761354274818,8.49983943025834],
//    [59.8761932870805,8.49970566825152],
//    [59.8762979497619,8.49988450219822],
//    [59.8762401714723,8.50001844171291],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart);

//  // Våer 19
//  var polygon = L.polygon([
//    [59.8760275177464,8.49942040394147],
//    [59.8761331602144,8.49959940000416],
//    [59.8760748695633,8.49973549047673],
//    [59.8759692266007,8.49955631568555],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart);

//  // Våer 20
//  var polygon = L.polygon([
//    [59.8758624613688,8.49913388141305],
//    [59.8759665057924,8.49931522175216],
//    [59.8759082011844,8.49944756127276],
//    [59.8758041389837,8.49926622110585],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart);

//  // Våer 21
//  var polygon = L.polygon([
//    [59.8756857396747,8.4988284252594],
//    [59.8758016211468,8.49902905491773],
//    [59.875743587555,8.49916174744387],
//    [59.8756277062838,8.49896111767139],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart);

//  // Våer 22
//  var polygon = L.polygon([
//    [59.8755075149027,8.49852460251365],
//    [59.8756249322621,8.49872520692955],
//    [59.8755678666783,8.49885734886665],
//    [59.8754503687071,8.49865674554314],
//    [59.8754503687071,8.49865674554314],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart);

//  var polygon = L.polygon([
//    [59.878778, 8.595046419904585],
//    [59.878688, 8.595081802602891],
//    [59.878716, 8.595356204986005],
//    [59.878805, 8.595320823211681],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(verdensarvkart).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878729, 8.595477698387103],
//    [59.878817, 8.595442500896066],
//    [59.878845, 8.595716546299636],
//    [59.878756, 8.595751744179731],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(verdensarvkart).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878786, 8.59587356560656],
//    [59.878813, 8.59615011960532],
//    [59.878902, 8.596115632658332],
//    [59.878875, 8.595839256681824],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(verdensarvkart).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878591, 8.596866619665943],
//    [59.878498, 8.596901095252915],
//    [59.878476, 8.596627937182647],
//    [59.878564, 8.596593460789193],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(verdensarvkart).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878524, 8.596479261442695],
//    [59.878495, 8.596490330472052],
//    [59.878498, 8.596513525388449],
//    [59.878448, 8.596532707339719],
//    [59.878445, 8.59650951343601],
//    [59.878436, 8.59651301718321],
//    [59.87841, 8.59623771420118],
//    [59.878498, 8.596203957869674],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(verdensarvkart).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878484, 8.596063545146941],
//    [59.878395, 8.596098024062508],
//    [59.878368, 8.595823797749741],
//    [59.878457, 8.595789139618016],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(verdensarvkart).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878374, 8.595691541065466],
//    [59.878462, 8.595656354445587],
//    [59.878434, 8.595382670582385],
//    [59.878346, 8.595417857895555],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(verdensarvkart).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878422, 8.595256889139532],
//    [59.878333, 8.59529118496481],
//    [59.878307, 8.59501945508418],
//    [59.878395, 8.594985337191646],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(verdensarvkart).bindPopup("Type O");

//  // Torget
//  var polygon = L.polygon([
//    [59.878763, 8.593709176046152],
//    [59.878491, 8.593787517988031],
//    [59.878472, 8.593523915838876],
//    [59.878745, 8.59344806059727],],
//     {weight: 1, fillColor: 'green', color: 'grey'}).addTo(verdensarvkart).bindPopup("Torget 1").on('click', function() {document.getElementById('slidercontent').style.visibility = 'visible';});
//  var polygon = L.polygon([
//    [59.878551, 8.594595452685641],
//    [59.87857, 8.594857631245073],
//    [59.878849, 8.594777960266231],
//    [59.87883, 8.594515779447217],],
//     {weight: 1, fillColor: 'green', color: 'grey'}).addTo(verdensarvkart).bindPopup("Torget 2").on('click', function() {
//      $slider.setAttribute('class', 'slide-in');
//      document.getElementById('slidercontent').innerHTML = " ";
//    });

//  // OMRÅDEPOLYGONER
//  // Elevheimen og lærerboligen
//  var polygon = L.polygon([
//    [59.87769,8.58789],
//    [59.87734,8.59023],
//    [59.8784,8.5897],
//    [59.87839,8.58933],],
//     {weight: 1, color: 'grey', fillColor:'pink'}).addTo(verdensarvkart).on('click', function() {

//      document.getElementById('slidercontent').innerHTML =
//      "<h1>Elevheimen og lærerboligen</h1>";$slider.setAttribute('class', 'slide-in');
//    });
//  // Jernbaneplassen
//  var polygon = L.polygon([
//    [59.87673,8.58502],
//    [59.87656,8.58611],
//    [59.8771,8.58669],
//    [59.87726,8.58542],],
//     {weight: 1, color: 'grey', fillColor:'pink'}).addTo(verdensarvkart).on('click', function() {

//      document.getElementById('slidercontent').innerHTML =
//      "<h1>Jernbaneplassen</h1>";$slider.setAttribute('class', 'slide-in');
//    });
//  // Melandstangen
//  var polygon = L.polygon([
//    [59.8773,8.59516],
//    [59.87766,8.59692],
//    [59.87792,8.59659],
//    [59.8778,8.59568],[59.87758,8.595],],
//     {weight: 1, color: 'grey', fillColor:'brown'}).addTo(verdensarvkart).on('click', function() {

//      document.getElementById('slidercontent').innerHTML =
//      "<h1>Melandstangen</h1>";$slider.setAttribute('class', 'slide-in');
//    });

//  // Torget
//  var polygon = L.polygon([
//    [59.8785,8.59491],
//    [59.87825,8.59403],
//    [59.87835,8.5934],
//    [59.87882,8.59333],[59.87891,8.59479],],
//     {weight: 1, color: 'grey', fillColor:'green'}).addTo(verdensarvkart).on('click', function() {

//      document.getElementById('slidercontent').innerHTML =
//      "<h1>Torget</h1>";$slider.setAttribute('class', 'slide-in');
//    });

//  // Nybyen vest

//  var polygon = L.polygon([
//    [59.87844,8.59701],
//    [59.87823,8.5949],
//    [59.87887,8.59488],
//    [59.87897,8.59643],[59.87863,8.59655],
//    [59.87869,8.59692],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart).on('click', function() {

//      document.getElementById('slidercontent').innerHTML =
//      "<h1>Nybyen</h1>";$slider.setAttribute('class', 'slide-in');
//    });

//    // Nybyen øst
//    var polygon = L.polygon([
//      [59.87864,8.5979],
//      [59.87959,8.59789],
//      [59.87967,8.60532],
//      [59.87949,8.60531],[59.87931,8.60291],
//      [59.87925,8.60074],[59.87889,8.60029],],
//       {weight: 1, color: 'grey', fillColor:'blue'}).addTo(verdensarvkart).on('click', function() {

//        document.getElementById('slidercontent').innerHTML =
//        "<h1>Nybyen</h1>";$slider.setAttribute('class', 'slide-in');
//      });

//  // Tyskerbyen
//  var polygon = L.polygon([
//    [59.87814,8.59371],
//    [59.87797,8.59422],
//    [59.87761,8.5931],
//    [59.87743,8.59154],
//    [59.87763,8.59119],
//    [59.87826,8.59089],
//    [59.87878,8.59047],
//    [59.87907,8.59295],
//    [59.87891,8.59301],
//    [59.87882,8.59306],
//    [59.87883,8.5933],[59.87834,8.59317],],
//     {weight: 1, color: 'grey', fillColor:'black'}).addTo(verdensarvkart).on('click', function() {

//      document.getElementById('slidercontent').innerHTML =
//      "<h1>Tyskerbyen</h1><p>over Sam Eydes gate";$slider.setAttribute('class', 'slide-in');
//    });



// Rødbyen
var polygon = L.polygon([
  [59.8775290413323,8.59115863970161],
  [59.8782010092891,8.59082074676582],
  [59.878106178211,8.59000957998899],
  [59.8774342123408,8.59034748831503],],
   {weight: 1, color: 'grey', fillColor:'red'}).addTo(verdensarvkart).on('click', function() {

    document.getElementById('slidercontent').innerHTML =
    "<div style='display:block;border:1px solid lime;overflow: hidden;'><h1>RØDBYEN...</h1><img src='http://www.perberntsen.com/_commercial/rjukan-notodden/rju_2013-05-07_146.jpg' style='width: 350px;max-width:100%; height:auto; float:right;'><p>Hustypene i rødbyen er av type J1.</p><p>Plasseringen av bebyggelsen i Rødbyen er strengt organisert. I nord-syd-retning er bebyggelsen speilvendt omkring en akse midt gjennom kvartalene. De seks nederste bygningene ligger med eksakt samme //avstand seg i mellom.</div></p><p><div class='row' style='white-space: nowrap;display:block;border: 1px solid lime;overflow:hidden;'><img src = 'assets/img/rodbyen/bebyggelsesstruktur_rodbyen.jpg' style='height: 380px;max-width:100%; height:auto; float:right;'><img src = 'assets/img/rodbyen/bebyggelsesstruktur_rodbyen3.jpg' style='height:380px; max-width:100%; height:auto; float:left;></div></p><p><a href='http://www.tinn-kommune.com/Arkitektur/Delrapport_Rjukan_red.pdf'>Les mer om //Rødbyen</a></p>";
    $slider.setAttribute('class', 'slide-in');
  });

var polygon = L.polygon([
    [59.8782845148965,8.59079049679921],
    [59.8781896836314,8.58997932807604],
    [59.8783911052581,8.58986727601919],
    [59.8784859365,8.59067844474]
  ], {weight: 1, color: 'grey', fillColor:'red'}).addTo(verdensarvkart);

var polygon = L.polygon([
  [59.8778232371038,8.59076490571667],
    [59.8778182813685,8.59072763353724],
    [59.8778576463459,8.59070696480661],
    [59.877862978001,8.59074673319095],
    [59.8778957897264,8.59072953892583],
    [59.8779147309768,8.59087810300724],
    [59.8778108362738,8.5909326103945],
    [59.8777907037286,8.59078209648841],],
     {weight: 1, color: 'grey', fillColor:'#ff0800'}).addTo(verdensarvkart).on('click', function() {
          $slider.setAttribute('class', 'slide-in');
          document.getElementById('slidercontent').innerHTML =
          "<h1>RØDBYEN</h1><p>Professor Tronstad gate 2.</p><p><img src='http://www.perberntsen.com/_commercial/rjukan-notodden/rju_2013-05-07_146.jpg' style = 'width: 350px;'><a href='http://www.tinn-kommune.com/Arkitektur/Delrapport_Rjukan_red.pdf'></p><p>Les mer om Rødbyen</a>";
    });