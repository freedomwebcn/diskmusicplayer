import { ref, onMounted } from 'vue';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbars } from 'overlayscrollbars';
export function initMainViewScrollBar(el, viewportel) {
  let mainViewScrollTop = ref(0);
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
          mainViewScrollTop.value = scrollTop;
        }
      }
    );
  });

  return {
    mainViewScrollTop,
    instance
  };
}
export function initNavScrollBar(el) {
  onMounted(() => {
    OverlayScrollbars(document.querySelector(el), {
      scrollbars: {
        autoHide: 'leave',
        theme: 'os-theme-custom'
      }
    });
  });
}
