<template>
  <div>
    <tr>
      <td>{{ student.firstName }} {{ student.lastName }}</td>
      <td>
        <router-link
          :to="{
            name: 'edit',
            params: { id: student.id },
          }">
          <span>Edit</span>
        </router-link>
      </td>
      <td>
        <router-link
          :to="{
            name: 'delete',
            params: { id: student.id },
          }">
          <span>Delete</span>
        </router-link>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  props: {
    student: {},
  },
};
</script>

<style></style>
