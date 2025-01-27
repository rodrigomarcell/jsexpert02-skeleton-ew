class View {

	constructor() {}

	createVideoElement({
		muted = true,
		src,
		srcObject
	}) {

		const video = document.createElement('video');
		video.muted = muted;
		video.src = src;
		video.srcObject = srcObject;
		video.controls = true;
		video.autoplay = true;

		if (src) {
			video.controls = true;
			video.loop = true;
			Util.sleep(200).then(_ => video.play());
		}

		if (srcObject) {
			video.addEventListener('loadmetadata', _ => video.play());
		}

		return video;
	}

	renderVideo({

		userId,
		stream = null,
		url = null,
		isCurrentId = false,
		muted = true

	}) {

		const video = this.createVideoElement({
			muted,
			src: url,
			srcObject: stream
		});

		this.appendToHtmlTree(userId, video, isCurrentId);

	}

	appendToHtmlTree(userId, video, isCurrentId = false) {

		const div = document.createElement('div');
		div.id = userId;
		div.classList.add('wrapper');
		div.append(video);

		const div2 = document.createElement('div');
		div2.innerText = isCurrentId ? '' : userId;
		div.append(div2);

		const videoGrid = document.getElementById('video-grid');
		videoGrid.append(div);

	}

}