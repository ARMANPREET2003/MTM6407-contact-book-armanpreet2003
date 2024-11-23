<template>
    <div>
      <input v-model="searchQuery" placeholder="Search contacts" />
      <ul>
        <li v-for="contact in filteredContacts" :key="contact.id">
          <router-link :to="`/contact/${contact.id}`">{{ contact.FirstName }} {{ contact.LastName }}</router-link>
        </li>
      </ul>
      <router-link to="/add">Add New Contact</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        contacts: JSON.parse(localStorage.getItem('contacts')) || []
      };
    },
    computed: {
      filteredContacts() {
        return this.contacts
          .filter(contact =>
            contact.FirstName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            contact.LastName.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
          .sort((a, b) => a.LastName.localeCompare(b.LastName));
      }
    }
  };
  </script>