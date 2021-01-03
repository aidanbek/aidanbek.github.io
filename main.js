$(document).ready(function () {


    const getCurrentSection = function (sections) {
        let currentSection = null;

        sections.each(function () {
            const section = this;
            const position = section.getBoundingClientRect();

            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                currentSection = $(section);
                return false;
            }
        });

        return currentSection;
    };

    const goToSection = (section) => location.hash = '#' + section.attr('id');

    const handleSectionScrolling = (sections, isScrollDown) => {
        const currentSection = getCurrentSection(sections);

        if (!currentSection) {
            return;
        }


        if (isScrollDown) {
            const nextSection = currentSection.next();

            if (nextSection.length) {
                goToSection(nextSection);
            }
        } else {
            const prevSection = currentSection.prev();

            if (prevSection.length) {
                goToSection(prevSection);
            }
        }
    };

    $('body').on('DOMMouseScroll wheel mousewheel', function (e) {
        const isScrollDown = e.originalEvent.deltaY > 0;
        const sections = $('section');
        handleSectionScrolling(sections, isScrollDown);
    })
});