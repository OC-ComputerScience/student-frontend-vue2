<template>
  <div>
    <h1>Student List</h1>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Actions</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        <StudentDisplay
          v-for="student in students"
          :key="student.id"
          :student="student" />
      </tbody>
    </table>
  </div>
</template>

<script>
import StudentDisplay from "@/components/StudentDisplay.vue";
import axios from "axios";
export default {
  components: {
    StudentDisplay,
  },
  data() {
    return {
      students: [],
    };
  },
  created() {
    axios
      .get("http://localhost/api/students", { crossOrigin: true })
      .then((response) => {
        this.students = response.data;
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },
};
</script>

<style></style>
