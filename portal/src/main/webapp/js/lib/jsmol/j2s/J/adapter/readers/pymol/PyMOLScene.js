Clazz.declarePackage ("J.adapter.readers.pymol");
Clazz.load (["J.api.JmolSceneGenerator", "java.util.Hashtable", "J.util.BS", "$.JmolList", "$.P3"], "J.adapter.readers.pymol.PyMOLScene", ["java.lang.Boolean", "$.Character", "$.Double", "$.Float", "J.adapter.readers.pymol.JmolObject", "$.PyMOL", "$.PyMOLGroup", "J.atomdata.RadiusData", "J.constant.EnumVdw", "J.modelset.MeasurementData", "$.Text", "J.util.ArrayUtil", "$.BSUtil", "$.C", "$.ColorUtil", "$.Escape", "$.Logger", "$.Point3fi", "$.SB"], function () {
c$ = Clazz.decorateAsClass (function () {
this.viewer = null;
this.pymolVersion = 0;
this.bsHidden = null;
this.bsNucleic = null;
this.bsNonbonded = null;
this.bsLabeled = null;
this.bsHydrogen = null;
this.bsNoSurface = null;
this.htSpacefill = null;
this.ssMapAtom = null;
this.atomColorList = null;
this.occludedObjects = null;
this.labels = null;
this.colixes = null;
this.frameObj = null;
this.groups = null;
this.objectSettings = null;
this.bsCartoon = null;
this.htCarveSets = null;
this.htDefinedAtoms = null;
this.htHiddenObjects = null;
this.moleculeNames = null;
this.jmolObjects = null;
this.htAtomMap = null;
this.htObjectAtoms = null;
this.htObjectGroups = null;
this.htMeasures = null;
this.htObjectSettings = null;
this.objectInfo = null;
this.settings = null;
this.htStateSettings = null;
this.stateSettings = null;
this.uniqueSettings = null;
this.uniqueList = null;
this.bsUniqueBonds = null;
this.bgRgb = 0;
this.dotColor = 0;
this.surfaceMode = 0;
this.surfaceColor = 0;
this.cartoonColor = 0;
this.ribbonColor = 0;
this.sphereColor = 0;
this.labelFontId = 0;
this.labelColor = 0;
this.cartoonTranslucency = 0;
this.ribbonTranslucency = 0;
this.labelSize = 0;
this.meshWidth = 0;
this.nonbondedSize = 0;
this.nonbondedTranslucency = 0;
this.sphereScale = 0;
this.sphereTranslucency = 0;
this.stickTranslucency = 0;
this.transparency = 0;
this.cartoonLadderMode = false;
this.cartoonRockets = false;
this.haveNucleicLadder = false;
this.labelPosition = null;
this.labelPosition0 = null;
this.objectName = null;
this.objectNameID = null;
this.objectJmolName = null;
this.objectType = 0;
this.bsAtoms = null;
this.objectHidden = false;
this.reader = null;
this.uniqueIDs = null;
this.cartoonTypes = null;
this.sequenceNumbers = null;
this.newChain = null;
this.radii = null;
this.baseModelIndex = 0;
this.baseAtomIndex = 0;
this.stateCount = 0;
this.mepList = "";
this.doCache = false;
this.haveScenes = false;
this.bsCarve = null;
this.solventAccessible = false;
this.bsLineBonds = null;
this.bsStickBonds = null;
this.thisState = 0;
this.currentAtomSetIndex = 0;
this.surfaceInfoName = null;
Clazz.instantialize (this, arguments);
}, J.adapter.readers.pymol, "PyMOLScene", null, J.api.JmolSceneGenerator);
Clazz.prepareFields (c$, function () {
this.bsHidden =  new J.util.BS ();
this.bsNucleic =  new J.util.BS ();
this.bsNonbonded =  new J.util.BS ();
this.bsLabeled =  new J.util.BS ();
this.bsHydrogen =  new J.util.BS ();
this.bsNoSurface =  new J.util.BS ();
this.htSpacefill =  new java.util.Hashtable ();
this.ssMapAtom =  new java.util.Hashtable ();
this.atomColorList =  new J.util.JmolList ();
this.occludedObjects =  new java.util.Hashtable ();
this.labels =  new java.util.Hashtable ();
this.bsCartoon =  new J.util.BS ();
this.htCarveSets =  new java.util.Hashtable ();
this.htDefinedAtoms =  new java.util.Hashtable ();
this.htHiddenObjects =  new java.util.Hashtable ();
this.moleculeNames =  new J.util.JmolList ();
this.jmolObjects =  new J.util.JmolList ();
this.htAtomMap =  new java.util.Hashtable ();
this.htObjectAtoms =  new java.util.Hashtable ();
this.htObjectGroups =  new java.util.Hashtable ();
this.htMeasures =  new java.util.Hashtable ();
this.htObjectSettings =  new java.util.Hashtable ();
this.objectInfo =  new java.util.Hashtable ();
this.htStateSettings =  new java.util.Hashtable ();
this.labelPosition0 =  new J.util.P3 ();
this.bsLineBonds =  new J.util.BS ();
this.bsStickBonds =  new J.util.BS ();
});
$_M(c$, "clearReaderData", 
($fz = function () {
this.reader = null;
this.colixes = null;
this.atomColorList = null;
this.objectSettings = null;
this.stateSettings = null;
if (this.haveScenes) return;
this.settings = null;
this.groups = null;
this.labels = null;
this.ssMapAtom = null;
this.htSpacefill = null;
this.htAtomMap = null;
this.htMeasures = null;
this.htObjectGroups = null;
this.htObjectAtoms = null;
this.htObjectSettings = null;
this.htStateSettings = null;
this.htHiddenObjects = null;
this.objectInfo = null;
this.occludedObjects = null;
this.bsHidden = this.bsNucleic = this.bsNonbonded = this.bsLabeled = this.bsHydrogen = this.bsNoSurface = this.bsCartoon = null;
}, $fz.isPrivate = true, $fz));
$_M(c$, "setUniqueBond", 
function (index, uniqueID) {
if (uniqueID < 0) return;
if (this.uniqueList == null) {
this.uniqueList =  new java.util.Hashtable ();
this.bsUniqueBonds =  new J.util.BS ();
}this.uniqueList.put (Integer.$valueOf (index), Integer.$valueOf (uniqueID));
this.bsUniqueBonds.set (index);
}, "~N,~N");
$_M(c$, "setStateCount", 
function (stateCount) {
this.stateCount = stateCount;
}, "~N");
Clazz.makeConstructor (c$, 
function (reader, viewer, settings, uniqueSettings, pymolVersion, haveScenes, baseAtomIndex, baseModelIndex, doCache, filePath) {
this.reader = reader;
this.viewer = viewer;
this.settings = settings;
this.uniqueSettings = uniqueSettings;
this.pymolVersion = pymolVersion;
this.haveScenes = haveScenes;
this.baseAtomIndex = baseAtomIndex;
this.baseModelIndex = baseModelIndex;
this.doCache = doCache;
this.surfaceInfoName = filePath + "##JmolSurfaceInfo##";
this.setVersionSettings ();
settings.trimToSize ();
this.bgRgb = J.adapter.readers.pymol.PyMOLScene.colorSetting (J.adapter.readers.pymol.PyMOLScene.listAt (settings, 6));
J.adapter.readers.pymol.PyMOLScene.pointAt (J.adapter.readers.pymol.PyMOLScene.listAt (settings, 471).get (2), 0, this.labelPosition0);
}, "J.api.PymolAtomReader,J.viewer.Viewer,J.util.JmolList,java.util.Map,~N,~B,~N,~N,~B,~S");
$_M(c$, "setReaderObjectInfo", 
function (name, type, groupName, isHidden, listObjSettings, listStateSettings, ext) {
this.objectName = name;
this.objectHidden = isHidden;
this.objectNameID = (this.objectName == null ? null : J.adapter.readers.pymol.PyMOLScene.fixName (this.objectName + ext));
this.objectSettings =  new java.util.Hashtable ();
this.stateSettings =  new java.util.Hashtable ();
if (this.objectName != null) {
this.objectJmolName = J.adapter.readers.pymol.PyMOLScene.getJmolName (name);
if (groupName != null) {
this.htObjectGroups.put (this.objectName, groupName);
this.htObjectGroups.put (this.objectNameID, groupName);
}this.objectInfo.put (this.objectName, [this.objectNameID, Integer.$valueOf (type)]);
if (this.htObjectSettings.get (this.objectName) == null) {
J.adapter.readers.pymol.PyMOLScene.listToSettings (listObjSettings, this.objectSettings);
this.htObjectSettings.put (this.objectName, this.objectSettings);
}if (this.htStateSettings.get (this.objectNameID) == null) {
J.adapter.readers.pymol.PyMOLScene.listToSettings (listStateSettings, this.stateSettings);
this.htStateSettings.put (this.objectNameID, this.stateSettings);
}}this.getObjectSettings ();
}, "~S,~N,~S,~B,J.util.JmolList,J.util.JmolList,~S");
c$.listToSettings = $_M(c$, "listToSettings", 
($fz = function (list, objectSettings) {
if (list != null && list.size () != 0) {
for (var i = list.size (); --i >= 0; ) {
var setting = list.get (i);
objectSettings.put (setting.get (0), setting);
}
}}, $fz.isPrivate = true, $fz), "J.util.JmolList,java.util.Map");
$_M(c$, "getObjectSettings", 
($fz = function () {
this.transparency = this.floatSetting (138);
this.dotColor = Clazz.floatToInt (this.floatSetting (210));
this.nonbondedSize = this.floatSetting (65);
this.nonbondedTranslucency = this.floatSetting (524);
this.sphereScale = this.floatSetting (155);
this.cartoonColor = Clazz.floatToInt (this.floatSetting (236));
this.ribbonColor = Clazz.floatToInt (this.floatSetting (235));
this.sphereColor = Clazz.floatToInt (this.floatSetting (173));
this.cartoonTranslucency = this.floatSetting (279);
this.ribbonTranslucency = this.floatSetting (666);
this.stickTranslucency = this.floatSetting (198);
this.sphereTranslucency = this.floatSetting (172);
this.cartoonLadderMode = this.booleanSetting (448);
this.cartoonRockets = this.booleanSetting (180);
this.surfaceMode = Clazz.floatToInt (this.floatSetting (143));
this.surfaceColor = Clazz.floatToInt (this.floatSetting (144));
this.solventAccessible = this.booleanSetting (338);
this.meshWidth = this.floatSetting (90);
var carveSet = this.stringSetting (342).trim ();
if (carveSet.length == 0) {
this.bsCarve = null;
} else {
this.bsCarve = this.htCarveSets.get (carveSet);
if (this.bsCarve == null) this.htCarveSets.put (carveSet, this.bsCarve =  new J.util.BS ());
}this.labelPosition =  new J.util.P3 ();
try {
var setting = this.getObjectSetting (471);
J.adapter.readers.pymol.PyMOLScene.pointAt (J.adapter.readers.pymol.PyMOLScene.listAt (setting, 2), 0, this.labelPosition);
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
} else {
throw e;
}
}
this.labelPosition.add (this.labelPosition0);
this.labelColor = Clazz.floatToInt (this.floatSetting (66));
this.labelSize = this.floatSetting (453);
this.labelFontId = Clazz.floatToInt (this.floatSetting (328));
}, $fz.isPrivate = true, $fz));
$_M(c$, "setAtomInfo", 
function (uniqueIDs, cartoonTypes, sequenceNumbers, newChain, radii) {
this.uniqueIDs = uniqueIDs;
this.cartoonTypes = cartoonTypes;
this.sequenceNumbers = sequenceNumbers;
this.newChain = newChain;
this.radii = radii;
}, "~A,~A,~A,~A,~A");
$_M(c$, "setSceneObject", 
($fz = function (name, istate) {
this.objectName = name;
this.objectType = this.getObjectType (name);
this.objectJmolName = J.adapter.readers.pymol.PyMOLScene.getJmolName (name);
this.objectNameID = (istate == 0 && this.objectType != 0 ? this.getObjectID (name) : this.objectJmolName + "_" + istate);
this.bsAtoms = this.htObjectAtoms.get (name);
this.objectSettings = this.htObjectSettings.get (name);
this.stateSettings = this.htStateSettings.get (name + "_" + istate);
var groupName = this.htObjectGroups.get (name);
this.objectHidden = (this.htHiddenObjects.containsKey (name) || groupName != null && !this.groups.get (groupName).visible);
this.getObjectSettings ();
}, $fz.isPrivate = true, $fz), "~S,~N");
$_M(c$, "buildScene", 
function (name, thisScene, htObjNames, htSecrets) {
var frame = thisScene.get (2);
var smap =  new java.util.Hashtable ();
smap.put ("pymolFrame", frame);
smap.put ("generator", this);
smap.put ("name", name);
var view = J.adapter.readers.pymol.PyMOLScene.listAt (thisScene, 0);
if (view != null) smap.put ("pymolView", this.getPymolView (view, false));
var visibilities = thisScene.get (1);
smap.put ("visibilities", visibilities);
var sname = "_scene_" + name + "_";
var reps =  new Array (J.adapter.readers.pymol.PyMOL.REP_LIST.length);
for (var j = J.adapter.readers.pymol.PyMOL.REP_LIST.length; --j >= 0; ) {
var list = htObjNames.get (sname + J.adapter.readers.pymol.PyMOL.REP_LIST[j]);
var data = J.adapter.readers.pymol.PyMOLScene.listAt (list, 5);
if (data != null && data.size () > 0) reps[j] = J.adapter.readers.pymol.PyMOLScene.listToMap (data);
}
smap.put ("moleculeReps", reps);
sname = "_!c_" + name + "_";
var colorection = J.adapter.readers.pymol.PyMOLScene.listAt (thisScene, 3);
var n = colorection.size ();
var colors =  new Array (Clazz.doubleToInt (n / 2));
for (var j = 0, i = 0; j < n; j += 2) {
var color = J.adapter.readers.pymol.PyMOLScene.intAt (colorection, j);
var c = htSecrets.get (sname + color);
if (c != null && c.size () > 1) colors[i++] = [Integer.$valueOf (color), c.get (1)];
}
smap.put ("colors", colors);
this.addJmolObject (1073742139, null, smap).jmolName = name;
}, "~S,J.util.JmolList,java.util.Map,java.util.Map");
Clazz.overrideMethod (c$, "generateScene", 
function (scene) {
J.util.Logger.info ("PyMOLScene - generateScene " + scene.get ("name"));
this.jmolObjects.clear ();
this.bsHidden.clearAll ();
this.occludedObjects.clear ();
this.htHiddenObjects.clear ();
var frame = scene.get ("pymolFrame");
this.thisState = frame.intValue ();
this.addJmolObject (4115, null, Integer.$valueOf (this.thisState - 1));
try {
this.generateVisibilities (scene.get ("visibilities"));
this.generateColors (scene.get ("colors"));
this.generateShapes (scene.get ("moleculeReps"));
this.finalizeVisibility ();
this.offsetObjects ();
this.finalizeObjects ();
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
System.out.println ("PyMOLScene exception " + e);
if (!this.viewer.isJS) e.printStackTrace ();
} else {
throw e;
}
}
}, "java.util.Map");
$_M(c$, "generateColors", 
($fz = function (colors) {
if (colors == null) return;
for (var i = colors.length; --i >= 0; ) {
var item = colors[i];
var color = (item[0]).intValue ();
var icolor = J.adapter.readers.pymol.PyMOL.getRGB (color);
var molecules = item[1];
var bs = this.getSelectionAtoms (molecules, this.thisState,  new J.util.BS ());
this.addJmolObject (1141899265, bs, null).argb = icolor;
}
}, $fz.isPrivate = true, $fz), "~A");
$_M(c$, "getSelectionAtoms", 
($fz = function (molecules, istate, bs) {
if (molecules != null) for (var j = molecules.size (); --j >= 0; ) this.selectAllAtoms (J.adapter.readers.pymol.PyMOLScene.listAt (molecules, j), istate, bs);

return bs;
}, $fz.isPrivate = true, $fz), "J.util.JmolList,~N,J.util.BS");
$_M(c$, "selectAllAtoms", 
($fz = function (obj, istate, bs) {
var name = obj.get (0);
this.setSceneObject (name, istate);
var atomList = J.adapter.readers.pymol.PyMOLScene.listAt (obj, 1);
var k0 = (istate == 0 ? 1 : istate);
var k1 = (istate == 0 ? this.stateCount : istate);
for (var k = k0; k <= k1; k++) {
var atomMap = this.htAtomMap.get (J.adapter.readers.pymol.PyMOLScene.fixName (name + "_" + k));
if (atomMap == null) continue;
this.getBsAtoms (atomList, atomMap, bs);
}
}, $fz.isPrivate = true, $fz), "J.util.JmolList,~N,J.util.BS");
$_M(c$, "generateVisibilities", 
($fz = function (vis) {
if (vis == null) return;
var bs =  new J.util.BS ();
this.addJmolObject (12294, null, null);
for (var e, $e = this.groups.entrySet ().iterator (); $e.hasNext () && ((e = $e.next ()) || true);) e.getValue ().visible = true;

for (var e, $e = vis.entrySet ().iterator (); $e.hasNext () && ((e = $e.next ()) || true);) {
var name = e.getKey ();
if (name.equals ("all")) continue;
var list = e.getValue ();
var tok = (J.adapter.readers.pymol.PyMOLScene.intAt (list, 0) == 1 ? 1610625028 : 12294);
if (tok == 12294) this.htHiddenObjects.put (name, Boolean.TRUE);
switch (this.getObjectType (name)) {
case 12:
var g = this.groups.get (name);
if (g != null) g.visible = (tok == 1610625028);
break;
}
}
this.setGroupVisibilities ();
for (var e, $e = vis.entrySet ().iterator (); $e.hasNext () && ((e = $e.next ()) || true);) {
var name = e.getKey ();
if (name.equals ("all")) continue;
this.setSceneObject (name, this.thisState);
if (this.objectHidden) continue;
var list = e.getValue ();
var tok = (this.objectHidden ? 12294 : 1610625028);
bs = null;
var info = this.objectJmolName;
switch (this.objectType) {
case 0:
case 12:
continue;
case 1:
bs = this.viewer.getDefinedAtomSet (info);
if (bs.nextSetBit (0) < 0) continue;
break;
case 4:
if (tok == 1610625028) {
var mdList = this.htMeasures.get (name);
if (mdList != null) this.addMeasurements (mdList, mdList[0].points.size (), null, this.getBS (J.adapter.readers.pymol.PyMOLScene.listAt (list, 2)), J.adapter.readers.pymol.PyMOLScene.intAt (list, 3), null, true);
}info += "_*";
break;
case 6:
case 3:
case 2:
break;
}
this.addJmolObject (tok, bs, info);
}
}, $fz.isPrivate = true, $fz), "java.util.Map");
$_M(c$, "generateShapes", 
($fz = function (reps) {
if (reps == null) return;
this.addJmolObject (12295, null, null).argb = this.thisState - 1;
for (var m = 0; m < this.moleculeNames.size (); m++) {
this.setSceneObject (this.moleculeNames.get (m), this.thisState);
if (this.objectHidden) continue;
var molReps =  new Array (23);
for (var i = 0; i < 23; i++) molReps[i] =  new J.util.BS ();

for (var i = reps.length; --i >= 0; ) {
var repMap = reps[i];
var list = (repMap == null ? null : repMap.get (this.objectName));
if (list != null) this.selectAllAtoms (list, this.thisState, molReps[i]);
}
this.createShapeObjects (molReps, true, -1, -1);
}
}, $fz.isPrivate = true, $fz), "~A");
$_M(c$, "getBS", 
($fz = function (list) {
var bs =  new J.util.BS ();
for (var i = list.size (); --i >= 0; ) bs.set (J.adapter.readers.pymol.PyMOLScene.intAt (list, i));

return bs;
}, $fz.isPrivate = true, $fz), "J.util.JmolList");
$_M(c$, "getBsAtoms", 
($fz = function (list, atomMap, bs) {
for (var i = list.size (); --i >= 0; ) bs.set (atomMap[J.adapter.readers.pymol.PyMOLScene.intAt (list, i)]);

}, $fz.isPrivate = true, $fz), "J.util.JmolList,~A,J.util.BS");
c$.getColorPt = $_M(c$, "getColorPt", 
function (o) {
return (Clazz.instanceOf (o, Integer) ? (o).intValue () : J.util.ColorUtil.colorPtToInt (J.adapter.readers.pymol.PyMOLScene.pointAt (o, 0, J.adapter.readers.pymol.PyMOLScene.ptTemp)));
}, "~O");
c$.intAt = $_M(c$, "intAt", 
function (list, i) {
return (list.get (i)).intValue ();
}, "J.util.JmolList,~N");
c$.colorSetting = $_M(c$, "colorSetting", 
function (c) {
return J.adapter.readers.pymol.PyMOLScene.getColorPt (c.get (2));
}, "J.util.JmolList");
$_M(c$, "setReaderObjects", 
function () {
this.clearReaderData ();
this.finalizeObjects ();
if (!this.haveScenes) {
this.uniqueSettings = null;
this.bsUniqueBonds = this.bsStickBonds = this.bsLineBonds = null;
}});
$_M(c$, "finalizeObjects", 
($fz = function () {
this.viewer.setStringProperty ("defaults", "PyMOL");
for (var i = 0; i < this.jmolObjects.size (); i++) {
try {
var obj = this.jmolObjects.get (i);
obj.finalizeObject (this, this.viewer.modelSet, this.mepList, this.doCache);
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
System.out.println (e);
if (!this.viewer.isJS) e.printStackTrace ();
} else {
throw e;
}
}
}
this.finalizeUniqueBonds ();
this.jmolObjects.clear ();
}, $fz.isPrivate = true, $fz));
$_M(c$, "offsetObjects", 
function () {
for (var i = 0; i < this.jmolObjects.size (); i++) this.jmolObjects.get (i).offset (this.baseModelIndex, this.baseAtomIndex);

});
$_M(c$, "getJmolObject", 
($fz = function (id, bsAtoms, info) {
if (this.baseAtomIndex > 0) bsAtoms = J.util.BSUtil.copy (bsAtoms);
return  new J.adapter.readers.pymol.JmolObject (id, this.objectNameID, bsAtoms, info);
}, $fz.isPrivate = true, $fz), "~N,J.util.BS,~O");
$_M(c$, "addJmolObject", 
($fz = function (id, bsAtoms, info) {
return this.addObject (this.getJmolObject (id, bsAtoms, info));
}, $fz.isPrivate = true, $fz), "~N,J.util.BS,~O");
$_M(c$, "getPymolView", 
($fz = function (view, isViewObj) {
var pymolView =  Clazz.newFloatArray (21, 0);
var depthCue = this.booleanSetting (84);
var fog = this.booleanSetting (88);
var fog_start = this.floatSetting (192);
var pt = 0;
var i = 0;
for (var j = 0; j < 3; j++) pymolView[pt++] = J.adapter.readers.pymol.PyMOLScene.floatAt (view, i++);

if (isViewObj) i++;
for (var j = 0; j < 3; j++) pymolView[pt++] = J.adapter.readers.pymol.PyMOLScene.floatAt (view, i++);

if (isViewObj) i++;
for (var j = 0; j < 3; j++) pymolView[pt++] = J.adapter.readers.pymol.PyMOLScene.floatAt (view, i++);

if (isViewObj) i += 5;
for (var j = 0; j < 8; j++) pymolView[pt++] = J.adapter.readers.pymol.PyMOLScene.floatAt (view, i++);

var isOrtho = this.booleanSetting (23);
var fov = this.floatSetting (152);
pymolView[pt++] = (isOrtho ? fov : -fov);
pymolView[pt++] = (depthCue ? 1 : 0);
pymolView[pt++] = (fog ? 1 : 0);
pymolView[pt++] = fog_start;
return pymolView;
}, $fz.isPrivate = true, $fz), "J.util.JmolList,~B");
$_M(c$, "globalSetting", 
function (i) {
try {
var setting = this.settings.get (i);
return (setting.get (2)).floatValue ();
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
return J.adapter.readers.pymol.PyMOL.getDefaultSetting (i, this.pymolVersion);
} else {
throw e;
}
}
}, "~N");
$_M(c$, "addGroup", 
function (object, parent, type) {
if (this.groups == null) this.groups =  new java.util.Hashtable ();
var myGroup = this.getGroup (this.objectName);
myGroup.object = object;
myGroup.objectNameID = this.objectNameID;
myGroup.visible = !this.objectHidden;
myGroup.type = type;
if (!myGroup.visible) {
this.occludedObjects.put (this.objectNameID, Boolean.TRUE);
this.htHiddenObjects.put (this.objectName, Boolean.TRUE);
}if (parent != null && parent.length != 0) this.getGroup (parent).addList (myGroup);
return myGroup;
}, "J.util.JmolList,~S,~N");
$_M(c$, "getGroup", 
($fz = function (name) {
var g = this.groups.get (name);
if (g == null) {
this.groups.put (name, (g =  new J.adapter.readers.pymol.PyMOLGroup (name)));
this.defineAtoms (name, g.bsAtoms);
}return g;
}, $fz.isPrivate = true, $fz), "~S");
$_M(c$, "finalizeVisibility", 
function () {
this.setGroupVisibilities ();
if (this.groups != null) for (var i = this.jmolObjects.size (); --i >= 0; ) {
var obj = this.jmolObjects.get (i);
if (obj.jmolName != null && this.occludedObjects.containsKey (obj.jmolName)) obj.visible = false;
}
if (!this.bsHidden.isEmpty ()) this.addJmolObject (3145770, this.bsHidden, null);
});
$_M(c$, "setCarveSets", 
function (htObjNames) {
if (this.htCarveSets.isEmpty ()) return;
for (var e, $e = this.htCarveSets.entrySet ().iterator (); $e.hasNext () && ((e = $e.next ()) || true);) this.getSelectionAtoms (J.adapter.readers.pymol.PyMOLScene.listAt (htObjNames.get (e.getKey ()), 5), 0, e.getValue ());

}, "java.util.Map");
$_M(c$, "setGroupVisibilities", 
($fz = function () {
if (this.groups == null) return;
var list = this.groups.values ();
var bsAll =  new J.util.BS ();
for (var g, $g = list.iterator (); $g.hasNext () && ((g = $g.next ()) || true);) {
bsAll.or (g.bsAtoms);
if (g.parent == null) this.setGroupVisible (g, true);
 else if (g.list.isEmpty ()) g.addGroupAtoms ( new J.util.BS ());
}
this.defineAtoms ("all", bsAll);
}, $fz.isPrivate = true, $fz));
$_M(c$, "defineAtoms", 
($fz = function (name, bs) {
this.htDefinedAtoms.put (J.adapter.readers.pymol.PyMOLScene.getJmolName (name), bs);
}, $fz.isPrivate = true, $fz), "~S,J.util.BS");
c$.getJmolName = $_M(c$, "getJmolName", 
($fz = function (name) {
return "__" + J.adapter.readers.pymol.PyMOLScene.fixName (name);
}, $fz.isPrivate = true, $fz), "~S");
$_M(c$, "createShapeObjects", 
function (reps, allowSurface, atomCount0, atomCount) {
if (atomCount >= 0) {
this.bsAtoms = J.util.BSUtil.newBitSet2 (atomCount0, atomCount);
var jo;
jo = this.addJmolObject (1141899265, this.bsAtoms, null);
this.colixes = J.util.ArrayUtil.ensureLengthShort (this.colixes, atomCount);
for (var i = atomCount; --i >= atomCount0; ) this.colixes[i] = this.atomColorList.get (i).intValue ();

jo.setColors (this.colixes, 0);
jo.setSize (0);
jo = this.addJmolObject (1, this.bsAtoms, null);
jo.setSize (0);
}this.createShapeObject (7, reps[7]);
this.createShapeObject (0, reps[0]);
this.fixReps (reps);
this.createSpacefillObjects ();
for (var i = 0; i < 23; i++) switch (i) {
case 7:
case 0:
continue;
case 8:
case 2:
if (!allowSurface) continue;
switch (this.surfaceMode) {
case 0:
reps[i].andNot (this.bsNoSurface);
break;
case 1:
case 3:
break;
case 2:
case 4:
reps[i].andNot (this.bsHydrogen);
break;
}
default:
this.createShapeObject (i, reps[i]);
continue;
}

this.bsAtoms = null;
}, "~A,~B,~N,~N");
$_M(c$, "addLabel", 
function (atomIndex, uniqueID, atomColor, labelOffset, label) {
var icolor = Clazz.floatToInt (this.getUniqueFloatDef (uniqueID, 66, this.labelColor));
if (icolor == -7 || icolor == -6) {
} else if (icolor < 0) {
icolor = atomColor;
}var labelPos =  Clazz.newFloatArray (7, 0);
if (labelOffset == null) {
var offset = this.getUniquePoint (uniqueID, 471, null);
if (offset == null) offset = this.labelPosition;
 else offset.add (this.labelPosition);
J.adapter.readers.pymol.PyMOLScene.setLabelPosition (offset, labelPos);
} else {
for (var i = 0; i < 7; i++) labelPos[i] = J.adapter.readers.pymol.PyMOLScene.floatAt (labelOffset, i);

}this.labels.put (Integer.$valueOf (atomIndex), this.newTextLabel (label, labelPos, icolor, this.labelFontId, this.labelSize));
}, "~N,~N,~N,J.util.JmolList,~S");
$_M(c$, "getUniqueFloatDef", 
function (id, key, defaultValue) {
var setting;
if (id <= 0 || (setting = this.uniqueSettings.get (Integer.$valueOf ((id << 10) + key))) == null) return defaultValue;
var v = (setting.get (2)).floatValue ();
if (J.util.Logger.debugging) J.util.Logger.debug ("Pymol unique setting for " + id + ": [" + key + "] = " + v);
return v;
}, "~N,~N,~N");
$_M(c$, "getUniquePoint", 
function (id, key, pt) {
var setting;
if (id <= 0 || (setting = this.uniqueSettings.get (Integer.$valueOf ((id << 10) + key))) == null) return pt;
pt =  new J.util.P3 ();
J.adapter.readers.pymol.PyMOLScene.pointAt (setting.get (2), 0, pt);
J.util.Logger.info ("Pymol unique setting for " + id + ": " + key + " = " + pt);
return pt;
}, "~N,~N,J.util.P3");
$_M(c$, "getObjectSetting", 
function (i) {
return this.objectSettings.get (Integer.$valueOf (i));
}, "~N");
$_M(c$, "booleanSetting", 
function (i) {
return (this.floatSetting (i) != 0);
}, "~N");
$_M(c$, "floatSetting", 
function (i) {
try {
var setting = this.getSetting (i);
return (setting.get (2)).floatValue ();
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
return J.adapter.readers.pymol.PyMOL.getDefaultSetting (i, this.pymolVersion);
} else {
throw e;
}
}
}, "~N");
$_M(c$, "stringSetting", 
function (i) {
try {
var setting = this.getSetting (i);
return setting.get (2).toString ();
} catch (e) {
if (Clazz.exceptionOf (e, Exception)) {
return null;
} else {
throw e;
}
}
}, "~N");
$_M(c$, "getSetting", 
($fz = function (i) {
var setting = null;
if (this.stateSettings != null) setting = this.stateSettings.get (Integer.$valueOf (i));
if (setting == null && this.objectSettings != null) setting = this.objectSettings.get (Integer.$valueOf (i));
if (setting == null) setting = this.settings.get (i);
return setting;
}, $fz.isPrivate = true, $fz), "~N");
c$.pointAt = $_M(c$, "pointAt", 
function (list, i, pt) {
pt.set (J.adapter.readers.pymol.PyMOLScene.floatAt (list, i++), J.adapter.readers.pymol.PyMOLScene.floatAt (list, i++), J.adapter.readers.pymol.PyMOLScene.floatAt (list, i));
return pt;
}, "J.util.JmolList,~N,J.util.P3");
c$.floatAt = $_M(c$, "floatAt", 
function (list, i) {
return (list == null ? 0 : (list.get (i)).floatValue ());
}, "J.util.JmolList,~N");
c$.floatsAt = $_M(c$, "floatsAt", 
function (a, pt, data, len) {
if (a == null) return null;
for (var i = 0; i < len; i++) data[i] = J.adapter.readers.pymol.PyMOLScene.floatAt (a, pt++);

return data;
}, "J.util.JmolList,~N,~A,~N");
c$.listAt = $_M(c$, "listAt", 
function (list, i) {
if (list == null || i >= list.size ()) return null;
var o = list.get (i);
return (Clazz.instanceOf (o, J.util.JmolList) ? o : null);
}, "J.util.JmolList,~N");
c$.setLabelPosition = $_M(c$, "setLabelPosition", 
function (offset, labelPos) {
labelPos[0] = 1;
labelPos[1] = offset.x;
labelPos[2] = offset.y;
labelPos[3] = offset.z;
return labelPos;
}, "J.util.P3,~A");
$_M(c$, "addCGO", 
function (data, color) {
data.addLast (this.objectName);
var jo = this.addJmolObject (23, null, data);
jo.argb = color;
jo.translucency = this.floatSetting (441);
return J.adapter.readers.pymol.PyMOLScene.fixName (this.objectName);
}, "J.util.JmolList,~N");
$_M(c$, "addMeasurements", 
function (mdList, nCoord, list, bsReps, color, offsets, haveLabels) {
var isNew = (mdList == null);
var n = (isNew ? Clazz.doubleToInt (Clazz.doubleToInt (list.size () / 3) / nCoord) : mdList.length);
if (n == 0) return false;
var drawLabel = haveLabels && bsReps.get (3);
var drawDashes = bsReps.get (10);
var rad = this.floatSetting (107) / 20;
if (rad == 0) rad = 0.05;
if (!drawDashes) rad = -5.0E-4;
if (color < 0) color = Clazz.floatToInt (this.floatSetting (574));
var c = J.adapter.readers.pymol.PyMOL.getRGB (color);
var colix = J.util.C.getColix (c);
var clabel = (this.labelColor < 0 ? color : this.labelColor);
if (isNew) {
mdList =  new Array (n);
this.htMeasures.put (this.objectName, mdList);
}var bs = J.util.BSUtil.newAndSetBit (0);
for (var index = 0, p = 0; index < n; index++) {
var md;
var offset;
if (isNew) {
var points =  new J.util.JmolList ();
for (var i = 0; i < nCoord; i++, p += 3) points.addLast (J.adapter.readers.pymol.PyMOLScene.pointAt (list, p,  new J.util.Point3fi ()));

offset = J.adapter.readers.pymol.PyMOLScene.floatsAt (J.adapter.readers.pymol.PyMOLScene.listAt (offsets, index), 0,  Clazz.newFloatArray (7, 0), 7);
if (offset == null) offset = J.adapter.readers.pymol.PyMOLScene.setLabelPosition (this.labelPosition,  Clazz.newFloatArray (7, 0));
md = mdList[index] =  new J.modelset.MeasurementData (this.objectNameID + "_" + (index + 1), this.viewer, points);
md.note = this.objectName;
} else {
md = mdList[index];
offset = md.text.pymolOffset;
}var nDigits = Clazz.floatToInt (this.floatSetting (J.adapter.readers.pymol.PyMOLScene.MEAS_DIGITS[nCoord - 2]));
var strFormat = nCoord + ": " + (drawLabel ? "%0." + (nDigits < 0 ? 1 : nDigits) + "VALUE" : "");
var text = this.newTextLabel (strFormat, offset, clabel, Clazz.floatToInt (this.floatSetting (328)), this.floatSetting (453));
md.set (1060866, null, null, strFormat, "angstroms", null, false, false, null, false, Clazz.floatToInt (rad * 2000), colix, text);
this.addJmolObject (6, bs, md);
}
return true;
}, "~A,~N,J.util.JmolList,J.util.BS,~N,J.util.JmolList,~B");
$_M(c$, "getViewScript", 
function (view) {
var sb =  new J.util.SB ();
var pymolView = this.getPymolView (view, true);
sb.append (";set translucent " + (this.globalSetting (213) != 2) + ";set zshadePower 1;set traceAlpha " + (this.globalSetting (111) != 0));
var rockets = this.cartoonRockets;
sb.append (";set cartoonRockets " + rockets);
if (rockets) sb.append (";set rocketBarrels " + rockets);
sb.append (";set cartoonLadders " + this.haveNucleicLadder);
sb.append (";set ribbonBorder " + (this.globalSetting (118) != 0));
sb.append (";set cartoonFancy " + (this.globalSetting (118) == 0));
var s = "000000" + Integer.toHexString (this.bgRgb & 0xFFFFFF);
s = "[x" + s.substring (s.length - 6) + "]";
sb.append (";background " + s);
sb.append (";moveto 0 PyMOL " + J.util.Escape.eAF (pymolView));
sb.append (";save orientation 'default';");
return sb;
}, "J.util.JmolList");
$_M(c$, "getColix", 
function (colorIndex, translucency) {
var colix = (colorIndex == -7 ? (J.util.ColorUtil.getBgContrast (this.bgRgb) == 8 ? 4 : 8) : colorIndex == -6 ? J.util.ColorUtil.getBgContrast (this.bgRgb) : J.util.C.getColixO (Integer.$valueOf (J.adapter.readers.pymol.PyMOL.getRGB (colorIndex))));
return J.util.C.getColixTranslucent3 (colix, translucency > 0, translucency);
}, "~N,~N");
c$.colorSettingClamped = $_M(c$, "colorSettingClamped", 
function (c) {
return (c.size () < 6 || J.adapter.readers.pymol.PyMOLScene.intAt (c, 4) == 0 ? J.adapter.readers.pymol.PyMOLScene.colorSetting (c) : J.adapter.readers.pymol.PyMOLScene.getColorPt (c.get (5)));
}, "J.util.JmolList");
$_M(c$, "setAtomColor", 
function (atomColor) {
this.atomColorList.addLast (Integer.$valueOf (this.getColix (atomColor, 0)));
}, "~N");
$_M(c$, "setFrameObject", 
function (type, info) {
if (info != null) {
this.frameObj = this.getJmolObject (type, null, info);
return;
}if (this.frameObj == null) return;
this.frameObj.finalizeObject (this, this.viewer.getModelSet (), null, false);
this.frameObj = null;
}, "~N,~O");
c$.fixName = $_M(c$, "fixName", 
($fz = function (name) {
var chars = name.toLowerCase ().toCharArray ();
for (var i = chars.length; --i >= 0; ) if (!Character.isLetterOrDigit (chars[i])) chars[i] = '_';

return String.valueOf (chars);
}, $fz.isPrivate = true, $fz), "~S");
$_M(c$, "getObjectID", 
function (name) {
return this.objectInfo.get (name)[0];
}, "~S");
$_M(c$, "getObjectType", 
($fz = function (name) {
var o = this.objectInfo.get (name);
return (o == null ? 0 : (o[1]).intValue ());
}, $fz.isPrivate = true, $fz), "~S");
$_M(c$, "setAtomMap", 
function (atomMap, atomCount0) {
this.htAtomMap.put (this.objectNameID, atomMap);
var bsAtoms = this.htDefinedAtoms.get (this.objectJmolName);
if (bsAtoms == null) {
bsAtoms = J.util.BS.newN (atomCount0 + atomMap.length);
J.util.Logger.info ("PyMOL molecule " + this.objectName);
this.htDefinedAtoms.put (this.objectJmolName, bsAtoms);
this.htObjectAtoms.put (this.objectName, bsAtoms);
this.moleculeNames.addLast (this.objectName);
}return bsAtoms;
}, "~A,~N");
$_M(c$, "newTextLabel", 
($fz = function (label, labelOffset, colorIndex, fontID, fontSize) {
var face;
var factor = 1;
switch (fontID) {
default:
case 11:
case 12:
case 13:
case 14:
face = "SansSerif";
break;
case 0:
case 1:
face = "Monospaced";
break;
case 9:
case 10:
case 15:
case 16:
case 17:
case 18:
face = "Serif";
break;
}
var style;
switch (fontID) {
default:
style = "Plain";
break;
case 6:
case 12:
case 16:
case 17:
style = "Italic";
break;
case 7:
case 10:
case 13:
style = "Bold";
break;
case 8:
case 14:
case 18:
style = "BoldItalic";
break;
}
var font = this.viewer.getFont3D (face, style, fontSize == 0 ? 12 : fontSize * factor);
var t = J.modelset.Text.newLabel (this.viewer.getGraphicsData (), font, label, this.getColix (colorIndex, 0), 0, 0, 0, labelOffset);
return t;
}, $fz.isPrivate = true, $fz), "~S,~A,~N,~N,~N");
$_M(c$, "setVersionSettings", 
($fz = function () {
if (this.pymolVersion < 100) {
this.addSetting (550, 2, Integer.$valueOf (0));
this.addSetting (529, 2, Integer.$valueOf (2));
this.addSetting (471, 4, [1, 1, 0]);
if (this.pymolVersion < 99) {
this.addSetting (448, 2, Integer.$valueOf (0));
this.addSetting (431, 2, Integer.$valueOf (0));
this.addSetting (361, 2, Integer.$valueOf (1));
}}}, $fz.isPrivate = true, $fz));
$_M(c$, "addSetting", 
($fz = function (key, type, val) {
var settingCount = this.settings.size ();
if (settingCount <= key) for (var i = key + 1; --i >= settingCount; ) this.settings.addLast (null);

if (type == 4) {
var d = val;
var list;
val = list =  new J.util.JmolList ();
for (var i = 0; i < 3; i++) list.addLast (Double.$valueOf (d[i]));

}var setting =  new J.util.JmolList ();
setting.addLast (Integer.$valueOf (key));
setting.addLast (Integer.$valueOf (type));
setting.addLast (val);
this.settings.set (key, setting);
}, $fz.isPrivate = true, $fz), "~N,~N,~O");
$_M(c$, "fixReps", 
($fz = function (reps) {
this.htSpacefill.clear ();
this.bsCartoon.clearAll ();
for (var iAtom = this.bsAtoms.nextSetBit (0); iAtom >= 0; iAtom = this.bsAtoms.nextSetBit (iAtom + 1)) {
var rad = 0;
var uniqueID = (this.reader == null ? this.uniqueIDs[iAtom] : this.reader.getUniqueID (iAtom));
if (reps[1].get (iAtom)) {
rad = (this.reader == null ? this.radii[iAtom] : this.reader.getVDW (iAtom)) * this.getUniqueFloatDef (uniqueID, 155, this.sphereScale);
} else if (reps[4].get (iAtom)) {
rad = this.nonbondedSize;
}if (rad != 0) {
var r = Float.$valueOf (rad);
var bsr = this.htSpacefill.get (r);
if (bsr == null) this.htSpacefill.put (r, bsr =  new J.util.BS ());
bsr.set (iAtom);
}var cartoonType = (this.reader == null ? this.cartoonTypes[iAtom] : this.reader.getCartoonType (iAtom));
if (reps[5].get (iAtom)) {
switch (cartoonType) {
case 1:
case 4:
reps[21].set (iAtom);
case -1:
reps[5].clear (iAtom);
this.bsCartoon.clear (iAtom);
break;
case 7:
reps[22].set (iAtom);
reps[5].clear (iAtom);
this.bsCartoon.clear (iAtom);
break;
default:
this.bsCartoon.set (iAtom);
}
}}
reps[5].and (this.bsCartoon);
this.cleanSingletons (reps[5]);
this.cleanSingletons (reps[6]);
this.cleanSingletons (reps[21]);
this.cleanSingletons (reps[22]);
this.bsCartoon.and (reps[5]);
}, $fz.isPrivate = true, $fz), "~A");
$_M(c$, "cleanSingletons", 
($fz = function (bs) {
if (bs.isEmpty ()) return;
bs.and (this.bsAtoms);
var bsr =  new J.util.BS ();
var n = bs.length ();
var pass = 0;
while (true) {
for (var i = 0, offset = 0, iPrev = -2147483648, iSeqLast = -2147483648, iSeq = -2147483648; i < n; i++) {
if (iPrev < 0 || (this.reader == null ? this.newChain[i] : this.reader.compareAtoms (iPrev, i))) offset++;
iSeq = (this.reader == null ? this.sequenceNumbers[i] : this.reader.getSequenceNumber (i));
if (iSeq != iSeqLast) {
iSeqLast = iSeq;
offset++;
}if (pass == 0) {
if (bs.get (i)) bsr.set (offset);
} else if (!bsr.get (offset)) bs.clear (i);
iPrev = i;
}
if (++pass == 2) break;
var bsnot =  new J.util.BS ();
for (var i = bsr.nextSetBit (0); i >= 0; i = bsr.nextSetBit (i + 1)) if (!bsr.get (i - 1) && !bsr.get (i + 1)) bsnot.set (i);

bsr.andNot (bsnot);
}
}, $fz.isPrivate = true, $fz), "J.util.BS");
$_M(c$, "createShapeObject", 
($fz = function (shapeID, bs) {
if (bs.isEmpty ()) return;
var jo = null;
switch (shapeID) {
case 11:
bs.and (this.bsNonbonded);
if (bs.isEmpty ()) return;
this.setUniqueObjects (7, bs, 0, 0, 524, this.nonbondedTranslucency, 0, this.nonbondedSize, 0.5);
break;
case 4:
case 1:
this.setUniqueObjects (0, bs, 173, this.sphereColor, 172, this.sphereTranslucency, 155, this.sphereScale, 1);
break;
case 19:
var ellipsoidTranslucency = this.floatSetting (571);
var ellipsoidColor = Clazz.floatToInt (this.floatSetting (570));
var ellipsoidScale = this.floatSetting (569);
this.setUniqueObjects (20, bs, 570, ellipsoidColor, 571, ellipsoidTranslucency, 569, ellipsoidScale, 50);
break;
case 9:
this.setUniqueObjects (16, bs, 210, this.dotColor, 0, 0, 155, this.sphereScale, 1);
break;
case 2:
var withinDistance = this.floatSetting (344);
jo = this.addJmolObject (135180, bs, [this.booleanSetting (156) ? "FULLYLIT" : "FRONTLIT", (this.surfaceMode == 3 || this.surfaceMode == 4) ? " only" : "", this.bsCarve, Float.$valueOf (withinDistance)]);
jo.setSize (this.floatSetting (4) * (this.solventAccessible ? -1 : 1));
jo.translucency = this.transparency;
if (this.surfaceColor >= 0) jo.argb = J.adapter.readers.pymol.PyMOL.getRGB (this.surfaceColor);
jo.modelIndex = this.currentAtomSetIndex;
jo.cacheID = this.surfaceInfoName;
this.setUniqueObjects (24, bs, 144, this.surfaceColor, 138, this.transparency, 0, 0, 0);
break;
case 8:
jo = this.addJmolObject (135180, bs, null);
jo.setSize (this.floatSetting (4));
jo.translucency = this.transparency;
this.setUniqueObjects (24, bs, 144, this.surfaceColor, 138, this.transparency, 0, 0, 0);
break;
case 3:
bs.and (this.bsLabeled);
if (bs.isEmpty ()) return;
jo = this.addJmolObject (5, bs, this.labels);
break;
case 7:
jo = this.addJmolObject (659488, bs, null);
jo.setSize (this.floatSetting (44) / 15);
var color = Clazz.floatToInt (this.floatSetting (526));
if (color >= 0) jo.argb = J.adapter.readers.pymol.PyMOL.getRGB (color);
break;
case 0:
jo = this.addJmolObject (1, bs, null);
jo.setSize (this.floatSetting (21) * 2);
jo.translucency = this.stickTranslucency;
var col = Clazz.floatToInt (this.floatSetting (376));
if (col >= 0) jo.argb = J.adapter.readers.pymol.PyMOL.getRGB (col);
break;
case 5:
this.createCartoonObject ("H", (this.cartoonRockets ? 181 : 100));
this.createCartoonObject ("S", 96);
this.createCartoonObject ("L", 92);
this.createCartoonObject (" ", 92);
break;
case 22:
this.createPuttyObject (bs);
break;
case 21:
this.createTraceObject (bs);
break;
case 6:
this.createRibbonObject (bs);
break;
default:
J.util.Logger.error ("Unprocessed representation type " + shapeID);
}
}, $fz.isPrivate = true, $fz), "~N,J.util.BS");
$_M(c$, "setUniqueObjects", 
($fz = function (shape, bs, setColor, color, setTrans, trans, setSize, size, f) {
var n = bs.cardinality ();
var colixes = (setColor == 0 ? null :  Clazz.newShortArray (n, 0));
var atrans = (setTrans == 0 ? null :  Clazz.newFloatArray (n, 0));
var sizes =  Clazz.newFloatArray (n, 0);
for (var pt = 0, i = bs.nextSetBit (0); i >= 0; i = bs.nextSetBit (i + 1), pt++) {
var id = (this.reader == null ? this.uniqueIDs[i] : this.reader.getUniqueID (i));
if (colixes != null) {
var c = Clazz.floatToInt (this.getUniqueFloatDef (id, setColor, color));
if (c > 0) colixes[pt] = this.getColix (c, 0);
}if (atrans != null) {
atrans[pt] = this.getUniqueFloatDef (id, setTrans, trans);
}sizes[pt] = this.getUniqueFloatDef (id, setSize, size) * f;
}
return this.addJmolObject (shape, bs, [colixes, atrans, sizes]);
}, $fz.isPrivate = true, $fz), "~N,J.util.BS,~N,~N,~N,~N,~N,~N,~N");
$_M(c$, "createSpacefillObjects", 
($fz = function () {
for (var e, $e = this.htSpacefill.entrySet ().iterator (); $e.hasNext () && ((e = $e.next ()) || true);) {
var r = e.getKey ().floatValue ();
var bs = e.getValue ();
this.addJmolObject (1141899265, bs, null).rd =  new J.atomdata.RadiusData (null, r, J.atomdata.RadiusData.EnumType.ABSOLUTE, J.constant.EnumVdw.AUTO);
}
this.htSpacefill.clear ();
}, $fz.isPrivate = true, $fz));
$_M(c$, "createTraceObject", 
($fz = function (bs) {
this.checkNucleicObject (bs, true);
if (bs.isEmpty ()) return;
var r = this.floatSetting (103);
var jo = this.setUniqueObjects (10, bs, 236, this.cartoonColor, 0, 0, 0, 0, 0);
jo.setSize (r * 2);
jo.translucency = this.cartoonTranslucency;
}, $fz.isPrivate = true, $fz), "J.util.BS");
$_M(c$, "checkNucleicObject", 
($fz = function (bs, isTrace) {
var jo;
var bsNuc = J.util.BSUtil.copy (this.bsNucleic);
bsNuc.and (bs);
if (!bsNuc.isEmpty ()) {
if (isTrace && this.cartoonLadderMode) this.haveNucleicLadder = true;
jo = this.addJmolObject (11, bsNuc, null);
jo.translucency = this.cartoonTranslucency;
jo.setSize (this.floatSetting (103) * 2);
bs.andNot (bsNuc);
}}, $fz.isPrivate = true, $fz), "J.util.BS,~B");
$_M(c$, "createPuttyObject", 
($fz = function (bs) {
var info = [this.floatSetting (378), this.floatSetting (377), this.floatSetting (382), this.floatSetting (379), this.floatSetting (380), this.floatSetting (381), this.floatSetting (581)];
this.addJmolObject (1113200654, bs, info).translucency = this.cartoonTranslucency;
}, $fz.isPrivate = true, $fz), "J.util.BS");
$_M(c$, "createRibbonObject", 
($fz = function (bs) {
var isTrace = (this.floatSetting (19) > 1);
var r = this.floatSetting (20) * 2;
var rayScale = this.floatSetting (327);
if (r == 0) r = this.floatSetting (106) * (isTrace ? 1 : (rayScale <= 1 ? 0.5 : rayScale)) * 0.1;
var jo = this.setUniqueObjects ((isTrace ? 10 : 9), bs, 235, this.ribbonColor, 0, 0, 0, 0, 0);
jo.setSize (r);
jo.translucency = this.ribbonTranslucency;
}, $fz.isPrivate = true, $fz), "J.util.BS");
$_M(c$, "createCartoonObject", 
($fz = function (key, sizeID) {
var bs = J.util.BSUtil.copy (this.ssMapAtom.get (key));
if (bs == null) return;
bs.and (this.bsCartoon);
if (bs.isEmpty ()) return;
if (key.equals (" ")) {
this.checkNucleicObject (bs, false);
if (bs.isEmpty ()) return;
}var jo = this.setUniqueObjects (11, bs, 236, this.cartoonColor, 0, 0, 0, 0, 0);
jo.setSize (this.floatSetting (sizeID) * 2);
jo.translucency = this.cartoonTranslucency;
}, $fz.isPrivate = true, $fz), "~S,~N");
$_M(c$, "addObject", 
($fz = function (obj) {
this.jmolObjects.addLast (obj);
return obj;
}, $fz.isPrivate = true, $fz), "J.adapter.readers.pymol.JmolObject");
$_M(c$, "setGroupVisible", 
($fz = function (g, parentVis) {
var vis = parentVis && g.visible;
if (vis) return;
g.visible = false;
this.occludedObjects.put (g.objectNameID, Boolean.TRUE);
this.htHiddenObjects.put (g.name, Boolean.TRUE);
switch (g.type) {
case 1:
this.bsHidden.or (g.bsAtoms);
break;
default:
g.occluded = true;
break;
}
for (var gg, $gg = g.list.values ().iterator (); $gg.hasNext () && ((gg = $gg.next ()) || true);) {
this.setGroupVisible (gg, vis);
}
}, $fz.isPrivate = true, $fz), "J.adapter.readers.pymol.PyMOLGroup,~B");
$_M(c$, "getSSMapAtom", 
function (ssType) {
var bs = this.ssMapAtom.get (ssType);
if (bs == null) this.ssMapAtom.put (ssType, bs =  new J.util.BS ());
return bs;
}, "~S");
c$.listToMap = $_M(c$, "listToMap", 
function (list) {
var map =  new java.util.Hashtable ();
for (var i = list.size (); --i >= 0; ) {
var item = J.adapter.readers.pymol.PyMOLScene.listAt (list, i);
if (item != null && item.size () > 0) map.put (item.get (0), item);
}
return map;
}, "J.util.JmolList");
$_M(c$, "setAtomDefs", 
function () {
this.setGroupVisibilities ();
var defs =  new java.util.Hashtable ();
for (var e, $e = this.htDefinedAtoms.entrySet ().iterator (); $e.hasNext () && ((e = $e.next ()) || true);) {
var bs = e.getValue ();
if (!bs.isEmpty ()) defs.put (e.getKey (), bs);
}
this.addJmolObject (1060866, null, defs);
return defs;
});
$_M(c$, "needSelections", 
function () {
return this.haveScenes || !this.htCarveSets.isEmpty ();
});
$_M(c$, "setUniqueBonds", 
function (bsBonds, isSticks) {
if (isSticks) {
this.bsStickBonds.or (bsBonds);
this.bsStickBonds.andNot (this.bsLineBonds);
} else {
this.bsLineBonds.or (bsBonds);
this.bsLineBonds.andNot (this.bsStickBonds);
}}, "J.util.BS,~B");
$_M(c$, "finalizeUniqueBonds", 
($fz = function () {
if (this.uniqueList == null) return;
for (var i = this.bsUniqueBonds.nextSetBit (0); i >= 0; i = this.bsUniqueBonds.nextSetBit (i + 1)) {
var rad = NaN;
var id = this.uniqueList.get (Integer.$valueOf (i)).intValue ();
if (this.bsLineBonds.get (i)) {
rad = this.getUniqueFloatDef (id, 44, NaN) / 30;
} else if (this.bsStickBonds.get (i)) {
rad = this.getUniqueFloatDef (id, 21, NaN);
}var c = Clazz.floatToInt (this.getUniqueFloatDef (id, 376, 2147483647));
if (c != 2147483647) c = J.adapter.readers.pymol.PyMOL.getRGB (c);
var valence = this.getUniqueFloatDef (id, 64, NaN);
var t = this.getUniqueFloatDef (id, 198, NaN);
this.viewer.setBondParameters (this.thisState - 1, i, null, rad, valence, c, t);
}
}, $fz.isPrivate = true, $fz));
$_M(c$, "addMesh", 
function (tok, obj, objName, isMep) {
var jo = this.addJmolObject (tok, null, obj);
this.setSceneObject (objName, -1);
var meshColor = Clazz.floatToInt (this.floatSetting (146));
if (meshColor < 0) meshColor = J.adapter.readers.pymol.PyMOLScene.intAt (J.adapter.readers.pymol.PyMOLScene.listAt (obj, 0), 2);
if (!isMep) {
jo.setSize (this.meshWidth);
jo.argb = J.adapter.readers.pymol.PyMOL.getRGB (meshColor);
}jo.translucency = this.transparency;
jo.cacheID = this.surfaceInfoName;
}, "~N,J.util.JmolList,~S,~B");
$_M(c$, "addIsosurface", 
function (objectName) {
var jo = this.addJmolObject (135180, null, objectName);
jo.cacheID = this.surfaceInfoName;
return jo;
}, "~S");
c$.ptTemp = c$.prototype.ptTemp =  new J.util.P3 ();
Clazz.defineStatics (c$,
"MEAS_DIGITS", [530, 531, 532]);
});