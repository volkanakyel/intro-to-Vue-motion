<template>
  <div class="burger-menu-container">
    <button class="burger-menu-toggle" :class="{ 'open': isOpen }" @click="toggleMenu">
      <span class="burger-line"/>
      <span class="burger-line"/>
      <span class="burger-line"/>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.burger-menu-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.burger-menu-toggle {
  width: 40px;
  height: 40px;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
}

.burger-line {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  background: #000;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: .25s ease-in-out;
}

.burger-line:nth-child(1) {
  top: 0px;
}

.burger-line:nth-child(2) {
  top: 18px;
}

.burger-line:nth-child(3) {
  top: 36px;
}

.burger-menu-toggle.open .burger-line:nth-child(1) {
  top: 18px;
  transform: rotate(135deg);
}

.burger-menu-toggle.open .burger-line:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.burger-menu-toggle.open .burger-line:nth-child(3) {
  top: 18px;
  transform: rotate(-135deg);
}
</style>
