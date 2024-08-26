<template>
  <div>
    <h1>Tab {{typeid+1}} Content</h1>
    <p>This is the content for Tab 1.</p>
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
      name: 'Tab1'
    };
  }
};
</script>

<style scoped>
/* Tab1 specific styles */
</style>
