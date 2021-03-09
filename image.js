const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
	await imagemin(['image/*.png'], {
		destination: 'build/images',
		plugins: [
			imageminPngquant({quality: [0, 0.001]} )
            
		]
	});

	console.log('Images optimized');
})();