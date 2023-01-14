function search(query) {
    var result = searchData(query);
    var html = createHtml(result);
    showResult(html);
    showResultCount(result.length, data.length);
}
    
function searchData(query) {
    var result = [];
    
    query = query.trim();
    if (query.length < 1) {
        return result;
    }
    var re = new RegExp(query, 'i');
    for (var i = 0; i < data.length; ++i) {
    var pos = data[i].body.search(re);
    if (pos != -1) {
        result.push([i, pos, pos + query.length]);
    }
    }
    return result;
}
    
function createHtml(result) {
    var htmls = [];
    for (var i = 0; i < result.length; ++i) {
    var dataIndex = result[i][0];
    var startPos = result[i][1];
    var endPos = result[i][2];
    var url = data[dataIndex].url;
    var title = data[dataIndex].title;
    var body = data[dataIndex].body;
    htmls.push(createEntry(url, title, body, startPos, endPos));
    }
    return htmls.join('');
}
    
function createEntry(url, title, body, startPos, endPos) {
    return '<div class="item">' +
        '<a class="item_title" href="' + url + '">' + title + '</a>' +
        '<div class="item_excerpt">' + excerpt(body, startPos, endPos) + '</div>' +
        '</div>';
}
    
function excerpt(body, startPos, endPos) {
    return [
    body.substring(startPos - 30, startPos),
    '<b>', body.substring(startPos, endPos), '</b>',
    body.substring(endPos, endPos + 200)
    ].join('');
}
    
function showResult(html) {
    var el = document.getElementById('result');
    el.innerHTML = html;
}
    
function showResultCount(count, total) {
    var el = document.getElementById('resultCount');
    el.innerHTML = '<b>' + count + '</b> 件（' + total + '件中）';
}

function search(query) {
    var result = searchData(query);
    var html = createHtml(result);
    showResult(html);
    showResultCount(result.length, data.length);
}