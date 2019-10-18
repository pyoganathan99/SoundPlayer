const { ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {

  var headerStyle = '.header{margin-top:36px;}'
  var styleSheet = document.createElement("style")
  styleSheet.type = "text/css"
  styleSheet.innerText = headerStyle
  document.body.appendChild(styleSheet)

  let title = document.createElement('div');

  title.innerHTML = `<div id="mini-player-button" style="width:100%; position:fixed; height:36px; display:flex; align-items:center; background:#f50; z-index:5; color:white;justify-content:center;">
    Engage Mini Player
  </div>`;

  document.body.insertBefore(title, document.querySelector('#app'));


  document.getElementById('mini-player-button').addEventListener('click', () => {

    document.getElementById('mini-player-button').remove();


    ipcRenderer.send('asynchronous-message', 'engage-mini-player')

    //ipcRenderer.on('minimized', () => {
    //window.addEventListener('DOMContentLoaded', () => {

    var styles = `.playControls__soundBadge,.playbackSoundBadge__titleContextContainer{width:120px !important;}
    .playControls__queue{position: fixed; left: 0; width: 100%; bottom: 0; max-height: 100vh;}
    body{overflow:hidden;}
    .playbackTimeline__progressWrapper{position: fixed;left: 0;right: 0;bottom: 0;margin: 0;padding: 1px;}
    .playbackTimeline__timePassed{display:none;}
    .playbackTimeline__duration{display:none;}
    .playControls__timeline{max-width:0px;}
    .queue__clear{display:none}
    .queue__hide{display:none}
    .sc-button-like{display:none}
    .draggable{-webkit-app-region: drag;}
    
    #minimize-button{position:fixed; top:0; left:0}`;

    var styleSheet = document.createElement("style")
    styleSheet.type = "text/css"
    styleSheet.innerText = styles
    document.body.appendChild(styleSheet)

    var marqueeStyle = `.marquee {
      width: 450px;
      margin: 0 auto;
      white-space: nowrap;
      overflow: hidden;
      box-sizing: border-box;
    }

    .marquee span {
      display: inline-block;
      padding-left: 100%;
      /* show the marquee just outside the paragraph */
      animation: marquee 15s linear infinite;
    }

    .marquee span:hover {
      animation-play-state: paused
    }

    @keyframes marquee {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(-100%, 0);
      }
    }
  `
    var styleSheet1 = document.createElement("style");
    styleSheet1.type = "text/css";
    styleSheet1.innerText = marqueeStyle;
    document.body.appendChild(styleSheet1);

    document.querySelector('header').setAttribute('hidden', true)
    //document.querySelector('.playControls__timeline').setAttribute('hidden', true)
    document.querySelector('.playControls__volume').setAttribute('hidden', true)
    document.querySelector('.playControls__repeat').setAttribute('hidden', true)
    //document.querySelector('.playControls__shuffle').classList.add('playControls__repeat')

    //setTimeout(() => {
    //document.querySelector('.sc-button-play').click();
    document.querySelector('.playbackSoundBadge__titleLink').classList.add('marquee');
    document.querySelector('.playbackSoundBadge__titleLink').classList.remove('sc-truncate');
    //}, 4000);

    //setTimeout(() => {

    document.querySelector('.playbackSoundBadge__showQueue').addEventListener('click', () => {

      let queue = document.querySelector('.queue');

      if (queue.classList.value.includes('m-visible')) {
        ipcRenderer.send('asynchronous-message', 'next-up-close')
      } else {
        ipcRenderer.send('asynchronous-message', 'next-up-open')
      }
    });
    //}, 4000)

    let handlebar = document.createElement('div');
    handlebar.style.width = "12px";
    handlebar.style.minWidth = "12px";
    handlebar.style.marginLeft = "8px";
    handlebar.style.height = "100%";
    handlebar.style.backgroundColor = "#f50";
    handlebar.classList.add('draggable');
    document.querySelector('.playbackSoundBadge').append(handlebar);

  })



});