<template>
  <div>
    <H1>Student Edit</H1>
    <h4>{{ student.firstName }} {{ student.lastName }}</h4>

    <form @submit.prevent="updateStudent">
      Id:
      <input id="id" v-model="student.idNumber" type="text" />
      <span id="idNumberErr" class="error">{{ errors.idNumber || "*" }}</span>
      <br />
      <br />Fist Name:
      <input id="firstName" v-model="student.firstName" type="text" />
      <span id="firstNameErr" class="error">{{ errors.firstName || "*" }}</span>
      <br />
      <br />Last Name:
      <input id="lastName" v-model="student.lastName" type="text" />
      <span id="lastNameErr" class="error">{{ errors.lastName || "*" }}</span>
      <br />
      <br />Zip:
      <input
        id="zip"
        v-model="student.zip"
        type="text"
        @blur="cityStateLookup()"
      />
      <span id="zipErr" class="error">{{ errors.zip || "*" }}</span>
      <br />
      <br />City:
      <input id="city" v-model="student.city" type="text" />
      <span id="cityErr" class="error">{{ errors.city || "*" }}</span>
      <br />
      <br />State:
      <input id="state" v-model="student.state" type="text" />
      <span id="stateErr" class="error">{{ errors.state || "*" }}</span>
      <br />
      <br />E-mail:
      <input id="email" v-model="student.email" type="text" />
      <span id="emailErr" class="error">{{ errors.email || "*" }}</span>
      <br />
      <br />Classification:
      <input
        v-model="student.classification"
        type="radio"
        name="classification"
        value="FR"
      />Freshman
      <input
        v-model="student.classification"
        type="radio"
        name="classification"
        value="SO"
      />Sophmore
      <input
        v-model="student.classification"
        type="radio"
        name="classification"
        value="JR"
      />Junior
      <input
        v-model="student.classification"
        type="radio"
        name="classification"
        value="SR"
      />Senior
      <span id="classificationErr" class="error">{{
        errors.classification || "*"
      }}</span>
      <br />
      <br />Gender:
      <input
        v-model="student.gender"
        type="radio"
        name="gender"
        value="F"
      />Female
      <input
        v-model="student.gender"
        type="radio"
        name="gender"
        value="M"
      />Male
      <span id="genderErr" class="error">{{ errors.gender || "*" }}</span>
      <br />
      <br />
      <input type="submit" name="submit" value="Save" />
      <button name="cancel" @click.prevent="cancel()">Cancel</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    id: {
      type: [Number, String],
      default: 0,
    },
  },
  data() {
    return {
      student: {},
      errors: {},
    };
  },
  created() {
    axios
      .get("http://localhost/api/students/" + this.id, { crossOrigin: true })
      .then((response) => {
        this.student = response.data[0];
      })
      .catch((error) => {
        console.log("There was an error:", error.response);
      });
  },

  methods: {
    updateStudent() {
      axios
        .put("http://localhost/api/students/" + this.id, this.student)
        .then(() => {
          this.$router.push({ name: "list" });
        })
        .catch((error) => {
          if (error.response.status == "406") {
            this.errors = {};
            for (let obj of error.response.data) {
              this.$set(this.errors, obj.attributeName, obj.message);
            }
          }
        });
    },
    cancel() {
      this.$router.push({ name: "list" });
    },
    cityStateLookup() {
      if (this.student.zip != "") {
        axios
          .get("http://localhost/api/zip/" + this.student.zip, {
            crossOrigin: true,
          })
          .then((response) => {
            this.student.city = response.data.city;
            this.student.state = response.data.state_code;
          })
          .catch((error) => {
            console.log("There was an error:", error.response);
          });
      }
    },
  },
};
</script>

<style></style>
