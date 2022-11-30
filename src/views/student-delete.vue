<template>
  <div>
    <H1>Student Delete</H1>
    <h4>Delete {{ student.firstName }} {{ student.lastName }} ?</h4>
    <button v-on:click="deleteStudent()">Delete</button>
    <button v-on:click="cancel()">Cancel</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],

  data() {
    return {
      student: Object,
      errors: []
    }
  },
  created() {
    axios
      .get('http://localhost/api/students/' + this.id, { crossOrigin: true })
      .then(response => {
        this.student = response.data[0]
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },

  methods: {
    deleteStudent() {
      axios
        .delete('http://localhost/api/students/' + this.id)
        .then(response => {
          this.errors = response.data
          this.$router.push({ name: 'list' })
        })
        .catch(error => {
          this.errors = error.data
        })
    },
    cancel() {
      this.$router.push({ name: 'list' })
    }
  }
}
</script>

<style></style>
