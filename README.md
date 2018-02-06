# 逛逛附近
- https://appmarket.pixnet.tw/#!/addon/262
- copyright: Copyright 2003-2014 PIXNET Digital Media Corporation 優像數位媒體科技股份有限公司
- license: http://framework.pixnet.net/license BSD License
- author: Repeat Yang `<repeat _at_ pixnet _dot_ tw>`
- This application is not maintained since January 24, 2018.

## 名稱
逛逛附近

## 版本
1.0.2.20130828

## 描述
依據所瀏覽的相簿或相片的地理位置，顯示附近其他的公開相簿或相片。

## 說明
```
安裝此 app 後，<br>
1. 若您的相片含有地理位置資訊，系統會在側欄顯示距離目前瀏覽的相片位置指定範圍內其他的公開相片。<br>
2. 若您的相簿有設定地理位置資訊，或由所屬相片推算出可能的地理位置資訊時，系統會在側欄顯示距離相簿地理位置指定範圍內其他的公開相簿。<br>
3. 若未設定地理位置資訊，或找不到符合條件的相簿及相片時，側欄不會有任何變動。
```

## 應用程式資訊
https://developer.pixnet.pro/#!/addon/edit/262

## 編輯圖片
https://developer.pixnet.pro/#!/addon/image/edit/262

### 步驟1
安裝完成後，至後台>基本/進階設定>相簿App 找到此 App 的圖示，點圖示進入設定頁。

### 步驟2
設定要顯示的相簿及相片範圍，完成後按送出。例如說相簿設定在經緯度坐標 (23.973875, 120.982024) ，距離設定為 0 公尺～ 5 公里時，系統就會去找該坐標點附近 0 - 5 公里間的其他公開相簿及相片。

## 編輯設定
- https://developer.pixnet.pro/#!/addon/setting/edit/262
- Staging Option Config: `option_config.json`
- Staging Execute Code: `execute_code.js.tmpl`
- Staging Script: `script.js`
