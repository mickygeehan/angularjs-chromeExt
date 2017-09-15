chrome.extension.onMessage.addListener(

    function (request, sender, sendResponse) {

        if (request.action == 'PageInfo') {
            var pageInfos = [];

            $('a').each(function () {
                var pageInfo = {};




                var href = $(this).attr('href');


                if (href != null && href.indexOf("http") == 0) {
                    console.log(href)
                    pageInfo.url = href;
                    pageInfos.push(pageInfo);
                }
            });

            sendResponse(pageInfos);
        }
    }


);
