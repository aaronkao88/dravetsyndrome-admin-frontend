import axios from 'axios'

// 取得管理員資料
axios.get('http://localhost:1337/admin')
  .then(function () {
  })
  .catch(function (error) {
    console.log(error);
});

// 管理員登入
axios.post('http://localhost:1337/admin/login')
  .then(function () {
  })
  .catch(function (error) {
    console.log(error);
});

