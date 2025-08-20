// Language content
const languages = {
    en: {
        logo: "Deera",
        tagline: "Pioneering the future of robotics and artificial intelligence",
        comingSoon: "Coming Soon",
        about: "About",
        careers: "Careers",
        contact: "Contact",
        product: "Products",
        aboutTitle: "About Deera Robotics & AI",
        aboutText: "Deera Robotics & AI is a technology company based in Bengaluru, India, dedicated to advancing the future of robotics and artificial intelligence. Our work spans industrial automation, factory and farming robotics, AI-powered agents for enterprises, and intelligent home assistance. In parallel, we are building advanced AI agents for personal assistance, customer support, booking management, and digital operations, helping businesses and individuals achieve greater efficiency. At home, our Rishi AI platform enables smart automation and personal assistance, making everyday living more seamless, connected, and intelligent. Together, our robotics and AI systems are shaping the foundation for a smarter and more abundant society.",
        aboutTagline: "Building a world where industries, farms, and homes thrive, while our robots and Risi Home automation handle the rest.",
        careersTitle: "Careers at Deera",
        careersText: "We are always looking for talented individuals to join our team. Stay tuned for job openings and opportunities to work with us!",
        
        // Careers page content
        cultureTitle: "Startup Culture",
        cultureDesc: "Be part of a fast-growing robotics startup where every team member has a direct impact on shaping the future of humanoid robots and AI systems.",
        learnTitle: "Learn & Build",
        learnDesc: "Work on cutting-edge robotics, AI, and automation projects from day one. You'll get exposure to real-world challenges across industries, factories, farming, and smart homes.",
        growthTitle: "Growth Opportunities",
        growthDesc: "At a startup, your contributions are visible. If you perform, you'll grow quickly into leadership roles with more ownership and responsibility.",
        flexibilityTitle: "Flexibility",
        flexibilityDesc: "We understand the startup grind—so we offer flexible hours and remote-friendly options to let you balance work with life while still pushing boundaries.",
        ownershipTitle: "Ownership Mindset",
        ownershipDesc: "We don't just hire employees—we build founders within the team. Expect equity options and the chance to shape not only products but also the company culture and vision.",
        passionTitle: "Passion-Driven Team",
        passionDesc: "Join a small, mission-driven team of builders, dreamers, and problem-solvers who are obsessed with creating robots and AI agents that change the world.",
        littleThingsTitle: "Little Things That Matter",
        littleThingsDesc: "Team lunches, hackathons, demo days, and celebrations—we keep the energy high and make sure the journey is as exciting as the destination.",
        
        // Application section
        applyTitle: "Join Our Team",
        howToApplyTitle: "How to Apply",
        howToApplyDesc: "To submit your application, please email us at:",
        requirementsTitle: "Application Requirements",
        req1: "📄 Resume/CV - With your skills and experience",
        req2: "🤔 Why Deera? - About why you chose to join Deera",
        req3: "🔮 Future Vision - Your future vision in robotics and AI field",
        
        // Contact section
        contactTitle: "📞 Contact Us – Deera",
        investorTitle: "For Investors",
        investorDesc: "Partner with us to shape the future of robotics and AI—your investment fuels the next leap in human progress.",
        productTitle: "For Product & Service Enquiries",
        productDesc: "Discover how our robots and AI agents can transform your industry, farm, or home—our team is here to assist you.",
        contactText: "For inquiries, please email us at <a href=\"mailto:ceo@deera.live\">ceo@deera.live</a>.",
        
        // ✅ Products page
        productsTitle: "Our Products",
        products: [
            { name: "TeraNova", desc: "Framing Robot" },
            { name: "Xyntra", desc: "Industrial AGV and Attachment" },
            { name: "Deera Sentinel", desc: "Humanoid" },
            { name: "Rishi", desc: "Smart Home" },
            { name: "Deera AI", desc: "AI agent" }
        ],
        
        // AI page content
        aiTitle: "Deera AI Solutions",
        aiSubtitle: "Advanced artificial intelligence for the future",
        ttsTitle: "Text-to-Speech (TTS)",
        ttsDesc: "Transform text into natural-sounding speech for various applications.",
        ttsFeatures: [
            "Natural sounding voices",
            "Multiple language support",
            "Customizable speech parameters"
        ],
        sttTitle: "Speech-to-Text (STT)",
        sttDesc: "Convert spoken words into text with high accuracy and real-time processing.",
        sttFeatures: [
            "High accuracy: 98%+",
            "Real-time processing",
            "Multiple languages support"
        ],
        chatbotTitle: "Chatbot",
        chatbotDesc: "Intelligent conversational AI for engaging interactions and information retrieval.",
        chatbotFeatures: [
            "Advanced intent recognition",
            "Contextual conversation",
            "Multi-turn dialogue"
        ],
        modelsTitle: "Built-in AI Models",
        llmTitle: "Large Language Model (LLM)",
        llmDesc: "Powerful AI model for advanced natural language understanding and generation.",
        llmFeatures: [
            "Advanced language understanding",
            "Creative text generation",
            "Contextual reasoning"
        ],
        vlmTitle: "Vision Language Model (VLM)",
        vlmDesc: "Combine vision and language to understand and generate images and videos.",
        vlmFeatures: [
            "Image and video understanding",
            "Creative image generation",
            "Visual storytelling"
        ],
        vamTitle: "Visual Action Model (VAM)",
        vamDesc: "Understand and execute visual actions from images and videos.",
        vamFeatures: [
            "Action recognition",
            "Object manipulation",
            "Scene understanding"
        ],
        inHouseBadge: "In-House Built",
        comingSoonText: "More AI Solutions Coming Soon...",
        demoTitle: "Interactive AI Demo",
        demoDesc: "Chat with our AI and provide your email for follow-up"
    },
    kn: {
        logo: "ದೀರ",
        tagline: "ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯ ಭವಿಷ್ಯವನ್ನು ಮುನ್ನಡೆಸುತ್ತಿದೆ",
        comingSoon: "ಅತಿ ಶೀಘ್ರದಲ್ಲಿ",
        about: "ಬಗ್ಗೆ",
        careers: "ವೃತ್ತಿಗಳು",
        contact: "ಸಂಪರ್ಕ",
        product: "ಉತ್ಪನ್ನಗಳು",
        aboutTitle: "ದೀರ ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು ಎಐ ಬಗ್ಗೆ",
        aboutText: "ದೀರ ರೋಬೋಟಿಕ್ಸ್ & AI ಬೆಂಗಳೂರು, ಭಾರತದ ತಂತ್ರಜ್ಞಾನ ಕಂಪನಿ ಆಗಿದ್ದು, ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆಯ ಭವಿಷ್ಯವನ್ನು ಮುಂದುವರಿಸುವುದಕ್ಕೆ ಸಮರ್ಪಿತವಾಗಿದೆ. ನಮ್ಮ ಕೆಲಸವು ಕೈಗಾರಿಕಾ ಸ್ವಯಂಚಾಲನೆ, ಕಾರ್ಖಾನೆ ಮತ್ತು ಕೃಷಿ ರೋಬೋಟಿಕ್ಸ್, ಎಂಟರ್‌ಪ್ರೈಸ್‌ಗಳಿಗೆ AI ಚಾಲಿತ ಏಜೆಂಟ್‌ಗಳು, ಮತ್ತು ಬುದ್ಧಿವಂತ ಮನೆ ಸಹಾಯ ಸೇವೆಗಳವರೆಗೆ ವ್ಯಾಪಿಸಿದೆ. ಇದರ ಜೊತೆಗೆ, ನಾವು ವೈಯಕ್ತಿಕ ಸಹಾಯ, ಗ್ರಾಹಕ ಬೆಂಬಲ, ಬುಕ್ಕಿಂಗ್ ನಿರ್ವಹಣೆ ಮತ್ತು ಡిజಿಟಲ್ ಕಾರ್ಯಾಚರಣೆಗಳಿಗೆ ಉನ್ನತ ಮಟ್ಟದ AI ಏಜೆಂಟ್‌ಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತಿದ್ದೇವೆ, ಇದು ವ್ಯವಹಾರಗಳು ಮತ್ತು ವ್ಯಕ್ತಿಗಳಿಗೆ ಹೆಚ್ಚಿನ ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಸಾಧಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.ಮನೆಯಲ್ಲಿ, ನಮ್ಮ ರಿಷಿ AI ವೇದಿಕೆ ಸ್ಮಾರ್ಟ್ ಸ್ವಯಂಚಾಲನೆ ಮತ್ತು ವೈಯಕ್ತಿಕ ಸಹಾಯವನ್ನು ಸಾಧ್ಯವಾಗಿಸುತ್ತಿದ್ದು, ದೈನಂದಿನ ಜೀವನವನ್ನು ಇನ್ನಷ್ಟು ಸುಗಮ, ಸಂಪರ್ಕಿತ ಮತ್ತು ಬುದ್ಧಿವಂತವಾಗಿಸುತ್ತದೆ. ಒಟ್ಟಿಗೆ, ನಮ್ಮ ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು AI ವ್ಯವಸ್ಥೆಗಳು ಬುದ್ಧಿವಂತ ಮತ್ತು ಸಮೃದ್ಧ ಸಮಾಜದ ಆಧಾರದ ರೂಪಿಸುತ್ತಿವೆ.",
        aboutTagline: "ಮನೆಗಳು, ಕೈಗಾರಿಕೆಗಳು ಮತ್ತು ಕೃಷಿ ಕ್ಷೇತ್ರಗಳು ಅಭಿವೃದ್ಧಿ ಹೊಂದುತ್ತಿರುವ ಜಗತ್ತನ್ನು ನಿರ್ಮಿಸುತ್ತಿದ್ದೇವೆ, ಉಳಿದುದನ್ನು ನಮ್ಮ ರೋಬೋಟ್ಗಳು ಮತ್ತು ರಿಷಿ ಹೋಮ್ ಆಟೋಮೇಷನ್ ನಿರ್ವಹಿಸುತ್ತವೆ.",
        careersTitle: "ದೀರದಲ್ಲಿ ವೃತ್ತಿಗಳು",
        careersText: "ನಾವು ಸದಾ ಪ್ರತಿಭಾವಂತ ವ್ಯಕ್ತಿಗಳನ್ನು ನಮ್ಮ ತಂಡಕ್ಕೆ ಸೇರಿಸಿಕೊಳ್ಳಲು ಹುಡುಕುತ್ತಿದ್ದೇವೆ. ಉದ್ಯೋಗಾವಕಾಶಗಳು ಮತ್ತು ನಮ್ಮೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುವ ಅವಕಾಶಗಳಿಗಾಗಿ ನಿರೀಕ್ಷಿಸಿ!",
        
        // Careers page content
        cultureTitle: "ಸ್ಟಾರ್ಟಪ್ ಸಂಸ್ಕೃತಿ",
        cultureDesc: "ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿರುವ ರೋಬೋಟಿಕ್ಸ್ ಸ್ಟಾರ್ಟಪ್‌ನ ಭಾಗವಾಗಿರಿ, ಇಲ್ಲಿ ಪ್ರತಿಯೊಬ್ಬ ತಂಡದ ಸದಸ್ಯರು ಹ್ಯೂಮನಾಯ್ಡ್ ರೋಬೋಟ್ಗಳು ಮತ್ತು ಎಐ ವ್ಯವಸ್ಥೆಗಳ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸುವಲ್ಲಿ ನೇರವಾಗಿ ಪ್ರಭಾವ ಬೀರುತ್ತಾರೆ.",
        learnTitle: "ಕಲಿ & ನಿರ್ಮಿಸಿ",
        learnDesc: "ಮೊದಲ ದಿನದಿಂದಲೇ ಅತ್ಯಾಧುನಿಕ ರೋಬೋಟಿಕ್ಸ್, ಎಐ ಮತ್ತು ಆಟೋಮೇಶನ್ ಪ್ರಾಜೆಕ್ಟ್‌ಗಳಲ್ಲಿ ಕೆಲಸ ಮಾಡಿ. ಕೈಗಾರಿಕೆ, ಕಾರ್ಖಾನೆ, ಕೃಷಿ ಮತ್ತು ಸ್ಮಾರ್ಟ್ ಹೋಮ್‌ಗಳಂತಹ ನೈಜ ಜಗತ್ತಿನ ಸವಾಲುಗಳನ್ನು ಎದುರಿಸುವ ಅನುಭವವನ್ನು ಪಡೆಯಿರಿ.",
        growthTitle: "ವಿಕಾಸಾವಕಾಶಗಳು",
        growthDesc: "ಸ್ಟಾರ್ಟಪ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಕೊಡುಗೆಗಳು ಸ್ಪಷ್ಟವಾಗಿರುತ್ತವೆ. ನೀವು ಉತ್ತಮವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸಿದರೆ, ಶೀಘ್ರದಲ್ಲೇ ನಾಯಕತ್ವದ ಹುದ್ದೆಗಳು ಮತ್ತು ಹೆಚ್ಚಿನ ಜವಾಬ್ದಾರಿ ಪಡೆಯುವಿರಿ.",
        flexibilityTitle: "ಸ್ಥಿತಿಸ್ಥಾಪಕತೆ",
        flexibilityDesc: "ಸ್ಟಾರ್ಟಪ್ ಜೀವನವನ್ನು ನಾವು ಅರ್ಥಮಾಡಿಕೊಂಡಿದ್ದೇವೆ—ಆದ್ದರಿಂದ ಅನುವು ಹೊಂದುವ ಕೆಲಸದ ಗಂಟೆಗಳು ಮತ್ತು ದೂರಸ್ಥ ಕೆಲಸದ ಆಯ್ಕೆಗಳು ನಿಮಗೆ ಲಭ್ಯ. ಇದು ಜೀವನ-ಕೆಲಸ ಸಮತೋಲನವನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಇನ್ನೂ ಗಡಿಗಳನ್ನು ಮುರಿಯುತ್ತಾ.",
        ownershipTitle: "ಮಾಲೀಕತ್ವ ಮನೋಭಾವ",
        ownershipDesc: "ನಾವು ನೌಕರರನ್ನು ಮಾತ್ರ ನೇಮಿಸುವುದಿಲ್ಲ—ತಂಡದೊಳಗೆ ಸ್ಥಾಪಕರನ್ನು ಬೆಳೆಸುತ್ತೇವೆ. ಈಕ್ವಿಟಿ ಆಯ್ಕೆಗಳು ಮತ್ತು ಉತ್ಪನ್ನಗಳ ಜೊತೆಗೆ ಕಂಪನಿಯ ಸಂಸ್ಕೃತಿ ಮತ್ತು ದೃಷ್ಟಿಯನ್ನು ರೂಪಿಸುವ ಅವಕಾಶ ನಿಮಗೆ ಸಿಗುತ್ತದೆ.",
        passionTitle: "ಆಸಕ್ತಿಯುತ ತಂಡ",
        passionDesc: "ನಿರ್ಮಾಣಗಾರರು, ಕನಸುಗಾರರು ಮತ್ತು ಸಮಸ್ಯಾ ಪರಿಹಾರಕರ ಸಣ್ಣ ಆದರೆ ಮಿಷನ್-ಚಾಲಿತ ತಂಡಕ್ಕೆ ಸೇರಿ, ಜಗತ್ತನ್ನು ಬದಲಿಸುವ ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು ಎಐ ಏಜೆಟ್‌ಗಳನ್ನು ನಿರ್ಮಿಸುವ ಉತ್ಸಾಹದಲ್ಲಿ ಕೆಲಸಮಾಡಿ.",
        littleThingsTitle: "ಮುಖ್ಯವಾಗಿರುವ ಸಣ್ಣ ವಿಷಯಗಳು",
        littleThingsDesc: "ಟೀಮ್ ಲಂಚ್‌ಗಳು, ಹ್ಯಾಕಥಾನ್‌ಗಳು, ಡೆಮೋ ಡೇ‌ಗಳು ಮತ್ತು ಸಂಭ್ರಮಾಚರಣೆಗಳು—ನಾವು ಶಕ್ತಿ ತುಂಬಿದ ವಾತಾವರಣವನ್ನು ಕಾಪಾಡುತ್ತೇವೆ ಮತ್ತು ಪ್ರಯಾಣವನ್ನು ಗುರಿಯಷ್ಟು ರೋಚಕವಾಗಿಸುತ್ತೇವೆ.",
        
        // Application section
        applyTitle: "ನಮ್ಮ ತಂಡಕ್ಕೆ ಸೇರಿ",
        howToApplyTitle: "ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು",
        howToApplyDesc: "ನಿಮ್ಮ ಅರ್ಜಿಯನ್ನು ಸಲ್ಲಿಸಲು, ದಯವಿಟ್ಟು ನಮಗೆ ಇಮೇಲ್ ಮಾಡಿ:",
        requirementsTitle: "ಅರ್ಜಿ ಅಗತ್ಯತೆಗಳು",
        req1: "📄 Resume/CV - ನಿಮ್ಮ ಕೌಶಲ್ಯಗಳು ಮತ್ತು ಅನುಭವಗಳೊಂದಿಗೆ",
        req2: "🤔 Why Deera? - ದೀರದೊಂದಿಗೆ ಸೇರಲು ನೀವು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಿದ್ದೀರಿ ಎಂಬುದರ ಬಗ್ಗೆ",
        req3: "🔮 Future Vision - ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು ಎಐ ಕ್ಷೇತ್ರದಲ್ಲಿ ನಿಮ್ಮ ಭವಿಷ್ಯದ ದೃಷ್ಟಿ",
        
        // Contact section
        contactTitle: "📞 ಸಂಪರ್ಕಿಸಿ – ದೀರ",
        investorTitle: "ಹೂಡಿಕೆದಾರರಿಗಾಗಿ",
        investorDesc: "ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು AI ಯ ಭವಿಷ್ಯವನ್ನು ರೂಪಿಸಲು ನಮ್ಮ ಜೊತೆ ಸೇರಿ—ನಿಮ್ಮ ಹೂಡಿಕೆ ಮಾನವ ಪ್ರಗತಿಯ ಮುಂದಿನ ಹೆಜ್ಜೆಗೆ ಇಂಧನವಾಗುತ್ತದೆ.",
        productTitle: "ಉತ್ಪನ್ನ ಮತ್ತು ಸೇವಾ ವಿಚಾರಣೆಗಳಿಗಾಗಿ",
        productDesc: "ನಮ್ಮ ರೋಬೋಟ್‌ಗಳು ಮತ್ತು AI ಏಜೆಟ್‌ಗಳು ನಿಮ್ಮ ಕೈಗಾರಿಕೆ, ಕೃಷಿ ಅಥವಾ ಮನೆಗೆ ಹೇಗೆ ಬದಲಾವಣೆ ತರುತ್ತವೆ ಎಂಬುದನ್ನು ಕಂಡುಹಿಡಿಯಿರಿ—ನಮ್ಮ ತಂಡ ಸಹಾಯ ಮಾಡಲು ಇಲ್ಲಿದೆ.",
        contactText: "ಪ್ರಶ್ನೆಗಳಿಗಾಗಿ ದಯವಿಟ್ಟು ನಮಗೆ <a href=\"mailto:ceo@deera.live\">ceo@deera.live</a> ಗೆ ಇಮೇಲ್ ಮಾಡಿ.",

        // ✅ Products page
        productsTitle: "ನಮ್ಮ ಉತ್ಪನ್ನಗಳು",
        products: [
            { name: "ಟೆರ್ರಾನೋವಾ", desc: "ಫ್ರೇಮಿಂಗ್ ರೋಬೋಟ್" },
            { name: "ಕ್ಸಿಂಟ್ರಾ", desc: "ಕೈಗಾರಿಕಾ AGV ಮತ್ತು ಅಟ್ಯಾಚ್ಮೆಂಟ್" },
            { name: "ದೀರ ಸೆಂಟಿನೆಲ್", desc: "ಹ್ಯೂಮನಾಯ್ಡ್" },
            { name: "ರಿಷಿ", desc: "ಸ್ಮಾರ್ಟ್ ಹೋಮ್" },
            { name: "ದೀರ ಎಐ", desc: "ಎಐ ಏಜೆಟ್" }
        ],
        
        // AI page content
        aiTitle: "ದೀರ ಎಐ ಪರಿಹಾರಗಳು",
        aiSubtitle: "ಭವಿಷ್ಯಕ್ಕಾಗಿ ಅತ್ಯಾಧುನಿಕ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ",
        ttsTitle: "ಟೆಕ್ಸ್ಟ್-ಟು-ಸ್ಪೀಚ್ (TTS)",
        ttsDesc: "ನಮ್ಮ ಅತ್ಯಾಧುನಿಕ TTS ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ಹಲವಾರು ಭಾಷೆಗಳಲ್ಲಿ ಪಠ್ಯವನ್ನು ಸ್ವಾಭಾವಿಕ ಧ್ವನಿಯಲ್ಲಿ ಮಾತನಾಡುವಿಕೆಗೆ ಪರಿವರ್ತಿಸಿ.",
        ttsFeatures: [
            "ಸ್ವಾಭಾವಿಕ ಧ್ವನಿಗಳು",
            "ಹಲವಾರು ಭಾಷೆಗಳ ಬೆಂಬಲ",
            "ವ್ಯಕ್ತಿಗತ ಭಾಷಣ ನಿಯತಾಂಕಗಳು"
        ],
        sttTitle: "ಸ್ಪೀಚ್-ಟು-ಟೆಕ್ಸ್ಟ್ (STT)",
        sttDesc: "ನೈಜ-ಸಮಯದ ಸಂಸ್ಕರಣೆ ಮತ್ತು ಹೆಚ್ಚಿನ ನಿಖರತೆಯೊಂದಿಗೆ ಮಾತನಾಡಿದ ಪದಗಳನ್ನು ಪಠ್ಯಕ್ಕೆ ನಿಖರವಾಗಿ ಪರಿವರ್ತಿಸಿ.",
        sttFeatures: [
            "ಹೆಚ್ಚಿನ ನಿಖರತೆ: 98%+",
            "ನೈಜ-ಸಮಯದ ಸಂಸ್ಕರಣೆ",
            "ಹಲವಾರು ಭಾಷೆಗಳ ಬೆಂಬಲ"
        ],
        chatbotTitle: "ಎಐ ಚಾಟ್‌ಬಾಟ್",
        chatbotDesc: "ಸಂದರ್ಭವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಮತ್ತು ಸಹಾಯಕ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ನೀಡುವ ಬುದ್ಧಿವಂತ ಸಂವಾದಾತ್ಮಕ ಎಐ.",
        chatbotFeatures: [
            "ಅತ್ಯಾಧುನಿಕ ಉದ್ದೇಶ ಗುರುತಿಸುವಿಕೆ",
            "ಸಂದರ್ಭ-ಅರಿವಿನ ಸಂವಾದ",
            "ಬಹು-ಸುತ್ತಿನ ಸಂಭಾಷಣೆ"
        ],
        modelsTitle: "ಒಳಗೊಂಡಿರುವ ಎಐ ಮಾದರಿಗಳು",
        llmTitle: "ದೊಡ್ಡ ಭಾಷಾ ಮಾದರಿ (LLM)",
        llmDesc: "ಅತ್ಯಾಧುನಿಕ ನೈಸರ್ಗಿಕ ಭಾಷಾ ತಿಳುವಳಿಕೆ ಮತ್ತು ರಚನೆಗಾಗಿ ಶಕ್ತಿಶಾಲಿ ಎಐ ಮಾದರಿ.",
        llmFeatures: [
            "ಅತ್ಯಾಧುನಿಕ ಭಾಷಾ ತಿಳುವಳಿಕೆ",
            "ಸೃಜನಶೀಲ ಪಠ್ಯ ರಚನೆ",
            "ಸಂದರ್ಭ-ಅರಿವಿನ ತಾರ್ಕಿಕತೆ"
        ],
        vlmTitle: "ದೃಷ್ಟಿ ಭಾಷಾ ಮಾದರಿ (VLM)",
        vlmDesc: "ಚಿತ್ರಗಳು ಮತ್ತು ವೀಡಿಯೊಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ರಚಿಸಲು ದೃಷ್ಟಿ ಮತ್ತು ಭಾಷೆಯನ್ನು ಸಂಯೋಜಿಸಿ.",
        vlmFeatures: [
            "ಚಿತ್ರ ಮತ್ತು ವೀಡಿಯೊ ತಿಳುವಳಿಕೆ",
            "ಸೃಜನಶೀಲ ಚಿತ್ರ ರಚನೆ",
            "ದೃಷ್ಟಿ ಕಥೆ ಹೇಳುವಿಕೆ"
        ],
        vamTitle: "ದೃಷ್ಟಿ ಕ್ರಿಯಾ ಮಾದರಿ (VAM)",
        vamDesc: "ಚಿತ್ರಗಳು ಮತ್ತು ವೀಡಿಯೊಗಳಿಂದ ದೃಷ್ಟಿ ಕ್ರಿಯೆಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತು ಕಾರ್ಯಗತಗೊಳಿಸಿ.",
        vamFeatures: [
            "ಕ್ರಿಯೆ ಗುರುತಿಸುವಿಕೆ",
            "ವಸ್ತು ನಿರ್ವಹಣೆ",
            "ದೃಶ್ಯ ತಿಳುವಳಿಕೆ"
        ],
        inHouseBadge: "ಮನೆಯಲ್ಲಿ ನಿರ್ಮಿಸಲಾಗಿದೆ",
        comingSoonText: "ಇನ್ನಷ್ಟು ಎಐ ಪರಿಹಾರಗಳು ಬರಲಿವೆ...",
        demoTitle: "ಸಂವಾದಾತ್ಮಕ ಎಐ ಡೆಮೊ",
        demoDesc: "ನಮ್ಮ ಎಐ ಜೊತೆ ಚಾಟ್ ಮಾಡಿ ಮತ್ತು ಮುಂದುವರಿಕೆಗಾಗಿ ನಿಮ್ಮ ಇಮೇಲ್ ನೀಡಿ"
    }
};

let currentLang = localStorage.getItem('deeraLang') || 'kn';


function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('deeraLang', lang);

    if (document.getElementById('logo')) document.getElementById('logo').textContent = languages[lang].logo;
    if (document.getElementById('tagline')) document.getElementById('tagline').textContent = languages[lang].tagline;
    if (document.getElementById('coming-soon')) document.getElementById('coming-soon').textContent = languages[lang].comingSoon;

    // Update nav buttons
    const aboutBtn = document.querySelector('.about-btn');
    if (aboutBtn) {
        const aboutSpan = aboutBtn.querySelector('span');
        if (aboutSpan) aboutSpan.textContent = languages[lang].about;
    }
    const productBtn = document.querySelector('.product-btn');
    if (productBtn) {
        const productSpan = productBtn.querySelector('span');
        if (productSpan) productSpan.textContent = languages[lang].product;
    }
    const careersBtn = document.querySelector('.careers-btn');
    if (careersBtn) {
        const careersSpan = careersBtn.querySelector('span');
        if (careersSpan) careersSpan.textContent = languages[lang].careers;
    }
    const contactBtn = document.querySelector('.contact-btn');
    if (contactBtn) {
        const contactSpan = contactBtn.querySelector('span');
        if (contactSpan) contactSpan.textContent = languages[lang].contact;
    }
     const homeBtn = document.querySelector('.home-btn');
    if (homeBtn) {
        const homeSpan = homeBtn.querySelector('span');
        if (homeSpan) homeSpan.textContent = lang === 'kn' ? 'ಮುಖಪುಟ' : 'Home';
    }

    // About page 
    if (window.location.pathname.includes('about.html')) {
        if (document.querySelector('#about-title')) document.querySelector('#about-title').textContent = languages[lang].aboutTitle;
        if (document.querySelector('#about-text')) document.querySelector('#about-text').textContent = languages[lang].aboutText;
        if (document.querySelector('#about-tagline')) document.querySelector('#about-tagline').textContent = languages[lang].aboutTagline;
    }
    // // ✅ Products page
    // else if (window.location.pathname.includes('products.html')) {
    //     if (document.querySelector('.content h1')) document.querySelector('.content h1').textContent = languages[lang].productsTitle;
        
    //     const productItems = document.querySelectorAll('.product-item');
    //     const productData = languages[lang].products;
    //     productItems.forEach((item, i) => {
    //         if (item.querySelector('h2')) item.querySelector('h2').textContent = productData[i].name;
    //         if (item.querySelector('p')) item.querySelector('p').textContent = productData[i].desc;
    //     });
    // }
    // === PRODUCTS PAGE ===
    else if (window.location.pathname.includes("product.html")) {
        if (document.querySelector('#products-title')) {
            document.querySelector('#products-title').textContent = languages[lang].productsTitle;
        }

        // Update product names and descriptions
        const productData = languages[lang].products;
        if (productData && productData.length >= 2) {
            if (document.querySelector('#product-1-name')) document.querySelector('#product-1-name').textContent = productData[0].name;
            if (document.querySelector('#product-1-desc')) document.querySelector('#product-1-desc').textContent = productData[0].desc;
            if (document.querySelector('#product-2-name')) document.querySelector('#product-2-name').textContent = productData[1].name;
            if (document.querySelector('#product-2-desc')) document.querySelector('#product-2-desc').textContent = productData[1].desc;
        }
        
        // Update additional products if they exist in the language data
        if (productData && productData.length >= 4) {
            if (document.querySelector('#product-3-name')) document.querySelector('#product-3-name').textContent = productData[2].name;
            if (document.querySelector('#product-3-desc')) document.querySelector('#product-3-desc').textContent = productData[2].desc;
            if (document.querySelector('#product-4-name')) document.querySelector('#product-4-name').textContent = productData[3].name;
            if (document.querySelector('#product-4-desc')) document.querySelector('#product-4-desc').textContent = productData[3].desc;
        }
        
        // Update 5th product if it exists
        if (productData && productData.length >= 5) {
            if (document.querySelector('#product-5-name')) document.querySelector('#product-5-name').textContent = productData[4].name;
            if (document.querySelector('#product-5-desc')) document.querySelector('#product-5-desc').textContent = productData[4].desc;
        }
    }
    // Careers page
    else if (window.location.pathname.includes('careers.html')) {
        if (document.querySelector('#careers-title')) document.querySelector('#careers-title').textContent = languages[lang].careersTitle;
        
        // Update career cards content
        if (document.querySelector('#culture-title')) document.querySelector('#culture-title').textContent = languages[lang].cultureTitle;
        if (document.querySelector('#culture-desc')) document.querySelector('#culture-desc').textContent = languages[lang].cultureDesc;
        if (document.querySelector('#learn-title')) document.querySelector('#learn-title').textContent = languages[lang].learnTitle;
        if (document.querySelector('#learn-desc')) document.querySelector('#learn-desc').textContent = languages[lang].learnDesc;
        if (document.querySelector('#growth-title')) document.querySelector('#growth-title').textContent = languages[lang].growthTitle;
        if (document.querySelector('#growth-desc')) document.querySelector('#growth-desc').textContent = languages[lang].growthDesc;
        if (document.querySelector('#flexibility-title')) document.querySelector('#flexibility-title').textContent = languages[lang].flexibilityTitle;
        if (document.querySelector('#flexibility-desc')) document.querySelector('#flexibility-desc').textContent = languages[lang].flexibilityDesc;
        if (document.querySelector('#ownership-title')) document.querySelector('#ownership-title').textContent = languages[lang].ownershipTitle;
        if (document.querySelector('#ownership-desc')) document.querySelector('#ownership-desc').textContent = languages[lang].ownershipDesc;
        if (document.querySelector('#passion-title')) document.querySelector('#passion-title').textContent = languages[lang].passionTitle;
        if (document.querySelector('#passion-desc')) document.querySelector('#passion-desc').textContent = languages[lang].passionDesc;
        if (document.querySelector('#little-things-title')) document.querySelector('#little-things-title').textContent = languages[lang].littleThingsTitle;
        if (document.querySelector('#little-things-desc')) document.querySelector('#little-things-desc').textContent = languages[lang].littleThingsDesc;
        
        // Update application section content
        if (document.querySelector('#apply-title')) document.querySelector('#apply-title').textContent = languages[lang].applyTitle;
        if (document.querySelector('#how-to-apply-title')) document.querySelector('#how-to-apply-title').textContent = languages[lang].howToApplyTitle;
        if (document.querySelector('#how-to-apply-desc')) document.querySelector('#how-to-apply-desc').textContent = languages[lang].howToApplyDesc;
        if (document.querySelector('#requirements-title')) document.querySelector('#requirements-title').textContent = languages[lang].requirementsTitle;
        if (document.querySelector('#req-1')) document.querySelector('#req-1').textContent = languages[lang].req1;
        if (document.querySelector('#req-2')) document.querySelector('#req-2').textContent = languages[lang].req2;
        if (document.querySelector('#req-3')) document.querySelector('#req-3').textContent = languages[lang].req3;
        





    }
    // Contact page
    else if (window.location.pathname.includes('contact.html')) {
        if (document.querySelector('#contact-title')) document.querySelector('#contact-title').textContent = languages[lang].contactTitle;
        if (document.querySelector('#investor-title')) document.querySelector('#investor-title').textContent = languages[lang].investorTitle;
        if (document.querySelector('#investor-desc')) document.querySelector('#investor-desc').textContent = languages[lang].investorDesc;
        if (document.querySelector('#product-title')) document.querySelector('#product-title').textContent = languages[lang].productTitle;
        if (document.querySelector('#product-desc')) document.querySelector('#product-desc').textContent = languages[lang].productDesc;
    }
    // AI page
    else if (window.location.pathname.includes('ai.html')) {
        if (document.querySelector('#ai-title')) document.querySelector('#ai-title').textContent = languages[lang].aiTitle;
        if (document.querySelector('#ai-subtitle')) document.querySelector('#ai-subtitle').textContent = languages[lang].aiSubtitle;
        
        // TTS
        if (document.querySelector('#tts-title')) document.querySelector('#tts-title').textContent = languages[lang].ttsTitle;
        if (document.querySelector('#tts-desc')) document.querySelector('#tts-desc').textContent = languages[lang].ttsDesc;
        
        // STT
        if (document.querySelector('#stt-title')) document.querySelector('#stt-title').textContent = languages[lang].sttTitle;
        if (document.querySelector('#stt-desc')) document.querySelector('#stt-desc').textContent = languages[lang].sttDesc;
        
        // Chatbot
        if (document.querySelector('#chatbot-title')) document.querySelector('#chatbot-title').textContent = languages[lang].chatbotTitle;
        if (document.querySelector('#chatbot-desc')) document.querySelector('#chatbot-desc').textContent = languages[lang].chatbotDesc;
        
        // LLM
        if (document.querySelector('#llm-title')) document.querySelector('#llm-title').textContent = languages[lang].llmTitle;
        if (document.querySelector('#llm-desc')) document.querySelector('#llm-desc').textContent = languages[lang].llmDesc;
        
        // VLM
        if (document.querySelector('#vlm-title')) document.querySelector('#vlm-title').textContent = languages[lang].vlmTitle;
        if (document.querySelector('#vlm-desc')) document.querySelector('#vlm-desc').textContent = languages[lang].vlmDesc;
        
        // VAM
        if (document.querySelector('#vam-title')) document.querySelector('#vam-title').textContent = languages[lang].vamTitle;
        if (document.querySelector('#vam-desc')) document.querySelector('#vam-desc').textContent = languages[lang].vamDesc;
        
        // Update features for all AI products
        if (languages[lang].sttFeatures) {
            for (let i = 1; i <= 3; i++) {
                const feature = document.querySelector(`#stt-feature-${i}`);
                if (feature && languages[lang].sttFeatures[i-1]) {
                    feature.textContent = languages[lang].sttFeatures[i-1];
                }
            }
        }
        
        if (languages[lang].ttsFeatures) {
            for (let i = 1; i <= 3; i++) {
                const feature = document.querySelector(`#tts-feature-${i}`);
                if (feature && languages[lang].ttsFeatures[i-1]) {
                    feature.textContent = languages[lang].ttsFeatures[i-1];
                }
            }
        }
        
        if (languages[lang].chatbotFeatures) {
            for (let i = 1; i <= 3; i++) {
                const feature = document.querySelector(`#chatbot-feature-${i}`);
                if (feature && languages[lang].chatbotFeatures[i-1]) {
                    feature.textContent = languages[lang].chatbotFeatures[i-1];
                }
            }
        }
        
        if (languages[lang].llmFeatures) {
            for (let i = 1; i <= 3; i++) {
                const feature = document.querySelector(`#llm-feature-${i}`);
                if (feature && languages[lang].llmFeatures[i-1]) {
                    feature.textContent = languages[lang].llmFeatures[i-1];
                }
            }
        }
        
        if (languages[lang].vlmFeatures) {
            for (let i = 1; i <= 3; i++) {
                const feature = document.querySelector(`#vlm-feature-${i}`);
                if (feature && languages[lang].vlmFeatures[i-1]) {
                    feature.textContent = languages[lang].vlmFeatures[i-1];
                }
            }
        }
        
        if (languages[lang].vamFeatures) {
            for (let i = 1; i <= 3; i++) {
                const feature = document.querySelector(`#vam-feature-${i}`);
                if (feature && languages[lang].vamFeatures[i-1]) {
                    feature.textContent = languages[lang].vamFeatures[i-1];
                }
            }
        }
        
        // Update in-house badges
        const inHouseBadges = document.querySelectorAll('.in-house-badge');
        inHouseBadges.forEach(badge => {
            badge.textContent = languages[lang].inHouseBadge;
        });
        
        // Update coming soon text
        if (document.querySelector('#coming-soon')) document.querySelector('#coming-soon').textContent = languages[lang].comingSoonText;
    }

    // Active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.textContent.trim() === (lang === 'kn' ? 'ಕನ್ನಡ' : 'EN')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // HTML lang attribute
    document.documentElement.lang = lang;
}

// Initialize
window.addEventListener('load', () => {
    initSpaceBackground();
    switchLanguage(currentLang);
    // Setup mobile menu toggle on pages that have a header-bar
    const headerBar = document.querySelector('.header-bar');
    if (headerBar && !document.querySelector('.mobile-menu-toggle')) {
        const toggle = document.createElement('button');
        toggle.className = 'mobile-menu-toggle';
        toggle.setAttribute('aria-label', 'Open menu');
        toggle.innerHTML = '<span>☰</span> Menu';
        headerBar.prepend(toggle);
        const nav = headerBar.querySelector('.main-nav');
        const closeMenu = () => { if (nav) nav.classList.remove('open'); };
        const openMenu = () => { if (nav) nav.classList.add('open'); };
        toggle.addEventListener('click', () => {
            if (!nav) return;
            nav.classList.toggle('open');
        });
        // Close on navigation click
        if (nav) {
            nav.querySelectorAll('button').forEach(btn => {
                btn.addEventListener('click', () => closeMenu());
            });
        }
        // Close when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav) return;
            const isToggle = toggle.contains(e.target);
            const isNav = nav.contains(e.target);
            const isMobile = window.matchMedia('(max-width: 768px)').matches;
            if (isMobile && !isToggle && !isNav) {
                closeMenu();
            }
        });
        // Close on resize to desktop
        window.addEventListener('resize', () => {
            if (window.matchMedia('(min-width: 769px)').matches) {
                closeMenu();
            }
        });
    }
});

// Initialize Space Background
function initSpaceBackground() {
    console.log('Initializing space background...');
    
    // Create space background
    createSpaceBackground();
    console.log('Space background created');
}

// Create space/milky way background
function createSpaceBackground() {
    const starsContainer = document.getElementById('stars-container');
    const stars = [];
    const numStars = 200;

    // Generate stars with base positions and depth
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.position = 'absolute';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.backgroundColor = '#ffffff';
        star.style.borderRadius = '50%';
        // Store base position and depth
        const baseLeft = Math.random() * 100;
        const baseTop = Math.random() * 100;
        const depth = Math.random(); // 0 (far) to 1 (near)
        star.dataset.baseLeft = baseLeft;
        star.dataset.baseTop = baseTop;
        star.dataset.depth = depth;
        star.style.left = baseLeft + '%';
        star.style.top = baseTop + '%';
        star.style.opacity = Math.random() * 0.8 + 0.2;
        star.style.animationDelay = Math.random() * 10 + 's';
        star.style.animationDuration = (Math.random() * 20 + 10) + 's';
        star.style.animationName = 'twinkle';
        star.style.animationIterationCount = 'infinite';
        star.style.animationTimingFunction = 'ease-in-out';
        starsContainer.appendChild(star);
        stars.push(star);
    }

    // Add CSS animation for twinkling
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
        }
        .star {
            position: absolute;
            background: radial-gradient(circle, #fff, #00d4ff);
            box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
        }
    `;
    document.head.appendChild(style);

    // Parallax effect on mouse move with requestAnimationFrame
    let mouseX = 0;
    let mouseY = 0;
    let isAnimating = false;
    
    function updateStars() {
        if (!isAnimating) return;
        
        stars.forEach(star => {
            const baseLeft = parseFloat(star.dataset.baseLeft);
            const baseTop = parseFloat(star.dataset.baseTop);
            const depth = parseFloat(star.dataset.depth);
            // Nearer stars move more, farther stars move less
            const parallax = (1 - depth) * 20; // Adjust 20 for effect strength
            star.style.left = (baseLeft + mouseX * parallax) + '%';
            star.style.top = (baseTop + mouseY * parallax) + '%';
        });
        
        requestAnimationFrame(updateStars);
    }
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX / window.innerWidth - 0.5; // -0.5 to 0.5
        mouseY = e.clientY / window.innerHeight - 0.5;
        
        if (!isAnimating) {
            isAnimating = true;
            requestAnimationFrame(updateStars);
        }
    });
    
    // Support pointer devices (covers mouse, touch, pen)
    document.addEventListener('pointermove', (e) => {
        mouseX = e.clientX / window.innerWidth - 0.5;
        mouseY = e.clientY / window.innerHeight - 0.5;
        if (!isAnimating) {
            isAnimating = true;
            requestAnimationFrame(updateStars);
        }
    }, { passive: true });
    
    // Touch support (for browsers not fully supporting pointer events)
    const handleTouchMove = (e) => {
        if (e.touches && e.touches.length > 0) {
            const t = e.touches[0];
            mouseX = t.clientX / window.innerWidth - 0.5;
            mouseY = t.clientY / window.innerHeight - 0.5;
            if (!isAnimating) {
                isAnimating = true;
                requestAnimationFrame(updateStars);
            }
        }
    };
    document.addEventListener('touchstart', handleTouchMove, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    // Device orientation fallback (tilt to parallax)
    window.addEventListener('deviceorientation', (e) => {
        // gamma: left-right [-90, 90], beta: front-back [-180, 180]
        const gamma = (typeof e.gamma === 'number') ? e.gamma : 0;
        const beta = (typeof e.beta === 'number') ? e.beta : 0;
        mouseX = gamma / 180;   // approx -0.5..0.5
        mouseY = beta / 360;    // approx -0.5..0.5
        if (!isAnimating) {
            isAnimating = true;
            requestAnimationFrame(updateStars);
        }
    });
    
    // Stop animation when mouse leaves window
    document.addEventListener('mouseleave', () => {
        isAnimating = false;
    });


     // Make stars responsive to mouse movement
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth * 100;
        const y = e.clientY / window.innerHeight * 100;
        document.getElementById('stars-container').style.background = 
            `radial-gradient(ellipse at ${x}% ${y}%, rgba(74, 20, 140, 0.2) 0%, rgba(0, 0, 0) 70%)`;
    });
    // Mirror gradient changes for touch/pointer
    const updateGradient = (clientX, clientY) => {
        const x = clientX / window.innerWidth * 100;
        const y = clientY / window.innerHeight * 100;
        document.getElementById('stars-container').style.background = 
            `radial-gradient(ellipse at ${x}% ${y}%, rgba(74, 20, 140, 0.2) 0%, rgba(0, 0, 0) 70%)`;
    };
    document.addEventListener('pointermove', (e) => updateGradient(e.clientX, e.clientY), { passive: true });
    document.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches.length > 0) {
            updateGradient(e.touches[0].clientX, e.touches[0].clientY);
        }
    }, { passive: true });
}

// --- Tesseract (4D Hypercube) Animation ---
function drawTesseract() {
    const canvas = document.getElementById('tesseract-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width = window.innerWidth;
    const h = canvas.height = window.innerHeight;
    ctx.clearRect(0, 0, w, h);

    // 16 vertices of a tesseract in 4D
    const size = Math.min(w, h) * 0.22;
    const vertices = [];
    for (let i = 0; i < 16; i++) {
        let v = [
            (i & 1) ? 1 : -1,
            (i & 2) ? 1 : -1,
            (i & 4) ? 1 : -1,
            (i & 8) ? 1 : -1
        ];
        vertices.push(v);
    }

    // 32 edges of a tesseract
    const edges = [];
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 4; j++) {
            let k = i ^ (1 << j);
            if (i < k) edges.push([i, k]);
        }
    }

    // 4D rotation
    const t = Date.now() * 0.001;
    const rot = [
        [Math.cos(t * 0.7), Math.sin(t * 0.7)], // xy
        [Math.cos(t * 0.5), Math.sin(t * 0.5)], // zw
        [Math.cos(t * 0.9), Math.sin(t * 0.9)], // xz
        [Math.cos(t * 0.6), Math.sin(t * 0.6)]  // yw
    ];
    function rotate4D([x, y, z, w]) {
        // xy
        [x, y] = [x * rot[0][0] - y * rot[0][1], x * rot[0][1] + y * rot[0][0]];
        // zw
        [z, w] = [z * rot[1][0] - w * rot[1][1], z * rot[1][1] + w * rot[1][0]];
        // xz
        [x, z] = [x * rot[2][0] - z * rot[2][1], x * rot[2][1] + z * rot[2][0]];
        // yw
        [y, w] = [y * rot[3][0] - w * rot[3][1], y * rot[3][1] + w * rot[3][0]];
        return [x, y, z, w];
    }
    // Project 4D -> 3D -> 2D
    function project([x, y, z, w]) {
        // 4D to 3D
        const d4 = 2.5;
        const k4 = d4 / (d4 - w);
        x *= k4; y *= k4; z *= k4;
        // 3D to 2D
        const d3 = 4.5;
        const k3 = d3 / (d3 - z);
        return [w, x * k3 * size + w/10, y * k3 * size + w/10];
    }
    // Get 2D points
    const points = vertices.map(v => {
        const r = rotate4D(v);
        const [, px, py] = project(r);
        return [w/2 + px, h/2 + py];
    });
    // Draw edges
    ctx.save();
    ctx.globalAlpha = 0.45;
    let grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#00d4ff');
    grad.addColorStop(0.5, '#4ecdc4');
    grad.addColorStop(1, '#ff6b6b');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 2.5;
    edges.forEach(([a, b]) => {
        ctx.beginPath();
        ctx.moveTo(...points[a]);
        ctx.lineTo(...points[b]);
        ctx.shadowColor = '#00d4ff';
        ctx.shadowBlur = 32;
        ctx.stroke();
    });
    // Draw vertices
    points.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.fillStyle = '#00d4ff';
        ctx.shadowColor = '#00d4ff';
        ctx.shadowBlur = 48;
        ctx.globalAlpha = 0.35;
        ctx.fill();
    });
    ctx.restore();
    requestAnimationFrame(drawTesseract);
}
window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('tesseract-canvas')) drawTesseract();
});

// Initialize everything
// Set default language to Kannada on load
window.addEventListener('load', () => {
    console.log('Window load event triggered');
    initSpaceBackground();
    switchLanguage(currentLang);
});

// Ensure page is visible and content refreshed when returning via mobile back/forward cache
window.addEventListener('pageshow', (event) => {
    if (document && document.body) {
        document.body.classList.remove('fade-out');
        document.body.classList.add('fade-in');
    }
    // Re-apply language to resync any dynamic text
    try {
        const lang = localStorage.getItem('deeraLang') || currentLang || 'en';
        switchLanguage(lang);
    } catch (e) {
        // no-op
    }
});
