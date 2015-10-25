var Canvas = require('canvas');

module.exports = function(params){
    if(typeof params == 'string')
        params = { url: params };
    params.color = params.color || 'rgb(0,100,100)';
    params.background = params.background || 'rgb(255,200,150)';

	return function(req, res){
		var canvas = new Canvas(150, 82);
		var ctx = canvas.getContext('2d');
		ctx.antialias = 'gray';
		ctx.fillStyle = params.background;
		ctx.fillRect(0, 0, 150, 82);
		ctx.fillStyle = params.color;
		ctx.lineWidth = 8;
		ctx.strokeStyle = params.color;
		ctx.font = '20px sans';

		var text = ('' + Math.random()).substr(3, 6);

		for (i = 0; i < text.length; i++) {
			ctx.setTransform(Math.random() * 0.5 + 1, Math.random() * 0.4, Math.random() * 0.4, Math.random() * 0.5 + 1, 20 * i + 15, 60);
			ctx.fillText(text.charAt(i), 0, 0);
		}

		canvas.toBuffer(function(err, buf) {
            if(req.session)
			    req.session.captcha = text;
			res.end(buf);
		});
	};
};
