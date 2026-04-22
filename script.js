document.getElementById('menu-btn').addEventListener('click', function() {
    const nav = document.querySelector('.md:flex');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');
    nav.classList.toggle('flex-col');
    nav.classList.toggle('absolute');
    nav.classList.toggle('top-16');
    nav.classList.toggle('left-0');
    nav.classList.toggle('w-full');
    nav.classList.toggle('bg-slate-900');
    nav.classList.toggle('p-6');
});
