<script setup lang='ts'>
const categoryState = useCategoryState()
</script>

<template>
  <div class="layout">
    <nav class="breadcrumb">
      <NuxtLink class="link" to="/">
        All
      </NuxtLink>
      ➤
      <NuxtLink class="link" to="categories">
        Categories
      </NuxtLink>
      ➤
      <ClientOnly>
        <NuxtLink class="link" :to="`/categories/${categoryState.slug}`">
          Category: {{ categoryState.name }}
        </NuxtLink>
      </ClientOnly>
    </nav>
    <slot />
  </div>
</template>

<style lang='scss'>
@import '/assets/styles/_colors.scss';

.layout {
  width: 620px;
  margin: 0px auto 50px;
}

.breadcrumb {
  margin-top: 10px;
  margin-bottom: 30px;
  position: relative;
  font-size: 14pt;
  color: $green-dark;
}

.breadcrumb .link {
  height: 28px;
  margin-right:5px;
  display: inline-block;
  color: $green-medium;
}

.breadcrumb .link:hover {
  color: $green-light;
  cursor: pointer;
}
</style>
