<template>
  <div
    id="desktop"
    class="fixed bottom-4 left-1/2 flex h-16 w-[98%] max-w-5xl -translate-x-1/2 items-center rounded-full bg-rpm-base text-rpm-text ring-2 ring-rpm-muted"
  >
    <NuxtImg
      class="block max-h-full scale-75 rounded-full ring-2 ring-rpm-love"
      src="https://avatars.githubusercontent.com/u/85466117?v=4"
    />
    <p class="px-2 pb-1 font-serif text-2xl">Tnixc</p>
    <div class="ml-auto mr-0 flex px-5">
      <nuxt-link
        class="cursor-pointer px-4 pb-1 font-serif text-2xl text-rpm-love underline-offset-4 opacity-80 transition-all hover:underline hover:opacity-100"
        to=""
        >About</nuxt-link
      >
      <nuxt-link
        class="cursor-pointer px-4 pb-1 font-serif text-2xl text-rpm-foam underline-offset-4 opacity-80 transition-all hover:underline hover:opacity-100"
        to=""
        >Blog</nuxt-link
      >

      <nuxt-link
        class="cursor-pointer px-4 pb-1 font-serif text-2xl text-rpm-iris underline-offset-4 opacity-80 transition-all hover:underline hover:opacity-100"
        to=""
        >Projects</nuxt-link
      >
      <nuxt-link
        class="cursor-pointer px-4 pb-1 font-serif text-2xl text-rpm-gold underline-offset-4 opacity-80 transition-all hover:underline hover:opacity-100"
        to=""
        >Contact</nuxt-link
      >
    </div>
  </div>
</template>
