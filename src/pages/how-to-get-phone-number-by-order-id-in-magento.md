---
title: How to get phone number by order id in magento
tags:
  - Magento
id: 4
categories:
  - Magento
date: 2014-08-22 11:59:35
---

<pre class="theme:github lang:php decode:true  ">&lt;?php
//order_id=&gt;$order_id
$billingAddress = Mage::getModel("sales/order")-&gt;load($order_id)-&gt;getBillingAddress();

//GET TELEPHONE NUMBER
$billingAddress-&gt;getTelephone();

//GET POSTCODE
$billingAddress-&gt;getPostcode();
?&gt;</pre>
&nbsp;