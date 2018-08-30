<template>
    <transition name="b-collapse" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
        <slot></slot>
    </transition>
</template>

<script>
function getSize(size) {
    if (!size) return 0;
    const index = size.indexOf("px");
    if (index === -1) return 0;
    return Number(size.substring(0, index));
}
export default {
    name: "BCollapseTransition",
    methods: {
        beforeEnter(el) {
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.dataset.oldOverflow = el.style.overflow;
            el.style.paddingTop = "0";
            el.style.paddingBottom = "0";
            el.style.height = "0";
        },
        enter(el) {
            el.style.display = "block";
            el.style.overflow = "hidden";
            el.style.height =
                el.scrollHeight +
                getSize(el.dataset.oldPaddingTop) +
                getSize(el.dataset.oldPaddingBottom) +
                "px";
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        },
        afterEnter(el) {
            el.style.display = "";
            el.style.height = "";
            el.style.overflow = el.dataset.oldOverflow;
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        },
        beforeLeave(el) {
            el.dataset.oldPaddingTop = el.style.paddingTop;
            el.dataset.oldPaddingBottom = el.style.paddingBottom;
            el.dataset.oldOverflow = el.style.overflow;

            el.style.display = "block";
            if (el.scrollHeight !== 0) {
                el.style.height = el.scrollHeight + "px";
            }
            el.style.overflow = "hidden";
        },
        leave(el) {
            if (el.scrollHeight !== 0) {
                el.style.height = 0;
                el.style.paddingTop = 0;
                el.style.paddingBottom = 0;
            }
        },
        afterLeave(el) {
            el.style.display = "none";
            el.style.height = "";
            el.style.overflow = el.dataset.oldOverflow;
            el.style.paddingTop = el.dataset.oldPaddingTop;
            el.style.paddingBottom = el.dataset.oldPaddingBottom;
        }
    }
};
</script>
