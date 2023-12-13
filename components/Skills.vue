<template>
  <div class="w-full rounded-t-6xl bg-rpd-base" id="title">
    <div class="px-20 pb-20 pt-20 font-serif text-rp-text">
      <h1 class="flex gap-4 text-6xl">
        <svg
          width="60"
          height="60"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_105_284)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0H50V50H0V0ZM100 50H50V100H0V150H50V200H100V150H150V200H200V150H150V100H200V50H150V0H100V50ZM100 100H150V50H100V100ZM100 100V150H50V100H100Z"
              fill="url(#paint0_linear_105_284)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_105_284"
              x1="100"
              y1="0"
              x2="100"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A7B5FF" />
              <stop offset="1" stop-color="#F3ACFF" />
            </linearGradient>
            <clipPath id="clip0_105_284">
              <rect width="200" height="200" fill="white" />
            </clipPath>
          </defs></svg
        >Skills
      </h1>
      <p class="py-4 font-sans text-xl leading-7 text-rp-subtle">
        I mainly do UI/UX design and Front-end development, but I would like to
        learn more about how js frameworks and web technologies work under the
        hood. I also do some 3D art and animation. I'm considering a career in UI/UX design, but I'm not sure yet.
      </p>
    </div>
  </div>
</template>

<style scoped>
#title {
  background: radial-gradient(
    181.82% 149.9% at 50% 100%,
    transparent 37.41%,
    var(--rose) 89.27%,
    var(--base) 100%
  );
}
</style>
