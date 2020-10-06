<template>
	<canvas :width="imageWidth" :height="imageHeight" />
</template>

<script>
export default {
	name: "SpriteSheet",
	props: {
		"sheet-frames": {
			type: Array
		},
		"loop": {
			type: Boolean,
			default: false
		},
		"speed": {
			type: Number,
			default: 1
		}
	},
	data() {
		return {
			canvasCtx: null,
			images: null,
			currentFrame: 0,
			frames: null,
			imageWidth: 0,
			imageHeight: 0,
			playing: false
		}
	},
	mounted() {
		this.canvasCtx = this.$el.getContext('2d');
	},
	watch: {
		sheetFrames( sheetData ) {
			this.parseSheetData(sheetData);
		},
		ready( isReady ) {
			if( isReady ) {
				this.playing = true;
				this.renderFrame();
				this.$emit('ready');
			}
		}
	},
	computed: {
		ready() {
			return this.images !== null
				&& this.frames !== null
				&& this.canvasCtx !== null
		}
	},
	methods: {
		play() {
			this.playing = true;
		},
		renderFrame() {

			const currentFrame = this.frames[ Math.round( this.currentFrame ) ];
			const ctx = this.canvasCtx;

			ctx.clearRect(0,0,this.imageWidth,this.imageHeight);

			const frameImage = this.images[ currentFrame.image ];

			const src = currentFrame.frame;
			const dest = currentFrame.spriteSourceSize;

			ctx.drawImage(frameImage,src.x,src.y, src.w, src.h,dest.x,dest.y, dest.w, dest.h );

			this.currentFrame += this.speed;

			if( this.currentFrame >= this.frames.length - 1 ) {
				this.$emit('complete');
				this.currentFrame = this.currentFrame % this.frames.length - 1;

				if( !this.loop ) {
					this.playing = false;
				}
			}

			if( this.playing ) {
				window.requestAnimationFrame(this.renderFrame);
			}

		},
		parseSheetData( data ) {

			//# Get frames from all sheets
			const imageFrames = data.reduce( (frames, sheet) => {

				const frameSet = sheet.data.frames;

				//# Extract frames and add image prop
				return frames.concat( Object.values( frameSet ).map( frame => {
					return { image: sheet.image, ...frame };
				}) )

			}, [] );

			//# Sort frames into sequence
			imageFrames.sort( (a,b) => {
				if( a.filename > b.filename ) {
					return 1;
				} else if( a.filename < b.filename ) {
					return -1;
				}

				return 0;
			});

			this.frames = imageFrames;

			//# Base canvas off first frame source size
			if( this.frames.length ) {
				const firstFrame = this.frames[0];
				this.imageWidth = firstFrame.sourceSize.w;
				this.imageHeight = firstFrame.sourceSize.h;
			}

			//# Resolve image urls
			Promise.all(
				data.map( sheet =>
					import(`../assets/img/${sheet.image}`)
						.then( loadURL => new Promise((resolve, reject) => {

							const img = new Image();
							img.onload = () => resolve(img);
							img.error = err => reject(err);
							img.src = loadURL;

						}) )
						.then( img => ({ name: sheet.image, image: img }) ) )
			).then( images => {
				this.images = images.reduce( (map,img) => {
					map[img.name] = img.image;
					return map;
				}, {} );

			} );


		}
	}

}
</script>

<style scoped>

</style>