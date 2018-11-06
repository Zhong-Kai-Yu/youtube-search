chrome.contextMenus.create({
    "title": "Youtube Search Selected Text",
    "contexts":["selection"],
    "onclick": genericOnClick
});

function genericOnClick(info, tab) {
    
    window.open('https://www.youtube.com/results?search_query='+info.selectionText);
}
