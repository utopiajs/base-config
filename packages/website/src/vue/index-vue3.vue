<script setup>
// 变量
const msg = 'Hello!';

// 函数
function log() {
  console.log(msg);
}
</script>

<template>
  <button @click="log">{{ msg }}</button>
</template>
