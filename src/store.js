import {reactive} from 'vue';

export const store = reactive({
    icons: [
        'fa-facebook',
        'fa-twitter',
        'fa-instagram',
        'fa-linkedin'
    ],
    toolbar: [
        {
            icon: 'fa-ruler',
            label: 'Select Demo',
        },
        {
            icon: 'fa-life-ring',
            label: 'Support Channel',
        },
        {
            icon: 'fa-book',
            label: 'Documentation',
        },
        {
            icon: 'fa-cart-shopping',
            label: 'Purchase MaxCoach',
        }
    ],
    currentIndex: 0,
});
