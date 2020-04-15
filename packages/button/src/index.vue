<template>
  <button
    :class="['sh-button', `sh-button--${type}`]">
    <slot />
  </button>
</template>

<script>
/**
* @file index.vue
* @author shenjp@founder.com
* @date 2020-04-14 13:30:20
*/
export default {
  name: 'ShButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
    };
  }
};
</script>
