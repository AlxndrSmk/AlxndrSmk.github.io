import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hour: '{{count}} hour',
      hours: '{{count}} hours',
      footer: {
        tasks: 'Tasks',
        improve: 'Improve',
        profile: 'Profile',
        home: 'Main',
      },
      improve: {
        balance: 'Your balance',
        description: 'Here you can improve your profile to pull more miniDar',
        potion: 'Speed potion',
        'potion-description':
          'Each potion you drink reduces the time between drawing cards',
        cookie: 'Growth Cookie',
        'cookie-description':
          "'Eat me and you'll get bigger' - that's what was written on the box of cookies that multiplied my results",
        clover: 'Lucky clover',
        'clover-description':
          "It's good when you're lucky. The more clovers you have in your hand, the higher your chance of hitting the jackpot",
        Now: 'Now',
        Improve: 'Improve',
      },
      potion: {
        'name-1': 'Slurp - Slurp',
        'description-1':
          'My Thai supplier assures me that this will help me be a little faster in cards. The only things that bother me are the sand at the bottom of the bottle and the smell of fish',
        'name-2': 'Strong legs',
        'description-2':
          "A friend of a friend helped me recover after the first potion. He recommended a more reliable option. An experimental potion, they say it's popular in Mexico",
        'name-3': "Mom's Kompot",
        'description-3':
          "Her drinks give me strength. Despite the fact that it's a pickle with strawberries. Can I have another glass?",
        'name-4': 'Holy Water',
        'description-4':
          'My father went to India and brought me a miracle drink from some Ganges',
        'name-5': 'Giraffe Milk',
        'description-5':
          'I saw it in a movie - This is what I need! I bought it from a Neighbor who smiled mysteriously at me',
        'name-6': "Conspiracy Theorist's Vaccine",
        'description-6':
          'After watching a video on YouTube, I understood how the world works. A little foil and non-GMO apples. Drink on an empty stomach',
        'name-7': 'Hamster Extract',
        'description-7':
          'A friend sent me a referral link, and then I understood. Fast and hardworking. In general, the extract is ready',
        'name-8': "Witcher's Blessing",
        'description-8':
          'When a man with a sword was chasing me - throwing strange spells in my direction. In general, the extract is ready again',
        'name-9': 'Speed',
        'description-9':
          'Perhaps this is the first, real one. A tincture of coffee and hare dreams',
        'name-10': 'Accidentally Came Out',
        'description-10':
          'When you drop a seed phrase into the general chat - and try to quickly delete it',
        'name-11': 'A Horse Dose of Fun',
        'description-11':
          'There is a sudden desire to download 1000 GB of memes and send them to everyone in a personal message',
      },
      cookie: {
        'name-1': 'The Simplest',
        'description-1':
          'Sometimes magic is in simplicity, as Buddha said, I think.',
        'name-2': 'Star Dust',
        'description-2': 'Did you know that once everything was cosmic dust?',
        'name-3': 'Fate',
        'description-3':
          "Let's boost the power of fate with a little Eggs and Dough.",
        'name-4': 'Sun Tears',
        'description-4': 'Approved by pranoedists from all worlds.',
        'name-5': 'The Living',
        'description-5':
          'Have you ever eaten cookies that comment on the eating process?',
        'name-6': 'Bodybuilder',
        'description-6':
          "Suddenly increases your Yupik's body mass 10 times. Please remove it from your shoulder beforehand.",
        'name-7': 'Dangerous',
        'description-7':
          'The last time, my Yupik ran all night around the house. Brought friends, turned them into GIFs for some reason, crying and apologizing, counting cards on the table.',
        'name-8': 'Adventure',
        'description-8':
          "Awakens a craving for adventures. Eyes increase in size 3 times, legs tap dance, head thinks - Let's have more.",
        'name-9': 'Stallone',
        'description-9':
          'Your strength starts to increase rapidly, music from Rocky begins to play. You start walking around the neighborhood, looking for Chushpans.',
        'name-10': 'Enthusiastic Fan',
        'description-10':
          'An excited fan appears next to you, ready to do anything. "Can I carry your weapon? Clean your shoes? Maybe a massage?"',
        'name-11': 'Curious George',
        'description-11':
          'A person appears next to you who asks questions and calls you Yupik.',
      },
      clover: {
        'name-1': 'Found in the Yard',
        'description-1':
          'Fed it to the Yupik, everything remains the same - the Yupik missed the litter box, is this good luck?',
        'name-2': 'Found in the Garden',
        'description-2':
          "Fed it to the Yupik - now it's acting important. Lifts its head and tail up and says 'Yoop Yoop'. Is this good luck?",
        'name-3': 'Southern Belorussian',
        'description-3':
          'A friend brought it, said something about clear skies. Offered a drink. Gave some device that makes noise. Feed it to the Yupik?',
        'name-4': 'From Peru',
        'description-4':
          'My father became an initiate, says our world is patterns - the realization of fears, sings strange songs.',
        'name-5': 'Rick and Morty',
        'description-5':
          'A crazy old man flies into my room, says preserve it - He is me from the future. A young boy in the form of a pumpkin is me from another world.',
        'name-6': 'Unexpected Jokes',
        'description-6':
          'The Yupik starts inserting slightly obscene and inappropriate jokes between each of your sentences.',
        'name-7': 'Magical',
        'description-7':
          'After 10 jackpots in a row. Casino owners look suspiciously at you - a person who talks to their imaginary friend.',
        'name-8': 'From Wonderland',
        'description-8':
          'Simultaneously shrinks and enlarges. Caterpillars start talking to you, and invisible cats grin at you.',
        'name-9': 'Nostalgia',
        'description-9':
          'Everything around changes sharply, you sit with 40-year-old men behind garages. They talk about how good it was before and call you to build a fort.',
        'name-10': 'Superpowers',
        'description-10':
          'Everything around sparkles, you gain power. Thanos kneels before you. Until an old man with a pumpkin from the fifth clover flies in and turns you into a coat hanger.',
        'name-11': "Cat's Luck",
        'description-11':
          'You start smelling like valerian. Strongly. Very much. Teleports you to Italy.',
      },
      introText: {
        'intro-1':
          "I'm Yupik, and my name is Blue... Tr-r-r... Yeah, I have kids.",
        'intro-2': "I'm Yupik, and my name is Unfinished Movie.",
        'intro-3': "I'm Yupik, and my name is Moustache Lotion.",
        'intro-4': "I'm Yupik, and my name is Dangerous Cookie.",
        'intro-5': "I'm Yupik, and my name is In Love with the Eagle's Gaze.",
        'intro-6':
          "I'm Yupik, and my name is the Unexpected Smell of Adventures.",
        'intro-7': "I'm Yupik, and my name is Mysterious Marmalade.",
        'intro-8':
          "Yupiks love to try new names every day. Today, I'm a Soft Cloud.",
        'intro-9':
          'The third ancient Yupik was born with the question - how can I be useful?',
        'intro-10':
          'The second ancient Yupik was born with the question - where am I?',
        'intro-11':
          'The first ancient Yupik was born with the question - who am I?',
        'intro-12':
          'Yupiks love to meditate and be aware, they also love life.',
        'intro-13': 'And Yupiks believe that we live inside our heads.',
        'intro-14':
          'Yupiks share kindness - they believe the world is a mirror.',
        'intro-15': 'Yupiks love to give gifts - even to themselves.',
        'intro-16': 'YupLand is the universe where Yupiks live.',
        'intro-17':
          'If you open cards 1000 times, you can get the status of a Fortune Teller.',
        'intro-18': 'There are 64 most expensive Yupiks.',
        'intro-19': 'miniDar - virtual gold of the Yupiks.',
        'intro-20':
          'To catch a golden card - try dancing a bit before opening it.',
        'intro-21':
          'Maybe try rubbing your nose with a cucumber - to hit the jackpot.',
        'intro-22': 'Train the clover - then the potion.',
        'intro-23': 'Each card on the table is a symbol of self-knowledge.',
        'intro-24': 'There are 17 ancient Yupiks.',
        'intro-25':
          'Yupiks are born from an Egg - it symbolizes self-knowledge.',
        'intro-26':
          'Manas is the password from 1000 doors. One day it will fit.',
        'intro-27': 'Sleep Potion - everything works only in reverse.',
        'intro-28': 'Extreme Potion - you want to run and joke all night.',
        'intro-29': "Joy Potion - we've achieved something.",
        'intro-30': 'Speed Potion - we now have a lot of rabbits.',
        'intro-31':
          "Invisibility Potion - the right leg always disappears, we're still testing.",
        'intro-32':
          'Truth Potion - the subjects covered in scales and started stuttering.',
      },
      home: {
        LVL: 'LVL',
      },
    },
  },
  ru: {
    translation: {
      hour: '{{count}} час',
      hours: '{{count}} часов',
      fewHours: '{{count}} часа',
      footer: {
        tasks: 'Задания',
        improve: 'Улучшить',
        profile: 'Профиль',
        home: 'Главная',
      },
      improve: {
        balance: 'Твой баланс',
        description:
          'Здесь ты можешь улучшить свой профиль, чтобы вытягивать больше miniDar',
        potion: 'Зелье скорости',
        'potion-description':
          'Каждое выпитое тобой зелье уменьшает время между вытягиванием карт',
        cookie: 'Печенька роста',
        'cookie-description':
          '«Съешь меня - и станешь больше» - так было написано на коробке с печеньками, которые умножали мой результат',
        clover: 'Клевер удачи',
        'clover-description':
          'Хорошо, когда везет. Чем больше клеверов в руке - тем выше шанс вытянуть джеклот',
        Now: 'Сейчас',
        Improve: 'Улучшить',
      },
      potion: {
        'name-1': 'Хлюп - Хлюп',
        'description-1':
          'Мой Тайский поставщик, уверяет что это поможет быть чуть быстрее в картах. Смущает лишь песок на дне бутылки и запах рыбы',
        'name-2': 'Сильные ноги',
        'description-2':
          'Друг моего друга, помогал мне отойти после первого зелья. Посоветовал более надежный вариант. Экспериментальное зелье, говорят в Мексике оно популярно',
        'name-3': 'Мамин Компот',
        'description-3':
          'Ее напитки даруют мне силы. Не смотря на то что это рассол с клубникой. Можно еще стаканчик?',
        'name-4': 'Священная Вода',
        'description-4':
          'Мой отец съездил в Индию, привез мне чудо напиток из какого-то Ганга',
        'name-5': 'Молоко Жирафа',
        'description-5':
          'Увидел его в кино - Это то что мне нужно! Купил у Соседа который загадочно улыбался мне',
        'name-6': 'Вакцина Конспиролога',
        'description-6':
          'После просмотра видео на Ютуб, Я понял устройство мира. Немного фольги и яблок не ГМО. Пить натощак',
        'name-7': 'Вытяжка из Хомяка',
        'description-7':
          'Знакомый скинул рефералку, и тут я понял. Быстрые и трудолюбивые. В общем вытяжка готова',
        'name-8': 'Благословение Ведьмака',
        'description-8':
          'Когда за мной гонялся, мужик с мечом - кидая в мою сторону странные заклинания. В общем вытяжка опять готова',
        'name-9': 'Скорости',
        'description-9':
          'Возможно это первое, настоящее. Настойка из кофе и снов зайцев',
        'name-10': 'Случайно Вышло',
        'description-10':
          'Когда ты скидываешь сид фразу в общий чат - и пытаешься ее быстро удалить',
        'name-11': 'Лошадиная доза Веселья',
        'description-11':
          'Появляется резкое желание скачивать 1000гб мемов и рассылать всем в личку',
      },
      cookie: {
        'name-1': 'Самая простая',
        'description-1': 'Иногда магия в простоте, так сказал по моему Будда',
        'name-2': 'Звездная Пыль',
        'description-2': 'А Вы знали что, когда-то все было космической пылью?',
        'name-3': 'Судьбы',
        'description-3':
          'Прокачаем силу судьбы, нужно лишь немного Яиц и Теста',
        'name-4': 'Солнечные Слезы',
        'description-4': 'Одобрено праноедами со всех миров',
        'name-5': 'Живая',
        'description-5':
          'Вы когда нибудь ели печеньки, которые комментируют процесс их поедания?',
        'name-6': 'Бодибилдера',
        'description-6':
          'Резко увеличивает массу тела вашего Юпика в 10 раз. Предварительно снимите его с плеча',
        'name-7': 'Опасная',
        'description-7':
          'В последний раз, мой Юпик бегал всю ночь по дому. Привел друзей, зачем-то превратил их в Gif, плача и извиняясь считал карты на столе',
        'name-8': 'Приключение',
        'description-8':
          'Просыпается тяга к авантюрам. Глаза увеличиваются в 3 раза, ноги выбивают чечетку, в голове фраза - Давайте еще',
        'name-9': 'Сталлоне',
        'description-9':
          'Ваша сила начинает резко расти, начинает играть музыка из Рокки. Вот вы уже ходите по району, ищите Чушпанов',
        'name-10': 'Восторженный поклонник',
        'description-10':
          'Рядом появляется фанат, который готов сделать все. "Можно я понесу твое оружие? Почищу обувь? Может, массаж?"',
        'name-11': 'Почемучка',
        'description-11':
          'Рядом появляется человек который задает вопросы и называет Вас Юпиком',
      },
      clover: {
        'name-1': 'Нашел во Дворе',
        'description-1':
          'Накормил Юпика, все по прежнему - Юпик сходил мимо лотка, это к удаче?',
        'name-2': 'Нашел в Саду',
        'description-2':
          'Скормил Юпику - ходит Важный. Голову и хвост задрал вверх и говорит Юпь Юпь. Это к удаче?',
        'name-3': 'Южно Белорусский',
        'description-3':
          'Привез друг, говорил что-то про чистое небо. Предлагал выпить. Дал какой-то прибор, который трещит. Скормить Юпику?',
        'name-4': 'Из Перу',
        'description-4':
          'Мой отец стал посвященным, говорит, наш мир узоры - осознание страхов, напевать странные песни.',
        'name-5': 'Рика и Морти',
        'description-5':
          'Влетает в мою комнату сумасшедший дед, говорит сохрани - Он это Я из будущего. Молодой парнишка в виде тыквы, это Я из другого мира.',
        'name-6': 'Неожиданных шуток',
        'description-6':
          'Юпик начинает вставлять между каждым Вашим предложением, слегка пошлую и неуместную шутку.',
        'name-7': 'Магический',
        'description-7':
          'После 10 джекпотов подряд. Владельцы казино, с подозрением смотрят на Вас - человека который общается со своим воображаемым другом.',
        'name-8': 'Из Страны чудес',
        'description-8':
          'Одновременно уменьшает и увеличивает. С Вами начинают разговаривать гусеницы и улыбаться коты невидимки.',
        'name-9': 'Ностальгия',
        'description-9':
          'Все вокруг резко изменяется, Вы сидите с 40 летними мужиками за гаражами. Они говорят как раньше было хорошо, и зовут строить шалаш.',
        'name-10': 'Сверхспособности',
        'description-10':
          'Вокруг все сверкает, Вы получаете могущество. Танос преклоняет колено. Пока не влетает старик с тыквой из 5 клевера и не превращает Вас в Вешалку.',
        'name-11': 'Удача кота',
        'description-11':
          'Начинаете пахнуть валерианкой. Сильно. Очень. Телепортирует Вас в Италию.',
      },
      introText: {
        'intro-1':
          'Я Юпик, и меня зовут - синий... Тррр... Да у меня есть дети.',
        'intro-2': 'Я Юпик, и меня зовут - Недоснятое кино',
        'intro-3': 'Я Юпик, и меня зовут - ласьен для усов.',
        'intro-4': 'Я Юпик, и меня зовут - опасная печенька.',
        'intro-5': 'Я Юпик, и меня зовут - влюбленный взгляд орла.',
        'intro-6': 'Я Юпик, и меня зовут - неожиданный запах приключений.',
        'intro-7': 'Я Юпик, и меня зовут - загадочная мармеладка.',
        'intro-8':
          'Юпики любят каждый день - примерять новые имена. Сегодня, я Мягкое облачко.',
        'intro-9':
          'Третий древний Юпик родился в вопросе - чем Я могу быть полезен?',
        'intro-10': 'Второй древний Юпик родился в вопросе - где Я?',
        'intro-11': 'Первый древний Юпик родился в вопросе - кто Я?',
        'intro-12':
          'Юпики любят медитировать и осознаваться, ещё они любят жизнь.',
        'intro-13': 'А ещё Юпики верят, что мы живём внутри своей головы.',
        'intro-14': 'Юпики делятся добром - они верят что мир это зеркало.',
        'intro-15': 'Юпики любят дарить подарки - себе тоже.',
        'intro-16': 'YupLand - это вселенная где живут Юпики.',
        'intro-17':
          'Если открыть 1000 раз карты, можно получить - статус Гадалки.',
        'intro-18': 'Существуют 64 самых дорогих Юпика.',
        'intro-19': 'miniDar - виртуальное золото Юпиков.',
        'intro-20':
          'Чтобы поймать золотую карту - попробуйте потенцевать перед ее открытием.',
        'intro-21':
          'Возможно стоит натереть нос огурцом - чтобы вытянуть джекпот.',
        'intro-22': 'Качайте клевер - потом зелье.',
        'intro-23': 'Каждая карта на столе - это символ познания себя.',
        'intro-24': 'Существует 17 древних Юпиков.',
        'intro-25':
          'Юпики рождаются из Яйца - оно символизирует познание себя.',
        'intro-26':
          'Manas - это пароль от 1000 дверей. В один из дней он подойдет.',
        'intro-27': 'Зелье сна - все работает, только наоборот.',
        'intro-28': 'Зелье экстрима - ночами хочется бегать и шутить.',
        'intro-29': 'Зелье радости - у нас что-то получилось.',
        'intro-30': 'Зелье скорости - в общем у нас теперь много зайцев.',
        'intro-31':
          'Зелье невидимости - исчезает всегда правая нога, тестим дальше.',
        'intro-32':
          'Зелье правды - испытуемые покрылись чешуёй и начали заикаться.',
      },
      home: {
        LVL: 'УР.',
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  returnObjects: true, // to be able to return objects for plural forms
});

export default i18n;
