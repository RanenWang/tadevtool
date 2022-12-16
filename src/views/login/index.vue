<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on"
             label-position="left">

      <div class="title-container">
        <h3 class="title">{{this.$defaultSettings.title}}</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>



      <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
        </el-form-item>
      </el-tooltip>
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>
      <div style="position:relative">
        <div class="tips">
          <span>Username : admin</span>
          <span>Password : any</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">Username : editor</span>
          <span>Password : any</span>
        </div>

      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    const validateUsername = (rule, value, callback) => {
      function validUsername(value) {
        const valid_map = ['admin', 'editor']
        return valid_map.indexOf(value.trim()) >= 0
      }

      if (!validUsername(value)) {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('The password can not be less than 6 digits'))
      } else {
        callback()
      }
    }
    return {
      loading: false,
      capsTooltip: false,
      passwordType: 'password',
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loginForm: {
        username: 'admin',
        password: '123123123'
      }
    }
  },
  methods:{
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true

          // this.$store.dispatch('user/login', this.loginForm)
          //   .then(() => {
              this.$router.push({ path: this.redirect || '/'})
              this.loading = false
            // })
            // .catch(() => {
            //   this.loading = false
            // })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
}
</script>

<style scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  /*background-color: #19327099;*/
  backdrop-filter: blur(50px);
  background: rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.login-form {
  position: relative;
  width: 300px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}

.el-input {
  display: inline-block;
  height: 47px;
  width: 100%;

}

.tips {
  font-size: 14px;
  color: #fff;
  margin-bottom: 10px;

}
</style>
