<template>
    <div id="myeditor">

    </div>
</template>

<script setup>
import { onMounted, defineEmits } from "vue";
import E from "wangeditor";
const emit = defineEmits(["event"])
onMounted(() => {
    const editor = new E("#myeditor");
    editor.create();

    editor.config.onchange = function (newHtml) {
        // console.log("change 之后最新的 html", newHtml);

        //子传父
        emit("event", newHtml)
    };
});
</script>
