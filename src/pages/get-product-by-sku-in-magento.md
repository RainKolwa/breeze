---
title: get product by sku in magento
tags:
  - Magento
id: 118
categories:
  - Magento
date: 2014-12-24 14:50:46
---

<pre class="lang:default decode:true ">$_product = Mage::getModel('catalog/product')-&gt;loadByAttribute('sku',$sku);</pre>
&nbsp;