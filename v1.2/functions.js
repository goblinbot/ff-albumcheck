function addAlbumCommand(req, req, sendResponse) {

  if(document.getElementsByClassName('post-account')) {

    console.log('\\______ ALBUMCHECK 1.1 _______>');

    /* REMOVE PREVIOUS */
    let old = document.getElementById("ALBUMCHECK");
    if(old) {
      old.innerHTML = ''; old.remove();
    }

    let op = document.getElementsByClassName('post-account')[0].innerHTML;


    let bar = document.createElement("div");
    bar.setAttribute('style','background: rgba(77,77,77,0.7); position: fixed; z-index: 9999; display: flex; width: 100%; height: 240px; left: 0; bottom: 0; padding: 15px; border-top: 1px solid rgb(77,77,77);');
    bar.setAttribute('id','ALBUMCHECK');

    bar.innerHTML = '<div style="margin-left:auto;margin-right:auto;float:left; width: calc(100% - 60px); display:flex; flex-direction: column;">'
    +'<p style="font-size:10px;color:#FFF; font-weight:bold; flex: 1;">Albums {' + op + '}'
    +'<iframe style="border:0; width: 100%; height: 100%; margin: 15px; flex: 1; opacity: 0.75;" src="https://'+op+'.imgur.com"></iframe></div>';

    document.body.insertBefore(bar, document.body.childNodes[0]);

  }

}
browser.runtime.onMessage.addListener(addAlbumCommand);
