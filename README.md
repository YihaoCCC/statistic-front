### 统计前端项目

`React + TypeScript + Vite`

### 用户名密码在一个对象中，别忘了用setState包裹一下
```jsx
  const usernameChange = (e:any) => {
      setUserInfo({...userInfo, username: e.target.value})
  }
  const passwordChange = (e:any) => {
      setUserInfo({
          ...userInfo,
          password: e.target.value
      })
  }
```