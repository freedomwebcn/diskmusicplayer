import { ref, onMounted } from 'vue';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
import { store } from '/src/store/store.js';

export function initMainViewScrollBar(el, viewportel) {
  let instance = ref(null);
  onMounted(() => {
    instance.value = OverlayScrollbars(
      {
        target: document.querySelector(el),
        elements: {
          viewport: document.querySelector(viewportel)
        }
      },
      {
        scrollbars: {
          theme: 'os-theme-custom',
          autoHide: 'leave'
        }
      },

      {
        scroll(osInstance) {
          const { viewport } = osInstance.elements();
          const { scrollTop } = viewport; // get scroll offse
          // console.log(scrollTop);
          store.setScrollTop(scrollTop);
        }
      }
    );
  });

  return {
    instance
  };
}
export function initNavScrollBar(el) {
  let instance = ref(null);

  onMounted(() => {
    instance.value = OverlayScrollbars(document.querySelector(el), {
      scrollbars: {
        autoHide: 'leave',
        theme: 'os-theme-custom',
    
      }
    });
  });

  return { instance };
}
