const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add("animation-enter");
                animatedScrollObserver.unobserve(entry.target)
            }
        })
    }
)

export default {
    bind(el) {
        el.classList.add("animation-before-enter")
        animatedScrollObserver.observe(el);
        }
}