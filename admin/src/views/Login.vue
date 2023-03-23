<template>
    <div style="background-color: #2d3a4b;width:100%;height:100vh;">

        <!--粒子背景-->
        <!-- <Particles id="tsparticles" :options="options" /> -->

        <div class="formContainer">
            <h3>企业门户网站管理系统</h3>
            <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="loginRules" label-width="80px"
                class="loginform">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username" autocomplete="off" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>


<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
const store = useStore()

//表单绑定的响应式对象
const loginForm = reactive({
    username: '',
    password: '',
})

//管理员
//账号-admin, 密码-123456

const loginFormRef = ref() //表单的引用对象

const loginRules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ]
})

const router = useRouter()

//提交表单函数
const submitForm = () => {
    //1.效验表单
    loginFormRef.value.validate((valid) => {
        if (valid) {
            axios.post('/adminapi/user/login', loginForm).then((res) => {
                // console.log(res.data)
                if (res.data.ActionType === 'ok') {
                    store.commit("changeUserInfo", res.data.data)
                    store.commit("changeGetterRouter", false)
                    router.push('/index');
                } else {
                    ElMessage.error('用户名密码不匹配!');
                }
            })
        }
    })
    //2.拿到表单内容，提交后台
    //3.设置token

}

//配置particles
const options = {
    background: {
        color: {
            value: '#0d47a1'
        }
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push'
            },
            onHover: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: '#ffffff'
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'bounce'
            },
            random: false,
            speed: 6,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: 'circle'
        },
        size: {
            value: { min: 1, max: 5 },
        }
    },
    detectRetina: true
}
</script>

<style lang="scss" scoped>
.formContainer {
    width: 500px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: rgba($color: #000000, $alpha: 0.5);
    color: white;
    text-align: center;
    padding: 20px;

    h3 {
        font-size: 30px;
    }

    .loginform {
        margin-top: 20px;
    }
}

::v-deep .el-form-item__label {
    color: white;
}
</style>
