<template>
  <div class="w-full rounded-t-6xl bg-rpd-base" id="title">
    <div class="px-6 pb-20 pt-20 font-serif text-rp-text lg:px-20">
      <h1 class="flex gap-4 text-6xl">
        <svg
          width="60"
          height="60"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_104_26)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M107.143 0H92.8571V82.7556L34.3401 24.2385L24.2386 34.3401L82.7556 92.8571H0V107.143H82.7555L24.2386 165.66L34.3401 175.761L92.8571 117.244V200H107.143V117.244L165.66 175.761L175.761 165.66L117.244 107.143H200V92.8571H117.244L175.761 34.34L165.66 24.2385L107.143 82.7555V0Z"
              fill="url(#paint0_linear_104_26)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_104_26"
              x1="20.5"
              y1="16"
              x2="100"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ACAAFF" />
              <stop offset="1" stop-color="#C0E8FF" />
            </linearGradient>
            <clipPath id="clip0_104_26">
              <rect width="200" height="200" fill="white" />
            </clipPath>
          </defs></svg
        >about
      </h1>
      <br />
      <p class="font-mono text-2xl text-rp-text">
        | he/him | Time Zone: EST | 🇨🇦 🇭🇰 |
      </p>
      <p class="py-4 font-sans text-xl leading-7 text-rp-subtle">
        I'm a
        <span class="font-bold text-rp-text"
          >15 year old high school student from Hong Kong living in Canada</span
        >. I enjoy video games, coding, reading books and webcomics, watching
        anime, listening to lots of jpop, touhou songs, vocaloids and all that,
        and doing 2D and 3D art. I started webdev around 2022, but honestly time
        has been blur since 2020 so I'm not sure. I also like trains and bikes(a
        huge fan of dutch urban design), public transit, typography, and open
        source. I also like chilling in IKEA and hiking :3
        <br />
        <br />
        I also enjoy games like minecraft and a lot of rhythm games like osu!,
        pjsk, and beat saber. I also like BG3, City Skylines 2, Cyberpunk, poly
        bridge, ultrakill, besiege, and celeste.
      </p>
      <h2 class="text-4xl">Software I use:</h2>
      <div class="row flex gap-2 py-4 flex-wrap">
        <NuxtImg
          loading="lazy"
          alt="VScode"
          src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/38435288692cf8db1593ce7eb70bb94e_iOS_VSCode.png"
        />
        <NuxtImg
          loading="lazy"
          alt="Firefox"
          src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/82dd4e5cf4394c83bee00fe41bdc5a8a_DBLSmu0BCH.png"
        />
        <NuxtImg
          loading="lazy"
          alt="Arc"
          src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/9a7b440db5946f1c5d5c8f8ff9e6baeb_iOS_Arc__Sticker__Pink_Background_.png"
        />
        <NuxtImg
          loading="lazy"
          alt="macOS"
          src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/a6145ce6eb14a1735d591f3fd4e487dd_8aLsApf29X.png"
        />
        <NuxtImg
          loading="lazy"
          alt="Windows 11"
          src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/7bb6dee727f08a8ff77a6b5b70783442_iOS_Windows%2011.png"
        />
        <NuxtImg
          loading="lazy"
          alt="Affinity Designer"
          src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/345ec3eaa2e13a859ba8bd7e7e302cf2_iOS_Affinity_Designer.png"
        />
        <NuxtImg
          loading="lazy"
          alt="Affinity Photo"
          src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/ee33d6aa61e5c7aa10b1053a89f533a7_iOS_Affinity%20Designer%20-%20Affinity%20Photo%20style.png"
        />
        <NuxtImg
          loading="lazy"
          alt="Blender"
          src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/dcb0dc9e3a8491365e693aa5a87c2c84_iOS_Blender.png"
        />
        <NuxtImg
          loading="lazy"
          alt="Procreate"
          src="https://i.pinimg.com/474x/40/2e/90/402e9068106a449c95ca1c8f1a2c0881.jpg"
        />
        <NuxtImg
          loading="lazy"
          alt="Figma"
          src="https://parsefiles.back4app.com/JPaQcFfEEQ1ePBxbf6wvzkPMEqKYHhPYv8boI1Rc/43942aca0192b8ee842b86b26622ef0d_5Yo6YUGiBc.png"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.row > img {
  @apply rounded-xl h-12;
}
#title {
  background: radial-gradient(
    181.82% 149.9% at 50% 100%,
    transparent 37.41%,
    var(--foam) 69.27%,
    var(--text) 100%
  );
}
</style>
