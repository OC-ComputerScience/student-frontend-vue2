<template>
  <div>
    <span>{{ student.firstName }} {{ student.lastName }} (</span>
    <router-link :to="{ name: 'edit', params: { id: student.id } }">
      <span>edit</span>
    </router-link>
    <span>|</span>
    <router-link :to="{ name: 'delete', params: { id: student.id } }">
      <span>delete</span>
    </router-link>
    <span>)</span>
  </div>
</template>

<script>
export default {
  props: {
    student: Object,
  },
};
</script>

<style></style>
