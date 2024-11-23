<template>
    <form @submit.prevent="handleSubmit">
      <div>
        <label for="FirstName">First Name:</label>
        <input
          id="FirstName"
          v-model="contact.FirstName"
          type="text"
          placeholder="Enter First name"
          required
        />
      </div>
  
      <div>
        <label for="LastName">Last Name:</label>
        <input
          id="LastName"
          v-model="contact.LastName"
          type="text"
          placeholder="Enter last name"
          required
        />
      </div>
  
      <div>
        <label for="Email">Email:</label>
        <input
          id="Email"
          v-model="contact.Email"
          type="Email"
          placeholder="Enter Email"
          required
        />
      </div>
  
      <div>
        <label for="Phone">Phone Number:</label>
        <input
          id="Phone"
          v-model="contact.Phone"
          type="tel"
          placeholder="Enter Phone number"
        />
      </div>
  
      <div>
        <label for="address">Address:</label>
        <textarea
          id="address"
          v-model="contact.address"
          placeholder="Enter address"
        ></textarea>
      </div>
  
      <button type="Submit">{{ isEditing ? "Update Contact" : "Add Contact" }}</button>
      <button type="button" @click="cancel">Cancel</button>
    </form>
  </template>
  
  <script>
  export default {
    props: {
      existingContact: {
        type: Object,
        default: () => ({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
        }),
      },
      isEditing: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        contact: { ...this.existingContact },
      };
    },
    methods: {
      handleSubmit() {
        this.$emit("submit", { ...this.contact });
      },
      cancel() {
        this.$emit("cancel");
      },
    },
  };
  </script>
  
  <style scoped>
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  label {
    font-weight: bold;
  }
  
  input,
  textarea {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type="submit"] {
    background-color: #007bff;
    color: white;
  }
  
  button[type="button"] {
    background-color: #ccc;
  }
  </style>