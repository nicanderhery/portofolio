<template>
  <div ref="target">
    <transition :name="animationType">
      <div v-appear="animated" class="animated-component">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
//
import { onMounted, ref } from 'vue';

const target = ref<HTMLElement | null>(null);
const animated = ref(false);
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting && !animated.value) {
      animated.value = entry.isIntersecting;
    }
  },
  {
    threshold: 0.1,
  },
);
onMounted(() => {
  observer.observe(target.value!);
});

defineProps({
  animationType: {
    type: String,
    default: '',
  },
});
</script>

<style scoped>
.slide-from-right-enter-active {
  animation: slide-from-right-enter 0.8s;
}

.slide-from-right-leave-active {
  animation: slide-from-right-leave 0.8s;
}

.slide-from-right-enter,
.slide-from-right-leave-to {
  transform: translateX(100%);
}

@keyframes slide-from-right-enter {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-from-right-leave {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

.slide-from-left-enter-active {
  animation: slide-from-left-enter 0.8s;
}

.slide-from-left-leave-active {
  animation: slide-from-left-leave 0.8s;
}

.slide-from-left-enter,
.slide-from-left-leave-to {
  transform: translateX(-100%);
}

@keyframes slide-from-left-enter {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-from-left-leave {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
