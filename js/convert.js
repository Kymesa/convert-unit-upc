// ====================================
//  Global Variable & Data Definitions
// ====================================
var property = new Array();
var unit = new Array();
var factor = new Array();

property[0] = "Aceleracion";
unit[0] = new Array(
  "(M/s²)",
  "(Pie/s²)",
  "Gravedad (tierra 9.81 m/s2)",
  "Galileo (gal)",
  "(Pulgada/s²)"
);
factor[0] = new Array(1, 0.3048, 9.80665, 0.01, 2.54e-2);

property[1] = "Area";
unit[1] = new Array(
  "Metro cuadrado (m^2)",
  "Acre (acre)",
  "Área",
  "Hectárea",
  "Rood",
  "Centímetro cuadrado",
  "Kilometro cuadrado",
  "Pie cuadrado (pie^2)",
  "Pulgada cuadrada (pulgada^2)",
  "Milla cuadrada (milla^2)",
  "Yarda cuadrada (yarda^2)"
);
factor[1] = new Array(
  1,
  4046.856,
  100,
  1e-28,
  10000,
  1011.71413184285,
  0.0001,
  1000000,
  5.067075e-10,
  9.290304e-2,
  6.4516e-4,
  2589988,
  0.8361274
);

property[2] = "Torque";
unit[2] = new Array("Newton Metro", "Dina Centímetro (dy cm)");
factor[2] = new Array(1, 0.0000001, 9.80665, 0.1129848, 1.355818);

property[3] = "Electricidad";
unit[3] = new Array(
  "Coulomb",
  "Abcoulomb",
  "Amperio Hora",
  "Faraday (F)",
  "Statcoulomb",
  "Millifaraday",
  "Microfaraday",
  "Picofaraday"
);
factor[3] = new Array(
  1,
  10,
  3600,
  96521.8999999997,
  0.000000000333564,
  96.5219,
  9.65219e-2,
  9.65219e-5
);

property[4] = "Energía";
unit[4] = new Array(
  "Joule (J)",
  "Unidad Térmica Británica",
  "Caloría",
  "Electronvoltio (eV)",
  "Ergio",
  "pie-libra fuerza",
  "kilocaloría",
  "Kilovatio-hora",
  "Vatio Hora",
  "Vatio Segundo "
);
factor[4] = new Array(
  1,
  1055.87,
  4.1868,
  1.6021e-19,
  0.0000001,
  1.355818,
  4186.8,
  3600000,
  3600,
  1
);

property[5] = "Fuerza";
unit[5] = new Array(
  "Newton",
  "Dina",
  "fuerza de kilogramo",
  "Kilopondio de fuerza",
  "Onza de fuerza",
  "Libra de fuerza"
);
factor[5] = new Array(1, 0.00001, 9.80665, 9.80665, 0.2780139, 0.4535924);

property[6] = "Fuerza / Longitud";
unit[6] = new Array("Newton/metro", "Libra fuerza/pulgada", "Libra fuerza/pie");
factor[6] = new Array(1, 175.1268, 14.5939);

property[7] = "Longitud";
unit[7] = new Array(
  "Metro",
  "Caliber (cal)",
  "Calibre",
  "Kilómetro",
  "Pie",
  "Pulgada",
  "Micrómetro",
  "Milímetro",
  "Nanómetro",
  "Milla (nautica)",
  "Milla"
);
factor[7] = new Array(
  1,
  0.000254,
  0.01,
  1000,
  0.3048,
  0.0254,
  0.000001,
  0.001,
  1e-9,
  1852,
  1609.344
);

property[8] = "Masa";
unit[8] = new Array(
  "Kilogramo",
  "Gramo",
  "Miligramo",
  "Microgramo",
  "Tonelada (larga)",
  "Tonelada (corta)",
  "Tonelada"
);
factor[8] = new Array(1, 0.001, 1e-6, 0.000000001, 1016.047, 907.1847, 1000);

property[9] = "Densidad y capacidad de masa";
unit[9] = new Array(
  "Kilogramo/metro cúbico",
  "Gramos/cm^3",
  "Libra masa/pie cúbico",
  "Libra de masa/pulgada cúbica",
  "Onzas/galón",
  "Onzas (masa)/pulgada",
  "Libra masa/galón"
);
factor[9] = new Array(
  1,
  1000,
  16.01846,
  27679.91,
  7.489152,
  1729.994,
  119.8264
);

property[10] = "Fuerza";
unit[10] = new Array(
  "Vatio (W)",
  "Kilovatio (kW)",
  "Megavatio (MW)",
  "Milivatios (mW)",
  "Calorías (termo)/seg",
  "Calorías (termo)/min",
  "Ergio/seg",
  "Libra-pie fuerza/hora",
  "Libra-pie de fuerza/min",
  "Fuerza-libra-pie/seg",
  "Kilocaloría (termo)/min",
  "Kilocaloría (termo)/seg"
);
factor[10] = new Array(
  1,
  1000,
  1000000,
  0.001,
  4.184,
  6.973333e-2,
  0.0000001,
  0.0003766161,
  0.02259697,
  1.355818,
  69.7333,
  4184
);
// // !!! Caution: Temperature requires an increment as well as a multiplying factor
// !!! and that's why it's handled differently
// !!! Be VERY careful in how you change this behavior
property[11] = "Temperature";
unit[11] = new Array(
  "Grados Celsius ('C)",
  "Grados Fahrenheit ('F)",
  "Grados Kelvin ('K)",
  "Grados Rankine ('R)"
);
factor[11] = new Array(1, 0.555555555555, 1, 0.555555555555);
tempIncrement = new Array(0, -32, -273.15, -491.67);

property[12] = "Tiempo";
unit[12] = new Array("Segundo", "día", "Hora", "Minuto", "Mes", "Año");
factor[12] = new Array(1, 8.64e4, 3600, 60, 2628000, 31536000);

// property[16] = "Velocity & Speed";
// unit[16] = new Array(
//   "Meter/second (m/sec)",
//   "Foot/minute (ft/min)",
//   "Foot/second (ft/sec)",
//   "Kilometer/hour (kph)",
//   "Knot (int'l)",
//   "Mile (US)/hour (mph)",
//   "Mile (nautical)/hour",
//   "Mile (US)/minute",
//   "Mile (US)/second",
//   "Speed of light (c)",
//   "Mach (STP)(a)"
// );
// factor[16] = new Array(
//   1,
//   5.08e-3,
//   0.3048,
//   0.2777778,
//   0.5144444,
//   0.44707,
//   0.514444,
//   26.8224,
//   1609.344,
//   299792458,
//   340.006875
// );

// property[17] = "Viscosity";
// unit[17] = new Array(
//   "Newton-second/meter",
//   "Centipoise",
//   "Centistoke",
//   "Sq.foot/second",
//   "Poise",
//   "Poundal-second/sq.foot",
//   "Pound mass/foot-second",
//   "Pound force-second/sq.foot",
//   "Rhe",
//   "Slug/foot-second",
//   "Stoke"
// );
// factor[17] = new Array(
//   1,
//   0.001,
//   0.000001,
//   9.290304e-2,
//   0.1,
//   1.488164,
//   1.488164,
//   47.88026,
//   10,
//   47.88026,
//   0.0001
// );

// property[18] = "Volume & Capacity";
// unit[18] = new Array(
//   "Cubic Meter (m^3)",
//   "Cubic centimeter",
//   "Cubic millimeter",
//   "Acre-foot",
//   "Barrel (oil)",
//   "Board foot",
//   "Bushel (US)",
//   "Cup",
//   "Fluid ounce (US)",
//   "Cubic foot",
//   "Gallon (UK)",
//   "Gallon (US,dry)",
//   "Gallon (US,liq)",
//   "Gill (UK)",
//   "Gill (US)",
//   "Cubic inch (in^3)",
//   "Liter (new)",
//   "Liter (old)",
//   "Ounce (UK,fluid)",
//   "Ounce (US,fluid)",
//   "Peck (US)",
//   "Pint (US,dry)",
//   "Pint (US,liq)",
//   "Quart (US,dry)",
//   "Quart (US,liq)",
//   "Stere",
//   "Tablespoon",
//   "Teaspoon",
//   "Ton (register)",
//   "Cubic yard"
// );
// factor[18] = new Array(
//   1,
//   0.000001,
//   0.000000001,
//   1233.482,
//   0.1589873,
//   0.002359737,
//   0.03523907,
//   0.0002365882,
//   0.00002957353,
//   0.02831685,
//   0.004546087,
//   0.004404884,
//   0.003785412,
//   0.0001420652,
//   0.0001182941,
//   0.00001638706,
//   0.001,
//   0.001000028,
//   0.00002841305,
//   0.00002957353,
//   8.809768e-3,
//   0.0005506105,
//   4.731765e-4,
//   0.001101221,
//   9.46353e-4,
//   1,
//   0.00001478676,
//   0.000004928922,
//   2.831685,
//   0.7645549
// );

// property[19] = "Volume Flow";
// unit[19] = new Array(
//   "Cubic meter/second",
//   "Cubic foot/second",
//   "Cubic foot/minute",
//   "Cubic inches/minute",
//   "Gallons (US,liq)/minute)"
// );
// factor[19] = new Array(1, 0.02831685, 0.0004719474, 2.731177e-7, 6.30902e-5);

// ===========
//  Functions
// ===========

function UpdateUnitMenu(propMenu, unitMenu) {
  // Updates the units displayed in the unitMenu according to the selection of property in the propMenu.
  var i;
  i = propMenu.selectedIndex;
  FillMenuWithArray(unitMenu, unit[i]);
}

function FillMenuWithArray(myMenu, myArray) {
  // Fills the options of myMenu with the elements of myArray.
  // !CAUTION!: It replaces the elements, so old ones will be deleted.
  var i;
  myMenu.length = myArray.length;
  for (i = 0; i < myArray.length; i++) {
    myMenu.options[i].text = myArray[i];
  }
}

function CalculateUnit(sourceForm, targetForm) {
  // A simple wrapper function to validate input before making the conversion
  var sourceValue = sourceForm.unit_input.value;

  // First check if the user has given numbers or anything that can be made to one...
  sourceValue = parseFloat(sourceValue);
  if (!isNaN(sourceValue) || sourceValue == 0) {
    // If we can make a valid floating-point number, put it in the text box and convert!
    sourceForm.unit_input.value = sourceValue;
    ConvertFromTo(sourceForm, targetForm);
  }
}

function ConvertFromTo(sourceForm, targetForm) {
  // Converts the contents of the sourceForm input box to the units specified in the targetForm unit menu and puts the result in the targetForm input box.In other words, this is the heart of the whole script...
  var propIndex;
  var sourceIndex;
  var sourceFactor;
  var targetIndex;
  var targetFactor;
  var result;

  // Start by checking which property we are working in...
  propIndex = document.property_form.the_menu.selectedIndex;

  // Let's determine what unit are we converting FROM (i.e. source) and the factor needed to convert that unit to the base unit.
  sourceIndex = sourceForm.unit_menu.selectedIndex;
  sourceFactor = factor[propIndex][sourceIndex];

  // Cool! Let's do the same thing for the target unit - the units we are converting TO:
  targetIndex = targetForm.unit_menu.selectedIndex;
  targetFactor = factor[propIndex][targetIndex];

  // Simple, huh? let's do the math: a) convert the source TO the base unit: (The input has been checked by the CalculateUnit function).

  result = sourceForm.unit_input.value;
  // Handle Temperature increments!
  if (property[propIndex] == "Temperature") {
    result = parseFloat(result) + tempIncrement[sourceIndex];
  }
  result = result * sourceFactor;

  // not done yet... now, b) use the targetFactor to convert FROM the base unit
  // to the target unit...
  result = result / targetFactor;
  // Again, handle Temperature increments!
  if (property[propIndex] == "Temperature") {
    result = parseFloat(result) - tempIncrement[targetIndex];
  }

  // Ta-da! All that's left is to update the target input box:
  targetForm.unit_input.value = result;
}

// This fragment initializes the property dropdown menu using the data defined above in the 'Data Definitions' section
window.onload = function (e) {
  FillMenuWithArray(document.property_form.the_menu, property);
  UpdateUnitMenu(document.property_form.the_menu, document.form_A.unit_menu);
  UpdateUnitMenu(document.property_form.the_menu, document.form_B.unit_menu);
};

// Restricting textboxes to accept numbers + navigational keys only
/*$(document).getElementsByClass('numbersonly').addEventListener('keydown', function(e) {
  var key = e.keyCode ? e.keyCode : e.which;

  if (!([8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
      (key == 65 && (e.ctrlKey || e.metaKey)) || // Select All
      (key == 67 && (e.ctrlKey || e.metaKey)) || // Copy
      (key == 86 && (e.ctrlKey || e.metaKey)) || // Paste
      (key >= 35 && key <= 40) || // End, Home, Arrows
      (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) || // Numeric Keys
      (key >= 96 && key <= 105) // Numpad
      (key == 190) // Numpad
    )) e.preventDefault();
});*/
