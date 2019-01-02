//  Building-polygons
//  BYGNINGSPOLYGONER
//  Vemork
let houses = {
"type": "FeatureCollection",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Adresse": "Adresse", "Hustype": "Hustype", "iframeResource": "rodbyen.html", "color": "#000", "fillcolor": "blue","opacity": "0.65", "weight": "1"}, "geometry": { "type": "Polygon", "coordinates": [ [[8.59076490571667, 59.8778232371038],
      [8.59072763353724, 59.8778182813685],
      [8.59070696480661, 59.8778576463459],
      [8.59074673319095, 59.877862978001],
      [8.59072953892583, 59.8778957897264],
      [8.59087810300724, 59.8779147309768],
      [8.5909326103945, 59.8778108362738],
      [8.59078209648841, 59.8777907037286] ] ] } }
]
};


  // var polygon = L.polygon([
  //     [59.8709698415702,8.49033216566921],
  //     [59.8710805412389,8.49032725709063],
  //     [59.8711905308691,8.49032450245748],
  //     [59.871193408182,8.49065056908249],
  //     [59.8712743035153,8.49064772465232],
  //     [59.8712751507994,8.49074843834218],
  //     [59.8712687673609,8.49074871453534],
  //     [59.8712727742914,8.491204780634],
  //     [59.8712761877365,8.49120276396395],
  //     [59.8712772158269,8.49126204125097],
  //     [59.8712783881667,8.49133310349975],
  //     [59.87127842009,8.49140882659434],
  //     [59.871278539858,8.49146311714508],
  //     [59.8712752915152,8.4914613808077],
  //     [59.8712792973564,8.49191780425977],
  //     [59.8712853126551,8.49191753390637],
  //     [59.8712861437926,8.49201664055777],
  //     [59.8712033635062,8.49201968900499],
  //     [59.8712062049375,8.49233986283903],
  //     [59.8711069950112,8.49234137496378],
  //     [59.8711111474028,8.49281333149514],
  //     [59.8711885319675,8.49281054578691],
  //     [59.8711897816399,8.49294857903675],
  //     [59.8711909599753,8.49308911368124],
  //     [59.8710065522372,8.49309549204159],
  //     [59.870930236175,8.49309826080899],
  //     [59.8708477065829,8.4931011241243],
  //     [59.8708456390642,8.49286487968104],
  //     [59.8707934746892,8.49286674546499],
  //     [59.8707914143156,8.49263246580582],
  //     [59.8708424114054,8.49263061743603],
  //     [59.8708387748092,8.49222509271088],
  //     [59.8708457688295,8.4922248074964],
  //     [59.870844657071,8.49209945355091],
  //     [59.8709854560898,8.4920944490675],
  //   ], {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map).bindPopup("Vemork");

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
//       {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map);

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
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map);

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
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map);

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
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map);

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
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map);

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
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map);

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
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map);

//  // Våer 15
//  var polygon = L.polygon([
//    [59.8758929365872,8.49509844190627],
//    [59.8759255485956,8.49538391522615],
//    [59.875844611191,8.49542032938785],
//    [59.875811999262,8.49513485672534],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map);

//  // Våer 18
//  var polygon = L.polygon([
//    [59.8761354274818,8.49983943025834],
//    [59.8761932870805,8.49970566825152],
//    [59.8762979497619,8.49988450219822],
//    [59.8762401714723,8.50001844171291],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map);

//  // Våer 19
//  var polygon = L.polygon([
//    [59.8760275177464,8.49942040394147],
//    [59.8761331602144,8.49959940000416],
//    [59.8760748695633,8.49973549047673],
//    [59.8759692266007,8.49955631568555],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map);

//  // Våer 20
//  var polygon = L.polygon([
//    [59.8758624613688,8.49913388141305],
//    [59.8759665057924,8.49931522175216],
//    [59.8759082011844,8.49944756127276],
//    [59.8758041389837,8.49926622110585],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map);

//  // Våer 21
//  var polygon = L.polygon([
//    [59.8756857396747,8.4988284252594],
//    [59.8758016211468,8.49902905491773],
//    [59.875743587555,8.49916174744387],
//    [59.8756277062838,8.49896111767139],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map);

//  // Våer 22
//  var polygon = L.polygon([
//    [59.8755075149027,8.49852460251365],
//    [59.8756249322621,8.49872520692955],
//    [59.8755678666783,8.49885734886665],
//    [59.8754503687071,8.49865674554314],
//    [59.8754503687071,8.49865674554314],],
//     {weight: 1, color: 'grey', fillColor:'blue'}).addTo(map);

//  var polygon = L.polygon([
//    [59.878778, 8.595046419904585],
//    [59.878688, 8.595081802602891],
//    [59.878716, 8.595356204986005],
//    [59.878805, 8.595320823211681],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(map).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878729, 8.595477698387103],
//    [59.878817, 8.595442500896066],
//    [59.878845, 8.595716546299636],
//    [59.878756, 8.595751744179731],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(map).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878786, 8.59587356560656],
//    [59.878813, 8.59615011960532],
//    [59.878902, 8.596115632658332],
//    [59.878875, 8.595839256681824],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(map).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878591, 8.596866619665943],
//    [59.878498, 8.596901095252915],
//    [59.878476, 8.596627937182647],
//    [59.878564, 8.596593460789193],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(map).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878524, 8.596479261442695],
//    [59.878495, 8.596490330472052],
//    [59.878498, 8.596513525388449],
//    [59.878448, 8.596532707339719],
//    [59.878445, 8.59650951343601],
//    [59.878436, 8.59651301718321],
//    [59.87841, 8.59623771420118],
//    [59.878498, 8.596203957869674],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(map).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878484, 8.596063545146941],
//    [59.878395, 8.596098024062508],
//    [59.878368, 8.595823797749741],
//    [59.878457, 8.595789139618016],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(map).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878374, 8.595691541065466],
//    [59.878462, 8.595656354445587],
//    [59.878434, 8.595382670582385],
//    [59.878346, 8.595417857895555],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(map).bindPopup("Type O");

//  var polygon = L.polygon([
//    [59.878422, 8.595256889139532],
//    [59.878333, 8.59529118496481],
//    [59.878307, 8.59501945508418],
//    [59.878395, 8.594985337191646],],
//     {weight: 1, color: 'grey', fillColor: 'blue'}).addTo(map).bindPopup("Type O");

//  // Torget
  // var polygon = L.polygon([
  //   [59.878763, 8.593709176046152],
  //   [59.878491, 8.593787517988031],
  //   [59.878472, 8.593523915838876],
  //   [59.878745, 8.59344806059727],],
  //    {weight: 1, fillColor: 'green', color: 'grey'}).addTo(map).bindPopup("Torget 1").on('click', function() {document.getElementById('slidercontent').style.visibility = 'visible';});
  // var polygon = L.polygon([
  //   [59.878551, 8.594595452685641],
  //   [59.87857, 8.594857631245073],
  //   [59.878849, 8.594777960266231],
  //   [59.87883, 8.594515779447217],],
  //    {weight: 1, fillColor: 'green', color: 'grey'}).addTo(map).bindPopup("Torget 2").on('click', function() {
  //     $slider.setAttribute('class', 'slide-in');
  //     document.getElementById('slidercontent').innerHTML = " ";
  //   });

// let houses = {
// 	"type": "FeatureCollection",
// 	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
// 	"features": [
// 	{ "type": "Feature", "properties": { "Address": "Husadresse", "iframeResource": "housetype.html", "color": "#000", "fillcolor": "blue","opacity": "0.65", "weight": "1"}, "geometry": { "type": "Polygon", "coordinates": [ [ [59.878763, 8.593709176046152], [59.878491, 8.593787517988031], [59.878472, 8.593523915838876], [59.878745, 8.59344806059727] ] ] } }
// ]
// };



// let points = {
// "type": "FeatureCollection",
// "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
// "features": [
// { "type": "Feature", "properties": { "Houses": null, "ID2": 1 }, "geometry": { "type": "Point", "coordinates": [ 8.607864398262384, 59.879004941872921 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 2 }, "geometry": { "type": "Point", "coordinates": [ 8.608338153310276, 59.879063454777999 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 3 }, "geometry": { "type": "Point", "coordinates": [ 8.608912575359257, 59.879085315181925 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 4 }, "geometry": { "type": "Point", "coordinates": [ 8.608912575359257, 59.879085315181925 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 5 }, "geometry": { "type": "Point", "coordinates": [ 8.609279616960981, 59.87912671266583 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 6 }, "geometry": { "type": "Point", "coordinates": [ 8.609835135859965, 59.879051100413626 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 7 }, "geometry": { "type": "Point", "coordinates": [ 8.610229968202168, 59.879001883062088 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 8 }, "geometry": { "type": "Point", "coordinates": [ 8.610632934736946, 59.87882840355126 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 9 }, "geometry": { "type": "Point", "coordinates": [ 8.610805568293914, 59.878922967067957 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 10 }, "geometry": { "type": "Point", "coordinates": [ 8.611266198544577, 59.878961276348058 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 11 }, "geometry": { "type": "Point", "coordinates": [ 8.611527308338852, 59.878918378668402 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 12 }, "geometry": { "type": "Point", "coordinates": [ 8.611768371332486, 59.878875421411351 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 13 }, "geometry": { "type": "Point", "coordinates": [ 8.61200528488861, 59.879188511230332 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 14 }, "geometry": { "type": "Point", "coordinates": [ 8.61168383869156, 59.879248027339784 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 15 }, "geometry": { "type": "Point", "coordinates": [ 8.611348948675518, 59.879314221124581 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 16 }, "geometry": { "type": "Point", "coordinates": [ 8.61100753215174, 59.879366958577862 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 17 }, "geometry": { "type": "Point", "coordinates": [ 8.610666075273878, 59.879423054083134 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 18 }, "geometry": { "type": "Point", "coordinates": [ 8.610240501437206, 59.879243766133499 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 19 }, "geometry": { "type": "Point", "coordinates": [ 8.61176249667675, 59.879379262215174 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 20 }, "geometry": { "type": "Point", "coordinates": [ 8.612122941196132, 59.87941391421959 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 21 }, "geometry": { "type": "Point", "coordinates": [ 8.60786945218892, 59.88027803860151 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 22 }, "geometry": { "type": "Point", "coordinates": [ 8.609256598021901, 59.880020572748506 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 23 }, "geometry": { "type": "Point", "coordinates": [ 8.609481392072091, 59.880226141417367 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 24 }, "geometry": { "type": "Point", "coordinates": [ 8.610029853160807, 59.8801840979446 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 25 }, "geometry": { "type": "Point", "coordinates": [ 8.610491207252878, 59.880161949067926 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 26 }, "geometry": { "type": "Point", "coordinates": [ 8.611026733085399, 59.88008291362388 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 27 }, "geometry": { "type": "Point", "coordinates": [ 8.61172821637726, 59.88009841860196 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 28 }, "geometry": { "type": "Point", "coordinates": [ 8.612637281259707, 59.880077580620068 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 29 }, "geometry": { "type": "Point", "coordinates": [ 8.61352655925489, 59.880322043541184 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 30 }, "geometry": { "type": "Point", "coordinates": [ 8.612803499983755, 59.880437487829212 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 31 }, "geometry": { "type": "Point", "coordinates": [ 8.613258162757123, 59.87984091149174 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 32 }, "geometry": { "type": "Point", "coordinates": [ 8.613637335371866, 59.879989822113906 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 33 }, "geometry": { "type": "Point", "coordinates": [ 8.614117407646114, 59.880081923238365 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 34 }, "geometry": { "type": "Point", "coordinates": [ 8.614697134119682, 59.880224699821312 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 35 }, "geometry": { "type": "Point", "coordinates": [ 8.614118211711132, 59.880589142595923 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 36 }, "geometry": { "type": "Point", "coordinates": [ 8.615547894097727, 59.880623552850338 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 37 }, "geometry": { "type": "Point", "coordinates": [ 8.6159579224441, 59.88041648719053 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 38 }, "geometry": { "type": "Point", "coordinates": [ 8.612705391695089, 59.879105334783866 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 39 }, "geometry": { "type": "Point", "coordinates": [ 8.612910232607515, 59.879304120849234 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 40 }, "geometry": { "type": "Point", "coordinates": [ 8.613155832403478, 59.879445922334497 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 41 }, "geometry": { "type": "Point", "coordinates": [ 8.613039496211016, 59.879106316329477 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 42 }, "geometry": { "type": "Point", "coordinates": [ 8.613366996664503, 59.879100559543666 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 43 }, "geometry": { "type": "Point", "coordinates": [ 8.613082008706609, 59.87889817982277 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 44 }, "geometry": { "type": "Point", "coordinates": [ 8.61333643364005, 59.878855258934685 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 45 }, "geometry": { "type": "Point", "coordinates": [ 8.613682670746668, 59.879538162349398 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 46 }, "geometry": { "type": "Point", "coordinates": [ 8.613731706055196, 59.879343480990485 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 47 }, "geometry": { "type": "Point", "coordinates": [ 8.613754246170046, 59.879128567627973 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 48 }, "geometry": { "type": "Point", "coordinates": [ 8.614035697034115, 59.879636609380121 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 49 }, "geometry": { "type": "Point", "coordinates": [ 8.614124589817484, 59.879462198938555 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 50 }, "geometry": { "type": "Point", "coordinates": [ 8.614220358379034, 59.879271013296332 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 51 }, "geometry": { "type": "Point", "coordinates": [ 8.613778500269742, 59.878765860910242 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 52 }, "geometry": { "type": "Point", "coordinates": [ 8.61421364902511, 59.878696595475866 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 53 }, "geometry": { "type": "Point", "coordinates": [ 8.614608626247577, 59.878633929231626 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 54 }, "geometry": { "type": "Point", "coordinates": [ 8.614990238018082, 59.878571222755241 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 55 }, "geometry": { "type": "Point", "coordinates": [ 8.615351880041146, 59.878501738777125 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 56 }, "geometry": { "type": "Point", "coordinates": [ 8.615666669317257, 59.878438835270153 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 57 }, "geometry": { "type": "Point", "coordinates": [ 8.615954574658929, 59.878389288877159 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 58 }, "geometry": { "type": "Point", "coordinates": [ 8.616362986249767, 59.878319938431247 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 59 }, "geometry": { "type": "Point", "coordinates": [ 8.614445419111593, 59.878878662723253 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 60 }, "geometry": { "type": "Point", "coordinates": [ 8.614438775959933, 59.878875284232095 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 61 }, "geometry": { "type": "Point", "coordinates": [ 8.614726881220241, 59.878808945830613 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 62 }, "geometry": { "type": "Point", "coordinates": [ 8.615055116281276, 59.878739364984312 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 63 }, "geometry": { "type": "Point", "coordinates": [ 8.615409884012241, 59.878686656031434 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 64 }, "geometry": { "type": "Point", "coordinates": [ 8.615938924968033, 59.878587427427085 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 65 }, "geometry": { "type": "Point", "coordinates": [ 8.616440925367186, 59.878514990424428 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 66 }, "geometry": { "type": "Point", "coordinates": [ 8.61663288502837, 59.878673424549227 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 67 }, "geometry": { "type": "Point", "coordinates": [ 8.616638020148349, 59.878807801621818 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 68 }, "geometry": { "type": "Point", "coordinates": [ 8.616636511919946, 59.878938800310927 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 69 }, "geometry": { "type": "Point", "coordinates": [ 8.6166683754383, 59.879073255134379 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 70 }, "geometry": { "type": "Point", "coordinates": [ 8.616686874984392, 59.879207671073296 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 71 }, "geometry": { "type": "Point", "coordinates": [ 8.614668915920246, 59.879198426554325 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 72 }, "geometry": { "type": "Point", "coordinates": [ 8.614778239038724, 59.878990484874436 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 73 }, "geometry": { "type": "Point", "coordinates": [ 8.61523883603342, 59.879032139212605 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 74 }, "geometry": { "type": "Point", "coordinates": [ 8.615746247552281, 59.879070569405968 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 75 }, "geometry": { "type": "Point", "coordinates": [ 8.615400835387154, 59.878891531887668 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 76 }, "geometry": { "type": "Point", "coordinates": [ 8.615841501885473, 59.878923048789005 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 77 }, "geometry": { "type": "Point", "coordinates": [ 8.615843051993116, 59.878788691171266 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 78 }, "geometry": { "type": "Point", "coordinates": [ 8.615776828523577, 59.879315869465486 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 79 }, "geometry": { "type": "Point", "coordinates": [ 8.616644500633337, 59.87940573193324 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 80 }, "geometry": { "type": "Point", "coordinates": [ 8.620850265611264, 59.87859493237724 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 81 }, "geometry": { "type": "Point", "coordinates": [ 8.620469085682311, 59.87862070746835 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 82 }, "geometry": { "type": "Point", "coordinates": [ 8.620061100498791, 59.87865312227806 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 83 }, "geometry": { "type": "Point", "coordinates": [ 8.620061100498791, 59.87865312227806 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 84 }, "geometry": { "type": "Point", "coordinates": [ 8.619713597884648, 59.878655478914439 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 85 }, "geometry": { "type": "Point", "coordinates": [ 8.619319705202528, 59.878624110096077 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 86 }, "geometry": { "type": "Point", "coordinates": [ 8.617938728493845, 59.878428647269935 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 87 }, "geometry": { "type": "Point", "coordinates": [ 8.618365796387486, 59.878480270628827 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 88 }, "geometry": { "type": "Point", "coordinates": [ 8.618759532627402, 59.878525078063774 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 89 }, "geometry": { "type": "Point", "coordinates": [ 8.61823587365223, 59.878738541371426 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 90 }, "geometry": { "type": "Point", "coordinates": [ 8.618126765560843, 59.878929691243094 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 91 }, "geometry": { "type": "Point", "coordinates": [ 8.618071074463753, 59.879124354908058 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 92 }, "geometry": { "type": "Point", "coordinates": [ 8.617935466862038, 59.879295273489497 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 93 }, "geometry": { "type": "Point", "coordinates": [ 8.617805152028243, 59.879587133177772 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 94 }, "geometry": { "type": "Point", "coordinates": [ 8.61774953506036, 59.879775078802929 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 95 }, "geometry": { "type": "Point", "coordinates": [ 8.617667188396169, 59.879962946849545 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 96 }, "geometry": { "type": "Point", "coordinates": [ 8.618155147929018, 59.879950925503493 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 97 }, "geometry": { "type": "Point", "coordinates": [ 8.618176966587939, 59.879796472313117 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 98 }, "geometry": { "type": "Point", "coordinates": [ 8.618238839742252, 59.879645494215758 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 99 }, "geometry": { "type": "Point", "coordinates": [ 8.618369305000813, 59.879340198332969 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 100 }, "geometry": { "type": "Point", "coordinates": [ 8.618485018185153, 59.879155785501531 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 101 }, "geometry": { "type": "Point", "coordinates": [ 8.618547273541946, 59.878971217827875 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 102 }, "geometry": { "type": "Point", "coordinates": [ 8.618622969210431, 59.878779970914984 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 103 }, "geometry": { "type": "Point", "coordinates": [ 8.619149889090066, 59.878865471202275 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 104 }, "geometry": { "type": "Point", "coordinates": [ 8.619643631576507, 59.878930719299284 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 105 }, "geometry": { "type": "Point", "coordinates": [ 8.619548125401314, 59.879101755273147 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 106 }, "geometry": { "type": "Point", "coordinates": [ 8.619452311128436, 59.879299662705463 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 107 }, "geometry": { "type": "Point", "coordinates": [ 8.619397011102446, 59.879460737511415 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 108 }, "geometry": { "type": "Point", "coordinates": [ 8.619127883462737, 59.879036719288848 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 109 }, "geometry": { "type": "Point", "coordinates": [ 8.619058949081046, 59.879221267920897 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 110 }, "geometry": { "type": "Point", "coordinates": [ 8.618990013931407, 59.879405816510982 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 111 }, "geometry": { "type": "Point", "coordinates": [ 8.619233297295629, 59.87975250211128 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 112 }, "geometry": { "type": "Point", "coordinates": [ 8.618879677647023, 59.879704453108907 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 113 }, "geometry": { "type": "Point", "coordinates": [ 8.618723948143614, 59.879882032389681 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 114 }, "geometry": { "type": "Point", "coordinates": [ 8.6205499038161, 59.879151670511028 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 115 }, "geometry": { "type": "Point", "coordinates": [ 8.620940783034666, 59.879448392090495 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 116 }, "geometry": { "type": "Point", "coordinates": [ 8.61194366067444, 59.879674132937353 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 117 }, "geometry": { "type": "Point", "coordinates": [ 8.611336560393834, 59.879588367368761 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 118 }, "geometry": { "type": "Point", "coordinates": [ 8.610192923639431, 59.879668965639901 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 119 }, "geometry": { "type": "Point", "coordinates": [ 8.617959080995668, 59.880209502323282 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 120 }, "geometry": { "type": "Point", "coordinates": [ 8.618314411194717, 59.880181979672955 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 121 }, "geometry": { "type": "Point", "coordinates": [ 8.618314411194717, 59.880181979672955 ] } },
// { "type": "Feature", "properties": { "Houses": null, "ID2": 122 }, "geometry": { "type": "Point", "coordinates": [ 8.618996628838122, 59.880130418309143 ] } }
// ]
// };
