<template>
    <div>
      <h1>Add New Contact</h1>
      <form @submit.prevent="addContact">
        <input v-model="FirstName" placeholder="First Name" required />
        <input v-model="LastName" placeholder="Last Name" required />
        <input v-model="Email" placeholder="Email" type="email" required />
        <input v-model="Phone:" placeholder="Mobile" />
        <button type="Submit">Add Contact</button>
      </form>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        FirstName: '',
        LastName: '',
        Email: '',
        Phone: ''
      };
    },
    methods: {
      addContact() {
        const newContact = {
          id: Date.now().toString(),
          FirstName: this.FirstName,
          LastName: this.LastName,
          Email: this.Email,
          Phone: this.Phone
        };
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push(newContact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push(`/contact/${newContact.id}`);
      }
    }
  };
  </script>