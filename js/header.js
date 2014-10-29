(function() {
	var width, height, target, largeHeader, canvas, ctx, points;

	initHeader();
	addListeners();

	function initHeader() {
		largeHeader = document.getElementById("large-header");
		canvas = document.getElementById("header-canvas");
		setSize();
		ctx = canvas.getContext('2d');

		createPoints();
	}

	function createPoints() {
		points = [];

		for (var x = 0; x < width; x += width/20) {
			for (var y = 0; y < height; y += height/20) {
				var px = x + Math.random() * width / 20;
				var py = y + Math.random() * height / 20;
				var p = {x: px, originX: px, y: py, originY: py};
				points.push(p);
			}
		}
	}

	function addListeners() {
		window.addEventListener('mousemove', mouseMove);
	}

    function setSize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;

		target = {x: width/2, y: height/2};
    }

	function mousemove(e) {
		var cursorX = cursorY = 0;

		if (!e) {
			e = window.event;
		}
		if (e.pageX || e.pageY) {
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) {
			cursorX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			cursorY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}

		target.x = cursorX;
		target.y = cursorY;
	}

})();
