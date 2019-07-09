---
title: Magento中如何根据订单ID获取手机号
date: 2014-08-22 11:59:35
tags:
  - Magento
---

Magento默认的订单模型中的手机号信息是记录在账单地址中的，所以获取手机号要绕个弯，先获取账单地址，再通过账单地址获取手机号。

```php
// order_id => $order_id
$billingAddress = Mage::getModel("sales/order")->load($order_id)->getBillingAddress();

// GET TELEPHONE NUMBER
$billingAddress->getTelephone();

// GET POSTCODE
$billingAddress->getPostcode();
```
