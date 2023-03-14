<template>
    <el-header>
        <!-- <button @click="handleCollapsed">click</button> -->
        <div class="left">
            <el-icon @click="handleCollapsed">
                <Menu />
            </el-icon>
            <span style="margin-left: 10px">企业门户网站管理系统</span>
        </div>
        <div class="right">
            <span>欢迎 {{ store.state.userInfo.username }} 回来</span>
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    <el-icon :size="30" color="white">
                        <user />
                    </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="handleCenter">个人中心</el-dropdown-item>
                        <el-dropdown-item @click="handleLogOut">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script setup>
import { Menu, User } from "@element-plus/icons-vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();

const handleCollapsed = () => {
    store.commit("changeCollapsed");
};

const handleCenter = () => {
    router.push("/center");
};

const handleLogOut = () => {
    localStorage.removeItem("token");
    store.commit("clearUserInfo")
    router.push("/login");
};
</script> 

<style lang="scss" scoped>
.el-header {
    background: #545c64;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    height: 60px;
    line-height: 60px;

    .left {
        display: flex;

        i {
            margin: auto;
            cursor: pointer;
        }
    }

    .right {
        display: flex;

        .el-dropdown {
            margin: auto;
        }

        i {
            cursor: pointer;
            margin-left: 10px;
        }
    }
}
</style>

