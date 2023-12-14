<template>
  <div
    class="rounded-3xl something relative flex max-w-full flex-col bg-rp-surface p-10"
  >
    <h1 class="flex items-center gap-5 font-serif text-4xl text-rp-text">
      Dotfiles
      <a
        class="font-sans text-3xl text-rp-gold/80 transition-all hover:text-rp-gold hover:underline"
        href="https://github.com/tnixc/dots"
        target="_blank"
        >{{ stars }}★</a
      >
    </h1>
    <p class="py-4 pb-2 text-lg text-rp-subtle">
      My dotfiles for my macOS setup. Includes my yabai config, sketchybar
      config, and more. I also have a seperate repo for my firefox user css.
    </p>
    <div class="mb-0 mt-auto">
      <a
        href="https://github.com/tnixc/firefox-config"
        target="_blank"
        class="inline font-sans text-lg text-rpd-foam transition-all hover:text-rp-foam hover:underline"
        >github.com/tnixc/firefox-config</a
      >
      <span class="inline-block w-4"></span>
      <span class="select-none text-rp-subtle">|</span>
      <span class="inline-block w-4"></span>
      <a
        href="https://github.com/tnixc/dots"
        target="_blank"
        class="inline font-sans text-lg text-rpd-foam transition-all hover:text-rp-foam hover:underline"
        >github.com/tnixc/dots</a
      >
    </div>
  </div>
</template>
<style scoped>
.something::after {
  content: "";
  bottom: -50px;
  left: 30%;
  height: 200px;
  width: 200px;
  border-radius: 999px;
  filter: blur(99px);
  position: absolute;
  background-color: var(--foam);
  z-index: -1;
}
.something::before {
  content: "";
  bottom: -250px;
  left: 40%;
  height: 200px;
  width: 200px;
  border-radius: 999px;
  filter: blur(99px);
  position: absolute;
  background-color: var(--pine);
  z-index: -1;
}
</style>
<script lang="ts">
export default {
  data() {
    return {
      stars: null as string | null, // Use null as the initial type
    };
  },
  async mounted() {
    this.stars = await this.getUpdated();
  },
  methods: {
    async getUpdated() {
      const data = await fetch("https://api.github.com/repos/tnixc/dots");
      const json = await data.json();
      const x = json.stargazers_count;
      return x;
    },
  },
};
</script>
