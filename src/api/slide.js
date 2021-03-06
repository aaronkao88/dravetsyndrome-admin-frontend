import axios from 'axios'

// 取得圖片輪播
axios.get('http://localhost:1337/slide')
  .catch(function (error) {
    console.log(error);
});

// 上傳圖片輪播
axios.post('http://localhost:1337/slide')
.catch(function (error) {
  console.log(error);
});

// 更新圖片輪播
axios.put('http://localhost:1337/slide')
.catch(function (error) {
  console.log(error);
});

// 刪除圖片輪播
axios.delete('http://localhost:1337/slide')
.catch(function (error) {
  console.log(error);
});