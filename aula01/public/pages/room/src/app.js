const recordClick = function (recorderBtn) {
  this.recordingEnabled = false;
  return () => {
    this.recordingEnabled = !this.recordingEnabled;
    recorderBtn.style.color = this.recordingEnabled ? 'red' : 'white';
  };
};

const onload = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room);

  // const recorderBtn = document.getElementById('record');
  // recorderBtn.addEventListener('click', recordClick(recorderBtn));

  const socketUrl = 'http://localhost:3000';
  const socketBuilder = new SocketBuilder({
    socketUrl
  });
  const view = new View();
  const media = new Media(); 


  const deps = {
    room,
    media,
    view,
    socketBuilder
  };

  Business.initialize(deps);

  // view.renderVideo({
  //   userId: 'Rodrigo Marcel',
  //   url: 'https://media.giphy.com/media/yFb5bKTItbB4dZ9xfd/giphy.mp4'
  // });


};

window.onload = onload;