var bidTypeArr = [];

bid_data.forEach((bid) => {
    var id = chrome.contextMenus.create({"title": bid.title, "onclick": bidTypeItemClicked});
    bidTypeArr.push({id: id, item: bid});
});

function bidTypeItemClicked(info, tab) {
    var bidItem = bidTypeArr.find((item) => info.menuItemId == item.id);
    copyTextToClipboard(bidItem.item.content);    
}