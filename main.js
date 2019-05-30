$(document).ready(function() {
	let mayArray = [
		'&ldquo;Think in the morning. Act in the noon. Eat in the evening. Sleep in the night.&rdquo; <br /> &mdash;William Blake',
		'&ldquo;Change your life today. Don&rsquo;t gamble on the future, act now, without delay.&rdquo; <br /> &mdash;Simone de Beauvoir',
		'&ldquo;Reading is to the mind what exercise is to the body.&rdquo; <br /> &mdash;Joseph Addison',
		'&ldquo;Your own mind is a sacred enclosure into which nothing harmful can enter expect by your permission.&rdquo; <br /> &mdash;Arnold Bennett',
		'&ldquo;Love consists in this, that two solitudes protect and touch and greet each other.&rdquo; <br /> &mdash;Rainer Maria Rilke',
		'&ldquo;Imagination is the eye of the soul.&rdquo; <br /> &mdash;Joseph Joubert',
		'&ldquo;What would life be if we had no courage to attempt anything?&rdquo; <br /> &mdash;Vincent Van Gogh',
		'&ldquo;It is amazing what you can accomplish if you do not care who gets the credit.&rdquo; <br /> &mdash;Harry S. Truman',
		'&ldquo;An effort made for the happiness of others lifts above ourselves.&rdquo; <br /> &mdash;Lydia M. Child',
		'&ldquo;Tears of joy are like the summer rain drops pierced by sunbeams.&rdquo; <br /> &mdash;Hosea Ballou',
		'&ldquo;I want to do with you what spring does with cherry trees.&rdquo; <br /> &mdash;Pablo Neruda',
		'&ldquo;Mother is the name for God in the lips and hearts of little children.&rdquo; <br /> &mdash;William Makepeace Thackeray',
		'&ldquo;The sun, the earth, love, friends, our very breath are parts of the banquet.&rdquo; <br /> &mdash;Rebecca Harding Davis',
		'&ldquo;If you do not think about your future, you cannot have one.&rdquo; <br /> &mdash;John Galsworthy',
		'&ldquo;Have patience. All things are difficult before they become easy.&rdquo; <br /> &mdash;Saadi',
		'&ldquo;Silence is the sleep that nourishes wisdom.&rdquo; <br /> &mdash;Francis Bacon',
		'&ldquo;Remember upon the conduct of each depends the fate of all.&rdquo; <br /> &mdash;Alexander the Great',
		//'&ldquo; &rdquo; <br /> &mdash; ',
		'&ldquo;May 18 Quote&rdquo; <br /> &mdash;Attribution'
    ]

	let aprilArray = [
		'&ldquo;Wise men speak because they have something to say; Fools because they have to say something.&rdquo; <br /> &mdash;Plato',
		'&ldquo;Success is never final, failure is never fatal. It&rsquo;s courage that counts.&rdquo; <br /> &mdash;John Wooden',
		'&ldquo;The only sure weapon against bad ideas is better ideas.&rdquo; <br /> &mdash;Alfred Whitney Griswold',
		'&ldquo;If you&rsquo;re going through hell, keep going.&rdquo; <br /> &mdash;Winston Churchill',
		'&ldquo;There is always room at the top.&rdquo; <br /> &mdash;Daniel Webster',
		'&ldquo;One way to get the most out of life is to look upon it as an adventure.&rdquo; <br /> &mdash;William Feather',
		'&ldquo;Let us put our minds together and see what life we can make for our children.&rdquo; <br /> &mdash;Sitting Bull',
		'&ldquo;We are going to have peace even if we have to fight for it.&rdquo; <br /> &mdash;Dwight D. Eisenhower',
		'&ldquo;Find something you&rsquo;re passionate about and keep tremendously interested in it.&rdquo; <br /> &mdash;Julia Child',
		'&ldquo;Cherish all your happy moments; they make a fine cushion for old age.&rdquo; <br /> &mdash;Booth Tarkington',
		'&ldquo;All change is not growth, as all movement is not forward.&rdquo; <br /> &mdash;Ellen Glasgow',
		'&ldquo;Perfection is the child of time.&rdquo; <br /> &mdash;Joseph Hall',
		'&ldquo;The glow of one warm thought is to me worth more than money.&rdquo; <br /> &mdash;Thomas Jefferson',
		'&ldquo;Innovation distinguishes between a leader and a follower.&rdquo; <br /> &mdash;Steve Jobs',
		'&ldquo;In this world nothing can be said to be certain, except death and taxes.&rdquo; <br /> &mdash;Benjamin Franklin',
		'&ldquo;A people free to choose will always choose peace.&rdquo; <br /> &mdash;Ronald Reagan',
		'&ldquo;The hardest thing to understand in the world is the income tax.&rdquo; <br /> &mdash;Albert Einstein',
		'&ldquo;Better remain silent, better not even think, if you are not prepared to act.&rdquo; <br /> &mdash;Annie Besant',
		'&ldquo;No matter what people tell you, words and ideas can change the world.&rdquo; <br /> &mdash;Robin Williams',
		'&ldquo;God loves each of us as if there were only one of us.&rdquo; <br /> &mdash;Saint Augustine',
		'&ldquo;A rebirth out of spiritual adversity causes us to become new creatures.&rdquo; <br /> &mdash;James E. Faust',
		'&ldquo;Try to be like the turtle &ndash; at ease in your own shell.&rdquo; <br /> &mdash;Bill Copeland',
		'&ldquo;Either I will find a way, or I will make one.&rdquo; <br /> &mdash;Philip Sidney',
		'&ldquo;What is a soul? It&rsquo;s like electricity &ndash; we don&rsquo;t really know what it is, but it&rsquo;s a force that can light a room.&rdquo; <br /> &mdash;Ray Charles',
		'&ldquo;We must not allow other people&rsquo;s limited perceptions to define us.&rdquo; <br /> &mdash;Virginia Satir',
		'&ldquo;Nobody who ever gave his best regretted it.&rdquo; <br /> &mdash;George Halas',
		'&ldquo;Ten people who speak make more noise than ten thousand who are silent.&rdquo; <br /> &mdash;Napoleon Bonaparte',
		'&ldquo;There is always one moment in childhood when the door opens and lets the future in.&rdquo; <br /> &mdash;Graham Greene',
		'&ldquo;You can&rsquo;t wait for inspiration. You have to go after it with a club.&rdquo; <br /> &mdash;Jack London',
		'&ldquo;People change and forget to tell each other.&rdquo; <br /> &mdash;Lillian Hellman'
    ]

	let marchArray = [
		'&ldquo;When one paints an ideal, one does not need to limit one&rsquo;s imagination.&rdquo; <br /> &mdash;Ellen Key',
		'&ldquo;Let there be work, bread, water and salt for all.&rdquo; <br /> &mdash;Nelson Mandela',
		'&ldquo;The richest love is that which submits to the arbitration of time.&rdquo; <br /> &mdash;Lawrence Durrell',
		'&ldquo;Don&rsquo;t grieve. Anything you lose comes round in another form.&rdquo; <br /> &mdash;Rumi',
		'&ldquo;It is easier to prevent bad habits than to break them.&rdquo; <br /> &mdash;Benjamin Franklin',
		'&ldquo;No one can figure out your worth but you.&rdquo; <br /> &mdash;Pearl Bailey',
		'&ldquo;Life is given to us, we earn it by giving it.&rdquo; <br /> &mdash;Rabindranath Tagore',
		'&ldquo;Tomorrow is only found in the calendar of fools.&rdquo; <br /> &mdash;Og Mandino',
		'&ldquo;Respect is what we owe; love, what we give.&rdquo; <br /> &mdash;Philip James Bailey',
		'&ldquo;Surprise is the greatest gift which life can grant us.&rdquo; <br /> &mdash;Boris Pasternak',
		'&ldquo;One who deceives will always find those who allow themselves to be deceived.&rdquo; <br /> &mdash;Niccolo Machiavelli',
		'&ldquo;Fortune favors the prepared mind.&rdquo; <br /> &mdash;Louis Pasteur',
		'&ldquo;My religion is very simple. My religion is kindness.&rdquo; <br /> &mdash;Dalai Lama',
		'&ldquo;A will finds a way.&rdquo; <br /> &mdash;Orison Swett Marden',
		'&ldquo;Love takes off masks that we fear we cannot live without and know we cannot live within.&rdquo; <br /> &mdash;James Baldwin',
		'&ldquo;Try to keep your soul young and quivering right up to old age.&rdquo; <br /> &mdash;George Sand',
		'&ldquo;Be true to your work, your word, and your friend.&rdquo; <br /> &mdash;John Boyle O&rsquo;Reilly',
		'&ldquo;Who has a harder fight than he who is striving to overcome himself.&rdquo; <br /> &mdash;Thomas &agrave; Kempis',
		'&ldquo;It&rsquo;s hard to be humble, when you&rsquo;re as great as I am.&rdquo; <br /> &mdash;Muhammad Ali',
		'&ldquo;Most people have the will to win, few have the will to prepare to win.&rdquo; <br /> &mdash;Bobby Knight',
		'&ldquo;You exist only in what you do.&rdquo; <br /> &mdash;Federico Fellini',
		'&ldquo;Success is the sum of small efforts &ndash; repeated day in and day out.&rdquo; <br /> &mdash;Robert Collier',
		'&ldquo;Truth is strong, and sometime or other will prevail.&rdquo; <br /> &mdash;Mary Astell',
		'&ldquo;Idealism increases in direct proportion to one&rsquo;s distance from the problem.&rdquo; <br /> &mdash;John Galsworthy',
		'&ldquo;Don&rsquo;t cry because it&rsquo;s over. Smile because it happened.&rdquo; <br /> &mdash;Dr. Seuss',
		'&ldquo;Anyone who has never made a mistake has never tried anything new.&rdquo; <br /> &mdash;Albert Einstein',
		'&ldquo;Avoid popularity; it has many snares, and no real benefit.&rdquo; <br /> &mdash;William Penn',
		'&ldquo;Of all possessions a friend is the most precious.&rdquo; <br /> &mdash;Herodotus',
		'&ldquo;Where there is great love, there are always wishes.&rdquo; <br /> &mdash;Willa Cather',
		'&ldquo;We have all the light we need, we just need to put it in practice.&rdquo; <br /> &mdash;Albert Pike',
		'&ldquo;O, wind, if winter comes, can spring be far behind?&rdquo; <br /> &mdash;Percy Bysshe Shelley'
    ]

	let februaryArray = [
		'&ldquo;Advice is like snow &ndash; the softer it falls, the longer it dwells upon, and the deeper it sinks into the mind.&rdquo; <br /> &mdash;Samuel Taylor Coleridge',
		'&ldquo;Never bend your head. Always hold it high. Look the world straight in the eye.&rdquo; <br /> &mdash;Helen Keller',
		'&ldquo;Wisdom is oftentimes nearer when we stoop than when we soar.&rdquo; <br /> &mdash;William Wordsworth',
		'&ldquo;The roots of all goodness lie in the soil of appreciation for goodness.&rdquo; <br /> &mdash;Dalai Lama',
		'&ldquo;What we really are matters more than what other people think of us.&rdquo; <br /> &mdash;Jawaharlal Nehru',
		'&ldquo;There are years that ask questions and years that answer.&rdquo; <br /> &mdash;Zora Neale Hurston',
		'&ldquo;Expect problems and eat them for breakfast.&rdquo; <br /> &mdash;Alfred A. Montapert',
		'&ldquo;The sole meaning of life is to serve humanity.&rdquo; <br /> &mdash;Leo Tolstoy',
		'&ldquo;Everything that irritates us about others can lead us to an understanding of ourselves.&rdquo; <br /> &mdash;Carl Jung',
		'&ldquo;Life lived for tomorrow will always be just a day away from being realized.&rdquo; <br /> &mdash;Leo Buscaglia',
		'&ldquo;Treasure your relationships, not your possessions.&rdquo; <br /> &mdash;Anthony J. D&rsquo;Angelo',
		'&ldquo;It is the dim haze of mystery that adds enchantment to pursuit.&rdquo; <br /> &mdash;Antoine Rivarol',
		'&ldquo;There is no instinct like that of the heart.&rdquo; <br /> &mdash;Lord Byron',
		'&ldquo;If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.&rdquo; <br /> &mdash;A. A. Milne',
		'&ldquo;Home is any four walls that enclose the right person.&rdquo; <br /> &mdash;Helen Rowland',
		'&ldquo;One word frees us of all the weight and pain in life. That word is love.&rdquo; <br /> &mdash;Sophocles',
		'&ldquo;Do exactly what you would do if you felt most secure.&rdquo; <br /> &mdash;Meister Eckhart',
		'&ldquo;Blessed are the young for they shall inherit the national debt.&rdquo; <br /> &mdash;Herbert Hoover',
		'&ldquo;There is a thin line that separates laughter and pain, comedy and tragedy, humor and hurt.&rdquo; <br /> &mdash;Erma Bombeck',
		'&ldquo;The wish for healing has always been half of health.&rdquo; <br /> &mdash;Lucius Annaeus Seneca',
		'&ldquo;To the mind that is still, the whole universe surrenders.&rdquo; <br /> &mdash;Lao Tzu',
		'&ldquo;The time you enjoy wasting is not wasted time.&rdquo; <br /> &mdash;Bertrand Russell',
		'&ldquo;If you can&rsquo;t describe what you are doing as a process, you don&rsquo;t know what you&rsquo;re doing.&rdquo; <br /> &mdash;W. Edwards Deming',
		'&ldquo;The eternal quest of the individual human being is to shatter his loneliness.&rdquo; <br /> &mdash;Norman Cousins',
		'&ldquo;I believe in being an innovator.&rdquo; <br /> &mdash;Walt Disney',
		'&ldquo;Great dancers are not great because of their technique, they are great because of their passion.&rdquo; <br /> &mdash;Martha Graham',
		'&ldquo;I believe that every human mind feels pleasure in doing good to another.&rdquo; <br /> &mdash;Thomas Jefferson',
		'&ldquo;Perfection is attained by slow degrees; it requires the hand of time.&rdquo; <br /> &mdash;Voltaire',
		'&ldquo;You can never plan the future by the past.&rdquo; <br /> &mdash;Edmund Burke'
    ]

	let januaryArray = [
		'&ldquo;Hope smiles from the threshold of the year to come, whispering, &lsquo;It will be happier.&rsquo;&rdquo; <br /> &mdash;Alfred Lord Tennyson',
		'&ldquo;You must do the things you think you cannot do.&rdquo; <br /> &mdash;Eleanor Roosevelt',
		'&ldquo;To succeed in your mission, you must have single-minded devotion to your goal.&rdquo; <br /> &mdash;A. P. J. Abdul Kalam',
		'&ldquo;It&rsquo;s easier to resist at the beginning than at the end.&rdquo; <br /> &mdash;Leonardo da Vinci',
		'&ldquo;I love you &ndash; I am at rest with you &ndash; I have come home.&rdquo; <br /> &mdash;Dorothy L. Sayers',
		'&ldquo;If you do not change direction, you may end up where you are heading.&rdquo; <br /> &mdash;Lao Tzu',
		'&ldquo;The opportunity is often lost by deliberating.&rdquo; <br /> &mdash;Publilius Syrus',
		'&ldquo;Common sense is not so common.&rdquo; <br /> &mdash;Voltaire',
		'&ldquo;A lie can travel half way around the world while the truth is putting on its shoes.&rdquo; <br /> &mdash;Charles Spurgeon',
		'&ldquo;To live happily is an inward power of the soul.&rdquo; <br /> &mdash;Marcus Aurelius',
		'&ldquo;To a smart girl men are no problem &ndash; they&rsquo;re the answer.&rdquo; <br /> &mdash;Zsa Zsa Gabor',
		'&ldquo;Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.&rdquo; <br /> &mdash;Washington Irving',
		'&ldquo;Lord, make me an instrument of thy peace. Where there is hatred, let me sow love.&rdquo; <br /> &mdash;Francis of Assisi',
		'&ldquo;Facts are stubborn, but statistics are more pliable.&rdquo; <br /> &mdash;Mark Twain',
		'&ldquo;Love dies only when growth stops.&rdquo; <br /> &mdash;Pearl S. Buck',
		'&ldquo;A happy life is one spent in learning, earning, and yearning.&rdquo; <br /> &mdash;Lillian Gish',
		'&ldquo;But what is happiness except the simple harmony between a man and the life he leads?&rdquo; <br /> &mdash;Albert Camus',
		'&ldquo;I am no bird; and no net ensnares me; I am a free human being with an independent will.&rdquo; <br /> &mdash;Charlotte Bronte',
		'&ldquo;We would accomplish many more things if we did not think of them as impossible.&rdquo; <br /> &mdash;Vince Lombardi',
		'&ldquo;A thousand words will not leave so deep an impression as one deed.&rdquo; <br /> &mdash;Henrik Ibsen',
		'&ldquo;Life&rsquo;s most persistent and urgent question is, &lsquo;What are you doing for others?&rsquo;&rdquo; <br /> &mdash;Martin Luther King, Jr.',
		'&ldquo;It&rsquo;s not what happens to you, but how you react to it that matters.&rdquo; <br /> &mdash;Epictetus',
		'&ldquo;This is what I learned: that everybody is talented, original and has something important to say.&rdquo; <br /> &mdash;Brenda Ueland',
		'&ldquo;A man who has not passed through the inferno of his passions has never overcome them.&rdquo; <br /> &mdash;Carl Jung',
		'&ldquo;If the only prayer you ever say in your entire life is thank you, it will be enough.&rdquo; <br /> &mdash;Meister Eckhart',
		'&ldquo;The secret of my influence has always been that it remained secret.&rdquo; <br /> &mdash;Salvador Dali',
		'&ldquo;A work of art is above all an adventure of the mind.&rdquo; <br /> &mdash;Eugene Ionesco',
		'&ldquo;Before anything else, preparation is the key to success.&rdquo; <br /> &mdash;Alexander Graham Bell',
		'&ldquo;Every man dies. Not every man really lives.&rdquo; <br /> &mdash;William Wallace',
		'&ldquo;People don&rsquo;t notice whether it&rsquo;s winter or summer when they&rsquo;re happy.&rdquo; <br /> &mdash;Anton Chekhov',
		'&ldquo;Neither blame or praise yourself.&rdquo; <br /> &mdash;Plutarch'
    ]

	let date = new Date()

	let day = date.getDay()
	let dayOfWeek = ''
	if (day === 0) {
		dayOfWeek = 'Sunday'
	} else if (day === 1) {
		dayOfWeek = 'Monday'
	} else if (day === 2) {
		dayOfWeek = 'Tuesday'
	} else if (day === 3) {
		dayOfWeek = 'Wednesday'
	} else if (day === 4) {
		dayOfWeek = 'Thursday'
	} else if (day === 5) {
		dayOfWeek = 'Friday'
	} else if (day === 6) {
		dayOfWeek = 'Saturday'
	}

	let month = date.getMonth()
	let monthOfYear = ''
	let monthArray = []
	if (month === 0) {
		monthOfYear = 'January'
		monthArray = januaryArray
	} else if (month === 1) {
		monthOfYear = 'February'
		monthArray = februaryArray
	} else if (month === 2) {
		monthOfYear = 'March'
		monthArray = marchArray
	} else if (month === 3) {
		monthOfYear = 'April'
		monthArray = aprilArray
	} else if (month === 4) {
		monthOfYear = 'May'
		monthArray = mayArray
	} else if (month === 5) {
		monthOfYear = 'June'
		monthArray = juneArray
	} else if (month === 6) {
		monthOfYear = 'July'
		monthArray = julyArray
	} else if (month === 7) {
		monthOfYear = 'August'
		monthArray = augustArray
	} else if (month === 8) {
		monthOfYear = 'September'
		monthArray = septemberArray
	} else if (month === 9) {
		monthOfYear = 'October'
		monthArray = octoberArray
	} else if (month === 10) {
		monthOfYear = 'November'
		monthArray = novemberArray
	} else if (month === 11) {
		monthOfYear = 'December'
		monthArray = decemberArray
	}

	let dayOfMonth = date.getDate()

	let year = date.getFullYear()

	let dayOfYear = `<h2>${dayOfWeek}, <br /> ${monthOfYear} ${dayOfMonth}, ${year}</h2>`
	$('#dayOfYear').html(dayOfYear)

    let quote = monthArray[dayOfMonth - 1]

	let quoteOfYear = `<h3>${quote}</h3>`
	$('#quoteOfYear').html(quoteOfYear)
})
