import axios from 'axios'

// 取得聯絡資料
axios.get('http://localhost:1337/contact')
  .catch(function (error) {
    console.log(error);
});

// 新增聯絡資料
axios.post('http://localhost:1337/contact')
.catch(function (error) {
  console.log(error);
});

// 更新聯絡資料
axios.put('http://localhost:1337/contact')
.catch(function (error) {
  console.log(error);
});

// 刪除聯絡資料
axios.delete('http://localhost:1337/contact')
.catch(function (error) {
  console.log(error);
});