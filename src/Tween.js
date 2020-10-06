/**
 * Created by Emlyn Hughes on 15/05/18.
 */
import TWEEN from '@tweenjs/tween.js';

function animate(time) {
	requestAnimationFrame(animate);
	TWEEN.update(time);
}
requestAnimationFrame(animate);

export default TWEEN;