javascript:(() => { const iframeDoc = document.getElementsByTagName('iframe')[0].contentWindow.document; const unreads = [...iframeDoc.getElementsByClassName('unread-count')]; if (unreads.length) { unreads.forEach(unread => { if (unread.innerText == "0") unread.classList.remove('unread-count'); }); } })();
