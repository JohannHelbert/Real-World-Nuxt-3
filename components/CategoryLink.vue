<script setup lang='ts'>
import type { Category } from '@/data/categories'

const { category } = defineProps<{ category: Category}>()
</script>

<template>
  <div class="category">
    <a href="#">Category: {{ category.name }}</a>
  </div>
</template>

<style scoped lang='scss'>
@import '/assets/styles/_colors';

.category {
    display: block;
    margin: 15px 0px;
}

.category a {
    color: $green-medium;
    border: 1px solid $green-dark;
    border-radius: 5px;
    font-size: 12pt;
    padding: 5px 10px;
}

.category a:hover {
    color: $green-light;
    border-color: $green-medium;
}
</style>
