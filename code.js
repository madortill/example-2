// גייסון כותרות שיופיעו כאשר ילחץ הכפתור המתאים
const learningMethod = [
    {
        title: "למידה פרונטלית",
        idValue: "frontal-learning",
        color: "purple",
        buttons: [
            "frontalLessonBtn.svg",
            "shortTimesBtn.svg"
        ]
    },
    {
        title:  "למידה עצמית",
        idValue: "self-learning",
        color: "orenge",
        buttons: [
            "upsideDownClassBtn.svg",
            "selfLearningBtn.svg",
            "microLearningBtn.svg"
        ]
    },
    {
        title: "למידה חברתית",
        idValue: "social-learning",
        color: "green",
        buttons: [
            "basedOnProjectsBtn.svg",
            "basedOnProblemBtn.svg",
            "expertsBtn.svg",
            "gameBtn.svg",
            "adventurousBtn.svg",
            "colleaguesBtn.svg"
        ]
    },
    {
        title: "למידה מתוקשבת",
        idValue: "E-Learnng",
        color: "blue",
        buttons: [
            "mobileLearningBtn.svg"
        ]
    },
    {
        title: "כלים למפגשים קבוצתיים",
        idValue: "tools-for-group-meetings",
        color: "red",
        buttons: [
            "brainstormingBtn.svg",
            "discussionGroupsBtn.svg",
            "debateBtn.svg"            
        ]
    }
];

const tools = [
    brainstorming = [
        {
            h1: "סיעור מוחות",
            h2: "מאפשרת ללומדים לייצר רעיונות, אסוציאציות, תגובות לשאלות בצורה יצירתית הדורשת פתרון",
            img: "brainstorming-photo.png",
            color1: "(23,170,168)",
            color2: "(148, 206, 205)",
            members: "4-10 בקבוצה",
            time: "מינ' 45 דקות",
            links: [
                "<a href=https://www.hrus.co.il/הסערה-המושלמת-כיצד-ליישם-סיעור-מוחות-מ>קריאת המשך</a>",
                "<a href=http://www.iorad.com/player/106497/---------------#mobilequick-1>כלי למידה</a>"
            ],
            text: [
                "<ul><p class='sideways-text'>עקרונות ליישום</p><li>כל משתתף נדרש להגיב לשאלה או בעיה</li> <li>איסוף הרעיונות - אסוציאטיביים ויצירתיים </li><li> כלל הרעיונות נרשמים על לוח או נייר  על ידי המנחה </li><li> זיהוי הרעיונות הטובים ביותר ודיוקם </li><li> הסינון הסופי יתבצע על ידי התחשבות בעלות, וסיכוי הצלחה </li><li> משוב - דווח לקבוצה על הרעיונות הסופיים</li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>מאפשר להתגבר על אופני חשיבה  סטריאוטיפיים ונוקשים</li></ul>",
                "<ul><p class='sideways-text'>משאבים נדרשים</p><li>לוח או נייר לכתיבה </li> <li>סביבת עבודה יצירתית וחלל גדול ומואר</li></ul>"
            ],
            bottom: [
                
            ],
            abilities: "<span>חשיבה יצירתית, עבודת צוות, כושר המצאה</span>",
            counter: 0
        }
    ],
    
    discussionGroups = [
        {
            h1: "קבוצות דיון",
            h2: "דיון בקבוצות קטנות במשך זמן מוגבל בנושא ספציפי או בעיה",
            img: "discussionGroups-photo.png",
            color1: "(64,124,141)",
            color2: "(150, 175, 175)",
            members: "עד 10 בקבוצה",
            time: "5-10 דקות",
            links: [
                "<a href=http://www.gishurim.org/wp-content/uploads/2014/08/the-world-cafe_info-paper_final.pdf>קריאת המשך</a>",
                "<a href=http://www.iorad.com/player/106497/---------------#trysteps-1>כלי למידה</a>"
            ],
            text: [
                "<ul><p class='sideways-text'>עקרונות ליישום</p><li>הנושאים המועלים בקבוצה נרשמים על ידי צופה או משתתף</li> <li>כל צופה מדווח למליאה על הנושאים, בעיות או תובנות</li></ul>",
                "<ul><p class='sideways-text'>עקרונות למדריך</p><li>קביעת כללי יסוד של כבוד הדדי לפני הדיון </li><li>המדריך אינו מביע את דעותיו האישיות</li><li>על המדריך לעודד כל משתתף להביע את דעותיו</li><li>אין לאפשר לקולות הרמים להפריע לדיון</li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>ניתן לבצע מספר סבבי דיונים בקבוצות משתנות </li><li>למידה מתבצעת בעיקר כאשר אנשים מתבטאים בקול</li></ul>",
                "<ul><p class='sideways-text'>משאבים נדרשים</p><li>הכנת שאלות מעוררות בדיון</li> <li>הכרות מקדימה ומעמיקה של המנחה עם נושא הדיון</li></ul>"
            ],
            bottom: [
                
            ],
            abilities: "<span>יכולת הבעה, ביקורתיות, עבודת צוות</span>",
            counter: 1
        }
    ],
    
    debate = [
        {
            h1: "דיבייט",
            h2: "פעילות של ויכוח פורמלי בעל פה מול קהל שמטרתו לעודד תרבות דיון בריאה",
            img: "debate-photo.png",
            color1: "(46,80,89)",
            color2: "(96,111,115)",
            members: "2 קבוצות, 4 משתתפים",
            time: "5-10 דקות",
            links: [
                "<a href=https://www.facebook.com/groups/4565053115>קריאת המשך</a>",
                "<a href=http://to.be>כלי למידה</a>"
            ],
            text: [
                "<ul><p class='sideways-text'>עקרונות ליישום</p><li>נושא הדיון נקבע על ידי השופטים</li> <li>השופטים מגדירים את תפקיד הקבוצה - לצדד או להתנגד לנושא אשר נבחר</li><li>זמן בניית טיעון בקבוצה - 15 דקות</li><li>פינג פונג” - בין דוברים, 7 דקות לדובר”</li><li>הקבוצה המתחרה לא מפריעה במהלך הדיון ולא מעירה במהלך הדקה הראשונה והדקה האחרונה</li><li>לאחר שמונה נאומים פאנל השופטים מכריז על הקבוצה המנצחת</li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>תרבות הדיון העולה מקיום הדיבייט היא הדבר החשוב והמשמעותי בו</li></ul>",
                "<ul><p class='sideways-text'>משאבים נדרשים</p><li>סביבה ליצירת הדיבייט עצמו</li></ul>"
            ],
            bottom: [
                
            ],
            abilities: "<span>חשיבה יצירתית, חשיבה ביקורתית, סנכרון, הבנה, הסקת מסקנות</span>",
            counter: 2
        }
    ]
];

const mobileLearning = [
    {
        h1: "Mobile Learning",
        h2: "למידה המתבצעת על בסיס מכשירים טכנולוגיים ניידים",
        img: "mobileLearning-photo.png",
        color1: "(23,107,221)",
        color2: "(149,188,242)",
        members: "בהתאם לכל יישום",
        time: "5-20 דקות",
        links: [
            "<a href=http://in.bgu.ac.il/computing/E-Learning/DocLib/%D7%A9%D7%99%D7%9C%D7%95%D7%91%20%D7%98%D7%9B%D7%A0%D7%95%D7%9C%D7%95%D7%92%D7%99%D7%94%20%D7%A0%D7%99%D7%99%D7%93%D7%AA%20%D7%91%D7%94%D7%95%D7%A8%D7%90%D7%94%20%D7%91%D7%94%D7%A9%D7%9B%D7%9C%D7%94%20%D7%94%D7%92%D7%91%D7%95%D7%94%D7%94%20%D7%A4%D7%95%D7%A8%D7%A7%D7%95%D7%A9.pdf>קריאת המשך</a>",,
            "<a href= https://digitalpedagogy.co/tag/%D7%9C%D7%9E%D7%99%D7%93%D7%94-%D7%A0%D7%99%D7%99%D7%93%D7%AA>כלי למידה</a>"
        ],
        text: [
            "<ul><p class='sideways-text'>עקרונות ליישום</p><li>ניתן ליישום כקורס מקוון בצורה סנכרונית או א - סנכרונית</li> <li>שימוש באפלקציות או אתרים המאפשרים למידה עצמית או קבוצתית</li></ul>",
            "<ul><p class='sideways-text'>יתרונות השיטה</p><li>נגישות</li><li>מותאם לכל דורות הלומדים</li><li>רמת הלמידה גבוהה כשהיא שיתופית</li></ul>",
            "<ul><p class='sideways-text'>משאבים נדרשים</p><li>ישומים רספונסיביים - מותאם לכל המסכים</li></ul>"
        ],
        bottom: [
            "<h1>#אתגרו_את_עצמכם</h1>",
            "<p>כיצד ניתן להשתמש בשיטה זו ע’’מ <br>לגוון את שיטת ההוראה?</p>",
            "<p>כיצד למידה ניידת יכולה לתמוך בתהליך הלמידה בכיתתך?</p>",
            "<p>כיצד שימוש בלמידה זו יכול לסייע<br> להרחיב את תהליך הלמידה עבור <br>תלמידים עם צרכים מיוחדים?</p>"
        ],
        abilities: "<span>אוריינות טכנולוגית, למידה עצמית אחריות הלומד לתהליך הלמידה</span>",
        counter: 0
    }
];

const social = [
    basedOnProjects = [
        {
            h1: "למידה מבוססת פרויקטים",
            h2: "שיטת למידה שבסופה לאחר עבודת החקר התוצר יהיה פרויקט, ע’’ב עולם התוכן של הלומדים",
            img: "basedOnProjects-photo.png",
            color1: "(43,164,80)",
            color2: "(84,218,125)",
            members: "1-8",
            time: "לאורך הכשרה, מחייב זמן מוגדר",
            links: [
                "<a href=https://www.edunow.org.il/edunow-media-story-256961>קריאת המשך</a>",
                "<a href=https://www.flipsnack.com>כלי למידה</a>"
            ],
            text: [
                "<ul><p class='sideways-text'>עקרונות מקדימים</p><li>תפקיד המנחה הוא לסייע בהכוונה ופיקוח באתגר ולהרחיב את ההבנה בחומר</li> <li>פרויקט ישים ומציאותי</li></ul>",
                "<ul><p class='sideways-text'>עקרונות למדריך</p><li>בחירת נושא מרכזי מתוך תוכנית הלימודים</li><li>הגדרת אתגר רלוונטי מתחום הלומדים וקהל יעד שיעשה בו שימוש</li><li>מסייע במתן מידע חסר הכוונה והפניה לחומרים</li><li>הערכת הפרויקט</li></ul>",
                "<ul><p class='sideways-text'>עקרונות ללומד</p><li>מבצעים סיעור מוחות ע’’ב ידע קיים מהקבוצה</li><li>חקר שיטתי המתמקד באתגר</li><li>איסוף חומרים ומקורות מידע</li><li>חלוקת תפקידים או נושאים בין הקבוצה</li><li>חקר אישי של כל משתתף בתחומו</li><li>מימוש תוכנית העבודה לפי לוח זמנים ובנית התוצר בפרויקט</li><li>הצגה בפני פורום מכובד</li><li>הצגת התוצר</li><li>הפקת לקחים מתהליך הלמידה</li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>מעודד יכולת לפתרון בעיות</li><li>עבודת צוות</li><li>הנעה עצמית</li></ul>",
                "<ul><p class='sideways-text'>משאבים נדרשים</p><li>בחירת תחום לחקר מהעולם הרלוונטי של הלומד</li><li>הספקת משאבים לוגיסטים המסייעים ביצירת התוצר</li></ul>"
            ],
            bottom: [
                "<h1>#אתגרו_את_עצמכם</h1>",
                "<p>האם היית מפתח הכשרה שלמה ע’’ב שיטת למידה זו?</p>",
                "<p>כיצד שיטה זו מאתגרת את הלומדים?</p>"
            ],
            abilities: "<span>למידה עצמית, ניתוח, פתרון בעיות, חשיבה ביקורתית, איסוף ועיבוד מידע</span>",
            counter: 0
        }
    ],
    
    basedOnProblem = [
        {
            h1: "למידה מבוססת בעיה",
            h2: "למידה וחקירה של בעיה מתחום התמחותם של הלומדים והתמודדות על ידי חקר הנושא ויצירת פתרונות",
            img: "basedOnProblem-photo.png",
            color1: "(43,164,80)",
            color2: "(84,218,125)",
            members: "עד 8",
            time: "מספר ימים",
            links: [
                "<a href=https://museandfuse.wordpress.com/2014/05/09/case-study-teaching>קריאת המשך</a>",
                "<a href=https://www.mindomo.com>כלי למידה</a>"
            ],
            text: [
                "<ul><p class='sideways-text'>עקרונות מקדימים</p><li>תפקיד המנחה לוודא קיום ולפקח על התהליך</li> <li>יצירת אתגר ישים ומציאותי</li><li>חלוקת האתגר למטלות משנה</li></ul>",
                "<ul><p class='sideways-text'>עקרונות ליישום</p><li>הגדרת אתגר מתחום הלומדים</li><li>סיעור מוחות ע’’ב הידע הקיים בקבוצה</li><li> הצגת השערות לסיבות לבעיה ואפשרות פתרון חלוקת תפקידים או נושאים בין חברי הקבוצה ואיסוף מידע לפתרון הבעיה ע’’ב חקר אישי</li><li>התכנסות הקבוצה לאחר 2-7 ימים ושיתוף מידע</li><li>גיבוש פתרון קבוצתי</li><li>הצגת הרעיון לפתרון בפני פורום מכובד: <br> א. סיכום הבעיה<br> ב. הפקת לקחים מתהליך הלמידה </li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>הלומד מחליט באילו נתונים להתמקד בפתרון</li><li>מעודדת חקירה והעמקה</li><li>מאפשרת ללומד לפתח את כישוריו בתחום חקר בעיות ומציאת פתרונן</li></ul>",
                "<ul><p class='sideways-text'>משאבים נדרשים</p><li>יש להעמיד לרשות הלומדים את כל משאבי הידע והניסיון בתוך הארגון ומחוצה לו ע’’מ לאפשר להם ללמוד ולחקור לעומק</li><li>  מומחים מהארגון ומחוצה לו שמלווים את ה - PBL </li><li>אפשרות - מתן מידע חדש הניתן במהלך העבודה לביצוע חישוב מחדש</li></ul>"
            ],
            bottom: [
                "<h1>#אתגרו_את_עצמכם</h1>",
                "<p>באילו הכשרות היית מיישם שיטה זו?</p>",
                "<p>כיצד שיטה זו מאתגרת את הלומדים?</p>",
                "<p>אילו מיומנויות חסרות למדריך ע’’מ ליישם שיטה זו בצורה טובה?</p>"
            ],
            abilities: "<span>למידה עצמית, ניתוח, פתרון בעיות, חשיבה ביקורתית, איסוף ועיבוד מידע</span>",
            counter: 1
        }
    ],
    
    experts= [
        {
            h1: "למידת מומחים",
            h2: "התמודדות עם מטלה בקבוצות קטנות והטרוגניות של “מומחים” בתחומים שונים",
            img: "experts-photo.png",
            color1: "(43,164,80)",
            color2: "(84,218,125)",
            members: "3-5",
            time: "60 דקות",
            links: [
                "<a href=https://he.padlet.com>קריאת המשך</a>",
                "<a href=https://www.youtube.com/watch?v=igckWMDhBkA&feature=youtu.be>כלי למידה</a>"
            ],
            text: [
                "<ul><p class='sideways-text'>עקרונות ליישום</p><li>הצגת בעיה מורכבת לכיתה</li><li>משתתף מקבל תוכן ללמידה עצמית</li><li>חלוקה לקבוצות התמחות הומוגניות ומענה על שאלות מנחות</li><li>חלוקה לקבוצות הטרוגניות בכל קבוצה נמצא מומחה אחד</li><li>כל מומחה מציג את הממצאים ודן בהם בקבוצה בהתאם לנושא</li><li>שיתוף המליאה בהמלצות ותובנות</li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>מחייב כל משתתף לקחת חלק בדיון</li></ul>",
                "<ul><p class='sideways-text'>משאבים נדרשים</p><li>בחירת נושא וחלוקתו למספר יחידות תוכן</li><li>דף מידע מפורט ליחידות התוכן</li><li>סידור הכיתה לקבוצות וחלוקת דפי עבודה לקבוצות המומחים שנוגעים בתחומים</li></ul>"
            ],
            bottom: [
                "<h1>#אתגרו_את_עצמכם</h1>",
                "<p>מתי על המדריך להתערב בתהליך הלמידה?</p>",
                "<p>אילו כלי מדיה היית משלב על מנת להעצים את הלמידה?</p>",
                "<p>מה תפקיד המדריך בשיטה זו?</p>"
            ],
            abilities: "<span>תקשורת, עבודה בקבוצות, ארגון מידע, הקניית ידע, עיבוד מידע, ושיתוף מידע</span>",
            counter: 2
        }
    ],
    
    game = [
        {
            h1: "למידה מבוססת משחק",
            h2: "למידה המועברת באמצעות משחק ככלי להעברת תכנים רצוים",
            img: "game-photo.png",
            color1: "(43,164,80)",
            color2: "(84,218,125)",
            members: "לפי סוג המשחק",
            time: "משתנה",
            links: [
                "<a href=https://www.edunow.org.il/edunow-media-story-255880>קריאת המשך</a>",
                "<a href=http://digitalpedagogy.info/simulator.php?url=http://digitalpedagogy.info>כלי למידה</a>"
            ],
            text: [
                "<ul><p class='sideways-text'>עקרונות ליישום</p><li>הגדרת מטרת המשחק ויעדיו</li><li>אפשרויות משחק שונות</li><li>שימוש במשחק קיים או חדש</li><li>שימוש באלמנטים של משחוק</li><li>משחק קבוצתי או יחידני</li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>הכוונה של המשחק ע’’י מנחה</li><li>גיבוש חברתי</li><li>למידה פעילה</li></ul>",
                "<ul><p class='sideways-text'>משאבים נדרשים</p><li>משחק</li><li>על פי המשחק אשר בחרתם</li></ul>"
            ],
            bottom: [
                "<h1>#אתגרו_את_עצמכם</h1>",
                "<p>מה הערך המוסף של שילוב משחק בתהליך למידה?</p>",
                "<p>מה אפשר ללמוד דרך משחק שחמט?</p>",
                "<p>כיצד מקל המשחק על השחקן בהתמודדות עם כשלון?</p>"
            ],
            abilities: "<span>כל משחק מפתח כישורים כגון יכולות קוגניטביות רגשיות וקשר בצוות</span>",
            counter: 3
        }
    ],
    
    adventurous = [
        {
            h1: "למידה בסביבה הרפתקנית",
            h2: "שיטת למידה מבוססת משחק<br> מדמה פתרון חידות ומשימות בצורה חוויתית ושיתופית",
            img: "adventurous-photo.png",
            color1: "(43,164,80)",
            color2: "(84,218,125)",
            members: "עד 8",
            time: "כ60 דקות",
            links: [
                "<a href=https://yhanan.wordpress.com/2011/08/18/%D7%9C%D7%91%D7%94-%D7%9C%D7%9E%D7%99%D7%93%D7%94-%D7%91%D7%A1%D7%91%D7%99%D7%91%D7%94-%D7%94%D7%A8%D7%A4%D7%AA%D7%A7%D7%A0%D7%99%D7%AA>קריאת המשך</a>",
                "<a href=https://www.shirideitch.com/escape-rooms>כלי למידה</a>"
            ],
            text: [
                "<ul><p class='sideways-text'>מרכיבים לביצוע</p><li>אירוע</li><li>דילמה</li><li>רצף סיפורי - ההרפתקה עצמה</li></ul>",
                "<ul><p class='sideways-text'>אופן יישום</p><li>בחירת נושא</li><li>הגדרת מטרה</li><li>חקר הנושא לעומק</li><li>בניית סיפור מסגרת ובניית משימות</li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>מצריך חשיבה מעמיקה בפתרון הבעיה וקבלת ההחלטות</li><li>חיבור בין הלומד לתוכן</li></ul>",
                "<ul><p class='sideways-text'>משאבים נדרשים</p><li>פיצוח משאבים בהתאם לסיפור המסגרת</li></ul>"
            ],
            bottom: [
                "<h1>#אתגרו_את_עצמכם</h1>",
                "<p>כיצד סביבת ההדרכה יכולה לתרום לחווית המשחק?</p>",
                "<p>כיצד ניתן לשלב תהליך חקר של החניך במהלך הלמידה?</p>",
                "<p>האם משחק תפקידים יכול לסייע לתהליך בסביבה הרפתקנית?</p>"
            ],
            abilities: "<span>קבלת החלטות, עבודת צוות, אינטגרציה של מידע, פתרון בעיות</span>",
            counter: 4
        }
    ],
    
    colleagues = [
        {
            h1: "למידת עמיתים",
            h2: "לומדים המעבירים תוכן לימודי וממשבים אחד את השני כחלק מתהליך הלמידה",
            img: "colleagues-photo.png",
            color1: "(43,164,80)",
            color2: "(84,218,125)",
            members: "2+ משתתפים",
            time: "מינ' 15 דקות",
            links: [
                "<a href=http://avneyrosha.org.il/resourcecenter/resoursesdocs/ze_ulemad.pdf>קריאת המשך</a>"
            ],
            text: [
                "<ul><p class='sideways-text'>עקרונות ליישום</p><li>חלוקת נושא לכל לומד</li><li>מתן דגשים לאופן העברת החומר</li><li>למידה עצמית ותרגול העברה</li><li>העברת התוכן</li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>אקטיביות הלומד</li><li>מיקום הלומד במרכז</li><li>חכמת ההמונים</li><li>חניכה מאותו הדרג</li></ul>",
                "<ul><p class='sideways-text'>משאבים נדרשים</p><li>מחוון מדויק לבדיקת עבודות בין הלומדים</li><li>המחוון ישמש את שני הצדדים: צד הלומד אשר מבצע את המשימה <br>וצד המבקר אשר מנתח את המשימה ומעריך את הביצועים </li></ul>"
            ],
            bottom: [
                "<h1>#אתגרו_את_עצמכם</h1>",
                "<p>מה תפקיד המדריך בלמידה זו?</p>",
                "<p>באילו הכשרות היית מישם שיטה זו?</p>",
                "<p>כיצד שיטה זו תורמת לפן החברתי?</p>"
            ],
            abilities: "<span>אוריינות טכנולוגית, למידה עצמית אחריותו של הלומד לתהליך הלמידה</span>",
            counter: 5
        }
    ]
    
];

const self = [
    upsideDownClass = [
        {
            h1: "כיתה הפוכה",
            h2: "למידה המשלבת חלק של הקניית הידע בצורה עצמית ולאחריה ביצוע המטלות בכיתה בסביבה מבוקרת",
            img: "upsideDownClass-photo.png",
            color1: "(237,117,20)",
            color2: "(237,161,99)",
            members: "אין מגבלה",
            time: "10-45 דקות",
            links: [
                "<a href=https://teaching-center.tau.ac.il/sites/teachingcenter.tau.ac.il/files/Nira_Hativa.pdf>קריאת המשך</a>",
                "<a href=https://www.youtube.com/watch?v=8xCnzavNiM4>כלי למידה</a>"
            ],
            text: [
                "<ul><p class='sideways-text'>טרם השיעור</p><li>מתן תוכן לימודי-טקסט, מדיה וכו'</li><li>מספר שאלות למענה עצמי</li></ul>",
                "<ul><p class='sideways-text'>במהלך השיעור</p><li>קיום פעילות/ דיון בנושא</li><li>מספר שאלות למענה עצמי</li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>למידה בקצב אישי</li><li>ניצול זמן שיעור באופן יעיל</li></ul>",
                "<ul><p class='sideways-text'>משאבים נדרשים</p><li>שאלות וידוא הבנה</li><li>חומרי לימוד זמינים</li><li>מטלות או משאבים לקיום דיון</li></ul>"
            ],
            bottom: [
                "<h1>#אתגרו_את_עצמכם</h1>",
                "<p>כיצד תהפוך את זמן הכיתה לאפקטיבי יותר?</p>",
                "<p>מה יכול המדריך ללמוד מצפייה בחניך שעושה עבודות בית בכיתה?</p>"
            ],
            abilities: "<span>יכולת למידה עצמית וניהול זמן באופן יעיל תוך כדי סקרנות</span>",
            counter: 0
        }
    ],
    
    selfLearning = [
        {
            h1: "למידה עצמית",
            h2: "למידת נושא באמצעות מדיה או חומר תיאורטי שדורש מהלומד להתמודד לבד עם המטלה",
            img: "selfLearning-photo.png",
            color1: "(237,117,20)",
            color2: "(237,161,99)",
            members: "יחידים",
            time: "20-40 דקות",
            links: [
                "<a href=https://www.gothe.de/ins/il/he/kul/mag/20979682.html>קריאת המשך</a>"
            ],
            text: [
                "<ul><p class='sideways-text'>עקרונות ליישום</p><li>העמדת המידע הדרוש ללומד</li><li>לאפשר משוב לביצועי הלומד</li><li>המידע צריך לכלול שאלות והדגמה של תשובות נכונות</li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>התקדמות עצמית ללא לחץ זמן</li><li>ניתן לשלב מספר סגנונות למידה</li></ul>",
                "<ul><p class='sideways-text'>משאבים נדרשים</p><li>סרטוני הדרכה</li><li>סביבה ממחושבת/ ניידת</li><li>חוברת למידה עצמית</li></ul>"
            ],
            bottom: [
                "<h1>#אתגרו_את_עצמכם</h1>",
                "<p>באיזה שלב בחומר הלימוד הייתם משלבים למידה זו?</p>",
                "<p>מה תפקיד המדריך בשיטה זו?</p>",
                "<p>כיצד תבצעו הערכה לחניכים לאחר <br>הלמידה העצמית?</p>"
            ],
            abilities: "<span>יצירת תחושת מסוגלות עצמית, אחריות אישית ללמידה, <br>מיומנות חברתית</span>",
            counter: 1
        }
    ],
    
    microLearning = [
        {
            h1: "מיקרו למידה",
            h2: "למידה המועברת באמצעות טקסט / סאונד / וידאו / תמונה",
            img: "microLearning-photo.png",
            color1: "(237,117,20)",
            color2: "(237,161,99)",
            members: "יחידים",
            time: "עד 4 דקות",
            links: [
                "<a href=https://www.shirideitch.com/micro-learning-q-and-a>קריאת המשך</a>",
                "<a href=https://promo.com/cat/comparison-animoto/?utm_source=google&utm_medium=cpc&utm_campaign=eu-il_competitor_new-lp&utm_camp_id=2061636866&utm_creative=363080818752&utm_extention_id=&gclid=EAlalQobChMlqr2Or56m5glVybHtCh29SgkFEAAYASAAEgLOAvD_BwE>כלי למידה</a>"
            ],
            text: [
                "<ul><p class='sideways-text'>עקרונות ליישום</p><li>הגדרת קהל יעד</li><li>זיהוי הבעיה והגדרת התוצאה</li><li>זיקוק התכנים לעיקר</li><li>בחירת פורמט להנגשת התוכן</li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>למידה בכל זמן ומקום</li><li>ניצול הזמן בלמידה לא פורמלית</li><li>יכולת יצור והפקה</li></ul>",
                "<ul><p class='sideways-text'>משאבים נדרשים</p><li>סרטון וידאו, טלפון חכם, טאבלט, חידונים, פודקאסט ועוד</li></ul>"
            ],
            bottom: [
                "<h1>#אתגרו_את_עצמכם</h1>",
                "<p>באיזה זמנים להכשרה תעדיף לשלב <br>מיקרו למידה?</p>",
                "<p>אילו תכנים ביחידתך מתאימים להנגשה במיקרו למידה?</p>"
            ],
            abilities: "<span>יצירת תחושת מסוגלות עצמית, אחריות אישית ללמידה,<br> מיומנות חברתית</span>",
            counter: 2
        }
    ]
];

const frontal = [
    frontalLesson = [
        {
            h1: "שיעור פרונטלי",
            h2: "הוראה מובנת היטב בעלת יעדים ומטרות ברורים",
            img: "frontalLesson-photo.png",
            color1: "(167,35,137)",
            color2: "(234,100,203)",
            members: "אין הגבלה",
            time: "40-90 דקות",
            links: [
                "<a href=https://www.edunow.org.il/edunow-media-story-151529>קריאת המשך</a>",
                "<a href=https://m.facebook.com/MooshCreative360>כלי למידה</a>"
            ],
            text: [
                "<ul><p class='sideways-text'>עקרונות ליישום</p><li>הקפדה על סדר לוגי</li><li>קצב למידה מותאם ללומד</li><li>פרזנטציה ברורה</li><li> תרגול והערכת ביצועים</li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>סדר החומר מהקל לקשה</li><li>הבנת החומר בצורה מעמיקה</li><li>מדידת היעילות וקליטת החומר</li><li>סביבה המאפשרת קשב וריכוז</li></ul>",
                "<ul><p class='sideways-text'>משאבים נדרשים</p><li>תרגול החומר</li><li>כלי להצגת החומר</li><li>אזור למידה המאפשר קשר עין</li></ul>"
            ],
            bottom: [
                "<h1>#אתגרו_את_עצמכם</h1>",
                "<p>כיצד שיעור פרונטלי מעביר ידע <br> בצורה הטובה ביותר?</p>",
                "<p>איך למקד את החומר הנלמד?</p>",
                "<p>מה תפקיד המחנך בשיעור פרונטלי?</p>"
            ],
            abilities: "<span>תמצית וסיכום המידע</span>",
            counter: 0
        }
    ],
    
    shortTimes = [
        {
            h1: "למידה<br> בפסקי זמן קצרים",
            h2: "שיטה בה חומר מורכב עובר בפרקי זמן קצרים עם מרווחי פעילות מסיחה ביניהם, המאפשר יצירת זיכרון לטווח ארוך.",
            img: "shortTimes-photo.png",
            color1: "(167,35,137)",
            color2: "(234,100,203)",
            members: "עד 30",
            time: "70 דקות",
            links: [
                "<a href=https://www.edunow.org.il/edunow-media-story-254555>קריאת המשך</a>",
                "<a href=https://digitalpedagogy.co>כלי למידה</a>"
            ],
            text: [
                "<ul class='move'><li>חלוקת השיעור ל3 חלקים:</li><li><table><tr><td class='pink-text'><p>סוג</p></td><td class='pink-text'><p>תוכן</p></td><td class='pink-text'><p>דק'</p></td></tr><tr><td class='pink'><p>חלק א</p></td><td class='pink'><p>העברת מבואות, עקרונות</p></td><td class='pink'><p>20</p></td></tr><tr><td class='green'><p>הפסקה</p></td><td class='green'><p>יצירה או פעילות גופנית</p></td><td class='green'><p>8-10</p> </td></tr><tr><td class='part-b pink'><p>חלק ב</p></td><td class='pink'><p>ביצוע שליפה מהזכרון ע’’י מענה על שאלות מהתוכן</p></td><td class='pink'><p>20</p></td></tr><tr><td class='green'><p>הפסקה</p></td><td class='green'><p>פעילות רגועה או מדיטציה</p> </td><td class='green'><p>8</p></td></tr><tr><td class='pink'><p>חלק ג</p></td><td class='pink'><p>יישום הידע - <br>ניתוח או יצירה על בסיס החומר שנלמד</p></td><td class='pink'><p>10-15</p></td></tr></table></li></ul>",
                "<ul><p class='sideways-text'>יתרונות השיטה</p><li>הטמעת החומר בזכרון לטווח ארוך</li></ul>",
                "<ul><p class='sideways-text'>משאבי נדרשים</p><li>חלק ב - בניית שאלות מנחות</li><li>חלק ג - בניית אופן יישום הידע</li><li>בחירת אופי ההפסקות והתכנים</li></ul>"
            ],
            bottom: [
                "<h1>#אתגרו_את_עצמכם</h1>",
                "<p>היכן הית מיישם שיטה זו בהכשרה?</p>",
                "<p>כיצד ניתן להפוך את שלב שליפת התוכן למעניין?</p>"
            ],
            abilities: "<span>יכולת ניתוח ועיבוד מידע</span>",
            counter: 1
        }
    ]
];

var elCurrDiv = "opening";
var strCurrArray = "";
var nCardCounter = 0;
var strPickedCard = "";

/*
פונקצית טעינה המוסיפה לכפתורים מאזיני לחיצה
*/
$(function(){
     // מוסיף מאזין לחיצה לכפתור ההמשך
    $(".continue").on("click", closeBefore);
    $(".extras").hide();
    // מוסיף מאזיני לחיצה לכפתורי שיטות הלמידה
    for (let i = 0; i < learningMethod.length; i++) {
        $("#" + learningMethod[i].idValue).on("click", (event) => nextPage(i));
    }
    
    // מוסיף מאזין לחיצה לכפתור הפלוס
    $(".plus").on("click", extrasBtn);
    
    // מוסיף מאזין לחיצה לכפתור ההוראות
    $(".info").on("click", extrasBtn);
});

function closeBefore(event) {
    $(".container").hide();
    $(".black").hide();
}

/*
פונקציה המשנה את המסך לפי הכפתור עליו המשתמש לחץ
selectedBtn - הכפתור הנלחץ
*/
function nextPage(selectedBtn) {
    $(".title").text(learningMethod[selectedBtn].title);
    $(".options").html("");
    $(".options").css("flex-wrap","wrap");
    $(".options-nav").show();
    $("#options-prev").on("click", lastPage);
    for (let i = 0; i < learningMethod[selectedBtn].buttons.length; i++) {
        let id = learningMethod[selectedBtn].buttons[i].slice(0, learningMethod[selectedBtn].buttons[i].length - 7);
        let img = '<img src="assets/images/' + learningMethod[selectedBtn].color + '/' + learningMethod[selectedBtn].buttons[i] + '" id="' + id +'"/>';
        $(".options").append(img);
        $("#" + id).on("click", function(event) {
            strPickedCard = this.id;
            showCard.apply(this, [i]);
        });
    }
    switch(learningMethod[selectedBtn].idValue) {
        case("tools-for-group-meetings"):
        strCurrArray = "tools"
        break;
        case("E-Learnng"):
        strCurrArray = "mobileLearning"
        break;
        case("social-learning"):
        strCurrArray = "social"
        break;
        case("self-learning"):
        strCurrArray = "self"
        break;
        case("frontal-learning"):
        strCurrArray = "frontal"
        break;
        default: 
        strCurrArray = ""
    }
}

/*
פונקציה המציגה את הכרטיסייה הנבחרת
*/
function showCard(event) {
    $(".opening").hide();
    $(".cards").css({display: "flex"});
    $(".h1").html(eval(strPickedCard)[0].h1);
    $(".h2").html(eval(strPickedCard)[0].h2);
    $(".img").attr("src", "assets/images/" + eval(strPickedCard)[0].img);
    $(".navbar").css({backgroundColor: "rgb" + eval(strPickedCard)[0].color1});
     for(let i = 0; i <= eval(strPickedCard)[0].text.length - 1; i++) {
        $(".principles").append(eval(strPickedCard)[0].text[i]);
     }
     $(".sideways-text").css({color: "rgb" + eval(strPickedCard)[0].color1});
     $(".members").html(eval(strPickedCard)[0].members);
     $(".time").html(eval(strPickedCard)[0].time);
     $("li::before").css({color: "rgb" + eval(strPickedCard)[0].color1});
     $(".content-left").css({backgroundColor: "rgb" + eval(strPickedCard)[0].color1});
     for(let i = 0; i <= eval(strPickedCard)[0].links.length - 1; i++) {
        $(".abilities").before(eval(strPickedCard)[0].links[i]);
     }
     for(let i = 0; i <= eval(strPickedCard)[0].bottom.length - 1; i++) {
        $(".abilities").before(eval(strPickedCard)[0].bottom[i]);
     }
     $(".abilities").css({backgroundColor: "rgb" + eval(strPickedCard)[0].color2});
     $(".abilities-h2").after(eval(strPickedCard)[0].abilities);
     $(".filler").css({backgroundColor: "rgb" + eval(strPickedCard)[0].color1, color: "rgb" + eval(strPickedCard)[0].color1});
     $("li").css({"--li-color":"rgb" + eval(strPickedCard)[0].color1});
     nCardCounter = eval(strPickedCard)[0].counter;
     $("#back").on("click", lastPage);
     $(".next-btn").on("click", next);
     $(".up").on("click", scrollUp);
}

/*
הפונקציה מחזירה את המשתמש לעמוד הקודם
*/
function lastPage(event) {
    if(this.classList[0] === "x") {
        $(".logo").show();
        $(".arrows-container").show();
        $(".extras").css("display","none");
        $(".infoCard").css("display","none");
        $(".black").hide();
        $(".x").off("click",lastPage);
    } else if(this.id === "options-prev") {
        $(".options").html("");
        $(".options-nav").hide();
        $("#options-prev").off("click", lastPage);
        $(".title").text("שיטות למידה");
        $(".options").html('<img id="tools-for-group-meetings" src="assets/images/toolsForGroupMeetings.svg" alt="tools for group meetings" /><img id="E-Learnng" src="assets/images/ELearnng.svg" alt="E-Learnng" /><img id="social-learning" src="assets/images/socialLearning.svg" alt="social learning" /><img id="self-learning" src="assets/images/selfLearning.svg" alt="self learning" /><img id="frontal-learning" src="assets/images/frontalLearning.svg" alt="frontal learning" />')
        $(".options").css("flex-wrap","wrap-reverse");
        for (let i = 0; i < learningMethod.length; i++) {
            $("#" + learningMethod[i].idValue).on("click", (event) => nextPage(i));
        }
    } else if(this.id === "back") {
        $(".opening").show();
        $(".cards").css({display: "none"}); 
        $(".principles").html("");
    $(".content-left").html('<div class="abilities"><div class="abilities-text"><h2 class="abilities-h2">מיומנויות?</h2></div><img class="pencil" src="assets/images/pencil.png" /></div><div class="filler">g</div> <div class="up"><img class="up-btn" src="assets/images/next.png"/></div>')
        $("#options-prev").on("click", lastPage);
        $(".prev-btn").off("click", lastPage);
        $(".next-btn").off("click", next);
    }
}

function next(event) {
    $(".next-btn").off("click", next);
    $(".prev-btn").off("click", lastPage);
    $(".principles").html("");
    $(".content-left").html('<div class="abilities"><div class="abilities-text"><h2 class="abilities-h2">מיומנויות?</h2></div><img class="pencil" src="assets/images/pencil.png" /></div><div class="filler">g</div> <div class="up"><img class="up-btn" src="assets/images/next.png"/></div>');
    nCardCounter++;
    if(nCardCounter === eval(strCurrArray).length) {
        $(".opening").show();
        $(".cards").css({display: "none"}); 
        $("#options-prev").on("click", lastPage);
    } else {
        strPickedCard = eval(strCurrArray)[nCardCounter];
        showCard();
    }
}

/*
הפונקציה מוסיפה  את הכרטיסייה של "לפני הכל" והוראות למסך
*/
function extrasBtn(event) {
    $(".logo").hide();
    $(".extras").css("display","flex");
    $(".infoCard").css("display","block");
    $(".black").show();
    $(".x").on("click",lastPage);
}

function scrollUp(event) {
   $(".content-container").scrollTop(0);
}