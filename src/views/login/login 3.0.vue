<template>
  <section id="login">
    <div class="login-wrap">
      <ul class="menu-tab">
        <li
          :class="{ current: item.current }"
          v-for="item in menuTab"
          :key="item.id"
          @click="toggleMenu(item)"
        >
          {{ item.txt }}
        </li>
      </ul>
    <!-- 表单 start-->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        size="medium"
      >
        <el-form-item label="邮箱" prop="username">
          <el-input
            type="txt"
            v-model="ruleForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            minlength='6'
            maxlength='20'
          ></el-input>
        </el-form-item>
        <el-form-item v-if="pmodel == 'regist'"  label="确认密码" prop="passwords">
          <el-input
            type="password"
            v-model="ruleForm.passwords"
            autocomplete="off"
            minlength='6'
            maxlength='20'
          ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
        <el-row :gutter="20">
          <el-col :span="13"><el-input v-model="ruleForm.code"></el-input></el-col>
          <el-col :span="1"><el-button type="success" plain>发送</el-button></el-col>
        </el-row>
      </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
        <!-- 表单 end-->
    </div>
  </section>
</template>
<script>
import { reactive, ref } from '@vue/composition-api'
import { stripscript, stripUsename, stripPassword, stripCode} from '@/utils/validate';
export default {
  name: 'login',
  setup(props,context){

    var checkCode = (rule, value, callback) => {
      ruleForm.code=stripscript(value)
      value =  ruleForm.code
      if (!value) {
        return callback(new Error('验证码不能为空'));
      }else if (!stripCode(value)) {
         callback(new Error('验证码错误'));
      }else{
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'));
      } else if (!stripUsename(value)) {
         callback(new Error('邮箱格式错误'));
      }else{
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      ruleForm.password=stripscript(value)
      value =  ruleForm.password
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (!stripPassword(value)) {
         callback(new Error('密码错误为6-20位数字+字母'));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };



    const menuTab = reactive ([
        { txt: '登录', current: true, type: 'login' },
        { txt: '注册', current: false, type: 'regist' }
    ])
    //模块值
    const ruleForm = reactive({
        username: '',
        password: '',
        passwords: '',
        code: ''
    })
    const pmodel = ref('login')
    // 声明函数
    const toggleMenu = (data => {
      menuTab.forEach(e => {
        e.current = false;
      });
      data.current = true;
      pmodel.value = data.type;
    })
    const submitForm = (formName => {
      context.refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    })
    const resetForm = (formName =>{
       context.refs[formName].resetFields();
    }) 
    const  rules = reactive( {
        username: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        code: [{ validator: checkCode, trigger: 'blur' }],
        passwords: [{ validator: validatePass2, trigger: 'blur' }],
    })
    return {
      menuTab,
      pmodel,
      toggleMenu,
      submitForm,
      resetForm,
      rules,
      ruleForm
    }

  }
};
</script>

<style lang="scss" scoped>
#login {
  height: 96vh;
  background-color: #344a5f;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: white;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
