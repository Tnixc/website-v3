<template>
  <div class="w-full rounded-b-6xl bg-rpd-base h-[500px]" id="title">
    <div class="p-20 pt-40 pb-48 font-serif">
      <h1 class="text-5xl text-rpd-subtle">Haiiii</h1>
      <p class="text-7xl text-rpd-subtle">
        I'm <span class="text-rpd-text">Tnixc</span>
      </p>
      <br>
      <h2 class="text-3xl text-rpd-subtle lg:h-auto">
        Just a 15y/o <span class="text-rpd-text">{{ typedText }}</span>
        <span class="underscore text-rpd-foam" :class="{ flash: showUnderscore }"
          >_</span
        >
      </h2>
    </div>
  </div>
</template>
<script lang="ts">
import { ref, onMounted } from "vue";

export default {
  setup() {
    const texts: string[] = [
      "webdev",
      "anime enjoyer",
      "webnovel reader",
      "aspiring 2D Artist",
      "minecraft enjoyer",
      "rhythm game player",
      "aspiring 3D artist",
      "highschool student",
      "webtoon reader",
    ];
    const currentIndex = ref<number>(0);
    const typedText = ref<string>("");
    const showUnderscore = ref<boolean>(false);

    onMounted(() => {
      typeAndCycleText();
    });

    const typeAndCycleText = async () => {
      while (true) {
        await typeText(texts[currentIndex.value]);
        await sleep(2000);
        await backspace();
        currentIndex.value = (currentIndex.value + 1) % texts.length;
      }
    };

    const typeText = (text: string) => {
      return new Promise<void>((resolve) => {
        let charIndex = 0;
        const delay = 200;

        const typingInterval = setInterval(() => {
          if (charIndex < text.length) {
            typedText.value += text[charIndex];
            charIndex++;
          } else {
            clearInterval(typingInterval);
            resolve();
          }
        }, delay);
      });
    };

    const backspace = () => {
      return new Promise<void>((resolve) => {
        const delay = 50;
        const textToType = typedText.value;
        let charIndex = textToType.length;

        const backspaceInterval = setInterval(() => {
          if (charIndex > 0) {
            typedText.value = textToType.substring(0, charIndex - 1);
            charIndex--;
          } else {
            clearInterval(backspaceInterval);
            resolve();
          }
        }, delay);
      });
    };

    const sleep = (ms: number) => {
      return new Promise<void>((resolve) => {
        setTimeout(resolve, ms);
      });
    };

    return {
      typedText,
      showUnderscore,
    };
  },
};
</script>
<style scoped>
#title{
  background: radial-gradient(140% 137.13% at 50% 10%,var(--text) 37.41%,var(--gold) 69.27%,var(--foam) 100%);
}
.underscore {
  animation: blink 0.5s infinite;
}

.flash {
  animation: flash 0.5s infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@keyframes flash {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
</style>
