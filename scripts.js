
// ChatGPT
document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');

    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            const level = skill.getAttribute('data-level');
            skill.classList.add(level);
        });

        skill.addEventListener('mouseleave', () => {
            const level = skill.getAttribute('data-level');
            skill.classList.remove(level);
        });
    });
});
// ChatGPT end