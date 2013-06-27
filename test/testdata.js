// a set of points in map XY and Lon/Lat that are supposed to correspond between
// forward and invers transforms
proj4.defs([
  ["EPSG:54008","+proj=sinu +lon_0=0 +x_0=0 +y_0=0 +ellps=WGS84 +datum=WGS84 +units=m  no_defs"],
  ["EPSG:54009", "+proj=moll +lon_0=0 +units=m"],
  ["EPSG:102018", "+proj=gnom +lat_0=90 +lon_0=0 +x_0=6300000 +y_0=6300000 +ellps=WGS84 +datum=WGS84 +units=m +no_defs"]//,
]);/*
proj4.defs["WKT0"] = 'PROJCS["HARN/WI.SheboyganWI-M",GEOGCS["HARN/WI.LL",DATUM["HARN/WI",SPHEROID["GRS1980",6378137.000,298.25722210],TOWGS84[0.0000,0.0000,0.0000,0.000000,0.000000,0.000000,0.00000000]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]],PROJECTION["Transverse Mercator, Wisconsin County Variation"],PARAMETER["false_easting",79857.760],PARAMETER["false_northing",0.000],PARAMETER["scale_factor",1.000000000000],PARAMETER["central_meridian",-87.55000000000000],PARAMETER["latitude_of_origin",43.26666666670000],PARAMETER["Average Geoid Height (meters)",-34.0200],PARAMETER["Average Elevation (system unit)",182.8800],UNIT["Meter",1.00000000000000]]';
proj4.defs["WKT1"] = 'GEOGCS["WGS84 Lat/Long Degrees -180 ==> +180",DATUM["D_WGS_1984",SPHEROID["World_Geodetic_System_of_1984",6378137,298.257222932867]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]]',
proj4.defs["WKT2"] = 'PROJCS["ALG-S-AN",GEOGCS["VOIR1875",DATUM["VOIR1875",SPHEROID["CLRK-IGN",6378249.200,293.46602129],TOWGS84[-73.0000,-247.0000,227.0000,0.000000,0.000000,0.000000,0.00000000]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]],PROJECTION["Lambert Tangential Conformal Conic Projection"],PARAMETER["false_easting",500000.000],PARAMETER["false_northing",300000.000],PARAMETER["scale_factor",0.999625800000],PARAMETER["central_meridian",2.70000000000000],PARAMETER["latitude_of_origin",33.30000000000000],UNIT["Meter",1.00000000000000]]',
proj4.defs["WKT3"] = 'PROJCS["CANQ27-M15M",GEOGCS["LL27",DATUM["NAD27",SPHEROID["CLRK66",6378206.400,294.97869821]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]],PROJECTION["Transverse_Mercator"],PARAMETER["false_easting",304800.000],PARAMETER["false_northing",0.000],PARAMETER["scale_factor",0.999900000000],PARAMETER["central_meridian",-90.00000000000000],PARAMETER["latitude_of_origin",0.00000000000000],UNIT["Meter",1.00000000000000]]',
proj4.defs["WKT4"] = 'LOCAL_CS["Non-Earth (Meter)",LOCAL_DATUM["Local Datum",0],UNIT["Meter", 1],AXIS["X",EAST],AXIS["Y",NORTH]]',
proj4.defs["WKT5"] = 'PROJCS["SVY21",GEOGCS["SVY21[WGS84]",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",28001.642],PARAMETER["False_Northing",38744.572],PARAMETER["Central_Meridian",103.8333333333333],PARAMETER["Scale_Factor",1.0],PARAMETER["Latitude_Of_Origin",1.366666666666667],UNIT["Meter",1.0]]'
*/

var testPoints = [
  {code: 'EPSG:21781',
    xy: [660389.4751110513, 185731.68482649108],
    ll: [8.23, 46.82]
  },
  {code: 'EPSG:26986',
    xy: [ 231394.84,902621.11],
    ll: [-71.11881762742996,42.37346263960867]
  },
  {code: 'ESRI:102026',
    xy: [3257939.781874, 5459865.918947],
    ll: [45.17578125, 41.923828125]
  }/* reactivate once were done with tests,
  {code: 'EPSG:54029',
    xy: [2359523.653024, 3280192.180346],
    ll: [21.796875, 28.828125]
  }*/,
  {code: 'EPSG:54008',
    xy: [738509.49,5874620.38],
    ll: [11.0, 53.0]
  },
  {code: 'EPSG:3035',
    xy: [4388138.60, 3321736.46],
    ll: [11.0, 53.0]
  },
  {code: 'EPSG:102018',
    xy: [350577.5930806119, 4705857.070634324],
    ll: [-75,46]
  },
  {code: 'EPSG:2958',
    xy: [411461.807497, 4700123.744402],
    ll: [-82.07666015625, 42.448388671875]
  },
  {code: 'EPSG:54009',
    xy: [3891383.58309223, 6876758.9933288],
    ll: [60,60]
  }/*, 
  {code: 'EPSG:29100',
    xy: [5110899.06,10552971.81,-22.99],
    ll: [-53.0, 5.0,0.0]   
  },
  {code: 'EPSG:27700',
    xy: [343733.14, 612144.53, -51.89],
    ll: [-2.89, 55.4, 0]   
  },
  {code: 'EPSG:27492',
    xy: [25260.493584, -9579.245052],
    ll: [-7.84, 39.58]
  },
  {code: 'EPSG:3411',
    xy: [1070076.44,-4635010.27,-136.63],       
    ll: [-32, 48, 0]
  },
  {code: 'EPSG:2403',
    xy: [27500000.00,	4198690.08, -109.02],
    ll: [81, 37.92, 0] 
  },
  {code: 'EPSG:21781',
    xy: [660389.52, 185731.63, -49.23], 
    ll: [8.23, 46.82, 0]
  },
  {code: 'EPSG:27563',
    xy: [653704.865208, 176887.660037],
    ll: [3.005, 43.89]
  },
  {code: 'EPSG:54003',
    xy: [1223145.57,6491218.13,-6468.21],
    ll: [11.0, 53.0]
  },
  {code: 'EPSG:3573',
    xy: [2923052.02009, 1054885.46559],
    ll: [9.84375, 61.875]
  },
  {code: 'EPSG:54009',
    xy: [-10617602.79013849,4108337.84708608,0.00000000 ], 
    ll: [-119,34,0]
  },
  
  {code: 'EPSG:31466',
    xy: [2547685.01212,5699155.7345],
    ll: [6.685,51.425]
  },
  {code: 'EPSG:54008',
    xy: [738509.49,5874620.38],
    ll: [11.0, 53.0]
  },
  {code: 'EPSG:2057',
    xy: [-11608322.26,18282612.23,-281.67],
    ll: [-53.0, 5.0,0.0]
  },
  {code: 'EPSG:54009',
    xy: [804759.21,6164983.82,-13598.03],
    ll: [11.0, 53.0, 0.0]
  },
  {code: 'EPSG:3035',
    xy: [4388138.60, 3321736.46],
    ll: [11.0, 53.0]
  },
  {code: 'EPSG:54032',
    xy: [-4024426.19, 6432026.98],
    ll: [-127.0, 52.11]
  },
  {code: 'EPSG:3153',
    xy: [931625.91, 789252.65],
    ll: [-127.0, 52.11]
  },
  {code: 'EPSG:32615',
    xy: [500000, 4649776.22482],
    ll: [-93, 42]
  },
  {code: 'EPSG:26916',
    xy: [5110899.06,10552971.81,-22.99],
    ll: [-86.6056, 34.5790,0.0]   
  },
  {code: 'EPSG:32612',
    xy: [383357.429537, 6684599.06392],
    ll: [-113.109375, 60.28125]
  },
  {code: 'EPSG:3031',
    xy: [-992481.633786, 628482.06328],
    ll: [-57.65625, -79.21875]
  },
  {code: 'EPSG:31285',
    xy: [450055.70, 5262356.33],
    ll: [13.33333333333, 47.5]
  },
  {code: 'EPSG:2736',
    xy: [603933.40,	7677505.64],
    ll: [34.0, -21.0]
  },
  {code: 'EPSG:42304',
    xy: [-358185.267976, -40271.099023],
    ll: [-99.84375, 48.515625]
  },
  {code: 'google',
    xy: [-8531595.34908, 6432756.94421],
    ll: [-76.640625, 49.921875]
  },
  {code: 'EPSG:42304',
    xy: [-358185.267976, -40271.099023],
    ll: [-99.84375, 48.515625]
  },
  {code: 'EPSG:28992',
    xy: [148312.15,	457804.79, 698.48],
    ll: [5.29, 52.11]
  }*/
];
var aWKT = [
{
	name:'WGS84 Lat/Long Degrees -180 ==> +180',
	units:'Degree',
	proj:'longlat',
	wkt:'GEOGCS["WGS84 Lat/Long Degrees -180 ==> +180",DATUM["D_WGS_1984",SPHEROID["World_Geodetic_System_of_1984",6378137,298.257222932867]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]]'
},
{
	name:'ALG-S-AN',
	units:'Meter',
	proj:'lcc',
	wkt:'PROJCS["ALG-S-AN",GEOGCS["VOIR1875",DATUM["VOIR1875",SPHEROID["CLRK-IGN",6378249.200,293.46602129],TOWGS84[-73.0000,-247.0000,227.0000,0.000000,0.000000,0.000000,0.00000000]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]],PROJECTION["Lambert Tangential Conformal Conic Projection"],PARAMETER["false_easting",500000.000],PARAMETER["false_northing",300000.000],PARAMETER["scale_factor",0.999625800000],PARAMETER["central_meridian",2.70000000000000],PARAMETER["latitude_of_origin",33.30000000000000],UNIT["Meter",1.00000000000000]]'
},
{
	name:'CANQ27-M15M',
	units:'Meter',
	proj:'tmerc',
	wkt:'PROJCS["CANQ27-M15M",GEOGCS["LL27",DATUM["NAD27",SPHEROID["CLRK66",6378206.400,294.97869821]],PRIMEM["Greenwich",0],UNIT["Degree",0.017453292519943295]],PROJECTION["Transverse_Mercator"],PARAMETER["false_easting",304800.000],PARAMETER["false_northing",0.000],PARAMETER["scale_factor",0.999900000000],PARAMETER["central_meridian",-90.00000000000000],PARAMETER["latitude_of_origin",0.00000000000000],UNIT["Meter",1.00000000000000]]'
},
{
	name:'Non-Earth (Meter)',
	units:'Meter',
	proj:'identity',
	wkt:'LOCAL_CS["Non-Earth (Meter)",LOCAL_DATUM["Local Datum",0],UNIT["Meter", 1],AXIS["X",EAST],AXIS["Y",NORTH]]'
},
{
	name:'SVY21',
	units:'Meter',
	proj:'tmerc',
	wkt:'PROJCS["SVY21",GEOGCS["SVY21[WGS84]",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Transverse_Mercator"],PARAMETER["False_Easting",28001.642],PARAMETER["False_Northing",38744.572],PARAMETER["Central_Meridian",103.8333333333333],PARAMETER["Scale_Factor",1.0],PARAMETER["Latitude_Of_Origin",1.366666666666667],UNIT["Meter",1.0]]'
},
{
	name:'NAD_1983_StatePlane_Massachusetts_Mainland_FIPS_2001_Feet',
	units:"Foot_US",
	proj:'lcc',
	wkt:'PROJCS["NAD_1983_StatePlane_Massachusetts_Mainland_FIPS_2001_Feet",GEOGCS["GCS_North_American_1983",DATUM["D_North_American_1983",SPHEROID["GRS_1980",6378137.0,298.257222101]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]],PROJECTION["Lambert_Conformal_Conic"],PARAMETER["False_Easting",656166.6666666665],PARAMETER["False_Northing",2460625.0],PARAMETER["Central_Meridian",-71.5],PARAMETER["Standard_Parallel_1",41.71666666666667],PARAMETER["Standard_Parallel_2",42.68333333333333],PARAMETER["Latitude_Of_Origin",41.0],UNIT["Foot_US",0.3048006096012192]]'
}
];