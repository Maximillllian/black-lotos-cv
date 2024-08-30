import { ref, onMounted, onBeforeUnmount } from 'vue';

export function useAnimation() {
    const isAnimationEnded = ref(false);

    function startAnimation() {
        isAnimationEnded.value = false;
    }

    function endAnimation() {
        console.log('endAnimation');
        isAnimationEnded.value = true;
    }

    onMounted(() => {
        document.addEventListener('keypress', endAnimation, { once: true });
    });
    
    onBeforeUnmount(() => {
        document.removeEventListener('keypress', endAnimation);
    });

    return {
        isAnimationEnded,
        endAnimation,
        startAnimation
    }
}