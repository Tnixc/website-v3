<template>
  <div class="rounded-3xl flex w-full max-w-full flex-col bg-rp-surface p-10">
    <div>
      <h1 class="flex items-center gap-5 font-serif text-4xl text-rp-text">
        Dotfiles <a class="text-rp-gold/80 hover:text-rp-gold font-sans text-3xl transition-all hover:underline" href="https://github.com/tnixc/dots" target="_blank">{{stars}}★</a>
      </h1>
      <p class="py-4 pb-2 text-lg text-rp-subtle">
        My dotfiles for my macOS setup. Includes my yabai config, sketchybar
        config, and more. I also have a seperate repo for my firefox user css.
      </p>
      <a
        href="https://github.com/tnixc/firefox-config"
        target="_blank"
        class="inline font-mono text-lg text-rpd-foam transition-all hover:text-rp-foam hover:underline"
        >https://github.com/tnixc/firefox-config</a
      >
      <span class="inline-block w-4"></span>
      <span class="text-rp-subtle select-none">|</span>
      <span class="inline-block w-4"></span>
      <a
        href="https://github.com/tnixc/dots"
        target="_blank"
        class="inline font-mono text-lg text-rpd-foam transition-all hover:text-rp-foam hover:underline"
        >https://github.com/tnixc/dots</a
      >
    </div>
  </div>
</template>
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
      const data = await fetch(
        "https://api.github.com/repos/tnixc/dots",
      );
      const json = await data.json();
      const x = json.stargazers_count;
      return x
    },
  },
};
</script>
