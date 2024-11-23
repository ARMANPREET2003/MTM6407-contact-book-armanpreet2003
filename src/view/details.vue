<template>
    <div>
      <h2>{{ contact.FirstName }} {{ contact.LastName }}</h2>
      <p>Email: {{ contact.Email }}</p>
      <p>Phone: {{ contact.Phone }}</p>
      <router-link :to="`/edit/${contact.id}`">Edit</router-link>
      <button @click="deleteContact">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      const id = this.$route.params.id;
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      return { contact: contacts.find(c => c.id === id) };
    },
    methods: {
      deleteContact() {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const index = contacts.findIndex(c => c.id === this.contact.id);
        if (index !== -1) {
          contacts.splice(index, 1);
          localStorage.setItem('contacts', JSON.stringify(contacts));
          this.$router.push('/');
        }
      }
    }
  };
  </script>