<template>
    <div>
      <h2>Edit Contact</h2>
      <form @submit.prevent="updateContact">
        <input v-model="FirstName" placeholder="First Name" required />
        <input v-model="LastName" placeholder="Last Name" required />
        <input v-model="Email" placeholder="Email" type="email" required />
        <input v-model="Phone" placeholder="Phone" />
        <button type="submit">Update Contact</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      const id = this.$route.params.id;
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const contact = contacts.find(c => c.id === id);
      return { ...contact };
    },
    methods: {
      updateContact() {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        const index = contacts.findIndex(c => c.id === this.$route.params.id);
        if (index !== -1) {
          contacts[index] = { ...contacts[index], FirstName: this.FirstName, LastName: this.LastName, Email: this.Email, Phone: this.Phone };
          localStorage.setItem('contacts', JSON.stringify(contacts));
          this.$router.push(`/contact/${this.$route.params.id}`);
        }
      }
    }
  };
  </script>