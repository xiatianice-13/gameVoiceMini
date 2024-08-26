<template>
  <div>
    <h1>Tab {{typeid+1}} Content</h1>
    <p>This is the content for Tab 2.</p>
  </div>
</template>

<script>
export default {
  props: {
    typeid: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      name: 'Tab2'
    };
  }
};
</script>

<style scoped>
/* Tab1 specific styles */
</style>
