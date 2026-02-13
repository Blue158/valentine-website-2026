// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Кюсша", "Jade", "Sarah", "Mike"
    valentineName: "Кюсша",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Будешь моей валентинкой? 💞",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🇷🇺', '🇲🇽', '🇪🇸', '🇷🇺']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Тебе я нравлюсь?",                                    // First interaction
            yesBtn: "Да",                                             // Text for "Yes" button
            noBtn: "Нет",                                               // Text for "No" button
            secretAnswer: "Мне не просто ты нравишься — я тебя люблю! ❤️"           // Secret hover message
        },
        second: {
            text: "Насколько сильно ты меня любишь?",                          // For the love meter
            startText: "Вот настолько!",                                   // Text before the percentage
            nextBtn: "продолжать ❤️"                                         // Text for the next button
        },
        third: {
            text: "Будешь моей валентинкой 14 февраля 2026 года? 🌹", // The big question!
            yesBtn: "Sí",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Столько любви, что все котики мира одновременно замурлыкали 🐱🚀💝",  // Shows when they go past 5000%
        high: "Это любовь уровня HSK 10 — её невозможно сдать, можно только чувствовать ❤️",              // Shows when they go past 1000%
        normal: "天啊，你这么爱我！🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "WOHOOO! I'm the luckiest person in the world! ❤️",
        message: "Now let me give you a small detail, a hug and a big kiss !",
        emojis: "🌹🌹🌹🌹🌹🌹🌹"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffcfaf",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#a8a0ff",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "13s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 1                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
