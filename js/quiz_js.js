const questionsAndAnswers = [
    {
        id: 1,
        question: "How many days did it take God to create the world?",
        correctAns: "6",
        wrongAnsOne: "7",
        wrongAnsTwo: "3",
        wrongAnsThree: "10",
        ref: "Gen 1:31",
    },
    {
        id: 2,
        question: "What did God do after He finished creating the universe?",
        correctAns: "Rest",
        wrongAnsOne: "Continue making others",
        wrongAnsTwo: "Sleep",
        wrongAnsThree: "Sing",
        ref: "Gen 2:2",
    },
    {
        id: 3,
        question: "God formed Man from?",
        correctAns: "Dust",
        wrongAnsOne: "Chalk",
        wrongAnsTwo: "Air",
        wrongAnsThree: "Words",
        ref: "Gen 2:7",
    },
    {
        id: 4,
        question: "Who were the first human Beings?",
        correctAns: "Adam and Eve",
        wrongAnsOne: "Abraham and Sarah",
        wrongAnsTwo: "Mary and Joseph",
        wrongAnsThree: "The Israelites",
        ref: "Gen 2",
    },
    {
        id: 5,
        question: "Which tree did God instruct Adam and Eve not to eat from?",
        correctAns: "Tree of the knowledge of good and evil",
        wrongAnsOne: "Tree of the knowledge of God",
        wrongAnsTwo: "Tree of life",
        wrongAnsThree: "Tree of the knowledge of God's plan",
        ref: "Gen 2:17",
    },
    {
        id: 6,
        question: "Which part of Adam's Body did God form Eve from?",
        correctAns: "Ribs",
        wrongAnsOne: "Head",
        wrongAnsTwo: "Hands",
        wrongAnsThree: "Back",
        ref: "Gen 2:21",
    },
    {
        id: 7,
        question: "Fill in the gaps: 'It is not good for man to live _____'",
        correctAns: "alone",
        wrongAnsOne: "together",
        wrongAnsTwo: "in the garden",
        wrongAnsThree: "with animals",
        ref: "Gen 2:18",
    },
    {
        id: 8,
        question: "In what form did the devil come in to tempt Adam and Eve?",
        correctAns: "Serpent",
        wrongAnsOne: "Frog",
        wrongAnsTwo: "Dove",
        wrongAnsThree: "Fire",
        ref: "Gen 3:1",
    },
    {
        id: 9,
        question: "Why did God put two living creatures and a flaming sword sword in the East side of the Garden of Eden?",
        correctAns: "To protect anyone from coming near the tree of life",
        wrongAnsOne: "To protect the garden",
        wrongAnsTwo: "To make the garden beautiful",
        wrongAnsThree: "To ensure the tree of knowledge is safe",
        ref: "Gen 3:24",
    },
    {
        id: 10,
        question: "Who were the two sons of Adam and Eve?",
        correctAns: "Cain and Abel",
        wrongAnsOne: "Ham and Shem",
        wrongAnsTwo: "Joseph and Benjamin",
        wrongAnsThree: "David and Jonathan",
        ref: "Gen 4:1-3",
    },
    {
        id: 11,
        question: "Who was the first person to commit murder?",
        correctAns: "Cain",
        wrongAnsOne: "Moses",
        wrongAnsTwo: "Abel",
        wrongAnsThree: "Joseph's brothers",
        ref: "Gen: 4:8",
    },
    {
        id: 12,
        question: "Who said the following words, 'I don't know, am I my brother's keeper'?",
        correctAns: "Cain",
        wrongAnsOne: "Abel",
        wrongAnsTwo: "Ruben",
        wrongAnsThree: "Esau",
        ref: "Gen 4:9",
    },
    {
        id: 13,
        question: "According to Genesis 24 who did not die but was taken by God?",
        correctAns: "Enoch",
        wrongAnsOne: "Elijah",
        wrongAnsTwo: "Samuel",
        wrongAnsThree: "Methuselah",
        ref: "Gen 24",
    },
    {
        id: 13,
        question: "Who was Noah's father?",
        correctAns: "Lamech",
        wrongAnsOne: "Enoch",
        wrongAnsTwo: "Adam",
        wrongAnsThree: "Methuselah",
        ref: "Gen 5:29",
    },
    {
        id: 14,
        question: "Who were the three sons of Noah?",
        correctAns: "Ham, Shem and Japheth",
        wrongAnsOne: "Ham, Shem and Joseph",
        wrongAnsTwo: "Shem, Benjamin, Ruben",
        wrongAnsThree: "Gad, Naphtali, Judah",
        ref: "Gen 6:9",
    },
    {
        id: 15,
        question: "Why did God send the flood during Noah's time?",
        correctAns: "The people were wicked",
        wrongAnsOne: "The earth needed it",
        wrongAnsTwo: "It was a covenant",
        wrongAnsThree: "Noah asked Him to",
        ref: "Gen 6:13",
    },
    {
        id: 16,
        question: "What did God tell Noah to build to protect himself and his family from the great flood?",
        correctAns: "Ark",
        wrongAnsOne: "Ferry",
        wrongAnsTwo: "Car",
        wrongAnsThree: "Ship",
        ref: "Gen 6:14",
    },
    {
        id: 17,
        question: "How long did the great flood last?",
        correctAns: "40 days",
        wrongAnsOne: "34 years",
        wrongAnsTwo: "40 years",
        wrongAnsThree: "12 months",
        ref: "Gen 7:4",
    },
    {
        id: 18,
        question: "Which Mountain did Noahs ark rest on?",
        correctAns: "Mt. Ararat",
        wrongAnsOne: "Mt. Sinai",
        wrongAnsTwo: "Mt. Everest",
        wrongAnsThree: "The Himalayas",
        ref: "Gen 8:4",
    },
    {
        id: 19,
        question: "Which was the last bird that Noah sent to check if the water had gone down?",
        correctAns: "Dove",
        wrongAnsOne: "Pigeon",
        wrongAnsTwo: "Raven",
        wrongAnsThree: "Eagle",
        ref: "Gen 8:12",
    },
    {
        id: 20,
        question: "What sealed the covenant between Noah's family with all living beings and God about the flood?",
        correctAns: "Rainbow",
        wrongAnsOne: "Dove",
        wrongAnsTwo: "The Sun",
        wrongAnsThree: "Flaming Torch",
        ref: "Gen: 9:13",
    },
    {
        id: 21,
        question: "What was Abraham's name before God changed it?",
        correctAns: "Abram",
        wrongAnsOne: "Abrahm",
        wrongAnsTwo: "Abrahamu",
        wrongAnsThree: "Ibrahim",
        ref: "Gen: 12",
    },
    {
        id: 22,
        question: "What age was Abraham when God called him?",
        correctAns: "75 years",
        wrongAnsOne: "99 years",
        wrongAnsTwo: "500 years",
        wrongAnsThree: "50 years",
        ref: "Gen: 12:4",
    },
    {
        id: 23,
        question: "Why did Abraham tell his wife that she should tell the Egyptians she's his sister?",
        correctAns: "Abraham was afraid that the Egyptians would kill him",
        wrongAnsOne: "Abraham was very old",
        wrongAnsTwo: "God told him to",
        wrongAnsThree: "Abraham was afraid that the Egyptians would kidnapp him",
        ref: "Gen: 12:12",
    },
    {
        id: 24,
        question: "Fill the blanks: 'I will _____ those who _____ you, but I will _____ those who ______ you.'?",
        correctAns: "bless, bless, curse, curse",
        wrongAnsOne: "curse, curse,  bless, bless",
        wrongAnsTwo: "love, love, hate, hate",
        wrongAnsThree: "hate, hate, love, love",
        ref: "Gen: 12:3",
    },
    {
        id: 25,
        question: "Who was Abraham's nephew?",
        correctAns: "Lot",
        wrongAnsOne: "Ishmael",
        wrongAnsTwo: "Isaac",
        wrongAnsThree: "Melchizedek",
        ref: "Gen: 12:5",
    },
    {
        id: 26,
        question: "Why was Abraham still disturbed even after God gave him many promises?",
        correctAns: "He still didn't have a child",
        wrongAnsOne: "He wanted more",
        wrongAnsTwo: "His wife was sad",
        wrongAnsThree: "He was very old",
        ref: "Gen: 16",
    },
    {
        id: 27,
        question: "Why did Sarah laugh when the Lord said she was going to have a child?",
        correctAns: "She thought she was too old to get a child",
        wrongAnsOne: "She was told to laugh",
        wrongAnsTwo: "She saw something funny",
        wrongAnsThree: "She was weary and old",
        ref: "Gen: 18:12",
    },
    {
        id: 28,
        question: "What did God send to destroy Sodom and Gomorrah?",
        correctAns: "Fire and Brimstone",
        wrongAnsOne: "Flood",
        wrongAnsTwo: "Hail stones",
        wrongAnsThree: "Death of first born sons",
        ref: "Gen: 19:23",
    },
    {
        id: 29,
        question: "Who looked back after being instructed not to and turned to a pillar of salt?",
        correctAns: "Lot's wife",
        wrongAnsOne: "Lot",
        wrongAnsTwo: "Lot's daughter",
        wrongAnsThree: "Lot's family",
        ref: "Gen: 19",
    },
    {
        id: 30,
        question: "Why did God tell Abraham to sacrifice his son?",
        correctAns: "To test his faith",
        wrongAnsOne: "To punish him",
        wrongAnsTwo: "To protect him",
        wrongAnsThree: "It was customary",
        ref: "Gen: 22",
    },
    {
        id: 31,
        question: "Who was Isaac's wife?",
        correctAns: "Rebecca",
        wrongAnsOne: "Sarah",
        wrongAnsTwo: "Rachel",
        wrongAnsThree: "Hagar",
        ref: "Gen: 24:15",
    },
    {
        id: 32,
        question: "Why did Rebecca, Isaac's wife children struggle with each other while they were in her womb?",
        correctAns: "Because they represented nations which would be aginst each other",
        wrongAnsOne: "Because they were hungry",
        wrongAnsTwo: "Because they wanted to come out",
        wrongAnsThree: "Because God instructued them to do so",
        ref: "Gen: 25:23",
    },
    {
        id: 33,
        question: "Who among the following is not Jacob's son?",
        correctAns: "Shem",
        wrongAnsOne: "Ruben",
        wrongAnsTwo: "Joseph",
        wrongAnsThree: "Benjanmin",
        ref: "Gen: 49",
    },
    {
        id: 34,
        question: "What name did God give to Jacob after he struggled with His angel?",
        correctAns: "Israel",
        wrongAnsOne: "John",
        wrongAnsTwo: "Amon",
        wrongAnsThree: "Nahor",
        ref: "Gen: 32:28",
    },
    {
        id: 35,
        question: "How many years did Jacob work for Laban to get Rachel?",
        correctAns: "14 years",
        wrongAnsOne: "7 years",
        wrongAnsTwo: "20 years",
        wrongAnsThree: "5 years",
        ref: "Gen: 29:27",
    },
    {
        id: 36,
        question: "What did Joseph do that made the king make him the governor?",
        correctAns: "He interpreted his dreams",
        wrongAnsOne: "He saved the Egyptian army",
        wrongAnsTwo: "He worked for the king",
        wrongAnsThree: "He sang for the king",
        ref: "Gen: 41",
    },
    {
        id: 37,
        question: "Who framed Joseph for rape when he was in Egypt?",
        correctAns: "Potiphar's wife",
        wrongAnsOne: "The king's wife",
        wrongAnsTwo: "Dinar",
        wrongAnsThree: "Other female workers in the palace",
        ref: "Gen: 39:14",
    },
    {
        id: 38,
        question: "In what form did God appear to Moses?",
        correctAns: "A Burning bush",
        wrongAnsOne: "A Dove",
        wrongAnsTwo: "A raven",
        wrongAnsThree: "A man",
        ref: "Exo: 3",
    },
    {
        id: 39,
        question: "What name did God instruct Moses to give when asked who sent him?",
        correctAns: "I AM",
        wrongAnsOne: "JEHOVA",
        wrongAnsTwo: "GOD",
        wrongAnsThree: "KING",
        ref: "Exo: 3:14-15",
    },
    {
        id: 40,
        question: "What did Aaron's rod turn to when he and Moses were before Pharaoh?",
        correctAns: "A snake",
        wrongAnsOne: "A Dove",
        wrongAnsTwo: "A snail",
        wrongAnsThree: "A tree",
        ref: "Exo: 7:9",
    },
    {
        id: 41,
        question: "What was the last plague the Lord sent to Egypt?",
        correctAns: "Death of firstborns",
        wrongAnsOne: "Death of animals",
        wrongAnsTwo: "Blood",
        wrongAnsThree: "Gnats",
        ref: "Exo: 11",
    },
    {
        id: 42,
        question: "In what form did God lead the Israelites in the wilderness?",
        correctAns: "Pillar of Cloud during the day and Pillar of Fire during the night",
        wrongAnsOne: "Pillar of salt during the day and a fountain at night",
        wrongAnsTwo: "Sun during the day and moon during the night",
        wrongAnsThree: "A pillar of cloud during the day and flaming torch at night",
        ref: "Exo: 13:21-22",
    },
    {
        id: 43,
        question: "What sea did God part for the Isrealites to cross?",
        correctAns: "The Red Sea",
        wrongAnsOne: "The Dead Sea",
        wrongAnsTwo: "The Pacific Ocean",
        wrongAnsThree: "The Mediterranian Sea",
        ref: "Exo: 14",
    },
    {
        id: 44,
        question: "What food did God send to the Israelites when they complained of hunger?",
        correctAns: "Manna and Quails",
        wrongAnsOne: "Bread and Fish",
        wrongAnsTwo: "French fries",
        wrongAnsThree: "Unleavened Bread",
        ref: "Exo: 16",
    },
    {
        id: 45,
        question: "Where did the Israelites receive the 10 Commandments?",
        correctAns: "Mt. Sinai",
        wrongAnsOne: "Red Sea",
        wrongAnsTwo: "Mt. Peniel",
        wrongAnsThree: "Canaan",
        ref: "Exo: 20",
    },
    {
        id: 46,
        question: "Which of the following is not among the 10 Commandments?",
        correctAns: "You should not worry",
        wrongAnsOne: "You should not worship any other god",
        wrongAnsTwo: "You should not use the name of God for evil purposes",
        wrongAnsThree: "You should not steal",
        ref: "Exo: 20",
    },
    {
        id: 47,
        question: "Who helped the Israel spies sent by Joshua to Jericho?",
        correctAns: "Rahab",
        wrongAnsOne: "Hagar",
        wrongAnsTwo: "Samson",
        wrongAnsThree: "Mary Magdalene",
        ref: "Josh 2",
    },
    {
        id: 48,
        question: "What did the man with the sword in Joshua 5:14 tell Joshua he was when he was asked if he was for them or against them?",
        correctAns: "The commander of God's army",
        wrongAnsOne: "The Lord",
        wrongAnsTwo: "A spy",
        wrongAnsThree: "The awaited Helper",
        ref: "Josh 5:14",
    },
    {
        id: 49,
        question: "How many days did the Lord instruct Joshua and the soldiers to go around the wall of Jericho?",
        correctAns: "Six days",
        wrongAnsOne: "7 days",
        wrongAnsTwo: "5 days",
        wrongAnsThree: "18 days",
        ref: "Josh 6:3",
    },
    {
        id: 50,
        question: "Who among the following was not a Judge in Israel?",
        correctAns: "Joshua",
        wrongAnsOne: "Othniel",
        wrongAnsTwo: "Samson",
        wrongAnsThree: "Ehud",
        ref: "Judges 3",
    },
    {
        id: 51,
        question: "How many soldiers did Gideon remain with for battle against the Midianites?",
        correctAns: "300",
        wrongAnsOne: "10, 000",
        wrongAnsTwo: "300, 000",
        wrongAnsThree: "144, 000",
        ref: "Judges 7:8",
    },
    {
        id: 52,
        question: "Which animal did Samson kill with his bear hands with the Lord's strength?",
        correctAns: "Lion",
        wrongAnsOne: "Tiger",
        wrongAnsTwo: "Elephant",
        wrongAnsThree: "Cheetah",
        ref: "Judges 14:6",
    },
    {
        id: 53,
        question: "After Samson killed a Lion with his bear hands, what happened to it?",
        correctAns: "A swarm of bees made honey inside if it's body",
        wrongAnsOne: "It rot",
        wrongAnsTwo: "It came back to life",
        wrongAnsThree: "It turned into something else",
        ref: "Judges 14:8",
    },
    {
        id: 54,
        question: "Who betrayed Samson?",
        correctAns: "Delilah",
        wrongAnsOne: "Jezebel",
        wrongAnsTwo: "Ruth",
        wrongAnsThree: "Rahab",
        ref: "Judges 16:18",
    },
    {
        id: 55,
        question: "What was Samson's weakness?",
        correctAns: "Cutting his hair",
        wrongAnsOne: "Weaving his locks into a loom",
        wrongAnsTwo: "Tying him with new ropes",
        wrongAnsThree: "Making him sleep",
        ref: "Judges 16:17",
    },
    {
        id: 56,
        question: "Who among the following was not a Judge in Israel?",
        correctAns: "Joshua",
        wrongAnsOne: "Othniel",
        wrongAnsTwo: "Samson",
        wrongAnsThree: "Ehud",
        ref: "Judges 3",
    },
    {
        id: 57,
        question: "Who was Ruth's husband?",
        correctAns: "Boaz",
        wrongAnsOne: "Joshua",
        wrongAnsTwo: "Elimelech",
        wrongAnsThree: "Ehud",
        ref: "Ruth 3",
    },
    {
        id: 58,
        question: "What was special about Ruth?",
        correctAns: "She became a descendant of Jesus",
        wrongAnsOne: "She was married to Boaz",
        wrongAnsTwo: "She became rich",
        wrongAnsThree: "She became a priest",
        ref: "Ruth 4:17-22",
    },
    {
        id: 59,
        question: "Why was Hannah deeply ditressed?",
        correctAns: "She did not have a child",
        wrongAnsOne: "She was very poor",
        wrongAnsTwo: "She had lost a loved one",
        wrongAnsThree: "She was going to be executed",
        ref: "1 Samuel 1:5",
    },
    {
        id: 60,
        question: "Who said the following words; 'He lifts the poor from the dust and raises the needy from their misery. He makes them companions of Princes and puts them in places of honor.'?",
        correctAns: "Hannah",
        wrongAnsOne: "Priest Eli",
        wrongAnsTwo: "Elkanah",
        wrongAnsThree: "Peninah",
        ref: "1 Samuel 2:8",
    },
    {
        id: 61,
        question: "How many times did the Lord Call Samuel before he realized it was Him?",
        correctAns: "Three times",
        wrongAnsOne: "Six times",
        wrongAnsTwo: "Seven times",
        wrongAnsThree: "2 times",
        ref: "1 Samuel 3:1-9",
    },
    {
        id: 62,
        question: "After the Philistines captured the Lord's covenant box, what happened when they placed the covenant box close to the statue of their god?",
        correctAns: "It fell face downwards in front of the covenant box",
        wrongAnsOne: "It struck the covenant box",
        wrongAnsTwo: "It became live",
        wrongAnsThree: "It fell and rolled over to the Philitine soldier camp",
        ref: "1 Samuel 5:3-5",
    },
    {
        id: 63,
        question: "Which of the following is not a reason why the Israelites asked for a king?",
        correctAns: "The Lord made them ask for a king",
        wrongAnsOne: "They wanted a king that they could see",
        wrongAnsTwo: "They wanted to be like other nations who had kings",
        wrongAnsThree: "Samuel's sons were corrupt and accepted bribes",
        ref: "1 Samuel 8",
    },
    {
        id: 64,
        question: "Who was the first king of Israel?",
        correctAns: "Saul",
        wrongAnsOne: "David",
        wrongAnsTwo: "Othniel",
        wrongAnsThree: "Samuel",
        ref: "1 Samuel 10:1",
    },
    {
        id: 65,
        question: "What did, king Saul do that made him rejected as king and filled with tormenting spirit?",
        correctAns: "He disobeyed God",
        wrongAnsOne: "He fought against God",
        wrongAnsTwo: "He started worshipping Idols",
        wrongAnsThree: "The people were angry at him",
        ref: "1 Samuel 15:22",
    },
    {
        id: 66,
        question: "Who was the father of David?",
        correctAns: "Jesse",
        wrongAnsOne: "Jethro",
        wrongAnsTwo: "Samuel",
        wrongAnsThree: "Moses",
        ref: "1 Samuel 16:3",
    },
    {
        id: 67,
        question: "... I do not judge as people judge. They look at the outward appearance, but I look at the ______",
        correctAns: "heart",
        wrongAnsOne: "soul",
        wrongAnsTwo: "mind",
        wrongAnsThree: "motives",
        ref: "1 Samuel 16:7",
    },
    {
        id: 68,
        question: "Which musical Instrument did David play for Saul",
        correctAns: "Harp",
        wrongAnsOne: "Violin",
        wrongAnsTwo: "Piano",
        wrongAnsThree: "Ukelele",
        ref: "1 Samuel 16:23",
    },
    {
        id: 69,
        question: "Why did David play a harp to king Saul?",
        correctAns: "To calm Saul down when he was tormented by an evil spirit",
        wrongAnsOne: "To calm saul down during distressing times",
        wrongAnsTwo: "Because it was customary for him to do play it for Saul",
        wrongAnsThree: "He wanted to play it",
        ref: "1 Samuel 16:23",
    },
    {
        id: 70,
        question: "Fill the gaps: ... The Lord has delivered me from ______ and ______; He will deliver me from this philistine",
        correctAns: "lions, bears",
        wrongAnsOne: "bears, dragons",
        wrongAnsTwo: "dragons, serpents",
        wrongAnsThree: "lions, serpents",
        ref: "1 Samuel 17:37",
    },
    {
        id: 71,
        question: "What was the name of the giant David fought?",
        correctAns: "Goliath",
        wrongAnsOne: "Nephilim",
        wrongAnsTwo: "Baal",
        wrongAnsThree: "Asherah",
        ref: "1 Samuel 17:41",
    },
    {
        id: 72,
        question: "What did David use to kill the giant, Goliath?",
        correctAns: "a stone",
        wrongAnsOne: "a sword",
        wrongAnsTwo: "a spear",
        wrongAnsThree: "his own hands",
        ref: "1 Samuel 17:49",
    },
    {
        id: 73,
        question: "Why was Saul Jealous of David?",
        correctAns: "He became popular and successful",
        wrongAnsOne: "He married alot of women",
        wrongAnsTwo: "He was handsome",
        wrongAnsThree: "His musical skills were making him noticed",
        ref: "1 Samuel 18:7",
    },
    {
        id: 74,
        question: "Who loved David more than he loved himself?",
        correctAns: "Jonathan",
        wrongAnsOne: "Samuel",
        wrongAnsTwo: "Merab",
        wrongAnsThree: "Eliab",
        ref: "1 Samuel 18:1",
    },
    {
        id: 75,
        question: "How did king Saul die?",
        correctAns: "He threw himself on his own sword",
        wrongAnsOne: "He was killed by the philistines",
        wrongAnsTwo: "David killed him",
        wrongAnsThree: "The young man carrying his weapons killed him",
        ref: "1 Samuel 31:4",
    },
    {
        id: 76,
        question: "Where was David annointed as king of Judah?",
        correctAns: "Hebron",
        wrongAnsOne: "Philistia",
        wrongAnsTwo: "Bethlehem",
        wrongAnsThree: "Gilead",
        ref: "2 Samuel 2:1",
    },
    {
        id: 77,
        question: "Why was David and all the Israelites dancing with all their might on their way from Judah after recovering the covenant box?",
        correctAns: "They were honoring the Lord",
        wrongAnsOne: "David ordered the Isrealites to dance",
        wrongAnsTwo: "They were having a party",
        wrongAnsThree: "It was customary for them to do that",
        ref: "2 Samuel 6:5",
    },
    {
        id: 78,
        question: "Which one of the following did David do that was against God's commands?",
        correctAns: "He slept with Bathsheba",
        wrongAnsOne: "He mistreated the people",
        wrongAnsTwo: "He killed his army commander",
        wrongAnsThree: "He lied to God",
        ref: "2 Samuel 11",
    },
    {
        id: 79,
        question: "Who was the man David gave up to be killed so as to take over his wife?",
        correctAns: "Uriah",
        wrongAnsOne: "Joab",
        wrongAnsTwo: "Jonathan",
        wrongAnsThree: "Mephibosheth",
        ref: "2 Samuel 11",
    },
    {
        id: 80,
        question: "Why did the Lord tell prophet Nathan to name David's child 'Jedidah'?",
        correctAns: "Because He loved him",
        wrongAnsOne: "He did not like the name Solomon",
        wrongAnsTwo: "He was angry with David",
        wrongAnsThree: "Because the child was cursed",
        ref: "2 Samuel 12:25",
    },
    {
        id: 81,
        question: "Who among the following molested Absalom's Sister Tamar?",
        correctAns: "Amnon",
        wrongAnsOne: "Jonadab",
        wrongAnsTwo: "Joab",
        wrongAnsThree: "David",
        ref: "2 Samuel 13",
    },
    {
        id: 82,
        question: "Who was David's son who rebelled against his kingdom?",
        correctAns: "Absalom",
        wrongAnsOne: "Amnon",
        wrongAnsTwo: "Hushai",
        wrongAnsThree: "Shimei",
        ref: "2 Samuel 15",
    },
    {
        id: 83,
        question: "During the war between David's men and the Israelites, whose head got stuck in the branches of an oak tree while riding his mule?",
        correctAns: "Absalom",
        wrongAnsOne: "Joab",
        wrongAnsTwo: "One of king David's soldier",
        wrongAnsThree: "Hushai",
        ref: "2 Samuel 18:9",
    },
    {
        id: 84,
        question: "Finish the verse in 2 Samuel 22:33: God is my strength and power, he makes...",
        correctAns: "my pathway safe",
        wrongAnsOne: "my life great",
        wrongAnsTwo: "sure i am not alone",
        wrongAnsThree: "sure he takes care of me",
        ref: "2 Samuel 22:33",
    },
    {
        id: 85,
        question: "Who said the following words: 'The king who rules with justice and obedience to God is like the sun shining on a cloudless morning'?",
        correctAns: "David",
        wrongAnsOne: "Solomon",
        wrongAnsTwo: "Saul",
        wrongAnsThree: "Moses",
        ref: "2 Samuel 23:3",
    },
    {
        id: 86,
        question: "Who was Solomon's brother who also wanted to be king close to David's death?",
        correctAns: "Adonijah",
        wrongAnsOne: "Shimei",
        wrongAnsTwo: "Gad",
        wrongAnsThree: "Zadok",
        ref: "1 Kings 1",
    },
    {
        id: 87,
        question: "How many years did king David rule Israel?",
        correctAns: "40 years",
        wrongAnsOne: "33 years",
        wrongAnsTwo: "7 years",
        wrongAnsThree: "66 years",
        ref: "1 Kings 2:11",
    },
    {
        id: 88,
        question: "What did Solomon ask the Lord to give him?",
        correctAns: "Wisdom",
        wrongAnsOne: "Prosperity",
        wrongAnsTwo: "Long life",
        wrongAnsThree: "Many Wives",
        ref: "1 Kings 3:9",
    },
    {
        id: 89,
        question: "What did king Solomon use in the case between the two women with a child dispute ?",
        correctAns: "Wisdom",
        wrongAnsOne: "Trickery",
        wrongAnsTwo: "He already knew who was the mother",
        wrongAnsThree: "He asked his officials for the decision",
        ref: "1 Kings 3:27",
    },
    {
        id: 90,
        question: "Who among the following brought the covenant box to Jersualem?",
        correctAns: "David",
        wrongAnsOne: "Solomon",
        wrongAnsTwo: "Uzzah",
        wrongAnsThree: "Absalom",
        ref: "2 Samuel 6",
    },
    {
        id: 91,
        question: "How many proverbs did Solomon compose?",
        correctAns: "3000",
        wrongAnsOne: "1000",
        wrongAnsTwo: "40, 000",
        wrongAnsThree: "12, 000",
        ref: "1 Kings 4:32",
    },
    {
        id: 92,
        question: "Who built the Lord's temple?",
        correctAns: "Solomon",
        wrongAnsOne: "David",
        wrongAnsTwo: "Hiram",
        wrongAnsThree: "Jonathan",
        ref: "1 Kings 5",
    },
    {
        id: 93,
        question: "Who said the following words: 'But can you O God dwell on earth? Not even all heavens can hold you, how much less this house I have built?'",
        correctAns: "Solomon",
        wrongAnsOne: "Samuel",
        wrongAnsTwo: "Zadok the priest",
        wrongAnsThree: "Huram",
        ref: "1 Kings 8:27",
    },
    {
        id: 94,
        question: "Who was the Wisest man in the Old Testament?",
        correctAns: "Solomon",
        wrongAnsOne: "David",
        wrongAnsTwo: "Moses",
        wrongAnsThree: "Samuel",
        ref: "1 Kings 3:12",
    },
    {
        id: 95,
        question: "How many wives did King Solomon Have?",
        correctAns: "700",
        wrongAnsOne: "300",
        wrongAnsTwo: "1000",
        wrongAnsThree: "800",
        ref: "1 Kings 11:3",
    },
    {
        id: 96,
        question: "What was the main thing that caused King Solomon to turn away from God?",
        correctAns: "Marrying Foreign wives",
        wrongAnsOne: "Marrying many wives",
        wrongAnsTwo: "Building his temple",
        wrongAnsThree: "Pride",
        ref: "1 Kings 11:1-3",
    },
    {
        id: 97,
        question: "What commandment did King Solomon break when he turned aginst God?",
        correctAns: "You shall not worship any other god but me",
        wrongAnsOne: "You shall not steal",
        wrongAnsTwo: "You shall not murder",
        wrongAnsThree: "Do not use my name in vain",
        ref: "1 Kings 11",
    },
    {
        id: 98,
        question: "Who succeeded king Solomons throne immediately after His death?",
        correctAns: "Rehoboam",
        wrongAnsOne: "Jeroboam",
        wrongAnsTwo: "Ahijah",
        wrongAnsThree: "Shishak",
        ref: "1 Kings 11:43",
    },
    {
        id: 99,
        question: "Why did the people of Israel reject Rehoboam as thier king?",
        correctAns: "He was to mistreat them more than his father",
        wrongAnsOne: "He was to forcefully marry thei daughters",
        wrongAnsTwo: "They wanted another king",
        wrongAnsThree: "He was too young to lead the people",
        ref: "1 Kings 12:10-11",
    },
    {
        id: 100,
        question: "Where did king Jeroboam place the two golden bull calves he told the Israelites to worship?",
        correctAns: "Bethel and Dan",
        wrongAnsOne: "Shechem and Gad",
        wrongAnsTwo: "Gibeon and Geba",
        wrongAnsThree: "Elon and Ekron",
        ref: "1 Kings 12:29",
    },

]

let setOfQuestionsAndAns = [...new Set(questionsAndAnswers.map((items)=>{
    return items
}))]

let bodyEl = document.querySelector("body")
let headerEl = document.querySelector("header")
let nextQueBtn = document.getElementById("next-que-btn")
let containerEl = document.querySelector(".container")
let levelPassedIndicator = document.querySelector(".level-passed-indicator")
let closeBtn2 = document.getElementById("close-button2")
let levelPassedText = document.querySelector(".level-passed-text")
let answerResponse = document.querySelector(".answer-popup")
let answerResponses = ["God Bless You", "You are Crushing it", "Keep Going", "Congratulations!! You are right", "Awesome", "Wow! Amazing", "Faithful"]
let answerResponseImages = [
                            "images/ribbon2.png",
                            "images/ribbon3.png",
                            "images/bible-cross1.png",
                            "images/bible-cross2.png",
                            "images/golden ribbon.png"]
let answerResponseImage = document.querySelector(".answer-popup img")
let answerResponseText = document.querySelector(".answer-popup h3")

containerEl.innerHTML = setOfQuestionsAndAns.map((item)=>{
    let {question, correctAns, wrongAnsOne, wrongAnsTwo, wrongAnsThree, ref} = item
    return(
        `<div class="question-obj">
        <i class='fa-solid fa-cross questions-cross'></i>
        <div class='reference'><i class="fa-solid fa-lightbulb"></i> Hint</div>
        <div class="hint"><h3>Reference - Read: ${ref}</h3></div>
        <h3 id="question">${question}</h3>
        <div class="answers">
            <button class="answers correct-answer" id="correct-ans">${correctAns}</button>
            <button class="answers wrong-answers" id="wrong-ans1">${wrongAnsOne}</button>
            <button class="answers wrong-answers" id="wrong-ans2">${wrongAnsTwo}</button>
            <button class="answers wrong-answers" id="wrong-ans3">${wrongAnsThree}</button>
        </div>
        </div>`
    )
    
}).join('')
let referenceToggle = document.querySelectorAll(".reference")
let hintEl = document.querySelectorAll(".hint h3")

for (let i = 0; i < referenceToggle.length && hintEl.length; i++) {
    referenceToggle[i].addEventListener("click", ()=>{
        hintEl[i].classList.toggle("active")
    })
    
}

//Game Audio Logic

let RightWrongAudio = [
    "game audio/correct.mp3",
    "game audio/wrong-answer.mp3"
]

let gameMusic = [
    "game audio/Music/how-great-thou-art.mp3",
    "game audio/Music/candles-light-the-way.mp3",
    "game audio/Music/here-i-am-lord.mp3",
    "game audio/Music/o-come-all-ye-faithful.mp3",
    "game audio/Music/the-truth.mp3"
]


let music = new Audio(gameMusic[Math.floor(Math.random()*gameMusic.length)])
music.volume = 0.5
music.setAttribute("loop", "loop")
let musicStopBtn = document.querySelector(".stop-music")
let PlayMusicBtn = document.querySelector(".fa-play")
let nextSongSwitch = document.querySelector(".fa-forward")
let volumeControl = document.querySelector(".volume-control")
music.setAttribute("loop", "loop")

PlayMusicBtn.addEventListener("click", ()=>{
    if (PlayMusicBtn.classList.contains("fa-play")) {
        music.play()
        music.setAttribute("loop", "loop")
        PlayMusicBtn.classList.add("fa-pause")
        PlayMusicBtn.classList.remove("fa-play")
        if (music.played) {
            music.load
            setTimeout(()=>{
                music.play()
            }, 1000)
        }
    }else{
        music.pause()
        PlayMusicBtn.classList.add("fa-play")
        PlayMusicBtn.classList.remove("fa-pause")
    }
})
nextSongSwitch.addEventListener("click", ()=>{
    music.load()
    setTimeout(()=>{
        music = new Audio(gameMusic[Math.floor(Math.random()*gameMusic.length)])
        music.volume = 0.5
        music.setAttribute("loop", "loop")
        music.play()
    }, 1000)
})
musicStopBtn.addEventListener("click", ()=>{
    music.load()
    music = new Audio(gameMusic[Math.floor(Math.random()*gameMusic.length)])
    PlayMusicBtn.classList.remove("fa-pause")
    PlayMusicBtn.classList.add("fa-play")
})

volumeControl.addEventListener("change", ()=>{
    music.volume = (volumeControl.value) /100
})






//wrong and right answers + DATABASE CONNECTIONS

let scoreEl = document.getElementById("score")
let score = JSON.parse(sessionStorage.getItem("userscore"))
let level = 0
let levelProgress =  document.getElementById("level-progress")
let levelProgressVal = JSON.parse(localStorage.getItem("level-value"))
let xhr = new XMLHttpRequest()



let progressSaveBtn = document.getElementById("progress-save-btn")
let saveStatus = document.querySelector(".save-status")
let saveStatusText = document.querySelector(".save-status h3")

function callSaveStatus() {
    saveStatus.classList.add("active")
    setTimeout(()=>{
        saveStatus.classList.remove("active")
    }, 2000)
}



let hourEl = document.querySelector(".hrs")
let minuteEl = document.querySelector(".mins")
let secondsEl = document.querySelector(".secs")
let h = 0
let m = 0
let s = 0
let time


function timer() {
    s++
    if (s>=60) {
        m++
        s=0
        m = (m < 10) ? "0" + m:m
    }
    if (m >=60) {
        h++
        m=0
        h = (h < 10) ? "0" + h:h
    }
    s = (s < 10) ? "0" + s:s
    

    hourEl.textContent = h + " :"
    minuteEl.textContent = m + " :"
    secondsEl.textContent = s 
    time = h + " : " + m + " : " + s

}

setInterval(()=>{
    timer()
}, 1000)


function saveTimeToDatabase() {
    xhr.open("POST", "time-played.php", true)
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status !== 200) {
                saveStatus.classList.add("active")
                saveStatusText.textContent = "Unable to autosave. Please Check your connection"
            }
        }
    }
    xhr.send(JSON.stringify({time}))
}


setInterval(()=>{
    saveTimeToDatabase()
}, 60000)





//levels

let levelProgressAudio = new Audio("game audio/level-win-6416.mp3")
function levelsProgress() {
    setTimeout(()=>{
        levelPassedIndicator.classList.add("active")
        containerEl.classList.add("inactive")
        levelProgressAudio.play()
    }, 3000)
    
    closeBtn2.addEventListener("click", ()=>{
        levelPassedIndicator.classList.remove("active")
        containerEl.classList.remove("inactive")
    })
    
}

//INSERTING SCORE AND LEVEL INTO DATABASE

function insertLevelToDatabase() {
    xhr.open("POST", "level.php", true)
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("level added")
            }else{
                console.log("Level not added")
            }
        }
    }
    xhr.send(JSON.stringify({level:level, score:score}))
}

progressSaveBtn.addEventListener("click", ()=>{
    insertLevelToDatabase()
    saveTimeToDatabase()
})

if (levelProgress) {
    levelProgress.value = JSON.parse(localStorage.getItem("level-value"))
}
if (score) {
    scoreEl.textContent = "Score: " + score
}
let allAnswers = document.querySelectorAll(".answers")
for (let i = 0; i < allAnswers.length; i++) {
    allAnswers[i].style.order = Math.floor(Math.random()*4)
    
}




let allWrongAnswers = document.querySelectorAll(".wrong-answers")
let correctAnswers = document.querySelectorAll(".correct-answer")

//wrong ans selection

for (let i = 0; i < allWrongAnswers.length; i++) {
    allWrongAnswers[i].addEventListener("click", ()=>{
        allWrongAnswers[i].style.backgroundColor = "rgba(255, 0, 0, 0.3)"
        new Audio(RightWrongAudio[1]).volume = 0.5
        new Audio(RightWrongAudio[1]).play()
        nextQueBtn.removeAttribute("disabled")
        if (score<=0) {
            score = 0
        }else{
            score--
        }
        scoreEl.textContent = "Score: " + score
        updateStorage()
        for (let i = 0; i < allAnswers.length; i++) {
            setTimeout(()=>{
                allAnswers[i].setAttribute("disabled", "disabled")
            }, 500)
            
        }
        setTimeout(()=>{
            allWrongAnswers[i].style.backgroundColor = "rgb(198, 198, 198)"
        }, 2000)
    })
}

// Right ans Selection

for (let i = 0; i < correctAnswers.length; i++) {
    correctAnswers[i].addEventListener("click", ()=>{
        correctAnswers[i].style.backgroundColor = "rgba(0, 255, 89, 0.369)"
        new Audio(RightWrongAudio[0]).volume = 0.5
        new Audio(RightWrongAudio[0]).play()
        nextQueBtn.removeAttribute("disabled")

        answerResponse.classList.add("active")
        containerEl.classList.add("inactive")
        score++
        levelProgressVal += 0.5
        updateStorage()
        levelProgress.value = levelProgressVal
        scoreEl.textContent = "Score: " + score

        switch (score) {
            case 5:
                levelsProgress()
                level = 1
                insertLevelToDatabase()
                levelPassedText.textContent = "Level 1 Passed"
                break;
            case 10:
                levelsProgress()
                level = 2
                insertLevelToDatabase()
                levelPassedText.textContent = "Level 2 Passed"
                break;
            case 20:
                levelsProgress()
                insertLevelToDatabase()
                level = 3
                levelPassedText.textContent = "Level 3 Passed"
                break;
            case 30:
                levelsProgress()
                level = 4
                insertLevelToDatabase()
                levelPassedText.textContent = "Level 4 Passed"
                break;
            case 40:
                levelsProgress()
                level = 5
                insertLevelToDatabase()
                levelPassedText.textContent = "Level 5 Passed"
                break;
            case 50:
                levelsProgress()
                level = 6
                insertLevelToDatabase()
                levelPassedText.textContent = "Level 6 Passed"
                break;
            case 60:
                levelsProgress()
                level = 7
                insertLevelToDatabase()
                levelPassedText.textContent = "Level 7 Passed"
                break;
            case 70:
                levelsProgress()
                level = 8
                insertLevelToDatabase()
                levelPassedText.textContent = "Level 8 Passed"
                break;
            case 80:
                levelsProgress()
                level = 9
                insertLevelToDatabase()
                levelPassedText.textContent = "Level 9 Passed"
                break;
            case 90:
                levelsProgress()
                level = 10
                insertLevelToDatabase()
                levelPassedText.textContent = "Level 10 Passed"
                break;
            case 100:
                levelsProgress()
                level = 11
                insertLevelToDatabase()
                levelPassedText.textContent = "Level 11 Passed"
                break;
            default:
                break;
        }


        setTimeout(()=>{
           correctAnswers[i].style.backgroundColor = "rgb(198, 198, 198)"
           answerResponse.classList.remove("active")
           containerEl.classList.remove("inactive")
        }, 2000)
        for (let i = 0; i < allAnswers.length; i++) {
            setTimeout(()=>{
                allAnswers[i].setAttribute("disabled", "disabled")
            }, 500)
            
        }
    })
    
}




//profile picture and name

let playerImage = document.getElementById("player-pfp")
let playerName = document.getElementById("player-name")
let playerCont = document.querySelector(".player")
let playerDetails = document.querySelector(".player-details")

//storage

function updateStorage() {
    sessionStorage.setItem("userscore",  JSON.stringify(score))
    localStorage.setItem("level-value", JSON.stringify(levelProgressVal))
    localStorage.setItem("level", JSON.stringify(levelProgress.value))
}





//next question button logic
let questionObj = document.querySelectorAll(".question-obj")
let allHtml = document.querySelector("html")
for (let i = 0; i < questionObj.length; i++) {
    window.addEventListener("load", ()=>{
        questionObj[i].style.order = Math.floor(Math.random()*100)
        allHtml.style.scrollBehavior = "none"
        setTimeout(()=>{
            window.scrollBy(0, -(document.querySelector("body").clientHeight))
            allHtml.style.scrollBehavior = "smooth"
        }, 1000)   
    })
    
}
nextQueBtn.addEventListener("click", ()=>{
    answerResponseImage.src = answerResponseImages[Math.floor(Math.random()*answerResponseImages.length)]

    answerResponseText.textContent = answerResponses[Math.floor(Math.random()*answerResponses.length)]
    for (let i = 0; i < questionObj.length; i++) {
        window.scrollBy(0, (questionObj[i].clientHeight + 200))
    }
    setTimeout(()=>{
        nextQueBtn.setAttribute("disabled", "disabled")
        for (let i = 0; i < allAnswers.length; i++) {
            allAnswers[i].removeAttribute("disabled")
        
        }
    }, 1000)
})


//calling menu

let menuEl = document.querySelector(".menu")
let menuToggle = document.querySelectorAll(".menu-toggle")

for (let i = 0; i < menuToggle.length; i++) {
    menuToggle[i].addEventListener("click", ()=>{
        menuEl.classList.toggle("active")
    })
    
}

//dark and light mode

let modeCheckbox = document.getElementById("checkbox")
modeCheckbox.checked = false
let bgImage = document.querySelector(".bg-image")

function modeColors() {
    if (modeCheckbox.checked) {
        bodyEl.style.backgroundColor = "white"
        bodyEl.style.color = "black"
        headerEl.style.backgroundColor = "white"
        headerEl.style.color = "black"
        menuEl.style.backgroundColor = "white"
        for (let i = 0; i < questionObj.length; i++) {
            questionObj[i].style.border = "1px solid #a45c1e"
            
        }
        bgImage.src = "images/garden.jpeg"
    }else{
        bodyEl.style.backgroundColor = "rgb(9, 9, 9)"
        bodyEl.style.color = "white"
        headerEl.style.backgroundColor = "rgb(30, 29, 29)"
        headerEl.style.color = "white"
        menuEl.style.backgroundColor = "rgb(23, 23, 23)"
        for (let i = 0; i < questionObj.length; i++) {
            questionObj[i].style.border = "1px solid white"
            
        }
        bgImage.src = "images/bible.jpg"
    }
}
modeCheckbox.addEventListener("input", ()=>{
    modeColors()
})





let aboutInfoBtn = document.getElementById("about-info")
let aboutInfo = document.querySelector(".about")
let closeAboutIcon = document.querySelector(".close-about")

aboutInfoBtn.addEventListener("click", ()=>{
    aboutInfo.classList.toggle("active")
})
closeAboutIcon.onclick = function () {
    aboutInfo.classList.remove("active")
}

// document.addEventListener("contextmenu", (e)=>{
//     e.preventDefault()
//     alert("Right Click")
// })

let detailsCaller = document.getElementById("details-caller")
let userDetails = document.querySelector(".player-progress-details")
let detailsCloser = document.querySelector(".player-progress-details .fa-circle-xmark")
let userProfPic = document.getElementById("user-prof-img")
let imageZoomed = document.querySelector(".image-zoom img")
let imageZoomedCont = document.querySelector(".image-zoom")
let imageZoomedContCloser = document.querySelector(".image-zoom .fa-xmark")


detailsCaller.onclick = ()=>{
    userDetails.classList.add("active")
}
detailsCloser.addEventListener("click", ()=>{
    userDetails.classList.remove("active")
})

userProfPic.addEventListener("click", ()=>{
    imageZoomedCont.classList.add("active")
    imageZoomed.src = userProfPic.src
})

imageZoomedContCloser.onclick = function () {
    imageZoomedCont.classList.remove("active")
}
