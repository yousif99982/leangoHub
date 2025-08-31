
export const translations = {
  en: {
    sidebar: {
      dashboard: "Dashboard",
      myWords: "My Words",
      addWord: "Add Word",
      myStudents: "My Students",
      profile: "Profile",
      learn: "Learn",
      learningWords: 'Learning Words',
      masteredWords: 'Mastered Words',
      champion: "Champion",
      chat: 'Chat',
      classmates: 'Classmates',
      grammar: 'Grammar',
      requests: 'Requests',
      admins: 'Admins',
      about: 'About',
      spelling: 'Spelling',
    },
    spellingPractice: {
        title: "Spelling Practice",
        description: "Type the word that matches the definition and image below.",
        todayCounter: "{0} / {1} today",
        noWordsForFilters: "No words match the selected filters.",
        limitReached: "Great job! You've reached your spelling limit for today.",
        comeBack: "Come back tomorrow for more practice.",
        check: "Check",
        newWord: "New Word",
        clearFilters: "Clear",
        allUnits: "All Units",
        allLessons: "All Lessons",
        filterByUnit: "Filter by Unit",
        filterByLesson: "Filter by Lesson",
        loading: "Loading new word...",
        noWordsYet: "You have no reviewed words to practice spelling for yet.",
        noWordsYetHint: "Complete a review session to get started!",
        placeholder: "Type the word...",
    },
    chatPage: {
        supervisorTitle: "Student Chats",
        studentTitle: "Chat",
        supervisorDescription: "Read and reply to messages from your students.",
        studentDescription: "Conversations with your supervisor and classmates.",
        conversations: "Conversations",
        noMessages: "No messages yet",
        noConversations: "No conversations started yet.",
        selectConversation: "Select a conversation to start chatting",
        typeMessage: "Type a message...",
        send: "Send",
        loading: "Loading...",
        contactType: {
            supervisor: "Supervisor",
            peer: "Peer",
        },
        edited: "(edited)",
        messageActions: {
            edit: "Edit",
            delete: "Delete",
            block: "Block User",
        },
        deleteDialog: {
            title: "Delete Message",
            descriptionForMe: "This will delete the message only for you. Other people in the conversation will still be able to see it.",
            descriptionForEveryone: "This will permanently delete the message for everyone in this conversation.",
            deleteForMe: "Delete for me",
            deleteForEveryone: "Delete for everyone",
            cancel: "Cancel",
        },
        blockDialog: {
            title: "Block User?",
            description: "Blocking {0} will prevent them from sending you messages, and you won't be able to message them. Are you sure?",
            blockButton: "Block",
            cancel: "Cancel",
        },
        unblockDialog: {
            title: "Unblock User?",
            description: "Unblocking {0} will allow you to send and receive messages again.",
            unblockButton: "Unblock",
        },
        blockedContact: "This user is blocked.",
        blockedMessage: "You cannot send messages to a blocked user.",
    },
    about: {
        title: "About LinguaLeap",
        description: "The people and technology behind your learning experience.",
        greeting: "Hello!",
        teacherIntro: "I am Yousif, an English teacher passionate about leveraging technology to make language learning more accessible and effective. This application is a product of that passion, designed to be a tool I can use with my own students.",
        aiIntro: "To bring this vision to life, I collaborated with Gemini, a large-scale AI from Google. Gemini handled the application development, from coding the interface to integrating the smart features that power the quizzes and learning systems.",
        contactHint: "Remember you can always message us if you have any suggestions or reporting a bug from the sign-up page.",
        signature: "With regards,",
        version: "App Version: {0}"
    },
    profile: {
        title: "My Profile",
        personalInfo: {
            title: "Personal Information",
            description: "Update your personal details here.",
            fullName: "Full Name",
            email: "Email",
            save: "Save Changes",
            grade: "Grade",
            section: "Section",
            selectGrade: "Select Grade",
            selectSection: "Select Section",
            supervisor: "Supervisor",
        },
        picture: {
            title: "Profile Picture",
            upload: "Upload Picture",
            enlarge: "Enlarge",
            shrink: "Shrink",
        },
        landingPage: {
            title: "Landing Page",
            description: "Update the main hero image.",
            uploadButton: "Upload Hero Image",
        },
        preferences: {
            title: "Preferences",
            description: "Customize your learning experience.",
            language: "Language",
            selectLanguage: "Select Language",
            timezone: "Timezone",
            selectTimezone: "Select timezone",
            save: "Save Preferences",
            currentTime: "Current time: {0}",
            darkMode: "Dark Mode",
        },
        account: {
            title: "Account Management",
            description: "Manage your account settings and data.",
            resetPassword: {
                title: "Reset Password",
                description: "You will be sent an email with instructions to reset your password.",
                button: "Reset Password",
            },
            deleteAccount: {
                title: "Delete Account",
                description: "Permanently delete your account and all associated data. This action cannot be undone.",
                button: "Delete My Account",
            },
        },
    },
    login: {
        welcome: "Welcome Back!",
        description: "Enter your email below to login to your account.",
        emailLabel: "Email",
        passwordLabel: "Password",
        forgotPassword: "Forgot your password?",
        loginButton: "Login",
        loginWithGoogle: "Login with Google",
        noAccount: "Don't have an account?",
        signUp: "Sign up",
        rememberMe: "Remember me",
    },
    register: {
        title: "Join LinguaLeap",
        description: "Create your account to start your learning journey.",
        studentTab: "Student",
        supervisorTab: "Supervisor",
        fullNameLabel: "Full Name",
        fullNamePlaceholder: "Max Robinson",
        emailLabel: "Email",
        emailPlaceholder: "m@example.com",
        passwordLabel: "Password",
        supervisorIdLabel: "Supervisor ID",
        supervisorIdPlaceholder: "Enter your supervisor's ID",
        createAccountButton: "Create an account",
        createSupervisorAccountButton: "Create supervisor account",
        orContinueWith: "Or continue with",
        registerWithGoogle: "Register with Google",
        haveAccount: "Already have an account?",
        login: "Login",
    },
    landing: {
        title: "Leap into Language with AI",
        description: "LinguaLeap combines proven learning techniques with cutting-edge AI to create a personalized, effective vocabulary-building experience.",
        getStarted: "Start Learning Now",
        login: "Login",
        features: {
            title: "Why LinguaLeap Works",
            description: "We've engineered the perfect blend of technology and pedagogy to accelerate your language acquisition.",
            aiQuizzes: {
                title: "AI-Powered Quizzes",
                description: "Challenge yourself with AI-generated incorrect options, making learning more effective and engaging."
            },
            supervisorTools: {
                title: "Supervisor Tools",
                description: "Supervisors can add custom vocabulary and track student progress, tailoring the learning experience."
            },
            srs: {
                title: "Spaced Repetition",
                description: "Our smart algorithm schedules reviews at optimal intervals to lock words into your long-term memory."
            }
        },
        footer: {
            copyright: "© 2024 LinguaLeap. All rights reserved.",
            terms: "Terms of Service",
            privacy: "Privacy",
        }
    },
    dashboard: {
        student: {
            welcome: "Welcome, {0}!",
            description: "Here's a summary of your learning progress. Keep up the great work!",
            reviewTitle: "Words to Review",
            reviewDescription: "Words that are due for a review session.",
            startReview: "Start Review Session",
            learningQueue: "{0} in learning queue",
            greatWork: "Keep up the great work!",
            xpDescription: "Earn XP from reviews, tests, spelling & daily logins.",
            progressOverview: {
                title: "Progress Overview",
                description: "A snapshot of your learning activity.",
                timeSpent: "Time Spent",
                wordsReviewed: "Words Reviewed",
                reviewedToday: "Reviewed Today",
                masteredWords: "Mastered Words",
                timeSpentToday: "Time Spent Today",
                totalWordsReviewed: "Total Words Reviewed",
            },
            activity: {
              title: "Last 7 Days Activity"
            },
            tests: {
              title: "Tests Completed Today"
            }
        },
        supervisor: {
            title: "Supervisor Dashboard",
            welcome: "Welcome, {0}.",
            supervisorId: {
                title: "Your Supervisor ID",
                description: "Share this ID with your students so they can connect with you."
            },
            myStudents: {
                title: "My Students",
                description: "A list of students under your supervision.",
                name: "Name",
                email: "Email"
            }
        },
        loading: "Loading..."
    },
    learn: {
        backToDashboard: "Back to Dashboard",
        sessionFinished: {
            title: "Great Job!",
            description: "You've finished your review session for now. Come back later for more!",
        }
    },
    quizCard: {
        checkAnswer: "Check Answer",
        schedule: {
            title: "Good job!",
            description: "When should we show you this word again?",
            tomorrow: "Tomorrow",
            inTwoDays: "In 2 days",
            inAWeek: "In a week",
            inTwoWeeks: "In 2 weeks",
            inAMonth: "In a month",
            mastered: "I won't forget this",
            recommended: "Recommended"
        }
    },
    addWord: {
        title: "Add a New Word",
        description: "Create a new vocabulary card for your students. AI will automatically generate distractor options.",
        cardTitle: "New Vocabulary Card",
        cardDescription: "Fill in the details for the new word.",
        form: {
            unitLabel: "Unit",
            unitPlaceholder: "e.g., Unit 1",
            lessonLabel: "Lesson",
            lessonPlaceholder: "e.g., Lesson 5",
            wordLabel: "Word",
            wordPlaceholder: "e.g., Ephemeral",
            definitionLabel: "Definition",
            definitionPlaceholder: "e.g., Lasting for a very short time.",
            imageLabel: "Explanatory Image",
            addButton: "Add Word",
            addingButton: "Adding Word...",
        }
    },
    editWord: {
        title: "Edit Word",
        description: "Update the details for your vocabulary card.",
        cardTitle: "Editing: {0}",
        cardDescription: "Modify the fields below and save your changes.",
        form: {
            currentImage: "Current Image:",
            imageHelper: "Leave blank to keep the current image.",
            saveButton: "Save Changes",
            savingButton: "Saving Changes...",
        }
    },
    wordsPage: {
        title: "My Word Collection",
        description: "Browse and manage your vocabulary cards.",
        addNew: "Add New Word",
        table: {
            title: "My Word Collection",
            description: "A complete list of all words you've added.",
            image: "Image",
            word: "Word",
            unit: "Unit",
            lesson: "Lesson",
            definition: "Definition",
            actions: "Actions",
        },
        deleteDialog: {
            title: "Are you absolutely sure?",
            description: "This action cannot be undone. This will permanently delete the word “{0}” from your list.",
            cancel: "Cancel",
            continue: "Continue",
        },
    },
    studentsPage: {
        title: "My Students",
        description: "Welcome, {0}. Here are your students.",
        allStudents: {
            title: "All Students",
            description: "A list of students under your supervision.",
        },
    },
    grammar: {
        hub: {
            title: "Grammar Hub",
            description: "Manage and create grammar lessons for your students.",
            individualTenses: {
                title: "Individual Tenses",
                description: "Select a tense to preview its specific test.",
            },
            comprehensiveTest: {
                title: "Comprehensive Test",
                description: "A mixed quiz covering all available tenses.",
                button: "Start Comprehensive Test",
            },
             specificSkills: {
                title: "Specific Skills",
                description: "Practice specific grammar points like prepositions.",
                prepositions: "Prepositions of Place (in, on, at)",
            }
        },
        studentTest: {
            title: "Student Test",
            description: "Students can test their knowledge with this quiz. The questions are generated dynamically by AI.",
            button: "Preview Test"
        },
        tenses: {
            presentSimple: "Present Simple",
            pastSimple: "Past Simple",
            presentContinuous: "Present Continuous",
        },
        prepositionsQuiz: {
            title: "Prepositions of Place Test",
            description: "Test your knowledge of using \"in\", \"on\", and \"at\" for places.",
            loading: "Generating your quiz on prepositions...",
            submit: "Submit Answers",
            complete: "Test Complete!",
            score: "You scored {0} out of {1}.",
            newTest: "Take a New Test",
        },
    },
     championPage: {
        title: "Champion Leaderboard",
        description: "See who's at the top of the class! The leaderboard resets every week.",
        weeklyRankings: "Weekly Rankings",
        leaderboardDescription: "Leaderboard of you and your classmates. Resets {0}.",
        you: "(You)",
        xp: "XP",
        loading: "Loading leaderboard...",
        noClassmates: "No classmates found to create a leaderboard."
    },
    learningWordsPage: {
        title: "Words in Learning",
        description: "This is your active queue. Keep reviewing these words to master them!",
        cardTitle: "Your Learning Queue",
        cardDescription: "A list of all the words you are currently learning. Filter by unit and lesson below.",
        filterUnit: "Filter by Unit",
        filterLesson: "Filter by Lesson",
        allUnits: "All Units",
        allLessons: "All Lessons",
        clearFilters: "Clear",
        tableImage: "Image",
        tableWord: "Word",
        tableUnit: "Unit",
        tableNextReview: "Next Review",
        tableActions: "Actions",
        dueNow: "Due now",
        timeLeft: "{0} left",
        days: "d",
        hours: "h",
        loading: "Loading your words...",
        noWords: "No words found for the selected filters.",
    },
    masteredWordsPage: {
        title: "Mastered Words",
        description: "Congratulations! Here are all the words you've successfully learned.",
        cardTitle: "Your Word Collection",
        cardDescription: "A list of all the words you have mastered. Filter by unit and lesson below.",
        filterUnit: "Filter by Unit",
        filterLesson: "Filter by Lesson",
        allUnits: "All Units",
        allLessons: "All Lessons",
        clearFilters: "Clear",
        tableImage: "Image",
        tableWord: "Word",
        tableUnit: "Unit",
        noWords: "No words found for the selected filters.",
        loading: "Loading mastered words...",
    },
    xpEvents: {
        review_word: "Word Reviewed",
        spell_correct: "Spelling Correct",
        daily_login: "Daily Login",
        master_word: "Word Mastered",
        grammar_test: "Grammar Test"
    },
    toasts: {
        error: "Error",
        success: "Success!",
        addWordSuccess: "Word created!",
        updateWordSuccess: "Word updated successfully!",
        deleteWordSuccess: "Word deleted successfully.",
        resetWordSuccess: "“{0}” progress has been reset.",
        restoreWordSuccess: "“{0}” has been restored to your learning queue.",
        rescheduleSuccess: "“{0}” has been rescheduled.",
        wontForgetText: "“{0}” moved to Mastered Words.",
        validationFailed: "Validation failed.",
        aiError: "Failed to add word. AI Generation Error: {0}",
        registerSuccess: "Success!",
        loginError: "Invalid email or password.",
        supervisorIdRequired: "Supervisor ID is required for students.",
        invalidSupervisorId: "Invalid Supervisor ID.",
        userExists: "User with this email already exists.",
        passwordLength: "Password must be at least 6 characters.",
        nameRequired: "Name is required.",
        invalidEmail: "Invalid email address.",
        definitionRequired: "Definition is required.",
        wordRequired: "Word is required.",
        imageRequired: "Image is required."
    }
  },
  ar: {
    sidebar: {
      dashboard: "لوحة التحكم",
      myWords: "كلماتي",
      addWord: "إضافة كلمة",
      myStudents: "طلابي",
      profile: "الملف الشخصي",
      learn: "تعلّم",
      learningWords: 'كلمات أتعلمها',
      masteredWords: 'كلمات أتقنتها',
      champion: "البطل",
      chat: 'محادثة',
      classmates: 'زملاء الدراسة',
      grammar: 'قواعد',
      requests: 'طلبات',
      admins: 'مدراء',
      about: 'حول',
      spelling: 'الإملاء',
    },
    spellingPractice: {
        title: "تدريب إملائي",
        description: "اكتب الكلمة التي تطابق التعريف والصورة أدناه.",
        todayCounter: "{0} / {1} اليوم",
        noWordsForFilters: "لا توجد كلمات تطابق الفلاتر المحددة.",
        limitReached: "عمل رائع! لقد وصلت إلى الحد الأقصى للإملاء لهذا اليوم.",
        comeBack: "عد غدًا لمزيد من التدريب.",
        check: "تحقق",
        newWord: "كلمة جديدة",
        clearFilters: "مسح",
        allUnits: "كل الوحدات",
        allLessons: "كل الدروس",
        filterByUnit: "تصفية حسب الوحدة",
        filterByLesson: "تصفية حسب الدرس",
        loading: "جارٍ تحميل كلمة جديدة...",
        noWordsYet: "ليس لديك كلمات تمت مراجعتها للتدريب على إملائها بعد.",
        noWordsYetHint: "أكمل جلسة مراجعة للبدء!",
        placeholder: "اكتب الكلمة...",
    },
    chatPage: {
        supervisorTitle: "محادثات الطلاب",
        studentTitle: "محادثة",
        supervisorDescription: "اقرأ وأجب على رسائل طلابك.",
        studentDescription: "محادثات مع مشرفك وزملائك.",
        conversations: "المحادثات",
        noMessages: "لا توجد رسائل بعد",
        noConversations: "لم تبدأ أي محادثات بعد.",
        selectConversation: "اختر محادثة لبدء الدردشة",
        typeMessage: "اكتب رسالة...",
        send: "إرسال",
        loading: "جار التحميل...",
        contactType: {
            supervisor: "مشرف",
            peer: "زميل",
        },
        edited: "(تم التعديل)",
        messageActions: {
            edit: "تعديل",
            delete: "حذف",
            block: "حظر المستخدم",
        },
        deleteDialog: {
            title: "حذف الرسالة",
            descriptionForMe: "سيؤدي هذا إلى حذف الرسالة لك فقط. سيظل بإمكان الآخرين في المحادثة رؤيتها.",
            descriptionForEveryone: "سيؤدي هذا إلى حذف الرسالة بشكل دائم للجميع في هذه المحادثة.",
            deleteForMe: "احذف لي",
            deleteForEveryone: "احذف للجميع",
            cancel: "إلغاء",
        },
        blockDialog: {
            title: "حظر المستخدم؟",
            description: "سيؤدي حظر {0} إلى منعه من إرسال رسائل إليك، ولن تتمكن من مراسلته. هل أنت متأكد؟",
            blockButton: "حظر",
            cancel: "إلغاء",
        },
        unblockDialog: {
            title: "إلغاء حظر المستخدم؟",
            description: "سيسمح لك إلغاء حظر {0} بإرسال واستقبال الرسائل مرة أخرى.",
            unblockButton: "إلغاء الحظر",
        },
        blockedContact: "هذا المستخدم محظور.",
        blockedMessage: "لا يمكنك إرسال رسائل إلى مستخدم محظور.",
    },
    about: {
        title: "حول LinguaLeap",
        description: "تعرف على الأشخاص والتكنولوجيا وراء تجربتك التعليمية.",
        greeting: "مرحباً!",
        teacherIntro: "أنا يوسف، مدرس لغة إنجليزية شغوف بالاستفادة من التكنولوجيا لجعل تعلم اللغة أكثر سهولة وفعالية. هذا التطبيق هو نتاج هذا الشغف، وهو مصمم ليكون أداة يمكنني استخدامها مع طلابي.",
        aiIntro: "لتحقيق هذه الرؤية، تعاونت مع Gemini، وهو ذكاء اصطناعي واسع النطاق من Google. تولى Gemini تطوير التطبيق، من برمجة الواجهة إلى دمج الميزات الذكية التي تشغل الاختبارات وأنظمة التعلم.",
        contactHint: "تذكر أنه يمكنك دائمًا مراسلتنا إذا كانت لديك أي اقتراحات أو للإبلاغ عن خطأ من صفحة التسجيل.",
        signature: "مع تحياتي،",
        version: "إصدار التطبيق: {0}"
    },
    profile: {
        title: "ملفي الشخصي",
        personalInfo: {
            title: "المعلومات الشخصية",
            description: "قم بتحديث تفاصيلك الشخصية هنا.",
            fullName: "الاسم الكامل",
            email: "البريد الإلكتروني",
            save: "حفظ التغييرات",
            grade: "المرحلة",
            section: "الشعبة",
            selectGrade: "اختر المرحلة",
            selectSection: "اختر الشعبة",
            supervisor: "المشرف",
        },
        picture: {
            title: "الصورة الشخصية",
            upload: "رفع الصورة",
            enlarge: "تكبير",
            shrink: "تصغير",
        },
        landingPage: {
            title: "الصفحة الرئيسية",
            description: "تحديث الصورة الرئيسية.",
            uploadButton: "رفع صورة رئيسية",
        },
        preferences: {
            title: "التفضيلات",
            description: "خصص تجربتك التعليمية.",
            language: "اللغة",
            selectLanguage: "اختر اللغة",
            timezone: "المنطقة الزمنية",
            selectTimezone: "اختر المنطقة الزمنية",
            save: "حفظ التفضيلات",
            currentTime: "الوقت الحالي: {0}",
            darkMode: "الوضع الداكن",
        },
        account: {
            title: "إدارة الحساب",
            description: "قم بإدارة إعدادات حسابك وبياناتك.",
            resetPassword: {
                title: "إعادة تعيين كلمة المرور",
                description: "سيتم إرسال بريد إلكتروني إليك يحتوي على تعليمات لإعادة تعيين كلمة المرور الخاصة بك.",
                button: "إعادة تعيين كلمة المرور",
            },
            deleteAccount: {
                title: "حذف الحساب",
                description: "حذف حسابك وجميع البيانات المرتبطة به بشكل دائم. لا يمكن التراجع عن هذا الإجراء.",
                button: "حذف حسابي",
            },
        },
    },
    login: {
        welcome: "مرحبًا بعودتك!",
        description: "أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك.",
        emailLabel: "البريد الإلكتروني",
        passwordLabel: "كلمة المرور",
        forgotPassword: "هل نسيت كلمة المرور؟",
        loginButton: "تسجيل الدخول",
        loginWithGoogle: "تسجيل الدخول باستخدام جوجل",
        noAccount: "ليس لديك حساب؟",
        signUp: "التسجيل",
        rememberMe: "تذكرني",
    },
    register: {
        title: "انضم إلى LinguaLeap",
        description: "أنشئ حسابك لبدء رحلتك التعليمية.",
        studentTab: "طالب",
        supervisorTab: "مشرف",
        fullNameLabel: "الاسم الكامل",
        fullNamePlaceholder: "ماكس روبنسون",
        emailLabel: "البريد الإلكتروني",
        emailPlaceholder: "m@example.com",
        passwordLabel: "كلمة المرور",
        supervisorIdLabel: "معرف المشرف",
        supervisorIdPlaceholder: "أدخل معرف المشرف الخاص بك",
        createAccountButton: "إنشاء حساب",
        createSupervisorAccountButton: "إنشاء حساب مشرف",
        orContinueWith: "أو تابع مع",
        registerWithGoogle: "التسجيل باستخدام جوجل",
        haveAccount: "هل لديك حساب بالفعل؟",
        login: "تسجيل الدخول",
    },
    landing: {
        title: "انطلق في اللغة مع الذكاء الاصطناعي",
        description: "يجمع LinguaLeap بين تقنيات التعلم المثبتة والذكاء الاصطناعي المتطور لإنشاء تجربة بناء مفردات مخصصة وفعالة.",
        getStarted: "ابدأ التعلم الآن",
        login: "تسجيل الدخول",
        features: {
            title: "لماذا ينجح LinguaLeap",
            description: "لقد صممنا المزيج المثالي من التكنولوجيا وطرق التدريس لتسريع اكتسابك للغة.",
            aiQuizzes: {
                title: "اختبارات مدعومة بالذكاء الاصطناعي",
                description: "تحدَّ نفسك بخيارات غير صحيحة تم إنشاؤها بواسطة الذكاء الاصطناعي، مما يجعل التعلم أكثر فعالية وجاذبية."
            },
            supervisorTools: {
                title: "أدوات المشرف",
                description: "يمكن للمشرفين إضافة مفردات مخصصة وتتبع تقدم الطلاب، وتخصيص تجربة التعلم."
            },
            srs: {
                title: "التكرار المتباعد",
                description: "تقوم الخوارزمية الذكية لدينا بجدولة المراجعات على فترات مثالية لتثبيت الكلمات في ذاكرتك طويلة المدى."
            }
        },
        footer: {
            copyright: "© 2024 LinguaLeap. كل الحقوق محفوظة.",
            terms: "شروط الخدمة",
            privacy: "الخصوصية",
        }
    },
    dashboard: {
        student: {
            welcome: "مرحبًا، {0}!",
            description: "إليك ملخص لتقدمك في التعلم. استمر في العمل الرائع!",
            reviewTitle: "كلمات للمراجعة",
            reviewDescription: "الكلمات التي حان وقت مراجعتها.",
            startReview: "ابدأ جلسة المراجعة",
            learningQueue: "{0} كلمة قيد التعلم",
            greatWork: "استمر في العمل الرائع!",
            xpDescription: "اكسب نقاط الخبرة من المراجعات والاختبارات والإملاء وتسجيل الدخول اليومي.",
            progressOverview: {
                title: "نظرة عامة على التقدم",
                description: "لمحة سريعة عن نشاطك التعليمي.",
                timeSpent: "الوقت المستغرق",
                wordsReviewed: "الكلمات المراجعة",
                reviewedToday: "تمت مراجعته اليوم",
                masteredWords: "الكلمات المتقنة",
                timeSpentToday: "الوقت المستغرق اليوم",
                totalWordsReviewed: "إجمالي الكلمات التي تمت مراجعتها",
            },
            activity: {
              title: "نشاط آخر 7 أيام"
            },
            tests: {
              title: "الاختبارات المكتملة اليوم"
            }
        },
        supervisor: {
            title: "لوحة تحكم المشرف",
            welcome: "مرحبًا، {0}.",
            supervisorId: {
                title: "معرف المشرف الخاص بك",
                description: "شارك هذا المعرف مع طلابك حتى يتمكنوا من الاتصال بك."
            },
            myStudents: {
                title: "طلابي",
                description: "قائمة الطلاب تحت إشرافك.",
                name: "الاسم",
                email: "البريد الإلكتروني"
            }
        },
        loading: "جار التحميل..."
    },
    learn: {
        backToDashboard: "العودة إلى لوحة التحكم",
        sessionFinished: {
            title: "أحسنت صنعًا!",
            description: "لقد أنهيت جلسة المراجعة الخاصة بك الآن. عد لاحقًا للمزيد!",
        }
    },
    quizCard: {
        checkAnswer: "تحقق من الإجابة",
        schedule: {
            title: "أحسنت!",
            description: "متى نعرض عليك هذه الكلمة مرة أخرى؟",
            tomorrow: "غدًا",
            inTwoDays: "بعد يومين",
            inAWeek: "بعد أسبوع",
            inTwoWeeks: "بعد أسبوعين",
            inAMonth: "بعد شهر",
            mastered: "لن أنسى هذه الكلمة",
            recommended: "موصى به"
        }
    },
    addWord: {
        title: "إضافة كلمة جديدة",
        description: "أنشئ بطاقة مفردات جديدة لطلابك. سيقوم الذكاء الاصطناعي بإنشاء خيارات مضللة تلقائيًا.",
        cardTitle: "بطاقة مفردات جديدة",
        cardDescription: "املأ تفاصيل الكلمة الجديدة.",
        form: {
            unitLabel: "الوحدة",
            unitPlaceholder: "مثال: الوحدة 1",
            lessonLabel: "الدرس",
            lessonPlaceholder: "مثال: الدرس 5",
            wordLabel: "الكلمة",
            wordPlaceholder: "مثال: سريع الزوال",
            definitionLabel: "التعريف",
            definitionPlaceholder: "مثال: يدوم لفترة قصيرة جدًا.",
            imageLabel: "صورة توضيحية",
            addButton: "إضافة كلمة",
            addingButton: "جار إضافة الكلمة...",
        }
    },
    editWord: {
        title: "تعديل الكلمة",
        description: "قم بتحديث تفاصيل بطاقة المفردات الخاصة بك.",
        cardTitle: "تعديل: {0}",
        cardDescription: "قم بتعديل الحقول أدناه واحفظ تغييراتك.",
        form: {
            currentImage: "الصورة الحالية:",
            imageHelper: "اتركه فارغًا للاحتفاظ بالصورة الحالية.",
            saveButton: "حفظ التغييرات",
            savingButton: "جارٍ حفظ التغييرات...",
        }
    },
    wordsPage: {
        title: "مجموعة كلماتي",
        description: "تصفح وأدر بطاقات المفردات الخاصة بك.",
        addNew: "إضافة كلمة جديدة",
        table: {
            title: "مجموعتي من الكلمات",
            description: "قائمة كاملة بجميع الكلمات التي أضفتها.",
            image: "صورة",
            word: "الكلمة",
            unit: "الوحدة",
            lesson: "الدرس",
            definition: "التعريف",
            actions: "الإجراءات",
        },
        deleteDialog: {
            title: "هل أنت متأكد تمامًا؟",
            description: "لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف الكلمة بشكل دائم “{0}” من قائمتك.",
            cancel: "إلغاء",
            continue: "متابعة",
        },
    },
    studentsPage: {
        title: "طلابي",
        description: "مرحبًا، {0}. هؤلاء هم طلابك.",
        allStudents: {
            title: "كل الطلاب",
            description: "قائمة الطلاب تحت إشرافك.",
        },
    },
    grammar: {
        hub: {
            title: "مركز القواعد",
            description: "إدارة وإنشاء دروس القواعد لطلابك.",
            individualTenses: {
                title: "الأزمنة الفردية",
                description: "اختر زمنًا لمعاينة اختباره المحدد.",
            },
            comprehensiveTest: {
                title: "الاختبار الشامل",
                description: "اختبار مختلط يغطي جميع الأزمنة المتاحة.",
                button: "بدء الاختبار الشامل",
            },
            specificSkills: {
                title: "مهارات محددة",
                description: "تدرب على نقاط قواعد محددة مثل حروف الجر.",
                prepositions: "حروف الجر المكانية (in, on, at)",
            }
        },
        studentTest: {
            title: "اختبار الطالب",
            description: "يمكن للطلاب اختبار معرفتهم بهذا الاختبار. يتم إنشاء الأسئلة ديناميكيًا بواسطة الذكاء الاصطناعي.",
            button: "معاينة الاختبار"
        },
        tenses: {
            presentSimple: "المضارع البسيط",
            pastSimple: "الماضي البسيط",
            presentContinuous: "المضارع المستمر",
        },
        prepositionsQuiz: {
            title: "اختبار حروف الجر المكانية",
            description: "اختبر معلوماتك في استخدام \"in\" و \"on\" و \"at\" للأماكن.",
            loading: "جارٍ إنشاء اختبار حروف الجر...",
            submit: "إرسال الإجابات",
            complete: "اكتمل الاختبار!",
            score: "لقد حصلت على {0} من {1}.",
            newTest: "إجراء اختبار جديد",
        },
    },
     championPage: {
        title: "لوحة المتصدرين للأبطال",
        description: "شاهد من هو في قمة الفصل! يتم إعادة تعيين لوحة المتصدرين كل أسبوع.",
        weeklyRankings: "التصنيفات الأسبوعية",
        leaderboardDescription: "لوحة المتصدرين لك ولزملائك في الفصل. تتم إعادة التعيين {0}.",
        you: "(أنت)",
        xp: "نقطة خبرة",
        loading: "جار تحميل لوحة المتصدرين...",
        noClassmates: "لم يتم العثور على زملاء في الفصل لإنشاء لوحة متصدرين."
    },
    learningWordsPage: {
        title: "كلمات قيد التعلم",
        description: "هذه هي قائمة المراجعة النشطة الخاصة بك. استمر في مراجعة هذه الكلمات لإتقانها!",
        cardTitle: "قائمة التعلم الخاصة بك",
        cardDescription: "قائمة بجميع الكلمات التي تتعلمها حاليًا. قم بالتصفية حسب الوحدة والدرس أدناه.",
        filterUnit: "تصفية حسب الوحدة",
        filterLesson: "تصفية حسب الدرس",
        allUnits: "جميع الوحدات",
        allLessons: "جميع الدروس",
        clearFilters: "مسح الفلاتر",
        tableImage: "الصورة",
        tableWord: "الكلمة",
        tableUnit: "الوحدة",
        tableNextReview: "المراجعة التالية",
        tableActions: "الإجراءات",
        dueNow: "حان الآن",
        timeLeft: "بقي {0}",
        days: "ي",
        hours: "س",
        loading: "جار تحميل كلماتك...",
        noWords: "لم يتم العثور على كلمات للفلاتر المحددة.",
    },
    masteredWordsPage: {
        title: "الكلمات المتقنة",
        description: "تهانينا! إليك جميع الكلمات التي تعلمتها بنجاح.",
        cardTitle: "مجموعتك من الكلمات",
        cardDescription: "قائمة بجميع الكلمات التي أتقنتها. قم بالتصفية حسب الوحدة والدرس أدناه.",
        filterUnit: "تصفية حسب الوحدة",
        filterLesson: "تصفية حسب الدرس",
        allUnits: "جميع الوحدات",
        allLessons: "جميع الدروس",
        clearFilters: "مسح الفلاتر",
        tableImage: "الصورة",
        tableWord: "الكلمة",
        tableUnit: "الوحدة",
        noWords: "لم يتم العثور على كلمات للفلاتر المحددة.",
        loading: "جار تحميل الكلمات المتقنة...",
    },
    xpEvents: {
        review_word: "تمت مراجعة الكلمة",
        spell_correct: "إملاء صحيح",
        daily_login: "تسجيل الدخول اليومي",
        master_word: "تم إتقان الكلمة",
        grammar_test: "اختبار القواعد"
    },
    toasts: {
        error: "خطأ",
        success: "نجاح!",
        addWordSuccess: "تم إنشاء الكلمة!",
        updateWordSuccess: "تم تحديث الكلمة بنجاح!",
        deleteWordSuccess: "تم حذف الكلمة بنجاح.",
        resetWordSuccess: "تمت إعادة ضبط تقدم “{0}”.",
        restoreWordSuccess: "تمت استعادة “{0}” إلى قائمة التعلم الخاصة بك.",
        rescheduleSuccess: "تمت إعادة جدولة “{0}”.",
        wontForgetText: "تم نقل “{0}” إلى الكلمات المتقنة.",
        validationFailed: "فشل التحقق.",
        aiError: "فشل إضافة الكلمة. خطأ في إنشاء الذكاء الاصطناعي: {0}",
        registerSuccess: "نجاح!",
        loginError: "بريد إلكتروني أو كلمة مرور غير صالحة.",
        supervisorIdRequired: "معرف المشرف مطلوب للطلاب.",
        invalidSupervisorId: "معرف المشرف غير صالح.",
        userExists: "مستخدم بهذا البريد الإلكتروني موجود بالفعل.",
        passwordLength: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
        nameRequired: "الاسم مطلوب.",
        invalidEmail: "عنوان البريد الإلكتروني غير صالح.",
        definitionRequired: "التعريف مطلوب.",
        wordRequired: "الكلمة مطلوبة.",
        imageRequired: "الصورة مطلوبة."
    }
  }
};

export type TranslationKey = 
    | 'sidebar.dashboard' | 'sidebar.myWords' | 'sidebar.addWord' | 'sidebar.myStudents' | 'sidebar.profile' | 'sidebar.learn'
    | 'sidebar.learningWords' | 'sidebar.masteredWords' | 'sidebar.champion' | 'sidebar.chat' | 'sidebar.classmates' | 'sidebar.grammar' | 'sidebar.requests' | 'sidebar.admins' | 'sidebar.about' | 'sidebar.spelling'
    | 'spellingPractice.title' | 'spellingPractice.description' | 'spellingPractice.todayCounter' | 'spellingPractice.noWordsForFilters' | 'spellingPractice.limitReached' | 'spellingPractice.comeBack' | 'spellingPractice.check' | 'spellingPractice.newWord' | 'spellingPractice.clearFilters'
    | 'spellingPractice.allUnits' | 'spellingPractice.allLessons' | 'spellingPractice.filterByUnit' | 'spellingPractice.filterByLesson' | 'spellingPractice.loading' | 'spellingPractice.noWordsYet' | 'spellingPractice.noWordsYetHint' | 'spellingPractice.placeholder'
    | 'chatPage.supervisorTitle' | 'chatPage.studentTitle' | 'chatPage.supervisorDescription' | 'chatPage.studentDescription' | 'chatPage.conversations' | 'chatPage.noMessages' | 'chatPage.noConversations' | 'chatPage.selectConversation' | 'chatPage.typeMessage' | 'chatPage.send' | 'chatPage.loading' | 'chatPage.contactType.supervisor' | 'chatPage.contactType.peer'
    | 'chatPage.edited' | 'chatPage.messageActions.edit' | 'chatPage.messageActions.delete' | 'chatPage.messageActions.block'
    | 'chatPage.deleteDialog.title' | 'chatPage.deleteDialog.descriptionForMe' | 'chatPage.deleteDialog.descriptionForEveryone' | 'chatPage.deleteDialog.deleteForMe' | 'chatPage.deleteDialog.deleteForEveryone' | 'chatPage.deleteDialog.cancel'
    | 'chatPage.blockDialog.title' | 'chatPage.blockDialog.description' | 'chatPage.blockDialog.blockButton' | 'chatPage.blockDialog.cancel'
    | 'chatPage.unblockDialog.title' | 'chatPage.unblockDialog.description' | 'chatPage.unblockDialog.unblockButton'
    | 'chatPage.blockedContact' | 'chatPage.blockedMessage'
    | 'about.title' | 'about.description' | 'about.greeting' | 'about.teacherIntro' | 'about.aiIntro' | 'about.contactHint' | 'about.signature' | 'about.version'
    | 'profile.title' | 'profile.personalInfo.title' | 'profile.personalInfo.description' | 'profile.personalInfo.fullName' | 'profile.personalInfo.email' | 'profile.personalInfo.save'
    | 'profile.personalInfo.grade' | 'profile.personalInfo.section' | 'profile.personalInfo.selectGrade' | 'profile.personalInfo.selectSection' | 'profile.personalInfo.supervisor'
    | 'profile.picture.title' | 'profile.picture.upload' | 'profile.picture.enlarge' | 'profile.picture.shrink'
    | 'profile.landingPage.title' | 'profile.landingPage.description' | 'profile.landingPage.uploadButton'
    | 'profile.preferences.title' | 'profile.preferences.description' | 'profile.preferences.language' | 'profile.preferences.selectLanguage' | 'profile.preferences.timezone' | 'profile.preferences.selectTimezone' | 'profile.preferences.save' | 'profile.preferences.currentTime' | 'profile.preferences.darkMode'
    | 'profile.account.title' | 'profile.account.description' | 'profile.account.resetPassword.title' | 'profile.account.resetPassword.description' | 'profile.account.resetPassword.button' | 'profile.account.deleteAccount.title' | 'profile.account.deleteAccount.description' | 'profile.account.deleteAccount.button'
    | 'login.welcome' | 'login.description' | 'login.emailLabel' | 'login.passwordLabel' | 'login.forgotPassword' | 'login.loginButton' | 'login.loginWithGoogle' | 'login.noAccount' | 'login.signUp' | 'login.rememberMe'
    | 'register.title' | 'register.description' | 'register.studentTab' | 'register.supervisorTab' | 'register.fullNameLabel' | 'register.fullNamePlaceholder' | 'register.emailLabel' | 'register.emailPlaceholder' | 'register.passwordLabel' | 'register.supervisorIdLabel' | 'register.supervisorIdPlaceholder' | 'register.createAccountButton' | 'register.createSupervisorAccountButton' | 'register.orContinueWith' | 'register.registerWithGoogle' | 'register.haveAccount' | 'register.login'
    | 'landing.title' | 'landing.description' | 'landing.getStarted' | 'landing.login'
    | 'landing.features.title' | 'landing.features.description'
    | 'landing.features.aiQuizzes.title' | 'landing.features.aiQuizzes.description'
    | 'landing.features.supervisorTools.title' | 'landing.features.supervisorTools.description'
    | 'landing.features.srs.title' | 'landing.features.srs.description'
    | 'landing.footer.copyright' | 'landing.footer.terms' | 'landing.footer.privacy'
    | 'dashboard.student.welcome' | 'dashboard.student.description' | 'dashboard.student.reviewTitle' | 'dashboard.student.reviewDescription' | 'dashboard.student.startReview' | 'dashboard.student.learningQueue' | 'dashboard.student.greatWork' | 'dashboard.student.xpDescription'
    | 'dashboard.student.progressOverview.title' | 'dashboard.student.progressOverview.description' | 'dashboard.student.progressOverview.timeSpent' | 'dashboard.student.progressOverview.wordsReviewed' | 'dashboard.student.progressOverview.reviewedToday' | 'dashboard.student.progressOverview.masteredWords' | 'dashboard.student.progressOverview.timeSpentToday' | 'dashboard.student.progressOverview.totalWordsReviewed'
    | 'dashboard.student.activity.title' | 'dashboard.student.tests.title'
    | 'dashboard.supervisor.title' | 'dashboard.supervisor.welcome' | 'dashboard.supervisor.supervisorId.title' | 'dashboard.supervisor.supervisorId.description' | 'dashboard.supervisor.myStudents.title' | 'dashboard.supervisor.myStudents.description' | 'dashboard.supervisor.myStudents.name' | 'dashboard.supervisor.myStudents.email'
    | 'dashboard.loading'
    | 'learn.backToDashboard' | 'learn.sessionFinished.title' | 'learn.sessionFinished.description'
    | 'quizCard.checkAnswer'
    | 'quizCard.schedule.title' | 'quizCard.schedule.description' | 'quizCard.schedule.tomorrow' | 'quizCard.schedule.inTwoDays' | 'quizCard.schedule.inAWeek' | 'quizCard.schedule.inTwoWeeks' | 'quizCard.schedule.inAMonth' | 'quizCard.schedule.mastered' | 'quizCard.schedule.recommended'
    | 'addWord.title' | 'addWord.description' | 'addWord.cardTitle' | 'addWord.cardDescription'
    | 'addWord.form.unitLabel' | 'addWord.form.unitPlaceholder' | 'addWord.form.lessonLabel' | 'addWord.form.lessonPlaceholder' | 'addWord.form.wordLabel' | 'addWord.form.wordPlaceholder' | 'addWord.form.definitionLabel' | 'addWord.form.definitionPlaceholder' | 'addWord.form.imageLabel' | 'addWord.form.addButton' | 'addWord.form.addingButton'
    | 'editWord.title' | 'editWord.description' | 'editWord.cardTitle' | 'editWord.cardDescription' | 'editWord.form.currentImage' | 'editWord.form.imageHelper' | 'editWord.form.saveButton' | 'editWord.form.savingButton'
    | 'wordsPage.title' | 'wordsPage.description' | 'wordsPage.addNew'
    | 'wordsPage.table.title' | 'wordsPage.table.description' | 'wordsPage.table.image' | 'wordsPage.table.word' | 'wordsPage.table.unit' | 'wordsPage.table.lesson' | 'wordsPage.table.definition' | 'wordsPage.table.actions'
    | 'wordsPage.deleteDialog.title' | 'wordsPage.deleteDialog.description' | 'wordsPage.deleteDialog.cancel' | 'wordsPage.deleteDialog.continue'
    | 'studentsPage.title' | 'studentsPage.description'
    | 'studentsPage.allStudents.title' | 'studentsPage.allStudents.description'
    | 'grammar.hub.title' | 'grammar.hub.description' | 'grammar.hub.individualTenses.title' | 'grammar.hub.individualTenses.description' | 'grammar.hub.comprehensiveTest.title' | 'grammar.hub.comprehensiveTest.description' | 'grammar.hub.comprehensiveTest.button'
    | 'grammar.hub.specificSkills.title' | 'grammar.hub.specificSkills.description' | 'grammar.hub.specificSkills.prepositions'
    | 'grammar.studentTest.title' | 'grammar.studentTest.description' | 'grammar.studentTest.button'
    | 'grammar.tenses.presentSimple' | 'grammar.tenses.pastSimple' | 'grammar.tenses.presentContinuous'
    | 'grammar.prepositionsQuiz.title' | 'grammar.prepositionsQuiz.description' | 'grammar.prepositionsQuiz.loading' | 'grammar.prepositionsQuiz.submit' | 'grammar.prepositionsQuiz.complete' | 'grammar.prepositionsQuiz.score' | 'grammar.prepositionsQuiz.newTest'
    | 'championPage.title' | 'championPage.description' | 'championPage.weeklyRankings' | 'championPage.leaderboardDescription' | 'championPage.you' | 'championPage.xp' | 'championPage.loading' | 'championPage.noClassmates'
    | 'learningWordsPage.title' | 'learningWordsPage.description' | 'learningWordsPage.cardTitle' | 'learningWordsPage.cardDescription' | 'learningWordsPage.filterUnit' | 'learningWordsPage.filterLesson' | 'learningWordsPage.allUnits' | 'learningWordsPage.allLessons' | 'learningWordsPage.clearFilters' | 'learningWordsPage.tableImage' | 'learningWordsPage.tableWord' | 'learningWordsPage.tableUnit' | 'learningWordsPage.tableNextReview' | 'learningWordsPage.tableActions' | 'learningWordsPage.dueNow' | 'learningWordsPage.timeLeft' | 'learningWordsPage.days' | 'learningWordsPage.hours' | 'learningWordsPage.loading' | 'learningWordsPage.noWords'
    | 'masteredWordsPage.title' | 'masteredWordsPage.description' | 'masteredWordsPage.cardTitle' | 'masteredWordsPage.cardDescription' | 'masteredWordsPage.filterUnit' | 'masteredWordsPage.filterLesson' | 'masteredWordsPage.allUnits' | 'masteredWordsPage.allLessons' | 'masteredWordsPage.clearFilters' | 'masteredWordsPage.tableImage' | 'masteredWordsPage.tableWord' | 'masteredWordsPage.tableUnit' | 'masteredWordsPage.noWords' | 'masteredWordsPage.loading'
    | `xpEvents.${'review_word' | 'spell_correct' | 'daily_login' | 'master_word' | 'grammar_test'}`
    | 'toasts.error' | 'toasts.success' | 'toasts.addWordSuccess' | 'toasts.updateWordSuccess' | 'toasts.deleteWordSuccess' | 'toasts.resetWordSuccess' | 'toasts.restoreWordSuccess' | 'toasts.rescheduleSuccess' | 'toasts.wontForgetText' | 'toasts.validationFailed' | 'toasts.aiError' | 'toasts.registerSuccess' | 'toasts.loginError' | 'toasts.supervisorIdRequired' | 'toasts.invalidSupervisorId' | 'toasts.userExists' | 'toasts.passwordLength' | 'toasts.nameRequired' | 'toasts.invalidEmail' | 'toasts.definitionRequired' | 'toasts.wordRequired' | 'toasts.imageRequired';

    