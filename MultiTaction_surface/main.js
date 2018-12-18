/* main.js
 *
 * Date : Oct. 13 2018
 * Written by: Joy McWilliams, Maggie Ugelstad, Kealani Finegan
 * 
 * Code for HW2, Musical Baking Project
 */


var root = $.app.mainLayer();


// var background = createBackground("Media/background.jpg");

// root.addChild(background);
// console.log("******************background****************");


//Add a stylesheet to the app
$.app.addStyleFilename("styles.css");


// var textArr = new Array();
// for(var i = 1; i<5; ++i){
// 	textArr[i] = new MultiWidgets.TextWidget();
// 	textArr[i].setCSSId("w"+i);
// 	textArr[i].addCSSClass("text");
// 	//textArr[i].setText("w"+i);
// 	textArr[i].addOperator(new MultiWidgets.StayInsideParentOperator());
// 	root.addChild(textArr[i]);
// 	textArr[i].raiseToTop();
// }


addImage(50, 200, 300, 300, "Media/pie.jpg");
//addImage(800, 600, 400, 400, "Media/mmimage03.jpg");


addVideo(1100, 250, 750, 400,"Media/pieVid.mp4");
// addVideo(1200, 200, 200, "Media/Showreel.mp4");


addBook(450,200,600,300, "./recipe");
//addFlow(400,350,500);


addText(550, 40, 120, 50, 'w1', 'textW', 'Interactive');
addText(1000, 40, 120, 50, 'w2', 'textW', 'Baking');

addTimer(700,600,300,300,60);


//creating a marker sensor
addMarkerSensor(100, 600, 500, 400, 42, 'bowl'); //different id's with the table (42 for simulator)
addMarkerSensorText(125, 525, 500, 100, "bowlSensor")
//sensor for measuring cup
addMarkerSensor(1300, 750, 500, 200, 42, 'measuringCup'); //different id's with the table (42 for simulator)
addMarkerSensorText(1300, 675, 100, 100, "measuringSensor")


/*For the future: add a function for the timeout of the timer widget*/
// setTimeout(function(){ 
// 	addMarkerSensor(900, 600, 500, 400)
//set timer z order to negative to make it disappear
//  }, 10000); wid.removeFromParent();
				// isRootChild = false;


/*
* Utility functions
*/

//Creates and returns a customized widget for the application background
//that contains a TextWidget
function addText(x, y, sizeX, sizeY, id, className, title){
	var w = new MultiWidgets.TextWidget();
	$.app.mainLayer().addChild(w);
	w.setText(title);
	w.setBackgroundColor(10, 10, 128, 0.8);
	w.setWidth(sizeX);
	w.setHeight(sizeY);
	w.setLocation(x,y);
	w.setAllowRotation(true);
	w.setCSSId(id);
	w.addCSSClass(className);
	w.raiseToTop();
	
	return w;
}

//Creates and returns a customized widget for the application background
//that contains an ImageWidget.
function createBackground (background) {
	var w = new MultiWidgets.JavaScriptWidget();

	w.setWidth(root.width());
	w.setHeight(root.height());
	w.setFixed();
	w.setAutoRaiseToTop(false);

	w.image = new MultiWidgets.ImageWidget();

	if (w.image.load(background)) {
	    w.image.setWidth(w.width());
	    w.image.setHeight(w.height());
    	w.image.setFixed();
    	w.image.setAutoRaiseToTop(false);
    	w.addChild(w.image);
    	w.image.raiseToTop();
	}


	return w;
}

//Creates a customized JavaSCriptWidget with an image
// and adds it to the application's main layer.
function addImage(x, y, sizeX, sizeY, image) {
	var w = new MultiWidgets.JavaScriptWidget();

	w.setLocation(x, y);
	w.setWidth(sizeX);
	w.setHeight(sizeY);
	w.img = new MultiWidgets.ImageWidget();
	w.img.addCSSClass("ImageW");

	if (w.img.load(image)) {
	    w.img.addOperator(new MultiWidgets.StayInsideParentOperator());
    	w.img.setLocation(x,y);
    	w.img.setWidth(sizeX);
	    w.img.setHeight(sizeY);
	    w.addChild(w.img);
    	w.img.raiseToTop();
	}

	root.addChild(w);
	w.raiseToTop();
	return w;
}

//Creates a VideoWidget and adds it to the application's main layer
function addVideo(x, y, sizeX, sizeY, video) {
	var vid = new MultiWidgets.VideoWidget();
	vid.setWidth(sizeX);
	vid.setHeight(sizeY);

	if (vid.load(video)) {
		vid.addOperator(new MultiWidgets.StayInsideParentOperator());
		//vid.resizeToFit(new Nimble.SizeF(size, size));
		vid.setLocation(x, y);
		//vid.setFixed();
		//vid.displayControls(true);
		vid.setAudioEnabled(true);
		vid.setPreviewPos(5, true); //sets preview image to 3 seond spot in video

		root.addChild(vid);
		vid.raiseToTop();

	}
	return vid;

}

//Creates a book widget and add it to the application's main layer
function addBook(x, y, sizeX, sizeY, book) {
	var bk = new MultiWidgets.BookWidget();

	if (bk.load(book)) {
		bk.addOperator(new MultiWidgets.StayInsideParentOperator());
		bk.setAllowRotation(false);
		bk.setLocation(x, y);
		bk.setWidth(sizeX);
		bk.setHeight(sizeY);
		bk.setScale(1);

		root.addChild(bk);
		bk.raiseToTop();
	}
	return bk;
}

function  addTimer(x,y,sizeX,sizeY,time){
	var timer = new MultiWidgets.TimerDialWidget(time);

	timer.setLocation(x,y);
	timer.setHeight(sizeX);
	timer.setWidth(sizeY);
	timer.setBackgroundColor(66,203,224,1.0);

	root.addChild(timer);
	timer.raiseToTop();
	return timer;
}

//Creates a flow widget and add it to the application's main layer
function addFlow(x, y, size) {
	var flow = new MultiWidgets.ItemFlowWidget();
	flow.setLocation(x,y);
	for (var i=1; i<=9; i++) {
		var imgItem = new MultiWidgets.ImageWidget();
		var path = "./Media/mmimage0"+i+".jpg";
		if (imgItem.load(path)) {
			imgItem.addOperator(new MultiWidgets.StayInsideParentOperator());
   	 		imgItem.resizeToFit(new Nimble.SizeF(size,size));
			flow.addItem(imgItem);
		}
	}
	root.addChild(flow);
	flow.raiseToTop();
	return flow;
}


/*
*
* Marker functions
*/

function addMarkerSensor(x, y, sizeX, sizeY, id_as_string, item) {
	//place the marker sensor in the bottom right corner
	var markerSensor = new MultiWidgets.JavaScriptWidget();
	markerSensor.setLocation(x,y);
	markerSensor.setHeight(sizeY);
	markerSensor.setWidth(sizeX);
	markerSensor.setBackgroundColor(255,0,0,0.8);
	markerSensor.setFixed();

	// create image to add on marker down and remove on marker up --> happy sad face
	var wid = new MultiWidgets.JavaScriptWidget();
	wid.setWidth(400);
	wid.setHeight(400);
	wid.img = new MultiWidgets.ImageWidget();
	wid.img.addCSSClass("ImageW");

	if (wid.img.load("Media/water.jpg")) {
	    wid.img.addOperator(new MultiWidgets.StayInsideParentOperator());
    	wid.img.setWidth(400);
	    wid.img.setHeight(400);
	    wid.addChild(wid.img);
    	wid.img.raiseToTop();
	}

	// create boolean for whether to add or remove image widget
	var isRootChild = false;
	var text;

	markerSensor.onMarkerDown(function(id_as_string) {
		var idAsInt = parseInt(id_as_string);
		var gm = $.app.grabManager();
		var marker = gm.findMarker(idAsInt);

	if (item === 'bowl'){
	//bowl
		if(marker.code() == 24){
			console.log("**************** marker down: x: "+ marker.centerLocation().x+" y: "+marker.centerLocation().y+" *****************");
			
			if (!isRootChild) {
				text = addText(600, 875, 120, 50, 'sensorText', 'textW', "Let's Get Started!");
				isRootChild = true;
			} else {
				wid.removeFromParent();
				isRootChild = false;
			}
		}
	}  else if (item === 'measuringCup'){
		//measuring cup
		if(marker.code() == 20){
			console.log("**************** marker down: x: "+ marker.centerLocation().x+" y: "+marker.centerLocation().y+" *****************");
			
			if (!isRootChild) {
				root.addChild(wid);
				wid.raiseToTop();
				wid.setLocation(1300, 250);
				wid.img.setLocation(marker.centerLocation().x, marker.centerLocation().y);
				isRootChild = true;
			} else {
				wid.removeFromParent();
				isRootChild = false;
			}
		}
	}
		
	});

	/*Not getting to this function on the MT table*/
	markerSensor.onMarkerUp(function(id_as_string) {
		var idAsInt = parseInt(id_as_string);
		var gm = $.app.grabManager();
		var marker = gm.findMarker(idAsInt);
		if (marker.code() == 20) {
			console.log("****************** marker up *******************");
			wid.removeFromParent();
			isRootChild = false;
		}
		if (marker.code() == 24) {
			console.log("****************** marker up *******************");
			text.removeFromParent();
			isRootChild = false;
		}
	});

	root.addChild(markerSensor);
	markerSensor.raiseToTop();
	return markerSensor;
}


function addMarkerSensorText(x, y, sizeX, sizeY, id){
	//add text for the marker sensor
	var markerSensorTxt = new MultiWidgets.TextWidget();
	markerSensorTxt.setCSSId(id);
	markerSensorTxt.setWidth(sizeX);
	markerSensorTxt.setHeight(sizeY);
	markerSensorTxt.setLocation(x,y);
	markerSensorTxt.setFixed();
	root.addChild(markerSensorTxt);
	markerSensorTxt.raiseToTop();
	return markerSensorTxt;
}