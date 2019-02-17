$(document).ready(function() {
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
		//'&ldquo; &rdquo; <br /> &mdash; ',
		'&ldquo;February 18 Quote&rdquo; <br /> &mdash;Attribution'
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
