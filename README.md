<!--
 * @Author: zengsheng 12181283
 * @Date: 2025-09-17 09:10:05
 * @LastEditors: zengsheng 12181283
 * @LastEditTime: 2025-10-13 09:28:25
 * @FilePath: \books-firebase-vue3\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
https://api.openweathermap.org/data/2.5/weather?lat=51.5073219&lon=-0.1276474&appid=4e8f8e3b62bddf5018c441ed2bb8181a

https://openweathermap.org/img/wn/03d@2x.png

https://api.openweathermap.org/geo/1.0/direct?q=London&appid=4e8f8e3b62bddf5018c441ed2bb8181a

天气api获取
1218128305@qq.com
12345678
https://home.openweathermap.org/api_keys


## firestore/databases 设置权限 
 match /{document=**} {
      allow read, write: if true;
 }

## firebase functions

 npm install -g firebase-tools
 firebase --version

 firebase login
 firebase init functions

 firebase functions:list
 firebase projects:list     

 pnpm serve
 pnpm deploy
 firebase deploy --only functions:func1,functions:func2

 http://127.0.0.1:5001/cxre-423d7/us-central1/helloWorldCors
 https://us-central1-cxre-423d7.cloudfunctions.net/helloWorldCors

 http://127.0.0.1:5001/cxre-423d7/us-central1/countItems
 https://us-central1-cxre-423d7.cloudfunctions.net/countItems

 http://127.0.0.1:5001/cxre-423d7/us-central1/getAllAuthUsers
 https://us-central1-cxre-423d7.cloudfunctions.net/getAllAuthUsers

 Function URL (helloWorldCors(us-central1)): https://helloworldcors-nbwvmuuvna-uc.a.run.app
 Function URL (countItems(us-central1)): https://us-central1-cxre-423d7.cloudfunctions.net/countItems



