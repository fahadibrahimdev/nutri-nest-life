import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Living Healthy Should Not be a Chore',
    text: 'It’s a NutriNest Life is more than just a guide to help you eat healthy or workout, it is a lifestyle medium that helps you adapt to consuming healthy food that is accessible to you, recipes that you can make on a tight schedule, a reward system that actually pushes you to work out, and a chance to network with notable mentors and fitness experts. ',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'Get complete solutions that shape your everyday life today!',
    subHeading: 'A HOLISTIC APPROACH TO LIVING HEALTHY\n',
    features: [
        {
            title: 'Workout Videos',
            description: 'Get industry experts to help you sculpt your body with exercises suited to your goals.',
            icon: 'workout-chart'
        },
        {
            title: 'Healthy Recipes Everyday ',
            description: 'Don’t think, don\'t scour your fridge. Find nutritious recipes with accessible ingredients.',
            icon: 'healthy-diet'
        },
        {
            title: 'Reward Points',
            description: 'Earn points every time you meet a set target on your fitness journey. You can use these golden coins to purchase more resources as well as Its a NutriNest Life’s merch.',
            icon: 'reard-ribons'
        },
        {
            title: 'Social Media Forum',
            description: 'Connect with like-minded people and share tips and guidance.',
            icon: 'discussion'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'You know short term diets and fitness routines that you cannot possibly stick to forever are not a solution but little doses that reverse really fast. What you need is a way to make sure your lifestyle is healthy yet effortless and that is where It’s a NutriNest Life comes in. It offers you the complete solutions that transforms your routine habits without demanding that you divert from your hectic schedule.',
        'The app eliminates the stress of fitting a workout slot in your routine every day, the inevitable question about what to eat that is healthy but doesnt take you long to prepare, and what to do on days where you just dont feel like going the extra mile to stay healthy.',
    ],
}

export const benefitsContent = {
    heading: 'Not your Average Fitness App',
    text: 'Who says you cannot live a NutriNest Lifestyle when you are busy with work and other obligations. It’s a NutriNest Life is more than a virtual gym experience that you can do in the comfort of your home, it’s an enabler of healthy habits that realistically fit into the modern world where you are already juggling a thousand things at once.',
    benefits: [
        {
            title: 'Virtual ',
            description: 'Work out at home and get easy recipes straight to your phone, and get opportunities to be mentored by the best of the best from all over the world. ',
            icon: 'mobile-in-hand'
        },
        {
            title: 'You have Choices ',
            description: 'Opposed to the limitation of your local gym match a personal trainer according to your preference and compatibility.',
            icon: 'approved-list'
        },
        {
            title: 'Be Part of a Community ',
            description: 'With the social chat feature encourage each other to do better, and share tried and tested tips.',
            icon: 'support'
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is this app compatible with Android or iOS?',
            answer: 'The answer will be here......',

        },
        {
            question: 'Can I redeem the rewards for cash?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'Who is this App for?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Take Control of your Life Today!',
    text: 'Download It’s a NutriNest Life and unlock feasible ways to implement a better lifestyle for you.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-Up',
    accent: `Why ${siteName}?`,
    ctaBtn: 'Download App'
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
