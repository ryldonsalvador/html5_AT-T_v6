(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.arcade_fire_big = function() {
	this.initialize(img.arcade_fire_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,189);


(lib.arcade_fire_small = function() {
	this.initialize(img.arcade_fire_small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,189);


(lib.arcade_fireandmore = function() {
	this.initialize(img.arcade_fireandmore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,786,71);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,29);


(lib.block_logo = function() {
	this.initialize(img.block_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,67);


(lib.copy1 = function() {
	this.initialize(img.copy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,55);


(lib.cta_bg = function() {
	this.initialize(img.cta_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,62);


(lib.date = function() {
	this.initialize(img.date);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,571,128);


(lib.fire1 = function() {
	this.initialize(img.fire1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,205);


(lib.fire2 = function() {
	this.initialize(img.fire2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,165,184);


(lib.fire3 = function() {
	this.initialize(img.fire3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,236);


(lib.fire4 = function() {
	this.initialize(img.fire4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,237);


(lib.fire5 = function() {
	this.initialize(img.fire5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,157,215);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,205);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,185);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,236);


(lib.image4 = function() {
	this.initialize(img.image4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,239);


(lib.image5 = function() {
	this.initialize(img.image5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,217);


(lib.learnmore = function() {
	this.initialize(img.learnmore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,31);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,0,130,236), null);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.learnmore();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,95,15.5), null);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ball();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,15,14.5), null);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.block_logo();
	this.instance.setTransform(0,0,0.5128,0.5127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,80,34.4), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.arcade_fire_small();
	this.instance.setTransform(0,0,0.203,0.2026);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,120,38.3), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.date();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,571,128), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.arcade_fireandmore();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,786,71), null);


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,0,117,239), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.copy1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,0,653,55), null);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,0,168,185), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,0,161,217), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,105,205), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fire1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(0,0,105,205), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fire2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,165,184), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fire3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,130,236), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fire4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,117,237), null);


(lib.Symbol8copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egv1AJTIAAylMBfrAAAIAASlg");
	mask.setTransform(284.825,153.975);

	// Layer_1
	this.instance = new lib.arcade_fire_big();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8copy, new cjs.Rectangle(0,0,591,189), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egv1AJTIAAylMBfrAAAIAASlg");
	mask.setTransform(284.825,35.025);

	// Layer_1
	this.instance = new lib.arcade_fire_big();

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,591,94.5), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fire5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,157,215), null);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol18();
	this.instance.setTransform(134,146.5,1,1,0,0,0,84,92.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol30();
	this.instance_1.setTransform(260,121,1,1,0,0,0,65,118);

	this.instance_2 = new lib.Symbol17();
	this.instance_2.setTransform(480.5,130.5,1,1,0,0,0,80.5,108.5);

	this.instance_3 = new lib.Symbol20();
	this.instance_3.setTransform(374.5,119.5,1,1,0,0,0,58.5,119.5);

	this.instance_4 = new lib.Symbol16();
	this.instance_4.setTransform(52.5,136.5,1,1,0,0,0,52.5,102.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,561,239), null);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol24();
	this.instance.setTransform(60,19.2,1,1,0,0,0,60,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,120,38.3), null);


// stage content:
(lib._970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [121];
	// timeline functions:
	this.frame_121 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(121).call(this.frame_121).wait(1));

	// Layer_18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_112 = new cjs.Graphics().p("AonCLIAAkVIRPAAIAAEVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(112).to({graphics:mask_graphics_112,x:763.325,y:216}).wait(10));

	// learnmore
	this.instance = new lib.Symbol29();
	this.instance.setTransform(764.5,198.8,1,1,0,0,0,47.5,7.8);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(112).to({_off:false},0).to({y:220.8},9).wait(1));

	// Layer_15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_91 = new cjs.Graphics().p("EAweAQxIAAjIILGAAIAADIg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EAw7AQ7IAAjVILFAAIAADVg");
	var mask_1_graphics_93 = new cjs.Graphics().p("EAxXARFIAAjiILGAAIAADig");
	var mask_1_graphics_94 = new cjs.Graphics().p("EAxyARPIAAjvILHAAIAADvg");
	var mask_1_graphics_95 = new cjs.Graphics().p("EAyOARZIAAj8ILGAAIAAD8g");
	var mask_1_graphics_96 = new cjs.Graphics().p("EAyqARjIAAkJILGAAIAAEJg");
	var mask_1_graphics_97 = new cjs.Graphics().p("EAzHARuIAAkWILGAAIAAEWg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EAzjAR4IAAkjILGAAIAAEjg");
	var mask_1_graphics_99 = new cjs.Graphics().p("EAz+ASCIAAkwILGAAIAAEwg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EA0aASMIAAk9ILGAAIAAE9g");
	var mask_1_graphics_101 = new cjs.Graphics().p("EA03ASXIAAlLILFAAIAAFLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(91).to({graphics:mask_1_graphics_91,x:381.25,y:107.275}).wait(1).to({graphics:mask_1_graphics_92,x:384.05,y:108.2884}).wait(1).to({graphics:mask_1_graphics_93,x:386.85,y:109.3017}).wait(1).to({graphics:mask_1_graphics_94,x:389.65,y:110.3151}).wait(1).to({graphics:mask_1_graphics_95,x:392.45,y:111.3285}).wait(1).to({graphics:mask_1_graphics_96,x:395.25,y:112.3418}).wait(1).to({graphics:mask_1_graphics_97,x:398.05,y:113.3552}).wait(1).to({graphics:mask_1_graphics_98,x:400.85,y:114.3686}).wait(1).to({graphics:mask_1_graphics_99,x:403.65,y:115.382}).wait(1).to({graphics:mask_1_graphics_100,x:406.45,y:116.3953}).wait(1).to({graphics:mask_1_graphics_101,x:409.25,y:117.4499}).wait(21));

	// Layer_13
	this.instance_1 = new lib.ball();
	this.instance_1.setTransform(750,205);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(91).to({_off:false},0).wait(31));

	// Layer_16_copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_91 = new cjs.Graphics().p("EA7OARGIAAjIIAoAAIAADIg");
	var mask_2_graphics_92 = new cjs.Graphics().p("EA5nARFIAAjIICvAAIAADIg");
	var mask_2_graphics_93 = new cjs.Graphics().p("EA4BAREIAAjIIE2AAIAADIg");
	var mask_2_graphics_94 = new cjs.Graphics().p("EA2aARDIAAjIIG9AAIAADIg");
	var mask_2_graphics_95 = new cjs.Graphics().p("EA00ARCIAAjIIJEAAIAADIg");
	var mask_2_graphics_96 = new cjs.Graphics().p("EAzNARBIAAjIILLAAIAADIg");
	var mask_2_graphics_97 = new cjs.Graphics().p("EAxnARAIAAjIINSAAIAADIg");
	var mask_2_graphics_98 = new cjs.Graphics().p("EAwAAQ/IAAjIIPZAAIAADIg");
	var mask_2_graphics_99 = new cjs.Graphics().p("EAuaAQ+IAAjIIRgAAIAADIg");
	var mask_2_graphics_100 = new cjs.Graphics().p("EAszAQ9IAAjIITnAAIAADIg");
	var mask_2_graphics_101 = new cjs.Graphics().p("EArfAQ8IAAjIIVtAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(91).to({graphics:mask_2_graphics_91,x:382.9999,y:109.425}).wait(1).to({graphics:mask_2_graphics_92,x:386.2487,y:109.325}).wait(1).to({graphics:mask_2_graphics_93,x:389.4975,y:109.225}).wait(1).to({graphics:mask_2_graphics_94,x:392.7464,y:109.125}).wait(1).to({graphics:mask_2_graphics_95,x:395.9952,y:109.025}).wait(1).to({graphics:mask_2_graphics_96,x:399.244,y:108.925}).wait(1).to({graphics:mask_2_graphics_97,x:402.4928,y:108.825}).wait(1).to({graphics:mask_2_graphics_98,x:405.7416,y:108.725}).wait(1).to({graphics:mask_2_graphics_99,x:408.9905,y:108.625}).wait(1).to({graphics:mask_2_graphics_100,x:412.2393,y:108.525}).wait(1).to({graphics:mask_2_graphics_101,x:417.2501,y:108.425}).wait(21));

	// Layer_14_copy
	this.instance_2 = new lib.cta_bg();
	this.instance_2.setTransform(698,204,0.5,0.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({_off:false},0).wait(31));

	// Layer_16_copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_96 = new cjs.Graphics().p("EA7OARdIAAjIIAoAAIAADIg");
	var mask_3_graphics_97 = new cjs.Graphics().p("EA5nARdIAAjIICvAAIAADIg");
	var mask_3_graphics_98 = new cjs.Graphics().p("EA4BARcIAAjIIE2AAIAADIg");
	var mask_3_graphics_99 = new cjs.Graphics().p("EA2aARbIAAjIIG9AAIAADIg");
	var mask_3_graphics_100 = new cjs.Graphics().p("EA00ARaIAAjIIJEAAIAADIg");
	var mask_3_graphics_101 = new cjs.Graphics().p("EAzNARZIAAjIILLAAIAADIg");
	var mask_3_graphics_102 = new cjs.Graphics().p("EAxnARYIAAjIINSAAIAADIg");
	var mask_3_graphics_103 = new cjs.Graphics().p("EAwAARXIAAjIIPZAAIAADIg");
	var mask_3_graphics_104 = new cjs.Graphics().p("EAuaARXIAAjIIRgAAIAADIg");
	var mask_3_graphics_105 = new cjs.Graphics().p("EAszARWIAAjIITnAAIAADIg");
	var mask_3_graphics_106 = new cjs.Graphics().p("EArfARVIAAjIIVtAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(96).to({graphics:mask_3_graphics_96,x:382.9999,y:111.75}).wait(1).to({graphics:mask_3_graphics_97,x:386.2487,y:111.6625}).wait(1).to({graphics:mask_3_graphics_98,x:389.4975,y:111.575}).wait(1).to({graphics:mask_3_graphics_99,x:392.7464,y:111.4875}).wait(1).to({graphics:mask_3_graphics_100,x:395.9952,y:111.4}).wait(1).to({graphics:mask_3_graphics_101,x:399.244,y:111.3125}).wait(1).to({graphics:mask_3_graphics_102,x:402.4928,y:111.225}).wait(1).to({graphics:mask_3_graphics_103,x:405.7416,y:111.1375}).wait(1).to({graphics:mask_3_graphics_104,x:408.9905,y:111.05}).wait(1).to({graphics:mask_3_graphics_105,x:412.2393,y:110.9625}).wait(1).to({graphics:mask_3_graphics_106,x:417.2501,y:110.875}).wait(16));

	// Layer_14_copy
	this.instance_3 = new lib.cta_bg();
	this.instance_3.setTransform(698,204,0.5,0.5);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(96).to({_off:false},0).wait(26));

	// Layer_16_copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_99 = new cjs.Graphics().p("EA7OARyIAAjIIAoAAIAADIg");
	var mask_4_graphics_100 = new cjs.Graphics().p("EA5nARxIAAjIICvAAIAADIg");
	var mask_4_graphics_101 = new cjs.Graphics().p("EA4BARwIAAjIIE2AAIAADIg");
	var mask_4_graphics_102 = new cjs.Graphics().p("EA2aARvIAAjIIG9AAIAADIg");
	var mask_4_graphics_103 = new cjs.Graphics().p("EA00ARuIAAjIIJEAAIAADIg");
	var mask_4_graphics_104 = new cjs.Graphics().p("EAzNARtIAAjIILLAAIAADIg");
	var mask_4_graphics_105 = new cjs.Graphics().p("EAxnARsIAAjIINSAAIAADIg");
	var mask_4_graphics_106 = new cjs.Graphics().p("EAwAARrIAAjIIPZAAIAADIg");
	var mask_4_graphics_107 = new cjs.Graphics().p("EAuaARqIAAjIIRgAAIAADIg");
	var mask_4_graphics_108 = new cjs.Graphics().p("EAszARqIAAjIITnAAIAADIg");
	var mask_4_graphics_109 = new cjs.Graphics().p("EArfARpIAAjIIVtAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(99).to({graphics:mask_4_graphics_99,x:382.9999,y:113.75}).wait(1).to({graphics:mask_4_graphics_100,x:386.2487,y:113.6625}).wait(1).to({graphics:mask_4_graphics_101,x:389.4975,y:113.575}).wait(1).to({graphics:mask_4_graphics_102,x:392.7464,y:113.4875}).wait(1).to({graphics:mask_4_graphics_103,x:395.9952,y:113.4}).wait(1).to({graphics:mask_4_graphics_104,x:399.244,y:113.3125}).wait(1).to({graphics:mask_4_graphics_105,x:402.4928,y:113.225}).wait(1).to({graphics:mask_4_graphics_106,x:405.7416,y:113.1375}).wait(1).to({graphics:mask_4_graphics_107,x:408.9905,y:113.05}).wait(1).to({graphics:mask_4_graphics_108,x:412.2393,y:112.9625}).wait(1).to({graphics:mask_4_graphics_109,x:417.2501,y:112.875}).wait(13));

	// Layer_14_copy
	this.instance_4 = new lib.cta_bg();
	this.instance_4.setTransform(698,207,0.5,0.5);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({_off:false},0).wait(23));

	// Layer_16 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_102 = new cjs.Graphics().p("EA7OAS8IAAjIIAoAAIAADIg");
	var mask_5_graphics_103 = new cjs.Graphics().p("EA5nAS8IAAjIICvAAIAADIg");
	var mask_5_graphics_104 = new cjs.Graphics().p("EA4BAS7IAAjIIE2AAIAADIg");
	var mask_5_graphics_105 = new cjs.Graphics().p("EA2aAS6IAAjIIG9AAIAADIg");
	var mask_5_graphics_106 = new cjs.Graphics().p("EA00AS5IAAjIIJEAAIAADIg");
	var mask_5_graphics_107 = new cjs.Graphics().p("EAzNAS4IAAjIILLAAIAADIg");
	var mask_5_graphics_108 = new cjs.Graphics().p("EAxnAS3IAAjIINSAAIAADIg");
	var mask_5_graphics_109 = new cjs.Graphics().p("EAwAAS2IAAjIIPZAAIAADIg");
	var mask_5_graphics_110 = new cjs.Graphics().p("EAuaAS2IAAjIIRgAAIAADIg");
	var mask_5_graphics_111 = new cjs.Graphics().p("EAszAS1IAAjIITnAAIAADIg");
	var mask_5_graphics_112 = new cjs.Graphics().p("EArfAS0IAAjIIVtAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(102).to({graphics:mask_5_graphics_102,x:382.9999,y:121.25}).wait(1).to({graphics:mask_5_graphics_103,x:386.2487,y:121.1625}).wait(1).to({graphics:mask_5_graphics_104,x:389.4975,y:121.075}).wait(1).to({graphics:mask_5_graphics_105,x:392.7464,y:120.9875}).wait(1).to({graphics:mask_5_graphics_106,x:395.9952,y:120.9}).wait(1).to({graphics:mask_5_graphics_107,x:399.244,y:120.8125}).wait(1).to({graphics:mask_5_graphics_108,x:402.4928,y:120.725}).wait(1).to({graphics:mask_5_graphics_109,x:405.7416,y:120.6375}).wait(1).to({graphics:mask_5_graphics_110,x:408.9905,y:120.55}).wait(1).to({graphics:mask_5_graphics_111,x:412.2393,y:120.4625}).wait(1).to({graphics:mask_5_graphics_112,x:417.2501,y:120.375}).wait(10));

	// Layer_14
	this.instance_5 = new lib.cta_bg();
	this.instance_5.setTransform(698,207,0.5,0.5);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(102).to({_off:false},0).wait(20));

	// ball
	this.instance_6 = new lib.Symbol27();
	this.instance_6.setTransform(778.9,23.95,1,1,0,0,0,7.5,7.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(83).to({_off:false},0).wait(1).to({x:791.3,y:28.6},0).wait(1).to({x:800.6,y:31.55},0).wait(1).to({x:808.4,y:33.6},0).wait(1).to({x:815.25,y:35.15},0).wait(1).to({x:821.3,y:36.25},0).wait(1).to({x:826.7,y:37.05},0).wait(1).to({x:831.65,y:37.65},0).wait(1).to({x:836.15,y:37.95},0).wait(1).to({x:840.35,y:38.1},0).wait(1).to({x:844.35,y:38},0).wait(1).to({x:848.3,y:37.7},0).wait(1).to({x:852.4,y:37.15},0).wait(1).to({x:857,y:36.2},0).wait(26));

	// Layer_9_copy (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_83 = new cjs.Graphics().p("EA2PAFWIAAj0INcAAIAAD0g");
	var mask_6_graphics_96 = new cjs.Graphics().p("AmtB6IAAjzINbAAIAADzg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(83).to({graphics:mask_6_graphics_83,x:433.075,y:34.25}).wait(13).to({graphics:mask_6_graphics_96,x:823.15,y:56.25}).wait(26));

	// block_logo_copy
	this.instance_7 = new lib.Symbol26();
	this.instance_7.setTransform(825,-0.8,1,1,0,0,0,40,17.2);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(83).to({_off:false},0).to({y:41.2},13).wait(26));

	// Layer_9 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_83 = new cjs.Graphics().p("EA3AADYIAAj0IL4AAIAAD0g");
	var mask_7_graphics_96 = new cjs.Graphics().p("Al7B7IAAj1IL3AAIAAD1g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(83).to({graphics:mask_7_graphics_83,x:428.049,y:21.625}).wait(13).to({graphics:mask_7_graphics_96,x:818.075,y:31}).wait(26));

	// block_logo
	this.instance_8 = new lib.Symbol26();
	this.instance_8.setTransform(825,61.2,1,1,0,0,0,40,17.2);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(83).to({_off:false},0).to({y:41.2},13).wait(26));

	// Layer_7_copy (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_78 = new cjs.Graphics().p("AqRB6IAAj0IUiAAIAAD0g");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(78).to({graphics:mask_8_graphics_78,x:705.65,y:29}).wait(44));

	// small_arcade_logo_copy
	this.instance_9 = new lib.Symbol25();
	this.instance_9.setTransform(707,65.2,1,1,0,0,0,60,19.2);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(78).to({_off:false},0).to({y:41.2},12).wait(32));

	// Layer_7 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_78 = new cjs.Graphics().p("AqRB6IAAj0IUiAAIAAD0g");
	var mask_9_graphics_90 = new cjs.Graphics().p("AqRB6IAAj0IUiAAIAAD0g");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(78).to({graphics:mask_9_graphics_78,x:705.65,y:50.25}).wait(12).to({graphics:mask_9_graphics_90,x:705.65,y:50.25}).wait(32));

	// small_arcade_logo
	this.instance_10 = new lib.Symbol25();
	this.instance_10.setTransform(707,-1.8,1,1,0,0,0,60,19.2);
	this.instance_10._off = true;

	var maskedShapeInstanceList = [this.instance_10];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(78).to({_off:false},0).to({y:41.2},12).wait(32));

	// date
	this.instance_11 = new lib.Symbol23();
	this.instance_11.setTransform(766.15,145.9,0.4991,0.4988,0,0,0,285.5,64);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({_off:false},0).to({y:158.9,alpha:1},21,cjs.Ease.quadOut).wait(42));

	// arcade_fireandmore
	this.instance_12 = new lib.Symbol22();
	this.instance_12.setTransform(811.8,76.9,1,1,0,0,0,393,35.5);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(59).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:759.45,y:93.85,alpha:1},21,cjs.Ease.quadOut).wait(42));

	// Layer_3 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_59 = new cjs.Graphics().p("AVPGsIAAlAMA0NAAAIAAFAg");
	var mask_10_graphics_60 = new cjs.Graphics().p("AVPGSIAAlAMA0NAAAIAAFAg");
	var mask_10_graphics_61 = new cjs.Graphics().p("AVPF3IAAlAMA0NAAAIAAFAg");
	var mask_10_graphics_62 = new cjs.Graphics().p("AVPFdIAAlAMA0NAAAIAAFAg");
	var mask_10_graphics_63 = new cjs.Graphics().p("AVPFDIAAlAMA0NAAAIAAFAg");
	var mask_10_graphics_64 = new cjs.Graphics().p("AVPEpIAAk/MA0NAAAIAAE/g");
	var mask_10_graphics_65 = new cjs.Graphics().p("AVPEOIAAk/MA0NAAAIAAE/g");
	var mask_10_graphics_66 = new cjs.Graphics().p("AVPD0IAAk/MA0NAAAIAAE/g");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_10_graphics_59,x:469.9504,y:42.8003}).wait(1).to({graphics:mask_10_graphics_60,x:469.9504,y:40.1717}).wait(1).to({graphics:mask_10_graphics_61,x:469.9504,y:37.5431}).wait(1).to({graphics:mask_10_graphics_62,x:469.9504,y:34.9146}).wait(1).to({graphics:mask_10_graphics_63,x:469.9504,y:32.286}).wait(1).to({graphics:mask_10_graphics_64,x:469.9504,y:29.6574}).wait(1).to({graphics:mask_10_graphics_65,x:469.9504,y:27.0289}).wait(1).to({graphics:mask_10_graphics_66,x:469.9504,y:24.4003}).wait(56));

	// copy1
	this.instance_13 = new lib.Symbol19();
	this.instance_13.setTransform(760.65,71.55,0.6171,0.6163,0,0,0,326.8,27.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({_off:false},0).to({regX:326.6,regY:27.6,scaleX:0.4992,scaleY:0.4991,x:773.05,y:68.8,alpha:1},20).wait(100));

	// Layer_12 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_2 = new cjs.Graphics().p("EA1wANrIAAqAIIIAAIAAKAg");
	var mask_11_graphics_3 = new cjs.Graphics().p("EAyLAODIAAqCIM2AAIAAKCg");
	var mask_11_graphics_4 = new cjs.Graphics().p("EAumAObIAAqDIRlAAIAAKDg");
	var mask_11_graphics_5 = new cjs.Graphics().p("EArBAOzIAAqFIWTAAIAAKFg");
	var mask_11_graphics_6 = new cjs.Graphics().p("EAnbAPLIAAqHIbCAAIAAKHg");
	var mask_11_graphics_7 = new cjs.Graphics().p("EAj2APjIAAqIIfxAAIAAKIg");
	var mask_11_graphics_8 = new cjs.Graphics().p("EAgRAP7IAAqKMAkfAAAIAAKKg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AcsQTIAAqLMApNAAAIAAKLg");
	var mask_11_graphics_10 = new cjs.Graphics().p("AZHQrIAAqNMAt7AAAIAAKNg");
	var mask_11_graphics_11 = new cjs.Graphics().p("AViRDIAAqPMAyqAAAIAAKPg");
	var mask_11_graphics_12 = new cjs.Graphics().p("AR9RbIAAqQMA3YAAAIAAKQg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AOXRzIAAqSMA8HAAAIAAKSg");
	var mask_11_graphics_14 = new cjs.Graphics().p("AK8SLIAAqUMBA2AAAIAAKUg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_11_graphics_2,x:395.9977,y:87.4716}).wait(1).to({graphics:mask_11_graphics_3,x:403.3291,y:89.8781}).wait(1).to({graphics:mask_11_graphics_4,x:410.6606,y:92.2846}).wait(1).to({graphics:mask_11_graphics_5,x:417.992,y:94.6912}).wait(1).to({graphics:mask_11_graphics_6,x:425.3235,y:97.0977}).wait(1).to({graphics:mask_11_graphics_7,x:432.6549,y:99.5042}).wait(1).to({graphics:mask_11_graphics_8,x:439.9863,y:101.9107}).wait(1).to({graphics:mask_11_graphics_9,x:447.3178,y:104.3173}).wait(1).to({graphics:mask_11_graphics_10,x:454.6492,y:106.7238}).wait(1).to({graphics:mask_11_graphics_11,x:461.9807,y:109.1303}).wait(1).to({graphics:mask_11_graphics_12,x:469.3121,y:111.5368}).wait(1).to({graphics:mask_11_graphics_13,x:476.6436,y:113.9434}).wait(1).to({graphics:mask_11_graphics_14,x:485,y:116.3499}).wait(108));

	// arcade_logo
	this.instance_14 = new lib.Symbol8copy();
	this.instance_14.setTransform(674.95,104.75,0.9146,0.9144,0,0,0,295.7,94.7);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({_off:false},0).to({regX:295.9,regY:95.2,scaleX:0.6057,scaleY:0.6059,x:766.15,y:163.5},19,cjs.Ease.quadOut).wait(1).to({regX:295.5,regY:141.8,x:765.9,y:191.7},0).wait(37).to({regX:295.9,regY:95.2,x:766.15,y:163.5},0).wait(1).to({regX:295.5,regY:141.8,scaleX:0.6182,scaleY:0.6183,x:764.95,y:170.1},0).wait(1).to({scaleX:0.6285,scaleY:0.6286,x:764.15,y:152.25},0).wait(1).to({scaleX:0.6368,scaleY:0.6369,x:763.6,y:137.8},0).wait(1).to({scaleX:0.6434,scaleY:0.6435,x:763.1,y:126.35},0).wait(1).to({scaleX:0.6485,scaleY:0.6485,x:762.75,y:117.5},0).wait(1).to({scaleX:0.6522,scaleY:0.6522,x:762.4,y:111.1},0).wait(1).to({regX:295.6,regY:94.7,scaleX:0.6547,scaleY:0.6547,x:762.55,y:76.4},0).wait(56));

	// Layer_12_copy (mask)
	var mask_12 = new cjs.Shape();
	mask_12._off = true;
	var mask_12_graphics_2 = new cjs.Graphics().p("EA1wALkIAAqAIIIAAIAAKAg");
	var mask_12_graphics_3 = new cjs.Graphics().p("EAyHALtIAAqSIM+AAIAAKSg");
	var mask_12_graphics_4 = new cjs.Graphics().p("EAueAL2IAAqlIR0AAIAAKlg");
	var mask_12_graphics_5 = new cjs.Graphics().p("EAq1AL/IAAq3IWqAAIAAK3g");
	var mask_12_graphics_6 = new cjs.Graphics().p("EAnMAMIIAArJIbgAAIAALJg");
	var mask_12_graphics_7 = new cjs.Graphics().p("EAjjAMRIAArbMAgWAAAIAALbg");
	var mask_12_graphics_8 = new cjs.Graphics().p("Af6MbIAAruMAlMAAAIAALug");
	var mask_12_graphics_9 = new cjs.Graphics().p("AcRMkIAAsBMAqCAAAIAAMBg");
	var mask_12_graphics_10 = new cjs.Graphics().p("AYoMtIAAsTMAu4AAAIAAMTg");
	var mask_12_graphics_11 = new cjs.Graphics().p("AU/M2IAAslMAzuAAAIAAMlg");
	var mask_12_graphics_12 = new cjs.Graphics().p("ARWM/IAAs3MA4kAAAIAAM3g");
	var mask_12_graphics_13 = new cjs.Graphics().p("ANtNIIAAtIMA9aAAAIAANIg");
	var mask_12_graphics_14 = new cjs.Graphics().p("AKONSIAAtbMBCQAAAIAANbg");

	this.timeline.addTween(cjs.Tween.get(mask_12).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_12_graphics_2,x:395.9977,y:73.9716}).wait(1).to({graphics:mask_12_graphics_3,x:403.6936,y:74.8861}).wait(1).to({graphics:mask_12_graphics_4,x:411.3896,y:75.8005}).wait(1).to({graphics:mask_12_graphics_5,x:419.0855,y:76.715}).wait(1).to({graphics:mask_12_graphics_6,x:426.7815,y:77.6294}).wait(1).to({graphics:mask_12_graphics_7,x:434.4774,y:78.5439}).wait(1).to({graphics:mask_12_graphics_8,x:442.1733,y:79.4583}).wait(1).to({graphics:mask_12_graphics_9,x:449.8693,y:80.3728}).wait(1).to({graphics:mask_12_graphics_10,x:457.5652,y:81.2873}).wait(1).to({graphics:mask_12_graphics_11,x:465.2612,y:82.2017}).wait(1).to({graphics:mask_12_graphics_12,x:472.9571,y:83.1162}).wait(1).to({graphics:mask_12_graphics_13,x:480.6531,y:84.0306}).wait(1).to({graphics:mask_12_graphics_14,x:489.3708,y:84.9982}).wait(108));

	// arcade_logo_copy
	this.instance_15 = new lib.Symbol8();
	this.instance_15.setTransform(857.1,190.4,0.9147,0.9147,0,0,0,295.4,94.7);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_12;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({_off:false},0).to({regX:295.9,regY:95.2,scaleX:0.6057,scaleY:0.6059,x:766.15,y:163.5},19,cjs.Ease.quadOut).wait(1).to({regX:295.5,regY:47.2,x:765.9,y:134.4},0).wait(37).to({regX:295.9,regY:95.2,x:766.15,y:163.5},0).wait(1).to({regX:295.5,regY:47.2,x:765.9,y:150.8},0).wait(1).to({y:164.3},0).wait(1).to({y:175.3},0).wait(1).to({y:183.95},0).wait(1).to({y:190.65},0).wait(1).to({y:195.5},0).wait(1).to({regX:295.9,regY:95.2,x:766.15,y:227.9},0).wait(56));

	// Layer_21
	this.instance_16 = new lib.Symbol31();
	this.instance_16.setTransform(279.5,130.5,1,1,0,0,0,280.5,119.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(25).to({_off:false},0).to({regX:280.6,regY:119.7,scaleX:1.0178,scaleY:1.0177,x:281.35,y:135.2},96,cjs.Ease.quadInOut).wait(1));

	// orig_image2
	this.instance_17 = new lib.Symbol18();
	this.instance_17.setTransform(134,157.5,1,1,0,0,0,84,92.5);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(16).to({_off:false},0).to({x:133,alpha:1},4).to({_off:true},5).wait(97));

	// orig_image1
	this.instance_18 = new lib.Symbol16();
	this.instance_18.setTransform(51.5,147.5,1,1,0,0,0,52.5,102.5);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(12).to({_off:false},0).to({alpha:1},4).to({_off:true},9).wait(97));

	// orig_image3
	this.instance_19 = new lib.Symbol30();
	this.instance_19.setTransform(259,132,1,1,0,0,0,65,118);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(20).to({_off:false},0).to({alpha:1},4).to({_off:true},1).wait(97));

	// orig_image5
	this.instance_20 = new lib.Symbol17();
	this.instance_20.setTransform(479.5,141.5,1,1,0,0,0,80.5,108.5);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(14).to({_off:false},0).to({alpha:1},4).to({_off:true},7).wait(97));

	// orig_image4
	this.instance_21 = new lib.Symbol20();
	this.instance_21.setTransform(373.5,130.5,1,1,0,0,0,58.5,119.5);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(18).to({_off:false},0).to({alpha:1},4).to({_off:true},3).wait(97));

	// Layer_10 (mask)
	var mask_13 = new cjs.Shape();
	mask_13._off = true;
	var mask_13_graphics_0 = new cjs.Graphics().p("AH6DhIgKAAIgKAAIgyAAIgKAAIgoAAIgKAAIgKAAIAAgKQAbgOARgYQABgCAFAAQAFAAABgCQAdhMgtg0QgFAAgDgDQgPgOADggQBPhmA9h2IAAAUQAWA/gsAsQgDADgFAAQAUCeAACXIAAAKIgKAAgADEDhIg8AAIgKAAIgKAAIgKAAIhaAAIgKAAIhPAAIgKAAIiMAAIgKAAIhkAAIgKAAIgeAAIgKAAIgeAAIgKAAIgoAAQAAgFgCgEQgVghgHgwQAAgFgCgDQgZgegDg0IgFgBQgFg1AAg3QAaAGAVBEQALAlARAuQANAnACA1QAlhTAphOQACgEAAgFQAsgaAvgVQAEgCAFAAQBTh2CLg5QAPgGgHAVQgTCNCKAcIAKABQAageAsgFIAAAFQAuBJAxBCIgFAAQg+A0AMBOIAAAKIgKAAg");
	var mask_13_graphics_2 = new cjs.Graphics().p("AH4MuIgKAAIhGAAIgKAAIgoAAIgKAAIhGAAIgKAAIgoAAIgKAAIjvAAIgKAAIgoAAIAAgKQCahpBBi5IAEADQANAGgHAVQAaBLBBAhQAEACAFAAQB8gLAjhjQABgFAAgFIAAgKQAfhMAeARIADgMQAQg/AUAOQAEA7gWBSQgCAEAAAFQAQAZgFAtIgBAKQAFAAAAABQASBNghAgIAAA8IAAAKIgKAAgAkJMuIgKAAIgKAAIg8AAIgKAAIhkAAIABgKQABglgWgNQgFAAgBgCQgRgjgHgrIAAgKQgDgggRgSIgFAAQgFiWAAiWIAKAAIAAgKIAAhQQAPjIA8idQAAgCAFAAIAAgKIAAgKQAgBxA6hHQA2hCBMAEQAhAIgeAiQgDADAAAFQBMgEAlhlQAUg5ANhEQAGgggWgIQAyhkBOhIQAxgtAYhIQAjhoBqgZQAHgCAKAKQASAcgMAzQgBABgFAAQgFA8gLAsQhWFOinDyQgFAAgEACQjhA/iICaQARBCA7AYQBEAbgYBTIABAKQAHA6gSAgIAAAKQgKBQgoAyIAABGIAAAKQAXA/AjAxQACADAAAFIgKAAgAiqJbQgahNgThSQAOhCAwgfQADgDAFAAIAAgKQCJhiBkiGQACgDAAgFQBNBNg0BkQgTAkAOAlQAFAAACADQA6BHgtA4IAAgKQgChdhsglIAAgFQg9AIg6ARQAAAFgCACQgvAngVBAIgFAAQAJA9gEBPQgFAAAAgBgAEIBeQAAgFADgCQAugwgxg2QgFAAAAgBQgLg0gEg5QBlAegQCLIgFAAIABAKQAGAWgRgCIAAAoIAAAKQAAAFgCAEQgVAxgMAAQgQAAABhYg");
	var mask_13_graphics_4 = new cjs.Graphics().p("EArpAPUIgUAAIgKAAIgKAAIgKAAIgUAAIgKAAIgKAAIgKAAIgUAAIgKAAIgKAAIgKAAIgKAAQAAgFgBgFQgEgKgFgKQAYh5AphrQAAgCAFAAIAAgKQgBhPgJhHQA4A+AgAxQACAEAAAFQAFh4AtgUIAEAHQAVAmgZAjIAAAKIAAAKIAAAKQgGBogOBgQARBFgPAzQgCAFAAAFIgKAAgEAmLAPUIgoAAIgKAAIgoAAIgKAAIlKAAIgKAAIg8AAIgKAAIi0AAIgKAAIgeAAIgKAAIgKAAIgUAAIgKAAIgKAAIgyAAQABgzgEgfQgGgygLh2QgFAAAAgCQgehOgPhaQgFAAAAgCQgihUgBhyQAwhxBBB6QAxBcA6AnQAwgvAtgzQACgCAFAAQAsAIAdAnQACADAFAAQAWBAApArQACADAFAAQAsgbgZhnQgRhGA6goQBjAIBVBkQAbAfAJAzQBHCQByBlQAFAFACAKQAEAUAOAKIAFAAQgFB1gKhXQAAgFgBgEQgUg6gxARIAABQIAAAKQAgBMAuAcQACABAAAFIgKAAgA82PUIuEAAIgKAAIgKAAQAAgFgBgFQgihjgZhvQgFAAgBgCQgEgIAAgKQA6g5ARhmQAAgBAFAAIAAgKQgHjVgrixQAWhTAIhhIAAgJQCNiqDIhsQAEgCAFAAIAAgKQAiADAGBXIAAAKQBKAiBzgTQABAAAAgFQBngvAgh6QAAgBAFAAIAAgKIAAgUQASgbgHg1IgBgKQgFAAAAgBQgqh6h7glQAohMAihSQABgCAFAAIAAgKQA9hjBbhEQADgDAFAAQgFBfBGAcQAlAPASAqQgOBpgPA3IgBAKQgyAZghArQgCACgFAAQgbB2gfBxQgCAEAAAFQApAxBEAZQABABAAAFQA+AigyBdQgNAYAqgJQAJgCAKAAIAAgKQAcgNAYgPQADgCAFAAQB0AIhhA8QgEACgFAAIgKAAQAAAFgCACQgDADgFAAQAAAFgCACQhgBKgqCAQAAAFgBAEQgOApgPAoIAAAUIAAAKQAAAFgBAEQguCKgDixQAngSgbgsQgCgDAAgFQgFAAAAgCQgThAgQhAQgFAAAAgBQgchShDAEQgFAFgGACQgOADgDAHQgqBIgUBaQAEA5AYAiQACAEAAAFQAFAAADACQAsAvASBHIAAAKQACBOg+g6IgKABQhfAOgjBLIAAAKQgEAzgQAnQACBEAzAUQAVAIAJAWQASApATgTQBHgsArgOQANgEAJAcQABADgHAVQAfAoAbApQACAEAAAFQAUAZAygEIAKgBQAUgFASgJQACgBAAgFIAAgKQAkgUASgmQABgCAFAAIAAgKIAAgKQA0g7AXhaQAAgBAFAAIAAgKIAAgUQAcgzALAzIABAKQAAAKAEAIQABACAFAAQAFAAAAABQAMA9glASIABAKQAGAVgRgBIAAAoIAAAKQAFAAAAABQARBqggA/QAAAFACAEQAnBIhHgVQAAAFgCAEQgDAGgFAFIAAAKIgKAAg");
	var mask_13_graphics_6 = new cjs.Graphics().p("EAqkAPxIgKAAIgKAAIgUAAIgKAAIgeAAIgKAAIgKAAIgKAAIgUAAIgKAAIiCAAIgKAAIiqAAIgKAAIgeAAIgKAAIhQAAIgKAAIgKAAImQAAIgKAAIgoAAIgKAAIgKAAIgBgJIgdh5QgFAAgBgCQgbg2gHhKQgFAAgBgCQg8hSgOh+IgBgKQgNhagGhkIgFAAQgijrgVj0QAFgFAGgDQAEgCAFAAIAAgKIAAgKQAMgSATgKQAEgCAFAAIAAgKIAAgKQBJhPAHBjIAAAKQAXANAPATQACADAAAFQAaAiANAvQABAEAAAFQAxBGAtBNQABACAFAAQA2AMA/AyQADADAKgFQAjh2gYiXIgBgKQgFAAAAgBQgVhNgOhSIgFAAQgPjFAAjpIAKAAIAAgKIAAiCIAAgKIAAgeQAqgBAHAfIABAKIAAAKQBcCGB0BtQACACAAAFQAKAjAWAZIAIAKQg0ALhEAxIAABaIAAAKQBNDWDJBaQACABAAAFQBIAGAlgKQABgBAAgFQAlhAgNhEQgQhZAWg7QBJArAYBnQAUBTA1A9QgQhOAyhaQABgCAFAAIAAgKQAaAFAMARQACADAAAFQAjAjAKBBIAFAAQAXDZA4DLQABAEAAAFIAAAeIAAAKQASAXgHAvIgBAKIAAAoQgEBjgUg9QgahUgeAQQgFAAAAABQgiCCgVCLQAWCQAbCIIABAKIgKAAgA8DPxIgoAAIgKAAIgyAAIgKAAIh4AAIgKAAIgUAAIgKAAIhaAAIgKAAIhuAAIgKAAIloAAIgKAAIgyAAIgKAAIgeAAIgKAAQAAgFgCgEQgXg3AFhWQAFgFAGgDQAEgCAFAAQAviyARi1QADghgKAGQhJAlAGgzQAchUAiAgQAXAWAPgeQARgwADg+IAAgKIAAgKIAAhGIAAgKQgDg9gbgnIgKABQhKAEgQg3QAKgKAMgHQADgDAFAAIAAgJQCmi4DaiHQAwgdAFhRQABgTgIg0QBkhVAZikQAAgBAFAAQgSgbgCgrIAAgKQAqgrARhDIABgKQBLhJBAATQAIACADAgQAgADAHAcIABAJIAKAAQAFAAACADQBHBQA+BXQAAAFgCADQhGBQgSBcIgVgGQgthOiGgGQgFAAgCADQhlBjhSB2IAAAKQgCAsgSAaQgUC/BmBDQADACAFAAQCSgJBXh2QACgDAFAAQA1ASAtAaQACABAAAFQBjAqAuBYIgFAAQAAAFgCACQgXANgjAAQiLBzgoDWQgeCbgViRQAAgFACgEQAghOg2hxQgKgKgDgLQgXhjhUALQgFAAgCADQg3A7gSBhQAGB3BIA2QACACAAAFQg3BBgFBzIAAAKQAlAhApAeQACACAAAFQALA/ASBOIABAJQAoAtAmAvQACADAAAFQANARAlgGIAKgBIAAgKQBVgoAihUQAPglAQgdIAAgKIAAgKQATgLAGgcQAAgBAFAAIAAgKIAAgKIAAgKQAeg3ATBMIABAJQAFAAAAABQAMA9glASIABAKQAGAWgRgCQAMBjAIBlIAAAKIABAKQAGA+glASIAAAKIgKAAgEArfAMpIABgyQA8AOg+BAgAW2KyQhTjEgjj1IAKAAIAAgKIAAgKIgFAAQgFg8AAg8QBUAbgSCGQgGAnAAAoQAeBVAkBZQAlBdgrBTQAAgFgCgEgEgsJAJrQBQAFhMAaIgBAAQgGAAADgfgEAkugCYQgfgRgFgpQgFAAgDgCQgugnAEhZQAvgTADBFIAAAKQA9BPgVAzg");
	var mask_13_graphics_8 = new cjs.Graphics().p("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");
	var mask_13_graphics_10 = new cjs.Graphics().p("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");
	var mask_13_graphics_12 = new cjs.Graphics().p("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");
	var mask_13_graphics_14 = new cjs.Graphics().p("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");
	var mask_13_graphics_16 = new cjs.Graphics().p("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");
	var mask_13_graphics_18 = new cjs.Graphics().p("EAr1ARmIgKAAIgKAAIjcAAIgKAAIgKAAIgUAAIgKAAIgyAAIgKAAIhuAAIgKAAIlAAAIgKAAIkYAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAIhQAAIgKAAIg8AAIgKAAIgyAAIAAgKIAAlKQASgwgDhIIAFAAIgBgKQgLgwACg+QgFAAgBgCQgJgSgFgUQgFAAAAgBQgFgdAAgeQAFkeAsjVIABgKQAegtAzgXQAEgCAFAAIAAgKQBvg+hCBxQgHAMACAbQAQAdAYgYIAAAFQAugnAgg1QACgDAAgFQBHBAAJB9IAAAKQAFAAADACQACADAAAFIAFAAQgGhYgJhbQgFAAgCgDQgcgggPgtIAFgBQALhoA2BfQAUAhgEgqQgHhKAfg5QAAgFgCgCQhBguAHhDQAygggbgoQgRgXg4AZIABAFQBMAEg5BRQgFAAgBACIgEAIQgxgzgphFIAAgKIAAhQIAAgKIAAgKQgFAAAAABQgtB/gyh2QgFAAAAgCQgFgNAAgPQAghfBBggQAKgFgHAgQAPBMASgYQACgCAFAAIAAgKIAAgUQAxAEAKgjQABgEAAgFIAAgKQA+gvBEAGIAKABQBGAsgXAiQgJAPAWAbQA2BNBEAyQADADAFAAQgtBpBCBLQAJAKAUAAQgQAmAIAyQAEAWAEgoQATgyAoAOQABABAAAFQAaA2A0AeQACABAAAFQA1gDAZAZQACADAAAFIBuAAIAKAAQDJBZBADkQAAACAFAAQBjHzgmInIgBAKIgKAAgAV9RmIg8AAIgKAAIgoAAIgKAAIAAgKQgLhjABhvQAPgtAKg2QAAgBAFAAIAAgKIAAhkQASghgDg5IAFAAIABgKIATkOQgFAAAAgBQg/j2gCkuQBUACAgBqQAJAgAZAUQgPDjAAD8QABBGgCBuQgCBvgGCBQgCAzAaATQgjBxAYBhIABAKIgKAAgATxRmIgUAAIgKAAIhkAAIgKAAIgKAAIgKAAIiMAAIgKAAIiqAAIgKAAIigAAIgKAAIgKAAIgKAAIgUAAIgKAAIi+AAIgKAAIg8AAIgKAAIhkAAIgKAAIgKAAIk1AAIgKAAIg8AAIgKAAIjwAAIgKAAIhQAAIgKAAIhGAAIgKAAIgKAAIgUAAIgKAAIgUAAIgKAAIjIAAIgKAAIjIAAIgKAAIhuAAIgKAAIgUAAIgKAAIgeAAIgKAAImGAAIgKAAIgKAAIiMAAIgKAAIqyAAIgKAAIgeAAIgKAAIgKAAIgKAAIgKAAIhaAAQAAgFgBgFQgEgKgFgKQgFAAgBgCQgdhEgPhQQgFAAAAgBQgWhrAHiEIAAgKIAAhGIAKAAIAAgKIAAhGIAKAAIAAgKIAAhGIAAgKIAAhGIAKAAIAAgKIAAhaIAKAAQAJhbAahOQAAgBAFAAIAAgKQAUgFANgNQACgCAFAAIAAgKQAZgKASgSQACgCAFAAIAAgKIAAgeQBWgrBMg2QADgCAFAAIAKAAIAAgKQAvgSAjgeQADgCAFAAIAAgKQBJgwAjgsQACgDAAgFQBbAtAYhAQAAgBAFAAQgngzhKhDQghgfAGBFQgUArgUhbQgDgOgVgLQgGgCAAgPQgFAAAAgCQgUgwgZgoQAAgFACgFQAphvg1h3IAUAAIAKAAIAAgKQAygWAtgYQg4AkABA+IAAAIIgBAKQgFAXgOARQAAAjAFAiIAFABQBEgHg8AsQgDADgFAAQAAAPAFANQAAACAFAAQAqg4ASA4IACgUQADgbAPgrQB0gZBigjQABAAAIAHQAVAXgOAUQBPAAAGBFIAFABQg8AbBDgNIAhgEIADAJQACAGAFAFQAjAegSAbQgCADgFAAQgwAlghAVQgEACgFAAQAIBsgyAxQgDADgFAAQAKAxAAApIAAAKQAyAtBEAdQACABAAAFQAZAZAGASQAFASAHAMIAQgGQAGgCAFgFQBCATAlAvQACADAFAAIAAgKQAUgBAMgHQADgCAFAAIAAgKQBIgBgngfQgDgCAAgFIgKgBQgWgCACgbIgKgBQgzgHgJhSIAAgKQgDgRgRgDQgFAAAAgBQgFgTAAgUQAfhAgBguIAAgKQgFAAAAgBQgFgTAAgUIAogJIAKgBIAAgKIAKAAIAAgKQgCgcgIgWQAKgFALgEQAEgBAFAAQAKhwBNgPQAagFARgcQBFANAhhDQADgGAPAAQA6A7A0gsIAAAFQAZgQAtAFIAKABIAAgKQAigkA2AeQACABAAAFQB/gSAIAwIgFAAQAAAFgCACQgIAIgKAFIAAAKIAAAKQAfAVAngBIAKAAQBLAUAHBjIAAAAQABAEACADQAGAIARAFQACABAAAKQAaAEgFAkIgBAKIAAAKIAAAKIAAAyIAAAKQAmAdgaA0QgCAEAAAFIAAAUIAAAKQAAAFgCADQgQAYgWASQAAAKAEAIQABACAFAAQAFAAADACQAmAphWAHIABAKQAHAqgcAIQAAAFgBAAQgxAThGgFQAIAlAeARQACABAAAFQByBbAGDHIAAAKQA+CTgGixQgCg3AHg/IgBgCIABgBIACgSQAEgiADgvIAAgKQASgwgDhHIAFAAIAAgKIAAgUIAAgKIAAhGIAKAAIAAgKQAFgFADgGQACgEAAgFIABgKQAIgjgJgZQAQh+A6BQQAtA+AzhgIAAgKQgGhjgihHIAKAAIAKAAQAKgFALgEQAEgBAFAAIAAgKQA8gVAABRIAAAKQAQBAANBCIABAKQA1BSBLA9QACACAAAFQAwAWAyAWQACABAAAFIAUAAIAKAAQAAgFADgDQCQiNhNkPQgFAAgCgDQhChZgvhsQgFAAgCgDQgwg+h9APQAAgFgCgEQgqhRBAgyQgFgFgCABQg+AfAThBIAAgCQgSgOgWgGQAhggAegkQACgCAFAAIAAgKIAAgKIAKAAIAKAAQACgsAlgLQABAAAAgFIAAgKQBugPAWCFQAHArAVAnQgEAtgOAjQgCAFAAAFQA9EIC/CFQADADAFAAQBlAVA9hFQACgCAFAAQBIAhBcBCQAeAWAFgDQAGgDAFgFQBBCCAPC0IAAAKQAPAUgEAnIgBAKIAFAAQADhIgIhDQAbgRAMAlQABAFAAAFQBXCOA+CnQABAFAAAFQBKBRAGiXIAAgKIgFgBQgFgnAAgoIgBgKQgWiNhDhiQgFAAgDgCQhgg7hChZQgFAAgBgDQgRgYgHghQAIgRAWgDIAKAAQA4AFAjBQQAbA+A+AhQAyAAAyAFIAAAFQBkhQAAi0IAAgKQA5g2AWhXIABgJQgehfAAg8IAKAFQAbA0AzgaQACgBAAgFQAegtATg4QABgEAAgFQA+g6BXAWQABABAAAFIAABQIAAAKQANAbAPAYQACAEAAAFQAoAUgNARQgCADgFAAQAAAFgCABQh/BBgfCfIAAAKIAAAKIAAAKQgGAsgOAkIAAAoIAAAKIAABGIAAAKIAdCWIABAKQAdAkAiAfQACADAFAAQALBYAcBHQABAFAAAFQAFAAAAABQAKA7gtgeQAAAFgCABQg9AtgHBjQgHFCCgCbQACADAFAAQgQCbAZCbIABAKIgKAAgA96plQAPgeAZAPIAAgFQAAgFgCgEQgDgGgFgFIAKAAIAAgKIAAgoIAAgKQBIAigjA1QgCADgFAAQAAAFgCAEQgRAkgRAAQgRAAgRgjgEAgwgJ6QgLghgUgaQBXgngcBYQgJAagIAAQgGAAgFgQgABBq1QBVg0gTBRQgBABgFAAIAAAKIAAAKQAAAFgBAAQgOAEgMAAQgsAAALg7gEggTgNYIgRgRQBUg3gaBbQgDAKgGAAQgLAAgVgdgAAIwWQgDgCAAgFQAaAcgBAAIgWgVg");
	var mask_13_graphics_20 = new cjs.Graphics().p("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");
	var mask_13_graphics_22 = new cjs.Graphics().p("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");
	var mask_13_graphics_24 = new cjs.Graphics().p("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");
	var mask_13_graphics_26 = new cjs.Graphics().p("EAr1ATiIgKAAIjmAAIgKAAIgUAAIgKAAIksAAIgKAAIpEAAIgKAAIgyAAIgKAAIg8AAIgKAAIgoAAIgKAAIhGAAIgKAAIgUAAIgKAAIgoAAIgKAAIgKAAIAAgKIAAhaIgFgBQgFgnAAgoIAKAAIAAgKIAAgKIAAgeIAKAAIAAgKIAAgyIAAgKIAAgUQASgmgDg+IAFAAIAAgKIAAgKIAKAAIAAgKIAAgyIAAgKIAAgKIAAgKIAAgKQABlZBsjxQANgegCAuQAfgrAXhBQABgCAFAAIAAgKIAAgKQBRgwBEAEQABAAAAAPQglBRA6gVQAEgBAFAAQBShQgMhPIAAgKQAoggAUACIAJgNQAIgKADgRQgOhNgkAWIAAgFQgqgwgag/QgCgEAAgFQAAgFgCgCQgmghAKhQQgFAAgEgCQgGgDgFgFQAAAFgCAAQgNAFgPAAIAAAUIAAAKIgBAKQgHA1gWhJQAAgFgDgCQgOgLgDgWQgFAAAAgBQgFgdAAgeQASggALgnQABgEAAgFQAwg8AJAQQANAYAAAeQAYAhAYgsQACgEAAgFIAAgKIAAgKQBPhjCiAvQAEACAFAAQAiBmArA7QADAEAAAFQABBMANg3QABgBAFAAIAAgKIAAgeQBQgsgTBeIgBAKIABAKQAMBTg1ARQgDBEAMA0IABAKQBpgFAYBLQABAFAAAFQAfAYAaAdQADACAAAFQB/ASB7AVIAKABQDJCKAiE/QAEAdAHAqQAmDsAGEnIgBAKQgIB5gLB3IAAAoIAAAKIgKAAgATTTiIgeAAIgKAAIgeAAIgKAAIgeAAIABgKQAEhBgPgtQAAgFgDgEQgdgpg6goQBMgpAQAfQAKAWAIAcQBRA1AcBrIABAKIgKAAgAQ9TiIgKAAIgKAAIiCAAIgKAAIhQAAIgKAAIiqAAIgKAAIi+AAIgKAAIgeAAIgKAAIgKAAIgKAAIjwAAIgKAAIiCAAIgKAAIgTAAIgKAAIjcAAIgKAAIgUAAIgKAAIg8AAIgKAAIg8AAIgKAAIgeAAIgKAAIiCAAIgKAAIgeAAIgKAAIgKAAIgKAAIgKAAIgKAAIhkAAIgKAAIiCAAIgKAAIiCAAIgKAAIgKAAIgKAAIhGAAIgKAAIjcAAIgKAAIgoAAIgKAAIgUAAIgKAAIi+AAIgKAAIgeAAIgKAAIgKAAIgKAAIh4AAIgKAAIrQAAIgKAAIgKAAIgKAAIgKAAIgKAAIhGAAIgKAAIgeAAIAAgKIAAgKQgFAAgBgCQgWgygMg6QgFAAAAgBQgKgsgPgjIAAgKIAAgUIgFAAQgFgyAAgyIAKAAIAAgKIAAgyIAAgKIAAhkIAAgKIAAgoQARg6gChSIAFAAIAAgKIAAgKIAAgKIAAgKQAWh+ARh8IABgKIAAgKQAwgNAZgiQACgDAFAAQAUgUAFgnIAFgBIAAgKQBXgqBUguQAEgCAFAAIAAgKQB+hIBohgIAQgJQAEgCAAgKQANg0gfgWQgCgBAAgFQgvg0gMA+QgIAngNhZQgigGgPgYQg6hWAlgsIgBgKQgHhcgWhsQAWgIAcgCIAKAAIAAgKIAAgKQAwg9AcAoQAHAJgYAPQgQALgWAIQgGADgFAFQAAAFABAEQAOAugjAtQAAAjAFAjIAFAAQBAgQgdA4IAGgHQAigmAjgjQB+AOAJg1QAAgBAFAAQAqgXAWAfQABACAFAAQAeBLAogFIAIALQAHAJAFAKQgWA7A+gdIACABQAiAHgGAgIAAAKIAAAKIAFAAQg5AsgwAaIAAAKQADBsg1A0IAAAeIAAAKIAAAKIAAAKQAiBCBDAfQAEACAFAAQBOAaALAtIABAJQBZALAjBDQABACAFAAIAAgKIAAgKIAKAAIAAgKQAkgIAYgCIAKAAQAAgFACgBQA1gYAFgUQgegMgEgbQgCgMgYATQgRANgXgfQAsgZAFgiQAGgqAoAvIAFgFQgYhNATgwIgFAAIAAgFQhUgCBHgwQAKgHgCAQQAAAGgFAFQgEAFBDAeQAEACgMAIIAFAFQgwBpA4hXQACgDAAgFQAUBAgOBdQgGAggUgKQgbhJAMBIQAAABAFAAQApA2AwgJQABAAAAgFQgzgpAjg1IACgEQAEgUAUASQAQAugBBUIAFAAQAxgtABgtIAMgFQANgFAPAAQgeg4A1AJQAFABAWgCQATgCAzgTIAAgKIAAgUQANgMAaAGQABABAAAFQAiAmAjgDIAGgDQAqgSAIAfIAFgFQAihehUgYQgFgCgFAAQgoA7AYiLQAJg0AlgcQBqAVhFhEQgTgSAMgPQAGgGAggWQgHABgLgDQg/gqBcAIIAUgBQAGAAAFgFQAjAAgrAqQgCADAAAFQAzAmAqAyQACACAFAAQAFA9AXA7QACAFAAAFIAFAAQARBtg0AzQgJAhAPAJIgkAbQglBjgvg1IgBgBQglgPgSAAIgFAAQAMAqgbAIQgEAeAigFIAAAFIBDA1QADACAAAFQAgASAHAqIABAKQAbAhADA5IAAAKQgEAiAMARQACAEAAAFQASBrA1AEIAEgNQAFgNAAgPIAAgKQAAg4gUhUIAAgKIAAgKIAAgeQARgSgCgqIAFAAIAAgKIAAgKQAFgFADgGQACgEAAgFIAAgKIAAgoIAAgKIAAgyQAjiaAeikQAAgBAFAAIAAgKIAAgKQAXgvAegpQACgCAFAAIAAgKQCqgyB6hiQADgCAFAAQAhg+gDgwIAAgKQhQgog6grQgRgMAPgPQA/hfhdAKIAAgFQgBgsAZggQAQgTAUgPQAdhRBIglQAYgNANgZQACgEAKAAQAlgVBNAcQB2ApBhA0QA2BHgWAyQgCAEAAAFQBPBEg1BkQgBACgFAAQATA5AcAsQADAEAAAFQgWA8hCAZQgCAAAAAFQB1CLDBA7QAFACAFAAQAHAmAiALQAEABAFAAQAYhHBNgSIAJgBQBDgFAsgWQBMgkBdgKQAfgDgBAkQAQgggLgwIAFAAIAAgKQAmgWAZgkQACgCAFAAIAAgKQAQABgFgWIgBgJIgBgKIgJgoQgFgogggQQhIgjgLhjIAAgKIAAgyQAugsAShLQABgBAFAAQAsBLAkAUIAAgFQA1g0BXgNIAAAFQBOAjgXAwQgKAWAXAqQAMAXAAAeQARAnAUAgQADAEAAAFIgKC0IAAAKQAhBIAjBFQACAEAAAFQBSAmBBA3QADACAAAFQgNBDhDAMIgKABQgmA+gtA3QgCADgFAAQAAAFgDADQg3A9hIgyQgFAAgFACQhiAeg+B2QBTgJgPA2QgLAqAhgXQAVgPgOAoQgCAGgFAFQgOgDAYAwQANAbARASQAThEgShaQgBgCgIgEQgCgBAAgFQCngFh/gYIgKgBQAZgdAjgfIgKgKQA9gnA9AuQADADAFAAQgVBtA3BOQABADAFAAQgsA0hNgoQgEgCgFAAQAqBAgHBpIgFABIgBAFQgiAEgZALIABAKQAGCEgRBsQAAAyAFAyQANBvgwgBQAAAFgCAFQgMAvhggRQAABsAoABIAKABQAegYAKBnIAKBRIgKAAgAS/M0IAAgUQAygXgbBRQgIAYgGAAQgIAAgBg+gATwLkIABgeQAgg/geBhIgCAGQgBAAAAgKgA73hFQgBgFAAgFQBIAAgUgdQgJgNARAOQAKAIABAUQACAXAHARQAVhjAIAnIABAKQBygshqA+QgDACgFAAQBCAVgtAwIgfAeQhLgZgYhKgA02g7IAAgKQAkAfAugPQApgMgkAUQgbAQgeAKQgHAFgGAAQgRAAAAgtgA3CgnQBQgDhQAIgA2Qg7QBGgJhGAOgA2QhjQAugpADALQAJAkgcAAQgMAAgSgGgA02hjQBJgIhJANgA3Wi9QBEgvBIgmIAAAFQgQAshBAxIgUAPQgPAMgJAAQgRAAACgogA7QjvQA+gpANhEQAGgeAdgLIAAgFQgeANgKgwQAjAAAZgFIAAAFQAhgRAUgfQACgCAFAAIAAgKQAKAFAKAEQAFABAFAAIAAgKQAPAAANgFQACAAAAgFQgFAAAAgBQgFgOAAgPQBQgUBPAXQAdAIAWgVQguBQhogKIgKAAQAAAFgCADQg7BQgnAgQgFAAgCADQg9BcgggFQgdBMAAgaQAAgQgFANQgPAfgMAAQgQAAgNg6gA4ljVQgBgBAAgFQAkAMgFAAQgEAAgagGgA3okZQgCgDAAgFIAaAmIgYgegA2kkhQA5gOgGASQgJAXgMAAQgNAAgRgbgA9mnVQgFAAgBgCQgEgRgKgLQAZgeAKg7QAAgBAFAAIAKAAIAKAAQAsAvgSAkQgWAvgXAAQgLAAgKgKgAxQnMQgTAAgBgdQAogYAAAsQAAAKgSAAIgCgBgAzmobQAFgFAGgDQAEgCAFAAIAAgKIAKAAIAAgKQAtgFAXASQACACAAAFIAAAUIAAAKQAFAKgCACQggAbgXAAQgiAAgOg7gAxaolQBfAAhPAfQgFACgEAAQgQAAAJghgEggYgLUQgMgKAAgZQA4gEACAHQASA4gVAAQgNAAgegYgAbbtRQBRgShRAXgAN/wPQBlgugLBHIgLAHQgWAPgQAAQgeAAgLgvg");
	var mask_13_graphics_27 = new cjs.Graphics().p("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");
	var mask_13_graphics_28 = new cjs.Graphics().p("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");
	var mask_13_graphics_29 = new cjs.Graphics().p("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");
	var mask_13_graphics_30 = new cjs.Graphics().p("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");

	this.timeline.addTween(cjs.Tween.get(mask_13).to({graphics:mask_13_graphics_0,x:46.3529,y:227.525}).wait(2).to({graphics:mask_13_graphics_2,x:46.5563,y:168.5652}).wait(2).to({graphics:mask_13_graphics_4,x:276.6793,y:152}).wait(2).to({graphics:mask_13_graphics_6,x:274.5667,y:149.0799}).wait(2).to({graphics:mask_13_graphics_8,x:272,y:143.6091}).wait(2).to({graphics:mask_13_graphics_10,x:271.4313,y:142.5938}).wait(2).to({graphics:mask_13_graphics_12,x:270.4013,y:135.027}).wait(2).to({graphics:mask_13_graphics_14,x:275.3633,y:142}).wait(2).to({graphics:mask_13_graphics_16,x:274.625,y:142}).wait(2).to({graphics:mask_13_graphics_18,x:274.4795,y:137.4285}).wait(2).to({graphics:mask_13_graphics_20,x:274.7449,y:132.5}).wait(2).to({graphics:mask_13_graphics_22,x:274.625,y:131.4995}).wait(2).to({graphics:mask_13_graphics_24,x:274.5,y:125}).wait(2).to({graphics:mask_13_graphics_26,x:274.5,y:125}).wait(1).to({graphics:mask_13_graphics_27,x:274.5,y:125}).wait(1).to({graphics:mask_13_graphics_28,x:274.5,y:125}).wait(1).to({graphics:mask_13_graphics_29,x:274.5,y:125}).wait(1).to({graphics:mask_13_graphics_30,x:274.5,y:125}).wait(1).to({graphics:null,x:0,y:0}).wait(91));

	// image5
	this.instance_22 = new lib.Symbol7();
	this.instance_22.setTransform(481.5,142.5,1,1,0,0,0,78.5,107.5);

	var maskedShapeInstanceList = [this.instance_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(18).to({alpha:0},3).to({_off:true},10).wait(91));

	// image4
	this.instance_23 = new lib.Symbol10();
	this.instance_23.setTransform(374.5,131.5,1,1,0,0,0,58.5,118.5);

	var maskedShapeInstanceList = [this.instance_23];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(22).to({alpha:0},3).to({_off:true},6).wait(91));

	// image3
	this.instance_24 = new lib.Symbol11();
	this.instance_24.setTransform(261,132,1,1,0,0,0,65,118);

	var maskedShapeInstanceList = [this.instance_24];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(24).to({alpha:0},3).to({_off:true},4).wait(91));

	// image2
	this.instance_25 = new lib.Symbol12();
	this.instance_25.setTransform(131.5,158,1,1,0,0,0,82.5,92);

	var maskedShapeInstanceList = [this.instance_25];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(16).to({x:132.5},4).to({alpha:0},3).to({_off:true},8).wait(91));

	// image1
	this.instance_26 = new lib.Symbol13();
	this.instance_26.setTransform(52.5,147.5,1,1,0,0,0,52.5,102.5);

	var maskedShapeInstanceList = [this.instance_26];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_13;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(16).to({alpha:0},3).to({_off:true},12).wait(91));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480.8,136,724,120.80000000000001);
// library properties:
lib.properties = {
	id: '59896F1CB743469CA2B02D6AB2285F8C',
	width: 970,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"arcade_fire_big.png?1651707321383", id:"arcade_fire_big"},
		{src:"arcade_fire_small.png?1651707321383", id:"arcade_fire_small"},
		{src:"arcade_fireandmore.png?1651707321383", id:"arcade_fireandmore"},
		{src:"ball.png?1651707321383", id:"ball"},
		{src:"block_logo.png?1651707321383", id:"block_logo"},
		{src:"copy1.png?1651707321383", id:"copy1"},
		{src:"cta_bg.png?1651707321383", id:"cta_bg"},
		{src:"date.png?1651707321383", id:"date"},
		{src:"fire1.png?1651707321383", id:"fire1"},
		{src:"fire2.png?1651707321383", id:"fire2"},
		{src:"fire3.png?1651707321383", id:"fire3"},
		{src:"fire4.png?1651707321383", id:"fire4"},
		{src:"fire5.png?1651707321383", id:"fire5"},
		{src:"image1.png?1651707321383", id:"image1"},
		{src:"image2.png?1651707321383", id:"image2"},
		{src:"image3.png?1651707321383", id:"image3"},
		{src:"image4.png?1651707321383", id:"image4"},
		{src:"image5.png?1651707321383", id:"image5"},
		{src:"learnmore.png?1651707321383", id:"learnmore"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['59896F1CB743469CA2B02D6AB2285F8C'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;