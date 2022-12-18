<template>
  <div>
    <H1>Student List</H1>
    <StudentDisplay
      v-for="student in students"
      :key="student.id"
      :student="student"
    />
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
