<script setup lang='ts'>
import type { Post } from '@/data/posts'

const { post } = defineProps<{ post: Post }>()

const isHover = ref(false)
</script>

<template>
  <div
    class="card"
    :class="{hover: isHover}"
  >
    <h2 class="title">
      {{ post.title }}
    </h2>
    <CategoryLink :category="post.category" />
    <RenderMarkdown :source="post.intro" />
    <NuxtLink .to="`/posts/${post.slug}`" class="more" @mouseenter="isHover = true" @mouseleave="isHover = false">
      More ...
    </NuxtLink>
  </div>
</template>

<style scoped lang="scss">
@import "~/assets/styles/_colors.scss";

.card {
  padding: 15px 15px 35px;
  border: 1px solid $green-dark;
  border-radius: 5px;
  margin-bottom: 25px;
  font-size: 12pt;
  position: relative;
}

.card .title {
  font-size: 20pt;
}

.card .more {
    color: $green-medium;
    font-size: 12pt;
    padding: 5px 10px;
    position: absolute;
    right: 0px;
    bottom: 0px;
}

.card.hover {
    border-color: $green-medium;
}

.card.hover .title {
    color: $green-light;
}

.card.hover .more {
    color: $green-light;
}
</style>
