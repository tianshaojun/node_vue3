<template>
    <div>
        <el-card>
            <el-page-header content="用户列表" icon="" title="用户管理" />

            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="username" label="用户名" width="180" />
                <el-table-column label="头像" width="180">
                    <template #default="scope">
                        <div v-if="scope.row.avatar">
                            <el-avatar :size="50" :src="'http://localhost:3000' + scope.row.avatar"></el-avatar>
                        </div>
                        <div v-else>
                            <el-avatar :size="50"
                                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" />
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="角色">
                    <template #default="scope">
                        <!-- {{scope.row.role===1?'管理员':'编辑'}}
                                 -->
                        <el-tag v-if="scope.row.role === 1" class="ml-2" type="danger">管理员</el-tag>

                        <el-tag v-else class="ml-2" type="success">编辑</el-tag>

                    </template>
                </el-table-column>

                <el-table-column label="操作">
                    <template #default="scope">
                        <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-popconfirm title="你确定要删除吗?" confirmButtonText="确定" cancelButtonText="取消"
                            @confirm="handleDelete(scope.row)">
                            <template #reference>
                                <el-button size="small" type="danger">删除</el-button>
                            </template>
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const tableData = ref([]);
onMounted(() => {
    getTableData();
});

const getTableData = async () => {
    const res = await axios.get("/adminapi/user/list");
    // console.log(res.data)
    tableData.value = res.data.data;
};

const handleEdit = data => {
    console.log(data);
};
const handleDelete = async data => {
    //   console.log(data);
    await axios.delete(`/adminapi/user/list/${data._id}`)

    //reload page
    //reload data
    getTableData();
    //tabledata 本地删除
};
</script>
<style lang="scss" scoped>
.el-table {
    margin-top: 50px;
}
</style>
