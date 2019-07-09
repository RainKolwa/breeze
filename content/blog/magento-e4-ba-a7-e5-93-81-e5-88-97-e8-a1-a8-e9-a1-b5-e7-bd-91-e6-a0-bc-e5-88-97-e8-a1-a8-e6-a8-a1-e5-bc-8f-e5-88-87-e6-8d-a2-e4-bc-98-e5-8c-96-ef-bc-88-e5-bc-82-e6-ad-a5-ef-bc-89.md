---
title: magento产品列表页网格列表模式切换优化（异步）
id: 147
categories:
  - Magento
date: 2015-02-04 10:52:41
tags:
---

<pre class="lang:default decode:true  ">//Bind Event on listmode button
$('#togrid').on('click',function(e){
    e.preventDefault();
    var url = window.location.href,
        gridtype = getUrlParameter('gridtype');
    if(gridtype == undefined || gridtype == 'list'){
        history.replaceState( null, null, updateURLParameter(url, 'gridtype', 'grid'))
    }else{
         history.replaceState( null, null, updateURLParameter(url, 'gridtype', 'list'))
    }
    initGridMode();
})

//replace pager link
$('.category-products').on('click','.pager ol li a',function(e){
    e.preventDefault();
    if($(this).parent('li').hasClass('current')) return;
    var originUrl = $(this).attr('href'),
        gridtype = getUrlParameter('gridtype'),
        targetUrl = '';
    if(gridtype != undefined){
        targetUrl = updateURLParameter(originUrl, 'gridtype', gridtype);
    }else{
        targetUrl = originUrl;
    }
    window.location.href = targetUrl;
})

//use class to display list type
function initGridMode(){
    //add grid class
    if(getUrlParameter('gridtype') == 'grid'){
        $('.products-list').addClass('grid');
    }else{
        $('.products-list').removeClass('grid');
    }
}
initGridMode();

//extension url function
function getUrlParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&amp;');
    for (var i = 0; i &lt; sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
} 

function updateURLParameter(url, param, paramVal){
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    if (additionalURL) {
        tempArray = additionalURL.split("&amp;");
        for (i=0; i&lt;tempArray.length; i++){
            if(tempArray[i].split('=')[0] != param){
                newAdditionalURL += temp + tempArray[i];
                temp = "&amp;";
            }
        }
    }

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}</pre>
&nbsp;